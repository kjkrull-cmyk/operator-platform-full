# Launch Checklist v1.0

**Document type:** Operational launch plan
**Audience:** Kevin (primary), Chris, Claude Code, future Claude.ai sessions
**Status:** Authoritative as of May 2026
**Last updated:** May 2026

## What "launched" means

**Launch = three paid placements completed + basic public website live + full operational readiness.**

This is the bar Kevin set. Three is meaningful because it's enough to validate the model end-to-end (sourcing → assessing → matching → placing → invoicing → operating engagement → pulse-checking) but small enough that learning happens before scale-up. Public website is the front door; "operational readiness" means every workflow can run when it needs to, not as a fire drill.

Sub-thresholds along the way:

- **Soft launch:** one placement with a friendly client and a known operator, intentional dry run, used to find what breaks before paid placements
- **First paid placement:** the moment from "preparing" to "in business"
- **Three paid placements:** the launch threshold

## How to read this document

Three views of the same plan:

1. **By dependency** (§3) — the critical path, what blocks what
2. **By owner** (§4) — what each person/role does, in order
3. **By time horizon** (§5) — first 7 days, first 30 days, first 90 days, launch event

Then the supporting material:

4. **Soft launch playbook** (§6) — the dry-run conversation
5. **Test conversation playbooks** (§7) — operator and client ICP scripts
6. **Document gaps register** (§8) — what's missing or stale
7. **Risk register** (§9) — what can go wrong and how you'd respond
8. **Definition of done — the launch readiness gate** (§10)

## 1. Current state (as of May 2026)

| Area | Status |
|---|---|
| Documentation | ✅ Complete — 22 files committed across architecture, operations, assessments, legal, handoff |
| Database schema | ✅ Chunks 1–4 applied to production; Chunk 5 (destructive drops) deferred |
| Edge Functions | ⚠️ 7 deployed, but built for GitHub event analysis — operational matching infrastructure not built |
| Retool | ⚠️ "Between 3 and 4" — local data, partial, needs reconnection to Supabase + rebuild |
| Legal package | ⚠️ Drafts ready, attorney not engaged |
| Operator pipeline | ⚠️ Not started |
| Client pipeline | ⚠️ Not started |
| Public website | ⚠️ Not started |
| Privacy Policy | ⚠️ Not drafted |
| Working tree | ✅ Clean — operational debt resolved |
| Branch | ⚠️ `add-platform-architecture-notes` is 8 commits ahead of `main` — merge pending |

## 2. The dependency tree

The critical path runs through legal and Retool. Everything else can run in parallel once those two are unblocked.

```
                  ┌──────────────────────────────────┐
                  │  Engage attorney (week 1)        │ ← LONGEST CRITICAL PATH (4–8 wks)
                  └────────────────┬─────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
      ┌──────────────┐      ┌──────────────┐    ┌──────────────┐
      │ MSA §18.5–7  │      │ Privacy      │    │ ICA / MSA    │
      │ drafted      │      │ Policy       │    │ reviewed     │
      └──────┬───────┘      └──────┬───────┘    └──────┬───────┘
             │                     │                    │
             └─────────────────────┴────────────────────┘
                                   │
                                   ▼
                       ┌────────────────────────┐
                       │ LEGAL PACKAGE READY    │ → Unblocks signing operators + clients
                       └────────────────────────┘

  ┌──────────────────────────────────┐
  │  Brief Claude Code (week 1)      │ ← Cheap, fast, unblocks parallel work
  └────────────────┬─────────────────┘
                   │
                   ▼
       ┌────────────────────┐
       │ Retool rebuild     │ ← Claude Code works on this in parallel with everything else
       │ against new schema │
       └─────────┬──────────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Supabase backup +  │
       │ Apply Chunk 5      │
       └─────────┬──────────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Schema fully clean │
       └────────────────────┘

  ┌──────────────────────────────────┐
  │  Operator sourcing (week 2+)     │ ← Kevin: 5–10 named operators per role
  └────────────────┬─────────────────┘
                   │
                   ▼
       ┌────────────────────┐
       │ First assessments  │ ← Once ICA is signable
       └─────────┬──────────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Pool of admitted   │
       │ operators          │
       └────────────────────┘

  ┌──────────────────────────────────┐
  │  Client pipeline (Chris, week 2+)│ ← Chris: 1–3 verbally committed first clients
  └────────────────┬─────────────────┘
                   │
                   ▼
       ┌────────────────────┐
       │ MSA-signable       │ ← Once MSA is attorney-reviewed
       │ clients            │
       └─────────┬──────────┘
                 │
                 ▼
       ┌────────────────────┐
       │ First diagnostic   │
       │ + match            │
       └────────────────────┘

  ┌──────────────────────────────────┐
  │  Public website (when ready)     │ ← Privacy Policy is hard prerequisite
  └────────────────┬─────────────────┘
                   │
                   ▼
       ┌────────────────────┐
       │ Site live          │
       └────────────────────┘

                              ▼
                ┌─────────────────────────┐
                │     SOFT LAUNCH         │
                │   (1 placement, dry run)│
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │   FIRST PAID PLACEMENT  │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │   THREE PLACEMENTS      │ → Launched
                └─────────────────────────┘
```

