-- 极限二选一：PostgreSQL / Supabase MVP schema
-- 在 Supabase SQL Editor 中执行后，把项目 URL 与 anon key 填入 config.js。

create extension if not exists pgcrypto;

create table if not exists public.brackets (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 30),
  emoji text not null default '✨' check (char_length(emoji) <= 16),
  description text not null default '',
  items jsonb not null check (
    jsonb_typeof(items) = 'array'
    and jsonb_array_length(items) between 4 and 128
  ),
  author_name text check (char_length(author_name) <= 20),
  visibility text not null default 'public' check (visibility in ('public', 'unlisted', 'private')),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  play_count bigint not null default 0 check (play_count >= 0),
  champion_counts jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  bracket_id uuid references public.brackets(id) on delete set null,
  bracket_title text not null check (char_length(bracket_title) between 1 and 30),
  bracket_emoji text not null default '✨',
  author_name text check (char_length(author_name) <= 20),
  initial_items jsonb not null check (
    jsonb_typeof(initial_items) = 'array'
    and jsonb_array_length(initial_items) between 4 and 128
  ),
  rounds jsonb not null check (jsonb_typeof(rounds) = 'array'),
  winner text not null,
  created_at timestamptz not null default now()
);

create index if not exists brackets_public_popular_idx
  on public.brackets (play_count desc, created_at desc)
  where visibility = 'public' and status = 'approved';

create index if not exists results_bracket_created_idx
  on public.results (bracket_id, created_at desc);

-- 结果写入后原子累加游玩次数和冠军票数，避免客户端并发覆盖。
create or replace function public.count_completed_result()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.bracket_id is not null then
    update public.brackets
    set play_count = play_count + 1,
        champion_counts = jsonb_set(
          champion_counts,
          array[new.winner],
          to_jsonb(coalesce((champion_counts ->> new.winner)::bigint, 0) + 1),
          true
        ),
        updated_at = now()
    where id = new.bracket_id;
  end if;
  return new;
end;
$$;

drop trigger if exists results_count_winner on public.results;
create trigger results_count_winner
after insert on public.results
for each row execute function public.count_completed_result();

alter table public.brackets enable row level security;
alter table public.results enable row level security;

-- 所有人可以读取已审核的公开题库；未列出题库通过结果链接访问。
create policy "read approved public brackets"
on public.brackets for select
using (visibility = 'public' and status = 'approved');

-- MVP 允许匿名投稿，但只能进入 pending，不能自行伪造热度或审核状态。
create policy "submit pending brackets"
on public.brackets for insert
with check (
  status = 'pending'
  and play_count = 0
  and champion_counts = '{}'::jsonb
  and visibility in ('public', 'unlisted')
);

-- 分享页需要公开读取结果；生产环境可增加过期/举报字段与限流。
create policy "read shared results"
on public.results for select
using (true);

create policy "submit completed results"
on public.results for insert
with check (
  jsonb_array_length(initial_items) between 4 and 128
  and winner = any (select jsonb_array_elements_text(initial_items))
);

grant select, insert on public.brackets to anon, authenticated;
grant select, insert on public.results to anon, authenticated;

-- 官方示例题库使用固定 ID，确保网页里的完成结果会累计到同一榜单。
insert into public.brackets
  (id, title, emoji, description, items, author_name, visibility, status, play_count, champion_counts)
