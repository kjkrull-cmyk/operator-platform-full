**Fractional Standard**	LLM Calibration Toolkit COO  •  v1.0  •  May 2026

**LLM SCORING CALIBRATION TOOLKIT**

**COO Simulation  •  Phase 1 Facilitated-Live Model**

Fractional Standard
Version 1.0  •  May 2026  •  CONFIDENTIAL  •  Parallel to LLM Calibration Toolkit CFO V2 (FS-DOC-017)

| **WHAT THIS DOCUMENT IS** Sample candidate responses at each rubric anchor level, calibrated to the COO scenario (Meridian Logistics, $14M services-ops business with operating chaos and team friction) and curveball (Director of Warehouse Operations resigning the day before a major client launch). The samples here are reference points — they are not how every Excellent or Mediocre answer must look, but they illustrate the **shape** of an answer at each level. Kevin uses this toolkit to (a) calibrate his own intuition against the rubric before scoring early candidates, (b) check claude.ai's scoring against worked examples, and (c) identify rubric drift across assessments. This is an internal calibration tool, never shared with operators or clients. |
| --- |

**1. How to Use This Toolkit**

For each of the 5 rubric dimensions, this document provides:

- **Sample at 18–20 (Excellent)** — what an outstanding response sounds like
- **Sample at 12–17 (Solid)** — what a passing-but-not-special response sounds like
- **Sample at 6–11 (Mediocre)** — what a below-threshold response sounds like
- **Sample at 0–5 (Poor)** — what a clearly-fail response sounds like
- **What separates adjacent levels** — the most common borderline call, with the diagnostic question Kevin should ask himself

These samples are **abstracts of the kind of answer** at each level — they are not full transcripts. A real candidate's answer might combine elements at different levels across dimensions; the rubric is dimension-by-dimension, and samples should be read that way.

**2. Calibration Discipline**

Three principles to apply when using this toolkit:

1. **Read the candidate's actual words against the sample, not against your impression of the candidate.** A sympathetic, articulate candidate can still produce a Mediocre answer. An awkward, halting candidate can produce an Excellent one. The rubric scores the substance.

2. **Anchor at the sample, not at the average.** When you're calibrating, ask "is this candidate's answer closer to the 18–20 sample or the 12–17 sample?" Don't ask "where does this fall in the distribution of candidates I've seen?" Distribution thinking creates drift.

3. **The curveball is one dimension of five.** A candidate who handles the curveball at 18 but is at 8 on diagnosis still has a 60-range composite, not a 90-range composite. Don't let recency bias from the curveball pull all dimensions up or down.

**3. The Five Dimensions — Calibrated Samples**

---

**3.1 Dimension 1: Operational Diagnosis**

*The question this dimension answers: Can the candidate distinguish what is actually broken from what looks broken, and identify the data they'd need to make the call?*

**Sample at 18–20 (Excellent)**

> "Okay, before I start solving anything, I want to be honest about what I think I'm looking at versus what I'd need to confirm. The visible symptoms are on-time delivery dropping nine points, claims quadrupling, the warehouse-sales blame loop, and 40% Dallas turnover. None of those is the problem on its own — they're all downstream of the same thing.
>
> My working hypothesis: this company grew 75% in 18 months without building any of the systems that hold a 65-person multi-shift services operation together. There's no shared definition of 'good' — no SLA disciplines from sales, no operating cadence to surface issues early, no claims triage process, no formal handoff between shifts. When you grow that fast without that infrastructure, the experienced people compensate informally — your Director of Warehouse Operations is probably doing five jobs of glue work that nobody can see — and the new people fail because there's no playbook to onboard them into. That's why Dallas is at 40% turnover and Atlanta isn't.
>
> Before I commit to that diagnosis, I need data. Specifically: claims breakdown by client, by shift, by failure type — that tells me capacity vs. process. Turnover by tenure in Dallas — is it new hires washing out, or is it month-12 employees leaving once they figure out it's not getting better? Contractual SLAs on the three new clients vs. operational reality — did sales actually over-promise, or is that the warehouse team's narrative because they're under-resourced? And I want to ride along with delivery and sit with each shift in Atlanta during the first week, because the inbox monitoring problem won't show up in any spreadsheet.
>
> One more thing I want to name: the CEO blaming the warehouse team and the warehouse team blaming sales — that's not a fact, that's a finding. It tells me there's no shared accountability framework, and that's its own thing to fix."

