**Fractional Standard**	LLM Calibration Toolkit CFO  •  v2.0  •  April 17, 2026

**LLM SCORING CALIBRATION TOOLKIT**

**CFO ****Simulation  •****  Phase 1 Facilitated-Live Model**

Fractional Standard

*Version **2.0  •**  April 17, 2026*

*Supersedes v1.0 (March 2026)*

| **What's new in V2** V1 was written assuming Claude API would administer the simulation end-to-end. V2 reflects the actual Phase 1 approach: Kevin administers live on Zoom, uses claude.ai (not the API) for transcript scoring. The scenario, rubric, anchor descriptions, and four mock responses are preserved verbatim — they remain authoritative. What changed: the operational framing, calibration timing (post-launch iterative instead of pre-launch gate), and cross-references to the current documents (CFO Assessment Delivery Protocol, CFO Scoring Prompt, CFO Assessment Scoring Workbook). For Phase 2, when the assessment moves to a token-linked portal with a Supabase Edge Function handling scoring, the content here remains the authoritative source — only the execution layer changes. |
| --- |

# 0. How This Toolkit Is Used

## 0.1 Purpose

This toolkit exists so that Claude's scoring of CFO assessment transcripts can be calibrated and validated against known-quality responses. The four mock responses in Section 3 are the ground truth. When Claude's scoring drifts or fails to differentiate, the fix is to refine the CFO Scoring Prompt until Claude's scores match the expected ranges within tolerance.

## 0.2 Phase 1 operational context

**In Phase 1, the assessment pipeline is:**

- Kevin administers the assessment live on Zoom (45–60 min, scenario + curveball + debrief per the CFO Assessment Delivery Protocol)

- Session is transcribed (Otter.ai / Fathom / Zoom transcription)

- Kevin pastes the CFO Scoring Prompt into a fresh claude.ai conversation

- Kevin pastes the transcript as the next message

- Claude returns a structured scoring report: evidence-based dimension analysis + SCORE BLOCK

- Kevin transfers scores to the CFO Assessment Scoring Workbook (Template tab duplicated per candidate)

- Workbook auto-calculates composite, pool admission decision, and internal performance signal

Claude's scoring is a first-draft pass. Kevin's judgment always overrides — the workbook is designed for Kevin's numbers to be final. But Claude's scores should be consistent and defensible, and this toolkit exists to verify that they are.

## 0.3 Phase 2 operational context (future)

When the assessment moves to a token-linked portal (post ~10 placements), the scoring workflow changes: a Supabase Edge Function holds the prompt, transcripts are passed via API, scores are written directly to the assessments table. The rubric, scenario, curveball, and mock responses in this toolkit remain the authoritative reference. Only the execution surface changes.

# 1. CFO Simulation Scenario

This is the scenario presented to every CFO candidate. In Phase 1, Kevin reads the scenario verbatim during the live Zoom session (per the CFO Assessment Delivery Protocol, Section 3.2). The scenario, curveball, and candidate prompt below have not changed from v1.0 — they remain the calibration ground truth.

## 1.1 Scenario setup (read to candidate)

| **TechWave Analytics scenario** You are the incoming fractional CFO for TechWave Analytics, a B2B SaaS company with $6M ARR, 28 employees, and a Series A closed 8 months ago at $10M. The CEO is a first-time technical founder. Here is the current situation:  — Monthly burn rate is $380K against $320K in monthly recurring revenue. Runway is approximately 10 months at current burn. — The board (two VC partners + CEO) meets quarterly. The next board meeting is in 3 weeks. The CEO has been sending them a one-page revenue summary with no financial projections or variance analysis. — The company has $3.8M remaining from the Series A. The CEO is considering raising a bridge round because money is getting tight. — ARR has grown from $4.2M to $6M over the past 12 months, but growth has decelerated from 15% quarter-over-quarter to 8% in the most recent quarter. — The sales team (3 AEs + 1 SDR) is compensated on a plan that was designed at $2M ARR and hasn't been updated. Two AEs are significantly over-earning relative to company benchmarks. — There is no 13-week cash flow model, no departmental budget, and no financial forecasting beyond a basic spreadsheet the CEO maintains.  Your task: Walk me through how you would approach your first 30 days as the fractional CFO. Be specific about what you would build, what conversations you would have, and what you would recommend to the CEO and the board. |
| --- |

