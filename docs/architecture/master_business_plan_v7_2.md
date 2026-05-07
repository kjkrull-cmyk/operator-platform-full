Fractional Standard · Master Business Plan V7.2 · Confidential

**FRACTIONAL STANDARD**

**MASTER BUSINESS PLAN**

*Version 7.2 · May 2026*

Managed Fractional Firm · Allocation-Based Retainer Model

---

## What is new in V7.2 (May 2026)

V7.2 aligns the Master Business Plan with the May 2026 settled architecture decisions register. The strategic narrative, unit economics, market analysis, financials, and operational architecture are unchanged from V7.1 (April 2026). What changed is the language around operator quality classification and the cleanup of the two senses of "tier" (operator-quality vs. allocation capacity).

| Was (V7.1) | Now (V7.2) | Why |
| --- | --- | --- |
| **External operator Tier 1 / Tier 2 / Tier 3** quality classification | **Pool Admission Decision** (Admit / Decline) + **Internal Performance Signal** (Strong / Conditional — internal-only, never operator- or client-facing) | Decision #1 in the Architecture Decisions Register: external tier system created gaming pressure and quality-anchor problems; AEDT-compliance posture is cleaner without externally-published classification |
| "Tier 1 operators per role" (sourcing target) | "Admitted operators with 60%+ Strong signal" | Same target, expressed in current architecture's vocabulary |
| Workflow: "Tier + Rate Assigned" | Workflow: "Pool Admission Decision + Rate" | Decision #6: pool admission is binary; signal is internal-only |
| Workflow: "Tier 1 operator verification" (background check) | Workflow: "Admitted operator verification" | Removes implicit ranking; verification gates on admission, not signal |
| Talent ops scaling: "Kevin reviews Tier 1 only" | Talent ops scaling: "Kevin reviews Strong-signal candidates only" | Internal signal language; same operational meaning |
| AI Governance: "No tier classification by AI" | AI Governance: "No pool admission decision by AI" | Decision #12: HIL principle expressed in current architecture's vocabulary |
| Operator referrals: "$500 bonus for Tier 1 referrals" | Operator referrals: "$500 split per ICA Exhibit B.3 ($250 ICA signing + $250 first engagement)" | Decision #10: corrected to actual structure per ICA Exhibit B.3 |
| §4.2 "Tier Structure" (allocation tiers) | §4.2 "Allocation Structure" | Terminology cleanup — allocation labels (Foundation/Growth/Scale/Embedded) are NOT quality tiers; renaming the section header prevents confusion between the two senses of "tier" |
| Pricing matrix column header: "Tier" | Pricing matrix column header: "Allocation" | Same cleanup |

The allocation labels themselves (Foundation / Growth / Scale / Embedded) are unchanged — these are the canonical capacity tiers per V8 financial model and are stored as `pricing_catalog.allocation_label` in the production database. They are operationally distinct from the retired operator-quality tier system.

For the full reasoning behind each May 2026 decision, see `docs/architecture/may_2026_architecture_decisions.md` (the Architecture Decisions Register).

*Business ****Plan ·**** Pricing ****Architecture ·**** Operations ****Model ·**** Technology ****Platform ·**** **Execution Plan*

**May 2026**

Kevin & Chris — Co-Founders

**CONFIDENTIAL**

# 1. Executive Summary

**Business Model: **Managed fractional firm deploying simulation-verified fractional CFOs, COOs, and CMOs into founder-led businesses under $30M revenue through hour-cap managed retainers. The company bills clients directly for fractional executive access and deploys operators to deliver it. Revenue is 93–97% recurring.

**Founding Team: **Kevin (COO/CPO) brings 17+ years in talent operations, AI platform implementation, and scalable workforce delivery. Chris (CEO/CBO) brings 14+ years in brand strategy, analytics, and PE exit experience.

**Capital: **$50,000 self-funded ($25K per founder). No outside investors at launch. Optional Year 2 seed round ($2.5M at $8–10M pre-money) to accelerate growth.

**Launch Target: **May 2026. First managed retainer placements in fractional Finance, Operations, and Growth roles.

**Year 1 Revenue: **$1.1M through 12 active engagements at ~$7,624 blended monthly retainer (Foundation-weighted). Profitable in Year 1 on founder capital alone.

**Technology Platform: **Modular, AI-enabled operator-delivery platform built on PostgreSQL (Supabase), with local embedding and retrieval layers, Claude API-powered assessment engine, and Retool-based internal admin interface for Phase 1. Client-facing and operator-facing portals planned for a later phase on Appsmith (white-label, self-hosted, website-integrable). Provider-agnostic, zero cloud lock-in architecture designed to compound proprietary matching data from day one.

**Why This Model: **The original commission marketplace (V1) caps at $7,200 per placement. The productized package model (V3) generates $18K per engagement but only 31–52% recurring revenue. The hour-cap retainer model generates $7.6K+ per month per client (Foundation-weighted), 93–97% recurring revenue, and 45% gross margins with structural margin protection.

# 2. Founding Team & Partnership Structure

## 2.1 Kevin — COO / Chief Product Officer

Kevin owns the product, talent operations, AI/platform strategy, and assessment methodology. His role is to build and run the engine that makes every engagement successful.

- **Talent Operations at Scale: **Led 45+ recruiters across five markets at Eliassen Group ($110M revenue). Built 12-person blended onshore/offshore recruiting team at RGP supporting 400–600 annual requisitions.

- **Revenue-Generating Talent Channels: **Built a $4M digital engagement talent channel from concept to production at RGP. Directly applicable playbook for building a marketplace.

- **AI Platform Experience: **Primary business stakeholder on Hugo (AI-enabled talent platform) for four years. Achieved 167% productivity improvements. AI governance committee member with zero bias complaints.

- **Assessment Methodology: **Trained and calibrated dozens of hiring managers on behavioral interview techniques. Built evaluation frameworks across technical and soft-skill dimensions.

## 2.2 Chris — CEO / Chief Brand Officer

Chris owns client acquisition, brand strategy, market positioning, partnerships, and high-touch sales. His role is to make the company visible, trusted, and desirable.

- **Brand Architecture: **Led brand strategy at Coca-Cola (sparkling water portfolio) and built The Honey Pot Company’s brand through PE exit to Compass Diversified. Positioned Cirkul through rapid growth phase.

- **Strategic Positioning: **Managed brand repositioning projects with $50M+ media budgets. Understands how to build premium perception from day one.

- **Analytics ****&**** Data: **Data-driven marketer with deep experience in consumer analytics, ROI measurement, and campaign attribution.

- **High-Touch Selling: **Skilled at executive relationship building and consultative selling — ideal for the founder-to-founder sales motion required.

## 2.3 Role Division

| **Domain** | **Kevin (COO/CPO)** | **Chris (CEO/CBO)** |
| --- | --- | --- |
| **Client Acquisition** | Assessment support, operator matching | First conversation, sales, relationship |
| **Operator Network** | Sourcing, vetting, assessment, matching | Brand positioning for talent attraction |
| **Engagement Delivery** | Operator quality, utilization tracking | Client satisfaction, expansion, renewals |
| **Technology** | AI assessment, matching engine, platform | Brand/UX direction, client-facing design |
| **Revenue Ownership** | Operator delivery quality, retention | Pipeline, close rate, tier conversion |

## 2.4 Equity Structure

Equity is structured to reflect asymmetric operational commitment while recognizing equal capital contribution.

| **Component** | **Allocation** | **Notes** |
| --- | --- | --- |
| **Kevin (COO/CPO)** | ~49% | Full-time operator; product, talent ops, AI, assessment |
| **Chris (CEO/CBO)** | ~41% | Client acquisition, brand, sales |
| **Advisor Hold** | 4% | Reserved for strategic advisors |
| **Flex/Incentive Pool** | 6% | Available for founding operators, key hires, incentives |
| **Entity** | LLC → S-Corp | Tax-efficient path; conversion timed to revenue |

# 3. Market Opportunity

## 3.1 Target Market

Founder-led businesses at $5M–$30M annual revenue that need senior leadership in Finance, Operations, or Growth but cannot afford or attract full-time C-suite executives.

- **Finance: **Series A/B startups needing fundraising prep, financial modeling, board reporting, cash flow management. Fractional CFOs command $5K–$15K/month in the open market.