*Why this is 18–20:* Distinguishes symptoms from root causes explicitly. States the diagnosis as a hypothesis to be confirmed, not a conclusion. Names specific data with reasoning ("by client, by shift, by failure type — that tells me capacity vs. process"). Recognizes the CEO/warehouse/sales blame loop as a finding, not a fact. Acknowledges informal glue work that experienced people are likely doing. Signals fractional posture (going to ride along, sit with shifts) rather than analysis-only.

**Sample at 12–17 (Solid)**

> "There's a lot going on here. My first reaction is that this is a classic case of growing too fast without the systems to support it. The OTD decline and the claims growth are the most concerning data points to me — they're directly affecting customer satisfaction. The 40% turnover in Dallas is also a red flag.
>
> I'd want to spend the first week gathering data. I'd ask for the claims data, OTD trends, turnover numbers by location. I'd interview the Director of Warehouse Operations and the head of sales separately to understand the friction. I'd review the contracts with the three new clients to see what the SLAs are and whether they're realistic.
>
> I think the underlying issue is probably that there's no operating infrastructure — no real meeting cadence, no KPIs, no process documentation. When you grow that fast that's what breaks. So my diagnosis is going to come back to: we need to build the operating system before we can fix the symptoms."

*Why this is 12–17:* Identifies the right symptoms and asks for the right data. Lands on roughly the correct hypothesis (operating infrastructure gap). But: doesn't separate hypothesis from conclusion as cleanly. Doesn't articulate what specific data would tell them what — just lists data. Doesn't recognize the blame loop as a finding. Lacks the specific texture of the Excellent answer (the "glue work" insight, the SLA-vs-narrative distinction).

**Sample at 6–11 (Mediocre)**

> "This is a company in trouble. The on-time delivery is dropping, the claims are going up, the team is fighting, and there's 40% turnover. The first thing I'd do is fix the meeting cadence — that 90-minute Monday all-hands isn't working. I'd also build a KPI dashboard so we have visibility. And I'd probably want to talk to everyone — the CEO, the warehouse leaders, the sales team.
>
> The CEO needs to understand that he can't blame the warehouse for everything. And the warehouse and sales teams need to start working together. That's a culture problem as much as an operations problem."

*Why this is 6–11:* Lists problems at high level without diagnosing. Jumps to action ("fix the meeting cadence") without diagnosis. Doesn't propose specific data to gather. Treats the scenario facts as the answer, not as inputs to investigation. The "culture problem" framing is a tell — it's a way of avoiding diagnostic specificity.

**Sample at 0–5 (Poor)**

> "Okay, I think the main thing here is that the warehouse team needs more accountability. The CEO is right that the warehouse is the issue — claims are up, OTD is down, that's a warehouse problem. I'd start by getting tougher on standards. We'd need to retrain the team, probably bring in a new operations leader at some point, and put real performance management in place."

*Why this is 0–5:* Doesn't diagnose — picks a side in the blame loop. Treats one party (the warehouse) as the problem. Misses that the Director of Warehouse Operations is highly respected and the de facto #2. Misses that sales-ops friction is a structural problem. No data-gathering. No system thinking.

**What separates 12–17 from 6–11:** The Solid answer asks for specific data and proposes interviews; the Mediocre answer doesn't. **Diagnostic question:** Did the candidate name at least three specific data sources or conversations they'd need before forming a final diagnosis? If yes → at least 12. If no → 11 or below.

