**FRACTIONAL STANDARD**

**OPERATIONS PLAYBOOK V8**

*Workflows • Onboarding • Assessment Optimization • Cash Flow*

Version 1.0  •  May 2026  •  CONFIDENTIAL  •  Kevin Krull, Chris —  Co-Founders

| **WHAT THIS DOCUMENT IS** The operational source of truth for how Fractional Standard runs — from first client contact through off-ramp, and from operator sourcing through placement. Updated May 2026 to V8 to align with the V8 Financial Model, Pricing Model V7, MSA v1.1, and ICA v1.1: allocation-based retainer model (no hourly cap; allocation expressed as approximate weekly hours), fixed monthly Operator fee per Engagement (calculated quad-normalized), no Activation Fee, no externally-facing Operator Tier system, and the full settled engagement-terms set (30-day Engagement-Phase Replacement Right, 4-tier Conversion Fee structure, Direct-Hire Accommodation as MSA Exhibit E). Tooling references reflect the current stack: HubSpot (client CRM), Phase 1 Sheets ATS (Google Sheets for Kevin's assessment and matching layer in Phase 1, migrating to Supabase in Phase 2), Clockify (time tracking), Stripe (billing), Cal.com (scheduling), Claude API (AI layer), DocuSign (signatures). Assessment rubrics, scoring logic, and AI governance framework live in companion documents: CFO Assessment Delivery Protocol, CFO Assessment Scoring Workbook, LLM Calibration Toolkit, and AI Governance Framework. |
| --- |

**Contents**

| **#** | **Section** |
| --- | --- |
| 1 | Client Workflow (End-to-End) |
| 2 | Operator Workflow (End-to-End, with Early Rate Disclosure) |
| 3 | Rate & Fee Disclosure — Onboarding Script |
| 4 | Reference Two-Track Process |
| 5 | Engagement Onboarding — Operator Brief Template |
| 6 | How Fractional Standard Engagements Work (Operator-Facing) |
| 7 | First 30 Days — Structural Milestones |
| 8 | Assessment Process Optimization |
| 9 | Cash Flow & Financing |
| 10 | Late Payment Escalation Process |

**1. Client Workflow (End-to-End)**

Every step from first contact through off-ramp, with owners, tools, timing, and handoff triggers.

| **#** | **Stage** | **What Happens** | **Owner** | **Tool** | **Timing** | **Handoff / Trigger** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Lead Identified | Founder enters pipeline via network, event, LinkedIn, or inbound diagnostic. | Chris | HubSpot | Ongoing | Chris logs contact in HubSpot deal pipeline. |
| 2 | Diagnostic Scheduled | Chris holds initial call or founder completes AI diagnostic on website. | Chris | HubSpot + Cal.com | 24–48 hrs | Diagnostic complete → HubSpot stage update. |
| 3 | Diagnostic Delivered | AI generates 'What a Fractional CFO/COO/CMO Unlocks' output. Attached to HubSpot deal. | Auto / Chris | Claude API + HubSpot | Same day | Chris reviews output, sends to founder with follow-up CTA. |
| 4 | MSA Executed | Chris sends MSA via DocuSign. Founder executes. Payment authorization (Stripe pre-auth) captured for monthly retainer billing starting on Engagement Start Date. | Chris + Founder | DocuSign + Stripe + HubSpot | 1–7 days | MSA executed + payment authorization on file → Zapier creates Matching Queue record in Phase 1 Sheets ATS. |
| 5 | Matching in Progress | Kevin opens filtered ATS view: pool operators matching role, stage, industry, availability. Selects 2–3 candidates. | Kevin | Phase 1 Sheets ATS | 2–5 days | Shortlist ready → Kevin sends operator profiles to Chris. |
| 6 | Client Intro & Interview | Chris sends operator profile(s) to founder. Founder selects preferred candidate. Interview scheduled via Cal.com. | Chris | Email + Cal.com | 3–7 days | Founder selects operator → Chris confirms with Kevin. |
| 7 | Engagement Kickoff | Kevin creates Engagement record in ATS. SOW (per ICA Exhibit A) issued to Operator and signed via DocuSign. Operator receives kickoff brief. First retainer invoice issued via Stripe (monthly, in advance). | Chris + Kevin | DocuSign + ATS + Stripe | 2–3 days | SOW signed → operator notified → kickoff meeting scheduled. |
| 8 | Engagement Active | Operator begins work. Retainer billed monthly in advance via Stripe. Operator logs hours weekly in Clockify (utilization signal only — not the basis for pay). Operator receives fixed monthly fee on the 15th of each month for prior month’s services. | Operator | Clockify + Stripe | Ongoing | Day 14 pulse check auto-triggers. |
| 9 | Day 14 Pulse | Automated 3-question check-in to client and operator. If score <3 or 'too much' on time: flag for Chris. | Auto / Chris | Email auto + ATS | Auto | Green → no action. Yellow/Red → Chris calls client. |
| 10 | Day 45 Pulse | Second automated check-in. Internal review of logged hours against Tier allocation as a utilization signal. | Auto / Kevin | Email auto + ATS + Clockify | Auto | Sustained scope above allocation → flag for tier-upgrade or scope-expansion conversation (MSA §6.4). |
| 11 | Day 60 Check-in | Chris has tier right-sizing conversation. First 10–15 placements: informal call. Later: triggered only by data flags. | Chris | Phone / Zoom | 30 min | Tier change → updated MSA addendum. No change → continue. |
| 12 | Day 75 Pulse + Renewal | 3-month commitment ending. Automated pulse + Chris has extension conversation. | Chris | Email auto + Phone | Auto + 20 min | Extends → month-to-month. Churns → off-ramp process. |
| 13 | Ongoing Monthly | Retainer billed monthly in advance via Stripe. Operator logs hours weekly in Clockify (utilization signal). Quarterly: Chris informal check-in for expansion signals. | Chris + Operator | Stripe + Clockify | Ongoing | Sustained allocation overrun → tier-upgrade conversation. Sustained underuse → downgrade offer. |
| 14 | Off-Ramp / Graduation | Client exits retainer (FTE conversion, project complete, or churn). Chris conducts exit debrief. Operator returns to available pool. | Chris + Kevin | HubSpot + ATS | 1 week | FTE conversion → conversion fee per MSA Exhibit D (4-tier tenure-based: 20%/17%/13%/10% of FY1 base salary). Churn → debrief data captured. |

| **TOTAL TIME — LEAD TO PLACEMENT ACTIVE: 2–4 WEEKS** Critical path: diagnostic (1–2 days) → MSA execution (1–7 days) → matching (2–5 days) → interview + selection (3–7 days) → SOW + kickoff (2–3 days). |
| --- |

**2. Operator Workflow (End-to-End)**

This workflow incorporates early rate disclosure during the initial screen (Step 2), a two-track reference process (Step 5b), and accommodation for operators who cannot provide artifacts due to confidentiality agreements.

| **#** | **Stage** | **What Happens** | **Owner** | **Tool** | **Time** | **Output / Trigger** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Sourced | Operator identified via LinkedIn Sales Nav, Kevin's network, referral ($500 bonus), or fractional community. ATS record created. | Kevin | LinkedIn + ATS | Ongoing | Operator record in Phase 1 Sheets ATS. |
| 2 | Initial Screen + Rate Disclosure | 10-min call. Kevin confirms fractional interest, reviews background, and shares the rate range for their role (see Section 3 script). If range accepted, proceed. If not, end gracefully. | Kevin | Phone + ATS | 10 min | Go/no-go. ~50% pass rate. Rate range accepted. |
| 3 | Simulation Scheduled | Role-specific simulation (CFO/COO/CMO) scheduled 3–7 days out. Operator receives prep brief: format, duration (45–60 min), AI disclosure notice. | Kevin | Cal.com + ATS | 3–7 days | Assessment record created. AI disclosure sent. |
| 4 | Simulation Complete | Live Phase 1 facilitated session via Zoom. Transcript scored via claude.ai on 100-point rubric across 5 dimensions. Kevin reviews Claude's scores against his own observations. | Kevin + AI | Zoom + Otter + claude.ai + Scoring Workbook | 45–60 min + 20 min scoring | Dimension scores + composite in Scoring Workbook → transferred to ATS. |
| 5a | Artifacts (PARALLEL) | Operator submits 2 work samples. Option A: anonymized real deliverables. Option B: self-created samples using provided prompts (for operators with NDA/IP constraints). Kevin scores using artifact rubric. | Op + Kevin | Email + Scoring Workbook | 3–5 days | Artifact scores entered. |
| 5b | References (PARALLEL — TWO TRACKS) | Track A (preferred): 2 structured reference calls during assessment. Fastest path to pool admission. Track B (accommodation): Provisional admission to pool; references required before first client introduction. Operator available in pool but not presented. See Section 4 for detail. | Kevin | Phone + Scoring Workbook | 5–10 days | Reference scores or provisional status. |
| 6 | Human Validation | Kevin conducts 15-min video call for candidates scoring 60+ composite. Pass/fail on communication clarity, professionalism, founder-fit. Only after sim + artifacts. | Kevin | Zoom + ATS | 15 min | Pass/fail + notes. |
| 7 | Pool Admission Decision | Composite: 60% sim / 15% artifacts / 15% refs + human gate. Threshold (~60+) qualifies for the operator pool. Operator hourly rate for the role (single threshold rate per role: CFO $150/hr, COO $165/hr, CMO $145/hr, CTO $185/hr, CRO $170/hr) confirmed to operator. No externally-facing operator tier or rate band. | Kevin | Scoring Workbook formula | Same day | Pool admission + rate confirmed to operator. |
| 8 | Contractor Agreement | Operator signs Independent Contractor Agreement (ICA v1.1) covering: hourly rate (used to derive fixed monthly fee per Engagement), allocation-based engagement structure, non-solicitation with 12-month prospective client lookback, IP provisions, AI disclosure acknowledgment, and matching-data license. | Kevin | DocuSign | 1–2 days | Signed ICA on file. |
| 9 | Background Check | Checkr or GoodHire initiated for all admitted operators ($45–$80). Required before first placement. | Kevin | Checkr / GoodHire + ATS | 3–7 days | Clear → available. Flag → review. |
| 10 | Available for Matching | Operator appears in matching views when client needs align. Profile includes: role, rate, stage tags, industry tags, availability score, internal performance signals from prior Engagements. | Auto | Phase 1 Sheets ATS | Ongoing | Matched when client need arises. |
| 11 | Placed | Operator receives client kickoff brief (diagnostic output, Engagement Tier and allocation, fixed Operator Monthly Fee, playbook). Engagement begins. | Kevin | ATS + Email | Day of | Operator starts logging hours weekly in Clockify (utilization signal). |
| 12 | Ongoing Engagement | Weekly hour log in Clockify (utilization signal). Pulse check responses at Day 14/45/75. Operator flags issues to Kevin. Operator paid fixed monthly fee on 15th of each month for prior month services. | Operator | Clockify + Stripe + Email | Ongoing | Engagement data feeds matching engine over time. |
| 13 | Engagement Ends | Operator returns to available pool. Engagement outcome data captured. Profile auto-enriched with new experience. | Kevin | ATS | End date | Referral ask at 90-day mark of successful engagements. |

| **TOTAL TIME — SOURCED TO AVAILABLE FOR MATCHING: 3–4 WEEKS** Critical path: screen (1–2 days) → simulation (3–7 days to schedule + 60 min) → artifacts + references in parallel (5–10 days) → human validation (15 min) → pool admission + background check (3–7 days). |
| --- |

**3. Rate & Fee Disclosure — Onboarding Script**

This is what Kevin says during the 10-minute initial screen when the operator asks about compensation. Rate and fee disclosure happens early — before the simulation — so operators do not invest hours in an assessment only to discover a compensation mismatch. There is no externally-facing operator tier or rate band. There is one threshold hourly rate per role, used internally to derive a fixed monthly fee per Engagement.

| **KEVIN'S SCRIPT — RATE & FEE DISCLOSURE** *"Great question. For Fractional CFO operators, our threshold rate is $150 per hour — used internally to set your monthly fee for each Engagement. On a Foundation Engagement (~5 hours per week), that works out to about $3,250 per month, paid in full on the 15th of each month for the prior month’s work. On Growth (~10 hrs/wk), about $6,500/mo. The fee is fixed each month — you don’t bill hourly, and your monthly take-home doesn’t fluctuate based on whether a calendar month has 4 or 5 work-weeks. You’ll log hours weekly in Clockify, but those hours are a utilization signal for us, not the basis for your pay. In exchange, we handle all client acquisition, billing, contracts, and admin. You never write a proposal or chase an invoice. Does that work for you?"* |
| --- |

**Reference rate schedule by role (for Kevin’s reference — quote only the role being screened)**

| **Role** | **Hourly Rate** | **Foundation Monthly Fee (~5 hrs/wk)** | **Growth Monthly Fee (~10 hrs/wk)** | **Scale Monthly Fee (~15 hrs/wk)** | **Embedded Monthly Fee (~20 hrs/wk)** |
| --- | --- | --- | --- | --- | --- |
| CFO | $150/hr | $3,250/mo | $6,500/mo | $9,750/mo | $13,000/mo |
| COO | $165/hr | $3,575/mo | $7,150/mo | $10,725/mo | $14,300/mo |
| CMO | $145/hr | $3,150/mo | $6,275/mo | $9,425/mo | $12,575/mo |
| CTO ¹ | $185/hr | $4,000/mo | $8,025/mo | $12,025/mo | $16,025/mo |
| CRO ¹ | $170/hr | $3,675/mo | $7,375/mo | $11,050/mo | $14,725/mo |

¹ Extended catalog — 0% allocation in Y1.

| **NOTE ON ALLOCATION-BASED PRICING** Per Pricing Model V7, client-facing pricing is an allocation-based fixed monthly retainer (~5/10/15/20 hrs/wk), not metered hourly billing. The fees above are internal Operator compensation, calculated as (weekly hours target × hourly rate × 52 ÷ 12), rounded to the nearest $25. The Operator is paid the full monthly fee regardless of actual hours logged in any given month — within-month flex is normal. Sustained scope expansion across two or more consecutive months triggers a tier-upgrade conversation between Chris/Kevin and the Client (MSA §6.4), not retroactive operator overage pay. |
| --- |

**4. Reference Two-Track Process**

Some operators transitioning from corporate roles or early-stage founders cannot produce references on a 2-week window. Rather than slowing the pipeline, Fractional Standard offers a two-track reference process.

| **Dimension** | **Track A: Standard (Preferred)** | **Track B: Deferred (Accommodation)** |
| --- | --- | --- |
| When references happen | During assessment (parallel with artifacts) | After pool admission, before first client intro |
| Requirements | 2 structured reference calls completed | 2 references provided; calls completed before client presentation |
| Pool status | Full pool admission | Provisional admission ('Pending References') |
| Matching status | Immediately available | In pool but not presented to clients until references clear |
| Time to first placement | Fastest (3–4 weeks from sourced) | Delayed 1–2 weeks vs Track A |
| Who uses this | Most operators (~80%) | Operators transitioning from corporate, new to fractional (~20%) |
| Kevin's framing | "References during assessment is the fastest path to your first placement." | "We can admit you provisionally and complete references before your first client intro." |

**5. Engagement Onboarding — Operator Brief Template**

Sent to the operator upon placement confirmation. Customized per engagement. This is the scaffolding — not a domain playbook. Domain playbooks (e.g., what a CFO should deliver in the first 90 days at a Series A company) will be built from engagement outcome data after 10–15 completed placements per role, authored by top-performing operators.

| **Field** | **Value** |
| --- | --- |
| Client Company | [Company Name] |
| Client Contact | [Founder / CEO Name, Email, Phone] |
| Company Stage | [Stage 1–6 from diagnostic] — [description] |
| Revenue / Size | [$X ARR or Revenue], [X employees] |
| Role Placed | [Fractional CFO / COO / CMO] |
| Engagement Tier | [Foundation / Growth / Scale / Embedded] |
| Tier Allocation | ~[20 / 40 / 60 / 80] hrs/mo (~[5 / 10 / 15 / 20] hrs/wk) — approximate capacity, not metered cap |
| Monthly Retainer (Client-facing) | [$X,XXX/mo] — fixed, paid by Client to Fractional Standard |
| Operator Monthly Fee | [$X,XXX/mo] — fixed, paid by Fractional Standard to Operator on the 15th of each month for prior month services. Calculated as (weekly hours target × hourly rate × 52 ÷ 12), rounded to nearest $25. |
| Start Date | [Date] |
| Commitment Period | 3-month minimum, then month-to-month |
| Fractional Standard Contacts | Kevin (Phone/Email) for operational issues; Chris (Phone/Email) for client relationship issues |

**5.1 What the Diagnostic Revealed**

[Populated from AI diagnostic output and Chris's intake notes. Bullet list example below.]

- Primary Need: [e.g., Board reporting infrastructure and Series B fundraising prep]

- Secondary Needs: [e.g., Cash flow modeling, sales comp audit, 13-week cash flow model]

- Client Pain Points: [e.g., CEO doing finances in a spreadsheet, board getting one-page summary, no financial projections]

- Key Stakeholders: [e.g., CEO (non-financial founder), 2 VC board members, VP Sales (comp issue)]

- Upcoming Deadlines: [e.g., Board meeting in 3 weeks, Series B conversations starting Q3]

**6. How Fractional Standard Engagements Work (Operator-Facing)**

Standard language included in every operator brief. This sets expectations about the structural relationship between operator, client, and Fractional Standard.

| **Principle** | **What This Means** |
| --- | --- |
| Hours and Availability | Your Engagement Tier defines an Operator allocation — an approximate weekly capacity (~5/10/15/20 hrs/wk for Foundation/Growth/Scale/Embedded), not a metered cap. Spread your hours across the week based on client needs. Some weeks will be heavier, some lighter. Within-month flex is normal. If you consistently find that the Engagement scope is materially exceeding the allocation across two or more months, let Kevin know — Chris/Kevin will have a tier-upgrade or scope-expansion conversation with the Client. You don’t bill the Client for extra hours. |
| Hour Logging | Log your hours weekly in Clockify (you'll receive access). This takes about 5 minutes per week. It is not a timesheet for client billing or for your pay. You receive a fixed monthly fee regardless of weekly variance. Clockify data is internal: it drives utilization monitoring, tier-fit detection, capacity planning, and over time it becomes the training data for the matching engine. |
| Pulse Checks | You and the client each receive a brief automated check-in at Day 14, Day 45, and Day 75. Three questions: satisfaction (1–5), time commitment fit (too little / right / too much), anything we should know. Takes 60 seconds. If something is off, we'll reach out proactively. |
| Client Relationship | You work directly with the client as their embedded fractional leader. Fractional Standard owns the billing relationship and the MSA. If issues arise (scope disputes, payment, personality conflict), contact Kevin or Chris — do not attempt to resolve billing or contractual issues directly with the client. |
| Replacement Guarantee | We offer clients a 30-day Engagement-Phase Replacement Right (per MSA §13.1). If the Engagement isn’t working in the first 30 days, we work with both parties to resolve it. If replacement is needed, it is handled professionally — you return to the available pool with no penalty. This protects you too: if the client is a bad fit, you are not stuck. |
| If a Client Terminates Mid-Engagement | If a client ends an Engagement before its natural conclusion (whether through the 30-day replacement right, by terminating the MSA, or by mutual agreement), you’re paid on a strict calendar-day proration through your last day of services (per ICA §3.8). The math: (Operator Monthly Fee ÷ days in that calendar month) × days you provided services. There is no additional severance pay. **However**, we make a real commitment in return: for 60 days following your last day of services, you get pool priority — we’ll prioritize you for the next Engagement that fits your role, stage, industry, and availability. The premise is straightforward: we want you placed again, not benched. We may also accommodate individual situations on a case-by-case basis at our discretion. |
| Operator Referral Bonus | $500 total per successful operator referral. $250 paid when the referred operator signs the ICA. $250 paid when the referred operator completes their first Engagement (placed and delivered). Per ICA Exhibit B.3. |
| Referrals | At the 90-day mark, we'll ask if you know other fractional operators who might fit our network (see the Operator Referral Bonus row above) or founders who could benefit from our services ($1,000 bounty for client referrals who complete a 3-month commitment). Always optional, never an obligation. |
| What We Don't Do | We don't tell you how to do your job — you are the domain expert. We don't review your deliverables for technical accuracy. We don't attend your client meetings unless asked. Our job is to match you well, set the engagement up for success, and catch problems early through the pulse check system. |

**7. First 30 Days — Structural Milestones**

These are engagement milestones, not domain deliverables. The operator determines the domain-specific work.

| **When** | **Engagement Milestone** | **Why It Matters** |
| --- | --- | --- |
| Day 1 | Kickoff meeting with client. Review diagnostic findings together. Align on first 30-day priorities. | Sets expectations. Prevents the operator from spending Week 1 'figuring out what the client needs' — the diagnostic already did that. |
| Day 5 | Confirm working cadence with client. First hours logged in Clockify. | Establishes rhythm. Validates that the tier is right. |
| Day 14 | Pulse check (automated). Operator and client both receive it. | Early flag if something is off. Most fixable issues surface here. |
| Day 21 | Check in with Kevin if anything is unexpected (scope larger than allocation, stakeholder dynamics, tooling issues). | Prevents problems from festering until the Day 45 pulse. |
| Day 30 | Deliver first tangible output to client (role-dependent: financial model, ops audit, GTM plan, etc.). | Proves value early. Builds the foundation for the 3-month extension conversation. |

**8. Assessment Process Optimization**

The assessment process must scale from ~25 operators pre-launch to 100+ per year by Year 2 without Kevin becoming the bottleneck. This section covers sequencing, parallelization, batching, and the Phase 1 → Phase 2 transition.

**8.1 Sequencing — What Runs When**

The current five-layer assessment has a natural dependency chain, but two layers can run in parallel.

| **Order** | **Layer** | **Kevin Time** | **Elapsed Time** | **Notes** |
| --- | --- | --- | --- | --- |
| 1 | Initial Screen | 10 min | 1–2 days | Go/no-go gate. ~50% pass rate expected. Includes early rate disclosure. |
| 2 | Simulation | 45–60 min live + 20 min scoring | 45–60 min + same-day scoring | Phase 1: Kevin facilitates live via Zoom; scores transcript via claude.ai. Phase 2: AI-administered with auto-approve for 80+ scores. |
| 3a | Artifact Review (PARALLEL) | 20 min per candidate | 3–5 days for submission | Runs simultaneously with references. |
| 3b | Reference Checks (PARALLEL) | 30 min per candidate (2 calls) | 5–10 days | Runs simultaneously with artifacts. Track A or Track B (see Section 4). |
| 4 | Human Validation | 15 min video call | Same day as scheduled | Only for candidates scoring 60+ composite. |
| 5 | Pool Admission Decision | 5 min | Same day | Formula-driven in Scoring Workbook. Kevin confirms. Single threshold rate per role; no externally-facing tier. |
| 6 | Background Check | 0 min (vendor-administered) | 3–7 days | All admitted candidates. Runs after pool admission. |

| **KEVIN****'****S TOTAL TIME PER CANDIDATE: ~80 MINUTES** That is the critical resource. At 80 minutes per candidate, Kevin can assess 5–6 candidates per week alongside his other responsibilities. Pre-launch target of ~25 admitted operators (requires assessing ~50–62 candidates at 40–50% admission rate) takes 10–12 weeks, which fits the current launch timeline. |
| --- |

**8.2 Batching Strategy**

Rather than processing candidates one at a time, batch by role and stage.

- **Batch simulations by role: **Run all CFO simulations in Week 1, COO in Week 2, CMO in Week 3. This keeps Kevin's calibration consistent within each role (he is not context-switching between rubrics on the same day).

- **Batch artifact reviews: **Review all artifacts from a simulation batch at once. Seeing 5–10 CFO artifacts in a row builds pattern recognition for quality levels.

- **Batch reference calls: **Block 2–3 hours for reference calls rather than scattering them across the week. More efficient and easier to compare across candidates.

- **Batch human validations: **Schedule all 15-minute video calls for a batch on one afternoon. Back-to-back calls with 5-minute breaks.

**8.3 Scale Transition — Phase 1 → Phase 2**

| **Layer** | **Phase 1 (Placements 1–10, ~Months 0–8)** | **Phase 2 (Placements 11+, ~Months 8–18)** |
| --- | --- | --- |
| Initial Screen | Kevin screens 100% | Talent ops hire screens standard; Kevin screens edge cases |
| Simulation | Kevin facilitates live via Zoom; scores transcript via claude.ai | AI-administered via self-serve portal; auto-approve 80+ scores; Kevin reviews 60–79 only |
| Artifact Review | Kevin reviews 100% | Talent ops reviews standard; Kevin reviews top-quintile candidates only |
| Reference Checks | Kevin makes all calls | Talent ops makes calls using structured script; Kevin reviews notes |
| Human Validation | Kevin does all 15-min videos | Kevin validates borderline (composite 60–79) only. 80+ auto-approved with random audit. |
| Background Check | Kevin initiates | Talent ops initiates; auto-triggered upon pool admission |

The talent ops hire (Year 2) is the key unlock. With this hire, Kevin's time per candidate drops from ~80 minutes to ~25 minutes (only reviewing edge cases and top-quintile validation videos). That supports 15–20 assessments per week, sufficient for Year 2's placement volume.

**8.4 Quality Controls at Scale**

- **Random audit: **Kevin reviews 10% of auto-approved assessments monthly to check for scoring drift.

- **Simulation version control: **Each simulation scenario has a version number. When a scenario is updated, all candidates assessed on the old version retain their scores but are flagged if re-assessment is needed.

- **Curveball library: **Build a rotating library of 5–8 curveballs per role so operators cannot coach each other on specific scenarios. Rotate quarterly.

- **Outcome feedback loop: **After 50+ placements, correlate assessment scores with engagement outcomes (extension rate, client satisfaction, NPS). Adjust scoring weights based on what actually predicts success.

**9. Cash Flow ****&**** Financing**

In a managed firm model, the company bills the client and pays the operator. The timing gap between when cash comes in and when it goes out is the float. If managed well, it is a non-issue. If not, it can force you to miss operator payments — which is catastrophic for supply-side reputation.

**9.1 Cash Flow Scenarios**

| **Scenario** | **Cash In Timing** | **Cash Out Timing** | **Float Risk** |
| --- | --- | --- | --- |
| Ideal — Client prepays | 1st of month (before service) | 15th of month (operator pay) | None — cash in before cash out |
| Client pays net-15 | ~15th of month | 15th of month | Low — tight but manageable |
| Client pays net-30 | ~30th of month or next month | 15th of month | High — floating 2–4 weeks of operator cost |
| Client is late (net-45+) | 45+ days after invoice | 15th of month | Critical — funding operator from reserves |
| 4 new placements in a month | First retainers due (monthly in advance) | 4 operators start immediately | High — 4x operator cost before first full retainer cycle; rely on prepaid retainer + line of credit |

**9.2 Quantifying the Float**

At 12 active retainers (Year 1 average), monthly operator payout is approximately $50,000 (12 retainers × ~$4,160 blended Operator Monthly Fee, per V8 Financial Model). If all clients paid on time and prepaid, float is zero. Under realistic assumptions:

| **Assumption** | **Conservative** | **Moderate** | **Aggressive** |
| --- | --- | --- | --- |
| % of clients prepaying | 80% | 60% | 40% |
| % paying net-15 | 15% | 25% | 30% |
| % paying net-30+ | 5% | 15% | 30% |
| Monthly float exposure | ~$8K | ~$25K | ~$50K |
| Peak float (ramp month) | ~$20K | ~$45K | ~$80K |

The peak float month is the most dangerous — typically when you are adding 4+ new placements in a single month, with operators starting immediately and first retainer payments 15–30 days out.

**9.3 Recommendations**

- **Bill monthly in advance per MSA §5.2. **MSA v1.1 requires monthly retainer billed in advance, payable net-14 via Stripe with a pre-authorized payment method on file. Retainers are billed at the beginning of each month, not in arrears. This is standard in managed services and eliminates float pressure.

- **Secure a $75K–$100K business line of credit. **Apply through your business bank (Mercury, Brex, or a local community bank that specializes in startup/SMB lending). A line of credit costs almost nothing if you don't draw on it (small annual fee of $100–$500 plus interest only on drawn amounts at prime + 1–3%). Safety net for timing mismatches — draw when a client is late, repay when payment arrives.

- **Pay operators on the 15th, not the 1st. **Clients are invoiced monthly in advance, with payment due net-14 (so client cash typically lands by the 14th). Operators are paid on the 15th, giving a built-in same-day or one-day buffer. This is standard in staffing.

- **Build a cash reserve target. **Maintain 2 months of Operator payroll in reserve at all times. At 12 active retainers (V8 Y1 average), that is ~$100K. The Distribution Policy Member Resolution sets a Working Capital Threshold of $164K (Phase 1 → Phase 2 trigger) and a Soft-Cap Threshold of $250K (above which excess is distributed unless Earmarked). The $50K founder capital covers startup costs and early Operator float; revenue should replenish reserves by Month 4–5. The line of credit covers timing gaps.

**9.4 What This Means for the Capital Plan**

| **Item** | **Recommendation** |
| --- | --- |
| Founder capital ($50K) | Covers startup costs, initial founder draws, tools, legal, and early Operator float. Sufficient if monthly billing is enforced and the line of credit is in place. |
| Business line of credit | $75K–$100K. Apply during pre-launch (Feb–Mar). Draw only if needed for timing gaps. Repay monthly. |
| Invoice factoring | Not recommended at launch. Expensive (2–5% per invoice) and signals cash stress. Reserve as backup option only. |
| Client payment terms | Monthly retainer billed in advance, payable net-14 via Stripe with a pre-authorized payment method on file. (Per MSA §5.2 and Pricing Model V7.) |
| Operator payment terms | Fixed monthly fee paid on the 15th of each month for prior month services. 12 payments per year per Engagement. Cadence and methodology communicated at onboarding (ICA Exhibit B). |
| Cash reserve target | 2 months of Operator payroll at all times (~$100K at 12 retainers, V8 model). Distribution Policy Resolution sets Working Capital Threshold = $164K (Phase 1 → Phase 2 trigger) and Soft-Cap Threshold = $250K (excess auto-distributed unless Earmarked). |
| Seed round timing | If raised in Year 2, external capital eliminates all cash flow risk. Without it, the model is still viable if prepayment is enforced. |

**10. Late Payment Escalation Process**

When a client is late on payment, the escalation should be swift but professional.

| **Day** | **Action** |
| --- | --- |
| Day 1 past due | Automated reminder email from Stripe. |
| Day 5 past due | Chris sends personal email: 'Noticed your retainer payment hasn't processed yet. Can you confirm this is in motion?' |
| Day 10 past due | Chris calls the client directly. Document the conversation. |
| Day 15 past due | Formal notice: 'Per Section X of the MSA, services may be paused if payment is not received within 5 business days.' Operator is not informed yet — the company absorbs the float. |
| Day 20 past due | Services paused. Operator notified that the engagement is on hold (not that the client didn't pay — frame as 'client has paused the engagement'). Operator is compensated for work already done. |
| Day 30+ past due | Engagement terminated per MSA terms. Collections process begins. Operator fully compensated and returned to pool. |

| **CRITICAL PRINCIPLE — OPERATOR IS ALWAYS PAID** The operator is always paid, even if the client is late. The company absorbs the float, not the operator. This is non-negotiable — it is the foundation of supply-side trust. Breaking this principle once costs more than any single client is worth. |
| --- |

*— End of Operations Playbook V8 —*

Companion documents: CFO Assessment Delivery Protocol • CFO Assessment Scoring Workbook • LLM Calibration Toolkit CFO V2 • AI Governance Framework • Matching Workflow • Master Business Plan V7