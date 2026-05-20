-- Supabase bootstrap schema for Agency app-state persistence.
-- Run this in the Supabase SQL editor before enabling SUPABASE_* env variables.

create table if not exists public.app_state (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists app_state_updated_at_idx on public.app_state (updated_at desc);

-- Security hardening:
-- - Keep app_state server-only
-- - Enable RLS to satisfy Supabase advisor checks
-- - Explicitly block anon/authenticated client roles
-- - Allow backend access through service_role key
alter table public.app_state enable row level security;

revoke all on table public.app_state from anon;
revoke all on table public.app_state from authenticated;
grant all on table public.app_state to service_role;

drop policy if exists app_state_client_block_all on public.app_state;
create policy app_state_client_block_all
on public.app_state
for all
to anon, authenticated
using (false)
with check (false);