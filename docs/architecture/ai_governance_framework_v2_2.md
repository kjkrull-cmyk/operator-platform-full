**FRACTIONAL STANDARD**

**AI Governance Framework**

*Human Oversight • Disclosure Architecture • Audit Readiness*

*Version 2.2 • FS-DOC-041 • May 2026 • Confidential • Cross-Role (CFO
/ COO / CMO / CTO¹ / CRO¹) --- Sourcing, Assessment, Matching, Document Workflows,
Agentic Tools*

*¹ Extended catalog — 0% Y1 allocation per Pricing Model V7.*

| **WHAT THIS DOCUMENT IS** |
| --- |
| Fractional Standard's governance framework for AI use across sourcing, assessment, matching, diagnostic generation, document workflows, client portal interactions, agentic tools, and any future AI-assisted workflow. Designed to satisfy the 2026 U.S. regulatory landscape — NYC Local Law 144, Colorado SB 24-205 (CAIA), Illinois HB 3773, California FEHA ADS and CCPA ADMT (when triggered), FTC Endorsement Guidelines — under the strictest applicable interpretation. v2.2 supersedes v2.1 and incorporates the May 2026 settled-decision cascade. Substantive May 2026 changes: (1) Activation Fee retired and replaced by MSA execution + Stripe payment authorization on file as the engagement-start signal (no $1,000 fee at gate); (2) Operator Tier 1/2/3 system eliminated externally and replaced with binary Pool Admission + internal performance signals for matching; (3) Operator pay model is a fixed monthly fee per Engagement, derived from weekly hours target × hourly rate × 52/12, rounded to nearest $25; (4) hours logged in Clockify are a utilization signal only, not the basis for operator pay; (5) Pricing Model is now V7 (allocation-based, not hour-cap); (6) Vendor-to-Client Liability Architecture (new Section 6.5) added to address client-side AEDT obligations when FS places operators into AEDT-regulated client decisions; (7) Phase 2 Matching Engine Framework Reservation (new Section 11A) added to govern any future ML training on FS placement data; (8) Section 14 Review Triggers expanded into the broader Compliance Trigger Monitor including W-2 pivot, $26.6M revenue, 100K+ CA residents thresholds. Principle preservation: the four design criteria from v2.1 §3.4 and the five invariants from §2 carry forward unchanged. This framework is the authoritative source for AI governance at Fractional Standard. All operational playbooks, contracts, and website copy must reconcile to the principles, rules, and language here. |


## Contents

| **#** | **Section** |
| --- | --- |
| 1 | Purpose, Scope & Authority |
| 2 | Governance Principles — The Five Invariants |
| 3 | AI Tool Inventory & Agent Architecture |
| 4 | Shadow AI Policy |
| 5 | Disclosure Architecture (including Client Activation Gate — No Activation Fee) |
| 6 | AI-Assisted Document Workflows |
| 7 | Matching Lifecycle and Records |
| 8 | Cross-State Operating Rules Matrix |
| 8.5 | Vendor-to-Client Liability Architecture *(new in v2.2 — May 2026)* |
| 9 | Data Retention Standard |
| 10 | Explanation, Appeal & Re-Assessment Rights |
| 11 | Annual Impact Assessment Commitment |
| 11A | Phase 2 Matching Engine — Framework Reservation *(new in v2.2 — May 2026)* |
| 12 | Audit Readiness — What to Track |
| 13 | Per-Engagement Decision Records |
| 14 | Review Triggers — Compliance Trigger Monitor |
| 15 | Pre-Launch Legal Review |
| 16 | What This Framework Is Not |
| A | Appendix A — Glossary of Terms |
| B | Appendix B — Alignment to NIST AI Risk Management Framework |
| C | Appendix C — Disclosure Language Templates |
| D | Appendix D — Version Log |

# 1. Purpose, Scope & Authority

## 1.1 Purpose

This framework establishes how Fractional Standard governs the use of
artificial intelligence across all company workflows. It exists for
three reasons: to protect operators and clients from harm arising from
AI use, to ensure Fractional Standard operates within the applicable
regulatory regime, and to build the operational discipline that will
scale with the firm as it grows in size, jurisdictional footprint, and
AI sophistication.

## 1.2 Scope

This framework governs every interaction between a Fractional Standard
workflow and an AI system --- whether an LLM, an embedding model, a
meeting transcription tool, a sourcing platform with AI ranking, an
autonomous agent, or any other computational system that processes
personal or business information to produce outputs that influence a
decision.

Lifecycle coverage:

-   Sourcing --- identifying prospective operators from public and
    private data sources, including AI-assisted sourcing platforms.

-   Assessment --- administering and scoring simulations, evaluating
    operator qualifications.

-   Matching --- ranking operators against client engagement needs,
    generating shortlists, producing client-facing operator profiles,
    ad-hoc search and re-match.

-   Document workflows --- resume parsing, profile generation,
    summarization, query and synthesis of any document brought into the
    workflow.

-   Engagement operations --- time tracking, invoicing, pulse-check
    analysis, operator performance feedback.

-   Client operations --- client portal self-service Job Order
    articulation, diagnostic generation, client communication drafting,
    engagement health monitoring.

-   Agentic and autonomous tools --- every AI agent in current or
    planned use.

-   Referral and recommendation flows --- training partner referrals,
    community recommendations, other third-party relationships where AI
    suggests options to operators or clients.

## 1.3 Who This Framework Applies To

Every Fractional Standard team member, contractor, and agent (human or
AI) acting on behalf of the firm. Today that means Kevin Krull (COO/CPO)
and Chris (co-founder, in his scope of sales and client acquisition). As
the firm hires employees, onboards contracted delivery personnel, or
engages recruiters or other agents, each is subject to this framework
from their first day. Every AI agent operating on Fractional Standard\'s
behalf is subject to the framework as well --- agents are first-class
governed entities, not exceptions.

## 1.4 Authority & Maintenance

Kevin Krull, as Managing Member and owner of AI strategy and talent
operations, is the authoritative owner of this framework. Amendments
require Kevin\'s signature. Material changes are reviewed with Chris
before adoption. Legal counsel reviews material changes when triggered
by a regulatory event (see Section 14).

Minor operational updates --- AI Tool Inventory additions, updated
disclosure language that does not change substantive rights, cross-state
matrix updates --- may be made and logged in the Version Log without
formal amendment. Substantive changes require formal amendment.

## 1.5 Relationship to Other Documents

This framework sits at the top of Fractional Standard\'s governance
stack. Downstream documents must reconcile to the principles and rules
here. When a downstream document conflicts with this framework, the
framework controls and the downstream document is updated.

+-----------------------------------------------------------------------+
| **AGENT-RELATED DOCUMENTATION GOVERNANCE FLOW**                       |
|                                                                       |
| Because the agent architecture spans many implementing documents, all |
| agent additions, modifications, or scope changes follow a defined     |
| flow:                                                                 |
|                                                                       |
| 1\. Framework first (FS-DOC-041) --- any new agent, scope change, or  |
| removal is approved here. The AI Tool Inventory in Section 3 is       |
| updated; the four design criteria in Section 3.4 are satisfied.       |
|                                                                       |
| 2\. Master System Specification V2 (FS-DOC-002) --- owns the agent    |
| technical architecture, data flows, prompt designs, infrastructure    |
| choices.                                                              |
|                                                                       |
| 3\. Operations Playbook V8 (FS-DOC-040) --- owns the operational      |
| integration of agents into daily workflow.                            |
|                                                                       |
| 4\. Specific role playbooks --- Matching Workflow (FS-DOC-013),       |
| Matching Workflow Gap Playbook (FS-DOC-046), Client Diagnostic Call   |
| Playbook (FS-DOC-045), CFO Assessment Delivery Protocol (FS-DOC-010), |
| Operator Sourcing Strategy V3 (FS-DOC-019) --- own the agent-touched  |
| workflow steps in their respective domains.                           |
|                                                                       |
| 5\. Privacy Policy (FS-DOC ID to be assigned) and ICA Exhibit C       |
| (FS-DOC-048) / MSA Section 18 (FS-DOC-049) --- updated when an agent  |
| introduces new disclosure or consent obligations.                     |
|                                                                       |
| Documentation cascade is part of every agent deployment. An agent is  |
| not \'live\' until all affected documents reflect it.                 |
+=======================================================================+
+-----------------------------------------------------------------------+

  -----------------------------------------------------------------------
  **Document**          **Relationship to this framework**
  --------------------- -------------------------------------------------
  Master Business Plan  Sections 9 and 10 reference this framework.
  V7.1 (FS-DOC-001)     Section 9 architectural commitment (RAG + rules,
                        no ML training on FS data) is binding on the
                        compliance-architecture-preservation principle.

  Master System         Authoritative source for agent technical
  Specification V2      architecture and detailed scope. v2.1 of this
  (FS-DOC-002)          framework triggers a substantial MSS V2 update
                        covering the full agent architecture.

  ICA Draft             Contract embodiment of framework principles for
  (FS-DOC-048) ---      operators. Consent language derived from Appendix
  Exhibit C             C of this framework.

  MSA Draft             Contract embodiment of framework principles for
  (FS-DOC-049) ---      clients. Scope and liability allocation derived
  Section 18            from this framework.

  Operations Playbook   Operational execution of framework in day-to-day
  V7 (FS-DOC-040)       workflow. Agent integration sections, shortlist
                        confirmation gate, disclosure timing, appeal
                        handling, document-workflow procedures, Client
                        Activation Gate workflow.

  Operator Sourcing     Sourcing-specific application of Shadow AI Policy
  Strategy V3           (Section 4) and Disclosure Architecture (Section
  (FS-DOC-019)          5). Sourcing agent integration.

  CFO Assessment        Role-specific assessment execution reconciled to
  Delivery Protocol     framework. Development report structure per
  (FS-DOC-010)          Section 5 and Section 12.

  CFO Scoring Prompt    Assessment scoring prompt. Subject to Principle 3
  (FS-DOC-011 /         data minimization and Principle 5 audit trail
  FS-DOC-012)           discipline.

  LLM Calibration       Rubric calibration. Aligned to development report
  Toolkit CFO V2        structure.
  (FS-DOC-017)          

  Matching Workflow     Matching-specific execution of HIL principle,
  (FS-DOC-013)          Audit Trail Discipline, and Section 7 (Matching
                        Lifecycle and Records).

  Matching Workflow Gap Non-happy-path matching scenarios. Executes
  Playbook (FS-DOC-046) appeal procedures from Section 10.

  Job Order Intake Form Captures jurisdiction fields driving Cross-State
  (FS-DOC-044)          Matrix (Section 8). Updated by Self-Service Job
                        Order Articulation Agent and
                        Diagnostic-to-Job-Order Translator.

  Client Diagnostic     Client-facing disclosure execution per Section 5.
  Call Playbook         Diagnostic-to-Job-Order Translator agent
  (FS-DOC-045)          integration.

  Daily Cheat Sheet     Quick-reference panel surfaces AI compliance
  (FS-DOC-050)          reminders, shadow-AI prohibition, audit-trail
                        expectations.

  Phase 1 Sheets ATS    Operational data store. Captures all Section 5.10
  (FS-DOC-014 template  disclosure acknowledgments, Section 9 retention
  / FS-DOC-020 live)    records, Section 12 audit data.

  Operator Profile      Generated by Profile Generation Agent under HIL
  Template (FS-DOC-022) gate per Section 6.

  Privacy Policy        Public-facing embodiment of Sections 5, 9, and
  (FS-DOC ID to be      10.
  assigned)             

  Fractional Standard   Standing website notice --- the Law 144 clock
  Operators page        starter. Language from Appendix C.1.
  (FS-DOC ID to be      
  assigned)             

  Fractional Standard   Self-service Job Order articulation agent
  client portal (FS-DOC surface. Client Activation Gate workflow per
  ID to be assigned)    Section 5.7.
  -----------------------------------------------------------------------

# 2. Governance Principles --- The Five Invariants

Five principles govern every AI-assisted action at Fractional Standard.
They are non-negotiable. Every downstream document, workflow, and design
decision must reconcile to all five. When a tradeoff requires violating
a principle, the answer is to redesign --- not to violate.

## Principle 1 --- Human-in-the-Loop

No decision that affects a person\'s opportunity or outcome at
Fractional Standard is made solely by AI. Every operator verification
decision, every matching shortlist, every adverse action, every
consequential determination --- a qualified human reviews, has authority
to override, and makes the final decision.

+-----------------------------------------------------------------------+
| **WHAT HUMAN-IN-THE-LOOP ACTUALLY MEANS**                             |
|                                                                       |
| Drawn from California CCPA ADMT regulations\' human-review test ---   |
| the most operationally demanding definition across applicable laws.   |
| To satisfy this principle, the human reviewer must:                   |
|                                                                       |
| • Know how to interpret and use the AI output to make the decision.   |
|                                                                       |
| • Review and analyze the AI output together with any other            |
| information relevant to the decision.                                 |
|                                                                       |
| • Have genuine authority to make, change, or override the decision    |
| based on their analysis.                                              |
|                                                                       |
| A rubber-stamp human who clicks \'approve\' without independent       |
| review does NOT satisfy this principle. The review must be real,      |
| documented, and produce decisions that sometimes differ from what the |
| AI recommended.                                                       |
+=======================================================================+
+-----------------------------------------------------------------------+

### Operational application

-   Assessment verification decision: Claude scores and recommends;
    Kevin validates and decides. Documented per CFO Assessment Delivery
    Protocol (FS-DOC-010).

-   Matching shortlist: semantic retrieval and structured rules surface
    candidates; Kevin confirms each shortlist before client delivery.
    Permanent gate per Matching Workflow (FS-DOC-013).