**Key insight:** Three workstreams run in parallel — legal/document, technical/Retool, sourcing/pipeline. Legal is the longest critical path. If you delay engaging the attorney, everything downstream slips.

## 3. Items by dependency

### Foundation block (must happen first; blocks downstream work)

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 1 | **Engage attorney** for legal package review + MSA §18.5–18.7 drafting + Privacy Policy review | Kevin | Week 1 (find/hire); 4–8 weeks delivery | Operators signing ICAs, clients signing MSA, website launch |
| 2 | **Brief Claude Code** on the repo using the handoff brief | Kevin | 1 hour | Retool rebuild, schema migration Chunk 5, all subsequent code work |
| 3 | **Vesting cliff conversation** with Chris | Kevin + Chris | 1 conversation | Future ambiguity |
| 4 | **Decide branch merge timing** — merge `add-platform-architecture-notes` to `main` | Kevin | 5 minutes | Cleanliness only |

### Technical block (in parallel with Foundation)

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 5 | **Retool walkthrough** — Claude Code reads existing Retool app JSON, produces inventory of screens, queries, what needs updating | Claude Code | 1–2 hours | Rebuild scope estimate |
| 6 | **Retool rebuild** — update queries to read new schema, retire references to soon-to-be-dropped columns | Claude Code | 3–7 days depending on app complexity | Chunk 5 application |
| 7 | **Retool verification** — confirm all screens work end-to-end against new schema | Kevin | 0.5 day | Chunk 5 application |
| 8 | **Take Supabase backup** before destructive changes | Kevin | 5 minutes | Chunk 5 (safety) |
| 9 | **Apply schema migration Chunk 5** — destructive drops + rename | Claude (this conversation, via MCP) or Claude Code | 30 minutes | Final schema cleanliness |
| 10 | **Verify post-Chunk-5** — Retool still works, no broken queries, all enums clean | Kevin | 1 hour | Done state |

### Operator block (in parallel with Foundation + Technical)

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 11 | **Build sourcing playbook** — channels, outreach scripts, screening criteria | Kevin | 3–5 days | Outreach starts |
| 12 | **Begin operator outreach** — LinkedIn Sales Navigator, network referrals, fractional communities | Kevin | Ongoing, 2–4 weeks to first 5 named operators | First assessments |
| 13 | **Initial screens** — 10-min calls with sourced candidates | Kevin | Weeks 2–6, ~20–30 calls to surface 5–10 viable | First assessments |
| 14 | **First assessments** — once ICA is signable; CFO first, then COO/CMO | Kevin | 1–2 days per assessment, 5–10 over weeks 4–8 | Pool building |
| 15 | **Pool target: 10 admitted operators per role** before launch (30 total) | Kevin | Weeks 4–12 | Launch readiness per Operations Playbook |