**What separates 18–20 from 12–17:** The Excellent answer states the diagnosis as a hypothesis to be confirmed AND identifies what specific data would tell them what. It also sees the blame loop as a finding, not a fact. **Diagnostic question:** Did the candidate use the word "hypothesis" or equivalent epistemic hedge ("I think it's probably… but I want to confirm by…")? Did they explicitly call out the CEO/warehouse/sales blame as a structural finding? If yes to both → 18+. If only one → 16–17.

---

**3.2 Dimension 2: Strategic Communication**

*The question this dimension answers: Can the candidate frame operating recommendations for different audiences and navigate the founder-CEO trust dynamic without becoming a yes-person?*

**Sample at 18–20 (Excellent)**

> "I'd be communicating to three audiences in the first 30 days, and the messaging is different for each.
>
> *With the CEO*: The hardest conversation is going to be naming the blame loop. He's been blaming the warehouse team, and that posture is part of the problem — it's why the warehouse team and sales team don't trust each other to fix anything together. I'd frame it carefully: 'I think the warehouse team is signaling something real, and I think sales is too. Both are right about half of it. My job in the first 30 days is to figure out which half of each, and then bring you a recommendation we can stand behind together.' That respects his authority while making clear I'm not going to be the COO who tells him what he wants to hear.
>
> I'd also tie operations to his Series A timeline directly. He cares about the raise. So when I propose investment in operating infrastructure, I'd connect it: 'If we get OTD back to 95% and claims to under 15 a month, that's a story we can tell investors. If we don't, the diligence on retention and gross margin is going to be ugly.'
>
> *With the warehouse team*: They've been blamed for problems they didn't cause alone. I'd start by acknowledging that — 'I'm not here to tell you you're broken' — and then make a specific commitment about what changes for them in the first 30 days. Probably: a working KPI dashboard so they can see their own performance, a real handoff process, and visibility into the SLAs sales is selling against.
>
> *With the head of sales*: The mirror image. Ops can't be the no-team that kills deals. Sales also can't keep selling against SLAs ops can't deliver. I'd propose a weekly 30-minute ops-sales sync where deal-level commitments get pressure-tested before they go to clients."

*Why this is 18–20:* Three distinct audiences with differentiated messaging. Translates operations to business stakes (Series A, retention, gross margin). Constructively navigates the CEO trust dynamic — neither yes-person nor adversary. Specific commitments to the warehouse team. Names the sales-ops sync as a structural mechanism.

**Sample at 12–17 (Solid)**

> "Communication is going to be important. With the CEO, I want to be honest about what I'm seeing without making him feel attacked. I'd probably bring him a structured update at the end of week one — what I've found, what I think the priorities are, where I need his support. I'd connect operations to his Series A so he sees why this matters strategically.
>
> With the warehouse team, I want to listen first. I'd spend time on the floor, ask the supervisors what's not working, and then show I've heard them by making a few visible changes early. With sales, I want to set up a regular touchpoint so we're not in conflict by accident."

*Why this is 12–17:* Recognizes the audiences and proposes reasonable engagement. Connects to Series A. But: less specific on what the actual messaging would be. The CEO conversation lacks the navigating-the-blame-loop element. Lacks the differentiated, almost scripted quality of the Excellent answer.

**Sample at 6–11 (Mediocre)**

> "I'd want to set up regular communication with the CEO and the team. Probably a weekly one-on-one with the CEO, team meetings with the warehouse, and some kind of sync with sales. Communication is one of the things that's broken here — there's no real cadence — so a lot of what I'd do is establish that cadence.
>
> With the CEO specifically, I'd want to be a thought partner. He's a first-time founder, he doesn't know operations, so I can be helpful by walking him through what's normal at this stage and what isn't."

*Why this is 6–11:* Talks about communication generically rather than specifying what to communicate. "Thought partner" framing is a tell — it's a posture, not a substantive plan. Doesn't differentiate audiences in any meaningful way. Doesn't engage with the trust dynamic.

