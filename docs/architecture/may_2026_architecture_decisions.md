# May 2026 Architecture Decisions

**Document type:** Architecture decision record / context document
**Audience:** Claude Code, future Claude.ai sessions, future Kevin
**Status:** Authoritative as of May 2026
**Last updated:** May 2026

## Purpose

This document captures the **why** behind the architectural decisions settled in May 2026. It is the missing link between the operational documents (which describe **what** the platform does) and the schema (which describes **how** the data is shaped). Read this before making changes that touch the data model, pricing, operator/client workflows, or AI compliance posture.

These decisions are settled, not negotiable starting points. If new requirements seem to conflict with one of them, surface that conflict explicitly and discuss before changing anything — most apparent conflicts come from forgetting why a decision was made, not from the decision being wrong.

## Decision register

The decisions below are the operative state. Each entry has the form: **decision** → **why** → **what changes if violated**.

### 1. External operator tier system retired; replaced by binary pool admission + internal performance signal

**Decision.** Operators are not externally classified into Tier 1 / Tier 2 / Tier 3. There is a binary admission decision (Admit / Decline) at composite score ≥60 + validation Pass. Internally, admitted operators are flagged as Strong (composite ≥80, all dimensions ≥12) or Conditional (60–79, or any dimension <12). The internal performance signal is for matching prioritization only — it never appears in operator-facing materials, client-facing profiles, or any communication that an admitted operator could see about themselves.

**Why.** Three reasons. First, the prior tiered system created a pressure for operators to "level up" their tier publicly, which incentivized gaming the assessment rather than honest representation. Second, presenting tiered operators to clients created a quality-anchor problem — clients reject Tier 2 candidates because Tier 1 exists, even when Tier 2 is a better fit. Third, AEDT-compliance posture (NYC LL 144, Colorado SB 24-205, Illinois HB 3773) is cleaner when there is no externally-published classification system to defend.

**What changes if violated.** Reintroducing visible tiers reopens the gaming problem and the AEDT exposure. If a future requirement appears to need tiered presentation to clients (e.g., "premium" vs. "standard" operators), redesign with a different mechanism (engagement size, allocation depth, role specialization) — never via tier on the operator.

### 2. Activation fee retired; replaced by MSA + Stripe payment authorization on file

**Decision.** No activation fee, retainer fee, deposit, or upfront payment. Clients sign the MSA, authorize a payment method via Stripe, and are billed monthly in advance, net-14, against active engagements. Replacement Right is a uniform 30-day Engagement-Phase Replacement Right (MSA §13.1) — not a money-back guarantee tied to a fee.

**Why.** The activation fee created a pre-engagement commitment moment that slowed the sales cycle without improving placement quality. Stripe payment authorization on file at MSA signing accomplishes the same psychological commitment with less friction and no refund logistics. The 30-day replacement right is industry-standard and easier to explain than a refund schedule.

**What changes if violated.** Reintroducing an activation fee creates two billing rails to manage (one-time vs. recurring), additional refund-logic edge cases, and a more complex MSA. Don't add it back without a strong revenue reason that justifies the operational cost.

### 3. Allocation-based pricing with hour-cap-only retainers (no overage billing)

**Decision.** Engagements are sold by allocation tier:
- **Foundation** (5 hrs/week)
- **Growth** (10 hrs/week)
- **Scale** (15 hrs/week)
- **Embedded** (20 hrs/week)

Pricing per V8 financial model (in `pricing_catalog`). Within-month flex is explicit: an operator working 4 hours one week and 6 hours the next is fine. **Monthly allocation is use-it-or-lose-it.** No overage billing. If a client needs more capacity, the conversation is "upgrade your tier," not "approve overage hours."

**Why.** Overage billing is the worst pattern in fractional services: it creates client surprise on invoices, incentivizes operators to log hours rather than deliver outcomes, and turns every month into a hours-tracking conversation. Allocation-based pricing with no overage means clients pay for *capacity* (not hours), operators are incentivized to deliver against the role (not the timesheet), and the conversation when capacity is tight is structural (upgrade) not transactional (approve more hours).

**What changes if violated.** Adding overage billing reintroduces all the dynamics above. If a client genuinely needs more time than their allocation supports, the right answer is to upgrade them or set the right expectations. Hours logged via Clockify are utilization signal only — for capacity management and tier-fit decisions, never for billing.

### 4. Fixed monthly operator fee (NOT hourly billing)

**Decision.** Operators are paid a fixed monthly fee, derived from `(weekly_hours × hourly_rate × 52 / 12)`, then `MROUND $25`. Examples:
- CFO Foundation (5 hrs/wk × $150) → $3,250/month
- COO Embedded (20 hrs/wk × $165) → $14,300/month
- CMO Growth (10 hrs/wk × $145) → $6,275/month