### Client block (in parallel with Foundation; Chris-led)

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 16 | **HubSpot setup** — pipeline stages reflecting May 2026 architecture (no Activation Fee Paid; use MSA Signed) | Chris (with Kevin guidance) | 1–2 days | Pipeline tracking |
| 17 | **Build target list** — 30–50 founder-led companies in $5M–$30M revenue range | Chris | Week 1–2 | Outreach |
| 18 | **Begin outreach** — LinkedIn, network, conference targets | Chris | Weeks 2–8, ongoing | First diagnostic calls |
| 19 | **First diagnostic calls** — using Client Diagnostic Call Playbook | Chris (with Kevin shadowing first 2–3) | Weeks 3–8 | Verbal commits |
| 20 | **Goal: 1–3 verbal commits** before first paid placement | Chris | Weeks 6–10 | First paid placement |

### Website block (in parallel; can wait for Privacy Policy)

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 21 | **Domain + hosting setup** | Kevin or Chris | 1 day | Site go-live |
| 22 | **Site copy** — based on Client One-Pager v1.1 + brand voice | Chris | 1 week | Site go-live |
| 23 | **Privacy Policy live** on site (after counsel review) | Kevin (legal) + Chris (publish) | After legal package ready | Site go-live |
| 24 | **Site live** — basic version: who we are, what we do, contact form | Chris | Week 8–12 | Inbound |

### Pre-launch test block (after Foundation + most of others)

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 25 | **End-to-end dry run** — Kevin runs himself or a friendly contact through the operator workflow start to finish | Kevin | 1 day | Confidence |
| 26 | **Soft launch placement** — 1 friendly client + 1 known operator, full machine | Kevin + Chris | 2–4 weeks | Real launch |
| 27 | **Soft launch retro** — what broke, what to fix before opening to paid | Kevin + Chris | 0.5 day | Real launch |

### Launch block

| # | Item | Owner | Time | Blocks |
|---|---|---|---|---|
| 28 | **First paid placement** | Kevin + Chris | When timing aligns | Trust validation |
| 29 | **Placements 2 and 3** | Kevin + Chris | 4–8 weeks after #28 | Launch threshold |
| 30 | **Public launch announcement** — LinkedIn, email to network | Chris | At placement #3 or earlier | Reputation building |

## 4. Items by owner

### Kevin's first 7 days (after this conversation)

1. **Engage attorney** — find one if not already identified, send a first email outlining the scope (use the email draft from §11 below). This is the single most important action because it has the longest tail.
2. **Brief Claude Code** — open the repo in Claude Code, point it at `docs/handoff/CLAUDE_CODE_HANDOFF.md`, ask it to (a) read the brief, (b) walk the repo and produce `docs/architecture/repo_structure.md`, (c) inventory the Retool app and report back. ~1 hour of Kevin time.
3. **Have the vesting cliff conversation with Chris** — 30 minutes. Confirm whether 2-year vest has a 6-month cliff or not. Either decision is fine; make the decision.
4. **Decide branch merge timing** — merge `add-platform-architecture-notes` to `main` now (clean state) or wait until Claude Code validates the docs (also fine). Either way, do it within 7 days so future feature branches start clean.

### Kevin's first 30 days

5. **Build sourcing playbook + start operator outreach.** Target: 5–10 named operators per role engaged in screening calls.
6. **Run first 2–3 operator assessments** (probably without ICA signed yet — assess first, then sign once attorney clears the ICA).
7. **Validate Claude Code's Retool rebuild** as it lands.
8. **Stay on top of attorney work** — proactive follow-up cadence (weekly check-in is reasonable). Counsel will work faster if pinged.
9. **Build the public website outline** with Chris — content can be drafted before Privacy Policy lands.

### Kevin's days 30–90

10. **Pool to 10 admitted operators per role.** Keep assessing.
11. **Coordinate first diagnostic calls** — sit in on Chris's first 2–3 calls.
12. **Apply Chunk 5** with Claude Code once Retool is verified.
13. **Run the soft launch** when first verbal commit + first admitted operator align.
14. **Hit launch threshold** — 3 paid placements.

### Chris's first 7 days