**Sample at 0–5 (Poor)**

> "I'd communicate clearly with the CEO. I'd give him weekly updates on what I'm doing. With the team, the most important thing is to be a calming presence — they've been through a lot and they need stability."

*Why this is 0–5:* Vague. "Calming presence" is a non-plan. Doesn't recognize different audiences. Doesn't engage with anything specific in the scenario.

**What separates 12–17 from 6–11:** Solid answers identify multiple audiences and at least one specific communication mechanism (e.g., weekly update structure, ops-sales sync); Mediocre answers stay generic. **Diagnostic question:** Did the candidate propose at least one specific communication moment with specific content (not "I'd talk to them" but "I'd say X to them, framed as Y")? If yes → 12+. If no → 11 or below.

**What separates 18–20 from 12–17:** Excellent answers navigate the founder-CEO trust dynamic explicitly — they don't just propose communication, they show how they'd handle the politics. **Diagnostic question:** Did the candidate articulate how they'd push back on the CEO's blame-the-warehouse posture without provoking him? If yes → 18+. If no, even with strong audience differentiation → 16–17.

---

**3.3 Dimension 3: Crisis Response (Curveball)**

*The question this dimension answers: When the situation changes mid-stream, can the candidate sequence a response across multiple time horizons while addressing the human element?*

**Sample at 18–20 (Excellent)**

> "Okay. Pause for a second. There are three different problems I need to address in different time horizons, and I don't want to collapse them.
>
> *Tonight and tomorrow morning — the launch.* I need to talk to her tonight. Not to argue with the resignation, but to ask one specific question: will she run tomorrow's launch professionally, or has she mentally checked out already? If yes, the launch goes. If no, I have a different problem. I'd also call the operations supervisor on the launch shift — I don't know that person yet, but they exist — and have a direct conversation about what's needed tomorrow. Worst case: I'm at the warehouse at 5 AM tomorrow myself.
>
> *Whether to delay.* Honest answer: probably not, unless she tells me she's gone tonight. The client is expecting us, the team can run a launch — they've done launches before — and delaying creates a different kind of trust problem. But I'd build a contingency: I want one supervisor I trust as the on-shift point of contact, an hourly check-in with the client for the first day, and we communicate proactively if anything starts to slip. Show the client we're managing it, not hiding from it.
>
> *The next 7 days — succession and retention.* She didn't leave for nothing. Going to a competitor means either better money, a clearer path, or — most likely given what we know about the sales-ops friction — somewhere she felt heard. I'd have a 90-minute conversation with her this week, not as a sell-her-back conversation, but as an exit interview I can actually learn from. If there's any chance she's salvageable I'd want to know what would change her mind. If not, I'd ask her to help me understand who her natural successor is, and I'd ask her to spend her last two weeks doing knowledge transfer rather than running floor operations.
>
> *The CEO.* He's panicking. Before I do any of the above I need to slow him down. The first thing I'd say to him is: 'I know how this feels. We are not actually as exposed as it feels right now. Here's what I'm doing in the next four hours. I'll have an update for you by 9 PM tonight.' Concrete, time-bounded, calm. Then I go execute.
>
> *And one more thing — this isn't unrelated to the original scenario.* She left for a competitor with the warehouse-sales friction unresolved. That tells me the cost of not fixing the structural problem just got real. I'd be raising that with the CEO again on the other side of this week, but the window for him to hear it is much wider now than it was 24 hours ago."

*Why this is 18–20:* Sequenced across three time horizons explicitly. Addresses the CEO's panic before solving the operational problem. Directly answers the launch question with reasoning and a contingency. Treats the Director's resignation as a diagnostic data point that connects back to the original scenario. Includes the "one more thing" that ties the curveball back to root cause.

**Sample at 12–17 (Solid)**

