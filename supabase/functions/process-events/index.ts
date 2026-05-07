import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (_req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  // 1. Fetch unprocessed events
  const { data: rawEvents, error: fetchError } = await supabase
    .from("events_raw")
    .select("*")
    .is("processed_at", null)
    .limit(50);

  if (fetchError) {
    console.error("Fetch error:", fetchError);
    return new Response(JSON.stringify({ error: fetchError.message }), { status: 500 });
  }

  if (!rawEvents || rawEvents.length === 0) {
    return new Response(JSON.stringify({ processed: 0, message: "No unprocessed events" }), { status: 200 });
  }

  console.log(`Processing ${rawEvents.length} events`);

  const SUPPORTED_EVENTS = new Set([
    "push",
    "pull_request",
    "pull_request_review",
    "pull_request_review_comment",
    "issues",
    "issue_comment",
    "workflow_run",
  ]);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const raw of rawEvents) {
    const { id, event_type, payload } = raw;

    // 2. Skip unsupported event types but still mark as processed
    if (!SUPPORTED_EVENTS.has(event_type)) {
      await supabase
        .from("events_raw")
        .update({ processed_at: new Date().toISOString() })
        .eq("id", id);
      skipCount++;
      continue;
    }

    // 3. Normalize the event
    let normalized: Record<string, unknown> | null = null;

    try {
      normalized = normalizeEvent(event_type, payload, id);
    } catch (err) {
      console.error(`Normalization error for event ${id}:`, err);
      errorCount++;
      continue;
    }

    if (!normalized) {
      skipCount++;
      await supabase
        .from("events_raw")
        .update({ processed_at: new Date().toISOString() })
        .eq("id", id);
      continue;
    }

    // 4. Insert into events_normalized
    const { error: insertError } = await supabase
      .from("events_normalized")
      .insert(normalized);

    if (insertError) {
      console.error(`Insert error for event ${id}:`, insertError);
      errorCount++;
      continue;
    }

    // 5. Mark raw event as processed
    await supabase
      .from("events_raw")
      .update({ processed_at: new Date().toISOString() })
      .eq("id", id);

    successCount++;
  }

  const summary = { processed: successCount, skipped: skipCount, errors: errorCount };
  console.log("Done:", summary);
  return new Response(JSON.stringify(summary), { status: 200 });
});

// ── Normalization router ──────────────────────────────────────────────────────

function normalizeEvent(
  eventType: string,
  payload: Record<string, unknown>,
  rawEventId: string
): Record<string, unknown> | null {
  switch (eventType) {
    case "push":           return normalizePush(payload, rawEventId);
    case "pull_request":   return normalizePR(payload, rawEventId);
    case "pull_request_review": return normalizePRReview(payload, rawEventId);
    case "pull_request_review_comment": return normalizePRReviewComment(payload, rawEventId);
    case "issues":         return normalizeIssue(payload, rawEventId);
    case "issue_comment":  return normalizeIssueComment(payload, rawEventId);
    case "workflow_run":   return normalizeWorkflowRun(payload, rawEventId);
    default:               return null;
  }
}

// ── Per-event normalizers ─────────────────────────────────────────────────────

function normalizePush(p: Record<string, unknown>, rawEventId: string) {
  const repo = (p.repository as Record<string, unknown>);
  const commits = (p.commits as Record<string, unknown>[]) ?? [];
  const headCommit = (p.head_commit as Record<string, unknown>) ?? commits[0] ?? {};
  const ref = (p.ref as string) ?? "";
  const branch = ref.replace("refs/heads/", "");

  return {
    raw_event_id: rawEventId,
    event_type: "push",
    repo_name: repo?.full_name ?? null,
    actor: (p.pusher as Record<string, unknown>)?.name ?? null,
    action: null,
    branch: branch || null,
    commit_sha: (p.after as string) ?? null,
    commit_message: (headCommit.message as string) ?? null,
    pr_number: null,
    issue_number: null,
    occurred_at: (headCommit.timestamp as string) ?? new Date().toISOString(),
    metadata: {
      commit_count: commits.length,
      before: p.before,
      after: p.after,
      commits: commits.map((c) => ({
        id: c.id,
        message: c.message,
        author: (c.author as Record<string, unknown>)?.name,
        timestamp: c.timestamp,
      })),
    },
  };
}

function normalizePR(p: Record<string, unknown>, rawEventId: string) {
  const pr = p.pull_request as Record<string, unknown>;
  const repo = p.repository as Record<string, unknown>;

  return {
    raw_event_id: rawEventId,
    event_type: "pull_request",
    repo_name: (repo?.full_name as string) ?? null,
    actor: ((pr?.user as Record<string, unknown>)?.login as string) ?? null,
    action: (p.action as string) ?? null,
    branch: ((pr?.head as Record<string, unknown>)?.ref as string) ?? null,
    commit_sha: ((pr?.head as Record<string, unknown>)?.sha as string) ?? null,
    commit_message: (pr?.title as string) ?? null,
    pr_number: (pr?.number as number) ?? null,
    issue_number: null,
    occurred_at: (pr?.updated_at as string) ?? new Date().toISOString(),
    metadata: {
      title: pr?.title,
      body: pr?.body,
      state: pr?.state,
      merged: pr?.merged,
      merged_at: pr?.merged_at,
      base_branch: (pr?.base as Record<string, unknown>)?.ref,
      additions: pr?.additions,
      deletions: pr?.deletions,
      changed_files: pr?.changed_files,
    },
  };
}