- **Operations: **Scaling companies with process bottlenecks, hiring infrastructure gaps, or systems transitions. Fractional COOs command $8K–$20K/month.

- **Growth: **Companies with stalled demand gen, unclear GTM, or marketing team leadership gaps. Fractional CMOs command $6K–$15K/month.

## 3.2 Market Pricing (2025–2026 Research)

| **Role** | **Hourly** | **Monthly Retainer** | **Our Foundation Price** |
| --- | --- | --- | --- |
| **Fractional CFO** | $200–$350/hr | $5K–$10K/mo | $5,950/mo |
| **Fractional COO** | $250–$400/hr | $10K–$15K/mo | $6,500/mo |
| **Fractional CMO** | $200–$400/hr | $6K–$15K/mo | $5,750/mo |

*Sources: CFO Advisors, K38 Consulting, Graphite Financial, Pilot, ****OpsElevate****, Revenue Nomad, SaaS Consult, Column Content, ****Monily****, Driven Insights (all 2025–2026). Foundation pricing is positioned competitively within the lower-mid range, reflecting the operator profile (directors going independent rather than seasoned C-suite).*

# 4. Pricing Architecture

## 4.1 Allocation-Based Retainer Model

Clients purchase a tier of fractional executive access defined by an Operator allocation (a level of dedicated time and capacity from the Operator) and pay a fixed monthly retainer. The allocation is expressed in approximate weekly or monthly hours for clarity, but the Retainer is a fixed-fee monthly subscription for that allocation — not time-and-materials billing. Clients never see hourly rates and are not required to approve, sign off on, or audit Operator hours. The framing is access to capacity at a defined level of effort.

**Three-Layer Pricing Structure**

- **Layer 1 — Client-Facing: **The client sees a tier name (Foundation, Growth, Scale, Embedded), an approximate level of effort (e.g., “~10 hours/week of fractional COO time”), and a fixed monthly retainer. No hourly rate is disclosed. The framing is access: “you have access to a fractional COO at the Growth tier allocation.”

- **Layer 2 — Operator-Facing: **The operator names an internal hourly rate during onboarding; Kevin checks it against one threshold number per role. The hourly rate is used to derive a fixed monthly fee per engagement (calculated as weekly hours target × hourly rate × 52/12, rounded to the nearest $25). Operators log hours weekly in Clockify as a utilization signal only — hours are not the basis for pay. Operators are paid on the 15th of each month for the prior month’s services.

- **Layer 3 — Internal (Company): **Fractional Standard retains the spread between the client retainer and the operator’s logged hours. Every engagement is priced to target 40% net margin at full allocation utilization. Any underutilization is pure margin upside. Operator time data is internal only and not shared with Client unless specifically requested.

**Engagement Terms**

- **3-Month Minimum Commitment: **Then month-to-month.

- **30-Day Engagement-Phase Replacement Right: **If the placed Operator is not a fit within the first 30 days of an Engagement, Fractional Standard presents a new shortlist at no additional charge (MSA Section 13.1).

- **Allocation Expires Monthly: **The monthly Operator allocation is purchased on a use-it-or-lose-it basis. Allocation not utilized within a calendar month does not roll forward and is not refundable.

- **Within-Month Flex: **Within any given month, the actual distribution of Operator time may flex based on Client needs, Operator availability, and project rhythm. Sustained engagement scope materially in excess of the tier allocation is addressed via a scope-expansion conversation initiated by Chris or Kevin (MSA Section 6.4).

## 4.2 Allocation Structure

| **Allocation** | **Monthly Capacity** | **Weekly Equiv.** | **Positioning** | **Use Case** |
| --- | --- | --- | --- | --- |
| **Foundation** | ~20 hrs/mo | ~5 hrs/wk | Entry point | Reporting, basic strategy |
| **Growth** | ~40 hrs/mo | ~10 hrs/wk | Active execution | Systems, processes |
| **Scale** | ~60 hrs/mo | ~15 hrs/wk | Deep integration | Team leadership |
| **Embedded** | ~80 hrs/mo | ~20 hrs/wk | Near full-time | Transformation work |

## 4.3 Client Pricing Matrix

All prices are fixed monthly retainers. Role-differentiated to reflect different operator cost structures. Retainers rounded to the nearest $50 for clean positioning while preserving target margins.

*Pricing formula: Retainer = Operator Monthly Fee ÷ (1 – Net Margin Target – Burden % × Op Cost / Retainer). Target net margin is 40%+, with 7% burden applied to operator cost. See §4.5 for the calculated margin table and §4.7 for the operator monthly fee schedule.*

| **Allocation** | **Capacity** | **CFO** | **COO** | **CMO** |
| --- | --- | --- | --- | --- |
| **Foundation** | ~20 hrs/mo | $5,950/mo | $6,500/mo | $5,750/mo |
| **Growth** | ~40 hrs/mo | $11,850/mo | $13,000/mo | $11,500/mo |
| **Scale** | ~60 hrs/mo | $17,750/mo | $19,500/mo | $17,150/mo |
| **Embedded** | ~80 hrs/mo | $23,650/mo | $26,000/mo | $22,850/mo |

**Extended Catalog (Available, 0% Allocation in Y1)**

| **Allocation** | **Capacity** | **CTO** | **CRO** |
| --- | --- | --- | --- |
| **Foundation** | ~20 hrs/mo | $7,350/mo | $6,750/mo |
| **Growth** | ~40 hrs/mo | $14,650/mo | $13,500/mo |
| **Scale** | ~60 hrs/mo | $22,000/mo | $20,250/mo |
| **Embedded** | ~80 hrs/mo | $29,400/mo | $27,000/mo |

| **Key Positioning Note** COO and CTO retainers are highest because their operators carry the highest costs ($165/hr COO, $185/hr CTO) reflecting the breadth of operational and technical scope. CFO and CMO are priced similarly, with CMO slightly lower at Growth+ tiers due to lower operator cost. CTO and CRO are extended-catalog roles available on the platform but at 0% allocation in Y1; they will be activated as supply and demand develop. |
| --- |

## 4.4 Operator Compensation

Operators are paid a fixed monthly fee per engagement, calculated from their internal hourly rate × the engagement’s tier weekly hours target × 52/12 (rounded to the nearest $25). Hours are logged weekly in Clockify as a utilization signal only — they are not the basis for pay. Clients are not required to approve, sign off on, or audit Operator hours; hours data is internal to Fractional Standard for capacity management, margin accounting, and tier-fit purposes. There are no bands or tiers on the operator side. During onboarding, the operator names their rate. Kevin checks it against one threshold number per role. If the rate fits, the operator is approved. If it doesn’t, it’s a conversation, not an automatic rejection.

| **Role** | **Target Rate** | **Threshold Check** | **Notes** |
| --- | --- | --- | --- |
| **Fractional CFO** | $150/hr | Kevin’s number | Senior finance directors going independent |
| **Fractional COO** | $165/hr | Kevin’s number | Operational scope premium |
| **Fractional CMO** | $145/hr | Kevin’s number | Marketing directors stepping up |
| **Fractional CTO** | $185/hr | Kevin’s number | Extended catalog — 0% allocation in Y1 |
| **Fractional CRO** | $170/hr | Kevin’s number | Extended catalog — 0% allocation in Y1 |

**Target Operator Profile**

The target operator is not a seasoned Fortune 500 CFO. It is a senior finance manager or director who has been close to the CFO seat at a startup or mid-tier company and wants to go independent. The same applies to COO and CMO roles: directors with hands-on execution experience who can move fast in founder-led environments. These operators have 8–15 years of experience. They don’t need Fortune 500 pedigree for the work our clients need done. What they need is deal flow, structure, and a platform — exactly what Fractional Standard provides.

| **Why Operators Accept These Rates Independent fractional executives charging $250–$400/hour spend 30–40% of their time on non-billable work: prospecting, proposals, admin, invoicing. At $300/hour but 60% utilization, their effective rate is $180/hour. Fractional Standard offers $150/hour at near-100% utilization (once ramped) with zero BD overhead. The effective hourly take-home is competitive with independents charging significantly more.** |
| --- |