1. **Set up HubSpot** — pipeline stages, contact properties for the founder-led B2B SMB segment. Pipeline stages reflect May 2026 architecture (no Activation Fee Paid stage).
2. **Build target list** — 30–50 founder-led companies in the $5M–$30M revenue range. Use industry filters from MBP §3.
3. **Tighten brand positioning** — review Client One-Pager v1.1 + Master Business Plan §3 + §5 to align outreach voice.

### Chris's first 30 days

4. **Begin outreach** — LinkedIn DMs, warm intros, network leverage.
5. **First diagnostic calls** — use Client Diagnostic Call Playbook v1.1.
6. **Set up Cal.com integration** with HubSpot for booking diagnostic calls.
7. **Begin website work** — domain, hosting, draft copy. Privacy Policy gates go-live.

### Chris's days 30–90

8. **Mature pipeline to 1–3 verbal commits.**
9. **Publish website** once Privacy Policy is reviewed.
10. **Convert first verbal commit → first signed MSA** once attorney clears the package.

### Claude Code's first session (after Kevin briefs it)

1. **Read** `docs/handoff/CLAUDE_CODE_HANDOFF.md` end to end
2. **Walk the repo** and produce `docs/architecture/repo_structure.md`
3. **Inventory the Retool app** — list every screen, every query, every transformer
4. **Report back** to Kevin with: (a) what's in the repo, (b) Retool inventory, (c) any inconsistencies between docs and code, (d) proposed scope for Retool rebuild

### Claude Code's subsequent sessions

5. **Rebuild Retool** screen-by-screen against new schema
6. **Verify** every screen reads new fields (allocation_label, weekly_hour_allocation, monthly_operator_fee, pool_admission_decision, internal_performance_signal, etc.) and ignores the soon-to-be-dropped columns
7. **Build operator embedding pipeline** — extends existing `embed-events` Edge Function pattern but for operator profiles + job orders (this can wait until placement 3–5; manual matching works for first few)
8. **Build pool admission workflow Edge Function** — when ready
9. **Build invoice generation workflow** — when ready (can be manual for first 3 placements)
10. **Build pulse check scheduling** — Phase 2 deferral OK

### Attorney's first deliverables

1. **Review of MSA, ICA, Operating Agreement** (4 docs in `docs/legal/`)
2. **Draft of MSA §18.5–18.7** operative language (the current placeholders contain the substance counsel needs)
3. **Privacy Policy** — drafted from AI Governance Framework §3, §7, §8, §10 + Appendix C content
4. **Memo with recommendations** if anything in current docs needs change

### Chris + Kevin together

1. **Vesting cliff decision** — week 1
2. **Soft launch retro** — after first dry-run placement
3. **Pricing decisions if any** — none expected, but flagging
4. **Launch announcement** — at placement #3

## 5. Items by time horizon

### Week 1

- Kevin: engage attorney, brief Claude Code, have vesting conversation with Chris, decide branch merge
- Chris: set up HubSpot, build target list, tighten brand positioning
- Claude Code: walk repo, inventory Retool, report back

### Weeks 2–4

- Kevin: build sourcing playbook, begin outreach, screen first 10–15 operator candidates
- Chris: begin client outreach, first 5–10 diagnostic call attempts
- Claude Code: rebuild Retool against new schema (in parallel with everything else)
- Attorney: receives docs, begins review

### Weeks 4–8

- Kevin: first 5–10 assessments (some pre-ICA-signed), pool starts forming
- Chris: first verbal interest emerging, refine pitch from feedback
- Claude Code: Retool rebuild complete; verify with Kevin; apply Chunk 5; build operator embedding pipeline if time permits
- Attorney: legal package returned for review

### Weeks 8–12

- Kevin: pool to 10 admitted operators per role, ICAs signed once attorney clears, soft launch ready
- Chris: 1–3 verbal commits, MSA signing once attorney clears, website live, Privacy Policy live
- Claude Code: invoice automation, embedded matching, pulse checks (any of these as priorities allow)
- Attorney: addressing any final issues, Privacy Policy delivered

### Weeks 12–16

- Soft launch (1 placement)
- Soft launch retro
- First paid placement

### Weeks 16–20

