**Fractional Standard**	Supabase Migration Plan v1.0  •  May 2026

**SUPABASE MIGRATION PLAN**

*May 2026 Architecture Alignment — Production Database `fractional-standard-prod`*

Version 1.0  •  May 2026  •  CONFIDENTIAL  •  Review-then-apply (Approach B: chunked application with checkpoints)

| **WHAT THIS DOCUMENT IS** The operative plan for migrating the `fractional-standard-prod` Supabase database from the April 2026 schema to the May 2026 settled-architecture schema. Built using approach B (hybrid): Kevin reads the full plan, approves it, then Claude applies migration chunks one at a time with checkpoints between each. Destructive operations (DROP) are deferred until after Retool has been rebuilt against the new schema. This is the source of truth for what the database will look like after migration. |
| --- |

# 1. Why This Migration Exists

The current production schema reflects design decisions from before May 2026. Several settled May 2026 decisions are not yet reflected in the database:

- **External operator tier system retired** — the database still has `tier`, `tier_preference`, `retainer_tier_enum`, and operator status `Tiered`. May 2026 settled on binary pool admission + internal performance signal (Strong/Conditional). Externally, operators are not "tiered."
- **Activation fee retired** — the database still has `activation_fee` field, `activation_fee_status_enum`, and the `Activation Fee Paid` pipeline stage. May 2026 replaced this with MSA + Stripe payment authorization on file.
- **Allocation-based pricing not modeled** — the database has `hour_cap` (integer), `retainer_amount`, and `billing_cadence` (text) but lacks the structured allocation labels (Foundation/Growth/Scale/Embedded mapped to weekly hours 5/10/15/20).
- **Fixed monthly operator pay missing** — operators are paid a fixed monthly fee derived from `(weekly_hours × hourly_rate × 52/12)` rounded to nearest $25, not hour-tracked. The database has `operator_hourly_rate` but no `monthly_operator_fee` field. Hours logged via Clockify are utilization signal only, not pay basis.
- **Engagement phase concept missing** — the 30-day Engagement-Phase Replacement Right (MSA §13.1) requires tracking which phase an engagement is in (kickoff/active/wind-down). No such field today.
- **Conversion fee structure mismatched** — pricing_catalog has `conversion_fee` as a single numeric value. May 2026 settled on a 4-tier tenure-based structure (20%/17%/13%/10%) per MSA Exhibit D. Needs different shape.
- **Mid-engagement termination tracking missing** — ICA §3.8 specifies strict calendar-day proration + 60-day pool priority + discretionary accommodation. No table tracks this.
- **Operator referral tracking missing** — ICA Exhibit B.3 specifies $500 split ($250 ICA signing + $250 first Engagement). No table tracks this.
- **AI compliance audit log missing** — AI Governance Framework v2.2 §14 mandates calibration audit every 25 assessments. No table to log these audits.
- **Direct hire engagements missing** — MSA Exhibit E adds direct-hire (contingency) as a separate engagement type. Currently no way to distinguish a fractional engagement from a direct-hire placement.
- **Assessment role identifier missing** — assessments table has no `assessment_role` field. Can't distinguish CFO from COO from CMO assessments. Critical for matching downstream.
- **Stale operator status `Tiered`** — operator_profile_status_enum contains "Tiered" — should be "Pool Admitted" + signal stored separately.

# 2. Migration Approach (Approach B — Chunked with Checkpoints)

Five chunks, applied in dependency order, with you confirming each before moving on:

| Chunk | Type | What it does | Risk | When applied |
| --- | --- | --- | --- | --- |
| 1 | Additive (CREATE TYPE, ADD COLUMN) | Add new enums, allocation fields, monthly_operator_fee, engagement_phase, assessment_role | Zero | After plan approval |
| 2 | New tables (CREATE TABLE) | New tables for direct_hire_engagements, conversion_fee_tracking, mid_engagement_terminations, operator_referrals, ai_compliance_audit_log, operator_pool_admissions | Zero | After Chunk 1 confirmed |
| 3 | Backfill (UPDATE) | Populate new columns from existing data where derivable. Seed pricing_catalog with V8 values. | Low | After Chunk 2 confirmed |
| 4 | RLS + helper functions | New RLS policies for new tables; helper functions for derivations (e.g., calculate_monthly_operator_fee) | Low | After Chunk 3 confirmed |
| 5 | DESTRUCTIVE (DROP COLUMN, DROP TYPE) | Drop stale columns, retire stale enums | Medium-High | **Only after Retool rebuilt and confirmed working against new schema** |