| **Honest Founding Pitch For founding operators: near-100% utilization is not realistic early on. The honest pitch is “be part of building something.” Zero sales burden has limited pull with operators who don’t yet know Fractional Standard. Lead with co-building, not calendar-filling.** |
| --- |

## 4.5 Margin Architecture

Every engagement targets 40%+ net margin at full allocation utilization. Burden is calculated as 7% of operator cost, reflecting overhead applied to the contractor relationship (insurance, payroll processing, platform costs, administrative overhead). The actual margin per engagement is shown below, computed using the V8 Financial Model methodology: client revenue minus operator monthly fee minus 7% burden on operator cost.

**Margin by Role (Full Detail)**

| **Engagement** | **Retainer** | **Op Monthly Fee** | **Burden (7% of Op)** | **Gross %** | **Net %** | **Company Keeps/mo** |
| --- | --- | --- | --- | --- | --- | --- |
| **CFO Foundation** | $5,950 | $3,250 | $228 | 45.4% | 41.6% | $2,472 |
| **CFO Growth** | $11,850 | $6,500 | $455 | 45.1% | 41.3% | $4,895 |
| **CFO Scale** | $17,750 | $9,750 | $683 | 45.1% | 41.2% | $7,318 |
| **CFO Embedded** | $23,650 | $13,000 | $910 | 45.0% | 41.2% | $9,740 |
| **COO Foundation** | $6,500 | $3,575 | $250 | 45.0% | 41.1% | $2,675 |
| **COO Growth** | $13,000 | $7,150 | $501 | 45.0% | 41.1% | $5,350 |
| **COO Scale** | $19,500 | $10,725 | $751 | 45.0% | 41.1% | $8,024 |
| **COO Embedded** | $26,000 | $14,300 | $1,001 | 45.0% | 41.1% | $10,699 |
| **CMO Foundation** | $5,750 | $3,150 | $221 | 45.2% | 41.4% | $2,380 |
| **CMO Growth** | $11,500 | $6,275 | $439 | 45.4% | 41.6% | $4,786 |
| **CMO Scale** | $17,150 | $9,425 | $660 | 45.0% | 41.2% | $7,065 |
| **CMO Embedded** | $22,850 | $12,575 | $880 | 45.0% | 41.1% | $9,395 |
| **CTO Foundation** ¹ | $7,350 | $4,000 | $280 | 45.6% | 41.8% | $3,070 |
| **CTO Growth** ¹ | $14,650 | $8,025 | $562 | 45.2% | 41.4% | $6,063 |
| **CTO Scale** ¹ | $22,000 | $12,025 | $842 | 45.3% | 41.5% | $9,133 |
| **CTO Embedded** ¹ | $29,400 | $16,025 | $1,122 | 45.5% | 41.7% | $12,253 |
| **CRO Foundation** ¹ | $6,750 | $3,675 | $257 | 45.6% | 41.7% | $2,818 |
| **CRO Growth** ¹ | $13,500 | $7,375 | $516 | 45.4% | 41.5% | $5,609 |
| **CRO Scale** ¹ | $20,250 | $11,050 | $774 | 45.4% | 41.6% | $8,426 |
| **CRO Embedded** ¹ | $27,000 | $14,725 | $1,031 | 45.5% | 41.6% | $11,244 |

| **Margin Note** Net margins land at 41–42% at full allocation utilization — above the 40% target with a buffer. Slight variation by tier results from $50 retainer rounding and $25 operator fee rounding interacting; all engagements pass the margin threshold. Operator monthly fee = (weekly hours × hourly rate × 52 ÷ 12), rounded to nearest $25. Burden = 7% of operator monthly fee. ¹ CTO and CRO are extended-catalog roles; Y1 plan assumes 0% allocation. Pricing is published for completeness and to enable rapid activation when supply/demand develop. |
| --- |

**Blended Summary**

| **Metric** | **Value** |
| --- | --- |
| **Blended avg retainer** | $7,624/mo |
| **Blended gross margin** | ~45% (full allocation) |
| **Blended net margin** | ~41% (full allocation, before founder comp/overhead) |
| **Avg company keeps per engagement** | ~$3,150/mo (full allocation) |
| **Y1 revenue assumption** | Foundation-weighted (70% Foundation / 25% Growth / 5% Scale across CFO/COO/CMO mix) |
| **Y1 plan basis** | Monthly client billing × 12; CTO/CRO at 0% allocation Y1 |

## 4.6 Margin Protection Mechanisms

Five structural mechanisms protect margin without requiring adversarial billing conversations.

- **Full-Allocation Pricing Rule: **Every retainer is priced assuming the operator logs 100% of the tier allocation hours. Stated margin is worst case. If an operator on a Growth engagement (40 hrs allocation) logs 32 hours/month on average, the actual net margin is higher than 40%.

- **One-Number Rate Check: **Kevin maintains one threshold number per role. No bands, no negotiation matrices, no sliding scales.

- **Scope Expansion Conversation: **Written into the MSA (Section 6.4). If client engagement scope sustainably expands beyond what the current Tier allocation supports for two or more consecutive months, Chris or Kevin initiates a conversation with the client to address the expansion through tier upgrade, supplemental engagement, or scope reduction. The Retainer is a fixed fee — clients are not separately invoiced for time worked above the tier allocation in any single month — but sustained patterns trigger this conversation. Not a punitive overage fee — a genuine capacity discussion.

- **Role-Based Pricing (No Cross-Subsidy): **Each role’s pricing reflects its own operator cost structure. If COO margins tighten, the response is adjusting COO pricing — not subsidizing from CFO revenue.

- **7% Burden Buffer: **Covers insurance, payroll taxes, platform costs, and administrative overhead, applied as 7% of operator cost (not revenue). Baked into every margin calculation. If actual burden comes in under 7%, the excess flows directly to net margin.

## 4.7 Billing Cadence

**Settled: Monthly client billing, monthly operator pay (calculated on quad-normalized basis).**

Fractional Standard bills clients monthly in advance. Each monthly invoice is issued on or about the Engagement Start Date anniversary of each calendar month, payable net-14 via Stripe with a pre-authorized payment method on file. Twelve invoices per year per engagement; the per-invoice amount matches the stated monthly retainer.

Operators are paid on the 15th of each month for the prior month’s services. Twelve payments per year per engagement. Operator compensation is a **fixed monthly fee per engagement**, calculated as `(weekly hours target × internal hourly rate × 52) ÷ 12`, rounded to the nearest $25. This normalizes the 4-week (“quad”) work rhythm into a monthly pay cycle: the operator receives the same fixed monthly amount regardless of whether a calendar month contains 4.0 or 4.4 work-weeks.

Operators log hours weekly in Clockify, but **hours are tracked as a utilization signal only — they are not the basis for pay**. There are no overage payments and no underpayment for light weeks. If sustained engagement scope materially exceeds the tier allocation across two or more consecutive months, the response is a tier-upgrade or scope-expansion conversation initiated by Chris or Kevin (MSA Section 6.4), not retroactive hourly billing.

The combination eliminates working-capital float pressure (client cash arrives by mid-month; operator pay goes out on the 15th) while giving operators predictable income that is not subject to monthly variance from how many work-weeks happened to fall in a given calendar month.

**Operator Monthly Fee Table (Internal Reference)**

The fixed monthly fee per engagement is calculated from the operator’s internal hourly rate and the engagement tier’s weekly hours target. These figures are internal to Fractional Standard and live in the V8 Financial Model’s Operator Pay Schedule tab.

| **Role** | **Hourly Rate** | **Foundation (~5 hrs/wk)** | **Growth (~10 hrs/wk)** | **Scale (~15 hrs/wk)** | **Embedded (~20 hrs/wk)** |
| --- | --- | --- | --- | --- | --- |
| Fractional CFO | $150/hr | $3,250/mo | $6,500/mo | $9,750/mo | $13,000/mo |
| Fractional COO | $165/hr | $3,575/mo | $7,150/mo | $10,725/mo | $14,300/mo |
| Fractional CMO | $145/hr | $3,150/mo | $6,275/mo | $9,425/mo | $12,575/mo |
| Fractional CTO ¹ | $185/hr | $4,000/mo | $8,025/mo | $12,025/mo | $16,025/mo |
| Fractional CRO ¹ | $170/hr | $3,675/mo | $7,375/mo | $11,050/mo | $14,725/mo |

