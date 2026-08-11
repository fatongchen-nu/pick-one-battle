-- 在现有 Supabase 项目的 SQL Editor 中执行一次：
-- 1. 将题库及结果上限由 64 扩展至 128；2. 加入「喜人作品二选一」。

alter table public.brackets drop constraint if exists brackets_items_check;
alter table public.brackets add constraint brackets_items_check check (
  jsonb_typeof(items) = 'array' and jsonb_array_length(items) between 4 and 128
);

alter table public.results drop constraint if exists results_initial_items_check;
alter table public.results add constraint results_initial_items_check check (
  jsonb_typeof(initial_items) = 'array' and jsonb_array_length(initial_items) between 4 and 128
);

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

drop policy if exists "submit completed results" on public.results;
create policy "submit completed results"
on public.results for insert
with check (
  jsonb_array_length(initial_items) between 4 and 128
  and winner = any (select jsonb_array_elements_text(initial_items))
);

insert into public.brackets
  (id, title, emoji, description, items, author_name, visibility, status, play_count, champion_counts)
values (
  '66666666-6666-4666-8666-666666666666', '喜人作品二选一', '🎭', '128 部喜剧作品 · 选出你的终极喜人作品',
  '["回音山谷","十上有难事？！","年会必须停","史密斯再就业","等一下","小镇青年","拜拜啦地球","拳村的希望","下江南","奈何桥北","亲情保卫战","绝命双子星","当考试还剩15分钟","大考结束那一天","有倩有谋","安可","抢婚吧哥们儿","堡大招风","千年就一回","密室大作战","警察和我","66号公路","音乐课最重要","前任特工","我的唯一","严言交通","饭局往事","花园网吧","全民运动会","排练疯云","老同学显摆大会","风云再起","两兄弟牛排店","渡口","足球小哥","妈呀！新老师","破风","兴帮往事","天台告白","恋恋火锅店","我要当rapper","爱赢才会拼","进化论","坏小子","少爷和我","拜访城堡","我的伴娘","军事恋盟","今天你要嫁给他","旧警察故事","小学生作文有画面了","雷欧雷农场","大侠别动手","再见爱人","抽屉里的猫","一起去露营","生日备忘录","旧矿工故事","一方青苔","最后的铸剑师","顶顶好餐厅","德古拉和我","忘不了","少爷和小姐","秘密","救舅大状师","爱在飞机降落前","乐园停业那一天","开学第一天","史上第一大劫案","新默剧","技能五子棋","真假美猴王","尤莉娅别哭","妈妈蜜呀","最后一站","那天我在楼顶","小品的世界","吐槽吧，吕小严","飞驰余生","棒棒小卖部","虎父无犬子","龙袍替身","一颗螺丝钉","天放的方舟","与神同行","拆弹专家","逃离疯人院","白日梦想家庭","没有学习的人不伤心","盲盒总动员","空城计","公主小哥","西楚霸王","默契怪盗","冷不丁梆梆就两拳","超越机器人","八十一难","主角光环","复活军团","世纪2000大舞厅","课间十分钟","贝多芬","醉人奇妙夜","哥的全宇宙","心动的信号","合影这件小事","再见老张","羊来咯","孤注一掷","再见噶尔波","今天不易出门","当一个女人决定退鞋","越狱的夏天","超快乐男孩","遇人不赎","财神来敲我家门","万松书院","断片山","三顾茅庐","头号玩家","领养日","外星人的婚礼","今天不易破案","熟人奇妙夜","四个大人","笑话一则","Hello！厂状元！"]'::jsonb,
  'xhs@没有wifi也没有流量', 'public', 'approved', 0, '{}'::jsonb
)
on conflict (id) do update set
  title = excluded.title,
  emoji = excluded.emoji,
  description = excluded.description,
  items = excluded.items,
  author_name = excluded.author_name,
  visibility = excluded.visibility,
  status = excluded.status,
  updated_at = now();