Operators submit timesheets in Clockify weekly for utilization reporting only. They do not bill by hour. They are not paid additional hours for over-utilization, and they are not paid less for under-utilization. The monthly fee is the pay.

**Why.** Symmetric to decision #3 on the client side — pay structure should match billing structure. If clients pay for capacity, operators should be paid for capacity. This also simplifies operator pay logistics (one fixed payment per operator per month, on the 15th, predictable cash-flow planning), eliminates timesheet-approval friction (no operator chasing Kevin to approve hours), and matches the founder-led-business value proposition: "I want a senior person who shows up and delivers, not someone who bills me by the hour."

**What changes if violated.** Hourly billing reintroduces timesheet approval as a workflow, creates margin volatility (some months operators bill more, some less), and creates a dynamic where operators are incentivized to log hours rather than deliver outcomes. The fixed-monthly model is operationally cheaper and economically sounder.

### 5. Monthly billing cadence (12 periods/year, not 4-week quad)

**Decision.** Both client billing and operator pay use 12-period monthly cycles. Operators are paid on the 15th of each month. Clients are billed on a per-engagement billing date, monthly in advance, net-14.

**Why.** Three reasons. First, the V8 financial model (the operative source of truth for unit economics) is built on 12-period assumptions. Switching to 4-week quad (13 periods/year) requires re-modeling everything downstream — founder comp, Solo 401k contributions, Augusta Rule, etc. Second, monthly aligns with client expectations — every B2B service the client buys (SaaS, accounting, legal) is monthly; introducing a 4-week cadence creates "wait, this isn't monthly?" friction at every billing event. Third, monthly aligns with operator expectations for the same reason — they have monthly bills, monthly mortgage payments, monthly retirement contributions; matching their cadence reduces friction.

**What changes if violated.** Switching to 4-week quad creates a 13-period revenue model with different math throughout, and creates the explanation burden ("you'll be billed every 4 weeks, so 13 times per year") at every client and operator interaction. If a future case for quad emerges (e.g., for a specific high-volume client segment), it should be a deliberate exception, not a default change.

### 6. Pool admission decision is binary; signal is internal-only

**Decision.** The assessment scoring workbooks output:
- **Pool admission decision** (Admit / Decline / Decline (validation fail) / Pending validation / Not scored) — externally-facing, communicated to operator
- **Internal performance signal** (Strong / Conditional / Below threshold / Pending validation / n/a / Not scored) — internal-only, used for matching prioritization

Operators receive their pool admission decision plus a written feedback summary. They never receive the internal signal. Clients never see the internal signal. The signal lives in `assessments.internal_performance_signal`, `operators.internal_performance_signal`, and `operator_pool_admissions.internal_performance_signal` — never in any document or screen exposed to operators or clients.