¹ Extended catalog — 0% allocation in Y1.

The operator’s engagement-specific monthly fee is communicated to them at the time of placement; the tier label (Foundation / Growth / etc.) is an internal classification used for engagement structuring, not an operator-facing identity.

## 4.8 Website Pricing Strategy

Do not post exact rates on the website. Post ranges by role (“CFO retainers from $5K–$10K/mo”). Include comparison math vs. full-time hires (70–80% savings). Free diagnostic is the CTA. Chris quotes the exact retainer during the sales conversation based on tier and role.

# 5. Go-To-Market Strategy

## 5.1 Demand-Side Channels

- **Combined Founder Networks (60% of early pipeline): **Build 100-person target list of founder-led businesses in ATL ecosystem + Kevin’s national professional services network. Warm intros, direct outreach, consultative selling.

- **ATL Startup Ecosystem (20% of early pipeline): **Chris attends 2–3 events/month (ATL Tech Village, Techstars, Atlanta Ventures). Brand-consistent presence builds awareness.

- **LinkedIn Thought Leadership (20% early, growing): **Chris: 2–3 posts/week on hiring mistakes, fractional vs. full-time decisions. Kevin: 1–2 posts/week on vetting, operational quality.

- **AI Diagnostic Tool (Phase 2, primary inbound): **Free stage assessment. SEO-optimized landing page. 5-minute intake generates personalized recommendation.

- **VC/PE Channel (Phase 2–3): **Advisory relationships with funds investing in $5M–$30M companies. Fractional leadership for portfolio companies becomes recurring referral channel.

- **Autonomous Lead Gen Agent (Phase 2–3): **AI monitors job postings, funding announcements, leadership departures, hiring velocity. Daily prioritized brief for Chris.

## 5.2 Supply-Side Channels

- **Kevin’s Professional Network: **17 years of talent industry relationships. Direct outreach to known fractional operators.

- **LinkedIn Sales Navigator: **Targeted search for “fractional” + function + experience. Personalized InMails.

- **Fractional Communities: **Fractional Officer, GigX, FractionL, Chief of Staff Network. Engage genuinely, recruit selectively.

- **Placed Operator Referrals: **Structured ask at 90-day mark. $500 split bonus per ICA Exhibit B.3 ($250 on referee ICA signing + $250 on first engagement). Target 30%+ of new candidates by Y2.

## 5.3 Supply-First Discipline

10 admitted operators per role before launch (30 total), with a target of 60%+ flagged Strong on internal performance signal. Assessment pipeline must stay 3–6 months ahead of demand pipeline. Quality of operator network is the primary competitive moat.

# 6. Operations Model

## 6.1 Client Lifecycle

Intake → AI Diagnostic → Tier Selection → Operator Matching → Operator Conversation → Client Interview (Optional) → Engagement Kickoff → Automated Pulse Checks → Tier Right-Sizing → Extension/Conversion

## 6.2 Client Workflow (End-to-End)

| **#** | **Stage** | **What Happens** | **Owner** | **Tool** | **Timing** | **Handoff / Trigger** |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | Lead Identified | Founder enters pipeline via network, event, LinkedIn, or inbound diagnostic | Chris | HubSpot | Ongoing | Chris logs contact in HubSpot deal pipeline |
| **2** | Diagnostic Scheduled | Chris has initial call or founder completes AI diagnostic on website | Chris | HubSpot + Cal.com | 24–48 hrs | Diagnostic complete → HubSpot stage update |
| **3** | Diagnostic Delivered | AI generates personalized output. Attached to HubSpot deal. | Auto/Chris | Claude API + HubSpot | Same day | Chris reviews output, sends to founder |
| **4** | MSA Execution + Account | Founder executes MSA and creates portal account (username/password + ToS acceptance, which includes MSA terms). Stripe webhook updates HubSpot. | Founder | Stripe + Retool | 1–7 days | MSA executed + ToS accepted → Matching Queue record created |
| **5** | Matching | Kevin opens filtered view: admitted operators matching role, stage, industry, availability — Strong-signal operators surfaced first. Selects 2–3 candidates. | Kevin | Retool | Same day | Shortlist ready → Kevin has operator conversations |
| **6** | Operator Conversation | Kevin speaks with each shortlisted operator about the specific client opportunity. Gauges interest, fit, and availability. May happen during initial screen if timing aligns with an open client need. | Kevin | Phone | Same day | Operator confirms interest → profile sent to client |
| **7** | Client Review + Interview | Kevin or Chris sends operator profile(s) to founder. Client interview offered but optional at client’s discretion. Standing interview windows (e.g., Tue/Thu) keep scheduling within 48 hours. | Kevin/Chris | Email + Cal.com | 1–3 days | Client selects operator (or waives interview) → confirmed |
| **8** | Engagement Kickoff | Kevin creates Engagement record. Operator receives kickoff brief. Kickoff meeting scheduled. | Kevin | Retool | Same day | Operator notified → engagement begins |
| **9** | Engagement Active | Operator begins work. First invoice sent via Stripe. Operator logs hours in Clockify. | Operator | Clockify + Stripe | Ongoing | Day 14 pulse check auto-triggers |
| **10** | Day 14 Pulse | Automated 3-question check-in to client and operator. Score <3 or time mismatch: flag for Chris. | Auto/Chris | Email auto | Auto | Green → no action. Yellow/Red → Chris calls |
| **11** | Day 45 Pulse | Second automated check-in. Hour utilization data reviewed against tier cap. | Auto/Kevin | Email auto | Auto | Overage pattern → flag for tier conversation |
| **12** | Day 60 Check-in | Chris has tier right-sizing conversation. First 10–15 placements: informal call. | Chris | Phone/Zoom | 30 min | Tier change → updated MSA addendum |
| **13** | Day 75 Pulse + Renewal | 3-month commitment ending. Automated pulse + Chris extension conversation. | Chris | Email + Phone | Auto + 20 min | Extends → month-to-month. Churns → off-ramp |
| **14** | Ongoing Monthly | Retainer billed monthly (prepaid). Operator logs hours. Quarterly: informal check-in. | Chris + Op | Stripe + Clockify | Ongoing | Overage → tier review. Underuse → downgrade offer |
| **15** | Off-Ramp / Graduation | Client exits retainer. Chris conducts exit debrief. Operator returns to available pool. | Chris + Kevin | HubSpot + Retool | 1 week | FTE conversion → conversion fee. Churn → debrief captured |

*Total time from MSA execution to operator start: 3–5 business days (with interview) or 2–3 business days (interview waived). Critical path: matching (same day) → operator conversation (same day) → profile to client + interview if requested (1–3 days) → kickoff (same day).*

## 6.3 Operator Workflow (End-to-End)