-   Operator sourcing: AI-assisted sourcing tools surface candidates;
    Kevin reviews and selects who to contact. Per Operator Sourcing
    Strategy V3 (FS-DOC-019).

-   Adverse actions: any non-verification, removal, or rejection
    requires documented human rationale per Section 10.

-   Client-facing profile generation: AI drafts; Kevin reviews and
    approves before send. Manual override and re-generation are
    first-class supported (Section 6).

-   Client self-service Job Order articulation: AI agent guides the
    founder through structured intake; Chris validates the resulting Job
    Order before matching kicks off (Section 5.6).

-   Submission package generation: AI assembles the candidate submission
    package; Kevin reviews email content, profiles, and write-ups before
    send.

-   Client Activation Gate: client must accept MSA terms (FS-DOC-049)
    and have a Stripe payment authorization on file before any matching cycle begins (Section 5.7).
    Activation fee was retired in May 2026; the gate now uses MSA execution + payment authorization on file.

### Why this matters for compliance

This principle is the firm\'s single largest compliance defense. Genuine
HIL takes Fractional Standard\'s tools outside NYC Local Law 144\'s AEDT
classification in most interpretations, outside California CCPA\'s
\'substantially replaces human decisionmaking\' ADMT category, and
inside Colorado CAIA\'s rebuttable presumption of reasonable care. It
also satisfies the EU AI Act\'s human oversight requirement if
international expansion ever becomes relevant.

## Principle 2 --- Transparency

Fractional Standard discloses its use of AI clearly, conspicuously, and
proactively --- to operators, to clients, to prospective operators and
clients before they engage. Disclosure is not optional, not buried, not
after-the-fact.

### Operational application

-   Standing website disclosure on the operators page (Section 5.1).

-   Direct outreach disclosure in every outreach message (Section 5.2).

-   Pre-assessment disclosure acknowledged before simulation (Section
    5.3).

-   Client portal entry disclosure at first interaction (Section 5.5).

-   Client diagnostic call disclosure per Client Diagnostic Call
    Playbook (FS-DOC-045).

-   MSA Section 18 disclosure at engagement contracting (FS-DOC-049).

-   Client Activation Gate disclosure at MSA acceptance and payment
    (Section 5.7).

-   FTC training-referral disclosure at point of recommendation (Section
    5.8).

-   Agentic tool disclosure at start of any operator- or client-facing
    agent interaction (Section 5.9).

## Principle 3 --- Data Minimization

AI systems at Fractional Standard operate on the minimum data necessary
to perform their function. Personal attributes unrelated to assessment
(demographics, location inferences, age, protected class proxies) never
enter scoring, matching, or decision-making pipelines. Client
confidential information stays within the client-specific engagement
context and is never sent to an LLM without explicit business necessity.

### Operational application

-   Demographic data collected post-decision as self-reported, optional
    fields. Stored in separate restricted Supabase view per Section
    12.1.

-   ZIP code never used as a ranking or filtering factor (IL HB 3773
    prohibition applied firmwide).

-   Client confidential data stays within engagement-scoped storage. Not
    used for training, not sent to non-approved tools.

-   Operator PII in prompts minimized to what is necessary.

-   Shadow-AI PII leakage prohibited (Section 4).

## Principle 4 --- No Autonomous Decisions About People

No AI agent at Fractional Standard finalizes a decision about a person
--- whether an operator\'s verification decision, a match to a specific
client, an adverse action, or any other consequential determination ---
without human confirmation. Agents may surface options, draft
recommendations, and pre-populate shortlists; they may not act.

### Operational application

-   Lead-Generation Agent (internal): surfaces prospect companies for
    outreach to Kevin and Chris; does not contact people.

-   Client Self-Service Job Order Articulation Agent (client portal):
    guides founder through intake but does not finalize a Job Order
    without Chris\'s validation.

-   Match-on-Demand Agent (internal): produces shortlists and search
    results, but Kevin confirms before any client delivery.

-   Compliance Trigger Monitor: summarizes regulatory developments; does
    not change framework or operations without human review.

-   AI-assisted sourcing tools: may rank and filter; do not send
    outreach automatically.

-   Onboarding Tracking Agent: surfaces stalls and prompts next-step
    actions to Kevin; does not contact operators.

-   Engagement Health Monitor: drafts check-in messages and flags
    engagements at risk; does not send communications without approval.

## Principle 5 --- Audit Trail Discipline

Every AI-assisted decision produces a durable audit trail --- tool used,
input provided, output received, human decision taken, and any override
reasoning. The audit trail is Fractional Standard\'s defense against
regulatory challenge, the foundation of the future matching engine\'s
learning, and the evidence of the firm\'s operational quality.

+-----------------------------------------------------------------------+
| **AUDIT TRAIL IS A BYPRODUCT OF NORMAL WORKFLOW**                     |
|                                                                       |
| Critical design commitment: audit trail logging is automatic, never a |
| separate manual step. If logging requires deliberate effort by Kevin  |
| or any other human operator, the workflow has been designed wrong and |
| must be redesigned.                                                   |
|                                                                       |
| Implementation principle:                                             |
|                                                                       |
| • Every API call to Claude through the approved workflow              |
| automatically logs prompt, response, and timestamp.                   |
|                                                                       |
| • Every shortlist confirmation in the Retool admin UI captures the    |
| AI-generated list, the confirmation, and any operator additions or    |
| removals --- built into the UI button, not a separate form.           |
|                                                                       |
| • Match rationale fields auto-populate from AI output and are         |
| editable. Edits ARE the override; they are captured automatically.    |
|                                                                       |
| • The only manual step is one-sentence override reasoning when        |
| Kevin\'s decision deviates significantly from the AI recommendation.  |
| Optional but recommended for matching engine training value.          |
|                                                                       |
| • Shadow AI incident reporting and operator appeal handling are the   |
| only other manual logging steps --- both rare by design.              |
|                                                                       |
| Audit trail design is a Master System Specification V2 (FS-DOC-002)   |
| responsibility. No agent or workflow ships unless its audit trail is  |
| automatic.                                                            |
+=======================================================================+
+-----------------------------------------------------------------------+

### What gets logged

-   Tool used and version.

-   Input summary (enough to reconstruct the context).

-   Output received (full for consequential outputs; summary for
    routine).

-   Human decision taken (accepted, modified, overridden).

-   Override reasoning when the decision deviates materially from the AI
    recommendation.

-   Timestamps.

### Storage

All AI-assisted decision records are stored in the Supabase primary
database with a retention horizon of four years minimum (Section 9).
Supabase serves as the single source of truth; the live ATS
(FS-DOC-020), Retool admin UI, and HubSpot are interfaces, not systems
of record.

# 3. AI Tool Inventory & Agent Architecture

Every AI tool and every AI agent in use at Fractional Standard is
inventoried here. The inventory is a living document. A tool or agent is
not adopted until it is inventoried; it is not removed until the
inventory is updated. Kevin maintains the inventory; Chris reviews
quarterly during the Governance Review (Section 14).

## 3.1 Third-Party Tool Inventory (April 2026)

  --------------------------------------------------------------------------------------------------------------
  **Tool**         **Category**     **Purpose**          **Risk             **Disclosure   **Governance notes**
                                                         classification**   required?**    
  ---------------- ---------------- -------------------- ------------------ -------------- ---------------------
  Claude API       Core LLM         Assessment scoring,  High               Yes --- all    HIL required on every
  (Anthropic)                       semantic search                         operator and   consequential output.
                                    synthesis, agent                        client         Operator PII
                                    reasoning, document                     touchpoints    minimized. No
                                    workflow synthesis                                     client-confidential
                                                                                           data outside
                                                                                           engagement boundary.

  Claude.ai (Kevin Shadow-AI risk   Kevin personal use   Moderate --- Kevin Covered by     Operator/client PII
  personal)                         for drafts,          only               Shadow AI      paste into claude.ai
                                    brainstorming,                          Policy         prohibited.
                                    general writing                         (Section 4)    Evaluation work uses
                                                                                           API-backed workflow
                                                                                           with full audit
                                                                                           trail.

  Embedding        Retrieval        Vector embeddings    Low                Yes ---        Provider-agnostic. No
  provider (Cohere infrastructure   for pgvector                            disclosed as   training on FS data.
  or equivalent)                    semantic search                         \'semantic     Embedding model
                                                                            matching\'     pre-trained and owned
                                                                                           by vendor.

  HireEZ or        Sourcing AI      Candidate sourcing   Moderate           Light-touch    Vendor DD at
  equivalent                        and ranking from                        (Section 5.4)  adoption: bias audit
  sourcing tool                     public professional                                    docs, model card,
                                    data                                                   proxy statement. ZIP
                                                                                           code and demographic
                                                                                           inference disabled.

  Fathom or        Meeting          Diagnostic call      Moderate           Yes ---        Two-party consent
  equivalent       transcription    transcripts,                            participants   states (CA, IL,
                                    simulation                              notified at    others) require
                                    recordings, kickoff                     start of call  verbal consent.
                                    transcripts                                            Transcripts stored
                                                                                           under engagement
                                                                                           scope.

  Cal.com          Scheduling       Simulation,          Low                Covered by     Any future Cal.com AI
                                    interview,                              privacy policy features reviewed
                                    engagement-kickoff                                     before enablement.
                                    scheduling                                             

  HubSpot          CRM              Client pipeline,     Low to moderate    Covered by     HubSpot AI features
  (Free/Starter)                    sequence management,                    privacy policy (Breeze, etc.)
                                    Chris\'s primary                                       reviewed before
                                    interface                                              enablement. Operator
                                                                                           PII not stored. Job
                                                                                           Order Articulation
                                                                                           Agent flows data via
                                                                                           integration.

  Stripe (Radar +  Fraud            Payment fraud review Low (Radar) /      Standard       Fraud carve-out under
  Connect)         detection +      on client            Moderate (Connect) Stripe         CAIA. Client
                   payments         transactions; Client                    disclosure in  Activation Gate uses
                                    Activation Gate                         payment flow   Stripe SetupIntent
                                    payment-method-on-file                                  for payment-method-
                                    capture; operator                                       on-file capture (no
                                    payouts; monthly                                        fee charged at gate
                                    retainer billing.                                       — May 2026 retirement
                                                                                            of $1,000 fee).
                                    payouts                                                

  Checkr or        Background check Verified-operator    Moderate ---       FCRA consent   FCRA pre-adverse and
  GoodHire                          verification         FCRA-governed      via ICA        adverse action
                                                                            Exhibit D      handling per statute.

  Zapier / Make    Workflow         HubSpot ↔ Supabase   Low                Not required   No AI-assisted
                   automation       sync, Stripe                                           decision logic inside
                                    webhooks, Clockify                                     Zaps. Pure ETL.
                                    sync                                                   

  Retool (Phase 1  Internal admin   Kevin\'s daily       Low                Internal only  Any embedded AI
  admin UI)                         workflow interface                                     features reviewed
                                    over Supabase.                                         before enablement.
                                    Primary surface for                                    
                                    orchestration agent.                                   
  --------------------------------------------------------------------------------------------------------------

## 3.2 Agent Architecture (Current and Planned)