**Why.** The internal signal preserves Kevin's matching judgment without re-creating the tier system's gaming pressure (decision #1). A "Conditional" operator who's strong in one specific domain might be the perfect match for a specific client; an internal-only flag lets Kevin prioritize those matches without telling the operator they're "lower tier" than someone else.

**What changes if violated.** If the signal leaks externally — into an operator profile screen, an email, a client presentation — it becomes a tier system by another name, and the dynamics from decision #1 reappear.

### 7. Conversion fees: 4-tier tenure-based per MSA Exhibit D

**Decision.** When a client converts a fractional operator to FTE, the conversion fee is calculated based on tenure at conversion:
- **Tier 1** (≤3 months): 20% of base salary offered
- **Tier 2** (4–9 months): 17%
- **Tier 3** (10–18 months): 13%
- **Tier 4** (>18 months): 10%

A 12-month tail period applies — if the client hires the operator within 12 months of engagement end (whether mid-engagement or post-engagement), the conversion fee applies. Three-month minimum buyout applies for engagements that ended <90 days before conversion.

**Why.** The tenure-based scale makes conversion economically rational at the right time — converting an operator at 3 months pays the firm the most because the firm did the most expensive work (sourcing, assessing, matching) and has captured the least margin. By 18+ months, the firm has captured ongoing margin, and the conversion fee can drop without hurting unit economics. The tail period prevents clients from gaming the system by churning the engagement and hiring directly the next month.

**What changes if violated.** Flat conversion fees create perverse incentives — either too high at long tenures (clients refuse, operator leaves anyway) or too low at short tenures (firm loses money on the placement work). The tenure scale is the mechanism that aligns incentives.

### 8. Direct-hire engagements (contingency placement) are a separate workflow per MSA Exhibit E

**Decision.** Direct-hire is a contingency placement model offered as a client accommodation, not actively sold:
- 20–25% of FY1 base salary
- Net-30 after candidate start date
- 30-day uniform guarantee (replacement if candidate leaves within 30 days)
- No activation fee
- Tracked in `direct_hire_engagements` table — separate from fractional `engagements`

**Why.** Some clients will want to hire directly without the fractional intermediate step. Saying "no" to those conversations would be money left on the table; saying "yes" without a clear product creates ambiguity. The direct-hire offering is a clean, simple addendum: contingency only (no upfront fee), short guarantee, tracked separately so the unit economics don't get muddled with fractional engagements.

**What changes if violated.** If direct-hire fees get tracked in the same place as fractional engagement revenue, the unit economics view of the fractional business gets distorted. If guarantees stretch beyond 30 days, the firm absorbs more risk for revenue that's already recognized. Both compromise the financial model.

### 9. Mid-engagement termination has strict calendar-day proration + 60-day pool priority + discretionary accommodation per ICA §3.8

**Decision.** When a fractional engagement ends mid-billing-period (whether client-, operator-, or firm-initiated), three things apply:
1. **Calendar-day proration** of both client refund and operator pay
2. **60-day pool priority** — the operator gets matching priority for new engagements for 60 days post-termination
3. **Discretionary accommodation** — the firm may offer additional support (resume update, intro to other clients, etc.) on a case-by-case basis

Tracked in `mid_engagement_terminations` table.

**Why.** Mid-engagement termination is the most operationally-fraught moment in the business. Calendar-day proration is the only scheme that's both fair to clients (you don't pay for days the operator isn't there) and fair to operators (you get paid for days you worked). 60-day pool priority is a retention mechanism — operators who've been good to work with shouldn't be left in the cold because of one bad fit. Discretionary accommodation acknowledges that some terminations need extra grace (e.g., operator family emergency), without creating an entitlement.

**What changes if violated.** If any of the three pieces is dropped, the system becomes either harsh (operators feel disposable) or unfair (clients pay for service they didn't receive). The combination is what makes the policy defensible.

### 10. Operator referral: $500 split ($250 ICA signing + $250 first engagement) per ICA Exhibit B.3

**Decision.** When an admitted operator refers another operator who joins the pool and engages with a client, the referrer receives $500 total:
- $250 paid when the referred operator signs their ICA
- $250 paid when the referred operator starts their first engagement

Tracked in `operator_referrals` table.

**Why.** Operator referrals are the highest-quality sourcing channel — operators know who else in their network is good. The split structure protects against gaming (refer-someone-just-to-sign-and-disappear): the second $250 only fires when the referred operator actually generates revenue. $500 is enough to be motivating without being so high that it incentivizes spammy referrals.

**What changes if violated.** Lump-sum referral payments create incentive distortions. Significantly higher referral amounts create spam. Significantly lower amounts don't motivate. The current structure is calibrated to the operator pool's economic profile (senior managers/directors going independent — $500 is meaningful but not life-changing).

### 11. AI compliance posture: vendor-exception strategy with curatorial-not-decisional positioning

**Decision.** The firm's posture under AEDT statutes (NYC Local Law 144, Colorado SB 24-205, Illinois HB 3773, California FEHA ADS, California CCPA ADMT) is:
1. **No hiring decisions on Client's behalf** — operator profiles, recommendations, and shortlists are advisory inputs to client's own decision process
2. **Client-side AEDT compliance is Client's responsibility** — the firm's vendor status does not extend client compliance obligations to the firm
3. **FS outputs are advisory inputs** — pool admission, simulation scoring, and matching outputs do not constitute employment decisions made by Fractional Standard

Codified in MSA §18.5–18.7 (placeholders pending counsel drafting). Operationalized in AI Governance Framework v2.2 §8.5.

**Why.** The vendor-exception strategy positions the firm as a curator (presenting candidates, recommending matches) rather than a decision-maker (hiring, classifying employees). This posture is defensible because: (a) the firm legitimately doesn't make hiring decisions — clients always pick the operator they engage with; (b) standard practice of presenting at least 2 candidates per opportunity reinforces the curatorial framing; (c) pool admission is admission to the firm's own contractor pool, not employment of the candidate. The alternative postures (claiming AEDT exemption directly, or accepting AEDT applicability and complying) are weaker — exemption claims are easily disputed, and full compliance creates ongoing audit and disclosure obligations the firm isn't sized to handle.

**What changes if violated.** If the firm starts making placement decisions for clients (e.g., auto-assigning operators, single-candidate "take-it-or-leave-it" presentations), the curatorial posture collapses. If client-side AEDT obligations get folded into the firm's MSA boilerplate, the firm assumes liability that's properly the client's. Neither is acceptable.

### 12. Human-in-the-loop is non-negotiable for assessment scoring

**Decision.** AI generates scores via the assessment scoring prompts. **Kevin reviews every AI-generated score before pool admission.** Kevin's judgment overrides AI scores when they conflict; the override and reason are logged to `operator_pool_admissions.human_overrode_ai` and `override_reason` for the calibration audit trail. No pool admission decision is made solely by AI.

**Why.** Three reasons. First, AEDT compliance posture (decision #11) requires it — if the AI alone made admission decisions, the curatorial framing weakens. Second, calibration depends on it — Kevin's overrides are the training signal for refining the scoring prompts and rubrics. Third, edge cases require human judgment — a transcript with technical issues, a candidate having an off day, a scenario the prompt doesn't handle well; these need a human to catch and adjust.

**What changes if violated.** Auto-admitting candidates based on AI score alone collapses the AEDT defense and removes the calibration feedback loop. The 5-minute Kevin review per assessment is the price of both compliance and quality.

### 13. Calibration audit every 25 completed assessments

**Decision.** Per AI Governance Framework v2.2 §14, every 25 completed assessments triggers a calibration audit:
1. Re-score 5 randomly-selected past assessments using the current rubric and current Claude model
2. Compare to original scores
3. Investigate any drift >10 points on any dimension
4. If drift is found, either sharpen the calibration toolkit, adjust the scoring prompt, or both
5. Log the audit to `ai_compliance_audit_log` with assessment IDs, drift detected, and any rubric adjustments made

**Why.** AI scoring drifts over time as the underlying model updates, the rubric stays static while the candidate pool evolves, and Kevin's own judgment shifts with experience. Without periodic audits, the system can score inconsistently in ways that aren't visible until you compare two candidates from very different periods. The 25-assessment threshold balances signal (enough samples to detect drift) against effort (manageable audit cadence).

**What changes if violated.** Skipping audits means scoring drift accumulates silently. By the time it's noticed (probably from a hiring manager or operator complaint), the calibration toolkit and prompts may be far enough out of alignment that recalibrating is a major effort. Smaller, more frequent audits cost less than rare big ones.

### 14. Documents, code, and database evolve together

**Decision.** Three sources of truth must remain in sync:
1. **Documents** in `docs/` (this file structure)
2. **Code** in `supabase/`, `src/`, and Retool app JSON
3. **Database state** (Supabase production)

When any one changes, the other two should be updated within the same change set or with explicit follow-up in the immediately-next change. The `docs/handoff/CLAUDE_CODE_HANDOFF.md` is the navigable index that says "for X question, see Y document/file/table."

**Why.** Out-of-sync documents are worse than no documents — they actively mislead future engineers (and future Claude Code sessions) about what the system does. The discipline of "update docs in the same PR as the code change" is the only sustainable way to keep them honest.

**What changes if violated.** Stale documents accumulate, then get treated as fiction by anyone reading them, then get deleted entirely. The decision-making context lost when that happens is enormous and not recoverable.

## How decisions get made and changed

When a future requirement seems to conflict with a decision above:

1. **Surface the conflict explicitly.** "We need feature X, which appears to require revisiting decision Y."
2. **Re-read the decision's *why*.** Often the conflict is a misreading.
3. **If the conflict is real**, propose the decision change as its own deliberate change — update this document, update the affected code/schema/policies, communicate the change.
4. **Don't make silent decisions** that contradict the register. The register exists to prevent drift; circumventing it defeats the purpose.

## Documents that depend on this register

The following documents implement the decisions above. If a decision changes, these documents are in scope for update:

| Document | Depends on decisions |
|---|---|
| Master Business Plan V7.1 | All |
| Pricing Model V7 | 3, 4, 5 |
| Operations Playbook V8 | All |
| Master Services Agreement v1.1 | 2, 3, 7, 8, 9, 11 |
| Independent Contractor Agreement v1.1 | 4, 9, 10 |
| AI Governance Framework v2.2 | 11, 12, 13 |
| CFO/COO/CMO Assessment Delivery Protocols | 1, 6, 12 |
| CFO/COO/CMO Scoring Prompts | 6, 12, 13 |
| Supabase Migration Plan v1.0 | 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13 |

## Open questions / known gaps

1. **MSA §18.5–18.7 vendor-liability operative language.** Placeholders are in place per decision #11; counsel needs to draft compliant statutory language. Until that's done, the MSA is signable but the AEDT defense is in its placeholder form.

2. **Vesting cliff status.** Per Operating Agreement, vesting is 2-year (24 months) for both Kevin (24 units at 1/month) and Chris (16 units at 0.667/month). Whether a cliff was added is uncertain. Recommended action: confirm with Chris before launch; consider adding even a 6-month cliff to close the early-exit gap.

3. **Privacy Policy.** Required for public website launch. Not yet drafted. Blocks website go-live.

4. **AI Compliance Program Project Plan v1.2.** v1.1 exists; v1.2 update needed to reflect v2.2 of the AI Governance Framework. Not blocking immediate work but should land before MVP launch.
