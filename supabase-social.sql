-- ============================================================
-- 社交对比功能通用后端（梯度共识 / 小众引擎 / 成就清单 共用）
-- 在 Supabase SQL Editor 整段执行一次即可，可安全重复运行。
-- ============================================================

-- 通用计数表：一行 = 某个作用域(scope)下某个选项(item)在某个桶(bucket)里的累计次数
-- 例：梯度共识 scope='tier:<bracket_id>', item='螺蛳粉', bucket='S'
create table if not exists public.stat_counters (
  scope  text   not null,
  item   text   not null,
  bucket text   not null,
  count  bigint not null default 0,
  updated_at timestamptz not null default now(),
  primary key (scope, item, bucket)
);

alter table public.stat_counters enable row level security;

-- 匿名可读（用于展示全站分布 / 共识）
drop policy if exists "read stat_counters" on public.stat_counters;
create policy "read stat_counters" on public.stat_counters
  for select using (true);

grant select on public.stat_counters to anon, authenticated;

-- 自增函数：接收一个 JSON 数组，逐条 +1。
-- 只做累加、无法读改删其它数据；每条固定 +1（忽略客户端传入的增量），单次最多 300 条，防刷。
create or replace function public.bump_counters(rows jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  r jsonb;
  n int := 0;
begin
  if rows is null or jsonb_typeof(rows) <> 'array' then
    return;
  end if;
  for r in select value from jsonb_array_elements(rows) as value
  loop
    n := n + 1;
    exit when n > 300;
    if coalesce(r->>'scope','') = '' or coalesce(r->>'item','') = '' or coalesce(r->>'bucket','') = '' then
      continue;
    end if;
    insert into public.stat_counters (scope, item, bucket, count, updated_at)
    values (left(r->>'scope',120), left(r->>'item',160), left(r->>'bucket',24), 1, now())
    on conflict (scope, item, bucket)
    do update set count = public.stat_counters.count + 1, updated_at = now();
  end loop;
end;
$$;

grant execute on function public.bump_counters(jsonb) to anon, authenticated;