> "Big news. Okay. First priority is tomorrow's launch — that has to go well, the client is the largest single account and a botched launch on day one is hard to recover from. So tonight I'd want to make sure we have a backup plan for who's running the launch — either she runs it as a final professional act, or we identify the senior supervisor who can step in.
>
> Second priority is talking to her. I want to understand why she's leaving. Is there anything that would make her stay? Or if not, can she help with the transition? Going to a competitor isn't a great sign about why, so I want to know what's behind it.
>
> Third, the CEO. He's panicking and I need to calm him down. I'd commit to having a real plan in his hands by end of day tomorrow.
>
> The 30-day plan I gave you earlier needs to flex. Succession planning for the warehouse director just became the top priority. The other things I was going to do can shift back a week."

*Why this is 12–17:* Addresses the launch, the conversation with her, and the CEO. Acknowledges plan needs to flex. But: less explicit time-horizon sequencing. Doesn't treat the resignation as a diagnostic finding tied to the original scenario. Plan adjustments are mentioned but not specific.

**Sample at 6–11 (Mediocre)**

> "Wow, that's a tough one. I think the first thing is we have to delay the launch. We can't risk a botched launch on the largest account when we just lost the operations leader. That's an unacceptable risk. So we'd need to call the client first thing tomorrow, explain the situation honestly, and propose a one-week delay.
>
> Then we need to start a search for a replacement. We probably need an interim person — maybe me, or someone we bring in temporarily — and we start a real recruiting process. The CEO needs to know this is going to take some time and money."

*Why this is 6–11:* Jumps to a recommendation (delay) without working through whether that's the right call. Doesn't engage with the human element — doesn't talk to the Director, doesn't address the CEO's emotional state. Treats the resignation as a vacancy to fill, not a finding to learn from.

**Sample at 0–5 (Poor)**

> "Wow. That's really hard. Um, I think we'd need to see if we can get her to stay first. Can we offer her a counter? Or a retention bonus? If not, then we'd need to figure out what to do tomorrow. The launch is really important so we can't lose that client, but we also can't lose the rest of the warehouse team, so we have to be careful."

*Why this is 0–5:* Reactive, not structured. Counter-offer is a textbook reflex, not a thoughtful response (and counter-offering someone going to a competitor for non-monetary reasons rarely works). Doesn't directly answer the launch question. Doesn't address the CEO's panic.

**What separates 12–17 from 6–11:** Solid answers separate the immediate crisis from the leadership succession from the retention investigation, even if not fully. Mediocre answers collapse them. **Diagnostic question:** Did the candidate articulate at least two distinct time horizons with different actions in each? If yes → 12+. If no → 11 or below.

**What separates 18–20 from 12–17:** Excellent answers address the CEO's panic explicitly (not just operationally) and treat the resignation as connected to the original scenario's root cause. **Diagnostic question:** Did the candidate (a) say or imply they'd manage the CEO's emotional state separately from the operational response, AND (b) connect the resignation back to the warehouse-sales friction in the original scenario? If yes to both → 18+. If only one → 16–17.

---

**3.4 Dimension 4: Stakeholder Management**

*The question this dimension answers: Does the candidate identify all the relevant stakeholders, recognize competing interests, and propose differentiated engagement?*

**Sample at 18–20 (Excellent)**