Agents are governed entities subject to the same five principles as
third-party tools. The framework maintains a high-level agent inventory;
the Master System Specification V2 (FS-DOC-002) owns the detailed
technical architecture, data flows, prompt designs, and integration
patterns for each agent. v2.1 of this framework triggers a substantial
MSS V2 update covering the full agent architecture.

  ---------------------------------------------------------------------------------------------------------------
  **Agent**                 **Surface**        **Purpose**                     **Risk             **HIL gate**
                                                                               classification**   
  ------------------------- ------------------ ------------------------------- ------------------ ---------------
  Personal Assistant /      Kevin\'s daily-use Natural-language search across  High --- spans     Surfaces and
  Orchestration Agent       interface (Retool  operators; draft generation;    many decision      drafts; Kevin
                            panel)             cross-document research; ad-hoc types              approves all
                                               report generation;                                 decisions and
                                               orchestration of other agents.                     external sends.
                                                                                                  Composes
                                                                                                  workflows with
                                                                                                  their own HIL
                                                                                                  gates.

  Lead-Generation Agent     Internal (Kevin    Monitors job postings, funding  Moderate ---       Surfaces only;
                            and Chris)         announcements, leadership       internal,          outreach
                                               changes; surfaces prospect      prospect-level     decisions are
                                               companies for outreach.                            human. Standard
                                                                                                  outreach
                                                                                                  disclosure
                                                                                                  applies when
                                                                                                  output triggers
                                                                                                  external
                                                                                                  contact.

  Client Self-Service Job   Client portal      Guides founders through         High ---           Chris validates
  Order Articulation Agent  (founder-facing)   structured-but-conversational   client-facing,     the draft Job
                                               intake to articulate fractional decision-shaping   Order before
                                               executive needs and produce a                      matching kicks
                                               draft Job Order. Output flows                      off. Founder
                                               to HubSpot and Supabase.                           approves the
                                                                                                  validated Job
                                                                                                  Order. Client
                                                                                                  Activation Gate
                                                                                                  (Section 5.7)
                                                                                                  is the final
                                                                                                  gate before
                                                                                                  matching.

  Diagnostic-to-Job-Order   Internal (Chris)   Takes Chris\'s diagnostic call  Moderate ---       Chris reviews
  Translator                                   notes and Fathom transcripts    drafting, not      and refines
                                               and drafts a structured Job     deciding           before founder
                                               Order per FS-DOC-044 schema.                       validation.

  Profile Generation Agent  Internal (Kevin)   Produces the client-facing      High --- produces  Kevin reviews
                                               operator profile from internal  consequential      and approves
                                               operator data, simulation       client-facing      before send.
                                               observations, and reference     artifact           Multiple draft
                                               notes (FS-DOC-022 template).                       versions
                                               Supports manual re-generation,                     supported. See
                                               override, and section-level                        Section 6.
                                               editing.                                           

  Match-on-Demand Agent     Internal (Kevin)   On request: ad-hoc semantic     High --- generates Kevin confirms
                                               search across operator pool;    consequential      each shortlist
                                               re-match for an existing Job    matching outputs   before client
                                               Order; refreshed shortlists                        delivery. See
                                               when Job Order or operator                         Section 7.
                                               availability changes.                              

  Submission Package        Internal (Kevin)   Assembles client-facing         Moderate ---       Kevin reviews
  Generator                                    candidate submission email with assembly of        assembled
                                               formatted profiles, write-ups,  approved           package before
                                               and professional email content. components         send. Component
                                                                                                  artifacts
                                                                                                  already passed
                                                                                                  their own HIL
                                                                                                  gates.

  Onboarding Tracking Agent Internal (Kevin)   Tracks where each operator is   Low --- workflow   Surfaces tasks;
                                               in the                          tracking, not      Kevin acts. No
                                               intake/screening/assessment     decision-making    autonomous
                                               pipeline. Surfaces stalls,                         communication
                                               prompts next-step actions.                         with operators.

  Reference and             Internal (Kevin)   Reaches out for references,     Moderate ---       Outreach drafts
  Background-Check                             schedules calls, summarizes     coordination +     approved by
  Coordinator                                  reference responses for         summarization      Kevin.
                                               inclusion in operator records.                     Reference
                                                                                                  summaries
                                                                                                  reviewed before
                                                                                                  added to
                                                                                                  operator
                                                                                                  records.

  Engagement Health Monitor Internal (Kevin    Tracks pulse-check responses    Moderate ---       Kevin or Chris
                            and Chris)         across active engagements (per  drafts, monitors,  approves all
                                               FS-DOC-040 cadence), flags      recommends         check-in
                                               engagements at risk, drafts                        messages before
                                               check-in messages.                                 send.

  Engagement Debrief Agent  Internal (Kevin)   At engagement end: produces     Moderate ---       Kevin reviews
                                               operator scorecard, client NPS  evaluative         before
                                               analysis, learnings summary fed summarization      scorecards
                                               back to matching system.                           added to
                                                                                                  operator
                                                                                                  records or
                                                                                                  learnings
                                                                                                  propagated.

  Compliance Trigger        Internal (Kevin)   Tracks regulatory thresholds    Low --- monitors   Does not change
  Monitor                                      against firm metrics;           metrics and public framework or
                                               summarizes regulatory feeds;    information        operations
                                               produces weekly digest.                            without
                                                                                                  Kevin\'s
                                                                                                  review.
  ---------------------------------------------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **AGENT INVENTORY DESIGN PRINCIPLES**                                 |