Between each chunk, Claude pauses, summarizes what was applied, runs a verification query, and waits for Kevin's confirmation before proceeding. If anything looks wrong, the migration stops.

# 3. Tables That Will Be Modified

## 3.1 `engagements`

**ADD columns (Chunk 1):**

| Column | Type | Default | Purpose |
| --- | --- | --- | --- |
| allocation_label | text | NULL | Foundation / Growth / Scale / Embedded |
| weekly_hour_allocation | integer | NULL | 5 / 10 / 15 / 20 |
| monthly_operator_fee | numeric | NULL | Fixed monthly pay = (weekly_hours × hourly_rate × 52/12), MROUND $25 |
| engagement_phase | text | 'kickoff' | kickoff / active / wind-down (drives 30-day replacement right) |
| direct_hire_engagement_id | uuid | NULL | If non-null, this engagement is a direct-hire conversion (FK to direct_hire_engagements) |

**KEEP columns (no change):**
- `retainer_amount` — client-facing monthly dollar value (you correctly pushed back on dropping this)
- `billing_cadence` — defaults to `'monthly'` per V8 financial model decision (12 periods/year)
- `operator_hourly_rate` — needed to derive `monthly_operator_fee` and for margin tracking
- All foreign keys, status fields, action timestamps

**DROP columns (Chunk 5, AFTER Retool):**
- `tier` (text) — replaced by `allocation_label`
- `hour_cap` (integer) — replaced by `weekly_hour_allocation` (the fundamental unit changed: weekly hours, not monthly cap)
- `overage_policy` (text) — allocation model has no overage; within-month flex, monthly use-it-or-lose-it

## 3.2 `assessments`

**ADD columns (Chunk 1):**

| Column | Type | Default | Purpose |
| --- | --- | --- | --- |
| assessment_role | text | NULL | CFO / COO / CMO — uses new enum, see §3.10 |
| assessment_scenario_version | text | NULL | e.g. "CFO v1.0", "COO v1.0", "CMO v1.0" |
| pool_admission_decision | text | NULL | Admit / Decline / Pending validation / Decline (validation fail) / Not scored |
| internal_performance_signal | text | NULL | Strong / Conditional / Below threshold / Pending validation / n/a / Not scored |

**KEEP columns:**
- `composite_score`, `simulation_score`, `artifact_score`, `reference_score`
- `simulation_dimensions` (jsonb) — already correctly designed to hold role-specific dimension scores
- `human_validation_*` fields, `ai_disclosure_acknowledged_at`
- All FKs

**DROP columns (Chunk 5):**
- `tier` (text) — replaced by `pool_admission_decision` + `internal_performance_signal`

## 3.3 `pricing_catalog`

This table currently has 0 rows. The May 2026 architecture has a known, finite, V8-aligned set of pricing entries. Approach: **drop existing row schema and recreate with the right shape, then seed with V8 values.**

**NEW schema (Chunk 2 — drop + recreate):**

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid PK | gen_random_uuid() |
| role | role_enum | CFO / COO / CMO |
| allocation_label | text | Foundation / Growth / Scale / Embedded |
| weekly_hour_allocation | integer | 5 / 10 / 15 / 20 |
| monthly_retainer | numeric | Client-facing monthly amount per V8 |
| operator_hourly_rate | numeric | Internal: $150 (CFO) / $165 (COO) / $145 (CMO) |
| monthly_operator_fee | numeric | Derived: (weekly × rate × 52/12), MROUND $25 |
| burden_rate | numeric | 0.07 (7% per V8) |
| target_net_margin | numeric | 0.40 |
| is_active | boolean | true |
| effective_date | date | 2026-06-01 |
| created_at | timestamptz | now() |
| updated_at | timestamptz | now() |

**DROP columns (Chunk 2 as part of recreate):**
- `tier` (text) — replaced by `allocation_label`
- `hour_cap` (integer) — replaced by `weekly_hour_allocation`
- `activation_fee` (numeric) — entire concept retired
- `conversion_fee` (numeric) — moved to dedicated `conversion_fee_tracking` table per MSA Exhibit D 4-tier structure
- `billing_cadence` (text) — moved to engagements table only (not catalog-level)

**Seed data (Chunk 3):**

12 rows total — 3 roles × 4 allocations. All values from V8 financial model Assumptions tab:

| Role | Allocation | Weekly hrs | Monthly retainer | Op hourly | Monthly op fee |
|---|---|---|---|---|---|
| CFO | Foundation | 5 | $5,950 | $150 | $3,250 |
| CFO | Growth | 10 | $11,850 | $150 | $6,500 |
| CFO | Scale | 15 | $17,750 | $150 | $9,750 |
| CFO | Embedded | 20 | $23,650 | $150 | $13,000 |
| COO | Foundation | 5 | $6,500 | $165 | $3,575 |
| COO | Growth | 10 | $13,000 | $165 | $7,150 |
| COO | Scale | 15 | $19,500 | $165 | $10,725 |
| COO | Embedded | 20 | $26,000 | $165 | $14,300 |
| CMO | Foundation | 5 | $5,750 | $145 | $3,150 |
| CMO | Growth | 10 | $11,500 | $145 | $6,275 |
| CMO | Scale | 15 | $17,150 | $145 | $9,425 |
| CMO | Embedded | 20 | $22,850 | $145 | $12,575 |

Monthly op fee formula: `ROUND((weekly_hours × hourly_rate × 52 / 12) / 25, 0) × 25`

## 3.4 `job_orders`

**ADD columns (Chunk 1):**

| Column | Type | Purpose |
| --- | --- | --- |
| allocation_preference | text | Foundation / Growth / Scale / Embedded |
| monthly_retainer_min | numeric | Client budget low end |
| monthly_retainer_max | numeric | Client budget high end |

**KEEP:** all existing FKs, role, urgency, dates, jsonb fields, status

**DROP (Chunk 5):**
- `tier_preference` (text) — replaced by `allocation_preference`
- `hour_cap_preference` (integer) — no longer the relevant unit

## 3.5 `hour_cap_tracking` → `engagement_utilization`

The entire concept is changing. Hours are no longer tracked against a cap for billing purposes. They're tracked for utilization/capacity management only.

**Approach:** Rename the table and refactor the column meanings. Don't drop the table — preserve test data, just reframe what it means.

**RENAME (Chunk 5):**
- Table: `hour_cap_tracking` → `engagement_utilization`

**ADD columns (Chunk 1, while still named hour_cap_tracking):**

| Column | Type | Purpose |
| --- | --- | --- |
| weekly_hour_target | numeric | The expected weekly hours per allocation (5/10/15/20) |
| month_year | text | Format: "2026-06" — convenience field for grouping |
| utilization_pct | numeric | hours_logged / (weekly_target × ~4.33) — informational |

**KEEP:** engagement_id, hours_logged, last_updated_at

**DROP (Chunk 5, after rename):**
- `hour_cap` (numeric) — replaced by weekly_hour_target inheritance
- `percent_of_cap_used` (numeric) — replaced by utilization_pct
- `overage_detected` (boolean) — concept doesn't exist
- `overage_percent` (numeric) — concept doesn't exist
- `agent_alert_sent` (boolean) — replaced by capacity-management alerts

## 3.6 `operators`

The `operators` table is thin (10 columns). Most operator data lives in `candidate` (38 columns). The May 2026 distinction we want:
- **`candidate`** = pre-admission. Sourced people. Anyone who's been in the funnel. Includes everyone Kevin or Chris has ever talked to.
- **`operators`** = post-admission. People who passed assessment + validation and are in the active pool.

This is mostly already the implicit model — we just need to formalize it and add a few fields.

**ADD columns (Chunk 1):**

| Column | Type | Purpose |
| --- | --- | --- |
| candidate_id | uuid | FK back to the source candidate record |
| pool_admission_date | date | When they were admitted to the pool |
| internal_performance_signal | text | Strong / Conditional — copied from latest assessment |
| primary_assessment_id | uuid | FK to the assessment that admitted them |
| ica_signed_at | timestamptz | When their Independent Contractor Agreement was signed |
| linkedin_url | text | Standard operator data |
| source_channel | text | How they came to us — references source_channels |

**KEEP:** id, user_id, role, seniority, operator_status, hourly_rate, bio, location, created_at, updated_at

**No drops in §3.6** — only additive.

## 3.7 NEW TABLE: `operator_pool_admissions`

Audit trail of pool admission decisions. One row per admission decision (could be re-admission after a 90-day decline waiting period).

```sql
CREATE TABLE operator_pool_admissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id uuid REFERENCES operators(id),
  candidate_id uuid REFERENCES candidate(candidate_id),
  assessment_id uuid REFERENCES assessments(id),
  decision text NOT NULL,  -- Admit / Decline / Decline (validation fail)
  internal_performance_signal text,  -- Strong / Conditional / Below threshold
  decision_date date NOT NULL,
  decided_by uuid REFERENCES users(id),
  decision_notes text,
  ai_recommendation_score numeric,  -- AI's recommended composite at decision time
  ai_recommendation_signal text,    -- AI's recommended signal
  human_overrode_ai boolean DEFAULT false,
  override_reason text,
  created_at timestamptz DEFAULT now()
);
```

