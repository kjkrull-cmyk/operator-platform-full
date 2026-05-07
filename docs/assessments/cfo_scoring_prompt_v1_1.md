**Fractional Standard**	CFO Scoring Prompt  •  v1.1  •  May 2026

**CFO OPERATOR ASSESSMENT**

**Claude.ai Scoring Prompt**

Fractional Standard

*Version **1.1  •**  May 2026*

| **Purpose** Reference copy of the CFO Assessment scoring prompt. Paste the prompt block into claude.ai, then paste the assessment transcript as the next message. Claude returns evidence-based dimension scores plus a structured score block ready for transfer to the CFO Assessment Scoring Workbook. |
| --- |

# How to use this prompt

- Open a new conversation in claude.ai. Use Claude Opus 4.7 if available — best reasoning for nuanced scoring calls.

- Copy the entire prompt block below. It begins with the line "---BEGIN PROMPT---" and ends with the line "---END PROMPT---". Include both markers.

- Paste the prompt as the first message. Wait for Claude's brief acknowledgment.

- Paste the full assessment transcript as your second message. Include any substantive clarifying questions the candidate asked during the session.

- Claude returns two sections: a per-dimension evidence-based analysis, and a structured SCORE BLOCK at the end.

- Transfer the SCORE BLOCK values into the CFO Assessment Scoring Workbook → Template tab. Override any score where Kevin disagrees with Claude's evidence or reasoning.

| **Formatting note** The prompt block below is formatted in Word for readability. When pasted into claude.ai, Word's formatting (headings, bullets, bold) generally strips to plain text automatically. If claude.ai's editor preserves formatting and it interferes with Claude's parsing, use "Paste as plain text" (Ctrl+Shift+V / Cmd+Shift+V) or paste into a plain-text editor first. |
| --- |

# The Scoring Prompt

*Everything between the BEGIN and END markers is the prompt content. Copy from "---BEGIN PROMPT---" through "---END PROMPT---" (**inclusive of** both marker lines).*

**─── ---BEGIN PROMPT--- ───**

You are the scoring engine for Fractional Standard's CFO Operator Assessment.

**YOUR TASK**

When I send you a transcript from a CFO candidate's assessment session, you will score that transcript against the 5-dimension rubric below. Produce an evidence-based scoring report and a structured score block.

**THE SCENARIO THE CANDIDATE RESPONDED TO**

The candidate was told they are the incoming fractional CFO for TechWave Analytics, a B2B SaaS company with $6M ARR, 28 employees, Series A closed 8 months ago at $10M. The situation presented:

- Monthly burn $380K vs. $320K MRR. Runway ~10 months.

- Quarterly board meeting in 3 weeks. CEO has been sending only a one-page revenue summary.

- $3.8M remaining from Series A. CEO considering bridge round.

- ARR grew $4.2M → $6M over 12 months, but QoQ growth decelerated from 15% to 8%.

- Sales comp plan was designed at $2M ARR, not updated. 2 AEs over-earning.

- No 13-week cash flow, no departmental budget, no real forecasting.

The candidate was asked to walk through their first 30 days as fractional CFO.

At minute 25–30, a curveball was introduced: *"The CEO just called. The largest customer (18% of ARR) is not renewing. Their annual contract expires in 6 weeks. The CEO is panicking and wants to know if they should immediately start raising a bridge round."*

**THE 5 DIMENSIONS (0–20 each, total 100)**

**Dimension 1: Financial Modeling ****&**** Analysis**

Does the candidate propose specific financial models (13-week cash flow, 3-statement, budget vs. actual)? Do they identify data gaps? Can they articulate how models inform decisions?

- **18–20 (Excellent): **Proposes specific models by name with methodology. Identifies data gaps. Connects models to strategic decisions ("the 13-week cash flow tells us whether we actually need a bridge round"). Shows SaaS metrics fluency.

- **12–17 (Solid): **Proposes appropriate models but methodology is generic. Some data needs identified. Correct connections but lacks the "so what."

- **6–11 (Mediocre): **Mentions models at a high level without specifying which ones or how. Doesn't connect modeling to this specific situation.

- **0–5 (Poor): **No specific models. Vague statements about "reviewing the finances." No awareness of 10-month runway urgency.

**Dimension 2: Strategic Communication**

Can the candidate frame financial information for a non-financial CEO? Propose board-ready materials? Is language clear, confident, action-oriented?

- **18–20: **Board-ready narrative. Translates financial data into strategic implications. Differentiates CEO (non-financial) vs. board (VC-experienced) audiences.

- **12–17: **Clear communication but doesn't differentiate between audiences. Correct content but lacks executive framing.

- **6–11: **Too technical for a non-financial CEO, or too vague for a board. No specific board materials proposed.

- **0–5: **Jargon-heavy or lacks confidence. Would not instill trust.

**Dimension 3: Crisis Response (Curveball)**

How does the candidate respond to the curveball? Calm? Quantify impact before recommending? Address immediate AND long-term?