## 1.2 Curveball (introduced at minute 25–30)

| **Curveball** Update: the CEO just called you. The company's largest customer (18% of ARR) has informed them they will not be renewing their annual contract, which expires in 6 weeks. The CEO is panicking and wants to know if they should immediately start raising a bridge round. How do you respond? |
| --- |

# 2. Scoring Rubric (100 Points)

Each dimension is scored 0–20. The composite score is the sum of all five dimensions. Claude scores each dimension independently with explicit reasoning before assigning the numeric score. This is the authoritative rubric — the CFO Scoring Prompt encodes exactly these anchor descriptions.

## 2.1 Dimension 1: Financial Modeling & Analysis

Does the candidate propose building specific financial models (13-week cash flow, 3-statement model, budget vs. actual)? Do they identify the right data to gather? Can they articulate how the models inform decisions?

| **Score Range** | **Anchor Description** |
| --- | --- |
| 18–20 (Excellent) | Proposes specific models by name with clear methodology. Identifies data gaps and how to close them. Connects models to strategic decisions (e.g., 'the 13-week cash flow will tell us whether we actually need a bridge round'). Shows fluency with SaaS metrics. |
| 12–17 (Solid) | Proposes appropriate models but methodology is generic. Identifies some data needs. Makes correct connections but lacks the 'so what' of each model. |
| 6–11 (Mediocre) | Mentions models at a high level ('I'd build a financial model') without specifying which ones or how. Doesn't connect modeling to the specific situation (burn rate, runway, board prep). |
| 0–5 (Poor) | No mention of specific models. Vague statements about 'reviewing the finances.' Doesn't demonstrate awareness of the urgency (10-month runway). |

## 2.2 Dimension 2: Strategic Communication

Can the candidate frame financial information for a non-financial CEO? Do they propose board-ready materials? Is their language clear, confident, and action-oriented?

| **Score Range** | **Anchor Description** |
| --- | --- |
| 18–20 | Board-ready narrative: 'Here's what I'd present at the board meeting in 3 weeks.' Translates financial data into strategic implications. Adjusts language for CEO (non-financial) vs. board (VC-experienced). |
| 12–17 | Clear communication but doesn't differentiate between audiences. Correct content but lacks executive framing. |
| 6–11 | Too technical for a non-financial CEO. Or too vague for a board. Doesn't propose specific board materials. |
| 0–5 | Jargon-heavy or lacks confidence. Would not instill trust in a founder or board. |

## 2.3 Dimension 3: Crisis Response (Curveball)

How does the candidate respond to the curveball (customer churn + bridge round question)? Do they remain calm? Do they quantify the impact before making recommendations? Do they address both the immediate crisis and the long-term implications?

| **Score Range** | **Anchor Description** |
| --- | --- |
| 18–20 | Calm, structured response. Immediately quantifies impact ($1.08M ARR loss = 18%). Separates the panic response from the analytical response. Proposes both immediate actions (retention conversation, scenario modeling) and strategic framing (this changes the bridge round calculus, here's how). Addresses the CEO's emotional state. |
| 12–17 | Reasonable response with some structure. Quantifies the impact but doesn't fully separate immediate vs. strategic. May miss the emotional management component. |
| 6–11 | Reactive rather than structured. Jumps to a recommendation without quantifying. Or over-analyzes without providing clear direction. |
| 0–5 | Panics, gives a textbook answer ('we should diversify our customer base'), or fails to address the bridge round question directly. |

## 2.4 Dimension 4: Stakeholder Management

Does the candidate identify all relevant stakeholders (CEO, board, sales team, customer success) and propose appropriate communication strategies for each? Do they recognize competing interests?

| **Score Range** | **Anchor Description** |
| --- | --- |
| 18–20 | Identifies CEO, board, sales team, customer success, and potentially the at-risk customer. Proposes differentiated communication for each. Recognizes the board meeting in 3 weeks as both a deadline and an opportunity. |
| 12–17 | Addresses CEO and board well but misses other stakeholders (sales team comp issue, customer success involvement). |
| 6–11 | Focuses only on one stakeholder (usually the CEO). Doesn't recognize competing interests. |
| 0–5 | No awareness of stakeholder dynamics. Treats the engagement as a solo technical exercise. |

## 2.5 Dimension 5: Operational Execution

Does the candidate propose specific, actionable steps with timelines, owners, and measurable outcomes? Is there a clear 30-day plan? Do they prioritize correctly given the runway constraint?

| **Score Range** | **Anchor Description** |
| --- | --- |
| 18–20 | Specific 30-day plan: Week 1 (data gathering, 13-week cash flow build, sales comp audit), Week 2 (scenario modeling, board deck draft, customer retention analysis), Week 3 (board prep, CEO coaching, bridge round recommendation), Week 4 (board meeting, post-meeting action items). Each step has an owner and deliverable. |
| 12–17 | Directionally correct 30-day plan but lacks specificity on timing or deliverables. Correct priorities but vague on execution. |
| 6–11 | Lists activities without sequencing or prioritization. No clear deliverables. Doesn't address the 3-week board meeting deadline. |
| 0–5 | No actionable plan. Theoretical statements about what a CFO should do. No awareness of time constraints. |

# 3. Calibration Mock Responses

Below are four mock candidate responses at different quality levels. These are your ground truth for calibrating Claude's scoring. Run each through the scoring workflow (Section 4) and compare Claude's output against the expected scores.

| **These mocks are preserved verbatim from V1** Do not rewrite them. They are deliberately constructed to test specific rubric anchors. Mock A's curveball response quantifies to $1.08M explicitly; Mock B's is reasonable but doesn't quantify; Mock C reaches for the 'diversify customer base' textbook answer; Mock D gives platitudes. If you change the mocks, the calibration signal is lost. |
| --- |

## 3.1 Mock Response A — Excellent

| **Mock Response A**   •   **Expected: 88–95** "First, I need to understand the actual cash position, not just the burn rate. $380K monthly burn against $320K MRR with $3.8M in the bank gives us roughly 10 months, but that assumes flat revenue and flat costs — both of which are wrong. Growth is decelerating, and costs rarely stay flat. So my literal first action in Week 1 is building a 13-week cash flow model that shows the real runway under three scenarios: current trajectory, a revenue acceleration case (if we fix the sales comp issue), and a downside case (if growth continues to decelerate). The 13-week model will directly answer the bridge round question — which right now the CEO is asking emotionally, not analytically. If the model shows 7+ months of runway under the base case, a bridge is premature and dilutive. If it shows 4–5 months, we need to start the process now because bridge rounds take 6–8 weeks to close. Week 1, I'm also pulling the sales comp data. Two AEs over-earning on an outdated plan is a margin problem and a culture problem. I need the actual numbers before I have a recommendation, but this is likely a $200K–$400K annual impact if the comp plan is misaligned. That alone could extend runway by 2+ months. Week 2, I'm building the board deck — not a one-page revenue summary but a proper financial package: MRR trends, net retention, burn analysis, runway scenarios, and a clear ask or recommendation. The board meeting in 3 weeks is my forcing function. I'd prepare the CEO with a dry run the week before. He's a technical founder — he needs coaching on how to present financials with confidence, not just the deck itself. [After curveball] OK, 18% of ARR, that's $1.08M. First thing: this changes the 13-week cash flow model materially. But before we panic, I need to understand the timeline — the contract expires in 6 weeks, so the actual revenue impact starts in 6 weeks, not today. That gives us time to do two things in parallel. First, I want to get on a call with the customer success lead and understand why they're not renewing. Is it price, product, or something we can fix? Even a partial save — downselling from a $1.08M contract to $600K — dramatically changes the math. Second, I'm rerunning the cash flow model with three sub-scenarios: full loss, partial retention, and delayed loss. The bridge round question gets answered by the model, not by the CEO's anxiety. If the downside scenario shows runway below 5 months, I tell the CEO: 'Yes, start the bridge conversations, but from a position of we're being proactive not we're desperate.' If runway holds at 7+ months even with the loss, we don't need a bridge — we need to fix the sales pipeline." ***Why ******this****** scores in this range: ****Specific models by name. Quantifies everything. Addresses every stakeholder. Curveball response is calm, structured, and separates emotion from analysis. Clear 30-day plan with owners. Board prep includes CEO coaching. Connects every action to a business outcome.* |
| --- |

## 3.2 Mock Response B — Solid

| **Mock Response B**   •   **Expected: 68–75** "I'd start by getting a handle on the finances. I'd want to build a cash flow model and understand the actual runway. The $3.8M sounds like it should last a while but with a $60K monthly gap, it could go faster than expected. I'd also want to look at the sales comp plans since those sound like they need updating. For the board meeting, I'd put together a proper financial report with revenue trends, expense breakdown, and some projections. The CEO should have more than a one-page summary. I'd also want to have a conversation about whether a bridge round is really necessary or if there are ways to extend runway through cost optimization. [After curveball] That's a significant hit — 18% of ARR. I'd want to understand why they're leaving and see if there's anything we can do to retain them. In the meantime, we should model out what this means for runway and potentially accelerate the bridge round conversations. I'd recommend the CEO not make any rash decisions until we have the numbers." ***Why ******this****** scores in this range: ****Correct direction on every dimension but lacks specificity. 'Build a cash flow model' without specifying 13-week or methodology. Board deck is the right idea but no detail on what **goes** in it. Curveball response is reasonable but reactive — doesn't quantify the impact or lay out parallel work streams. No concrete 30-day plan with weekly milestones.* |
| --- |

## 3.3 Mock Response C — Mediocre

| **Mock Response C**   •   **Expected: 48–55** "I'd come in and first do a deep dive into all the financials. I'd want to understand the P&L, the balance sheet, and where the money is going. Then I'd put together a presentation for the board. I think the sales comp issue is important and I'd want to address that. I'd also look at whether there are cost-cutting opportunities. [After curveball] Losing 18% of revenue is definitely concerning. I'd recommend we focus on finding replacement revenue and diversifying our customer base so we're not so dependent on any single customer. We should probably start the bridge round process as a safety net." ***Why this scores in this range: ****Generic approach ('deep dive into financials') without specifying what to build or in what order. No awareness of the 3-week deadline. Curveball response is a textbook answer ('diversify customer base') that doesn't address the immediate situation. Jumps to bridge round recommendation without analysis. No 30-day plan.* |
| --- |

## 3.4 Mock Response D — Poor

| **Mock Response D**   •   **Expected: 25–35** "I'd start by meeting with the CEO and understanding what they need. Every company is different, so I'd want to get the lay of the land before making any recommendations. I'd probably review the financials and meet with the team. For the board meeting, I'd help the CEO prepare whatever they need. [After curveball] That's a tough situation. I'd recommend the CEO talk to the customer and try to save the relationship. In my experience, most churn can be prevented with the right conversation. If they really leave, we'd need to find ways to make up the revenue." ***Why ******this****** scores in this range: ****No specific actions, models, or timelines. Entirely reactive and generic. Could apply to any company in any situation. Curveball response is platitudes ('the right conversation') with no analytical framework. No awareness of runway urgency. **Would** not instill confidence in a founder or board.* |
| --- |

# 4. Running the Calibration

Calibration is the process of verifying that Claude's scoring matches the expected ranges for the four mock responses. V1 was written for a Claude API workflow; V2 reflects the Phase 1 claude.ai workflow. The mechanics are the same; only the tool changes.

## 4.1 Step-by-step process

- Open a new conversation in claude.ai. Use Claude Opus 4.7 if available — best reasoning for calibration.

- Paste the CFO Scoring Prompt (FS-DOC-011, the .md source) as the first message. Wait for Claude's brief acknowledgment.

- Paste Mock Response A as the transcript. Claude returns a structured scoring report with per-dimension evidence, reasoning, and a SCORE BLOCK.

- Record Claude's dimension scores and composite in the comparison table (Section 4.2).

- Repeat in a fresh conversation for Mocks B, C, and D. Do not reuse the same conversation across mocks — each mock should be scored in a clean context.

- Repeat the full cycle 3 times for each mock (so 12 total runs: A ×3, B ×3, C ×3, D ×3). This measures run-to-run consistency.

- Compare against expected scores. Green = within 5 points of expected. Yellow = 6–10 points off. Red = 11+ points off.

- If scores are consistently off, follow the fixes in Section 5 and re-run.

| **Why fresh conversations matter** Claude's scoring can be anchored by context from prior messages in the same conversation. If you score Mock A first in a conversation, then paste Mock B in the same conversation, Claude may unconsciously anchor Mock B's scores against A. A fresh conversation per mock removes this contamination and produces cleaner calibration data. |
| --- |

## 4.2 Comparison table template

| **Mock** | **Financial Modeling** | **Strategic Comm** | **Crisis Response** | **Stakeholder Mgmt** | **Operational Exec** | **Composite** |
| --- | --- | --- | --- | --- | --- | --- |
| A: Excellent (expected) | 18–19 | 17–19 | 18–20 | 17–18 | 18–19 | 88–95 |
| B: Solid (expected) | 14–16 | 13–15 | 13–15 | 12–14 | 13–15 | 68–75 |
| C: Mediocre (expected) | 10–12 | 9–11 | 9–11 | 9–11 | 8–10 | 48–55 |
| D: Poor (expected) | 5–7 | 5–7 | 4–6 | 5–7 | 4–6 | 25–35 |
| Claude Run 1 | [fill in] | [fill in] | [fill in] | [fill in] | [fill in] | [fill in] |
| Claude Run 2 | [fill in] | [fill in] | [fill in] | [fill in] | [fill in] | [fill in] |
| Claude Run 3 | [fill in] | [fill in] | [fill in] | [fill in] | [fill in] | [fill in] |

**Tip: **record the full calibration runs in a shared Google Sheet in **02_Operational/Templates/Calibration Runs/** so results accumulate over time. This becomes the record of how the rubric evolved.

## 4.3 Real-candidate validation

After the mock calibration hits targets, the real test is real candidates. Target metric: rank-order correlation of 0.8 or higher between Kevin's independent scoring and Claude's scoring across the first 5–10 real candidates.

- Kevin runs the assessment live per the CFO Assessment Delivery Protocol.

- Transcript is scored by Claude via the CFO Scoring Prompt.

- Kevin independently scores the same transcript without looking at Claude's output first.

- Compare. Where Kevin and Claude disagree, analyze the evidence cited.

- If the disagreement is Claude over-crediting vague language → tighten anchor language in the prompt.

- If the disagreement is Claude missing nuance Kevin caught live → this is expected; Claude only sees the transcript, not the live session. Acceptable within reason.

# 5. Common Calibration Issues and Fixes

| **Issue** | **Symptom** | **Fix (update to CFO Scoring Prompt)** |
| --- | --- | --- |
| Score inflation | All mocks score 10+ points above expected. Even Mock D scores 50+. | Add specific evidence requirements to each anchor. Require Claude to cite exact phrases from the transcript that justify each score. Add: 'A score of 18+ requires the candidate to name a specific model AND describe the methodology.' |
| Dimension collapse | All five dimensions get similar scores for the same response (e.g., 14/15/14/15/14). | Add contrasting examples to the prompt: 'A candidate can score 18 on Financial Modeling but 10 on Strategic Communication if they build great models but can't explain them to a non-financial CEO. Score dimensions independently.' |
| Run-to-run variance | Same mock scores 72 on one run and 85 on another. | Already in the prompt: chain-of-thought requirement to list evidence for and against before scoring. If variance persists, strengthen to: 'Before assigning the numeric score, list 3–4 direct quotes as evidence. Then assign the score based only on that evidence.' |
| Curveball underdifferentiation | Mock A and Mock B get similar Crisis Response scores. | Emphasize in the rubric section of the prompt: 'Excellent (18–20) requires: quantifying impact AND addressing CEO's emotional state AND proposing parallel work streams. Solid (12–17) has 1–2 of these but not all three. Mediocre (6–11) has 0–1.' |
| Execution over-scoring | Generic plans ('I'd review the financials') score 12+ on Execution. | Tighten the 12+ anchor: 'A score of 12+ on Operational Execution requires specific weekly milestones with named deliverables. Vague action verbs (review, assess, analyze, take a look at) without specifics cap at 11.' |

# 6. Calibration Cadence

When to run calibration. This is new in V2 — V1 treated calibration as a pre-launch gate; V2 reflects the iterative Phase 1 approach.

## 6.1 Pre-launch (done once, before first real candidate)

- Run the full mock calibration (Section 4.1) once to validate the v1.0 CFO Scoring Prompt

- Target: all four mocks score within 5 points of expected on composite, within 3 points per dimension

- If targets not met, apply fixes per Section 5 and re-run until clean

- This is a one-session exercise (~2 hours). Do not delay launch to chase perfection — v1.1 of the prompt can be tuned against real candidates.

## 6.2 After first 3–5 real candidates (first tune)

- Compare Kevin's independent scoring vs. Claude's scoring on those candidates

- Target: rank-order correlation 0.8 or higher

- Where disagreements cluster on specific dimensions, refine the anchor language

- Save a new version of the scoring prompt (v1.1) and note what changed

- Re-run the mock calibration with the new prompt to verify the mocks still score correctly

## 6.3 Every 10 real candidates (ongoing tune)

- Spot-check 2–3 recent transcripts against Kevin's independent scoring

- If systemic issues appear, refresh the prompt and re-run full calibration

- Log all prompt revisions in the calibration log so prompt version history is tracked against candidate assessments

## 6.4 Phase 2 transition

When moving from claude.ai to a Supabase Edge Function for scoring (post ~10 placements), run the full mock calibration on the new execution path **before** running real candidates through it. The prompt may need minor adjustments for API-formatted input (vs. conversational paste). Verify mocks still hit expected ranges before handing scoring over to the function.

# 7. Related Documents

| **Document** | **Doc ID** | **Relationship ****to**** this toolkit** |
| --- | --- | --- |
| CFO Assessment Delivery Protocol | FS-DOC-010 | The end-to-end operational playbook for running assessments. This toolkit focuses on scoring calibration; the Protocol covers delivery, post-session workflow, operator notifications, and edge cases. |
| CFO Scoring Prompt (markdown) | FS-DOC-011 | The actual prompt pasted into claude.ai. When calibration finds issues, the fix is usually to update this file. |
| CFO Scoring Prompt (Word) | FS-DOC-012 | Reference copy of the prompt for reading and review. |
| CFO Assessment Scoring Workbook | FS-DOC-021 | Per-candidate scoring template. Kevin enters dimension scores from Claude's output here. Used both for calibration runs and real candidate scoring. |
| Master System Specification V2 | FS-DOC-002 | Section 5.3 describes the Phase 1 assessment stack and how scoring fits into the 5-layer operator verification process. |

**End of LLM Calibration Toolkit V2. ***This document should be used in conjunction with the CFO Assessment Delivery Protocol, CFO Scoring Prompt, and CFO Assessment Scoring Workbook. For COO and CMO calibration toolkits, the same structure will be applied when candidates enter those pipelines (deferred per Phase 1 priorities).*

| **Version log** v1.0 (March 2026) — initial toolkit, written assuming Claude API-administered simulations. v2.0 (April 17, 2026) — refreshed for Phase 1 facilitated-live model. Added operational context, updated calibration workflow for claude.ai, added calibration cadence guidance, added cross-references to current documents. Scenario, rubric, mocks, and comparison table preserved verbatim. |
| --- |

	*CONFIDENTIAL — Internal Use*	Page 1 of 2