This table feeds the Calibration Audit (every 25 assessments per AI Governance Framework v2.2 §14).

## 3.8 NEW TABLE: `direct_hire_engagements`

Direct-hire (contingency) placements per MSA Exhibit E. These are NOT fractional engagements and follow different lifecycle rules.

```sql
CREATE TABLE direct_hire_engagements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id),
  candidate_id uuid REFERENCES candidate(candidate_id),  -- NOT operators — direct hires aren't pool members
  job_order_id uuid REFERENCES job_orders(id),
  role text NOT NULL,
  base_salary_year_one numeric NOT NULL,
  fee_percent numeric NOT NULL,  -- 0.20 to 0.25 per MSA Exhibit E
  fee_amount numeric NOT NULL,    -- base_salary * fee_percent
  candidate_start_date date NOT NULL,
  invoice_date date NOT NULL,     -- net-30 after start date
  invoice_id uuid REFERENCES invoices(id),
  guarantee_period_days integer DEFAULT 30,
  guarantee_expires_at date,
  guarantee_status text DEFAULT 'active',  -- active / cleared / triggered
  status text DEFAULT 'placed',  -- placed / invoiced / paid / guarantee_triggered / refunded
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## 3.9 NEW TABLE: `conversion_fee_tracking`

Per MSA Exhibit D, conversion fees are a 4-tier tenure-based structure (20%/17%/13%/10%). Tracking the fee owed when a client converts an operator to FTE.

```sql
CREATE TABLE conversion_fee_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  engagement_id uuid REFERENCES engagements(id),
  client_id uuid REFERENCES clients(id),
  operator_id uuid REFERENCES operators(id),
  conversion_date date NOT NULL,
  tenure_months_at_conversion integer NOT NULL,
  conversion_fee_tier integer NOT NULL,  -- 1 (20%), 2 (17%), 3 (13%), 4 (10%)
  fee_percent numeric NOT NULL,
  base_salary_offered numeric NOT NULL,  -- annual base salary client offers operator
  fee_amount numeric NOT NULL,
  three_month_minimum_buyout_applied boolean DEFAULT false,
  tail_period_active boolean DEFAULT true,  -- 12-month tail per MSA
  tail_period_expires_at date,
  invoice_id uuid REFERENCES invoices(id),
  status text DEFAULT 'pending',  -- pending / invoiced / paid / disputed
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## 3.10 NEW TABLE: `mid_engagement_terminations`

Per ICA §3.8, mid-engagement terminations require strict calendar-day proration + 60-day pool priority + discretionary accommodation tracking.

```sql
CREATE TABLE mid_engagement_terminations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  engagement_id uuid REFERENCES engagements(id),
  operator_id uuid REFERENCES operators(id),
  termination_date date NOT NULL,
  termination_initiated_by text NOT NULL,  -- client / operator / firm
  termination_reason text,
  days_in_billing_period integer NOT NULL,
  days_into_billing_period integer NOT NULL,
  prorated_client_refund numeric,
  prorated_operator_pay numeric,
  pool_priority_until_date date NOT NULL,  -- termination_date + 60 days
  accommodation_offered text,  -- discretionary, free-text
  accommodation_status text,
  notes text,
  created_at timestamptz DEFAULT now()
);
```

## 3.11 NEW TABLE: `operator_referrals`

Per ICA Exhibit B.3, $500 referral split: $250 on referee's ICA signing, $250 on referee's first engagement.