- Placements 2 and 3
- Launch announcement
- **LAUNCHED**

This is a 16–20 week trajectory under reasonable execution. Faster is possible if attorney is responsive and pipeline matures quickly; slower if any of legal/sourcing/pipeline gets stuck.

## 6. Soft launch playbook

The soft launch is a deliberate dry run before paid placements. It validates the full machine in low-stakes conditions.

### Conditions for soft launch

- ≥1 admitted operator with a clear specialty
- ≥1 friendly contact willing to be the test client (former colleague, advisor, network connection)
- ICA + MSA attorney-cleared and signable
- Retool functional against new schema
- Stripe billing path confirmed (manual or automated)

### What you actually do

1. **Brief the friendly client** — "I want to run our full process with you, end to end. We'll execute it as a real engagement, but you know it's also our first run, and the goal is for us to find what breaks."
2. **Run the diagnostic call** — full Client Diagnostic Call Playbook
3. **Generate the job order** — using Job Order Intake Form
4. **Manually match operator** — Kevin's judgment, no semantic search yet
5. **Present operator** — using Operator Profile Template
6. **Sign MSA** — execute the agreement
7. **Sign ICA + Engagement Letter** — execute with the operator
8. **Stripe authorization on file** — collect payment method
9. **Kickoff** — operator starts the engagement
10. **Run for 2–4 weeks** — pulse check at day 14
11. **Retro with Kevin + Chris + operator + client** — what worked, what didn't, what changes before paid placements

### What soft launch tests

- The MSA and ICA actually sign (no last-minute legal issues)
- Retool actually displays the right info on the right screens
- Stripe authorization actually captures
- Pulse checks actually deliver
- The operator actually delivers (no surprises)
- The client actually finds the operator useful
- Invoicing math is right (manual is fine; automation comes later)

### Soft launch is not

- A discount opportunity. Charge the full retainer.
- A free engagement. The friendly client pays.
- An open-ended engagement. Define the scope and end date.
- A perfect-conditions test. Things will break; that's the point.

## 7. Test conversation playbooks

### Operator conversation playbook (for first sourcing calls)

**Goal:** filter to operators worth assessing.

**Open:** "Thanks for taking the time. Quick context — Fractional Standard places senior managers and directors going independent into founder-led businesses as fractional CFOs/COOs/CMOs. We do simulation-based assessments to qualify operators, then match against client engagements. Goal of this call is for us to learn about you and for you to learn about us."

**Five questions to cover (10 minutes):**

1. **What's your current situation?** — full-time job, currently fractional, between roles, considering fractional?
2. **What roles have you held that are relevant?** — director-level or above; finance/ops/marketing depending on track
3. **What's your hourly rate target?** — must align with our rate bands ($150 CFO, $165 COO, $145 CMO)
4. **What's your availability?** — looking for ~5–20 hours per week per engagement; can you support that?
5. **What's your interest in being assessed?** — describe the simulation; would you opt into that?

**Disposition:**
- **Interested + qualified + rate-aligned** → schedule the assessment (90-minute simulation + 15-minute validation call)
- **Interested but not currently qualified or rate-misaligned** → polite "we'll keep you in mind" + follow-up in 6 months
- **Not interested or not qualified** → polite decline

**Don't sell on this call.** This is a screen, not a recruitment pitch. If they're qualified and interested, the assessment is the next step. The decision-making sequence is: screen → assess → admit → match → sign.

### Client conversation playbook (for first diagnostic calls)

**Goal:** qualify the prospective founder/CEO and understand whether their need fits.

**Open:** "Thanks for taking this. Brief context — Fractional Standard places fractional CFOs, COOs, and CMOs into founder-led companies through a managed retainer model. The way our process works is a 30-minute diagnostic call, a job order, then matched candidates. This call is the diagnostic. Goal: I'll understand what you're trying to solve, what you've tried, and what you'd want from a fractional executive — so I can advise on whether we're the right fit and, if yes, what allocation would work."

**The diagnostic is fully covered in `docs/operations/operations_playbook_v8.md` — Chris uses that as the operative script.**

**Critical things to capture:**

