-- 一次性写入内置示例题库的初始游玩数据（十几到几十次的少量基数）。
-- 用法：在 Supabase SQL Editor 执行一次即可。
-- 说明：supabase-schema.sql 的 upsert 有意不覆盖 play_count / champion_counts，
--   所以主 schema 重跑不会影响这里；本文件是独立的一次性操作，
--   执行后玩家正常游玩累计的真实数据会在此基数上继续增加。

update public.brackets set play_count = 47, champion_counts = '{"宿敌变情人":16,"Hurt / Comfort":11,"青梅竹马":9,"欢喜冤家":6,"灵魂互换":5}'::jsonb, updated_at = now() where id = '11111111-1111-4111-8111-111111111111';
update public.brackets set play_count = 38, champion_counts = '{"Wait for It":13,"Satisfied":10,"Burn":8,"Non-Stop":4,"My Shot":3}'::jsonb, updated_at = now() where id = '22222222-2222-4222-8222-222222222222';
update public.brackets set play_count = 24, champion_counts = '{"Turn It Off":9,"I Believe":7,"Hello!":5,"Spooky Mormon Hell Dream":3}'::jsonb, updated_at = now() where id = '33333333-3333-4333-8333-333333333333';
update public.brackets set play_count = 16, champion_counts = '{"Waving Through a Window":6,"You Will Be Found":5,"Words Fail":3,"For Forever":2}'::jsonb, updated_at = now() where id = '77777777-7777-4777-8777-777777777777';
update public.brackets set play_count = 29, champion_counts = '{"Monster":8,"Ruthlessness":6,"God Games":5,"Warrior of the Mind":5,"Different Beast":5}'::jsonb, updated_at = now() where id = '88888888-8888-4888-8888-888888888888';
update public.brackets set play_count = 33, champion_counts = '{"洛基 Loki":9,"死侍 Wade Wilson":7,"蜘蛛侠 Peter Parker":6,"绯红女巫 Wanda Maximoff":6,"钢铁侠 Tony Stark":5}'::jsonb, updated_at = now() where id = '99999999-9999-4999-8999-999999999999';
update public.brackets set play_count = 41, champion_counts = '{"螺蛳粉":10,"肉夹馍":8,"煎饼果子":8,"生煎包":8,"豆花":7}'::jsonb, updated_at = now() where id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
update public.brackets set play_count = 21, champion_counts = '{"白切黑":7,"病弱":5,"傲娇":4,"美人":3,"冰山":2}'::jsonb, updated_at = now() where id = '44444444-4444-4444-8444-444444444444';
update public.brackets set play_count = 19, champion_counts = '{"黑切白":6,"糙汉":5,"直球":4,"身强体壮":2,"暴君":2}'::jsonb, updated_at = now() where id = '55555555-5555-4555-8555-555555555555';
update public.brackets set play_count = 26, champion_counts = '{"少爷和我":7,"史密斯再就业":6,"年会必须停":5,"回音山谷":4,"最后的铸剑师":4}'::jsonb, updated_at = now() where id = '66666666-6666-4666-8666-666666666666';