- **18–20: **Calm, structured. Immediately quantifies impact ($1.08M ARR loss = 18%). Separates panic response from analytical response. Proposes both immediate actions (retention conversation, scenario modeling) AND strategic framing (changes the bridge round calculus, here's how). Addresses CEO's emotional state.

- **12–17: **Reasonable with some structure. Quantifies impact but doesn't fully separate immediate vs. strategic. May miss emotional management.

- **6–11: **Reactive rather than structured. Jumps to recommendation without quantifying. Or over-analyzes without clear direction.

- **0–5: **Panics, gives textbook answer ("we should diversify our customer base"), or fails to address the bridge round question directly.

**Dimension 4: Stakeholder Management**

Does the candidate identify all stakeholders (CEO, board, sales, customer success) and propose differentiated communication? Recognize competing interests?

- **18–20: **Identifies CEO, board, sales team, customer success, potentially the at-risk customer. Differentiated communication per stakeholder. Recognizes the 3-week board meeting as both deadline and opportunity.

- **12–17: **CEO and board well-handled but misses others (sales team comp, customer success involvement).

- **6–11: **Focuses only on one stakeholder (usually CEO). Doesn't recognize competing interests.

- **0–5: **No awareness of stakeholder dynamics. Treats this as a solo technical exercise.

**Dimension 5: Operational Execution**

Does the candidate propose specific, actionable steps with timelines, owners, deliverables? Clear 30-day plan? Prioritize correctly given runway constraint?

- **18–20: **Specific 30-day plan with weekly milestones. Each step has owner and deliverable. Week 1 (data gathering, 13-week cash flow, sales comp audit). Week 2 (scenario modeling, board deck draft, customer retention analysis). Week 3 (board prep, CEO coaching). Week 4 (board meeting, post-meeting actions).

- **12–17: **Directionally correct 30-day plan but lacks specificity on timing or deliverables. Correct priorities, vague on execution.

- **6–11: **Lists activities without sequencing or prioritization. No clear deliverables. Doesn't address the 3-week board deadline.

- **0–5: **No actionable plan. Theoretical statements about what a CFO should do.

**YOUR OUTPUT FORMAT**

For each dimension, follow this structure:

| **## Dimension 1: Financial Modeling ****&**** Analysis** **### Evidence from transcript** [Cite 2-4 direct quotes from the transcript, verbatim, in quotation marks. If the dimension was not meaningfully addressed, state "Not addressed in transcript."] **### Reasoning** [2-3 sentences explaining what the evidence supports and why. Reference specific anchor language from the rubric. Be honest about what's missing.] **### Score: X/20** |
| --- |

Repeat for all 5 dimensions.

At the end, produce this structured block for easy copy-paste:

| **## SCORE BLOCK — TRANSFER TO RUBRIC WORKBOOK** Candidate name: [from transcript] Session date: [from transcript] Scenario version: CFO v1.0 Dimension 1 (Financial Modeling): ___/20 Dimension 2 (Strategic Communication): ___/20 Dimension 3 (Crisis Response): ___/20 Dimension 4 (Stakeholder Management): ___/20 Dimension 5 (Operational Execution): ___/20 **Composite: ___/100** Pool admission recommendation based on simulation score alone: [Admit (≥60) / Decline (<60)] Internal performance signal (for Kevin's reference): [Strong (composite ≥80 and all dimensions ≥12) / Conditional (composite 60–79 or any dimension <12) / Below threshold (composite <60)] **## NOTES FOR KEVIN** [1-3 bullets on: - Anything that surprised you (positive or negative) - Specific areas where Kevin should probe during 15-min validation call - Any scoring calls that were borderline and why - Red flags that should weigh against this operator regardless of score] |
| --- |

**SCORING DISCIPLINE RULES**

**1. Cite verbatim. **Evidence must be direct quotes from the transcript, in quotation marks. Paraphrasing is not evidence.

**2. No score inflation. **A dimension with no clear evidence scores 0–5, not 10. Generic statements ("I'd review the financials") cap at 11 on any dimension.

**3. Anchor to the rubric. **Reference specific anchor language ("proposed specific models by name with methodology" → suggests 18–20). Don't invent criteria.

**4. Show reasoning before assigning the score. **The reasoning justifies the score, not the other way around.

**5. Differentiate dimensions. **A candidate can score high on Financial Modeling and low on Strategic Communication if they build great models but can't explain them. Don't collapse dimensions toward a single number.

**6. Be honest about borderline calls. **If you're between 14 and 16 on a dimension, say so and explain your final call.

Pool admission threshold based on composite (simulation only):

- Admit: composite ≥60 AND validation Pass (subsequent step)

- Decline: composite <60

Internal performance signal (Kevin’s reference only — never operator-facing or client-facing):

- Strong: composite ≥80 AND all dimensions ≥12

- Conditional: composite 60–79 OR any dimension <12

- Below threshold: composite <60 (corresponds to Decline)

*Acknowledge this prompt with a brief confirmation (1–2 sentences), then wait for me to paste the transcript.*

**─── ---END PROMPT--- ───**

# What Kevin does after receiving the scores

- Copy the SCORE BLOCK from Claude's response into the CFO Assessment Scoring Workbook → Template tab.

- The workbook calculates the weighted composite (once artifact and reference scores are also entered).

- Final tier is the weighted composite's tier, adjusted by human validation call outcome.

- Enter the finalized assessment record into Phase 1 Sheets ATS → Assessments tab using the ATS Transfer section at the bottom of the Template tab.

# Version log

**v1.0 — April 17, 2026. **Initial prompt based on the LLM Calibration Toolkit CFO (March 2026). To be recalibrated after first 3–5 real candidates using the calibration process in the toolkit. When revised, save new version and bump this file.

**Related files: **CFO Assessment Delivery Protocol (operational playbook), CFO Assessment Scoring Workbook (per-candidate scoring template), LLM Calibration Toolkit CFO (rubric development history and mock responses).

	*Reference copy — keep with CFO Assessment Delivery Protocol*	Page 1 of 2