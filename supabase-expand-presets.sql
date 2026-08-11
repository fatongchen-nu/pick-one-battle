-- 在现有 Supabase 项目的 SQL Editor 中执行一次：
-- 补全 Hamilton，确认 Book of Mormon，并加入 DEH、EPIC、漫威角色与中式小吃。

insert into public.brackets
  (id, title, emoji, description, items, author_name, visibility, status, play_count, champion_counts)
values
  (
    '22222222-2222-4222-8222-222222222222', '《汉密尔顿》歌曲淘汰赛', '⭐', '46 首原版卡司专辑曲目 · My Shot 还是 Burn？',
    $json$["Alexander Hamilton","Aaron Burr, Sir","My Shot","The Story of Tonight","The Schuyler Sisters","Farmer Refuted","You'll Be Back","Right Hand Man","A Winter's Ball","Helpless","Satisfied","The Story of Tonight (Reprise)","Wait for It","Stay Alive","Ten Duel Commandments","Meet Me Inside","That Would Be Enough","Guns and Ships","History Has Its Eyes on You","Yorktown (The World Turned Upside Down)","What Comes Next?","Dear Theodosia","Non-Stop","What'd I Miss","Cabinet Battle #1","Take a Break","Say No to This","The Room Where It Happens","Schuyler Defeated","Cabinet Battle #2","Washington on Your Side","One Last Time","I Know Him","The Adams Administration","We Know","Hurricane","The Reynolds Pamphlet","Burn","Blow Us All Away","Stay Alive (Reprise)","It's Quiet Uptown","The Election of 1800","Your Obedient Servant","Best of Wives and Best of Women","The World Was Wide Enough","Who Lives, Who Dies, Who Tells Your Story"]$json$::jsonb,
    'Broadway 茶水间', 'public', 'approved', 7632, '{"Wait for It":1920,"Satisfied":1741,"Burn":988}'::jsonb
  ),
  (
    '33333333-3333-4333-8333-333333333333', '《摩门经》歌曲淘汰赛', '📖', '16 首原声歌曲 · 选出你的循环单曲',
    $json$["Hello!","Two by Two","You and Me (But Mostly Me)","Hasa Diga Eebowai","Turn It Off","I Am Here for You","All-American Prophet","Sal Tlay Ka Siti","Man Up","Making Things Up Again","Spooky Mormon Hell Dream","I Believe","Baptize Me","I Am Africa","Joseph Smith American Moses","Tomorrow Is a Latter Day"]$json$::jsonb,
    '音乐剧观察员', 'public', 'approved', 4196, '{"Turn It Off":1132,"I Believe":987,"Hello!":621}'::jsonb
  ),
  (
    '77777777-7777-4777-8777-777777777777', '《Dear Evan Hansen》歌曲淘汰赛', '💙', '14 首原版卡司专辑曲目 · You Will Be Found',
    $json$["Anybody Have a Map?","Waving Through a Window","For Forever","Sincerely, Me","Requiem","If I Could Tell Her","Disappear","You Will Be Found","To Break in a Glove","Only Us","Good for You","Words Fail","So Big / So Small","Finale"]$json$::jsonb,
    'Broadway 茶水间', 'public', 'approved', 0, '{}'::jsonb
  ),
  (
    '88888888-8888-4888-8888-888888888888', '《EPIC》全曲淘汰赛', '🌊', '40 首官方完整概念专辑曲目 · 九大 Saga 一次选完',
    $json$["The Horse and the Infant","Just a Man","Full Speed Ahead","Open Arms","Warrior of the Mind","Polyphemus","Survive","Remember Them","My Goodbye","Storm","Luck Runs Out","Keep Your Friends Close","Ruthlessness","Puppeteer","Wouldn't You Like","Done For","There Are Other Ways","The Underworld","No Longer You","Monster","Suffering","Different Beast","Scylla","Mutiny","Thunder Bringer","Legendary","Little Wolf","We'll Be Fine","Love in Paradise","God Games","Not Sorry for Loving You","Dangerous","Charybdis","Get in the Water","Six Hundred Strike","The Challenge","Hold Them Down","Odysseus","I Can't Help but Wonder","Would You Fall in Love with Me Again"]$json$::jsonb,
    '音乐剧观察员', 'public', 'approved', 0, '{}'::jsonb
  ),
  (
    '99999999-9999-4999-8999-999999999999', '漫威角色人气战', '🦸', '64 位漫威影视角色 · 英雄反派一起上场',
    $json$["钢铁侠 Tony Stark","美国队长 Steve Rogers","雷神 Thor","浩克 Bruce Banner","黑寡妇 Natasha Romanoff","鹰眼 Clint Barton","蜘蛛侠 Peter Parker","奇异博士 Stephen Strange","黑豹 T'Challa","惊奇队长 Carol Danvers","绯红女巫 Wanda Maximoff","幻视 Vision","猎鹰 Sam Wilson","冬兵 Bucky Barnes","战争机器 James Rhodes","蚁人 Scott Lang","黄蜂女 Hope van Dyne","星爵 Peter Quill","卡魔拉 Gamora","毁灭者 Drax","火箭浣熊 Rocket","格鲁特 Groot","螳螂女 Mantis","星云 Nebula","洛基 Loki","尼克·弗瑞 Nick Fury","菲尔·科尔森 Phil Coulson","玛丽亚·希尔 Maria Hill","尚气 Shang-Chi","凯蒂 Katy","叶莲娜 Yelena Belova","凯特·毕肖普 Kate Bishop","月光骑士 Marc Spector","惊奇少女 Kamala Khan","女浩克 Jennifer Walters","夜魔侠 Matt Murdock","惩罚者 Frank Castle","杰茜卡·琼斯 Jessica Jones","卢克·凯奇 Luke Cage","铁拳 Danny Rand","阿加莎 Agatha Harkness","死侍 Wade Wilson","金刚狼 Logan","莫妮卡·兰博 Monica Rambeau","美国小姐 America Chavez","王 Wong","奥克耶 Okoye","苏睿 Shuri","姆巴库 M'Baku","瓦尔基里 Valkyrie","科尔格 Korg","简·福斯特 Jane Foster","佩吉·卡特 Peggy Carter","霍华德·斯塔克 Howard Stark","佩珀·波茨 Pepper Potts","哈皮·霍根 Happy Hogan","灭霸 Thanos","齐尔蒙格 Killmonger","海拉 Hela","奥创 Ultron","绿魔 Green Goblin","章鱼博士 Doctor Octopus","神秘客 Mysterio","文武 Wenwu"]$json$::jsonb,
    '极限二选一编辑部', 'public', 'approved', 0, '{}'::jsonb
  ),
  (
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', '中式小吃二选一', '🥟', '64 种街头与地方小吃 · 空腹慎入',
    $json$["煎饼果子","肉夹馍","臭豆腐","烤冷面","麻辣烫","串串香","螺蛳粉","热干面","肠粉","生煎包","小笼包","锅贴","水煎包","灌汤包","叉烧包","蛋挞","鸡蛋仔","章鱼小丸子","手抓饼","葱油饼","韭菜盒子","糖油粑粑","糍粑","驴打滚","艾窝窝","豌豆黄","冰糖葫芦","糖炒栗子","烤红薯","凉皮","凉粉","酸辣粉","米线","锅盔","油条","豆浆","豆腐脑","胡辣汤","牛肉粉","馄饨","鸭血粉丝汤","烧麦","粽子","茶叶蛋","卤味","烤串","烤面筋","铁板豆腐","狼牙土豆","炸串","炸鸡排","盐酥鸡","蚵仔煎","大肠包小肠","饭团","凉面","甜水面","担担面","钵钵鸡","炒年糕","双皮奶","姜撞奶","杨枝甘露","豆花"]$json$::jsonb,
    '极限二选一编辑部', 'public', 'approved', 0, '{}'::jsonb
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