values
  (
    '11111111-1111-4111-8111-111111111111', '同人女极限二选一', '🪶', '16 个经典设定 · 看看你的终极取向',
    '["ABO","武侠江湖","宗门修仙","黑帮","花吐症","Fork & Cake","Hurt / Comfort","古风权谋","都市现代","灵魂互换","前世今生","末世","无限流","青梅竹马","欢喜冤家","宿敌变情人"]'::jsonb,
    'degree', 'public', 'approved', 12843, '{"宿敌变情人":2841,"Hurt / Comfort":2316,"青梅竹马":1789}'::jsonb
  ),
  (
    '22222222-2222-4222-8222-222222222222', '《汉密尔顿》歌曲淘汰赛', '⭐', '16 首高人气歌曲 · My Shot 还是 Burn？',
    '["Alexander Hamilton","My Shot","The Schuyler Sisters","You''ll Be Back","Satisfied","Wait for It","Guns and Ships","History Has Its Eyes on You","Yorktown","Dear Theodosia","Non-Stop","What''d I Miss","The Room Where It Happens","Burn","It''s Quiet Uptown","Who Lives, Who Dies, Who Tells Your Story"]'::jsonb,
    'Broadway 茶水间', 'public', 'approved', 7632, '{"Wait for It":1920,"Satisfied":1741,"Burn":988}'::jsonb
  ),
  (
    '33333333-3333-4333-8333-333333333333', '《摩门经》歌曲淘汰赛', '📖', '16 首原声歌曲 · 选出你的循环单曲',
    '["Hello!","Two by Two","You and Me (But Mostly Me)","Hasa Diga Eebowai","Turn It Off","I Am Here for You","All-American Prophet","Sal Tlay Ka Siti","Man Up","Making Things Up Again","Spooky Mormon Hell Dream","I Believe","Baptize Me","I Am Africa","Joseph Smith American Moses","Tomorrow Is a Latter Day"]'::jsonb,
    '音乐剧观察员', 'public', 'approved', 4196, '{"Turn It Off":1132,"I Believe":987,"Hello!":621}'::jsonb
  ),
  (
    '44444444-4444-4444-8444-444444444444', '同人女右位 XP 二选一', '➡️', '48 种角色属性 · 选出你的右位终极 XP',
    '["轻浮佬","重力系","小太阳","冰山","傲娇","直球","高敏","娇纵","黑切白","白切黑","天然呆","三无","心机","嘴毒","病弱","身强体壮","美人","糙汉","失眠症","嗜睡","中二病","电竞","恋旧","喜新厌旧","黏人","回避","温和","无情","冷脸萌","热脸蛋","成熟","幼稚","高情商","低情商","s","m","自私","无私","隐忍","放纵","自恋","自卑","绿茶","海王","颜控","醋精","霸总","暴君"]'::jsonb,
    'xhs@一只不眠喵', 'public', 'approved', 0, '{}'::jsonb
  ),
  (
    '55555555-5555-4555-8555-555555555555', '同人女左位 XP 二选一', '⬅️', '48 种角色属性 · 选出你的左位终极 XP',
    '["轻浮佬","重力系","小太阳","冰山","傲娇","直球","高敏","娇纵","黑切白","白切黑","天然呆","三无","心机","嘴毒","病弱","身强体壮","美人","糙汉","失眠症","嗜睡","中二病","电竞","恋旧","喜新厌旧","黏人","回避","温和","无情","冷脸萌","热脸蛋","成熟","幼稚","高情商","低情商","s","m","自私","无私","隐忍","放纵","自恋","自卑","绿茶","海王","颜控","醋精","霸总","暴君"]'::jsonb,
    'xhs@一只不眠喵', 'public', 'approved', 0, '{}'::jsonb
  ),
  (
    '66666666-6666-4666-8666-666666666666', '喜人作品二选一', '🎭', '128 部喜剧作品 · 选出你的终极喜人作品',
    '["回音山谷","十上有难事？！","年会必须停","史密斯再就业","等一下","小镇青年","拜拜啦地球","拳村的希望","下江南","奈何桥北","亲情保卫战","绝命双子星","当考试还剩15分钟","大考结束那一天","有倩有谋","安可","抢婚吧哥们儿","堡大招风","千年就一回","密室大作战","警察和我","66号公路","音乐课最重要","前任特工","我的唯一","严言交通","饭局往事","花园网吧","全民运动会","排练疯云","老同学显摆大会","风云再起","两兄弟牛排店","渡口","足球小哥","妈呀！新老师","破风","兴帮往事","天台告白","恋恋火锅店","我要当rapper","爱赢才会拼","进化论","坏小子","少爷和我","拜访城堡","我的伴娘","军事恋盟","今天你要嫁给他","旧警察故事","小学生作文有画面了","雷欧雷农场","大侠别动手","再见爱人","抽屉里的猫","一起去露营","生日备忘录","旧矿工故事","一方青苔","最后的铸剑师","顶顶好餐厅","德古拉和我","忘不了","少爷和小姐","秘密","救舅大状师","爱在飞机降落前","乐园停业那一天","开学第一天","史上第一大劫案","新默剧","技能五子棋","真假美猴王","尤莉娅别哭","妈妈蜜呀","最后一站","那天我在楼顶","小品的世界","吐槽吧，吕小严","飞驰余生","棒棒小卖部","虎父无犬子","龙袍替身","一颗螺丝钉","天放的方舟","与神同行","拆弹专家","逃离疯人院","白日梦想家庭","没有学习的人不伤心","盲盒总动员","空城计","公主小哥","西楚霸王","默契怪盗","冷不丁梆梆就两拳","超越机器人","八十一难","主角光环","复活军团","世纪2000大舞厅","课间十分钟","贝多芬","醉人奇妙夜","哥的全宇宙","心动的信号","合影这件小事","再见老张","羊来咯","孤注一掷","再见噶尔波","今天不易出门","当一个女人决定退鞋","越狱的夏天","超快乐男孩","遇人不赎","财神来敲我家门","万松书院","断片山","三顾茅庐","头号玩家","领养日","外星人的婚礼","今天不易破案","熟人奇妙夜","四个大人","笑话一则","Hello！厂状元！"]'::jsonb,
    'xhs@没有wifi也没有流量', 'public', 'approved', 0, '{}'::jsonb
  )
on conflict (id) do nothing;