function normalizePRReview(p: Record<string, unknown>, rawEventId: string) {
  const review = p.review as Record<string, unknown>;
  const pr = p.pull_request as Record<string, unknown>;
  const repo = p.repository as Record<string, unknown>;

  return {
    raw_event_id: rawEventId,
    event_type: "pull_request_review",
    repo_name: (repo?.full_name as string) ?? null,
    actor: ((review?.user as Record<string, unknown>)?.login as string) ?? null,
    action: (p.action as string) ?? null,
    branch: null,
    commit_sha: (review?.commit_id as string) ?? null,
    commit_message: (review?.body as string) ?? null,
    pr_number: (pr?.number as number) ?? null,
    issue_number: null,
    occurred_at: (review?.submitted_at as string) ?? new Date().toISOString(),
    metadata: {
      state: review?.state,
      html_url: review?.html_url,
      pr_title: pr?.title,
    },
  };
}

function normalizePRReviewComment(p: Record<string, unknown>, rawEventId: string) {
  const comment = p.comment as Record<string, unknown>;
  const pr = p.pull_request as Record<string, unknown>;
  const repo = p.repository as Record<string, unknown>;

  return {
    raw_event_id: rawEventId,
    event_type: "pull_request_review_comment",
    repo_name: (repo?.full_name as string) ?? null,
    actor: ((comment?.user as Record<string, unknown>)?.login as string) ?? null,
    action: (p.action as string) ?? null,
    branch: null,
    commit_sha: (comment?.commit_id as string) ?? null,
    commit_message: (comment?.body as string) ?? null,
    pr_number: (pr?.number as number) ?? null,
    issue_number: null,
    occurred_at: (comment?.created_at as string) ?? new Date().toISOString(),
    metadata: {
      path: comment?.path,
      line: comment?.line,
      diff_hunk: comment?.diff_hunk,
      html_url: comment?.html_url,
      pr_title: pr?.title,
    },
  };
}

function normalizeIssue(p: Record<string, unknown>, rawEventId: string) {
  const issue = p.issue as Record<string, unknown>;
  const repo = p.repository as Record<string, unknown>;

  return {
    raw_event_id: rawEventId,
    event_type: "issues",
    repo_name: (repo?.full_name as string) ?? null,
    actor: ((issue?.user as Record<string, unknown>)?.login as string) ?? null,
    action: (p.action as string) ?? null,
    branch: null,
    commit_sha: null,
    commit_message: null,
    pr_number: null,
    issue_number: (issue?.number as number) ?? null,
    occurred_at: (issue?.updated_at as string) ?? new Date().toISOString(),
    metadata: {
      title: issue?.title,
      body: issue?.body,
      state: issue?.state,
      labels: (issue?.labels as Record<string, unknown>[])?.map((l) => l.name),
      assignees: (issue?.assignees as Record<string, unknown>[])?.map((a) => a.login),
      html_url: issue?.html_url,
    },
  };
}

function normalizeIssueComment(p: Record<string, unknown>, rawEventId: string) {
  const comment = p.comment as Record<string, unknown>;
  const issue = p.issue as Record<string, unknown>;
  const repo = p.repository as Record<string, unknown>;

  return {
    raw_event_id: rawEventId,
    event_type: "issue_comment",
    repo_name: (repo?.full_name as string) ?? null,
    actor: ((comment?.user as Record<string, unknown>)?.login as string) ?? null,
    action: (p.action as string) ?? null,
    branch: null,
    commit_sha: null,
    commit_message: (comment?.body as string) ?? null,
    pr_number: null,
    issue_number: (issue?.number as number) ?? null,
    occurred_at: (comment?.created_at as string) ?? new Date().toISOString(),
    metadata: {
      comment_body: comment?.body,
      issue_title: issue?.title,
      issue_state: issue?.state,
      html_url: comment?.html_url,
    },
  };
}

function normalizeWorkflowRun(p: Record<string, unknown>, rawEventId: string) {
  const run = p.workflow_run as Record<string, unknown>;
  const repo = p.repository as Record<string, unknown>;

  return {
    raw_event_id: rawEventId,
    event_type: "workflow_run",
    repo_name: (repo?.full_name as string) ?? null,
    actor: ((run?.triggering_actor as Record<string, unknown>)?.login as string) ?? null,
    action: (p.action as string) ?? null,
    branch: (run?.head_branch as string) ?? null,
    commit_sha: (run?.head_sha as string) ?? null,
    commit_message: null,
    pr_number: null,
    issue_number: null,
    occurred_at: (run?.updated_at as string) ?? new Date().toISOString(),
    metadata: {
      name: run?.name,
      status: run?.status,
      conclusion: run?.conclusion,
      workflow_id: run?.workflow_id,
      run_number: run?.run_number,
      run_attempt: run?.run_attempt,
      html_url: run?.html_url,
      event: run?.event,
    },
  };
}