1. Revenue range, employee count, sector
2. The role they're trying to fill (CFO/COO/CMO)
3. The specific problem they're trying to solve
4. What they've tried already (so you understand whether fractional is the right answer or if they need a full-time hire)
5. Allocation/budget range (Foundation $5,950–$6,500, Growth $11,500–$13,000, Scale $17,150–$19,500, Embedded $22,850–$26,000 depending on role)
6. Timeline (they need someone in 2 weeks vs. 2 months has different process implications)
7. Decision-making (founder alone? With board? With existing team?)

**Disposition:**
- **Qualified + ready** → next step is operator candidates within 1 week
- **Qualified but timing-mismatched** → "We'd love to work with you when timing aligns; let me follow up in [X] weeks"
- **Not a fit (wrong size, wrong need, wrong allocation)** → respectful decline + referral if you have one

### Friendly client soft-launch conversation

**Open:** "I'm at the point where I'm running the full process for the first time. You'd be helping me find what breaks before I open this up to paid clients. I'd want to run it as a real engagement — full diagnostic, real operator, real retainer at $X. The deal is: you get a senior fractional [role] for [allocation], you pay full price because that tests our payment flow too, and in exchange I'm transparent that you're the first one through and I'll be very responsive to anything that goes sideways."

This isn't a discount. It isn't a free consultation. It's a calibrated bet that goes both ways.

## 8. Document gaps register

Things missing or stale that should be addressed before launch but aren't blocking:

| Gap | Owner | Priority | When |
|---|---|---|---|
| Privacy Policy | Kevin (draft) + attorney (review) | Critical for website launch | Weeks 4–8 |
| AI Compliance Program Project Plan v1.2 | Kevin | Important; documents v2.2 framework cascade | Weeks 4–8 |
| `docs/architecture/repo_structure.md` | Claude Code | Medium; orientation aid | Week 1–2 |
| Master System Specification v2 | Kevin | Deferred to ~placement 10 / month 6 | Post-launch |
| COO + CMO advisor validation of scenarios | Kevin (engage advisors) | Medium; calibration confidence | Weeks 4–12 |
| Conversion Fee Tracker workbook (referenced in V8 model) | Kevin | Low; only matters when first conversion event happens | Post-launch |
| Operator referral tracker (could be Retool screen or external) | Claude Code | Medium; data flows to `operator_referrals` table | Weeks 8–12 |
| Stripe webhook receiver Edge Function | Claude Code | Important for invoice automation | Weeks 8–12 |

## 9. Risk register

What can go wrong on the path to launch and how to respond.

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Attorney is slow** (responsiveness > 2 weeks per round) | Medium | High — pushes launch by weeks | Engage 2 attorneys for parallel review if first is slow; pre-pay retainer to signal seriousness; weekly check-in cadence |
| **Sourcing pipeline doesn't yield enough operators** | Medium | High — can't run assessments without operators | Diversify channels (LinkedIn + warm intros + fractional communities); lower screening filter slightly; consider $500 finder fees for first 5 operators per role |
| **Chris's pipeline is slower than expected** | Medium | High — no clients = no placements | Kevin assists with intros; reduce target list size, focus on highest-fit prospects; consider 2–3 friendly client conversations to test pitch before broad outreach |
| **Retool rebuild reveals deeper architecture mismatches** | Low–Medium | Medium — slips Chunk 5 timing | Claude Code surfaces issues early; allow 2 buffer weeks |
| **First operator declines pool admission** | Medium | Low | Decline emails are templated; have 5+ candidates assessed before relying on any 1 |
| **First client backs out before signing MSA** | Medium | Low | Pipeline >1; don't anchor business on first prospect |
| **Privacy Policy + AEDT compliance issues from counsel** | Low | High — could change website launch | Counsel scope explicitly addresses MSA §18.5–18.7; resolve in counsel review, not after |
| **Stripe payment authorization friction** | Low | Medium | Test with Kevin's own card during soft launch; have backup invoicing path |
| **Schema migration Chunk 5 breaks Retool** | Low | High | Backup before Chunk 5; Retool fully verified before applying |
| **Soft launch placement fails (operator quits, client unhappy)** | Low–Medium | Low | Soft launch is exactly when this is acceptable; learn, fix, re-run with another friendly client if needed |
| **Vesting cliff dispute with Chris** | Low | Low–Medium | Have the conversation early (week 1); document the decision in the Operating Agreement amendment |
| **Knowledge cutoff in Claude Code's training data outdates current architecture** | Low | Medium | Handoff brief explicitly tells Claude Code to read decisions register first; check the docs every session |