```sql
CREATE TABLE operator_referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_operator_id uuid REFERENCES operators(id),
  referred_candidate_id uuid REFERENCES candidate(candidate_id),
  referred_operator_id uuid REFERENCES operators(id),  -- populated when admitted
  referral_date date NOT NULL,
  ica_signing_bonus_amount numeric DEFAULT 250,
  ica_signing_bonus_paid_at timestamptz,
  first_engagement_bonus_amount numeric DEFAULT 250,
  first_engagement_id uuid REFERENCES engagements(id),
  first_engagement_bonus_paid_at timestamptz,
  total_paid numeric GENERATED ALWAYS AS (
    COALESCE(ica_signing_bonus_amount, 0) * (CASE WHEN ica_signing_bonus_paid_at IS NOT NULL THEN 1 ELSE 0 END) +
    COALESCE(first_engagement_bonus_amount, 0) * (CASE WHEN first_engagement_bonus_paid_at IS NOT NULL THEN 1 ELSE 0 END)
  ) STORED,
  status text DEFAULT 'active',  -- active / partial_paid / fully_paid / candidate_withdrew
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## 3.12 NEW TABLE: `ai_compliance_audit_log`

Per AI Governance Framework v2.2 §14, every 25 completed assessments triggers a calibration audit. This table records each audit event.

```sql
CREATE TABLE ai_compliance_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_date date NOT NULL,
  audit_trigger text NOT NULL,  -- '25_assessment_milestone' / 'ad_hoc' / 'rubric_change'
  assessments_audited integer NOT NULL,
  assessment_ids uuid[],  -- the specific assessments re-scored
  drift_detected boolean DEFAULT false,
  drift_details jsonb,    -- which dimensions, how much drift, by role
  rubric_adjustment_made boolean DEFAULT false,
  rubric_change_description text,
  scoring_prompt_version_before text,
  scoring_prompt_version_after text,
  auditor uuid REFERENCES users(id),
  notes text,
  created_at timestamptz DEFAULT now()
);
```

# 4. Enum Changes

## 4.1 New enum to ADD (Chunk 1)

```sql
CREATE TYPE allocation_label_enum AS ENUM ('Foundation', 'Growth', 'Scale', 'Embedded');
CREATE TYPE pool_admission_decision_enum AS ENUM ('Admit', 'Decline', 'Decline (validation fail)', 'Pending validation', 'Not scored');
CREATE TYPE internal_performance_signal_enum AS ENUM ('Strong', 'Conditional', 'Below threshold', 'Pending validation', 'n/a', 'Not scored');
CREATE TYPE engagement_phase_enum AS ENUM ('kickoff', 'active', 'wind-down', 'completed');
```

## 4.2 Enums to MODIFY (Chunk 1 — add values; Chunk 5 — remove old values)

**`operator_profile_status_enum`** currently includes `Tiered`. May 2026: replace with `Pool Admitted`.

```sql
-- Chunk 1: add new value (PostgreSQL allows ALTER TYPE ADD VALUE)
ALTER TYPE operator_profile_status_enum ADD VALUE 'Pool Admitted' AFTER 'Human Validation';

-- Chunk 3: backfill any operators with status 'Tiered' to 'Pool Admitted'
UPDATE operators SET operator_status = 'Pool Admitted' WHERE operator_status = 'Tiered';
-- (Note: this assumes operator_status is the column. May actually be operator_profile_status — verify in chunk execution.)

-- Chunk 5: PostgreSQL doesn't natively support REMOVE VALUE from enum. 
-- Workaround: rename old column, create new column with new enum, copy data, drop old column.
-- Detailed steps in Chunk 5 SQL.
```

**`client_pipeline_stage_enum`** currently includes `Activation Fee Paid`. May 2026: replace with `MSA Signed`.

```sql
-- Chunk 1: add new value
ALTER TYPE client_pipeline_stage_enum ADD VALUE 'MSA Signed' AFTER 'Diagnostic Complete';

-- Chunk 3: backfill any clients with stage 'Activation Fee Paid' to 'MSA Signed'
UPDATE clients SET pipeline_stage = 'MSA Signed' WHERE pipeline_stage = 'Activation Fee Paid';
-- (Note: clients table currently has 7 columns including no pipeline_stage — verify in chunk execution which table this enum is actually used on)