| **#** | **Stage** | **What Happens** | **Owner** | **Tool** | **Timing** | **Handoff / Trigger** |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | Sourced / Applied | Operator identified via LinkedIn, referral, community, or inbound | Kevin | LinkedIn + Retool | Ongoing | Kevin creates Operator record |
| **2** | Initial Screen + Rate | Kevin reviews profile, confirms fractional interest, checks qualifications. Operator names rate; Kevin checks against threshold. | Kevin | Phone + Retool | 10 min | Pass → simulation scheduled. Fail → archived |
| **3** | Simulation Scheduled | Role-specific simulation scheduled. Operator receives prep brief and AI disclosure notice. | Kevin | Cal.com + Retool | 3–7 days | Assessment record created |
| **4** | Simulation Complete | 60–90 min AI-administered simulation. Scored on 100-point rubric with dimension-level granularity. | AI + Kevin | Claude API | 60–90 min | Scores written to database. Kevin reviews. |
| **5a** | Artifacts (PARALLEL) | Operator submits 2 work samples (anonymized real work or created samples for NDA-constrained operators). Kevin scores. | Op + Kevin | Email + Retool | 3–5 days | Artifact scores entered |
| **5b** | References (PARALLEL) | Track A: 2 structured reference calls during assessment. Track B: Provisional admission; references required before first client intro. | Kevin | Phone + Retool | 5–10 days | Reference scores or provisional status |
| **6** | Human Validation | Kevin conducts 15-min video call for candidates scoring 60+ composite. Pass/fail on communication, professionalism, founder-fit. | Kevin | Zoom + Retool | 15 min | Pass/fail + notes |
| **7** | Pool Admission Decision + Rate | Composite: 60% sim / 15% artifacts / 15% refs + human validation gate. Admit (≥60 + validation Pass) or Decline (<60). Internal performance signal (Strong/Conditional) recorded for matching. | Kevin | Retool (formula) | Same day | Decision + rate confirmed to operator (signal stays internal) |
| **8** | Contractor Agreement | Operator signs ICA including: hourly rate, non-compete (12 mo), IP provisions, AI disclosure acknowledgment. | Kevin | DocuSign | 1–2 days | Signed agreement on file |
| **9** | Background Check | Checkr initiated for all admitted operators ($45–$80). Required before first placement. | Kevin | Checkr + Retool | 3–7 days | Clear → available. Flag → review. |
| **10** | Available for Matching | Operator appears in matching views when client needs align. Profile includes internal performance signal, rate, stage tags, industry tags, availability. | Auto | Retool | Ongoing | Matched when client need arises |
| **11** | Client-Specific Conversation | Kevin speaks with operator about the specific client opportunity. Two paths: (A) during initial screen if a current client need aligns, or (B) as a separate call for operators already in the pool. Kevin gauges interest, fit, and availability. | Kevin | Phone | 15–30 min | Operator confirms interest → profile sent to client |
| **12** | Client Interview (Optional) | Client interview offered at the client’s discretion. Some clients want to meet the operator; others trust Kevin’s match and waive the interview. Kevin or Chris facilitates. | Kevin/Chris | Zoom + Cal.com | 30 min | Client confirms selection (or waives interview) |
| **13** | Placed | Operator receives client kickoff brief. Engagement begins. | Kevin | Retool + Email | Day of | Operator starts logging hours in Clockify |
| **14** | Ongoing Engagement | Weekly hour log. Pulse check responses at Day 14/45/75. Operator flags issues to Kevin. | Operator | Clockify | Ongoing | Engagement data feeds matching engine |
| **15** | Engagement Ends | Operator returns to available pool. Outcome data captured. Referral ask at 90-day mark. | Kevin | Retool | End date | Profile enriched with engagement experience |

*Total time from sourced to available for matching: 3–4 weeks. Kevin’s total time per candidate: ~80 minutes. Note: Steps 11–12 occur each time an operator is matched to a new client, not just on first placement.*

## 6.4 Lightweight Engagement Management

No QBRs. No formal milestone tracking. Instead:

- **Automated Pulse Checks: **Day 14, 45, and 75. 3 questions each to client and operator: satisfaction (1–5), time commitment fit (too little / right / too much), anything we should know.

- **Operator Hour Log: **Weekly entry in Clockify (which clients, hours worked). 5 minutes/week. Feeds tier mismatch detection and future matching engine data.

- **Early Placements: **Chris does informal 30/60-day check-in calls for first 10–15 placements for product feedback, then drops to automated-only once patterns are validated.

## 6.5 Operator Transparency

Principled transparency approach. Do not publish exact client rates to operators or on the website. Tell operators during onboarding that the company operates on a managed margin model. If an operator asks what the client pays, answer honestly. Rate disclosure happens at Step 2 (initial screen) — the operator names their rate, Kevin checks it against one threshold number.

**Structural protections: **Non-compete clause (12 months post-engagement), client MSA with Fractional Standard as the contracting party, replacement guarantee that makes the operator less essential to the specific client relationship.

## 6.6 Engagement Onboarding

Each operator receives an Engagement Brief at placement containing: client company details, client contact, company stage from diagnostic, revenue/size, role placed, tier, hour cap, monthly retainer and operator compensation, start date, commitment period, and Fractional Standard contact information.

The brief also includes the AI diagnostic findings (primary need, secondary needs, client pain points, key stakeholders, upcoming deadlines) and standard engagement scaffolding covering hours/availability, hour logging expectations, pulse check cadence, client relationship boundaries, replacement guarantee details, and referral opportunities.

**First 30 Days: Structural Milestones**

| **When** | **Engagement Milestone** | **Why It Matters** |
| --- | --- | --- |
| **Day 1** | Kickoff meeting with client. Review diagnostic findings. Align on first 30-day priorities. | Sets expectations. Prevents the operator from spending Week 1 figuring out needs. |
| **Day 5** | Confirm working cadence with client. First hours logged. | Establishes rhythm. Validates tier is right. |
| **Day 14** | Pulse check (automated). Both client and operator receive it. | Early flag if something is off. Most fixable issues surface here. |
| **Day 21** | Check in with Kevin if anything is unexpected (scope, stakeholders, tooling). | Prevents problems from festering until Day 45 pulse. |
| **Day 30** | Deliver first tangible output to client (financial model, ops audit, GTM plan, etc.). | Proves value early. Builds foundation for 3-month extension. |

# 7. Assessment & Verification

Five-layer verification ensures operator quality. The assessment process is designed to scale from 30 operators pre-launch to 100+ per year by Year 2 without Kevin becoming the bottleneck.

## 7.1 Assessment Layers

- **LLM-Powered Simulation: **Role-specific scenario scored on 100-point rubric. 60–90 minute asynchronous assessment. 5 dimensions, 20 points each. AI-administered via Claude API with auto-saved transcripts.

- **Artifact Review: **2 work samples demonstrating domain expertise. Option A: anonymized real deliverables. Option B: self-created samples using provided prompts (for operators with NDA/IP constraints). Scored on structure, impact articulation, completeness, and communication clarity.

- **Reference Verification: **Structured two-track reference checks. Track A (preferred): during assessment, fastest path. Track B (accommodation): provisional tier, references before first client intro.

- **Human Validation: **Kevin conducts 15-minute video debrief for candidates scoring 60+ composite. Pass/fail on communication clarity, professionalism, founder-fit.

- **Engagement Outcome Data: **Post-engagement data feeds matching engine. Performance becomes strongest signal over time.

## 7.2 Composite Scoring

Composite = 60% simulation + 15% artifacts + 15% references + human validation gate.

| **Pool Admission** | **Composite Score** | **Internal Performance Signal** | **Meaning** |
| --- | --- | --- | --- |
| **Admit** | 80–100 | **Strong** (all dimensions ≥12) | Admitted to operator pool. Internal flag for matching prioritization. Operator never sees the "Strong" signal. |
| **Admit** | 60–79 | **Conditional** | Admitted to operator pool. Internal flag indicates more selective matching. Operator never sees the "Conditional" signal. |
| **Decline** | <60 | n/a | Not admitted. Operator receives respectful decline with feedback. Re-assessment open after 90 days with a different scenario. |

## 7.3 Artifact Evaluation Rubric

Kevin evaluates artifacts for process quality, not domain accuracy. Each artifact scored on four sub-dimensions (5 points each, 20 points max per artifact). Average of two artifacts scaled to 15 points for composite.

| **Sub-Dimension** | **High (4–5)** | **Medium (2–3)** | **Low (0–1)** |
| --- | --- | --- | --- |
| **Structure ****&**** Professionalism** | Organized, board-ready, clear section headings | Readable but inconsistent formatting | Disorganized, would not present to client |
| **Impact Articulation** | Specific outcomes cited | Context but no specific outcomes | No context, no explanation of impact |
| **Completeness** | Problem → analysis → recommendation → outcome | Missing one element | Fragment, incomplete |
| **Communication Clarity** | Non-expert can follow the logic flow | Some sections require domain knowledge | Opaque, heavy jargon, hard to follow |

## 7.4 Batching & Scale Strategy

At 80 minutes per candidate, Kevin can assess 5–6 candidates per week alongside other responsibilities. Pre-launch target of 30 admitted operators with 60%+ Strong signal (requires assessing ~60–75 candidates at 40–50% admission rate) takes 10–15 weeks, fitting the February–April timeline.

- **Batch by role: **All CFO simulations in Week 1, COO in Week 2, CMO in Week 3. Keeps calibration consistent.

- **Batch artifact reviews: **Review all artifacts from a simulation batch at once. Pattern recognition improves.

- **Batch reference calls: **Block 2–3 hours rather than scattering across the week.

- **Batch human validations: **Back-to-back 15-minute video calls with 5-minute breaks.

