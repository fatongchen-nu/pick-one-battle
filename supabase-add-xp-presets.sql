-- 在 Supabase SQL Editor 中单独执行一次，为两套 XP 题库启用永久分享与冠军统计。
insert into public.brackets
  (id, title, emoji, description, items, author_name, visibility, status, play_count, champion_counts)
values
  (
    '44444444-4444-4444-8444-444444444444', '同人女右位 XP 二选一', '➡️', '48 种角色属性 · 选出你的右位终极 XP',
    '["轻浮佬","重力系","小太阳","冰山","傲娇","直球","高敏","娇纵","黑切白","白切黑","天然呆","三无","心机","嘴毒","病弱","身强体壮","美人","糙汉","失眠症","嗜睡","中二病","电竞","恋旧","喜新厌旧","黏人","回避","温和","无情","冷脸萌","热脸蛋","成熟","幼稚","高情商","低情商","s","m","自私","无私","隐忍","放纵","自恋","自卑","绿茶","海王","颜控","醋精","霸总","暴君"]'::jsonb,
    'xhs@一只不眠喵', 'public', 'approved', 0, '{}'::jsonb
  ),
  (
    '55555555-5555-4555-8555-555555555555', '同人女左位 XP 二选一', '⬅️', '48 种角色属性 · 选出你的左位终极 XP',
    '["轻浮佬","重力系","小太阳","冰山","傲娇","直球","高敏","娇纵","黑切白","白切黑","天然呆","三无","心机","嘴毒","病弱","身强体壮","美人","糙汉","失眠症","嗜睡","中二病","电竞","恋旧","喜新厌旧","黏人","回避","温和","无情","冷脸萌","热脸蛋","成熟","幼稚","高情商","低情商","s","m","自私","无私","隐忍","放纵","自恋","自卑","绿茶","海王","颜控","醋精","霸总","暴君"]'::jsonb,
    'xhs@一只不眠喵', 'public', 'approved', 0, '{}'::jsonb
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