-- Chunk 5: same workaround as above to remove the old value.
```

## 4.3 Enums to RETIRE (Chunk 5)

**`activation_fee_status_enum`** — entire concept retired. Verify no columns reference it before dropping.

```sql
-- Chunk 5 (after verification):
DROP TYPE activation_fee_status_enum;
```

**`retainer_tier_enum`** — values are correct (Foundation/Growth/Scale/Embedded) but the *name* implies the retired tier system. Two options:

- **Option A:** Leave name as-is, just use it for allocation_label fields. Avoids rename risk; semantics handled in column naming.
- **Option B (recommended):** Rename to `allocation_label_enum` for clarity. PostgreSQL supports `ALTER TYPE ... RENAME TO ...` cleanly.

I'll go with Option B in Chunk 5 — clean naming matters for long-term maintainability.

# 5. RLS Policies (Chunk 4)

For new tables, replicate the standard RLS pattern already in use:
- Service role: full access
- Authenticated users: SELECT only
- Admin users (per `is_admin()` helper from migration 20260417151054): full access on operational tables

For modified existing tables, no RLS changes needed in the migration itself (existing policies don't reference the columns being added/dropped).

# 6. Helper Functions (Chunk 4)

## 6.1 `calculate_monthly_operator_fee(weekly_hours, hourly_rate)`

Returns the fixed monthly operator fee per V8 architecture: `ROUND((weekly_hours × hourly_rate × 52 / 12) / 25, 0) × 25`.

```sql
CREATE OR REPLACE FUNCTION calculate_monthly_operator_fee(weekly_hours integer, hourly_rate numeric)
RETURNS numeric
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN ROUND((weekly_hours * hourly_rate * 52.0 / 12.0) / 25.0, 0) * 25.0;
END;
$$;
```

## 6.2 `get_engagement_phase(engagement_id)`

Returns the current phase based on `start_date`, `end_date`, and current date. Used by Retool to show the right UI state.

```sql
CREATE OR REPLACE FUNCTION get_engagement_phase(eid uuid)
RETURNS text
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  e_start date;
  e_end date;
  days_in integer;
BEGIN
  SELECT start_date, end_date INTO e_start, e_end FROM engagements WHERE id = eid;
  IF e_start IS NULL THEN RETURN 'kickoff'; END IF;
  days_in := CURRENT_DATE - e_start;
  IF days_in < 30 THEN RETURN 'kickoff';
  ELSIF e_end IS NOT NULL AND e_end - CURRENT_DATE <= 14 THEN RETURN 'wind-down';
  ELSE RETURN 'active';
  END IF;
END;
$$;
```

## 6.3 `get_conversion_fee_tier(tenure_months)`

Returns the tenure-based fee tier per MSA Exhibit D.

```sql
CREATE OR REPLACE FUNCTION get_conversion_fee_tier(tenure_months integer)
RETURNS TABLE(tier integer, fee_percent numeric)
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN QUERY SELECT
    CASE
      WHEN tenure_months <= 3 THEN 1
      WHEN tenure_months <= 9 THEN 2
      WHEN tenure_months <= 18 THEN 3
      ELSE 4
    END,
    CASE
      WHEN tenure_months <= 3 THEN 0.20
      WHEN tenure_months <= 9 THEN 0.17
      WHEN tenure_months <= 18 THEN 0.13
      ELSE 0.10
    END;
END;
$$;
```

# 7. Backfill Operations (Chunk 3)

## 7.1 Backfill `engagements`

For the 2 existing engagement records, populate new fields based on existing data:

```sql
-- Map old tier → new allocation_label
UPDATE engagements SET 
  allocation_label = CASE 
    WHEN tier IN ('Foundation', 'Tier 1') THEN 'Foundation'
    WHEN tier IN ('Growth', 'Tier 2') THEN 'Growth'
    WHEN tier IN ('Scale', 'Tier 3') THEN 'Scale'
    WHEN tier = 'Embedded' THEN 'Embedded'
    ELSE NULL
  END,
  weekly_hour_allocation = CASE 
    WHEN hour_cap = 20 OR tier IN ('Foundation', 'Tier 1') THEN 5
    WHEN hour_cap = 40 OR tier IN ('Growth', 'Tier 2') THEN 10
    WHEN hour_cap = 60 OR tier IN ('Scale', 'Tier 3') THEN 15
    WHEN hour_cap = 80 OR tier = 'Embedded' THEN 20
    ELSE NULL
  END;

-- Calculate monthly_operator_fee using helper function
UPDATE engagements SET 
  monthly_operator_fee = calculate_monthly_operator_fee(weekly_hour_allocation, operator_hourly_rate)
WHERE weekly_hour_allocation IS NOT NULL AND operator_hourly_rate IS NOT NULL;

-- Set engagement_phase based on dates
UPDATE engagements SET engagement_phase = get_engagement_phase(id);
```

## 7.2 Seed `pricing_catalog`

12 INSERT statements with V8 values (full data shown in §3.3 above). One-time seed.

## 7.3 Backfill `assessments`

```sql
-- Map old tier → pool_admission_decision + internal_performance_signal
UPDATE assessments SET 
  pool_admission_decision = CASE 
    WHEN tier IN ('Tier 1', 'Tier 2') THEN 'Admit'
    WHEN tier = 'Tier 3' THEN 'Decline'
    WHEN tier = 'Tier 3 (validation fail)' THEN 'Decline (validation fail)'
    WHEN tier = 'Pending validation' THEN 'Pending validation'
    ELSE 'Not scored'
  END,
  internal_performance_signal = CASE 
    WHEN tier = 'Tier 1' THEN 'Strong'
    WHEN tier = 'Tier 2' THEN 'Conditional'
    ELSE 'n/a'
  END;