**Phase 1 → Phase 2 Transition**

| **Layer** | **Phase 1 (Months 0–8)** | **Phase 2 (Months 8–18)** |
| --- | --- | --- |
| **Initial Screen** | Kevin screens 100% | Talent ops hire screens standard; Kevin screens edge cases |
| **Simulation** | AI-administered, Kevin reviews all scores | AI-administered, auto-approve 80+; Kevin reviews 60–79 only |
| **Artifact Review** | Kevin reviews 100% | Talent ops reviews standard; Kevin reviews Strong-signal candidates only |
| **Reference Checks** | Kevin makes all calls | Talent ops makes calls; Kevin reviews notes |
| **Human Validation** | Kevin does all 15-min videos | Kevin validates borderline (60–79) only. 80+ auto-approved with audit. |
| **Background Check** | Kevin initiates | Talent ops initiates; auto-triggered at pool admission |

*With talent ops hire (Year 2), Kevin’s time per candidate drops from ~80 minutes to ~25 minutes, supporting 15–20 assessments per week.*

**Quality Controls at Scale**

- **Random Audit: **Kevin reviews 10% of auto-approved assessments monthly.

- **Simulation Version Control: **Each scenario has a version number. Updated scenarios flag candidates for re-assessment if needed.

- **Curveball Library: **Rotating library of 5–8 curveballs per role. Rotated quarterly.

- **Outcome Feedback Loop: **After 50+ placements, correlate assessment scores with engagement outcomes. Adjust scoring weights based on what predicts success.

# 8. Direct-Hire Accommodation

Direct/full-time placement is an accommodation for client requests, not a sold product. When the diagnostic reveals a full-time need, or a client explicitly asks for a permanent hire, Fractional Standard can fulfill the request using the same assessment infrastructure and operator network.

## 8.1 Policy

The default recommendation is always: “Start fractional, convert to full-time when you’re both confident it’s the right fit.” Direct-hire is offered when the client’s need is clearly full-time from the outset.

## 8.2 Fee Structure

| **Parameter** | **Terms** |
| --- | --- |
| **Model** | Contingency, non-exclusive |
| **Fee** | 20–25% of first-year base salary (default 20%; per-engagement variation allowed by written agreement before candidate presentation) |
| **Payment** | Net-30 after candidate start date |
| **Replacement Guarantee** | 30 calendar days from candidate start date, uniform for all role levels (negotiable per-engagement) |
| **No Fee if Candidate Doesn’t Start** | If the candidate accepts the offer but never commences work, no placement fee is owed |
| **Agreement** | Folded into the MSA as Exhibit E (Direct-Hire Accommodation) |

## 8.3 Fractional-to-Hire Pathway

The strongest revenue scenario is a 3-month fractional engagement followed by FTE conversion. The client gets a “try before you buy” experience. Total revenue: 3 months retainer + conversion fee.

## 8.4 Operational Notes

- Direct-hire uses the same simulation-verified assessment pipeline as fractional placements.

- During operator onboarding, ask: “Are you open to fractional only, full-time only, or both?”

- Track direct-hire as a separate revenue line to ensure fractional retainers remain the core business.

- This service is never pitched or marketed. It is referenced only when a client raises the need.

# 9. AI & Technology Platform

The technology platform is a modular, AI-enabled operator-delivery system designed to compound proprietary matching data from day one. The architecture is intentionally local-first, provider-agnostic, and recruiter-optimized.

## 9.1 Platform Architecture

The platform is built in four independently testable layers:

**Layer 1 — Ingestion**

Multi-format document ingestion with normalized output. Handles PDFs, DOCX, XLSX, and PPTX. Produces clean, consistent text + metadata ready for chunking and embedding. Supports operator resume ingestion, artifact processing, and client document intake.

**Layer 2 — Embedding**

Local, zero-dependency embedding pipeline. Provider-agnostic (Cohere, OpenAI, Claude compatible). Produces high-quality vector representations stored locally or in Supabase (pgvector). Enables semantic search across operator profiles, simulation transcripts, screening notes, and reference feedback.

**Layer 3 — Retrieval**

Vector search and context selection with metadata-aware filtering. Powers operator matching, duplicate detection, and natural-language querying of the operator pool. Clean interfaces designed for UI integration via Appsmith.

**Layer 4 — Synthesis**

AI-powered structured output generation using Claude as primary reasoning engine (OpenAI and Cohere as optional fallbacks). Produces consistent, structured, operator-ready deliverables: intake summaries, scorecards, outreach drafts, matching rubrics, and email drafting. The synthesis layer is being extended to handle simulation administration, scoring, and rubric evaluation.

## 9.2 Technology Stack

| **Component** | **Technology** | **Purpose** |
| --- | --- | --- |
| **Database** | PostgreSQL on Supabase | Single source of truth. 29-table schema, pgvector-enabled for semantic search/embeddings. |
| **Internal Admin (Phase 1)** | Retool | Kevin’s daily ATS interface for Phase 1. Internal workflow management, operator pool management, matching, assessment, and engagement tracking. |
| **External Portal (Phase 2)** | Appsmith | Deferred to a later phase. Website-integrated, white-label, self-hosted portal for operators and clients. Chosen for self-hosting, white-label, and website integration advantages once external portal is warranted. |
| **Client CRM** | HubSpot (Free/Starter) | Chris’s daily interface for client pipeline. Syncs to PostgreSQL via Zapier/Make. |
| **Payments** | Stripe | Client retainer billing and payment processing. Webhooks write to PostgreSQL. |
| **Timekeeping** | Clockify (Free) | Operator hour tracking. Weekly sync to database via API/Zapier. |
| **File Storage** | Supabase Storage | Resumes, artifacts, contracts, engagement documents. |
| **AI Engine** | Claude API (primary) | On-demand assistant for email drafting, semantic search, query translation, assessment scoring. |
| **Embedding** | Provider-agnostic module | Local embedding pipeline. Cohere/OpenAI/Claude compatible. |
| **Environment** | WSL2 / Ubuntu + Node.js 20 | Linux-native engineering environment. Deterministic builds. |
| **Version Control** | Git + GitHub | Source control and collaboration. |
| **Engineering CLI** | Claude Code CLI | Hands-free engineering and iterative module generation. |
| **Automation** | Zapier/Make | HubSpot ↔ PostgreSQL sync, Stripe webhooks, Clockify sync. |
| **Sourcing** | LinkedIn Sales Navigator | Operator sourcing and outreach. |
| **Background Checks** | Checkr | Admitted operator verification. $45–$80 per check. |

*Estimated monthly platform cost at launch: $65–$125/month. ****Compare**** to Recruit CRM at $170–$250/month for 2 users, with full data ownership.*

## 9.3 Core AI Systems

- **Assessment Engine: **Claude API-powered simulation administration, scoring, and rubric evaluation. 100-point scale. Synthesis layer being extended to automate full simulation workflow.

- **Matching Engine: **Phase 1 is Kevin’s judgment with structured data and semantic search. Phase 2+ builds proprietary learning model from placement outcome data. Match reasoning captured in three fields: match_rationale, alternatives_considered, risk_watch.

- **Diagnostic Generator: **AI-powered stage assessment from intake data. Produces personalized “What a Fractional CFO/COO/CMO Unlocks” output. Gated behind registration to control LLM token costs.

- **Lead Generation Agent (Phase 2–3): **Autonomous system monitoring job postings, funding announcements, leadership departures. Daily prioritized brief for Chris.

## 9.4 Data Moat Strategy

Every engagement generates proprietary data that improves matching accuracy: operator performance by client stage, industry, and engagement type; client satisfaction patterns; tier conversion predictors; engagement duration optimization.

- **~50–75 placements: **Meaningful signal for matching improvements.

- **200–300 placements: **Defensible moat. Matching accuracy becomes a genuine differentiator.

- **500+ placements: **Potential acquisition value. Data products for VC/PE firms become viable.

Semantic search (pgvector embeddings on unstructured text) provides more powerful matching than rigid skill taxonomies. Structured fields handle hard filtering; embeddings handle functional equivalence inference.

## 9.5 Design Principles

- **Zero cloud lock-in: **Local-first architecture. No single vendor dependency.

- **Provider-agnostic: **Claude primary, OpenAI and Cohere as fallbacks. Swap without re-architecture.

