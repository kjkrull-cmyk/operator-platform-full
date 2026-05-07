# Claude Code Handoff Brief

**Document type:** Onboarding / orientation document for AI coding assistant
**Audience:** Claude Code (primarily), future Claude.ai sessions, future Kevin, future engineering hires
**Status:** Authoritative as of May 2026
**Read this first** at the start of every session.

---

## What this document is for

You are working on **Fractional Standard's operator-platform monorepo**. This brief gives you the orientation you need to be productive in the codebase: what the business is, what's built, what's pending, where the source-of-truth documents live, and what conventions to follow.

If you read only this document, you should be able to (a) understand what Fractional Standard does, (b) navigate the rest of the docs, (c) avoid making changes that contradict settled architectural decisions, and (d) know what's deferred to Phase 2 vs. needed for MVP.

If a question seems urgent and the answer isn't here, **the answer is in the docs/ directory**, not in your training data. Read the relevant doc before proceeding.

---

## Table of contents

1. [What Fractional Standard is](#1-what-fractional-standard-is)
2. [The core architectural decisions](#2-the-core-architectural-decisions)
3. [Repository structure](#3-repository-structure)
4. [Documentation map — where to find what](#4-documentation-map--where-to-find-what)
5. [Database state — what the schema looks like today](#5-database-state--what-the-schema-looks-like-today)
6. [Backend state — what's built and what isn't](#6-backend-state--whats-built-and-what-isnt)
7. [Conventions and patterns](#7-conventions-and-patterns)
8. [Pending work — priority order](#8-pending-work--priority-order)
9. [What's deliberately deferred to Phase 2](#9-whats-deliberately-deferred-to-phase-2)
10. [Coordination with the human (Kevin)](#10-coordination-with-the-human-kevin)
11. [Known gotchas](#11-known-gotchas)

---

## 1. What Fractional Standard is

Fractional Standard is a managed fractional executive placement firm. It places senior managers and directors going independent into founder-led businesses ($5M–$30M revenue) as fractional CFOs, COOs, and CMOs under hour-capped monthly retainers.

**The core differentiators:**
1. **Simulation-based assessment** — operators are scored against role-specific scenarios with curveball mid-session, evaluated across 5 rubric dimensions
2. **Stage-matched placement** — operators are matched to clients based on company stage, industry, and operator profile (not just rate or availability)
3. **Compounding AI/data layer** — placement outcome data improves matching over time

**What you should know about the founders:**
- **Kevin Krull** — COO/CPO, 49% equity, full-time. Owns product, talent operations, AI platform, assessment methodology. Lives in WSL2/Ubuntu, Node.js 20. The person you (Claude Code) are working with.
- **Chris** — CEO/CBO, 41% equity, part-time. Owns client acquisition, brand, sales. Operates HubSpot CRM. You don't typically interact with Chris directly.

**Business model summary:**
- Clients pay a monthly retainer (per `pricing_catalog`) for a fractional operator at one of four allocations: Foundation (5 hrs/wk), Growth (10), Scale (15), Embedded (20)
- Operators are paid a fixed monthly fee derived from their hourly rate × allocation, MROUND $25
- Margin target: 40% net, 45% gross
- Year 1 revenue target: ~$1.1M from 12 active engagements
- Launch target: May 2026

**For the full strategic picture:** read `docs/architecture/master_business_plan_v7_2.md`

---

## 2. The core architectural decisions

The 14 settled architecture decisions are the ground truth for everything else. They're in `docs/architecture/may_2026_architecture_decisions.md`. **You must read this document before making any changes that touch:**

- Pricing or billing logic
- Operator status, classification, or pool admission
- Assessment workflow or scoring
- Client onboarding or engagement lifecycle
- AI compliance posture
- Document update workflows

Quick reference of decision titles (full content in the decisions doc):

1. External operator tier system retired; replaced by binary pool admission + internal performance signal
2. Activation fee retired; replaced by MSA + Stripe payment authorization on file
3. Allocation-based pricing with hour-cap-only retainers (no overage billing)
4. Fixed monthly operator fee (NOT hourly billing)
5. Monthly billing cadence (12 periods/year, not 4-week quad)
6. Pool admission decision is binary; signal is internal-only
7. Conversion fees: 4-tier tenure-based per MSA Exhibit D
8. Direct-hire engagements (contingency placement) are a separate workflow per MSA Exhibit E
9. Mid-engagement termination has strict calendar-day proration + 60-day pool priority + discretionary accommodation
10. Operator referral: $500 split ($250 ICA signing + $250 first engagement)
11. AI compliance posture: vendor-exception strategy with curatorial-not-decisional positioning
12. Human-in-the-loop is non-negotiable for assessment scoring
13. Calibration audit every 25 completed assessments
14. Documents, code, and database evolve together

If a feature you're being asked to build seems to conflict with one of these, **stop and surface the conflict to Kevin before proceeding**. Do not make silent decisions that contradict the register. Most apparent conflicts come from forgetting the why, not from the decision being wrong.

---

## 3. Repository structure

```
operator-platform-full/
├── README.md                  # Top-level project description
├── package.json               # Node deps
├── tsconfig.json              # TypeScript config
├── docs/                      # All documentation (this file lives here)
│   ├── architecture/          # Architecture decisions, business plan, AI governance, schema
│   ├── operations/            # Ops playbook, pricing model
│   ├── assessments/           # CFO/COO/CMO scoring prompts + calibration toolkits
│   ├── legal/                 # MSA, ICA, OA, OA amendments (mostly .docx)
│   └── handoff/               # This file
├── src/                       # Application code (operator console scaffolding, etc.)
├── supabase/                  # Supabase project (schema, Edge Functions, config)
│   ├── config.toml
│   └── functions/             # 7 Edge Functions deployed
│       ├── embed-events/      # Embeddings pipeline (currently for GitHub events)
│       ├── search-events/     # Semantic search (currently for GitHub events)
│       ├── synthesize/        # RAG with Claude API
│       ├── process-events/    # Event normalization
│       ├── github-webhook/    # Webhook receiver
│       └── ...
└── node_modules/              # Standard
```

**Retool app JSON** is git-synced — Retool apps are version-controlled in this repo (location TBD; Kevin to confirm exact path during your first session that touches Retool).

**One thing you should do early in your first session:** walk the repo and produce `docs/architecture/repo_structure.md` describing what each top-level directory contains and what each `src/` and `supabase/functions/` subdirectory does. This is genuinely useful and doesn't exist yet.

---

## 4. Documentation map — where to find what

This is the operative reference. When a question comes up, look here first to find the source-of-truth doc.

### Strategic / business questions

| Question | Document |
|---|---|
| What does Fractional Standard do? Why does this business exist? | `docs/architecture/master_business_plan_v7_2.md` |
| What are the unit economics? | `docs/architecture/master_business_plan_v7_2.md` §11–12, `docs/operations/pricing_model_v7.md` |
| What's the go-to-market plan? | `docs/architecture/master_business_plan_v7_2.md` §5 |
| Why was decision X made? | `docs/architecture/may_2026_architecture_decisions.md` |

### Operational questions

| Question | Document |
|---|---|
| How does the client lifecycle work? | `docs/operations/operations_playbook_v8.md` |
| How does the operator workflow work? | `docs/operations/operations_playbook_v8.md` |
| What are the prices for each role × allocation? | `docs/operations/pricing_model_v7.md`, also seeded in `pricing_catalog` table |
| What's an operator paid for a given allocation? | `docs/operations/pricing_model_v7.md`, also computable via `calculate_monthly_operator_fee()` SQL function |

### Assessment questions

| Question | Document |
|---|---|
| What's the CFO assessment scenario? Curveball? Rubric? | `docs/assessments/cfo_scoring_prompt_v1_1.md` |
| Same for COO? | `docs/assessments/coo_scoring_prompt_v1_0.md` |
| Same for CMO? | `docs/assessments/cmo_scoring_prompt_v1_0.md` |
| What does a "Strong" answer look like in dimension X for role Y? | `docs/assessments/calibration_toolkit_{cfo,coo,cmo}_v{2,1,1}.md` |
| How does pool admission decision get computed? | `docs/operations/operations_playbook_v8.md` (workflow), `docs/architecture/may_2026_architecture_decisions.md` decision #6 (logic), workbook formulas |

### Compliance / governance questions

| Question | Document |
|---|---|
| What's our AEDT compliance posture? | `docs/architecture/ai_governance_framework_v2_2.md` (especially §6.5, §8.5) |
| What disclosures do operators need to acknowledge before assessment? | `docs/architecture/ai_governance_framework_v2_2.md` Appendix C |
| When does a calibration audit need to happen? | Every 25 assessments; details in AI Governance Framework §14 |
| Does AI alone make any classification decisions? | No (decision #12). Kevin reviews every AI score; overrides logged in `operator_pool_admissions` |

### Legal questions

| Question | Document |
|---|---|
| What's in the MSA? | `docs/legal/03_Master_Services_Agreement_v1_1.docx` |
| What's in the ICA? | `docs/legal/04_Independent_Contractor_Agreement_v1_1.docx` |
| What's the Operating Agreement? | `docs/legal/Operating_Agreement_signed.pdf` (signed April 16, 2026) |
| Has Amendment 1 been adopted? | `docs/legal/01_Amendment_No_1_to_Operating_Agreement.docx` (drafted; signing status TBD) |

**Important:** the legal documents in `docs/legal/` are stored as `.docx` (and `.pdf` for the signed OA). They are NOT meant to be edited by Claude Code. If a legal change is needed, it goes through counsel.

### Schema / database questions

| Question | Document |
|---|---|
| What tables exist? What's their shape? | `docs/architecture/supabase_migration_plan_v1_0.md` (tables modified or added in May 2026) |
| Why is field X structured the way it is? | The migration plan + the architecture decisions register |
| What enums exist and what are their valid values? | Migration plan + actual database via Supabase MCP query |
| What's the difference between the `candidate` and `operators` tables? | `candidate` = pre-admission record (sourced people, anyone in the funnel); `operators` = post-admission (admitted to the pool). Linked by `operators.candidate_id` |

---

## 5. Database state — what the schema looks like today

**Production project:** `fractional-standard-prod` (id: `kxklbmexqskabbzoanoh`)

**Schema state as of May 2026:**

- **84 tables total** in the `public` schema
- **18 migrations applied** — see Supabase dashboard for the full list
- **The most recent 5 migrations** (May 5, 2026) implement the May 2026 architecture: pool admission fields, allocation labels, monthly operator fees, engagement phases, conversion fee tracking, mid-engagement termination tracking, operator referrals, and the AI compliance audit log
- **pgvector 0.8.0 enabled** — vector tables exist (`text_embeddings`, `document_chunks`, `unified_semantic_search`) but are mostly empty for operator/client purposes (only 6 rows in `events_embeddings` for GitHub events)
- **Row Level Security enforced** on all critical tables with policies for `is_admin()` users + `service_role` + selective operator self-access

**Chunks 1–4 of the migration are applied. Chunk 5 (destructive DROPs) is deferred** until Retool is rebuilt against the new schema. The deferred drops are documented in `docs/architecture/supabase_migration_plan_v1_0.md` §3.

**Critical: do NOT drop any of these columns yet** without explicitly checking that Retool has been updated:
- `engagements.tier`
- `engagements.hour_cap`
- `engagements.overage_policy`
- `assessments.tier`
- `job_orders.tier_preference`
- `job_orders.hour_cap_preference`
- `pricing_catalog` (was recreated; old shape is gone, but related Retool screens may break)

The new replacement columns ARE populated via the Chunk 3 backfill, so anything reading the new fields will work.

---

## 6. Backend state — what's built and what isn't

Be honest about this with yourself. The schema is largely in place; the **business logic that runs on top of the schema is mostly NOT built**.

### What IS built

- Schema (post May 2026 migration)
- 7 Edge Functions for GitHub event analysis (embed-events, search-events, synthesize, process-events, github-webhook, etc.) — these are functional but built for Kevin's own dev work observability, NOT for the operator/client matching platform
- pgvector infrastructure deployed
- 3 helper functions: `calculate_monthly_operator_fee()`, `get_engagement_phase()`, `get_conversion_fee_tier()`
- Auto-generated REST API via PostgREST (CRUD on tables, scoped by RLS) — works but doesn't compose business workflows

### What is NOT built (and you may be asked to build)

**Business logic — operational workflows:**
- Pool admission workflow (compute composite + signal, write to `operator_pool_admissions`, send notification email)
- Matching workflow (take a `job_order`, produce ranked candidates, write to `matching_scores`)
- Invoice generation (Stripe integration, monthly invoice creation per active engagement)
- Payout calculation (monthly operator pay on the 15th)
- Conversion fee calculation when a client converts an operator to FTE
- Mid-engagement termination workflow (proration + 60-day pool priority date + accommodation tracking)
- Pulse check scheduling (biweekly per active engagement)
- Engagement phase auto-transitions (kickoff → active → wind-down based on dates)

**RAG / matching infrastructure for operators (vs. GitHub events):**
- Operator profile embeddings (embed `candidate.bio`, LinkedIn content, assessment transcripts)
- Job order embeddings (embed the job_orders.intake JSON)
- A `match_operators_for_job_order()` SQL function (analogous to existing `match_events`)
- Hybrid search (vector similarity + structured filters: allocation_label, role, location)
- Operator fit profile generation

**API integrations:**
- Stripe webhook receivers (payment events, payment authorization)
- Cal.com webhook receivers (booking events for assessments + client interviews)
- Clockify time tracking ingestion
- HubSpot bidirectional sync (Chris's CRM)
- Email sending (SendGrid / Resend or similar)

**User-facing platforms:**
- Kevin's admin UI in Retool (currently exists on local data; needs reconnection to Supabase + rebuild against new schema)
- Operator portal — DEFERRED to Phase 2 (per existing decision)
- Client/founder portal — DEFERRED to Phase 2

**Observability:**
- Business metrics dashboards (placements/month, pool admission rate, match conversion rate)
- Alerting (engagement at-risk, pulse score below threshold, invoice overdue)

For the full backend gap analysis, check the conversation history if you have access; otherwise this list is the working summary.

---

## 7. Conventions and patterns

### Branching and commits

- **Default branch:** `main`
- **Active development branch as of May 2026:** `add-platform-architecture-notes` — this is where the docs cascade was committed
- **Commit message convention:** Conventional Commits format (`docs:`, `feat:`, `fix:`, `refactor:`, etc.). Existing docs commits all use `docs:` prefix
- **Commit granularity:** small, logical commits. The docs cascade was committed in batches (Batch 1 = 4 files, Batch 2 = 6 files, etc.). Mirror this pattern for code changes — don't bundle unrelated work
- **Push immediately after commit** — there's no PR review process at the moment (single-developer repo)

### Code conventions

- **Language:** TypeScript for Edge Functions, Node.js 20 runtime
- **Module style:** ES modules (the existing Edge Functions use `import` syntax)
- **Edge Function structure:** mirror the patterns in `supabase/functions/` — request handler, error handling, structured response
- **AI/LLM client:** Anthropic Claude (the `synthesize` function uses `claude-opus-4-6`). Use the latest model per Kevin's discretion; default to `claude-opus-4-7` for new work unless told otherwise
- **Embedding model:** `gte-small` (768-dim) per the existing pipeline
- **Database access:** Supabase JS client for Edge Functions; direct SQL via PostgREST or RPC for Retool

### File naming conventions

- **Documents:** snake_case with version suffix: `master_business_plan_v7_2.md`, `cfo_scoring_prompt_v1_1.md`
- **SQL migrations:** date-prefixed underscore-snake-case: `20260505_chunk1c_add_columns_engagements.sql` (Supabase auto-generates this when you use `apply_migration` via MCP)
- **Edge Functions:** kebab-case directory names: `github-webhook/`, `embed-events/`

### Documentation conventions

- **Markdown for everything Claude Code reads or edits.** Word docs (`.docx`) are reserved for documents that go to humans (legal, sometimes Chris)
- **Pandoc-friendly markdown** — use standard syntax, GitHub-flavored extensions OK, avoid weird HTML
- **Version numbering:** semantic-style (v1.0, v1.1, v2.0). Bump minor on substantive changes, major on architectural shifts
- **Changelogs at the top of each doc** when the change is non-trivial — pattern: "What is new in vX.Y" section listing what was changed and why

### When uncertain about a convention

Look for an existing example in the repo. The patterns are usually established in the first or second instance and worth mimicking exactly. If no precedent exists, ask Kevin.

---

## 8. Pending work — priority order

This list is operative as of May 2026. It evolves; consider it a starting orientation rather than a binding contract.

### Critical path (must happen before MVP launch)

1. **Engage attorney to draft operative MSA §18.5–18.7 language.** Placeholders are in `docs/legal/03_Master_Services_Agreement_v1_1.docx`. Counsel needs to draft compliant statutory language for the three vendor-liability subsections per AI Governance Framework v2.2 §8.5. Owner: Kevin (engagement); attorney (drafting). Estimated calendar time: 4–8 weeks depending on attorney responsiveness. **This is the longest critical-path item.**

2. **Privacy Policy.** Required for public website launch. Not yet drafted. Owner: Kevin (drafting) → attorney (review). Blocks website go-live.

3. **Retool rebuild against new schema.** Update Retool screens to query the new May 2026 fields (allocation_label, weekly_hour_allocation, monthly_operator_fee, pool_admission_decision, internal_performance_signal, etc.). Stop reading the deferred-drop columns. Owner: Claude Code (with Kevin review). Estimated effort: 1–2 sprints depending on app complexity.

4. **Operator sourcing pipeline.** Not started. Need a sourcing playbook plus 5–10 named operators per role (CFO/COO/CMO) interested in being assessed. Owner: Kevin. Connects to: assessment workflow.

5. **Client pipeline.** Not started. Chris needs to begin outreach to founder-led companies in the $5M–$30M range. Owner: Chris. Connects to: HubSpot CRM, eventual MSA signing.

6. **Vesting cliff conversation with Chris.** Operating Agreement vesting is 2-year (24 months) per Memory; cliff status uncertain. Worth confirming/adding before launch. Owner: Kevin.

7. **Schema migration Chunk 5 (destructive drops).** Documented in `docs/architecture/supabase_migration_plan_v1_0.md` §3. Apply ONLY after Retool rebuild is complete and tested. Owner: Claude Code (with Kevin approval).

### Important but not critical-path

8. **AI Compliance Program Project Plan v1.2.** v1.1 exists; v1.2 update needed to reflect AI Governance Framework v2.2.
9. **Build operator profile embeddings + matching pipeline.** Extends existing semantic retrieval modules. Phase 1 manual matching works for first 5–10 placements; this becomes important as volume grows.
10. **Stripe integration for invoicing.** Kevin can run manual invoicing for first 3 placements, but this should land before placement 5.
11. **Pulse check scheduling automation.** Manual pulse checks for first few engagements, automate after.
12. **Master System Specification v2 update.** Deferred per Memory until ~placement 10 / month 6.

### Operational debt to address opportunistically

13. **Uncommitted changes in working tree.** As of the docs cascade commit, there were pending changes to `supabase/functions/github-webhook/index.ts` plus untracked `supabase/config.toml` and `supabase/functions/process-events/`. Review these and either commit or revert before serious code work resumes — uncommitted changes cause confusion about working tree state.
14. **`'New File TEST'` and `'Test File Github Webhook'`** in repo root — leftover artifacts from webhook testing. Harmless but worth removing.
15. **Repo structure documentation.** Produce `docs/architecture/repo_structure.md` early in your first session.

---

## 9. What's deliberately deferred to Phase 2

These are NOT pending work — they are explicit choices to defer. Do not build these unless asked.

- **Operator portal (Appsmith).** Operators have no self-service interface in MVP. They interact with Kevin via email. Phase 2.
- **Client/founder portal (Appsmith).** Same. Clients interact with Chris/Kevin via email and Cal.com. Phase 2.
- **CTO and CRO assessment packages.** Extended catalog roles per Pricing Model V7, 0% Y1 allocation. Don't build CTO/CRO assessment infrastructure until actively sourcing those roles.
- **Performance analytics dashboards.** Operational KPIs are tracked via Supabase queries + spreadsheets in MVP. Dedicated dashboards are Phase 2.
- **Advanced ML matching.** Initial matching is hybrid (vector similarity + structured filters). Trained custom matching models are Phase 2 — see AI Governance Framework v2.2 §11A for the framework reservation.
- **Operator marketing site / talent acquisition automation.** Manual sourcing in MVP. Marketing automation is Phase 2.
- **Multi-tenant or white-label.** Single-tenant in MVP.

---

## 10. Coordination with the human (Kevin)

You and Kevin work together. Some operating norms:

- **Kevin is full-time on this venture.** Available most workdays. Comfortable with detailed, technical conversations.
- **Communication style:** direct, unvarnished, data-grounded. No optimism bias. Push back if analysis seems too aggressive or incomplete.
- **Clarification preferences:** Kevin asks clarifying questions when claims need unpacking. Mirror that pattern — don't accept ambiguous requirements; ask before building.
- **Decisions are confirmed through structured Q&A** before substantive work. If Kevin asks you to build feature X and you have meaningful design choices, surface them as a small set of options before coding.
- **Honest numbers over optimism.** If your work surfaces a problem (e.g., a function won't perform at scale, a data assumption is wrong), say so immediately. Kevin would rather hear bad news early.
- **Document gaps as you find them.** If a doc says X but the code does Y, flag it. The Architecture Decisions Register is the source of truth for intentional decisions; if a contradiction exists, it's likely the code/doc that needs alignment.

When Kevin gives you a task and you're not sure about scope, default to producing a small plan first ("here's what I'd do, here are the open questions, do you want me to proceed?") rather than diving into multi-hour work that might miss the mark.

---

## 11. Known gotchas

A non-exhaustive list of things that have tripped people up:

1. **Two senses of "tier."** "Tier" used to mean operator quality (Tier 1/2/3 — RETIRED). It also means allocation capacity (Foundation/Growth/Scale/Embedded — STILL ACTIVE, often called "allocation" now). The Master Business Plan v7.2 cleaned this up by renaming the §4.2 header from "Tier Structure" to "Allocation Structure" and renaming pricing matrix columns from "Tier" to "Allocation." Older docs and any Retool app code may still use "tier" ambiguously. When you see "tier" in code, figure out which sense before changing anything.

2. **The `candidate` table vs. `operators` table.** Two related but distinct entities. `candidate` (38 cols) = pre-admission, anyone sourced/screened. `operators` (10+ cols, plus 7 added in Chunk 1) = post-admission, in the active pool. Linked by `operators.candidate_id`. Don't merge them; the distinction matters for pool admission logic.

3. **The `assessments` table has `simulation_dimensions` as JSONB**, not as separate columns. This is intentional — the dimension names differ by role (CFO has Financial Modeling; COO has Operational Diagnosis; etc.). Don't try to normalize into per-dimension columns.

4. **`engagement_phase` is computed AND stored.** The `get_engagement_phase()` function computes the phase based on dates; the `engagement_phase` column stores it. They should agree. If you change one, change the other or use the function as the source of truth.

5. **Operator pay is fixed monthly, not hourly.** `engagements.monthly_operator_fee` is the operative pay value. `operator_hourly_rate` is the rate used to derive it but is NOT the pay basis. Hours logged via Clockify are utilization signal only (decision #4).

6. **The MSA §18.5–18.7 placeholders are NOT operative legal language.** They are drafting briefs for counsel. Don't reference them as if they were settled — they're TODOs.

7. **The `direct_hire_engagements` table is separate from `engagements`.** Don't query `engagements` for direct-hire data or vice versa. Different lifecycle, different fee structure (decision #8).

8. **AI scoring is NEVER the final word.** Every AI-generated assessment score is reviewed by Kevin (decision #12). Code that reads `assessments` should expect that scores may have been overridden; check the audit trail in `operator_pool_admissions.human_overrode_ai`.

9. **Stale columns will exist until Chunk 5 of the migration is applied.** Don't write new code against `engagements.tier`, `assessments.tier`, etc. Use the new fields. The old fields are scheduled for drop but exist as backstop until Retool is cut over.

10. **The conversation in claude.ai (where Kevin and I plan strategy) is your prior context, but you can't read it directly.** All consequential decisions from that conversation are documented in `docs/architecture/may_2026_architecture_decisions.md`. If something seems missing from the docs, ask Kevin — don't guess.

---

## At the end of every session

Three habits to internalize:

1. **Check `git status` before ending the session.** Leave the working tree in a clean state — either committed or explicitly stashed. Pending uncommitted changes confuse the next session.

2. **Update relevant docs in the same change set as code.** Per decision #14 in the Architecture Decisions Register: docs, code, and database evolve together. If you change a workflow in code, update the Operations Playbook in the same commit.

3. **If you discovered something this session that future-you should know, add it to the appropriate doc.** "Known gotchas" (§11 of this brief) is one good home for cross-cutting lessons. Specific architectural decisions go in the Architecture Decisions Register.

The goal is that the next session you start (or that another Claude Code instance starts) is more oriented than this one was.

---

*This document is the operative orientation for Claude Code working on Fractional Standard's operator-platform. Last meaningful update: May 2026 with the docs cascade. Update this brief when significant work lands or when conventions evolve.*
