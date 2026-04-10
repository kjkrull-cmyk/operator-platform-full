create table if not exists events_raw (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  payload jsonb not null,
  received_at timestamptz default now()
);

create index if not exists idx_events_raw_event_type
  on events_raw(event_type);

create index if not exists idx_events_raw_received_at
  on events_raw(received_at desc);