## 10. Definition of done — the launch readiness gate

Before declaring "launched," all of these must be true:

### Legal
- [ ] MSA, ICA, OA reviewed by attorney and signable
- [ ] MSA §18.5–18.7 drafted by counsel and inserted into MSA v1.1
- [ ] Privacy Policy live on public website
- [ ] OA Amendment No. 1 (sliding-scale GP) and Distribution Policy adopted

### Database
- [ ] Schema migration Chunk 5 applied
- [ ] Backup taken before Chunk 5
- [ ] All stale columns dropped, all stale enums retired
- [ ] `hour_cap_tracking` renamed to `engagement_utilization`

### Code
- [ ] Retool admin UI rebuilt against new schema
- [ ] All screens query new fields (allocation_label, weekly_hour_allocation, monthly_operator_fee, pool_admission_decision, internal_performance_signal)
- [ ] No screen queries dropped fields
- [ ] HubSpot synced with Supabase via Zapier or Make

### Operators
- [ ] 10+ admitted operators per role (30+ total)
- [ ] All operators have signed ICAs (post-attorney clearance)
- [ ] All assessments documented in Supabase

### Clients
- [ ] HubSpot pipeline operational
- [ ] 1–3 clients verbally committed
- [ ] First MSA signed (post-attorney clearance)
- [ ] Stripe payment authorization captured for first client

### Operations
- [ ] Soft launch placement completed end-to-end
- [ ] Soft launch retro completed; identified issues fixed
- [ ] Three paid placements active
- [ ] First invoice generated, paid, recorded
- [ ] First operator paid (15th of month)
- [ ] Pulse checks running on active engagements

### Public
- [ ] Domain owned + DNS configured
- [ ] Public website live
- [ ] Privacy Policy + Terms accessible
- [ ] Standing AI disclosure notice live (per AI Governance Framework §5.1)

### Documentation
- [ ] All May 2026 decisions reflected in Operations Playbook
- [ ] Repo structure documented
- [ ] Handoff brief reflects current state
- [ ] AI Compliance Program Project Plan v1.2 published

When all boxes are checked: **Fractional Standard is launched.**

## 11. Attorney engagement email template

Use this as a starting point. Adjust to your relationship with the attorney.

> Subject: Fractional Standard — Pre-launch legal review engagement
>
> Hi [Attorney],
>
> I'm Kevin Krull, co-founder of Fractional Standard, a Georgia LLC placing fractional executives (CFOs, COOs, CMOs) into founder-led businesses. We're in pre-launch and looking to engage you for a focused legal review before our first client engagements.
>
> **Scope:**
>
> 1. Review of Master Services Agreement (MSA) v1.1 — client-facing engagement contract. Includes draft Sections 18.5–18.7 (vendor-liability allocation for AI/AEDT) that need operative legal language drafted. The placeholders capture our intent and reference our AI Governance Framework v2.2.
>
> 2. Review of Independent Contractor Agreement (ICA) v1.1 — operator-facing contract. Includes Section 14 (AI assessment acknowledgment), Exhibit C (AI disclosure), Exhibit D (conversion fee tiers), Exhibit E (direct hire). Confirm enforceability under Georgia law and key states our operators may reside in (CA, NY, TX, FL).
>
> 3. Review of Operating Agreement (signed April 2026) and pending Amendment No. 1 (sliding-scale Guaranteed Payment for Managing Member) and Distribution Policy Member Resolution.
>
> 4. Privacy Policy drafting — based on our existing AI Governance Framework v2.2 (Sections 3, 7, 8, 9, 10, Appendix C). Need a public-facing policy aligned with CCPA, applicable state laws.
>
> 5. Memo with recommendations and redlines.
>
> **Specific compliance focus areas:**
>
> - NYC Local Law 144 reach when placing 1099 operators into NYC-based client engagements
> - Colorado AI Act applicability to independent-contractor pool admission decisions
> - California CCPA applicability and ADMT trajectory
> - Illinois HB 3773 reach and AI Video Interview Act if simulations are recorded
> - FCRA compliance for background checks via Checkr
>
> **Timeline:** Aim for 4–6 weeks turnaround; we're targeting first paid placements by [target date]. Happy to coordinate on phasing if helpful — for example, ICA + MSA review first, then Privacy Policy + §18.5–18.7 drafting after.
>
> **Materials I can send for your review:** all four documents above, the AI Governance Framework v2.2 (which informs the §18 vendor-liability architecture), and our Master Business Plan v7.2 for context. Total ~150 KB of markdown/Word documents.
>
> What's your availability for an intro call? I'm in Atlanta and can do video or phone.
>
> Best,
> Kevin Krull
> Co-founder, Fractional Standard
> [phone] | [email]