- **Modular and test-backed: **Each layer validated independently. Clean interfaces between layers.

- **Recruiter-first: **Workflow design optimized for Kevin’s speed, clarity, and repeatability.

- **Data ownership non-negotiable: **All data owned from day one. Vendor-owned data stores were disqualifying factors in tool selection.

- **Agentic architecture deferred: **Phase 1 is Kevin as the intelligent layer. Autonomous agents added incrementally as the data model matures.

# 10. AI Governance Framework

This framework is sized for a pre-revenue startup placing independent contractors. It covers the three things that matter now: human oversight, operator disclosure, and data tracking for future audit readiness.

## 10.1 Governance Principles

- **Human-in-the-Loop: **No pool admission decision is made solely by AI. Claude scores and recommends; Kevin decides. Every admission decision includes a human validation gate. The internal performance signal (Strong/Conditional) is calculated automatically from the composite score and dimension distribution but is reviewed and may be overridden by Kevin.

- **Transparency: **Every operator is informed that the assessment includes AI-powered scoring before they begin. They may request information about the scoring methodology.

- **Data Minimization: **The AI operates on the operator’s simulation responses only. No personal data (demographics, location, age) is fed into the scoring engine. Client confidential data never enters the LLM.

## 10.2 Operator AI Disclosure

Every operator receives a formal AI Assessment Disclosure before the simulation, stating: the simulation is administered and scored by AI (Claude); the AI evaluates responses on five dimensions using a structured rubric and does not evaluate personal characteristics or demographics; a human reviewer validates all scores and makes the final classification; responses are stored securely for assessment and matching engine improvement; and the operator may request methodology information at any time.

## 10.3 Demographic Tracking for Audit Readiness

Not legally required for independent contractor assessments currently, but tracked from day one for future defensibility: gender (self-reported, optional), race/ethnicity (self-reported, optional), assessment scores by dimension, tier outcomes by group, pass/fail rates by stage.

| **Critical Demographic data collection is clearly labeled as optional and self-reported. It is never visible to Kevin during the assessment process (separate database view for aggregate statistical analysis only). The scoring engine never receives this data.** |
| --- |

## 10.4 Review Triggers

- **After 100 assessments: **Enough data for meaningful statistical analysis of scoring patterns across demographic groups.

- **At Year 2 seed round: **Investors will ask about AI governance. Documented framework with data strengthens the pitch.

- **Regulatory changes: **NYC, California, and federal AI regulations are evolving. Monitor annually.

## 10.5 Pre-Launch Legal Review

Budget $2,000–$3,000 for employment attorney review of AI-assisted assessment. Scope: NYC Local Law 144, FCRA implications of background checks, state-specific AI-in-hiring regulations in CA, IL, or other heavy-startup states.

# 11. Cash Flow & Financing

## 11.1 Cash Flow Timing

In a managed firm model, the company bills the client and pays the operator. The timing gap between cash in and cash out is the float. Managed well, it’s a non-issue. Managed poorly, it forces missed operator payments — catastrophic for supply-side reputation.

| **Scenario** | **Cash In** | **Cash Out** | **Float Risk** | **Notes** |
| --- | --- | --- | --- | --- |
| **Client prepays** | 1st of month | 15th of month | None | Cash in before cash out |
| **Client pays net-15** | ~15th of month | 15th of month | Low | Tight but manageable |
| **Client pays net-30** | ~30th of month | 15th of month | High | Floating 2–4 weeks of operator cost |
| **Client is late (net-45+)** | 45+ days | 15th of month | Critical | Funding operator from reserves |
| **4 new placements in a month** | First retainer due (prepaid) | 4 operators start immediately | High | 4x operator cost before first full cycle; rely on prepaid retainer + line of credit |

## 11.2 Recommendations

- **Require prepayment in the MSA: **Monthly retainer due on the 1st of each service month, payable within 5 business days. Clients insisting on net-30 pay first two months upfront.

- **Secure $75K–$100K business line of credit: **Apply during pre-launch. Draw only for timing mismatches. Repay when payment arrives.

- **Pay operators on the 15th: **Built-in 10–15 day buffer after client invoice date. Standard in staffing.

- **Cash reserve target: **2 months of operator payroll at all times (~$164K at 12 retainers).

## 11.3 Late Payment Escalation

| **Timing** | **Action** |
| --- | --- |
| **Day 1 past due** | Automated reminder email from Stripe |
| **Day 5 past due** | Chris sends personal email confirming payment is in motion |
| **Day 10 past due** | Chris calls client directly. Conversation documented. |
| **Day 15 past due** | Formal notice per MSA: services may be paused within 5 business days. Operator NOT informed. |
| **Day 20 past due** | Services paused. Operator notified engagement is on hold (not that client didn’t pay). Operator compensated for work done. |
| **Day 30+ past due** | Engagement terminated per MSA. Collections process. Operator fully compensated and returned to pool. |

| **Critical Principle The operator is always paid, even if the client is late. The company absorbs the float, not the operator. This is non-negotiable — it is the foundation of supply-side trust.** |
| --- |

# 12. Financial Summary

Detailed modular financial model provided in the accompanying V8 Financial Model Excel workbook and Pricing Model V7.

|  | **Year 1** | **Year 2** | **Year 3** | **Year 4** | **Year 5** |
| --- | --- | --- | --- | --- | --- |
| **Active Retainers (avg)** | 12 | 42 | 90 | 155 | 235 |
| **Blended Retainer** | $7,624 | $7,929 | $8,246 | $8,576 | $8,919 |
| **Total Revenue** | $1.1M | $4.1M | $9.4M | $17.1M | $27.4M |
| **Gross Margin %** | 45% | 45% | 45% | 45% | 45% |
| **EBITDA** | $357K | $1.1M | $2.8M | $5.7M | $9.8M |
| **EBITDA Margin %** | 32% | 25% | 37% | 41% | 44% |
| **Headcount** | 2 | 7 | 10 | 14 | 19 |
| **Recurring Revenue %** | 93% | 96% | 97% | 97% | 97% |

*Year 1 reflects 8 operating months (May–December 2026). Blended retainer of ~$7,624/month, weighted toward Foundation tier (70% Foundation / 25% Growth / 5% Scale). Model is profitable in Year 1 on $50K founder capital.*

## 12.1 Capital Strategy

- **Year 1 (self-funded, $50K): **Bootstrap to proof of concept. 12 active engagements, $1.1M revenue. Prove model, collect outcome data, build AI systems. Profitable in Year 1.

- **Year 2 (optional seed, $2.5M at $8–10M pre-money): **Fund sales team, talent ops, engineering lead, marketing. Scale to 42 average active retainers. Founders retain ~75% post-seed.

- **Year 3+ (reinvest or Series A): **Business is cash-flow positive and self-sustaining.

## 12.2 Unit Economics

| **Metric** | **Value** | **Notes** |
| --- | --- | --- |
| **Avg Monthly Retainer** | $7,624 | Role-based blended average |
| **Avg Monthly Operator Cost** | ~$4,160 | Blended monthly fee at full allocation |
| **Monthly Gross Margin** | ~$3,464 (~45%) | Before burden |
| **Monthly Net Margin** | ~$3,150 (~41%) | After 7% burden on operator cost |
| **Avg Engagement Duration** | 7 months | 3-month minimum + 65% extension |
| **Revenue per Client (avg)** | $53,366 | $7,624 × 7 months |
| **Blended CAC** | $2,500 | Founder time + marketing |
| **LTV:CAC**** Ratio** | 21.3x | Excellent |
| **Payback Period** | 1 month | First month covers CAC |

## 12.3 Valuation Context

Fractional Standard sits between traditional staffing (EBITDA-valued) and tech-enabled services. The 45% gross margins, 97% recurring revenue, and proprietary assessment/matching layer push toward the premium end of staffing and into lower tech-enabled services range.

| **Timeframe** | **EBITDA** | **Staffing Range (4–7x)** | **Tech-Enabled Range (7–10x)** |
| --- | --- | --- | --- |
| **Year 3** | $2.8M | $11M–$20M | $20M–$28M |
| **Year 5** | $9.8M | $39M–$69M | $69M–$98M |