> "Stakeholder map for the first 30 days, in order of investment priority:
>
> *Director of Warehouse Operations.* The single most important relationship. She's the de facto #2, the person the warehouse team trusts, and the one who has to want this to work. I'd invest in her early — not as a cooptation move, as a partnership. She knows what's actually broken, she's been navigating it, and she has political risk if I'm seen as imposed on her by the CEO. First-week commitment: a 90-minute working session, not in her office and not in mine, where we map what she sees as the real problems and what she'd fix if she had authority.
>
> *Head of sales.* The other half of the friction. I need to understand his pressure too — the growth from $8M to $14M didn't happen by accident, he's been carrying that. Same kind of conversation, separately. The goal isn't to take a side, the goal is to get them both to a shared problem definition.
>
> *Warehouse team — Atlanta and Dallas separately.* They're not the same population. Atlanta is the established operation; Dallas is the fast-growing struggling one with 40% turnover. Atlanta needs to feel that someone is finally addressing the chaos. Dallas needs to feel that someone is finally paying attention to them at all.
>
> *CEO.* Counterintuitively, not the top investment. He's already engaged — he's the one who hired me. The risk with him isn't disengagement, it's over-engagement. I need him to give me air cover and stay out of operational fights for 30 days while I'm building visibility.
>
> *The two complaining clients.* I'd want to talk to them in week 2. Not to defend, to listen. Their complaints are data.
>
> *The new client launching this week.* An owner relationship, going to be especially important after the curveball.
>
> *The board.* Light touch. The CEO communicates with them. I'd ask the CEO not to surface me to the board until I have something to say."

*Why this is 18–20:* Comprehensive stakeholder map. Specifically prioritizes the Director of Warehouse Operations early (before the curveball confirms why this matters). Distinguishes Atlanta from Dallas. Names the counterintuitive insight about the CEO. Includes clients as stakeholders. Has a board posture.

**Sample at 12–17 (Solid)**

> "Key stakeholders are the CEO, the Director of Warehouse Operations, the head of sales, and the warehouse teams. I'd want to spend significant time with the Director — she's the de facto #2 and respected by the team, so getting her on board is critical. I'd also want to meet with the head of sales separately to understand the friction from his side.
>
> The warehouse team I'd address through their leadership rather than directly at first. The CEO I'd manage through structured updates.
>
> I'd also want to talk to the two complaining clients to understand what's broken from their perspective."

*Why this is 12–17:* Identifies most of the right stakeholders. Recognizes the Director as critical. Includes complaining clients. But: doesn't differentiate Atlanta from Dallas warehouse teams. Doesn't articulate the counterintuitive CEO posture. Less specific on engagement mechanisms.

**Sample at 6–11 (Mediocre)**

> "The most important stakeholder is the CEO — he hired me, he's the one I report to. I'd also need to work with the warehouse team and the sales team to fix the operations issues. Building good relationships with everyone is going to be the foundation of getting anything done."

*Why this is 6–11:* CEO-centric. Treats warehouse and sales as monolithic groups. Doesn't identify specific individuals. "Good relationships with everyone" is a posture, not a plan.

**Sample at 0–5 (Poor)**

> "I'd focus on the CEO first since he's the decision-maker. Once I have his confidence and authority, I can drive change through the rest of the organization."

*Why this is 0–5:* Pure top-down posture. No recognition that operations is a people problem. Misses the Director of Warehouse Operations entirely.

**What separates 12–17 from 6–11:** Solid answers identify the Director of Warehouse Operations as a critical relationship; Mediocre answers don't. **Diagnostic question:** Did the candidate name the Director of Warehouse Operations as a distinct stakeholder requiring early investment, before the curveball was introduced? If yes → 12+. If no → 11 or below.