|                                                                       |
| Each agent has a single primary surface (the user it\'s for) and      |
| clear responsibility boundaries. Agents may call each other (the      |
| Personal Assistant agent orchestrates many of the others), but each   |
| agent\'s HIL gate sits at its own decision point.                     |
|                                                                       |
| Detailed agent specifications --- prompt templates, data flows,       |
| integration points, infrastructure choices --- live in the Master     |
| System Specification V2 (FS-DOC-002). The framework\'s job is to      |
| govern; the MSS\'s job is to specify. The framework names what        |
| exists; the MSS describes how it works.                               |
+=======================================================================+
+-----------------------------------------------------------------------+

## 3.3 Tool and Agent Adoption Procedure

Before any new AI tool or agent is adopted:

-   Kevin identifies the tool or agent and the intended use case.

-   Vendor due diligence (third-party tools) or agent design
    specification (internal agents): bias documentation where available,
    model card, written statement on protected-class proxies including
    ZIP code, intended use cases.

-   Tool category and risk classification assigned using rubric in
    Section 3.5.

-   Disclosure requirement determined.

-   Four design criteria (Section 3.4) satisfied for new agents.

-   Shadow AI Policy updated if approved-tool list changes.

-   Inventory updated and Version Log entry recorded.

-   For high-risk tools or agents: Chris notified and counsel consulted
    before adoption.

-   Cascading documentation updates per Section 1.5.

## 3.4 Four Design Criteria for New Agents

Every new agent must be designed against four criteria simultaneously.
Adding an agent without satisfying all four creates technical debt,
operational drag, and compliance risk. The agent design check is part of
Section 3.3 adoption procedure.

  -----------------------------------------------------------------------
  **Design        **What it requires**
  criterion**     
  --------------- -------------------------------------------------------
  1\. Business    The agent serves a specific, named business outcome.
  objective       Success is measurable. The agent\'s existence is
  clarity         justified by demonstrable value to the operator
                  experience, client experience, Kevin or Chris\'s
                  productivity, or compliance posture. Vanity agents are
                  not built.

  2\. End-to-end  The agent\'s interactions with upstream agents,
  workflow        downstream agents, humans, and systems are explicitly
  integration     designed. Data flows are clean. The agent does not
                  introduce orphan data, broken handoffs, or duplicate
                  work. The agent fits into the broader operating system,
                  not next to it.

  3\. UX quality  Every human interaction with the agent or its outputs
                  (operators, clients, Kevin, Chris) meets a world-class
                  bar. Surfaces are clean, outputs are useful, prompts
                  and confirmations are well-designed. UX quality is not
                  \'something to fix later.\'

  4\. Data        The agent produces structured, audit-ready data useful
  quality and     to future systems (matching engine, bias audit, agent
  governance      improvement). Audit trail is automatic per Principle 5.
                  Data minimization per Principle 3. Retention per
                  Section 9. Data outputs are first-class artifacts, not
                  byproducts.
  -----------------------------------------------------------------------

## 3.5 Risk Classification Rubric

  -----------------------------------------------------------------------
  **Risk      **Definition**          **Governance requirements**
  level**                             
  ----------- ----------------------- -----------------------------------
  High        Tool or agent output    Full governance: disclosure
              supports or influences  required, HIL mandatory, audit
              consequential decisions trail logged automatically, vendor
              about operators,        or agent DD at adoption, quarterly
              candidates, or clients  review, four design criteria
              (verification,          satisfied.
              matching, adverse       
              action, placement, Job  
              Order shaping).         

  Moderate    Tool or agent processes Standard governance: inventory
              personal data but       entry, vendor or agent DD,
              output is informational disclosure where personal data
              or operationally        involved, audit trail for
              supportive (sourcing    tool-output-to-human-decision
              ranking, meeting        linkage.
              transcription, CRM      
              enrichment, drafting,   
              summarization).         

  Low         Tool or agent performs  Basic governance: inventory entry,
              mechanical operations   privacy-policy coverage, review on
              (scheduling, plumbing,  enablement of any new AI features.
              automated               
              notifications,          
              monitoring) with no     
              decision influence on   
              people.                 
  -----------------------------------------------------------------------

## 3.6 Tool and Agent Decommissioning

When a tool or agent is removed from the stack, the inventory is updated
with a decommissioning date and the reason. AI-assisted decision records
produced by it remain subject to the four-year retention standard
(Section 9), even after the tool itself is decommissioned.

# 4. Shadow AI Policy

Shadow AI is the use of AI tools that are not on the approved-tool list,
or the use of approved tools in ways that are not sanctioned by this
framework. Shadow AI is the single largest operational compliance risk
for AI-using firms --- not because the tools themselves are unsafe, but
because shadow use bypasses disclosure, audit trail, and HIL
requirements. A carefully governed primary stack means little if team
members paste operator resumes into consumer AI tools on busy days.

## 4.1 Approved-Tool List

AI tools may be used for Fractional Standard business only if they
appear on the AI Tool Inventory (Section 3.1) in \'adopted\' status, or
in the Agent Architecture (Section 3.2) as deployed agents. Tools or
agents in \'evaluation\' or \'proposed\' status are not approved for
production use.

## 4.2 Prohibited Uses --- Detail

Each prohibition is intentional. Below: what each one means, what it
forbids, and why it exists.

### Prohibition 1 --- No operator PII in consumer AI interfaces

What it forbids: pasting operator-identifying information --- names,
email addresses, phone numbers, resumes, simulation transcripts,
reference notes, performance feedback --- into any consumer AI interface
(free-tier ChatGPT, Gemini, Microsoft Copilot, Perplexity, claude.ai web
interface, etc.).

What it permits: using these tools through the approved-in-inventory
workflow. Today that means using Claude through the API (with full audit
logging), not the claude.ai web interface, for evaluation work.

Why it exists: consumer interfaces don\'t produce audit trails, don\'t
enforce data retention, may train future models on the input, and bypass
the disclosure architecture. PII processed there is invisible to
governance.

### Prohibition 2 --- No client confidential information in consumer AI interfaces

What it forbids: pasting client diagnostic intake data, strategic plans,
financials, engagement-specific information, or any client confidential
material into consumer AI interfaces.

Why it exists: client confidentiality is a contractual obligation under
MSA (FS-DOC-049). Consumer AI interfaces don\'t satisfy \'confidential\'
handling.

### Prohibition 3 --- No consumer AI tools for evaluation, scoring, ranking, or classification of operators or candidates

What it forbids: using a consumer AI interface to evaluate, score, rank,
or classify any operator or candidate, even without pasting full PII.
Asking claude.ai \'is a CFO with 8 years at PE-backed companies a good
fit for a Series A founder?\' bypasses audit trail and HIL discipline
even though no specific operator is named.

What it permits: general-knowledge questions (\'what is fractional
executive market rate in 2026?\'). The test is whether the question
evaluates a person.

Why it exists: regulatory machinery cares about consequential decisions.
Decisions about people require disclosure, HIL, and audit trail ---
regardless of which tool produced them.

### Prohibition 4 --- No bypassing the disclosure architecture

What it forbids: using AI tools (approved or not) in ways that produce
outputs influencing consequential decisions, without the corresponding
disclosure under Section 5.

Why it exists: disclosure is a regulatory obligation that attaches to
the decision, not the tool. Choosing a different tool doesn\'t escape
the obligation.

### Prohibition 5 --- No bypassing audit trail discipline

What it forbids: any consequential AI-assisted decision that does not
produce an audit record.

Why it exists: same logic as Prohibition 4. The audit trail follows the
decision.

### Prohibition 6 --- No tool adoption without due diligence

What it forbids: putting any new AI tool or agent into production use
without completing the Section 3.3 adoption procedure.

Why it exists: the inventory is the firm\'s single source of truth on
what AI is deployed. An ungoverned tool is a hidden compliance and
quality risk.

## 4.3 Permitted Uses of Consumer AI Interfaces

Kevin may use claude.ai and other consumer AI interfaces for
general-purpose work that does not involve operator or client PII or
evaluative decisions about people --- drafting non-operator-specific
content, brainstorming frameworks, learning new topics, writing internal
memos, summarizing public documents. Test: if the content identifies a
specific operator, candidate, or client, OR if the work evaluates a
person, the use moves to the approved production workflow.

## 4.4 Reporting and Enforcement

Shadow AI incidents are logged in the Supabase incidents table with a
short description, the affected PII if any, and remediation taken.
Reviewed at each quarterly Governance Review (Section 14).

For incidents involving operator or client PII: affected parties
notified within 72 hours if the incident created a material privacy
risk. For aggregated or non-PII incidents: internal logging only.

Enforcement: no team member is disciplined for first-time accidental
violation if promptly reported and remediated. Repeated or deliberate
violation is grounds for termination.

## 4.5 Training

Every Fractional Standard team member acknowledges this Shadow AI Policy
at onboarding. Acknowledgment recorded in onboarding checklist. Annual
refresher training conducted at the same cadence as the annual framework
review (Section 14).

# 5. Disclosure Architecture (including Client Activation Gate)

Disclosure is not a single notice; it is a coordinated architecture of
touchpoints that together satisfy the transparency requirements of every
applicable regulation. The architecture is designed so that (a) every
operator and client encounters the disclosure at least once before any
AI-assisted decision is made about them, and (b) the firm\'s standing
website notice satisfies the 10-business-day requirement of NYC Local
Law 144 on its own.

## 5.1 Standing Website Notice

A plain-language AI Disclosure Notice is published on the operators page
of the Fractional Standard website. The notice contents satisfy the
substantive requirements of NYC Law 144, Illinois HB 3773, and Colorado
CAIA pre-decision notice.

Required contents:

-   Categories of AI tools and agents used across sourcing, assessment,
    matching, document workflows, and engagement operations.

-   Job qualifications and characteristics assessed by the AI system.

-   Data types collected about the operator.

-   Retention period (4 years minimum, per Section 9).

-   Operator\'s right to request alternative selection process.

-   Operator\'s right to explanation and appeal (CAIA requirement).

-   Date the notice was first posted (starts the Law 144 clock).

-   Link to Data Retention Policy.

-   Link to bias audit summary when one is available (Section 12).

Exact language: Appendix C.1.

## 5.2 Direct Outreach Disclosure (light-touch)

Every outreach to a prospective operator includes a brief,
end-of-message disclosure that links to the standing notice.
Intentionally light-touch: satisfies the conservative interpretation of
Law 144\'s 10-business-day clock per-candidate without leading the
message with AI framing or competing with the value proposition.
Operators who care click through; operators who don\'t won\'t be
deterred by a heavy disclosure paragraph.

Language: Appendix C.2. Templates maintained for LinkedIn
(character-constrained), email (full), and referral-flow introductions.

## 5.3 Pre-Assessment Disclosure

Before any simulation begins, the operator receives and acknowledges the
Pre-Assessment AI Disclosure. Acknowledgment timestamped and stored in
the live ATS (FS-DOC-020) field ai_disclosure_acknowledged_at.

The disclosure names the specific AI tool (Claude, developed by
Anthropic), describes what is evaluated and what is not, explains the
human review gate, clarifies operator rights (explanation, appeal,
re-assessment per Section 10), and notes data retention. Language:
Appendix C.3.

## 5.4 Sourcing-Tool Disclosure

AI-assisted sourcing is disclosed through the Standing Website Notice
(which names \'sourcing\' among the categories) and through the Direct
Outreach Disclosure. Sourcing is information discovery and does not
require per-search logging or per-decision documentation.

When a sourcing tool is added to the inventory, the Standing Website
Notice is updated with the addition logged in the Version Log.
Category-level disclosure is sufficient --- no need to name specific
tools by brand.

## 5.5 Client Portal Entry Disclosure

First-time founder visit to the Fractional Standard client portal
triggers the Client Portal Entry Disclosure. Brief plain-language
description of AI involvement in the Job Order articulation, matching,
and assessment processes. Founder acknowledges before proceeding into
the portal experience.

Language: Appendix C.6. Stored in field client_portal_disclosure_at.

## 5.6 Job Order Validation Gate

When a Job Order is generated by the Client Self-Service Job Order
Articulation Agent or by the Diagnostic-to-Job-Order Translator, Chris
validates it before matching kicks off. Validation includes verifying
that:

-   The role description accurately reflects the founder\'s needs (a
    check on agent interpretation quality).

-   The role\'s compensation tier and operator allocation match what was discussed.

-   Stage and industry context are correctly captured.

-   Jurisdictional fields are completed (operator residency state will
    be determined later; client operations jurisdiction is captured
    here).

-   Any client-side AEDT issues are flagged.

Founder also approves the validated Job Order. Two HIL gates --- Chris
and founder --- bracket the agent-generated artifact.

Job Order data conforms to the schema in FS-DOC-044 and flows into the
live ATS (FS-DOC-020) Job Orders tab.

## 5.7 Client Activation Gate — MSA + Payment Authorization (No Activation Fee)

Before any matching cycle begins, the client must complete the Client Activation Gate. This is the legal, financial, and compliance kickoff for an engagement and the precondition for the Initial Match trigger in Section 7.1.

| **CLIENT ACTIVATION GATE — REQUIRED ACTIONS (May 2026)** |
| --- |
| Three things happen at the gate, in order: 1. **MSA acceptance** — founder reviews and accepts the Master Services Agreement (FS-DOC-049), including Section 18 AI disclosure and Vendor-to-Client Liability Allocation. Executed via DocuSign. 2. **Stripe payment authorization captured** — founder authorizes a payment method on file via Stripe. **No charge is captured at the gate.** The payment method is held against the first monthly retainer, which is billed on the Engagement Start Date per MSA §5.2 (monthly in advance, net-14). 3. **Webhook confirmation** — DocuSign + Stripe webhooks log the executed-MSA event and the on-file payment-method event in Supabase, which together authorize the Initial Match trigger to fire. All three must complete. A draft Job Order without MSA execution and payment authorization does not trigger matching. Chris cannot manually bypass the gate; the system enforces it. |

| **WHAT CHANGED IN MAY 2026 — ACTIVATION FEE RETIRED** |
| --- |
| Earlier versions of this framework (v2.1 and prior) included a $1,000 activation fee at the gate, with credit-toward-Month-1 mechanics defined in Pricing Model V6. As of May 2026, the activation fee is **retired**. The compliance and commitment functions of the gate are preserved by (a) MSA execution as the legal commitment event, and (b) Stripe payment authorization on file as the operational commitment event. The audit-trail bookending function described in v2.1 is unchanged — the gate still creates a clean event that authorizes downstream AI-assisted decisions to begin. The financial mechanics that were formerly governed here now live in Pricing Model V7 (FS-DOC-042) and MSA v1.1 §5.2 (FS-DOC-049). The framework no longer owns fee amounts or billing mechanics; it owns the gate-as-compliance-event only. |

### Workflow position

The Client Activation Gate sits between Job Order validation (Section 5.6) and Initial Match (Section 7.1):

- 1. Founder accesses portal.
- 2. Client Portal Entry Disclosure acknowledged (Section 5.5).
- 3. Self-Service Job Order Articulation Agent walks founder through intake.
- 4. Founder reviews and approves draft Job Order.
- 5. Chris validates Job Order (Section 5.6).
- 6. **CLIENT ACTIVATION GATE** — MSA executed via DocuSign + Stripe payment authorization captured.
- 7. DocuSign + Stripe webhook confirmation logged in Supabase.
- 8. Initial Match cycle kicks off (Section 7.1).

### Why the gate matters for compliance

The gate creates a clean audit-trail event that bookends the agent-assisted intake with formal client commitment. MSA execution triggers the disclosure architecture obligations on the client side and contractually binds the Vendor-to-Client Liability Allocation (§6.5) governing how AEDT obligations are allocated when FS places operators into client decisions; Stripe payment authorization captured creates the Supabase event that authorizes downstream AI-assisted decisions to begin. Without this gate, AI-assisted matching could fire on partially formed intent, creating both compliance ambiguity and operational risk.

### Why the gate still matters for the business

MSA execution is the formal commitment that distinguishes a serious client from a tire-kicker. The Stripe payment authorization is the operational commitment that the client will be billed when the Engagement Start Date arrives. Per Master Business Plan V7.1 (FS-DOC-001), Pricing Model V7 (FS-DOC-042), and Operations Playbook V8 (FS-DOC-040), this is the May 2026 standard kickoff structure. Clients who decline either the MSA or the payment authorization are not activated; this is the same tire-kicker filter the activation fee formerly provided, now achieved through commitment events rather than a fee.

### Records captured at the gate

- MSA execution timestamp (`msa_executed_at`).
- MSA version executed (`msa_version_id`).
- Stripe payment-method ID on file (`stripe_payment_method_id`).
- Stripe SetupIntent ID for the authorization (`stripe_setup_intent_id`).
- Founder's user ID and Job Order ID linked to the activation event.
- DocuSign envelope ID (`docusign_envelope_id`).
- Webhook receipt timestamp (`gate_completed_at`).
- (Retired but retained for legacy records: `activation_fee_amount`, `stripe_payment_intent`, `activation_fee_currency` — set to `null` for all May 2026+ engagements; documented here for audit continuity for any pre-May-2026 records that may still exist.)

## 5.8 FTC Training-Referral Disclosure

Where Fractional Standard recommends training partners in exchange for
affiliate or referral revenue, an FTC-compliant disclosure appears at
the point of recommendation. The disclosure satisfies 16 CFR Part 255
(Endorsement Guidelines, revised 2023) and overlapping state consumer
protection requirements.

+-----------------------------------------------------------------------+
| **STANDARD TRAINING-REFERRAL DISCLOSURE LANGUAGE**                    |
|                                                                       |
| \"Fractional Standard has referral partnerships with some of the      |
| training providers listed above. If you sign up through these links,  |
| we may earn a commission at no additional cost to you. Our            |
| recommendations are based on operator-development fit, not commission |
| structure.\"                                                          |
|                                                                       |
| Placement: at the point of recommendation --- inside operator         |
| development reports adjacent to resource listings, on website pages   |
| that recommend resources, in operator-facing emails that include      |
| partner recommendations.                                              |
+=======================================================================+
+-----------------------------------------------------------------------+

Operational rule: no partner training resource is recommended without a
credible operator-development rationale. The disclosure protects
Fractional Standard legally; the rationale protects the trust
relationship with operators.

## 5.9 Agentic Tool Disclosure

Any agent that interacts directly with an operator or client discloses,
at the start of the interaction, that the interaction involves an AI
system. Satisfies Colorado CAIA\'s chatbot-disclosure requirement and
exceeds current NYC and Illinois requirements. The Client Self-Service
Job Order Articulation Agent surface includes this disclosure as part of
its onboarding screen. Future operator-facing agents follow the same
pattern.

## 5.10 Alternative Selection Process

Law 144 requires operators be offered the option to request an
alternative selection process. Fractional Standard\'s response: the
option is available on request and is honored where reasonable. For a
small firm with a single core assessment process designed to be fair and
structured, declining requests for fundamentally different selection
processes is reasonable. The framework requires that such declines are
documented and that the operator is told the basis for the decline.
Operators who decline the AI-assisted process altogether may withdraw
without prejudice and re-apply through any future alternative pathway
Fractional Standard may offer.

## 5.11 Disclosure Acknowledgment Capture

  -------------------------------------------------------------------------------
  **Disclosure            **Capture mechanism**   **Supabase field**
  touchpoint**                                    
  ----------------------- ----------------------- -------------------------------
  Standing website notice Not captured            ai_disclosure_posted_date
  (passive)               per-operator. Public    (firmwide)
                          posting date logged     
                          firmwide.               

  Direct outreach         Email send logs or      first_outreach_date with
  disclosure              LinkedIn message logs.  disclosure flag

  Pre-assessment          Operator\'s explicit    ai_disclosure_acknowledged_at
  disclosure              acknowledgment via form 
                          or email reply before   
                          simulation.             

  Client portal entry     Founder\'s explicit     client_portal_disclosure_at
  disclosure              acknowledgment at       
                          portal entry.           

  Job Order validation    Founder\'s approval of  job_order_approved_at
  acknowledgment          validated Job Order.    

  Client Activation Gate  MSA acceptance event +  msa_accepted_at,
  (MSA + payment)         Stripe webhook payment  stripe_payment_intent,
                          confirmation.           gate_completed_at

  Client diagnostic       Chris notes in call     client_ai_disclosure_date
  disclosure (when path   summary; client         
  used)                   acknowledgment in MSA   
                          execution.              

  Training-referral       Static placement in     development_report_sent_date
  disclosure              resource-listing        
                          materials.              
  -------------------------------------------------------------------------------

# 6. AI-Assisted Document Workflows

Many of Kevin\'s daily tasks involve processing documents --- operator
resumes, simulation transcripts, reference notes, client diagnostic
intake, engagement artifacts, internal documents. AI assists every step,
and the framework explicitly enables this work rather than constraining
it. This section describes what is permitted, how it is governed, and
where the lines sit.

## 6.1 Permitted Document Workflows

Within the approved tool inventory, Kevin (and any future authorized
team member) may use AI to:

-   Parse and extract structured information from operator resumes (work
    history, skills, certifications, role/stage exposure) into the live
    ATS (FS-DOC-020) operator record.

-   Summarize long documents (reference call transcripts, simulation
    transcripts, client diagnostic intake, engagement artifacts) for
    faster review.

-   Ask questions of document content --- natural-language Q&A across
    operator records, engagement files, internal documentation.

-   Generate the client-facing operator profile (FS-DOC-022 template)
    from internal data, with multiple draft versions supported.

-   Manually re-generate or override the system-generated profile if the
    first version doesn\'t meet the bar. Multiple iterations supported.

-   Edit AI-drafted content section by section, prompt for revisions, or
    rewrite manually.

-   Draft submission emails, founder communications, follow-ups,
    internal memos.

-   Cross-reference internal documents to answer ad-hoc questions.

-   Generate ad-hoc reports from internal data.

## 6.2 How Document Workflows Are Governed

### Rule 1 --- Internal use vs. client-facing output

Internal use of AI to process documents (extracting resume info into
operator records, summarizing transcripts for review, querying internal
documents) is permitted with light governance --- the work happens in
the approved workflow, audit trail is automatic, no additional steps
required.

Output that goes to a client (the operator profile sent in a submission
package, a founder communication) requires Kevin\'s review and approval
before send (Principle 1).

### Rule 2 --- Multiple draft versions supported

The system is designed to support iteration. The Profile Generation
Agent (Section 3.2) produces a default profile; Kevin can re-generate
with different prompts (\'lead with the SaaS experience,\' \'make this
more concise\'), edit sections manually, or rewrite from scratch. Each
generation is captured in the audit trail. The version Kevin chooses to
send is marked as the final version.

### Rule 3 --- Client confidential data stays in scope

When AI processes client-shared artifacts (financials, strategic plans,
diagnostic intake), the work happens within the engagement-scoped
context. Data does not leak across engagements. Data is not used to
train any system or merged into aggregate matching data (Principle 3).

## 6.3 What Is Not Permitted

Limits, derived from the Shadow AI Policy:

-   Pasting any of the above content into consumer AI interfaces.
    Document workflows happen in the approved workflow, not the consumer
    interface.

-   Using AI to generate a profile, summary, or other client-facing
    artifact and sending without human review.

-   Bulk processing of operator records using non-approved tools.

## 6.4 Audit Trail for Document Workflows

Per Principle 5, audit trail is automatic. For document workflows
specifically:

-   Every AI invocation logs prompt, response, timestamp.

-   Every regeneration of a client-facing artifact captures the
    iteration history.

-   Final version sent to client is flagged in the audit trail.

-   Manual edits to AI-generated content are captured as modifications
    to the original draft.

Kevin does not manually log document workflow activities. The Retool
admin UI and the Supabase-backed pipeline handle logging automatically.

# 7. Matching Lifecycle and Records

Matching is not a single event --- a Job Order may trigger many match
cycles over its lifetime, and Kevin may run ad-hoc searches independent
of any specific Job Order. This section describes the lifecycle and the
records captured. Operational execution lives in the Matching Workflow
(FS-DOC-013) and Matching Workflow Gap Playbook (FS-DOC-046).

## 7.1 Match Cycle Triggers

A match cycle is triggered by any of the following:

  ------------------------------------------------------------------------
  **Trigger**         **What happens**           **Records captured**
  ------------------- -------------------------- -------------------------
  Initial match       When the Client Activation Job Order ID, Stripe
  (automatic, after   Gate (Section 5.7)         setup intent ID,
  Client Activation   completes --- MSA          payment-method-on-file,
  Gate)               executed, payment          candidate retrieval
                      authorization on file,     results, ranking
                      DocuSign + Stripe          rationale, generation
                      webhooks confirmed         timestamp.
                      --- the system             
                      automatically generates a  
                      candidate shortlist.       
                      Activation Gate completion 
                      is the precondition;       
                      matching does not fire on  
                      Job Order approval alone.  

  Re-match on         Kevin asks for a refreshed Re-match request, prior
  Kevin\'s request    list. Match-on-Demand      shortlist comparison, new
                      Agent produces a new       shortlist, Kevin\'s
                      shortlist.                 stated reason.

  Re-match on Job     Founder updates the Job    Job Order change details,
  Order change        Order. System surfaces     prior shortlist, new
                      re-match recommendation;   shortlist, change-driven
                      Kevin confirms.            rationale.

  Re-match on         Top candidate becomes      Availability change
  operator            unavailable. System flags  event, affected
  availability change the shortlist for refresh. shortlist, replacement or
                                                 alternative shortlist.

  Re-match on failed  Client passes on the       Client feedback, prior
  first shortlist     initial shortlist. Kevin   shortlist, new shortlist,
                      runs the re-match cycle    refined matching
                      informed by client         criteria.
                      feedback. See Matching     
                      Workflow Gap Playbook      
                      (FS-DOC-046) Scenario 5.   

  Ad-hoc search       Kevin asks the Personal    Search query, result set,
  (Kevin-initiated)   Assistant agent for a      Kevin\'s purpose, any
                      natural-language search    subsequent action taken.
                      across the operator pool   
                      --- not tied to any        
                      specific Job Order.        
  ------------------------------------------------------------------------

## 7.2 Records Captured Automatically

Every match cycle produces a record in Supabase, captured automatically
as part of the match workflow --- Kevin does not manually log match
activities. Per Principle 5 and Section 6.4, audit trail is a byproduct
of normal workflow.

Records include:

-   Match cycle ID, timestamp, triggering event.

-   Job Order context (if applicable).

-   Candidate retrieval results --- operator IDs and ranking scores from
    semantic search.

-   Match rationale --- why each candidate appeared in the shortlist.

-   Kevin\'s confirmation, including any operators added to or removed
    from the shortlist.

-   Override reasoning if Kevin\'s confirmed shortlist deviates
    materially from the AI-generated one (one sentence minimum, optional
    but recommended).

-   Client outcome --- selected operator, declined operators, reasons if
    known.

-   Engagement that followed (if any), for closing the loop on match
    quality.

## 7.3 Why This Matters

Compliance: Colorado CAIA\'s reasonable-care defense and California
ADMT\'s appeal pathway both depend on being able to reconstruct the
decision chain that produced an outcome. Match cycle records are the
evidence.

Strategic: Fractional Standard\'s matching intelligence improves through
the accumulated record of match rationales, overrides, and outcomes. Per
Master Business Plan V7.1 (FS-DOC-001) Section 9 architectural
commitment (RAG + rules + prompts, no ML training), this record is the
source material for prompt refinement, scoring weight tuning, and
structured rule improvement.

# 8. Cross-State Operating Rules Matrix

Fractional Standard operates under the strictest-state baseline:
Colorado CAIA + NYC Local Law 144 + Illinois HB 3773 + FTC endorsement
guidelines. California rules attach at specific size thresholds (Section
14).

## 8.1 Base Rules (Apply Firmwide, Every Placement)

-   Standing website AI Disclosure Notice live.

-   Direct outreach disclosure in every outreach message.

-   Pre-assessment disclosure acknowledged before simulation.

-   Client Activation Gate completed before any matching cycle (Section
    5.7).

-   Human-in-the-Loop on every consequential decision.

-   Development report (not scores or labels) delivered to every
    assessed operator.

-   Audit trail captured automatically for every AI-assisted decision.

-   Four-year minimum data retention.

-   ZIP code never used as a ranking or filtering factor.

## 8.2 Jurisdictional Overlays

  -------------------------------------------------------------------------------
  **Jurisdiction**   **Trigger condition**            **Additional steps**
  ------------------ -------------------------------- ---------------------------
  New York City      Placing an operator into a       Verify standing website
                     NYC-based client role, OR        notice posted 10+ business
                     assessing an NYC-resident        days before assessment.
                     operator                         Pipeline schedules
                                                      simulation 11+ business
                                                      days after first contact.
                                                      Alternative selection
                                                      process link available on
                                                      operators page. On request,
                                                      provide data
                                                      source/type/retention
                                                      information within 30 days.
                                                      Bias audit summary
                                                      published annually once
                                                      100-assessment threshold
                                                      reached.

  Colorado           Any CO-resident operator         Pre-decision notice before
                     assessed, OR CO-based client     verification decision or
                     engaged                          adverse action (Appendix
                                                      C.4). Adverse-action
                                                      explanation available on
                                                      request (Section 10).
                                                      Appeal pathway documented.
                                                      AG notification framework
                                                      ready (90-day SLA). Impact
                                                      assessment on file (Section
                                                      11).

  Illinois           Any IL-resident operator         Explicit IL notice in
                     assessed, OR client with IL      direct outreach and
                     operations placing operator      pre-assessment disclosure.
                                                      Confirm no ZIP-code proxy
                                                      use in sourcing or
                                                      matching. Handle any
                                                      IL-operator appeal per
                                                      Section 10.

  California         Currently: any CA-resident       Firmwide baseline applies.
  (pre-threshold)    operator or CA-based client. No  Calendar-driven review when
                     CCPA or FEHA obligations while   FS approaches 5 W-2
                     FS is below thresholds.          employees or \$26.6M
                                                      revenue. Monitor IC
                                                      classification risk under
                                                      AB5 ABC test.

  California         5+ W-2 employees (FEHA) or       FEHA: documented human
  (post-threshold,   \$26.6M revenue (CCPA ADMT)      oversight for every
  future)                                             automated decision, bias
                                                      testing, 4-year record
                                                      retention (already in
                                                      place). CCPA ADMT: pre-use
                                                      notice, opt-out rights,
                                                      access to ADMT logic,
                                                      appeal pathway, formal risk
                                                      assessments. Full trigger
                                                      actions in Section 14.

  Texas              TX-resident operator or TX-based Firmwide baseline. TRAIGA
                     client                           prohibits intentional
                                                      AI-based discrimination
                                                      only; no disparate-impact
                                                      liability.

  Other states       All other US jurisdictions       Firmwide baseline. Monitor
                                                      for state-specific
                                                      enactments (Washington,
                                                      Massachusetts, New Jersey,
                                                      Virginia, others have
                                                      proposals).
  -------------------------------------------------------------------------------

## 8.3 Where These Rules Live in Workflow

-   Job Order Intake Form (FS-DOC-044) captures client-operations
    jurisdictions.

-   Operator onboarding captures operator residency state.

-   Retool admin UI displays applicable jurisdictional overlays at each
    placement.

-   Daily Cheat Sheet (FS-DOC-050) surfaces a per-day summary of any
    overlay obligations.

-   Quarterly Governance Review verifies overlay adherence through
    sample review.

## 8.4 International Operators or Clients

Fractional Standard does not currently place operators based outside the
United States and does not accept clients headquartered outside the
United States. International expansion triggers a framework amendment to
incorporate EU AI Act, GDPR, and any applicable national frameworks. See
Section 14.


## 8.5 Vendor-to-Client Liability Architecture (May 2026)

When Fractional Standard places an operator into a client engagement, the client may itself be subject to AEDT obligations — e.g., a NYC-based client using automated tools to decide which Fractional Standard operator to engage falls under Local Law 144 regardless of Fractional Standard’s position. Fractional Standard becomes a vendor in that decision chain. Two structural protections.

### 8.5.1 MSA Section 18 (Client-Side AEDT Vendor Allocation)

The Master Services Agreement v1.1 includes a vendor-liability allocation clause (MSA §18). The clause:

- Confirms that Fractional Standard does not make hiring decisions on behalf of the client.
- Provides that the client is solely responsible for any AEDT compliance obligations the client itself triggers (Local Law 144, similar laws).
- Provides that Fractional Standard’s outputs (operator profiles, recommendations) are advisory inputs to the client’s own decision process, not employment decisions made by Fractional Standard.

This clause aligns with the “vendor exception” pattern in NYC LL144 enforcement guidance and the analogous patterns in CO CAIA and CA FEHA ADS. Counsel review of MSA §18 is part of the Pre-Launch Legal Review scope (§15).

### 8.5.2 Independent Decision Documentation

When a client interviews and selects from a 2–3 operator shortlist, the client makes the final selection independently. Fractional Standard preserves this in two ways: (a) presenting at least 2 operators per engagement (single-candidate placements are flagged for review and require explicit client written acknowledgment), and (b) the MSA confirms that Fractional Standard’s role is curatorial, not decisional.

### 8.5.3 Non-Endorsement of AEDT Status

Fractional Standard does not represent that its assessment is an “automated employment decision” within the meaning of any AEDT statute. The position Fractional Standard takes is that Pool Admission Decisions are independent-contractor admission decisions to Fractional Standard’s pool, not employment decisions of any client. **This position is a fallback argument, not the operating premise of this framework.** Per the design principle of v2.0/v2.2 (architecture-first compliance), this framework is built as if AI-in-hiring laws apply, regardless of the IC vs. employee distinction or the AEDT vs. non-AEDT classification.

# 9. Data Retention Standard

Fractional Standard retains AI-assisted decision records for a minimum
of four years. Satisfies California FEHA ADS (when triggered), Colorado
CAIA reasonable-care evidence, NYC Law 144 record-keeping best practice,
and provides the data foundation for matching improvement and bias audit
capability.

## 9.1 What Counts as an AI-Assisted Decision Record

-   Operator assessment records --- simulation transcript, AI
    dimensional scores, Kevin\'s verification decision, override
    reasoning, development report delivered.

-   Matching records --- candidate retrieval results, ranking rationale,
    Kevin\'s shortlist selections, override reasoning, client selection
    outcome.

-   Adverse action records --- any non-verification, removal from pool,
    rejection from shortlist, with rationale.

-   Client profile generation records --- AI-drafted content, Kevin\'s
    edits and approval.

-   Sourcing interaction logs --- tool used, date range, general
    parameters, general-scale metrics.

-   Disclosure acknowledgments --- operator and client acknowledgment
    records with timestamps.

-   Client Activation Gate records --- MSA acceptance and Stripe payment
    confirmation.

-   Per-engagement decision records --- per Section 13.

-   Incident logs --- shadow AI incidents, regulator inquiries, appeals
    received.

## 9.2 Storage Architecture

Supabase is the single source of truth for retained records. Retention
tables are append-only; modifications to records are captured as change
events rather than overwriting original records. Supabase backups follow
the provider\'s standard retention, supplemented by nightly exports to
encrypted storage for long-horizon archiving.

## 9.3 Retention Period

  -----------------------------------------------------------------------
  **Record type**           **Minimum            **Basis**
                            retention**          
  ------------------------- -------------------- ------------------------
  Operator assessment       4 years from         California FEHA ADS;
  records                   assessment date      matching improvement;
                                                 bias audit

  Matching and placement    4 years from         CAIA reasonable-care
  records                   placement end        evidence; matching
                                                 improvement

  Adverse action records    4 years from action  EEOC best practice;
                            date                 appeal responsiveness

  Disclosure                Life of              Law 144 record-keeping;
  acknowledgments           operator/client      evidence of compliance
                            relationship + 4     
                            years                

  Client Activation Gate    7 years (financial)  Tax and contract law;
  records (MSA + payment)                        commercial recordkeeping

  Incident logs             7 years              Longer horizon for
                                                 regulator inquiry window

  Financial and engagement  7 years              Tax and contract law
  contract records                               minimums

  Bias audit data and       Permanent (subject   Demonstrates ongoing
  results                   to deletion request  compliance posture
                            handling)            
  -----------------------------------------------------------------------

## 9.4 Deletion Procedure

When an operator or client requests deletion of their data, Fractional
Standard responds per the Privacy Policy. Deletion requests are balanced
against statutory retention obligations (FCRA, tax law, pending
litigation holds) and the firm\'s legitimate business obligations per
the ICA (FS-DOC-048) and MSA (FS-DOC-049). Anonymized or aggregated
records may be retained indefinitely as they no longer identify the
individual.

For operators who did not verify, deletion requests are honored in full
after the 90-day re-assessment window elapses, with the exception of
aggregate statistical records used for bias audit purposes.

## 9.5 Access Logs

Access to retained records is logged at the Supabase row-level-security
layer. Access requests from outside the firm (regulator subpoenas,
operator data access requests, client data access requests) are logged
in the incidents table and the response is documented.

# 10. Explanation, Appeal & Re-Assessment Rights

Every operator who is the subject of an AI-assisted decision at
Fractional Standard has three rights: to request an explanation, to
appeal on factual grounds, and to request re-assessment after 90 days.
Satisfies Colorado CAIA adverse-action requirements, California CCPA
ADMT appeal provisions (when triggered), and good operational hygiene
under every applicable regulation.

## 10.1 Right to Explanation

On written request, Fractional Standard provides a plain-language
explanation of any consequential decision:

-   Non-verification decision: the specific development area(s) that
    informed the decision, framed in the language of the operator
    development report (qualitative, non-comparative).

-   Non-shortlisting for a specific engagement: the general reason (fit,
    availability, client-stated criteria) without disclosing other
    operators\' information or protected commercial criteria.

-   Removal from active pool: the specific operational reason
    (non-responsiveness, quality concern, operator\'s own request) with
    opportunity to correct factual inaccuracies.

Explanations provided within 10 business days of a written request.
Kevin is the primary author. Explanations do not disclose internal
dimensional scores or any information that would undermine the
non-comparative framing of the development report.

## 10.2 Right to Appeal on Factual Grounds

An operator may appeal any consequential decision on the grounds that it
was based on factual inaccuracies. The appeal is not a relitigation of
the decision itself; it is a factual correction mechanism.

Procedure:

-   Operator submits a written appeal identifying the specific factual
    inaccuracies they believe informed the decision.

-   Kevin reviews within 10 business days.

-   If the factual claim is verified, Kevin re-evaluates the decision
    considering the corrected facts. Outcome is at Kevin\'s discretion
    based on the corrected record.

-   If not verified, Kevin responds in writing with the basis for the
    original decision and notes why the correction does not change the
    outcome.

-   All appeals and responses logged in the incidents table.

## 10.3 Right to Re-Assessment

An operator who was not verified may request a fresh assessment no
earlier than 90 days after the initial assessment date. Re-assessment is
a new simulation with a different scenario. The new outcome supersedes
the prior outcome.

Re-assessment is not automatic --- Fractional Standard is not obligated
to approve any re-assessment request --- but the default disposition is
to approve unless there is specific reason to decline (repeated
non-verification, integrity concern, unresolved factual dispute).

## 10.4 Why These Rights Matter

These rights turn Fractional Standard\'s assessment process from a
one-way judgment into a respectful evaluation. That improves operator
experience regardless of outcome. It also satisfies the regulatory
requirement that every consequential algorithmic decision have a path to
contest, correct, and retry.

# 11. Annual Impact Assessment Commitment

Fractional Standard commits to an annual impact assessment of its
AI-assisted decision systems, regardless of whether current regulations
require one. The first assessment is conducted in Q1 2027 covering 2026
operations; thereafter in Q1 of each year covering the prior calendar
year.

## 11.1 Why the Commitment Now

Colorado CAIA requires annual impact assessments for deployers who lose
the small-deployer exemption. California CCPA ADMT requires risk
assessments for businesses above the revenue threshold. Fractional
Standard is currently exempt from both, but: (a) the exemption can be
lost (Phase 2 ML training --- already architecturally foreclosed per MBP
V7.1 Section 9) or (b) the threshold can be crossed. An impact
assessment history on file is substantially cheaper to produce when the
firm is not yet under the obligation --- and demonstrates the
reasonable-care posture that CAIA\'s rebuttable presumption depends on.

## 11.2 What the Impact Assessment Covers

-   Statement of purpose, intended use cases, deployment context, and
    benefits of each AI-assisted decision system.

-   Analysis of whether deployment poses known or reasonably foreseeable
    risks of algorithmic discrimination.

-   Description of mitigation measures --- the five Governance
    Principles, the Shadow AI Policy, the Disclosure Architecture, the
    HIL gates.

-   Description of data inputs and outputs.

-   Summary of monitoring activities --- incident log review, shadow AI
    incident count, override rate by dimension, operator appeal volume.

-   Summary of any incidents of algorithmic discrimination discovered,
    and remediation taken.

-   Review of alignment with NIST AI RMF (Appendix B).

-   Forward-looking items --- new tools or agents adopted, scope
    changes, upcoming regulatory triggers.

## 11.3 Who Conducts the Assessment

In Phase 1 (current), Kevin conducts the assessment and Chris reviews
it. External counsel reviews at the annual framework legal review
cadence (Section 15).

When Fractional Standard crosses the Colorado small-deployer threshold
or the California ADMT threshold, the assessment moves to a formally
documented process with potential external validation.

## 11.4 Alignment to NIST AI RMF

The assessment structure aligns to the NIST AI Risk Management Framework
(GOVERN, MAP, MEASURE, MANAGE) per Appendix B. Colorado CAIA references
NIST AI RMF as a factor in the reasonable-care analysis. ISO/IEC 42001
is the likely next standardization wave --- early alignment reduces
future transition cost.


# 11A. Phase 2 Matching Engine — Framework Reservation (May 2026)

The current AI footprint at Fractional Standard is bounded: Claude scores against a static rubric; pgvector (when activated) returns semantic-search shortlists; humans decide. The Phase 2 matching engine concept — an ML system trained on Fractional Standard placement-outcome data to recommend matches — is a categorically different compliance posture and is governed by this section.

## 11A.1 Reservation

No work begins on a matching engine that involves ML training on Fractional Standard placement data without an amendment to this framework. This includes: training a custom embedding model, fine-tuning an LLM on placement outcomes, training a learned ranking model, or building any model whose training corpus includes operator-, client-, or engagement-identifiable data. RAG (retrieval-augmented generation) over an existing rubric and prompts — the current architecture per Master Business Plan V7.1 §9 — is not affected by this reservation.

## 11A.2 Triggered Compliance Obligations (Anticipated)

Activating the Phase 2 matching engine triggers, at minimum:

- Loss of CAIA small-deployer exemption.
- Full risk-management policy adoption.
- Annual impact assessments (Section 11) become mandatory rather than committed.
- Public website statement of high-risk AI use under CAIA §6-1-1701(2)(c).
- Model training data governance program (lineage, consent, minimization, deletion-on-request enforcement at the model level).
- Drift monitoring program with documented thresholds and rollback procedure.
- Re-engagement of counsel: budget reserve $15K–$30K setup, $10K–$20K/year ongoing.
- Re-disclosure to all currently-active operators per §5.11.
- Bias audit of the trained model independent of the bias audit on the current pipeline.
- Full conformity assessment if the model is shipped into the EU (per EU AI Act high-risk classification).

## 11A.3 Decision Gate

The matching engine architecture decision is made by Kevin with explicit framework review, not as an incremental product release. The decision must be documented in a framework amendment and a Master Business Plan addendum. The cascading documentation update list (Master System Specification V2, Operations Playbook, ICA Exhibit C, MSA §18, Privacy Policy, Standing Website Notice) must be drafted and reviewed by counsel before activation.

## 11A.4 Pre-Decision Threshold

Even before the Phase 2 architecture decision is formally taken, any prototyping, evaluation, or research that would require placement data to leave the strict compliance perimeter must be approved through the framework amendment process. Aggregate analytics on placement outcomes (e.g., extension rate by industry, NPS by stage) are permitted under current framework principles; identifiable-record-level training data preparation is not.

# 12. Audit Readiness --- What to Track

Audit readiness means the firm can, on short notice, demonstrate the
operation of its governance principles through data. Fractional Standard
captures the following data continuously.

## 12.1 Demographic Data Collection --- Operational Procedure

Demographic data is self-reported and optional. UX-friendly collection
requires four design choices:

-   Collected POST-decision, after the verification decision is made and
    communicated. Not before. This makes clear the data is not used in
    the decision and protects against regulator timeline scrutiny.

-   Presented as part of the operator profile completion step (after the
    assessment outcome is known), alongside payment info, communication
    preferences, and welcome materials.

-   Single screen, \~30 seconds. EEOC standard categories. \'Prefer not
    to answer\' as a first-class option for each field.

-   Brief intro: \'Optional: We collect this information for our
    internal bias-audit purposes. It is not visible to anyone making
    decisions about you. You can skip any or all questions.\'

  -------------------------------------------------------------------------
  **Data field**    **Why tracked**           **How used**
  ----------------- ------------------------- -----------------------------
  Gender            Audit AI scoring          Never fed to scoring engine.
  (self-reported,   distribution across       Aggregate statistical
  optional)         genders                   analysis only.

  Race / ethnicity  Audit AI scoring          Never fed to scoring engine.
  (self-reported,   distribution across       Aggregate statistical
  optional)         groups                    analysis only.

  Assessment scores Identify whether specific Calibration data. Systematic
  by dimension      dimensions score          differences trigger rubric
                    differently across groups language review.

  Verification      Verify proportional       Under-representation triggers
  outcomes by group distribution              investigation.

  Pass/fail rates   Identify disproportionate Disproportionate filtering
  by assessment     filtering at any stage    triggers stage-specific
  stage                                       review.
  -------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **CRITICAL --- DEMOGRAPHIC DATA HANDLING**                            |
|                                                                       |
| Demographic data is clearly labeled as optional and self-reported. It |
| is NEVER visible to Kevin during the assessment process.              |
|                                                                       |
| Storage: separate restricted Supabase schema accessed only for        |
| aggregate statistical analysis. Row-Level Security policies prevent   |
| join to individual assessment records.                                |
|                                                                       |
| Processing: the scoring engine (Claude API prompt) never receives     |
| demographic data. Prompts are inspected at the framework annual       |
| review to confirm demographic data cannot leak through.               |
+=======================================================================+
+-----------------------------------------------------------------------+

## 12.2 AI Tool Usage Logs

-   Which tool was used for which decision.

-   Date and time of tool invocation.

-   Input summary and output summary.

-   Human decision taken and any override reasoning.

All captured automatically per Principle 5. Kevin does not manually log.

## 12.3 Override Logs

Every time Kevin\'s decision deviates from the AI recommendation, the
override and reasoning are captured. Overrides are training signal for
the matching engine and evidence of genuine HIL (regulators look for
this --- a zero-override rate undermines the HIL defense).

## 12.4 Shadow AI Incident Log

Every incident reported under Section 4.4 is logged with affected data,
remediation, and review status.

## 12.5 Appeal and Explanation Log

Every explanation request and appeal under Section 10 is logged with the
request, the response, the resolution, and the timestamps.

## 12.6 Bias Audit Readiness

After 100 completed assessments, Fractional Standard has sufficient data
for a meaningful statistical bias analysis. A bias audit compares
verification rate, dimension-level scoring, and stage pass-through rates
across self-reported demographic groups. Budget: \$3,000--\$8,000 using
a specialist vendor (FairNow, Warden AI, or equivalent). The audit may
be voluntary (pre-threshold) or mandatory (post-threshold); the data is
ready either way.

# 13. Per-Engagement Decision Records

Every Job Order produces a sequence of decisions: which operators are
qualified, which are submitted to the client, which are not (and why),
how the client interview goes, and what the client decides. Each is
captured in structured form. Compliance value (CAIA explanation
requirement, appeal evidence) and strategic value (matching engine
training data) reinforce each other.

## 13.1 Per-Submission Qualification Record

When an operator is submitted to a Job Order, the system captures:

-   Job Order ID, operator ID, submission date.

-   Soft-fit factor scores from Matching Workflow Gap Playbook
    (FS-DOC-046) Scenario 3 rubric.

-   Match rationale --- 2--4 sentences on why this operator fits this
    engagement.

-   Specific strengths surfaced for this Job Order\'s context.

-   Any qualifying caveats or watch areas (the risk_watch field).

## 13.2 Per-Submission Disqualification Record

When an operator is considered for a Job Order but not submitted, OR is
submitted and not selected by the client, the system captures:

-   Job Order ID, operator ID, decision date.

-   Disqualification or non-selection reason category (fit,
    availability, client preference, operator preference, etc.).

-   Free-text reasoning from Kevin or from client feedback.

-   Whether re-consideration for future engagements is appropriate.

Per Matching Workflow Gap Playbook (FS-DOC-046) Scenario 5, rejection
types are classified A, B, or C with specific re-engagement
implications.

## 13.3 Interview Feedback Capture

When a client interviews a submitted operator, the system captures:

-   Interview date, client interviewer, operator interviewed.

-   Client\'s structured feedback (positive observations, concerns, fit
    verdict).

-   Operator\'s post-interview reflection (optional, captured in
    operator-side check-in).

-   Outcome of the interview round.

Interview feedback is high-value data --- both for the operator
development report at engagement end (if the operator was not selected,
what was the gap?) and for matching engine improvement. Capture is
structured, not ad-hoc.

## 13.4 Why These Records Matter

Two reasons. First, regulatory: an operator may appeal a
disqualification or non-selection decision under Section 10. The records
are the evidence base for the response. Second, strategic:
per-submission qualification and disqualification records are the
highest-quality training data for the matching engine. The record of
\'why we matched\' and \'why we didn\'t\' compounds into matching
intelligence over time.

# 14. Review Triggers — Compliance Trigger Monitor

The framework is reviewed and updated at defined triggers, not on a
fixed calendar. Each trigger represents a meaningful change in
regulatory exposure, data volume, organizational complexity, or
stakeholder scrutiny.

  -----------------------------------------------------------------------
  **Trigger**            **What it triggers**
  ---------------------- ------------------------------------------------
  Every 25 completed     Calibration audit (Section 4.2 / scoring
  assessments (25, 50,   methodology check). Re-score 5 randomly selected
  75, then quarterly)    past assessments using the current rubric and
                         current Claude model; investigate any drift > 10
                         points on any dimension. Tracks override-rate
                         pattern and flags potential rubric or AI prompt
                         recalibration. Light-touch, internal.

  After 100 completed    First statistical bias audit opportunity.
  assessments            Compare verification rate, dimensional scoring,
                         and stage pass-through rates across groups.
                         Budget \$3K--\$8K. Update framework with audit
                         results.

  5th W-2 employee hire  California FEHA ADS regulations attach. Full HIL
                         documentation, bias testing, 4-year retention
                         (already in place) formalized. Additional
                         counsel consultation within 30 days of hire.

  15th W-2 employee hire Federal Title VII attaches. EEO-1 reporting
                         obligations kick in. Additional counsel
                         consultation.

  \$26.6M annual gross   California CCPA ADMT attaches. Pre-use notice,
  revenue OR 100,000+ CA opt-out rights, access to ADMT logic, appeal
  residents in system OR pathway, formal risk assessments. 90-day
  50%+ revenue from      implementation window. External counsel
  selling PI             engagement.

  First                  Colorado CAIA pre-decision notice,
  Colorado-resident      adverse-action explanation, and appeal rights
  operator assessed      apply for that operator. Cross-State Operating
                         Rules Matrix overlay activates.

  First NYC-resident     Law 144 10-business-day clock verification. Bias
  operator OR first      audit schedule confirmed. Alternative selection
  NYC-based client       process link confirmed on website.
  placement              

  First                  IL HB 3773 notice requirements and ZIP-code
  Illinois-resident      prohibition audit.
  operator OR first      
  IL-operating client    

  Phase 2 matching       If any proposal involves ML training on FS
  engine architecture    placement data, framework review is mandatory
  decision               before proceeding. CAIA small-deployer exemption
                         is lost; full compliance program kicks in.
                         Budget reserve: \$15K--\$30K setup,
                         \$10K--\$20K/year ongoing.

  W-2 consultant pivot   Full Title VII, FEHA, and Law 144 obligations
  consideration          attach. Bias audit becomes mandatory for NYC.
                         \$50K--\$100K compliance build reserve
                         activated.

  International          EU AI Act, GDPR, and applicable national
  expansion (EU, Korea,  frameworks kick in. Framework amendment.
  Brazil, etc.)          External counsel engagement.

  New agent deployment   Section 3.3 adoption procedure including four
                         design criteria check. Cascading documentation
                         updates per Section 1.5.

  Regulatory change ---  Monitored continuously via Compliance Trigger
  federal or state       Monitor and law firm alert feeds. Material
                         changes trigger framework review at next
                         quarterly Governance Review.

  Year 2 seed round      Investor diligence on AI governance. Framework
                         refreshed with audit results and any regulatory
                         updates. Counsel reviews.

  Annual framework       Comprehensive review of all sections. Inventory
  review (default, every update. Cross-state matrix update. Disclosure
  January)               language refresh. Retention policy confirmation.
                         Incident summary. Counsel review for material
                         changes (\$1,500 budget per cycle).
  -----------------------------------------------------------------------

## 14.1 Quarterly Governance Review (lightweight)

Between annual reviews, a lightweight quarterly Governance Review is
held --- approximately one hour. Agenda: AI Tool Inventory and Agent
Architecture updates, incident log review, shadow AI violation count,
cross-state matrix updates, upcoming regulatory triggers. Kevin runs;
Chris attends. Outcomes logged in the framework Version Log.

# 15. Pre-Launch Legal Review

Budget: \$4,000--\$6,000 for an employment attorney experienced in
gig-economy IC classification, technology contracts, and AI-in-hiring
laws.

## 15.1 Counsel Profile

-   Employment law with gig-economy / IC classification experience.

-   Technology contracts (AI-assessment and data-use provisions).

-   Familiarity with 2026 AI-in-hiring laws --- Law 144, CAIA, IL HB
    3773, CA FEHA ADS.

-   Staffing or managed placement firm experience is a plus.

## 15.2 Scope of Review

-   IC coverage under Law 144 --- does Fractional Standard qualify as an
    \'employment agency\' under the Final Rule when placing into
    NYC-based client engagements, and does IC placement constitute a
    covered \'employment decision\'?

-   IC coverage under Colorado CAIA --- is an IC assessment a
    \'consequential decision\' as to a \'consumer\' Colorado resident?

-   Illinois HB 3773 reach --- does the \'agent / third party acting on
    employer\'s behalf\' language extend to Fractional Standard?

-   Adequacy of revised ICA Exhibit C (FS-DOC-048), including the
    training-referral acknowledgment and CAIA-aligned appeal rights.

-   Adequacy of revised MSA Section 18 (FS-DOC-049), including
    vendor-liability allocation and client-side AEDT obligations.

-   Adequacy of the Standing Website Notice for Law 144.

-   Adequacy of the Client Activation Gate (Section 5.7) --- MSA
    acceptance, payment confirmation, and the agent-assisted intake flow
    that precedes it.

-   Recommendation on whether to proactively publish a bias audit
    summary prior to any regulator inquiry.

-   FTC Endorsement Guidelines adequacy for training-partner disclosure
    architecture.

-   Gaps or blind spots not addressed in this framework.

## 15.3 Deliverables from Counsel

-   Markup of this AI Governance Framework v2.1 with recommended
    revisions.

-   Markup of ICA Exhibit C (FS-DOC-048) and MSA Section 18
    (FS-DOC-049).

-   Written memo (3--5 pages) addressing the scope questions.

-   Confirmation of the framework as counsel-reviewed (evidence of
    reasonable-care due diligence).

# 16. What This Framework Is Not

-   Not a full EU AI Act compliance program. Fractional Standard does
    not currently operate in the EU. Revisit if EU expansion becomes
    live.

-   Not a substitute for counsel. State and local AI-in-hiring laws
    evolve quickly. This framework is operational; it is not legal
    advice.

-   Not a bias audit. Section 12 captures the data that enables a future
    audit.

-   Not a technical implementation specification. Technical architecture
    lives in MSS V2 (FS-DOC-002). This framework states what must be
    true; MSS V2 states how it is built.

-   Not a static document. Review triggers (Section 14) ensure
    continuous reconciliation with the regulatory environment and firm
    growth.

# Appendix A --- Glossary of Terms

  --------------------------------------------------------------------------
  **Term**              **Definition**
  --------------------- ----------------------------------------------------
  AEDT (Automated       Under NYC Local Law 144: any computational process,
  Employment Decision   derived from machine learning, statistical modeling,
  Tool)                 data analytics, or AI, that issues a simplified
                        output (score, classification, recommendation) used
                        to substantially assist or replace discretionary
                        decision-making for employment decisions.

  ADMT (Automated       Under California CCPA: any technology that processes
  Decisionmaking        personal information and uses computation to replace
  Technology)           human decisionmaking or substantially replace human
                        decisionmaking. Broader than AEDT.

  Algorithmic           Under Colorado CAIA: any condition in which use of
  discrimination        an AI system results in unlawful differential
                        treatment or impact that disfavors an individual or
                        group on the basis of a protected class.

  Client Activation     Fractional Standard\'s required client-side gate
  Gate                  (Section 5.7) consisting of MSA execution and
                        Stripe payment authorization on file.
                        Precondition for any matching cycle.
                        (Activation fee retired May 2026; previously
                        $1,000 fee was charged at this gate.)

  Consequential         Under Colorado CAIA: a decision that has a material
  decision              legal or similarly significant effect on the
                        provision or denial of, or cost or terms of,
                        education, employment, financial or lending
                        services, essential government service, health care
                        services, housing, insurance, or legal service.

  Deployer              Under Colorado CAIA: a person doing business in
                        Colorado that deploys a high-risk AI system.

  Developer             Under Colorado CAIA: a person doing business in
                        Colorado that develops or intentionally and
                        substantially modifies a high-risk AI system.

  Employment decision   Under NYC Local Law 144: to screen candidates for
                        employment or employees for promotion within the
                        city.

  High-risk AI system   Under Colorado CAIA: an AI system that, when
                        deployed, makes or is a substantial factor in making
                        a consequential decision.

  Human-in-the-Loop     A governance pattern in which a human reviewer with
  (HIL)                 authority and capability reviews and may override an
                        AI output before any consequential action is taken.

  Material connection   Under FTC Endorsement Guidelines: a relationship
                        between an endorser and an endorsed product that
                        might materially affect the weight or credibility of
                        the endorsement --- including financial, employment,
                        or family relationships.

  Simulation-Verified   An operator who has completed the Fractional
  operator              Standard simulation-based assessment and been
                        invited to the active operator community. Replaces
                        the prior external \'Tier 1\' label.

  Significant decision  Under California CCPA ADMT regulations: decisions
                        that result in the provision or denial of employment
                        or independent contracting (including hiring,
                        assignment of work, compensation,
                        promotion/demotion, and termination), financial or
                        lending services, housing, education enrollment or
                        opportunity, essential goods or services, healthcare
                        services, or access to essential government
                        services.
  --------------------------------------------------------------------------

# Appendix B --- Alignment to NIST AI Risk Management Framework

The NIST AI Risk Management Framework (AI RMF 1.0) is the reference
framework for algorithmic risk management in the U.S. Colorado CAIA
explicitly references it as a factor in the reasonable-care analysis.
This appendix maps Fractional Standard\'s governance to the four NIST AI
RMF functions.

  ------------------------------------------------------------------------
  **NIST       **Description**               **Fractional Standard
  Function**                                 mapping**
  ------------ ----------------------------- -----------------------------
  GOVERN       Cultivate a culture of risk   This framework establishes
               management across the         the governance culture.
               organization. Policies and    Section 1 defines authority
               procedures are in place.      and maintenance. Section 2
               Accountability is clear.      states the five principles.
                                             Section 4 establishes
                                             cultural norms. Section 14
                                             drives continuous review.

  MAP          Contextualize risks across AI Section 3 maps the AI stack
               lifecycle and deployment.     and agent architecture.
               Establish context, identify   Section 8 maps jurisdictional
               risks, and articulate         context. Section 11
               impacts.                      articulates impacts annually.
                                             Section 12 tracks the data
                                             for risk characterization.

  MEASURE      Quantitative and qualitative  Section 12 captures
               assessment of AI systems,     assessment scores by
               including discrimination      dimension, verification
               risk, error rates, and system outcomes by group, pass/fail
               performance.                  rates by stage. Override rate
                                             is tracked. Shadow AI
                                             incident count is tracked.
                                             Quarterly governance review
                                             reviews metrics.

  MANAGE       Respond to identified risks.  Section 4.4 (shadow AI
               Manage risks on a prioritized response), Section 10
               basis. Plan for response and  (explanation/appeal), Section
               recovery from incidents.      14 (review triggers),
                                             quarterly governance review,
                                             annual impact assessment
                                             response planning, AG
                                             notification framework for
                                             discovered discrimination.
  ------------------------------------------------------------------------

# Appendix C --- Disclosure Language Templates

These are the authoritative disclosure language templates for Fractional
Standard. All operational touchpoints --- website copy, outreach
templates, assessment intake --- derive from these. Updates require
framework amendment (Section 1.4).

## C.1 Standing Website Notice --- Operators Page

+-----------------------------------------------------------------------+
| **FRACTIONAL STANDARD --- AI USE DISCLOSURE (OPERATOR-FACING)**       |
|                                                                       |
| Posted: \[DATE THE NOTICE FIRST WENT LIVE\]. Last updated: \[DATE\].  |
|                                                                       |
| Fractional Standard uses artificial intelligence to support several   |
| parts of our operator sourcing, assessment, and matching process.     |
| This notice tells you what AI we use, what it evaluates, what we      |
| collect, how long we keep it, and what rights you have.               |
|                                                                       |
| Where AI is used:                                                     |
|                                                                       |
| • Sourcing --- AI-assisted tools help us identify prospective         |
| operators from public professional data.                              |
|                                                                       |
| • Assessment --- AI (Claude, developed by Anthropic) helps score      |
| simulation responses against a structured rubric across five          |
| dimensions of fractional-executive performance.                       |
|                                                                       |
| • Matching --- semantic-search technology helps surface operators     |
| whose backgrounds may fit a specific client engagement.               |
|                                                                       |
| • Document workflows --- AI helps process resumes, generate operator  |
| profiles, and summarize reference notes.                              |
|                                                                       |
| • Operations --- AI helps draft communications, generate meeting      |
| summaries, and support administrative workflow.                       |
|                                                                       |
| What AI does NOT evaluate:                                            |
|                                                                       |
| • Personal characteristics, demographics, or any protected class.     |
|                                                                       |
| • Location, ZIP code, or similar proxies.                             |
|                                                                       |
| • Age, national origin, gender, race, ethnicity, religion, disability |
| status, or any other protected attribute.                             |
|                                                                       |
| Human review:                                                         |
|                                                                       |
| • Every consequential decision about you --- assessment outcome,      |
| inclusion in a shortlist, removal from active pool --- is reviewed by |
| a human who has the authority to override the AI output. No decision  |
| about you is made solely by AI.                                       |
|                                                                       |
| Data we collect:                                                      |
|                                                                       |
| • Simulation responses, reference notes, background-check results     |
| (with your consent), engagement performance data, pulse-check         |
| responses, and optional self-reported demographic data for our        |
| internal audit purposes.                                              |
|                                                                       |
| Retention:                                                            |
|                                                                       |
| • Assessment and placement records are retained for a minimum of four |
| years.                                                                |
|                                                                       |
| Your rights:                                                          |
|                                                                       |
| • You may request an alternative selection process for any part of    |
| the assessment that uses AI.                                          |
|                                                                       |
| • You may request a plain-language explanation of any consequential   |
| decision made about you. We respond within 10 business days.          |
|                                                                       |
| • You may appeal a decision on factual grounds. We respond within 10  |
| business days.                                                        |
|                                                                       |
| • You may request a re-assessment no earlier than 90 days after your  |
| initial assessment.                                                   |
|                                                                       |
| • You may request information about the data sources, data types, and |
| retention policy at any time. We respond within 30 days.              |
|                                                                       |
| Our bias audit summary, when available, is published on this page.    |
|                                                                       |
| Contact: \[EMAIL\].                                                   |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.2 Direct Outreach Disclosure (light-touch)

### Email version (full)

+-----------------------------------------------------------------------+
| ***Email outreach disclosure block (include after the outreach        |
| message body, before sign-off)***                                     |
|                                                                       |
| *How we work: we use a structured assessment process supported by AI, |
| with human review of every decision. Full details: \[link to standing |
| website notice\].*                                                    |
|                                                                       |
| *If you\'re interested in learning more, our assessment is scheduled  |
| no earlier than 11 business days from our first contact --- this      |
| gives you time to review our process before engaging.*                |
+=======================================================================+
+-----------------------------------------------------------------------+

### LinkedIn version (character-constrained)

+-----------------------------------------------------------------------+
| ***LinkedIn message disclosure block (include as postscript)***       |
|                                                                       |
| *How we work: structured assessment supported by AI, with human       |
| review of every decision. Details: \[short link\].*                   |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.3 Pre-Assessment Disclosure

+-----------------------------------------------------------------------+
| **FRACTIONAL STANDARD --- PRE-ASSESSMENT AI DISCLOSURE**              |
|                                                                       |
| Please read this disclosure before beginning your simulation.         |
| Acknowledging this disclosure is required to proceed.                 |
|                                                                       |
| Your simulation will be administered and/or scored by an AI system    |
| --- Claude, developed by Anthropic. The AI evaluates your responses   |
| on five dimensions of fractional-executive performance using a        |
| structured rubric. It does not evaluate personal characteristics,     |
| demographics, or any protected attribute.                             |
|                                                                       |
| A human reviewer (Kevin Krull) validates all AI scores and makes the  |
| final determination on whether you are invited to the Fractional      |
| Standard operator community. No classification decision is made       |
| solely by AI.                                                         |
|                                                                       |
| You will receive a personalized development report based on your      |
| simulation --- regardless of the outcome. The report is qualitative   |
| and is intended to be useful for your continued development as a      |
| fractional executive.                                                 |
|                                                                       |
| Your simulation responses are stored securely for four years. They    |
| may be used for assessment, matching, and internal improvement of our |
| methodology --- not for any other purpose.                            |
|                                                                       |
| You have the right to:                                                |
|                                                                       |
| • Request an alternative selection process at any time.               |
|                                                                       |
| • Request a plain-language explanation of the outcome.                |
|                                                                       |
| • Appeal a decision on factual grounds.                               |
|                                                                       |
| • Request a re-assessment 90 days after your initial assessment.      |
|                                                                       |
| • Request information about methodology or data handling at any time. |
|                                                                       |
| By proceeding, you acknowledge you have read and understood this      |
| disclosure.                                                           |
|                                                                       |
| \[ACKNOWLEDGE & PROCEED\]                                             |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.4 Colorado CAIA Pre-Decision Notice

+-----------------------------------------------------------------------+
| **COLORADO CAIA PRE-DECISION NOTICE**                                 |
|                                                                       |
| Delivered to Colorado-resident operators before any consequential     |
| decision (verification decision or adverse action).                   |
|                                                                       |
| Fractional Standard is preparing to make a determination about your   |
| participation in our operator community based in part on AI-assisted  |
| assessment. As a Colorado resident, you have rights under the         |
| Colorado Artificial Intelligence Act.                                 |
|                                                                       |
| • Purpose of the system: to evaluate prospective operator             |
| qualifications for fractional-executive engagements.                  |
|                                                                       |
| • Nature of the decision: whether you are invited to our              |
| Simulation-Verified operator community.                               |
|                                                                       |
| • Contact: \[EMAIL / PHONE\].                                         |
|                                                                       |
| • Website disclosure: \[link to Standing Website Notice\].            |
|                                                                       |
| You have the right under the Colorado Privacy Act to opt out of       |
| profiling in furtherance of decisions with legal or similar           |
| significant effects.                                                  |
|                                                                       |
| If the decision is adverse to you, we will provide an explanation and |
| an opportunity to appeal. See our Standing Website Notice for full    |
| details.                                                              |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.5 Training-Partner Referral Disclosure (FTC)

+-----------------------------------------------------------------------+
| **STANDARD TRAINING-REFERRAL DISCLOSURE**                             |
|                                                                       |
| Placement: at the point of recommendation --- inside operator         |
| development reports adjacent to resource listings, on website pages   |
| that recommend resources, in operator emails that include partner     |
| recommendations.                                                      |
|                                                                       |
| \"Fractional Standard has referral partnerships with some of the      |
| training providers listed above. If you sign up through these links,  |
| we may earn a commission at no additional cost to you. Our            |
| recommendations are based on operator-development fit, not commission |
| structure.\"                                                          |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.6 Client Portal Entry Disclosure

+-----------------------------------------------------------------------+
| **FRACTIONAL STANDARD CLIENT PORTAL --- AI USE DISCLOSURE**           |
|                                                                       |
| Welcome to Fractional Standard.                                       |
|                                                                       |
| We use AI to support our operator sourcing, assessment, and matching  |
| process. Here\'s what you should know before you proceed:             |
|                                                                       |
| • An AI assistant will guide you through articulating your fractional |
| executive needs and producing a draft Job Order.                      |
|                                                                       |
| • Our team (Chris, our co-founder and head of client operations)      |
| reviews and validates your Job Order before any matching begins.      |
|                                                                       |
| • Our matching process uses AI-assisted semantic search to surface    |
| qualified operators. Kevin (our COO and head of operator operations)  |
| reviews and confirms every shortlist before it reaches you.           |
|                                                                       |
| • No final decision about your engagement is made solely by AI. A     |
| human reviews and approves every consequential step.                  |
|                                                                       |
| Your information is held confidentially and used only for the         |
| purposes of your engagement with Fractional Standard.                 |
|                                                                       |
| By proceeding, you acknowledge you have read this disclosure.         |
|                                                                       |
| \[CONTINUE TO PORTAL\]                                                |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.7 Client Activation Gate Disclosure

+-----------------------------------------------------------------------+
| **CLIENT ACTIVATION GATE --- DISCLOSURE AT MSA ACCEPTANCE AND         |
| PAYMENT**                                                             |
|                                                                       |
| Presented at the Client Activation Gate (Section 5.7) immediately     |
| before MSA acceptance and payment.                                    |
|                                                                       |
| You\'re about to activate a search with Fractional Standard. Here\'s  |
| what happens next:                                                    |
|                                                                       |
| 1\. You\'ll review and accept our Master Services Agreement, which    |
| includes our AI use disclosure (Section 18) and our liability allocation between Fractional Standard and your business. |
|                                                                       |
| 2\. You'll authorize a payment method on file via Stripe. **No charge is captured at this step.** Your first monthly retainer is billed when your Engagement Start Date arrives, per MSA §5.2 (monthly in advance, net-14). |
|                                                                       |
| 3\. Once both items are in place, our system automatically begins an initial match cycle. Kevin reviews and confirms the shortlist before it reaches you --- typically within 5 business days. |
|                                                                       |
| By executing the MSA and authorizing your payment method on file, you authorize Fractional Standard to begin AI-assisted matching for your Job Order. You retain all rights to review, decline, or request a refreshed shortlist. There is no activation fee. |
|                                                                       |
| \[EXECUTE MSA & AUTHORIZE PAYMENT METHOD\]                            |
+=======================================================================+
+-----------------------------------------------------------------------+

## C.8 Client-Facing Disclosure (Diagnostic Call Script)

+-----------------------------------------------------------------------+
| ***Chris --- during diagnostic call, when introducing Fractional      |
| Standard\'s methodology***                                            |
|                                                                       |
| *\"Before we go deeper, I want you to know how we work. Fractional    |
| Standard uses AI to support our sourcing, assessment, and matching    |
| process --- but a human reviews every decision. Our operators are     |
| Simulation-Verified, which means each one has completed a structured  |
| assessment that we review ourselves. When we present you with         |
| candidates, we\'ve already matched them to your stage and founder     |
| profile based on both AI-assisted semantic search and our human       |
| review. You\'ll always see the humans behind the match. Our full AI   |
| use disclosure is on the website if you\'d like details.\"*           |
+=======================================================================+
+-----------------------------------------------------------------------+

# Appendix D — Version Log

| **Version** | **Date** | **Change summary** |
| --- | --- | --- |
| 2.2 | May 2026 | Incorporates the May 2026 settled-decision cascade. Substantive changes: **(1) Activation Fee retired** — the $1,000 activation fee defined in v2.1 §5.7 is replaced by MSA execution + Stripe payment authorization on file as the engagement-start signal. The compliance and commitment functions of the gate are preserved through MSA execution as the legal commitment event and Stripe payment authorization as the operational commitment event. Fee mechanics formerly governed in this framework now live in Pricing Model V7 (FS-DOC-042) and MSA v1.1 §5.2 (FS-DOC-049). Glossary, Appendix C.7 disclosure, and §5.7 fully revised. **(2) Operator Tier 1/2/3 system eliminated externally**, replaced with binary Pool Admission decision (composite ≥60 + validation Pass) plus internal performance signals for matching prioritization. Glossary "Simulation-Verified operator" entry retained. **(3) Operator pay model**: fixed monthly fee per Engagement, derived from weekly hours target × hourly rate × 52/12, rounded to nearest $25. Hours logged in Clockify are utilization signal only, not pay basis. **(4) Pricing Model V6 → V7** (allocation-based, not hour-cap). **(5) New Section 8.5 Vendor-to-Client Liability Architecture**: addresses client-side AEDT obligations when FS places operators into AEDT-regulated client decisions; references MSA §18 vendor allocation; §8.5.3 explicitly states the IC-shield position is a fallback argument, not the operating premise. **(6) New Section 11A Phase 2 Matching Engine — Framework Reservation**: governs any future ML training on FS placement data; explicit reservation, anticipated triggered obligations (loss of CAIA small-deployer exemption, $15K–$30K counsel reserve, etc.), decision gate. **(7) Section 14 Review Triggers expanded** with calibration audit trigger every 25 assessments and renamed to "Compliance Trigger Monitor." **(8) Operations Playbook V7 → V8 cross-references**, ICA v1.1 §14 + Exhibit C alignment confirmed. Header updated to add CTO/CRO extended-catalog roles per Pricing Model V7 (0% Y1 allocation). |
| 2.1 | April 2026 | Incorporates Kevin's review of v2.0. Substantive additions: (a) Agent Architecture (Section 3.2) consolidates 12 current and planned agents with HIL gates and risk classification; (b) Four design criteria for new agents (Section 3.4); (c) AI-Assisted Document Workflows (Section 6) explicitly enables resume parsing, profile generation, summarization, and manual override/regeneration with light governance for internal use, full HIL for client-facing outputs; (d) Matching Lifecycle and Records (Section 7) covers triggers including initial match, re-match, ad-hoc search; (e) Per-Engagement Decision Records (Section 13) adds qualification, disqualification, and interview feedback capture; (f) Client Activation Gate (Section 5.7) — $1,000 fee + MSA acceptance + Stripe webhook confirmation as precondition for Initial Match trigger; (g) Demographic data collection operational procedure (Section 12.1) — post-decision UX-friendly capture; (h) Lighter-touch initial outreach disclosure (Appendix C.2); (i) Client Portal Entry Disclosure (Section 5.5, Appendix C.6) and Client Activation Gate Disclosure (Appendix C.7); (j) Job Order Validation Gate explicitly named (Section 5.6); (k) Principle 5 refined with explicit commitment that audit trail logging is automatic, never a separate manual step. Cleanups: tier language eliminated wherever it remained; FS-DOC IDs added throughout; cross-document agent governance flow added to Section 1.5. |
| 2.0 | April 2026 | Comprehensive expansion from v1.0. Scope expanded from assessment-only to full AI-assisted operating system. Five governance principles. Added: AI Tool Inventory (Section 3), Shadow AI Policy (Section 4), Cross-State Operating Rules Matrix, Data Retention Standard, Explanation/Appeal/Re-Assessment rights, Annual Impact Assessment commitment. Disclosure Architecture expanded. Appendices: Glossary, NIST AI RMF alignment, Disclosure Language Templates, Version Log. Replaced 'Tier 1/2/3' language with 'Simulation-Verified.' Phase 2 matching engine architectural commitment (RAG + rules, no ML training on FS data) referenced. Legal review scope expanded to $4K–$6K budget. |
| 1.0 | April 2026 | Initial framework. Consolidated from V5 Operational Playbooks Document 4. Three principles: Human-in-the-Loop, Transparency, Data Minimization. Operator AI Disclosure Notice. Audit readiness data tracking. Pre-launch legal review scope. Annual review triggers. Scoped to assessment only. |


*— End of AI Governance Framework v2.2 —*

**Companion documents:** FS-DOC-001 Master Business Plan V7.1 • FS-DOC-002 MSS V2 • FS-DOC-010 CFO Assessment Delivery Protocol v1.2 • FS-DOC-011 CFO Scoring Prompt v1.1 • FS-DOC-013 Matching Workflow • FS-DOC-019 Operator Sourcing Strategy V3.1 • FS-DOC-022 Operator Profile Template v1.1 • FS-DOC-040 Operations Playbook V8 • FS-DOC-042 Pricing Model V7 • FS-DOC-044 Job Order Intake Form v1.1 • FS-DOC-045 Client Diagnostic Call Playbook v1.1 • FS-DOC-046 Matching Workflow Gap Playbook v1.2 • FS-DOC-048 ICA Draft v1.1 • FS-DOC-049 MSA Draft v1.1 • FS-DOC-050 Daily Cheat Sheet v1.2 • AI Compliance & Governance Program Project Plan v1.1 (forthcoming v1.2 to reflect this framework's v2.2 changes)