The single biggest lever is whether the data moat and automated matching justify a tech-enabled premium vs. being viewed as a well-run specialty staffing firm. Reducing founder dependency in matching and accumulating 200+ placement outcomes are the key unlock.

# 13. Side Revenue Architecture

Seven independent revenue modules, each enhancing the core experience while generating margin. Phased activation based on readiness and bandwidth.

- **Day 1: **Tech Partner Referrals + FTE Conversion Fees. Zero cost, immediate revenue from first engagements.

- **Month 6–12: **Training Partnerships + Insurance Brokerage + EOR/Payroll Partnership.

- **Month 12–18: **Sponsored Content & Events.

- **Month 18+: **Data Products for VC/PE firms. Requires 200+ placement outcomes. Highest long-term revenue potential.

# 14. Confidential Search Protocol

Confidential searches arise when a company is replacing a current executive who doesn’t know they’re being replaced, or when a founder doesn’t want the market to know they’re adding leadership.

- **Intake classification: **During intake, Chris asks: “Is this search confidential?” If yes, engagement is flagged.

- **Blind company profiles: **Industry, stage, revenue range, and role scope — no company name or identifying details until after NDA.

- **Progressive disclosure: **Company identity revealed only after operator expresses interest AND signs a confidential search NDA.

- **Limited distribution: **Maximum 3–5 pre-qualified operators per confidential search.

# 15. Risk Assessment

## 15.1 Success Probability

| **Outcome** | **Probability** | **Requirements** |
| --- | --- | --- |
| **Profitable ****<****18 months** | 60–70% | 12+ successful placements, satisfaction >8/10, extension rate >55% |
| **$3M+ revenue in 3 years** | 45–55% | Sales team performing, 15+ active retainers, PE channel developing |
| **$10M+ revenue in 3 years** | 25–35% | Seed raise OR strong organic growth, 90+ active retainers |
| **$30M+ revenue in 5 years** | 15–20% | Platform effects, 235+ active retainers, strong data moat |

## 15.2 Key Risks

- **Client acquisition pace: **The single biggest risk. If placements are 1/month through September instead of 3–4, Year 1 falls apart. Mitigation: both founders selling from day one, ATL ecosystem events, LinkedIn content.

- **Operator quality: **First 10 placements must produce strong outcomes or referral engine never starts. Mitigation: simulation verification, supply-first discipline, 30-day replacement guarantee.

- **Extension rate: **Model assumes 65%. If 45%, LTV drops by a third. Mitigation: pulse checks catch issues early, proactive tier right-sizing, Chris’s relationship management.

- **Disintermediation: **Managed firm model prevents this. Company owns client relationship. Non-compete in operator agreement. Replacement guarantee reinforces company value.

- **Operator supply at V6 rates: **Target operators are directors going independent at $145–$165/hr. If supply is insufficient, raise client retainers (role-based pricing allows independent adjustment per role) or widen the operator profile.

- **AI disintermediation: **Commoditized AI tools (Claude, ChatGPT, Copilot) let founders handle tasks that previously required fractional expertise — basic reporting, SOP drafting, standard analysis. Distinct from the operator-disintermediation risk above: here the threat is the capability itself, not the operator route. Mitigation: position the offer around judgment rather than task execution (value is in decisions, not outputs); bundle AI tooling into operator workflow so operators compound with AI rather than compete with it; use outcome data to identify engagement types where human judgment remains essential; accept that Foundation-tier value density may compress upward into Growth and Scale.

# 16. Startup Execution Plan

## 16.1 Pre-Launch: Weeks 1–4 (February 2026)

- File LLC. Engage employment attorney. Draft MSA, contractor agreement, operating agreement.

- Finalize company name. Brief designer on logo and brand identity.

- Obtain E&O and general liability coverage. Open business bank account. Fund $25K each.

- Set up HubSpot CRM, Google Workspace, LinkedIn Sales Navigator, Stripe.

- Configure Supabase (PostgreSQL + pgvector). Deploy Retool internal admin interface. Connect Clockify. (Appsmith external portal deferred to a later phase.)

- Design Finance simulation scenario, scoring rubric, curveball scripts.

- Build target list of 100+ fractional operators. Begin outreach.

- Apply for $75K–$100K business line of credit.

## 16.2 Pre-Launch: Weeks 5–8 (March 2026)

- Run first 20–30 candidates through Finance simulation. Calibrate thresholds.

- Finalize brand. Launch website with pricing ranges (not exact rates). Begin LinkedIn content.

- Build client pipeline. Target 5+ qualified leads by end of March.

- Run operator supply test: present hourly rates to first cohort, validate acceptance at $145–$165/hr range.

## 16.3 Pre-Launch: Weeks 9–12 (April 2026)

- 10 admitted operators per role (30 total), with 60%+ Strong on internal performance signal. Supply-first discipline.

- 10+ qualified client leads with 3–5 ready to engage.

- MSA, contractor agreements, and operating agreement finalized.

- Automated pulse check system configured.

## 16.4 Launch: Month 1 (May 2026)

- Close 2–3 Foundation placements. First revenue.

- Deploy operators. Kevin monitors every engagement. Chris manages client relationships.

- Post-engagement debrief with every operator. Refine from real data.

## 16.5 Growth: Months 2–8 (June–December 2026)

- Ramp from 2–3 placements/month to 5–6 by Q4.

- Begin tier upgrade conversations at Month 2 check-ins.

- Activate side revenue modules 1 and 7 (Tech Referrals + FTE Conversions).

- Build first 3–5 case studies. Chris begins VC/PE channel development.

- Year 1 target: 12 average active retainers, $1.1M revenue.

# 17. Real-World Scenarios

## 17.1 Series A SaaS Startup Needs a CFO

**Company: CloudMetrics, Inc. —**** **$8M ARR SaaS, Series A closed 4 months ago, 35 employees, non-financial CEO.

**Problem: **Board wants monthly financial reporting, 13-week cash flow model, and path-to-profitability analysis. CEO has been doing finances in a spreadsheet.

**Placement: **Foundation allocation CFO at $5,950/month. Operator logs ~18 hours/month on average internally (no client approval required).

**Month 4: **Board asks for fundraising prep. Allocation upgraded to Growth at $11,850/month.

**12-month revenue: **$118,600 (4 months Foundation + 8 months Growth). Company keeps ~$47,440 at 40% net.

## 17.2 Scaling E-Commerce Needs a COO

**Company: BrightHome**** Direct — **$14M DTC e-commerce, 50 employees, founder doing everything.

**Problem: **Fulfillment errors increasing, no standard processes, founder spending 60% of time firefighting.

**Placement: **Growth allocation COO at $13,000/month. Operator logs ~35 hours/month internally.

**12-month revenue: **$156,000. Company keeps ~$62,400 at 40% net.

## 17.3 PE Firm Places CFO + COO Across Portfolio

**Client: Granite Peak Partners — **Mid-market PE firm, 8 portfolio companies.

Company A ($12M industrial) gets Foundation CFO at $5,950/month. Company B ($22M healthcare) gets Growth COO at $13,000/month.

**Combined 12-month revenue: **$227,400. Demonstrates multi-placement compounding from a single PE relationship.

# 18. Open Items

| **Item** | **Status** | **Owner** |
| --- | --- | --- |
| **Billing cadence (monthly vs. quad)** | Both modeled; decision pending | Kevin + Chris |
| **Founding operator advisory equity** | Not yet decided | Kevin + Chris |
| **FTE conversion fee** | Settled: 4-tier tenure-based (20%/17%/13%/10% of FY1 base salary) per MSA Exhibit D | Kevin + Chris |
| **COO/CMO simulation scenarios** | Need to build (CFO exists) | Kevin |
| **COO/CMO calibration toolkits** | Need to build (CFO exists) | Kevin |
| **Matching workflow gaps (7)** | Identified, not documented | Kevin |
| **Equity vesting terms** | 49/41/4/6 structure agreed; vesting terms TBD | Kevin + Chris |

*End of Master Business Plan V7.1. Accompanying documents: V8 Financial Model (Excel), Pricing Model V7 (Word), MSA v1.1 (Word), OA Amendment No. 1 (Word), Distribution Policy Resolution (Word), Operations & Playbooks (Word, update pending), LLM Calibration Toolkit CFO (Word).*

April 2026  Page

Page 1