**What separates 18–20 from 12–17:** Excellent answers distinguish populations within the warehouse (Atlanta vs. Dallas) and articulate a counterintuitive posture toward at least one stakeholder (e.g., the CEO needing less engagement than expected). **Diagnostic question:** Did the candidate distinguish the two warehouse locations as different populations with different needs, AND articulate at least one non-obvious stakeholder insight (e.g., CEO over-engagement risk, the Director's political risk)? If yes to both → 18+. If only one → 16–17.

---

**3.5 Dimension 5: Operating System Design**

*The question this dimension answers: Can the candidate design specific operating systems and cadences, sequence the build realistically across 30 days, and pick the highest-leverage interventions rather than trying to fix everything?*

**Sample at 18–20 (Excellent)**

> "I'd resist the urge to fix everything. In 30 fractional days I get maybe 2–3 systemic interventions to land. Here's how I'd sequence:
>
> *Week 1 — diagnose, listen, gather.* No system changes yet. Specifically:
> - Ride along with delivery for one full day, both Atlanta and Dallas if possible.
> - Sit with each shift in Atlanta — early, mid, late — for at least 30 minutes each.
> - Audit the claims inbox: read 3 weeks of it, not as quality assurance, as ethnography.
> - Pull OTD data by client, by shift, by failure type if it exists. If it doesn't exist in that breakdown, that itself is a finding.
> - 90-minute working session with the Director of Warehouse Operations. Same with head of sales.
> - One CEO check-in at end of week one. Findings, not recommendations.
>
> *Week 2 — design.* Three artifacts:
> - **Operating cadence redesign.** The Monday all-hands gets restructured into a weekly ops review (30 min, six numbers, run by the Director of Warehouse Operations) plus a separate weekly all-hands (15 min, communications). The 90-minute everything-meeting goes away.
> - **KPI dashboard, MVP version.** Six metrics: OTD by client, claims/week, claims-to-shipment ratio, shift handoff incidents, headcount/turnover, customer NPS or substitute. Built in whatever tool is fastest to ship — could be a Google Sheet pulling from existing data; doesn't need to be Tableau-grade in week 2.
> - **One critical process documented and piloted.** I'd pick the shift handoff in Atlanta. It's verbal today, that's where claims grow, and a 30-minute process change can be measured.
>
> *Week 3 — pilot.* Run the first weekly ops review. Deploy the dashboard. Pilot the handoff process for one week. Plan a sales-ops sync and run the first one.
>
> *Week 4 — review and decide.* Measure what changed. Present to CEO with three things: what's working, what's not, what I'd build next if engagement extends.
>
> The thing I'm explicitly not doing in 30 days: fixing the onboarding problem in Dallas. It's important, but it's not 30-day work, and trying it would dilute everything else. I'd flag it as the top priority for Days 31–60.
>
> Fractional posture: I'm not running operations. I'm standing up the systems that let the team run operations better. The Director of Warehouse Operations runs the weekly ops review, not me. The head of sales runs the sales-ops sync. The shift handoff process belongs to the shift supervisors. My job is to design, pilot, and walk away."

*Why this is 18–20:* Specific 30-day plan with phased deliverables. Picks 3 high-leverage interventions and explicitly sequences them. Names what they're not doing and why. Articulates fractional posture clearly (not running operations, standing up systems). Has measurable outputs.

**Sample at 12–17 (Solid)**

> "I'd structure the first 30 days into roughly three phases. The first week is diagnosis — I'd want to spend time on the floor, in shifts, and in conversations with the leadership team. Week two would be designing some basic operating infrastructure — a regular operating cadence, a simple KPI dashboard, and probably starting to document a critical process or two. Weeks three and four would be implementing those changes and measuring early impact.
>
> The biggest risk in 30 days is trying to fix everything. I'd focus on the highest-leverage interventions: the operating cadence, the KPI visibility, and getting the shift handoff process in writing. The rest can wait until I'm 60 or 90 days in.
>
> By the end of 30 days I'd want the CEO to see real movement on at least two metrics — probably OTD and claims rate."

*Why this is 12–17:* Three-phase structure. Explicitly names the focus interventions. Acknowledges the don't-fix-everything risk. But: less specific on what the actual deliverables look like. Doesn't articulate the fractional posture as crisply. Doesn't name what they explicitly won't do.

**Sample at 6–11 (Mediocre)**

> "In 30 days I'd want to make significant progress on a number of things. I'd build out a basic operating cadence — daily standups, weekly leadership meetings, monthly all-hands. I'd put a KPI dashboard in place. I'd start documenting key processes — claims handling, shift handoffs, client onboarding. I'd also begin a real onboarding program for warehouse staff. And I'd want to address the sales-ops friction through some kind of regular forum.
>
> By end of month one I'd expect to see early signs of improvement on the key metrics."

*Why this is 6–11:* Lists too many initiatives for 30 days (daily standups + weekly leadership + monthly all-hands + KPI dashboard + multiple process docs + onboarding program + sales-ops forum). No sequencing. No prioritization. Tries to fix everything — the fractional posture failure mode.

**Sample at 0–5 (Poor)**

> "30 days is enough time to make major changes. I'd implement a full operating system overhaul — new meetings, new processes, new metrics, new accountability framework. By end of month one the company would look very different."

*Why this is 0–5:* Unrealistic ambition for 30 fractional days. No sequencing or prioritization. "Major changes" and "look very different" are markers, not plans. Almost certainly would alienate the existing team.

**What separates 12–17 from 6–11:** Solid answers explicitly limit the number of interventions and articulate why; Mediocre answers list everything. **Diagnostic question:** Did the candidate name 2–3 specific interventions as the priorities AND articulate that they're choosing not to do something else? If yes → 12+. If no → 11 or below.

**What separates 18–20 from 12–17:** Excellent answers articulate fractional posture explicitly (standing up systems for the team to run, not running operations themselves) and have specific deliverables with owners. **Diagnostic question:** Did the candidate name a specific deliverable in week 2 with enough detail that I could draw it on a whiteboard (e.g., "weekly ops review, 30 min, six numbers, run by the Director of Warehouse Operations"), AND articulate the fractional posture distinction? If yes to both → 18+. If only one → 16–17.

---

**4. Composite Scoring Examples**

To illustrate how dimension scores combine into a composite and pool admission decision:

| Profile | D1 | D2 | D3 | D4 | D5 | Composite | Decision | Internal signal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Strong all-around | 18 | 17 | 18 | 16 | 18 | 87 | Admit | Strong |
| Strong with one weak dim | 18 | 17 | 18 | 8 | 18 | 79 | Admit | Conditional (D4 <12) |
| Solid all-around | 14 | 14 | 14 | 14 | 14 | 70 | Admit | Conditional |
| Borderline | 12 | 13 | 11 | 12 | 13 | 61 | Admit | Conditional |
| Just below threshold | 12 | 12 | 11 | 12 | 12 | 59 | Decline | n/a |
| Strong on curveball, weak on diagnosis | 8 | 12 | 18 | 12 | 12 | 62 | Admit | Conditional |
| Brilliant communicator, thin substance | 8 | 18 | 12 | 14 | 8 | 60 | Admit | Conditional |
| Operations veteran, weak on people | 17 | 12 | 13 | 6 | 16 | 64 | Admit | Conditional (D4 <12) |

These are illustrative. The Conditional internal signal triggers Kevin to be more selective in matching presentations — admitting an operator with a Conditional signal does not mean presenting them indiscriminately to clients. Per AI Governance Framework v2.2, internal signals never appear in operator-facing communications or client-facing profiles.

**5. Calibration Audit**

Per AI Governance Framework v2.2 §14, every 25 completed assessments triggers a calibration audit. Re-score 5 randomly selected past assessments using the current rubric and current Claude model. Investigate any drift > 10 points on any dimension. This toolkit is the reference document for that calibration check — if drift is found, either the toolkit needs sharpening or the rubric prompts in the COO Scoring Prompt need adjustment. Both are version-controlled.

**6. Companion Documents**

- COO Assessment Delivery Protocol v1.0 — operational playbook for delivering the assessment
- COO Scoring Prompt v1.0 — claude.ai prompt that drives the AI scoring
- COO Assessment Scoring Workbook — per-candidate scoring + composite calculation
- AI Governance Framework v2.2 — FS-DOC-041 (governs HIL principle, audit trail, calibration triggers)
- LLM Calibration Toolkit CFO V2 — FS-DOC-017 (parallel toolkit for the CFO role)
