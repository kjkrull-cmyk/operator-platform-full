# Legal Documents

This directory holds the legal package for Fractional Standard. **Files here are NOT meant to be edited by Claude Code.** They go to counsel for review and to Chris/Kevin for signature.

If a substantive change to a legal document is needed, the workflow is:
1. Discuss with Kevin
2. Kevin engages counsel for the change
3. Counsel produces a new version
4. Kevin replaces the file here and commits

Do not edit `.docx` or `.pdf` files programmatically. Even non-substantive edits (typo fixes, formatting) should go through Kevin.

## Files

| File | Status | Purpose |
|---|---|---|
| `Operating_Agreement_signed_2026-04-16.pdf` | **Signed** April 16, 2026 | The Operating Agreement between Kevin and Chris. Source of truth for equity (49/41/10), vesting (2-year), management structure |
| `01_Amendment_No_1_to_Operating_Agreement.docx` | Drafted; signing TBD | Amendment establishing sliding-scale Guaranteed Payment for the Managing Member |
| `02_Distribution_Policy_Member_Resolution.docx` | Drafted; signing TBD | Member resolution adopting the Phase 1 (70/30) → Phase 2 (90/10) sticky distribution policy with $164K threshold and $250K soft cap |
| `03_Master_Services_Agreement_v1_1.docx` | **Draft for attorney review** | Client-facing MSA. Includes §18.5–18.7 placeholders for vendor-liability allocation language that counsel must draft per AI Governance Framework v2.2 §8.5 |
| `04_Independent_Contractor_Agreement_v1_1.docx` | **Draft for attorney review** | Operator-facing ICA. Includes Exhibit B.3 (referral structure), Exhibit D (conversion fees), Exhibit E (direct hire) |
| `00_Email_Draft_to_Chris.docx` | Reference | Cover email for the legal package — context for Chris when reviewing |

## Critical pending legal work

1. **Engage attorney to draft operative MSA §18.5–18.7 language.** This is the longest critical-path item before MVP launch. Estimated 4–8 weeks calendar time.
2. **Privacy Policy.** Required for public website launch. Not yet drafted.
3. **OA vesting cliff.** OA vesting is 2-year (24 months); cliff status uncertain. Worth confirming with Chris and adding before launch.

## What lives elsewhere

The reasoning and operational implications of these legal documents live in:
- `docs/architecture/may_2026_architecture_decisions.md` — the why behind structural decisions (decisions #2, #7, #8, #9, #10, #11)
- `docs/architecture/ai_governance_framework_v2_2.md` — the AI compliance posture that MSA §18 codifies
- `docs/operations/operations_playbook_v8.md` — how the legal terms translate into day-to-day workflow

When working in code, reference those docs for the operational requirements. The legal docs themselves are the contractual ground truth and should rarely need to be opened.