```

## 7.4 Backfill `operators`

```sql
-- Set internal_performance_signal from latest assessment
UPDATE operators o SET internal_performance_signal = a.internal_performance_signal
FROM assessments a
WHERE a.operator_id = o.id
  AND a.completed_date = (SELECT MAX(completed_date) FROM assessments WHERE operator_id = o.id);

-- Set pool_admission_date from earliest assessment with Admit decision
UPDATE operators o SET pool_admission_date = a.completed_date::date
FROM assessments a
WHERE a.operator_id = o.id
  AND a.pool_admission_decision = 'Admit'
  AND a.completed_date = (SELECT MIN(completed_date) FROM assessments 
                          WHERE operator_id = o.id AND pool_admission_decision = 'Admit');
```

# 8. What Gets Verified Between Chunks

After each chunk, Claude runs verification queries and reports results to Kevin:

**After Chunk 1:**
- New columns exist on engagements/assessments/job_orders/operators with NULL defaults
- New enums exist with correct values
- No data was modified (additive only)
- Existing rows still have all original column values

**After Chunk 2:**
- 6 new tables exist with correct schemas
- pricing_catalog has been recreated (verify column list)
- Foreign keys all resolve correctly
- All new tables have RLS enabled

**After Chunk 3:**
- pricing_catalog has 12 seed rows with correct values
- engagements (2 rows) have allocation_label, weekly_hour_allocation, monthly_operator_fee populated
- assessments rows have pool_admission_decision and internal_performance_signal populated
- operators rows have internal_performance_signal copied from latest assessment

**After Chunk 4:**
- New RLS policies exist on all 6 new tables
- Helper functions return expected values for sample inputs

**After Chunk 5 (DESTRUCTIVE):**
- Stale columns dropped successfully
- Stale enum values removed
- `hour_cap_tracking` renamed to `engagement_utilization`
- `retainer_tier_enum` renamed to `allocation_label_enum`
- All foreign keys still resolve
- Spot-check Retool against the post-DROP schema to confirm nothing breaks

# 9. Rollback Strategy

For each chunk, the rollback approach:

| Chunk | Rollback approach |
| --- | --- |
| 1 | DROP COLUMN for additive columns; DROP TYPE for new enums. Loses no data. |
| 2 | DROP TABLE for new tables (lose any data added between chunk and rollback). pricing_catalog rollback re-creates the original column shape but loses seed data. |
| 3 | UPDATE statements that null out new fields. The old column data was never touched, so it's still there. |
| 4 | DROP POLICY and DROP FUNCTION. |
| 5 | **Hard to roll back fully.** Once a column is dropped, restoring requires either Supabase's point-in-time recovery (depending on plan), or re-running the migration backwards from a backup. This is why Chunk 5 is the last step and only happens after full verification. |

Recommended: Take a Supabase database backup before Chunk 5 specifically. Supabase Pro plan includes daily backups; Free plan requires manual `pg_dump`.

# 10. What Happens After Migration

Once all 5 chunks are applied, the database matches May 2026 architecture. Then:

1. **Retool rebuild** — Update Retool screens to query new fields. Likely scope: pricing UI, engagement detail view, assessment detail view, job order intake form, operator profile. Estimated 1-2 sprints depending on Retool current state.

2. **Test conversation infrastructure** — The schema now supports running real assessments end-to-end. Combined with the COO + CMO + updated CFO scoring workbooks already built, you have the data infrastructure to run test assessments.

3. **Phase 1 ATS Sheets retirement** — The Phase 1 Sheets ATS (`/mnt/project/Phase1_Sheets_ATS_v1.xlsx`) becomes redundant once Retool is rebuilt against the new schema. Plan: keep Sheets ATS in parallel for the first 3-5 placements as backup, then formally retire.

4. **Document updates** — A few documents will reference the old schema and need updating:
   - Operations Playbook V8 (already updated for May 2026 decisions, but may have lingering references)
   - Master System Specification (deferred per memory until ~placement 10)
   - V8 Supabase Implementation Guide (will need refresh)

# 11. Open Questions for Kevin Before Approval

Before I begin Chunk 1, please confirm or correct:

| Question | My recommendation |
| --- | --- |
| Should I rename `retainer_tier_enum` to `allocation_label_enum` in Chunk 5 (clean) or leave as-is (safe)? | Rename — clean naming prevents future confusion |
| Should `engagement_utilization` (renamed from `hour_cap_tracking`) be kept at all, or dropped entirely? | Keep — utilization data informs capacity management and pricing tier upgrades |
| Should the `candidate` table be considered the canonical pre-admission record, with `operators` being the post-admission record? | Yes — formalize this. The 38-column candidate table already serves this role; we just add an FK from operators.candidate_id |
| Should the `presentations` table get an `assessment_role` field too for matching downstream? | Probably yes, but out of scope for this migration. Add to a follow-up if needed. |
| Are there any production data values I should preserve that I might have missed? | Test data only per existing memory — no real client/operator data yet. Confirm. |

# 12. Summary Table — All Schema Changes

| Object | Change | Chunk |
| --- | --- | --- |
| engagements.allocation_label | ADD | 1 |
| engagements.weekly_hour_allocation | ADD | 1 |
| engagements.monthly_operator_fee | ADD | 1 |
| engagements.engagement_phase | ADD | 1 |
| engagements.direct_hire_engagement_id | ADD | 1 |
| engagements.tier | DROP | 5 |
| engagements.hour_cap | DROP | 5 |
| engagements.overage_policy | DROP | 5 |
| assessments.assessment_role | ADD | 1 |
| assessments.assessment_scenario_version | ADD | 1 |
| assessments.pool_admission_decision | ADD | 1 |
| assessments.internal_performance_signal | ADD | 1 |
| assessments.tier | DROP | 5 |
| job_orders.allocation_preference | ADD | 1 |
| job_orders.monthly_retainer_min | ADD | 1 |
| job_orders.monthly_retainer_max | ADD | 1 |
| job_orders.tier_preference | DROP | 5 |
| job_orders.hour_cap_preference | DROP | 5 |
| operators.candidate_id | ADD | 1 |
| operators.pool_admission_date | ADD | 1 |
| operators.internal_performance_signal | ADD | 1 |
| operators.primary_assessment_id | ADD | 1 |
| operators.ica_signed_at | ADD | 1 |
| operators.linkedin_url | ADD | 1 |
| operators.source_channel | ADD | 1 |
| pricing_catalog | RECREATE | 2 |
| pricing_catalog seed | INSERT 12 rows | 3 |
| operator_pool_admissions | NEW TABLE | 2 |
| direct_hire_engagements | NEW TABLE | 2 |
| conversion_fee_tracking | NEW TABLE | 2 |
| mid_engagement_terminations | NEW TABLE | 2 |
| operator_referrals | NEW TABLE | 2 |
| ai_compliance_audit_log | NEW TABLE | 2 |
| hour_cap_tracking → engagement_utilization | RENAME + refactor | 1 (add cols), 5 (rename + drop cols) |
| allocation_label_enum | NEW TYPE | 1 |
| pool_admission_decision_enum | NEW TYPE | 1 |
| internal_performance_signal_enum | NEW TYPE | 1 |
| engagement_phase_enum | NEW TYPE | 1 |
| operator_profile_status_enum | ADD VALUE 'Pool Admitted'; remove 'Tiered' | 1 (add), 5 (remove) |
| client_pipeline_stage_enum | ADD VALUE 'MSA Signed'; remove 'Activation Fee Paid' | 1 (add), 5 (remove) |
| retainer_tier_enum → allocation_label_enum | RENAME | 5 |
| activation_fee_status_enum | DROP | 5 |
| calculate_monthly_operator_fee(...) | NEW FUNCTION | 4 |
| get_engagement_phase(...) | NEW FUNCTION | 4 |
| get_conversion_fee_tier(...) | NEW FUNCTION | 4 |

**Total operations:** 30 ADD COLUMN, 8 DROP COLUMN, 6 NEW TABLE, 1 RECREATE TABLE, 1 RENAME TABLE, 4 NEW TYPE, 2 MODIFY TYPE, 1 RENAME TYPE, 1 DROP TYPE, 12 INSERT (pricing seed), 3 NEW FUNCTION, ~15 backfill UPDATE statements, ~12 new RLS policies.

# 13. Next Step

**Kevin reviews this document.** Push back on anything that surprises you, ask questions about anything that's unclear, identify anything I missed.

Once approved, Claude applies Chunk 1 and reports back. Then Chunk 2. Then Chunk 3. Then Chunk 4. Pause before Chunk 5 until Retool rebuild is complete.

The goal is that nothing in this database changes without you having understood the change first.