## 12. The single most important thing this week

If you only do one thing this week: **engage the attorney.** Everything downstream blocks on legal package readiness, and legal is the longest tail. Every day you delay engaging counsel is a day you push the launch threshold.

Second most important: **brief Claude Code on the repo.** Cheap, fast, unblocks parallel technical work that can run while attorney is reviewing.

Third most important: **vesting cliff conversation with Chris.** Five minutes of actual discussion. Removes future ambiguity at near-zero cost.

These three are all action items that fit in a single week and, together, unblock everything else.

## Appendices

### Appendix A — Useful queries while operationally running

Quick SQL for production state checks:

```sql
-- How many operators in pool?
SELECT 
  role,
  internal_performance_signal,
  COUNT(*) AS count
FROM operators
WHERE operator_status IN ('Pool Admitted', 'active')
GROUP BY role, internal_performance_signal
ORDER BY role, internal_performance_signal;

-- Active engagements + their phase
SELECT 
  id, 
  role, 
  allocation_label, 
  weekly_hour_allocation,
  retainer_amount,
  monthly_operator_fee,
  engagement_phase,
  start_date
FROM engagements
WHERE engagement_phase IN ('kickoff', 'active', 'wind-down')
ORDER BY start_date;

-- Pricing catalog as a reference
SELECT role, allocation_label, monthly_retainer, monthly_operator_fee
FROM pricing_catalog
WHERE is_active = true
ORDER BY role, weekly_hour_allocation;
```

### Appendix B — Cross-reference

| Question | Document |
|---|---|
| Why was a decision made? | `docs/architecture/may_2026_architecture_decisions.md` |
| What's the strategic narrative? | `docs/architecture/master_business_plan_v7_2.md` |
| What's the unit economics? | `docs/operations/pricing_model_v7.md` |
| How do workflows run day to day? | `docs/operations/operations_playbook_v8.md` |
| What's the AEDT compliance posture? | `docs/architecture/ai_governance_framework_v2_2.md` |
| How are operators scored? | `docs/assessments/{cfo,coo,cmo}_scoring_prompt_v*.md` |
| What does Claude Code need to know? | `docs/handoff/CLAUDE_CODE_HANDOFF.md` |
| What changed in the schema migration? | `docs/architecture/supabase_migration_plan_v1_0.md` |
| What's the legal package? | `docs/legal/` (do not edit programmatically) |

### Appendix C — Update this checklist as launch progresses

This document is living. Update it as items complete. Pattern: change status in §1 (Current state); strike through items in §3–5; add notes to §9 (Risk register) when something materializes; update §10 checklist as items satisfy.

When all of §10 is checked: **launched.** Update the document title to `launch_checklist_v2_0.md` for whatever comes next (post-launch playbook, Phase 2 planning, etc.).

---

*This is the operative launch plan for Fractional Standard. Three paid placements + basic public website + full operational readiness. The path is 16–20 weeks from May 2026 under reasonable execution. The single most important first action is engaging the attorney.*
