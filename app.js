const PRESETS = [
  {
    id: "fandom",
    remoteId: "11111111-1111-4111-8111-111111111111",
    title: "同人女极限二选一",
    emoji: "🪶",
    description: "16 个经典设定 · 看看你的终极取向",
    author: "xhs@degree", public: true, plays: 47,
    championStats: {"宿敌变情人": 16, "Hurt / Comfort": 11, "青梅竹马": 9, "欢喜冤家": 6, "灵魂互换": 5},
    items: ["ABO", "武侠江湖", "宗门修仙", "黑帮", "花吐症", "Fork & Cake", "Hurt / Comfort", "古风权谋", "都市现代", "灵魂互换", "前世今生", "末世", "无限流", "青梅竹马", "欢喜冤家", "宿敌变情人"]
  },
  {
    id: "hamilton",
    remoteId: "22222222-2222-4222-8222-222222222222",
    title: "《汉密尔顿》歌曲淘汰赛",
    emoji: "⭐",
    description: "46 首原版卡司专辑曲目 · My Shot 还是 Burn？",
    public: true, plays: 38,
    championStats: {"Wait for It": 13, "Satisfied": 10, "Burn": 8, "Non-Stop": 4, "My Shot": 3},
    items: ["Alexander Hamilton", "Aaron Burr, Sir", "My Shot", "The Story of Tonight", "The Schuyler Sisters", "Farmer Refuted", "You'll Be Back", "Right Hand Man", "A Winter's Ball", "Helpless", "Satisfied", "The Story of Tonight (Reprise)", "Wait for It", "Stay Alive", "Ten Duel Commandments", "Meet Me Inside", "That Would Be Enough", "Guns and Ships", "History Has Its Eyes on You", "Yorktown (The World Turned Upside Down)", "What Comes Next?", "Dear Theodosia", "Non-Stop", "What'd I Miss", "Cabinet Battle #1", "Take a Break", "Say No to This", "The Room Where It Happens", "Schuyler Defeated", "Cabinet Battle #2", "Washington on Your Side", "One Last Time", "I Know Him", "The Adams Administration", "We Know", "Hurricane", "The Reynolds Pamphlet", "Burn", "Blow Us All Away", "Stay Alive (Reprise)", "It's Quiet Uptown", "The Election of 1800", "Your Obedient Servant", "Best of Wives and Best of Women", "The World Was Wide Enough", "Who Lives, Who Dies, Who Tells Your Story"]
  },
  {
    id: "book-of-mormon",
    remoteId: "33333333-3333-4333-8333-333333333333",
    title: "《摩门经》歌曲淘汰赛",
    emoji: "📖",
    description: "16 首原声歌曲 · 选出你的循环单曲",
    public: true, plays: 24,
    championStats: {"Turn It Off": 9, "I Believe": 7, "Hello!": 5, "Spooky Mormon Hell Dream": 3},
    items: ["Hello!", "Two by Two", "You and Me (But Mostly Me)", "Hasa Diga Eebowai", "Turn It Off", "I Am Here for You", "All-American Prophet", "Sal Tlay Ka Siti", "Man Up", "Making Things Up Again", "Spooky Mormon Hell Dream", "I Believe", "Baptize Me", "I Am Africa", "Joseph Smith American Moses", "Tomorrow Is a Latter Day"]
  },
  {
    id: "dear-evan-hansen",
    remoteId: "77777777-7777-4777-8777-777777777777",
    title: "《Dear Evan Hansen》歌曲淘汰赛",
    emoji: "💙",
    description: "14 首原版卡司专辑曲目 · You Will Be Found",
    public: true, plays: 16,
    championStats: {"Waving Through a Window": 6, "You Will Be Found": 5, "Words Fail": 3, "For Forever": 2},
    items: ["Anybody Have a Map?", "Waving Through a Window", "For Forever", "Sincerely, Me", "Requiem", "If I Could Tell Her", "Disappear", "You Will Be Found", "To Break in a Glove", "Only Us", "Good for You", "Words Fail", "So Big / So Small", "Finale"]
  },
  {
    id: "epic-the-musical",
    remoteId: "88888888-8888-4888-8888-888888888888",
    title: "《EPIC》全曲淘汰赛",
    emoji: "🌊",
    description: "40 首官方完整概念专辑曲目 · 九大 Saga 一次选完",
    public: true, plays: 29,
    championStats: {"Monster": 8, "Ruthlessness": 6, "God Games": 5, "Warrior of the Mind": 5, "Different Beast": 5},
    items: ["The Horse and the Infant", "Just a Man", "Full Speed Ahead", "Open Arms", "Warrior of the Mind", "Polyphemus", "Survive", "Remember Them", "My Goodbye", "Storm", "Luck Runs Out", "Keep Your Friends Close", "Ruthlessness", "Puppeteer", "Wouldn't You Like", "Done For", "There Are Other Ways", "The Underworld", "No Longer You", "Monster", "Suffering", "Different Beast", "Scylla", "Mutiny", "Thunder Bringer", "Legendary", "Little Wolf", "We'll Be Fine", "Love in Paradise", "God Games", "Not Sorry for Loving You", "Dangerous", "Charybdis", "Get in the Water", "Six Hundred Strike", "The Challenge", "Hold Them Down", "Odysseus", "I Can't Help but Wonder", "Would You Fall in Love with Me Again"]
  },
  {
    id: "marvel-screen-characters",
    remoteId: "99999999-9999-4999-8999-999999999999",
    title: "漫威角色人气战",
    emoji: "🦸",
    description: "64 位漫威影视角色 · 英雄反派一起上场",
    public: true, plays: 33,
    championStats: {"洛基 Loki": 9, "死侍 Wade Wilson": 7, "蜘蛛侠 Peter Parker": 6, "绯红女巫 Wanda Maximoff": 6, "钢铁侠 Tony Stark": 5},
    items: ["钢铁侠 Tony Stark", "美国队长 Steve Rogers", "雷神 Thor", "浩克 Bruce Banner", "黑寡妇 Natasha Romanoff", "鹰眼 Clint Barton", "蜘蛛侠 Peter Parker", "奇异博士 Stephen Strange", "黑豹 T'Challa", "惊奇队长 Carol Danvers", "绯红女巫 Wanda Maximoff", "幻视 Vision", "猎鹰 Sam Wilson", "冬兵 Bucky Barnes", "战争机器 James Rhodes", "蚁人 Scott Lang", "黄蜂女 Hope van Dyne", "星爵 Peter Quill", "卡魔拉 Gamora", "毁灭者 Drax", "火箭浣熊 Rocket", "格鲁特 Groot", "螳螂女 Mantis", "星云 Nebula", "洛基 Loki", "尼克·弗瑞 Nick Fury", "菲尔·科尔森 Phil Coulson", "玛丽亚·希尔 Maria Hill", "尚气 Shang-Chi", "凯蒂 Katy", "叶莲娜 Yelena Belova", "凯特·毕肖普 Kate Bishop", "月光骑士 Marc Spector", "惊奇少女 Kamala Khan", "女浩克 Jennifer Walters", "夜魔侠 Matt Murdock", "惩罚者 Frank Castle", "杰茜卡·琼斯 Jessica Jones", "卢克·凯奇 Luke Cage", "铁拳 Danny Rand", "阿加莎 Agatha Harkness", "死侍 Wade Wilson", "金刚狼 Logan", "莫妮卡·兰博 Monica Rambeau", "美国小姐 America Chavez", "王 Wong", "奥克耶 Okoye", "苏睿 Shuri", "姆巴库 M'Baku", "瓦尔基里 Valkyrie", "科尔格 Korg", "简·福斯特 Jane Foster", "佩吉·卡特 Peggy Carter", "霍华德·斯塔克 Howard Stark", "佩珀·波茨 Pepper Potts", "哈皮·霍根 Happy Hogan", "灭霸 Thanos", "齐尔蒙格 Killmonger", "海拉 Hela", "奥创 Ultron", "绿魔 Green Goblin", "章鱼博士 Doctor Octopus", "神秘客 Mysterio", "文武 Wenwu"]
  },
  {
    id: "chinese-snacks",
    remoteId: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
    title: "中式小吃二选一",
    emoji: "🥟",
    description: "64 种街头与地方小吃 · 空腹慎入",
    public: true, plays: 41,
    championStats: {"螺蛳粉": 10, "肉夹馍": 8, "煎饼果子": 8, "生煎包": 8, "豆花": 7},
    items: ["煎饼果子", "肉夹馍", "臭豆腐", "烤冷面", "麻辣烫", "串串香", "螺蛳粉", "热干面", "肠粉", "生煎包", "小笼包", "锅贴", "水煎包", "灌汤包", "叉烧包", "蛋挞", "鸡蛋仔", "章鱼小丸子", "手抓饼", "葱油饼", "韭菜盒子", "糖油粑粑", "糍粑", "驴打滚", "艾窝窝", "豌豆黄", "冰糖葫芦", "糖炒栗子", "烤红薯", "凉皮", "凉粉", "酸辣粉", "米线", "锅盔", "油条", "豆浆", "豆腐脑", "胡辣汤", "牛肉粉", "馄饨", "鸭血粉丝汤", "烧麦", "粽子", "茶叶蛋", "卤味", "烤串", "烤面筋", "铁板豆腐", "狼牙土豆", "炸串", "炸鸡排", "盐酥鸡", "蚵仔煎", "大肠包小肠", "饭团", "凉面", "甜水面", "担担面", "钵钵鸡", "炒年糕", "双皮奶", "姜撞奶", "杨枝甘露", "豆花"]
  },
  {
    id: "fandom-right-position",
    remoteId: "44444444-4444-4444-8444-444444444444",
    title: "同人女右位 XP 二选一",
    emoji: "➡️",
    description: "48 种角色属性 · 选出你的右位终极 XP",
    author: "xhs@一只不眠喵", public: true, plays: 21,
    championStats: {"白切黑": 7, "病弱": 5, "傲娇": 4, "美人": 3, "冰山": 2},
    items: ["轻浮佬", "重力系", "小太阳", "冰山", "傲娇", "直球", "高敏", "娇纵", "黑切白", "白切黑", "天然呆", "三无", "心机", "嘴毒", "病弱", "身强体壮", "美人", "糙汉", "失眠症", "嗜睡", "中二病", "电竞", "恋旧", "喜新厌旧", "黏人", "回避", "温和", "无情", "冷脸萌", "热脸蛋", "成熟", "幼稚", "高情商", "低情商", "s", "m", "自私", "无私", "隐忍", "放纵", "自恋", "自卑", "绿茶", "海王", "颜控", "醋精", "霸总", "暴君"]
  },
  {
    id: "fandom-left-position",
    remoteId: "55555555-5555-4555-8555-555555555555",
    title: "同人女左位 XP 二选一",
    emoji: "⬅️",
    description: "48 种角色属性 · 选出你的左位终极 XP",
    author: "xhs@一只不眠喵", public: true, plays: 19,
    championStats: {"黑切白": 6, "糙汉": 5, "直球": 4, "身强体壮": 2, "暴君": 2},
    items: ["轻浮佬", "重力系", "小太阳", "冰山", "傲娇", "直球", "高敏", "娇纵", "黑切白", "白切黑", "天然呆", "三无", "心机", "嘴毒", "病弱", "身强体壮", "美人", "糙汉", "失眠症", "嗜睡", "中二病", "电竞", "恋旧", "喜新厌旧", "黏人", "回避", "温和", "无情", "冷脸萌", "热脸蛋", "成熟", "幼稚", "高情商", "低情商", "s", "m", "自私", "无私", "隐忍", "放纵", "自恋", "自卑", "绿茶", "海王", "颜控", "醋精", "霸总", "暴君"]
  },
  {
    id: "comedy-sketches",
    remoteId: "66666666-6666-4666-8666-666666666666",
    title: "喜人作品二选一",
    emoji: "🎭",
    description: "128 部喜剧作品 · 选出你的终极喜人作品",
    author: "xhs@没有wifi也没有流量", public: true, plays: 26,
    championStats: {"少爷和我": 7, "史密斯再就业": 6, "年会必须停": 5, "回音山谷": 4, "最后的铸剑师": 4},
    items: ["回音山谷", "十上有难事？！", "年会必须停", "史密斯再就业", "等一下", "小镇青年", "拜拜啦地球", "拳村的希望", "下江南", "奈何桥北", "亲情保卫战", "绝命双子星", "当考试还剩15分钟", "大考结束那一天", "有倩有谋", "安可", "抢婚吧哥们儿", "堡大招风", "千年就一回", "密室大作战", "警察和我", "66号公路", "音乐课最重要", "前任特工", "我的唯一", "严言交通", "饭局往事", "花园网吧", "全民运动会", "排练疯云", "老同学显摆大会", "风云再起", "两兄弟牛排店", "渡口", "足球小哥", "妈呀！新老师", "破风", "兴帮往事", "天台告白", "恋恋火锅店", "我要当rapper", "爱赢才会拼", "进化论", "坏小子", "少爷和我", "拜访城堡", "我的伴娘", "军事恋盟", "今天你要嫁给他", "旧警察故事", "小学生作文有画面了", "雷欧雷农场", "大侠别动手", "再见爱人", "抽屉里的猫", "一起去露营", "生日备忘录", "旧矿工故事", "一方青苔", "最后的铸剑师", "顶顶好餐厅", "德古拉和我", "忘不了", "少爷和小姐", "秘密", "救舅大状师", "爱在飞机降落前", "乐园停业那一天", "开学第一天", "史上第一大劫案", "新默剧", "技能五子棋", "真假美猴王", "尤莉娅别哭", "妈妈蜜呀", "最后一站", "那天我在楼顶", "小品的世界", "吐槽吧，吕小严", "飞驰余生", "棒棒小卖部", "虎父无犬子", "龙袍替身", "一颗螺丝钉", "天放的方舟", "与神同行", "拆弹专家", "逃离疯人院", "白日梦想家庭", "没有学习的人不伤心", "盲盒总动员", "空城计", "公主小哥", "西楚霸王", "默契怪盗", "冷不丁梆梆就两拳", "超越机器人", "八十一难", "主角光环", "复活军团", "世纪2000大舞厅", "课间十分钟", "贝多芬", "醉人奇妙夜", "哥的全宇宙", "心动的信号", "合影这件小事", "再见老张", "羊来咯", "孤注一掷", "再见噶尔波", "今天不易出门", "当一个女人决定退鞋", "越狱的夏天", "超快乐男孩", "遇人不赎", "财神来敲我家门", "万松书院", "断片山", "三顾茅庐", "头号玩家", "领养日", "外星人的婚礼", "今天不易破案", "熟人奇妙夜", "四个大人", "笑话一则", "Hello！厂状元！"]
  },
  {
    id: "fandom-symptoms",
    remoteId: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",
    title: "同人病状/异常状态XP二选一",
    emoji: "🩹",
    description: "48 种病状与异常状态 · 选出你的终极 XP",
    author: "ZN", public: true, plays: 15,
    championStats: {"失去自主": 5, "皮肤饥渴": 3, "泪失禁": 3, "被害妄想": 2, "幻听": 2},
    items: ["头痛", "痉挛", "言语障碍", "呼吸困难", "嗜睡", "失眠", "虚脱", "窒息", "记忆混乱", "泪失禁", "呕吐", "吐血", "痛觉放大", "无痛症", "丧失听觉", "丧失视觉", "被害妄想", "失去自主", "晕厥", "幻听", "失温", "创伤应激", "自毁", "毁他", "流鼻血", "饥饿", "情感麻木", "焦虑症", "抑郁症", "替身妄想", "异食癖", "感知停滞", "施虐欲", "皮肤饥渴", "精神分裂", "药物依赖", "夜盲症", "感官过载", "情绪失控", "性亢奋", "狂躁症", "畏光", "恐慌症", "异常兴奋", "厌食症", "耳鸣", "幸福的幻觉", "痛苦的幻觉"]
  }
];

const $ = (selector) => document.querySelector(selector);
const views = [$("#homeView"), $("#gameView"), $("#resultView"), $("#tierView"), $("#ocView"), $("#checkView"), $("#gridView")];
let themes = [...PRESETS, ...loadCustomThemes()];
let game = null;
let tier = null;
let playMode = "battle";           // "battle" 二选一 / "tier" 梯度表
let toastTimer;
let themeQuery = "";

// 梯度表档位（热→冷），与报纸风调色一致
const TIERS = [
  { key: "S", label: "S", color: "#ff5c35", text: "#ffffff" },
  { key: "A", label: "A", color: "#ff9a3d", text: "#171716" },
  { key: "B", label: "B", color: "#d9f64f", text: "#171716" },
  { key: "C", label: "C", color: "#8ee06b", text: "#171716" },
  { key: "D", label: "D", color: "#b8c7ff", text: "#171716" }
];
let themeSort = loadThemeSort();

function loadThemeSort() {
  try { return localStorage.getItem("pickone-sort") === "new" ? "new" : "plays"; }
  catch { return "plays"; }
}

function loadCustomThemes() {
  try { return JSON.parse(localStorage.getItem("pickone-themes") || "[]"); }
  catch { return []; }
}

function saveCustomThemes() {
  localStorage.setItem("pickone-themes", JSON.stringify(themes.filter(t => t.custom)));
}

function loadLocalStats() {
  try { return JSON.parse(localStorage.getItem("pickone-stats") || "{}"); }
  catch { return {}; }
}

function themeNumbers(theme) {
  const local = loadLocalStats()[theme.id] || { plays: 0, champions: {} };
  const champions = { ...(theme.championStats || {}) };
  Object.entries(local.champions || {}).forEach(([name, count]) => champions[name] = (champions[name] || 0) + count);
  return { plays: (theme.plays || 0) + (local.plays || 0), champions };
}

function recordLocalChampion(theme, winner) {
  const all = loadLocalStats();
  const row = all[theme.id] || { plays: 0, champions: {} };
  row.plays += 1;
  row.champions[winner] = (row.champions[winner] || 0) + 1;
  all[theme.id] = row;
  localStorage.setItem("pickone-stats", JSON.stringify(all));
}

function showView(view) {
  views.forEach(v => v.classList.toggle("hidden", v !== view));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function themeMatchesQuery(theme) {
  if (!themeQuery) return true;
  const haystack = [theme.title, theme.description, theme.author, ...(theme.items || [])]
    .filter(Boolean).join(" ").toLowerCase();
  return haystack.includes(themeQuery);
}

// 卡片底部滚动 banner：从题库随机抽最多 12 个选项，让人一眼看出这题库在选什么。
// 抽样按题库 id 缓存，重渲染（排序/搜索）时不重新乱抽；首尾两份拼接实现无缝循环。
const tickerCache = new Map();
function themeTicker(theme) {
  const items = theme.items || [];
  if (!items.length) return "";
  let sample = tickerCache.get(theme.id);
  if (!sample) {
    sample = shuffle(items).slice(0, Math.min(items.length, 12));
    tickerCache.set(theme.id, sample);
  }
  const chips = sample.map(name => `<span class="tick">${escapeHtml(name)}</span>`).join("");
  const dur = Math.max(14, sample.length * 2.6).toFixed(1);
  return `<span class="card-ticker" aria-hidden="true"><span class="ticker-track" style="animation-duration:${dur}s">${chips}${chips}</span></span>`;
}

function renderThemes() {
  const grid = $("#themeGrid");
  // 先算好每个题库的统计，再按所选方式排序（sort 稳定，同分保持原创建顺序）
  const list = themes.filter(themeMatchesQuery).map(theme => ({ theme, stats: themeNumbers(theme) }));
  if (themeSort === "plays") list.sort((a, b) => b.stats.plays - a.stats.plays);
  const cards = list.map(({ theme, stats }) => {
    return `
    <button class="theme-card" data-theme="${escapeHtml(theme.id)}" aria-label="开始 ${escapeHtml(theme.title)}">
      ${theme.public ? `<span class="public-pill">${theme.pending ? "待审核" : "公开"}</span>` : ''}
      <span class="emoji">${escapeHtml(theme.emoji)}</span>
      <h3>${escapeHtml(theme.title)}</h3>
      <p>${theme.items.length} 强 · ${escapeHtml(theme.description.split("·").pop().trim())}</p>
      <span class="theme-stats"><span>▶ ${formatNumber(stats.plays)} 局</span>${theme.author ? `<span>by ${escapeHtml(theme.author)}</span>` : ""}</span>
      <span class="arrow">↗</span>
      ${themeTicker(theme)}
    </button>`;
  }).join("");
  const createCard = `
    <button class="theme-card create-card" data-create="true">
      <span class="emoji">＋</span>
      <h3>你的脑洞<br />不限主题</h3>
      <p>4—128 个选项 · 自动生成</p>
      <span class="arrow">↗</span>
    </button>`;
  const empty = themeQuery && !list.length
    ? `<p class="empty-themes">没有找到和「${escapeHtml(themeQuery)}」相关的题库，换个词试试，或自己建一个 →</p>`
    : "";
  grid.innerHTML = empty + cards + createCard;
  renderCommunity();
  renderNewThemes();
}

// 题库创建时间（毫秒）：远程取 created_at，用户自建从 id `custom-<ts>` 解析，内置题库无（返回 null）
function themeCreatedAt(theme) {
  if (theme.createdAt) { const t = Date.parse(theme.createdAt); if (!isNaN(t)) return t; }
  const m = /^custom-(\d+)$/.exec(theme.id || "");
  return m ? Number(m[1]) : null;
}

function relDays(ts) {
  const now = new Date(); const then = new Date(ts);
  const d0 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const d1 = Date.UTC(then.getFullYear(), then.getMonth(), then.getDate());
  const days = Math.round((d0 - d1) / 86400000);
  if (days <= 0) return "今天"; if (days === 1) return "昨天"; return `${days} 天前`;
}

// 本周新题榜：最近 7 天创建的公开题库，最新在前
function renderNewThemes() {
  const section = $("#newThemesSection");
  if (!section) return;
  const weekAgo = Date.now() - 7 * 86400000;
  const list = themes
    .filter(t => t.public && !t.pending)
    .map(t => ({ t, ts: themeCreatedAt(t) }))
    .filter(x => x.ts && x.ts >= weekAgo)
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 8);
  if (!list.length) { section.classList.add("hidden"); $("#newThemesBoard").innerHTML = ""; return; }
  section.classList.remove("hidden");
  $("#newThemesBoard").innerHTML = list.map(({ t, ts }) => {
    const stats = themeNumbers(t);
    return `
    <button class="new-theme-card" data-theme="${escapeHtml(t.id)}" aria-label="开始 ${escapeHtml(t.title)}">
      <span class="nt-badge">NEW</span>
      <span class="nt-emoji">${escapeHtml(t.emoji)}</span>
      <h3>${escapeHtml(t.title)}</h3>
      <span class="nt-meta">${t.items.length} 强 · ${relDays(ts)}${t.author ? ` · by ${escapeHtml(t.author)}` : ""}</span>
      <span class="nt-plays">▶ ${formatNumber(stats.plays)} 局</span>
    </button>`;
  }).join("");
}

function applyThemeSearch() {
  themeQuery = ($("#themeSearch").value || "").trim().toLowerCase();
  renderThemes();
}

function formatNumber(number) {
  return number >= 10000 ? `${(number / 10000).toFixed(1)}万` : number.toLocaleString("zh-CN");
}

function renderCommunity() {
  const ranked = themes.filter(theme => theme.public && !theme.pending).map(theme => {
    const stats = themeNumbers(theme);
    const champion = Object.entries(stats.champions).sort((a,b) => b[1] - a[1])[0] || ["还没有冠军", 0];
    return { theme, stats, champion };
  }).sort((a,b) => b.stats.plays - a.stats.plays).slice(0,3);
  $("#communityBoard").innerHTML = ranked.map((row,index) => {
    const share = row.stats.plays ? Math.round(row.champion[1] / row.stats.plays * 100) : 0;
    return `<article class="community-rank"><span class="rank-number">0${index+1}</span><div>
      <h3>${escapeHtml(row.theme.emoji)} ${escapeHtml(row.theme.title)}</h3>
      <p>${formatNumber(row.stats.plays)} 人完成${row.theme.author ? ` · by ${escapeHtml(row.theme.author)}` : ""}</p>
      <div class="champion-line"><small>当前人气冠军</small><strong>${escapeHtml(row.champion[0])}</strong>
      <div class="vote-bar"><span style="width:${Math.min(100, share)}%"></span></div></div>
    </div></article>`;
  }).join("") || '<p class="empty-community">公开题库还在等第一位作者。</p>';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame(theme, restore = null) {
  const initialItems = restore?.initialItems || shuffle(theme.items);
  game = {
    theme,
    initialItems,
    rounds: restore?.rounds || [initialItems],
    currentRound: restore?.currentRound || 0,
    matchIndex: restore?.matchIndex || 0,
    currentWinners: restore?.currentWinners || [],
    history: restore?.history || [],
    totalChoices: initialItems.length - 1,
    completedChoices: restore?.completedChoices || 0,
    resultId: restore?.resultId || null,
    recorded: Boolean(restore?.recorded)
  };
  $("#gameTitle").textContent = theme.title;
  $("#gameEmoji").textContent = theme.emoji;
  showView($("#gameView"));
  prepareCurrentMatch();
}

function prepareCurrentMatch() {
  const entries = game.rounds[game.currentRound];
  const a = entries[game.matchIndex * 2];
  const b = entries[game.matchIndex * 2 + 1];
  if (a !== undefined && b === undefined) {
    game.currentWinners.push(a);
    game.matchIndex += 1;
    if (game.matchIndex >= Math.ceil(entries.length / 2)) finishRound();
    else prepareCurrentMatch();
    return;
  }
  $("#choiceAText").textContent = a;
  $("#choiceBText").textContent = b;
  updateGameUI();
}

function updateGameUI() {
  const entries = game.rounds[game.currentRound];
  const matchCount = Math.floor(entries.length / 2);
  const size = entries.length;
  $("#roundLabel").textContent = `${roundName(size)} · 第 ${game.matchIndex + 1} 组`;
  $("#progressText").textContent = `已完成 ${game.completedChoices} / ${game.totalChoices} 次选择`;
  $("#progressBar").style.width = `${(game.completedChoices / game.totalChoices) * 100}%`;
  $("#undoButton").disabled = game.history.length === 0;
  renderRoundTabs(size);
}

function roundName(size) {
  if (size === 2) return "决赛";
  return `${size} 强`;
}

function renderRoundTabs(currentSize) {
  const sizes = [];
  let n = game.initialItems.length;
  while (n >= 2) { sizes.push(n); n = Math.ceil(n / 2); }
  sizes.push(1);
  $("#roundTabs").innerHTML = sizes.map(size => {
    const label = size === 1 ? "冠军" : roundName(size);
    const state = size > currentSize ? "done" : size === currentSize ? "active" : "";
    return `<div class="round-tab ${state}">${label}</div>`;
  }).join("");
}

function choose(side) {
  if (!game) return;
  const entries = game.rounds[game.currentRound];
  const winner = entries[game.matchIndex * 2 + side];
  if (winner === undefined) return;
  const stateBeforeChoice = snapshot();
  stateBeforeChoice.chosen = winner;
  stateBeforeChoice.loser = entries[game.matchIndex * 2 + (side === 0 ? 1 : 0)];
  game.history.push(stateBeforeChoice);
  game.currentWinners.push(winner);
  game.completedChoices += 1;
  game.matchIndex += 1;
  const matchCount = Math.ceil(entries.length / 2);
  if (game.matchIndex >= matchCount) finishRound();
  else prepareCurrentMatch();
}

function snapshot() {
  return {
    rounds: game.rounds.map(r => [...r]), currentRound: game.currentRound,
    matchIndex: game.matchIndex, currentWinners: [...game.currentWinners],
    completedChoices: game.completedChoices
  };
}

function finishRound() {
  const winners = [...game.currentWinners];
  game.rounds.push(winners);
  if (winners.length === 1) {
    showResult();
    return;
  }
  game.currentRound += 1;
  game.matchIndex = 0;
  game.currentWinners = [];
  prepareCurrentMatch();
}

function undo() {
  const last = game?.history.pop();
  if (!last) return;
  game.rounds = last.rounds;
  game.currentRound = last.currentRound;
  game.matchIndex = last.matchIndex;
  game.currentWinners = last.currentWinners;
  game.completedChoices = last.completedChoices;
  showView($("#gameView"));
  prepareCurrentMatch();
}

function showResult(options = {}) {
  const winner = game.rounds.at(-1)[0];
  $("#winnerName").textContent = winner;
  $("#resultTheme").textContent = game.theme.title;
  const defeated = game.history
    .filter(state => state.chosen === winner)
    .map(state => state.loser)
    .filter(Boolean);
  $("#resultPath").textContent = defeated.length ? `一路击败 ${defeated.join("、")}，成功登顶。` : `经过 ${game.completedChoices} 次艰难选择，成功登顶。`;
  $("#resultAuthor").textContent = game.theme.author || "匿名玩家";
  $("#resultDate").textContent = new Intl.DateTimeFormat("zh-CN", { year:"numeric", month:"long", day:"numeric" }).format(new Date());
  try { const f = $("#fillerName"); if (f) f.value = localStorage.getItem("pickone-filler") || ""; } catch {}
  renderResultBracket();
  if (!game.recorded && !options.fromShare) {
    game.recorded = true;
    if (window.PickOneDB.online && game.theme.remoteId) {
      game.theme.plays = (game.theme.plays || 0) + 1;
      game.theme.championStats = { ...(game.theme.championStats || {}) };
      game.theme.championStats[winner] = (game.theme.championStats[winner] || 0) + 1;
    } else {
      recordLocalChampion(game.theme, winner);
    }
    renderThemes();
  }
  const numbers = themeNumbers(game.theme);
  $("#resultPlayCount").textContent = formatNumber(numbers.plays);
  renderChampionShare(numbers, winner);
  renderRarity(numbers, winner);
  if (game.vsWith && !options.fromShare) renderVsComparison(game.vsWith, winner);
  else $("#vsPanel").classList.add("hidden");
  $("#permalinkStatus").textContent = options.fromShare
    ? "● 分享快照 · 可跨设备打开"
    : window.PickOneDB.online ? "● 永久结果已保存" : "● 本机保存 · 分享链接可跨设备打开";
  showView($("#resultView"));
  if (!options.fromShare) ensureResultSaved();
}

function renderResultBracket() {
  const rounds = game.rounds;
  const bracket = $("#resultBracket");
  bracket.style.setProperty("--rounds", rounds.length);
  bracket.innerHTML = rounds.map((round, roundIndex) => {
    const next = rounds[roundIndex + 1] || [];
    return `<div class="poster-round"><h3>${round.length === 1 ? "🏆 冠军" : roundName(round.length)}</h3><div class="poster-slots">
      ${round.map(name => {
        const className = round.length === 1 ? "champion" : next.includes(name) ? "advanced" : "";
        return `<div class="poster-slot ${className}">${escapeHtml(name)}</div>`;
      }).join("")}
    </div></div>`;
  }).join("");
}

// 冠军稀有度：用全站冠军票占比给本局冠军定一个 SSR/SR/R/N 等级（少数派钩子）。数据太少不显示。
function championRarity(numbers, winner) {
  const champs = numbers.champions || {};
  const total = Object.values(champs).reduce((a, b) => a + b, 0);
  const count = champs[winner] || 0;
  if (total < 10 || !count) return null;
  const share = Math.max(1, Math.round(count / total * 100));
  let tier, blurb;
  if (share < 8)       { tier = "SSR"; blurb = "超稀有 · 你是绝对少数派"; }
  else if (share < 18) { tier = "SR";  blurb = "稀有 · 小众品味"; }
  else if (share < 33) { tier = "R";   blurb = "少见 · 有点特别"; }
  else                 { tier = "N";   blurb = "大众之选 · 和多数人一样"; }
  return { share, count, total, tier, blurb };
}
function renderRarity(numbers, winner) {
  const line = $("#rarityLine"); if (!line) return;
  const r = championRarity(numbers, winner);
  if (!r) { line.hidden = true; line.textContent = ""; return; }
  line.hidden = false;
  line.dataset.tier = r.tier;
  line.innerHTML = `<b class="rarity-tag">${r.tier}</b><span>你的冠军「${escapeHtml(winner)}」只有 <b>${r.share}%</b> 的人选到 · ${escapeHtml(r.blurb)}</span>`;
}

// 冠军占比榜：统计该题库里每个冠军被选中的比例，展示前 5 名并高亮本局冠军
function renderChampionShare(numbers, winner) {
  const wrap = $("#championShareWrap");
  const listEl = $("#championShareList");
  const totalEl = $("#championShareTotal");
  const entries = Object.entries(numbers.champions || {}).filter(([, count]) => count > 0);
  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  if (!total) { wrap.classList.add("hidden"); listEl.innerHTML = ""; totalEl.textContent = ""; return; }
  wrap.classList.remove("hidden");
  const ranked = entries.sort((a, b) => b[1] - a[1]);
  const top = ranked.slice(0, 5);
  const rows = top.map(([name, count], index) => {
    const pct = Math.round(count / total * 100);
    const isWinner = name === winner;
    return `<li class="champion-share-item${isWinner ? " is-winner" : ""}">
      <span class="cs-rank">${index + 1}</span>
      <div class="cs-body">
        <div class="cs-line"><span class="cs-name">${escapeHtml(name)}${isWinner ? '<span class="cs-you">你的冠军</span>' : ""}</span><span class="cs-pct">${pct}%</span></div>
        <div class="cs-bar"><span style="width:${Math.max(2, pct)}%"></span></div>
      </div>
    </li>`;
  }).join("");
  // 本局冠军若没进前 5，额外补一行显示它的真实排名
  const winnerRank = ranked.findIndex(([name]) => name === winner);
  let extra = "";
  if (winnerRank >= 5) {
    const count = ranked[winnerRank][1];
    const pct = Math.round(count / total * 100);
    extra = `<li class="champion-share-item is-winner cs-outside">
      <span class="cs-rank">${winnerRank + 1}</span>
      <div class="cs-body">
        <div class="cs-line"><span class="cs-name">${escapeHtml(winner)}<span class="cs-you">你的冠军</span></span><span class="cs-pct">${pct}%</span></div>
        <div class="cs-bar"><span style="width:${Math.max(2, pct)}%"></span></div>
      </div>
    </li>`;
  }
  listEl.innerHTML = rows + extra;
  totalEl.textContent = `共 ${formatNumber(total)} 位玩家的冠军选择`;
}

async function ensureResultSaved() {
  if (game.resultId) return game.resultId;
  try {
    const saved = await window.PickOneDB.saveResult({
      remoteId: game.theme.remoteId, title: game.theme.title, emoji: game.theme.emoji,
      author: game.theme.author, initialItems: game.initialItems,
      rounds: game.rounds, winner: game.rounds.at(-1)[0]
    });
    game.resultId = saved.id;
    return saved.id;
  } catch {
    $("#permalinkStatus").textContent = "○ 暂未保存 · 仍可生成分享链接";
    return null;
  }
}

function replay() { startGame(game.theme); }

function openCreate() {
  $("#createForm").reset();
  $("#customEmoji").value = "✨";
  $("#formError").textContent = "";
  updateItemCount();
  $("#createDialog").showModal();
}

function updateItemCount() {
  const count = parseItems().length;
  $("#itemCount").textContent = `${count} 个选项`;
  $("#countHint").textContent = count < 4 ? `至少还需要 ${4-count} 个` : count > 128 ? "最多 128 个" : "可以开局";
}

function parseItems() {
  return $("#customItems").value.split(/\n/).map(x => x.trim()).filter(Boolean);
}

async function createTheme(event) {
  event.preventDefault();
  const items = [...new Set(parseItems())];
  if (items.length < 4 || items.length > 128) {
    $("#formError").textContent = items.length < 4 ? "至少需要 4 个不重复的选项。" : "最多支持 128 个选项。";
    return;
  }
  const theme = {
    id: `custom-${Date.now()}`,
    title: $("#customTitle").value.trim(),
    emoji: $("#customEmoji").value.trim() || "✨",
    description: "由你创建的专属题目",
    author: $("#customAuthor").value.trim() || "匿名玩家",
    items,
    custom: true,
    public: $("#publishTheme").checked,
    plays: 0,
    championStats: {}
  };
  if (theme.public) {
    try {
      const published = await window.PickOneDB.publishTheme(theme);
      if (published.id) theme.remoteId = published.id;
      theme.pending = Boolean(published.pending);
      showToast(published.pending ? "已投稿，审核通过后公开" : "已发布到公开题库");
    } catch { showToast("线上发布暂时失败，已保存在本机"); }
  }
  themes.push(theme);
  saveCustomThemes();
  renderThemes();
  $("#createDialog").close();
  if (playMode === "tier") startTierList(theme); else startGame(theme);
}

function renderBracket() {
  const pending = game.currentWinners.length ? [game.currentWinners] : [];
  const columns = [...game.rounds];
  if (pending.length && game.currentRound === columns.length - 1) columns.push(pending[0]);
  $("#bracketTree").innerHTML = `<div class="bracket-grid">${columns.map((round, r) => `
    <div class="bracket-column"><h3>${round.length === 1 ? "冠军" : roundName(round.length)}</h3>
      ${round.map(name => `<div class="bracket-entry ${r > 0 ? "winner" : ""}">${escapeHtml(name)}</div>`).join("")}
    </div>`).join("")}</div>`;
  $("#bracketDialog").showModal();
}

function encodeShareData() {
  const payload = { t: game.theme.title, e: game.theme.emoji, a: game.theme.author, i: game.initialItems, r: game.rounds };
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = ""; bytes.forEach(byte => binary += String.fromCharCode(byte));
  return btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");
}

async function shareResult() {
  const resultId = await ensureResultSaved();
  const onlineUrl = resultId && window.PickOneDB.online ? `${location.origin}${location.pathname}#r=${resultId}` : null;
  const url = onlineUrl || `${location.origin}${location.pathname}#result=${encodeShareData()}`;
  const data = { title: `我的「${game.theme.title}」冠军`, text: `我的冠军是：${game.rounds.at(-1)[0]}。你也来选选看！`, url };
  try {
    await copyText(url);
    showToast(onlineUrl ? "永久链接已复制" : "分享链接已复制");
  } catch (error) { if (error.name !== "AbortError") showToast("分享失败，请再试一次"); }
}

/* ===================== 双人对比 / 契合度 ===================== */

let pendingVs = null;   // 打开对比链接后，等待本人玩完对比的对方结果

// 复制"拉朋友对比"链接：#vs=<resultId>（在线）或 #vsd=<编码>（快照）
async function shareVs() {
  const resultId = await ensureResultSaved();
  const base = `${location.origin}${location.pathname}`;
  const url = (resultId && window.PickOneDB.online) ? `${base}#vs=${resultId}` : `${base}#vsd=${encodeShareData()}`;
  try {
    await copyText(url);
    showToast("对比链接已复制，发给朋友让 TA 也来选！");
  } catch (e) { if (e.name !== "AbortError") showToast("复制失败，请再试一次"); }
}

// 收到对比链接：加载对方结果，然后让本人玩同一题库
function beginVs(a) {
  const theme = { id: "shared", remoteId: a.remoteId, title: a.title, emoji: a.emoji, items: a.initialItems, author: a.author, description: "和朋友对比口味" };
  pendingVs = { title: a.title, author: a.author || "朋友", initialItems: a.initialItems, rounds: a.rounds, champion: a.rounds.at(-1)[0] };
  location.hash = "";
  showToast(`${pendingVs.author} 挑战你玩「${a.title}」，选出你的冠军来对比！`);
  startGame(theme);
  game.vsWith = pendingVs;
}

// 每个选项的"走到第几轮"分数（越大越靠后/越喜欢）
function itemScores(initialItems, rounds) {
  const score = {};
  (initialItems || []).forEach(it => score[it] = 0);
  (rounds || []).forEach((round, i) => round.forEach(it => { if (score[it] === undefined || i > score[it]) score[it] = i; }));
  return score;
}
function vsCompare(a, b) {
  const as = itemScores(a.initialItems, a.rounds), bs = itemScores(b.initialItems, b.rounds);
  const items = Object.keys(as).filter(it => bs[it] !== undefined);
  const maxA = Math.max(1, ...items.map(it => as[it])), maxB = Math.max(1, ...items.map(it => bs[it]));
  let diff = 0;
  const rows = items.map(it => { const na = as[it] / maxA, nb = bs[it] / maxB; diff += Math.abs(na - nb); return { it, na, nb, d: Math.abs(na - nb) }; });
  const pct = items.length ? Math.max(0, Math.round((1 - diff / items.length) * 100)) : 0;
  const aChamp = a.rounds.at(-1)[0], bChamp = b.rounds.at(-1)[0];
  const agree = rows.filter(r => r.na >= 0.7 && r.nb >= 0.7).sort((x, y) => (y.na + y.nb) - (x.na + x.nb)).slice(0, 3).map(r => r.it);
  const diverge = [...rows].sort((x, y) => y.d - x.d).slice(0, 3).map(r => r.it);
  return { pct, aChamp, bChamp, sameChamp: aChamp === bChamp, agree, diverge, count: items.length };
}

function renderVsComparison(a, myWinner) {
  const b = { initialItems: game.initialItems, rounds: game.rounds };
  const r = vsCompare(a, b);
  const label = r.pct >= 80 ? "灵魂契合 · 简直一个人" : r.pct >= 55 ? "挺合拍 · 品味有共鸣" : r.pct >= 30 ? "各有各的爱" : "互补型 · 口味天差地别";
  const agreeLine = r.agree.length ? `<div class="vs-tags"><small>你俩都偏爱</small>${r.agree.map(x => `<span class="vs-chip love">${escapeHtml(x)}</span>`).join("")}</div>` : "";
  const divLine = r.diverge.length ? `<div class="vs-tags"><small>分歧最大</small>${r.diverge.map(x => `<span class="vs-chip split">${escapeHtml(x)}</span>`).join("")}</div>` : "";
  $("#vsCard").innerHTML = `
    <div class="vs-c-head">
      <p class="vs-c-eyebrow">你 vs ${escapeHtml(a.author || "朋友")} · ${escapeHtml(a.title)}</p>
      <div class="vs-c-score"><b>${r.pct}%</b><span>口味契合度</span></div>
      <p class="vs-c-label">${label}${r.sameChamp ? ` · 你俩冠军都是「${escapeHtml(r.aChamp)}」！` : ""}</p>
    </div>
    <div class="vs-c-champs">
      <div class="vs-c-side"><small>${escapeHtml(a.author || "朋友")}的冠军</small><b>${escapeHtml(r.aChamp)}</b></div>
      <div class="vs-c-mid">VS</div>
      <div class="vs-c-side you"><small>你的冠军</small><b>${escapeHtml(r.bChamp)}</b></div>
    </div>
    ${agreeLine}${divLine}
    <div class="vs-c-watermark">🎴 pickpickpick.online · 极限二选一 · 口味契合度</div>`;
  $("#vsPanel").classList.remove("hidden");
}

async function downloadVsCard() {
  if (typeof html2canvas !== "function") { showToast("图片库未加载，请检查网络"); return; }
  showToast("正在生成对比图…");
  try {
    const canvas = await html2canvas($("#vsCard"), { backgroundColor: "#ffffff", scale: 2, logging: false, windowWidth: $("#vsCard").scrollWidth });
    saveCanvas(canvas, `口味契合度-${pendingVs ? pendingVs.author : "对比"}.png`);
  } catch { showToast("生成失败，请再试一次"); }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(text); return; }
    catch { /* 部分内嵌浏览器禁用 Clipboard API，继续使用兼容方案。 */ }
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("copy failed");
}

function decodeShareHash(encoded) {
  const base = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(base), c => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

async function loadSharedResult() {
  // 双人对比：加载对方结果，让本人玩同一题库
  const vsId = location.hash.match(/^#vs=(.+)$/)?.[1];
  if (vsId) {
    try {
      const data = await window.PickOneDB.getResult(vsId);
      if (!data) throw new Error("not found");
      beginVs(data); return true;
    } catch { location.hash = ""; showToast("这个对比邀请不存在或已失效"); }
  }
  const vsEnc = location.hash.match(/^#vsd=(.+)$/)?.[1];
  if (vsEnc) {
    try {
      const d = decodeShareHash(vsEnc);
      beginVs({ title: d.t, emoji: d.e, author: d.a, initialItems: d.i, rounds: d.r }); return true;
    } catch { location.hash = ""; }
  }
  const resultId = location.hash.match(/^#r=(.+)$/)?.[1];
  if (resultId) {
    try {
      const data = await window.PickOneDB.getResult(resultId);
      if (!data) throw new Error("not found");
      const theme = { id: "shared", remoteId: data.remoteId, title: data.title, emoji: data.emoji, items: data.initialItems, author: data.author, description: "朋友分享的永久结果" };
      game = { theme, initialItems: data.initialItems, rounds: data.rounds, currentRound: data.rounds.length - 1, matchIndex: 0, currentWinners: [], history: [], totalChoices: data.initialItems.length - 1, completedChoices: data.initialItems.length - 1, resultId, recorded: true };
      showResult({ fromShare: true });
      return true;
    } catch { location.hash = ""; showToast("这个结果不存在或已失效"); }
  }
  const encoded = location.hash.match(/^#result=(.+)$/)?.[1];
  if (!encoded) return false;
  try {
    const base = encoded.replace(/-/g,"+").replace(/_/g,"/");
    const binary = atob(base);
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    const data = JSON.parse(new TextDecoder().decode(bytes));
    const theme = { id: "shared", title: data.t, emoji: data.e, items: data.i, author: data.a, description: "朋友分享的结果" };
    game = { theme, initialItems: data.i, rounds: data.r, currentRound: data.r.length - 1, matchIndex: 0, currentWinners: [], history: [], totalChoices: data.i.length - 1, completedChoices: data.i.length - 1, recorded: true };
    showResult({ fromShare: true });
    return true;
  } catch { location.hash = ""; return false; }
}

const REPORT_QR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyCAIAAABnRsZeAAAF5UlEQVR42u3dS27cMBBAwTDQ/a883hlZCUbarf6oau+YoiYPHKBBn8/n8wfg9/y1BYCsALICyAqArACyAsgKgKwAsgLICoCsALICyAogKwCyAsgKICsAsgLICiArALICyAogKwCyAsgKICuArADICiArgKwAyAogK4CsAMgKICuArADICiArgKwA73NV/eJzzrKt/Hw+Sc8b+Zfvf3biG9z3RBP3ymkFkBVAVgBkBZAVQFYAWQGQFUBWgPWunsuqmg68lzcpG/m9edO9kSeauFdv+0w6rQC+BAGyAiArgKwAsgIgK4CsALICcOOauOiqydGea857ovs1Vz1Rz7nSiZ9JpxVAVgBZAZAVQFYAWQGQFUBWAFkBuHHZgmdEbn7teWtsz/ndiTOpTisAsgLICiArALICyAogK4CsAMgK0JAp2/EiM7iRedbIZHDezDFOK4CsAMgKICuArADICiArgKwAsgLwK0ZO2U6cs8y7rTYyz5r3RHm74TPptALICoCsALICyAqArACyAsgKgKwAD2g6ZRuZ4OTnO5k33TvxZ30mnVYAWQFkBUBWAFkBZAVAVgBZAWQF4NtxB2eL1/CyudKqJ8JpBZAVAFkBZAWQFUBWAGQFkBVAVgB+qGzKtudcaWTN93rOhvZ8oomryptmnjiR7LQCyAogK4CsAMgKICuArADICiArwALXvkfqeQNr1ZonvqPIPk/cybzPldMK4EsQgKwAsgLICiArtgCQFUBWAFkB+G+XLfhXzznavFVV3cCad8dqz4nVnm/faQXwJQiQFQBZAWQFkBUAWQFkBZAVgBun6m/KT5w7rJpJzfvZvOet+uTkrbnn58ppBfAlCEBWAFkBZAVAVgBZAWQFQFaAJE2nbHvOs96bOCu5b6/e9varZo6dVgBZAWQFQFYAWQFkBZAVAFkBZAVY77iv9Jk1R+TddNtzN6pmYd+2k04rgC9BgKwAyAogK4CsAMgKICuArADcuHoua+JEY9Xz5s2kVq05b1UTp7er3q/TCiArgKwAyAogK4CsAMgKICuArAAv13TKduK0a+SJItOfeZOjkTVPfPuRVVVN6PacDHZaAWQFkBVAVgBkBZAVQFYAZAWQFWCB0/PW2Kpp1573wvacOu05+9tzzfv+HzmtALICyAqArACyAsgKICsAsgLICrBe2V22efOOVbOw96pmQ/e93yo954adVgBfggBkBZAVQFYAZAWQFUBWAGQFSFI2ZVs1WZg3sdpzNjRvzZGp07y96vl+3zah67QCyAogK4CsAMgKICuArADICiArwAJn4mxoz5tQ3aH7zBPte0dOKwCyAsgKICsAsgLICiArgKwAyArQ0MK7bHvekpu35n23Ak98+1XTzD2ne51WAFkBZAWQFQBZAWQFkBUAWQFkBVjguIPzoY0OzEpOvLu36omq9qrqltyenw2nFUBWAFkBZAVAVgBZAWQFQFYAWQEWWHiXbZWe88r79rlqryLv922z7E4rgKwAsgLICoCsALICyAqArACyAixw9VzWvonVnjOaefekVt1Wu+9TN3HNTiuArACyAsgKgKwAsgLICoCsALICLHBNXPS+OcuqJ4r83om35FatOW9euefn2WkFkBVAVgBZAZAVQFYAWQGQFUBWgAUuW9Bf1RRm3kxqZOo07x7cibvRc9bZaQWQFUBWAFkBkBVAVgBZAZAVQFaABUzZPmTibbU9p06rRHYjbzLYaQXwJQhAVgBZAWQFQFYAWQFkBUBWgCSn6m/K500l7lvzvgnOqvndnvfC9vy0O60AsgLICoCsALICyAqArACyAsgK8HJN77KdeH9n5Inu5yyrbquteoNVc8N5v3fiBLbTCuBLECArALICyAogKwCyAsgKICvAy51992gCTiuArADICiArgKwAyAogK4CsALICICuArACyAiArgKwAsgIgK4CsALICICuArACyAsgKgKwAsgLICoCsALICyAqArACyAsgKICsAsgLICiArALICyAogKwCyAjzsC4LeHxfriRtEAAAAAElFTkSuQmCC";

// 加载图片（data URL），失败返回 null，不阻塞下载
function loadImage(src) {
  return new Promise(resolve => { const im = new Image(); im.onload = () => resolve(im); im.onerror = () => resolve(null); im.src = src; });
}
// 预加载二维码，避免下载时再等待（保留点击手势，手机分享才不会被拦）
const qrImagePromise = loadImage(REPORT_QR);

function dataURLtoBlob(dataURL) {
  const [head, b64] = dataURL.split(",");
  const mime = (head.match(/:(.*?);/) || [, "image/png"])[1];
  const bin = atob(b64), u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return new Blob([u8], { type: mime });
}

// 保存战报：手机优先系统分享（可保存到相册/文件），否则触发下载。
// 全程同步（toDataURL），确保在点击手势内调用 share，手机端才不会被浏览器拦截。
function saveCanvas(canvas, filename) {
  const blob = dataURLtoBlob(canvas.toDataURL("image/png"));
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({ files: [file], title: "极限二选一 · 对阵战报" })
      .then(() => showToast("已生成，可保存到相册"))
      .catch(err => { if (!err || err.name !== "AbortError") downloadBlob(blob, filename); });
    return;
  }
  downloadBlob(blob, filename);
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.download = filename; a.href = url;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  showToast("对阵战报已保存");
}

async function downloadCard() {
  const canvas = $("#shareCanvas");
  const ctx = canvas.getContext("2d");
  const rounds = game.rounds;              // [初始名单 … 冠军]
  const L = rounds.length;
  const N = rounds[0].length;
  const champ = rounds.at(-1)[0];
  const filler = ((($("#fillerName") || {}).value) || "").trim();
  const author = game.theme.author || "";
  const dateStr = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric" }).format(new Date());
  const rarity = championRarity(themeNumbers(game.theme), champ);

  // ---- 浅色报纸风（与结果页「完整晋级路线」一致）----
  const C = {
    paper: "#f6f0e6", ink: "#171716", orange: "#ff5c35", acid: "#d9f64f",
    advBg: "#fff0eb", advText: "#b73318", slotBd: "#c5c5c5", colSep: "#b8b8b8",
    white: "#ffffff", muted: "#746d63"
  };
  const TIER_COLOR = { SSR: "#ff5c35", SR: "#3157d5", R: "#5aa469", N: "#8a8378" };

  // 尺寸分档：选项越多，格子越小
  let slotH, gap, font, champH, champFont;
  if (N <= 16)      { slotH = 40; gap = 12; font = 15; champH = 60; champFont = 19; }
  else if (N <= 32) { slotH = 36; gap = 9;  font = 14; champH = 56; champFont = 18; }
  else if (N <= 64) { slotH = 30; gap = 6;  font = 12; champH = 48; champFont = 16; }
  else              { slotH = 26; gap = 4;  font = 11; champH = 42; champFont = 14; }
  const colHeadH = 50, colHeadFont = 14, slotPadX = 9;
  const colW = L <= 5 ? 208 : L <= 7 ? 182 : 158;

  const sideMargin = 46, headerH = 208, footerH = 156, shadow = 9;
  const bodyW = L * colW, cardLeft = sideMargin;
  const W = sideMargin * 2 + bodyW + shadow;
  const bodyH = N * slotH + (N + 1) * gap;   // 首列（N 个选项）撑起的列内高度
  const cardTop = headerH, bodyTop = cardTop + colHeadH;
  const cardH = colHeadH + bodyH;
  const H = cardTop + cardH + shadow + footerH;
  canvas.width = W; canvas.height = H;

  // 文字工具
  const fitFont = (text, maxW, weight, startSize, minSize) => {
    let fs = startSize;
    for (; fs > minSize; fs--) { ctx.font = `${weight} ${fs}px sans-serif`; if (ctx.measureText(text).width <= maxW) break; }
    return fs;
  };
  const truncate = (name, maxW) => {
    if (ctx.measureText(name).width <= maxW) return name;
    let s = name;
    while (s.length > 1 && ctx.measureText(s + "…").width > maxW) s = s.slice(0, -1);
    return s + "…";
  };

  // ---- 背景与页眉 ----
  ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.orange; ctx.fillRect(sideMargin, 40, 6, 132);
  const textLeft = sideMargin + 22, headMaxW = W - textLeft - sideMargin - (rarity ? 154 : 0);
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillStyle = C.orange; ctx.font = "800 20px sans-serif";
  ctx.fillText("极限二选一 · 完整晋级路线", textLeft, 66);
  const tfs = fitFont(game.theme.title, headMaxW, "900", 46, 24);
  ctx.fillStyle = C.ink; ctx.font = `900 ${tfs}px sans-serif`;
  ctx.fillText(truncate(game.theme.title, headMaxW), textLeft, 118);
  ctx.fillStyle = C.orange; ctx.font = "800 22px sans-serif";
  ctx.fillText(truncate("🏆 冠军：" + champ, headMaxW), textLeft, 156);
  const parts = [];
  if (filler) parts.push("填表人 by " + filler);
  if (author) parts.push("题库 by " + author);
  parts.push(dateStr);
  ctx.fillStyle = C.muted; ctx.font = "600 15px sans-serif";
  ctx.fillText(truncate(parts.join("   ·   "), headMaxW), textLeft, 186);

  // ---- 稀有度印章（右上角，少数派钩子）----
  if (rarity) {
    const br = 60, bx = W - sideMargin - br - 6, by = 104;
    const col = TIER_COLOR[rarity.tier] || C.orange;
    ctx.save();
    ctx.translate(bx, by); ctx.rotate(-8 * Math.PI / 180);
    ctx.beginPath(); ctx.arc(0, 0, br, 0, Math.PI * 2);
    ctx.fillStyle = col; ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = C.ink; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, br - 9, 0, Math.PI * 2);
    ctx.setLineDash([4, 5]); ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(255,255,255,.75)"; ctx.stroke(); ctx.setLineDash([]);
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff";
    ctx.font = "900 32px sans-serif"; ctx.fillText(rarity.tier, 0, -10);
    ctx.font = "800 16px sans-serif";
    ctx.fillText(rarity.share + "% " + (rarity.tier === "N" ? "大众款" : "少数派"), 0, 22);
    ctx.restore();
  }

  // ---- 白色对阵卡（硬阴影 + 墨线边框）----
  ctx.fillStyle = C.ink; ctx.fillRect(cardLeft + shadow, cardTop + shadow, bodyW, cardH);
  ctx.fillStyle = C.white; ctx.fillRect(cardLeft, cardTop, bodyW, cardH);

  // 列分隔线 + 列头
  ctx.textAlign = "center";
  for (let c = 0; c < L; c++) {
    const cx = cardLeft + c * colW;
    if (c < L - 1) { ctx.strokeStyle = C.colSep; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(cx + colW, cardTop); ctx.lineTo(cx + colW, cardTop + cardH); ctx.stroke(); }
    const label = rounds[c].length === 1 ? "🏆 冠军" : roundName(rounds[c].length);
    ctx.fillStyle = C.ink; ctx.font = `800 ${colHeadFont}px sans-serif`; ctx.textBaseline = "middle";
    ctx.fillText(label, cx + colW / 2, cardTop + colHeadH / 2);
  }
  ctx.strokeStyle = C.ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(cardLeft, bodyTop); ctx.lineTo(cardLeft + bodyW, bodyTop); ctx.stroke();

  // ---- 选手格（space-around 竖向分布，胜者橙、冠军酸绿）----
  ctx.textBaseline = "middle";
  for (let c = 0; c < L; c++) {
    const cx = cardLeft + c * colW, m = rounds[c].length;
    rounds[c].forEach((name, i) => {
      const yC = bodyTop + bodyH * (i + 0.5) / m;
      const isChamp = c === L - 1;
      const adv = !isChamp && (rounds[c + 1] || []).includes(name);
      const h = isChamp ? champH : slotH, w = colW - 2 * slotPadX, x = cx + slotPadX;
      ctx.fillStyle = isChamp ? C.acid : adv ? C.advBg : C.white;
      ctx.fillRect(x, yC - h / 2, w, h);
      ctx.strokeStyle = isChamp ? C.ink : adv ? C.orange : C.slotBd;
      ctx.lineWidth = isChamp ? 2 : 1;
      ctx.strokeRect(x, yC - h / 2, w, h);
      ctx.fillStyle = isChamp ? C.ink : adv ? C.advText : C.ink;
      const fs = isChamp ? champFont : font;
      ctx.font = `${isChamp ? 900 : adv ? 800 : 500} ${fs}px sans-serif`;
      ctx.fillText(truncate(name, w - 12), cx + colW / 2, yC + 1);
    });
  }
  // 卡片外框（盖在最上层）
  ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.strokeRect(cardLeft, cardTop, bodyW, cardH);

  // ---- 底部二维码 + 网址 ----
  const qr = await qrImagePromise;
  const qrS = 100, footTop = cardTop + cardH + shadow + 22;
  ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
  ctx.font = "800 22px sans-serif"; const w1 = ctx.measureText("扫码来玩").width;
  ctx.font = "700 18px sans-serif"; const w2 = ctx.measureText("pickpickpick.online").width;
  const groupW = qrS + 18 + Math.max(w1, w2), gx = W / 2 - groupW / 2, tx = gx + qrS + 18;
  if (qr) {
    ctx.fillStyle = C.white; ctx.fillRect(gx - 6, footTop - 6, qrS + 12, qrS + 12);
    ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5; ctx.strokeRect(gx - 6, footTop - 6, qrS + 12, qrS + 12);
    ctx.drawImage(qr, gx, footTop, qrS, qrS);
  }
  ctx.fillStyle = C.ink; ctx.font = "800 22px sans-serif"; ctx.fillText("扫码来玩", tx, footTop + 42);
  ctx.fillStyle = C.orange; ctx.font = "700 18px sans-serif"; ctx.fillText("pickpickpick.online", tx, footTop + 72);

  saveCanvas(canvas, `极限二选一-${champ}.png`);
}

/* ===================== 梯度表排位 ===================== */

function startTierList(theme) {
  tier = {
    theme,
    assign: {},                        // name -> tier key
    pool: shuffle(theme.items),        // 待分配（随机初始顺序，避免总是原序）
    active: TIERS[0].key               // 当前档位
  };
  $("#tierTitle").textContent = theme.title;
  $("#tierEmoji").textContent = theme.emoji;
  try { const f = $("#tierFiller"); if (f) f.value = localStorage.getItem("pickone-filler") || ""; } catch {}
  showView($("#tierView"));
  renderTier();
}

function tierItemsOf(key) {
  // 按题库原始顺序稳定排列该档位内的选项
  return tier.theme.items.filter(name => tier.assign[name] === key);
}

function renderTier() {
  const board = $("#tierBoard");
  board.innerHTML = TIERS.map(t => {
    const chips = tierItemsOf(t.key).map(name =>
      `<button class="tier-chip placed" data-name="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("");
    const isActive = tier.active === t.key;
    return `<div class="tier-row ${isActive ? "active" : ""}" data-tier="${t.key}">
      <button class="tier-label" data-tier="${t.key}" style="background:${t.color};color:${t.text}" aria-label="选中 ${t.label} 档">${t.label}</button>
      <div class="tier-slots" data-tier="${t.key}">${chips}<span class="tier-slot-hint">${isActive ? "← 当前档位，点下面的选项放进来" : "点这里设为当前档位"}</span></div>
    </div>`;
  }).join("");

  const pool = $("#tierPool");
  pool.innerHTML = tier.pool.length
    ? tier.pool.map(name => `<button class="tier-chip" data-name="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("")
    : `<p class="tier-pool-empty">全部分配完了 🎉 可以生成梯度图了。</p>`;

  const total = tier.theme.items.length, done = total - tier.pool.length;
  $("#tierProgress").textContent = `已分配 ${done} / ${total}`;
  $("#tierPoolCount").textContent = String(tier.pool.length);
}

function setActiveTier(key) {
  if (!TIERS.some(t => t.key === key)) return;
  tier.active = key;
  renderTier();
}

function placeInActive(name) {
  if (!tier.pool.includes(name)) return;
  tier.assign[name] = tier.active;
  tier.pool = tier.pool.filter(n => n !== name);
  renderTier();
}

function returnToPool(name) {
  if (tier.assign[name] === undefined) return;
  delete tier.assign[name];
  // 放回原始顺序对应的位置附近：简单起见追加到池尾
  if (!tier.pool.includes(name)) tier.pool.push(name);
  renderTier();
}

function resetTier() {
  if (!tier) return;
  tier.assign = {};
  tier.pool = shuffle(tier.theme.items);
  tier.active = TIERS[0].key;
  tier.submitted = false;
  $("#tierConsensus").classList.add("hidden");
  renderTier();
}

// 梯度共识：把全站计数（每个选项在各档的票数）折算成"大众档"，与用户分档对比
function tierConsensus(counters, assign) {
  const keys = TIERS.map(t => t.key);
  const byItem = {};
  (counters || []).forEach(({ item, bucket, count }) => {
    if (item === "__submissions" || !keys.includes(bucket)) return;
    (byItem[item] || (byItem[item] = {}))[bucket] = (byItem[item][bucket] || 0) + Number(count);
  });
  const crowdTier = {};
  Object.entries(byItem).forEach(([item, buckets]) => {
    let best = null, bc = 0;
    keys.forEach(k => { const c = buckets[k] || 0; if (c > bc) { bc = c; best = k; } });
    if (best) crowdTier[item] = best;
  });
  const compared = Object.keys(assign).filter(it => crowdTier[it]);
  let match = 0; const divergences = [];
  compared.forEach(it => {
    const you = assign[it], crowd = crowdTier[it];
    if (you === crowd) match++;
    else divergences.push({ item: it, you, crowd, dist: Math.abs(keys.indexOf(you) - keys.indexOf(crowd)) });
  });
  divergences.sort((a, b) => b.dist - a.dist);
  return { comparedCount: compared.length, match, diverge: compared.length - match, divergences };
}

async function showTierConsensus() {
  if (!tier) return;
  const placed = Object.keys(tier.assign);
  if (placed.length < 3) { showToast("至少分好 3 个选项，再来对比大众梯度"); return; }
  const remoteId = tier.theme.remoteId;
  if (!window.PickOneDB.online || !remoteId) { showToast("大众梯度需要联网题库，离线暂不支持"); return; }
  const scope = "tier:" + remoteId;
  const btn = $("#tierConsensusButton");
  btn.disabled = true; const label = btn.textContent; btn.textContent = "统计中…";
  try {
    if (!tier.submitted) {
      tier.submitted = true;
      const rows = placed.map(it => ({ scope, item: it, bucket: tier.assign[it] }));
      rows.push({ scope, item: "__submissions", bucket: "n" });
      await window.PickOneDB.bumpCounters(rows);
    }
    const counters = await window.PickOneDB.getCounters(scope);
    const res = tierConsensus(counters, tier.assign);
    const panel = $("#tierConsensus");
    panel.classList.remove("hidden");
    if (res.comparedCount < 1) {
      panel.innerHTML = `<p class="tc-empty">你是这个题库梯度榜的先行者 —— 还没有足够的大众数据可对比，过阵子再来看 🌱</p>`;
      return;
    }
    const uniq = Math.round(res.diverge / res.comparedCount * 100);
    const headline = uniq >= 50 ? `独特品味 · 你有 ${uniq}% 的选项和大众放得不一样`
      : uniq <= 20 ? `和大众很合拍 · 只有 ${uniq}% 不一样`
      : `略有个性 · ${uniq}% 和大众不同`;
    const rows = res.divergences.slice(0, 6).map(d =>
      `<li><span class="tc-item">${escapeHtml(d.item)}</span><span class="tc-vs"><b class="tc-you">你 ${d.you}</b> · 大众 ${d.crowd}</span></li>`).join("");
    panel.innerHTML = `<div class="tc-head"><b>${headline}</b><small>基于 ${res.comparedCount} 个有大众数据的选项</small></div>` +
      (rows ? `<ul class="tc-list">${rows}</ul>` : `<p class="tc-empty">你和大众的分档完全一致，太合拍了！</p>`);
  } catch {
    showToast("大众梯度加载失败，稍后再试");
  } finally {
    btn.disabled = false; btn.textContent = label;
  }
}

// 生成报纸风梯度图：左侧彩色档位块 + 右侧选项药丸（自动换行）
async function downloadTierCard() {
  const canvas = $("#shareCanvas");
  const ctx = canvas.getContext("2d");
  const filler = ((($("#tierFiller") || {}).value) || "").trim();
  const author = tier.theme.author || "";
  const dateStr = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric" }).format(new Date());

  const C = { paper: "#f6f0e6", ink: "#171716", orange: "#ff5c35", white: "#ffffff", muted: "#746d63", slot: "#fffaf1" };
  const sideMargin = 46, W = 1080, headerH = 208, footerH = 156, shadow = 9;
  const cardLeft = sideMargin, cardW = W - sideMargin * 2 - shadow;
  const labelW = 96, rowPadX = 16, rowPadY = 14, chipH = 40, chipGap = 10, chipPadX = 14, rowGap = 0, minRowH = 74;
  const chipFont = 19, labelFont = 40;
  const contentW = cardW - labelW;

  // 预排：算出每个档位的换行与高度
  ctx.font = `800 ${chipFont}px sans-serif`;
  const rows = TIERS.map(t => {
    const names = tierItemsOf(t.key);
    const lines = [];
    let line = [], lineW = 0;
    const avail = contentW - rowPadX * 2;
    names.forEach(name => {
      const w = Math.min(ctx.measureText(name).width + chipPadX * 2, avail);
      if (line.length && lineW + w + chipGap > avail) { lines.push(line); line = []; lineW = 0; }
      line.push({ name, w }); lineW += w + chipGap;
    });
    if (line.length) lines.push(line);
    const h = Math.max(minRowH, rowPadY * 2 + (lines.length || 1) * chipH + Math.max(0, (lines.length || 1) - 1) * chipGap);
    return { t, lines, h };
  });

  const cardTop = headerH;
  const bodyH = rows.reduce((s, r) => s + r.h, 0) + (rows.length - 1) * rowGap;
  const H = cardTop + bodyH + shadow + footerH;
  canvas.width = W; canvas.height = H;

  const fit = (text, maxW, weight, start, min) => {
    let fs = start;
    for (; fs > min; fs--) { ctx.font = `${weight} ${fs}px sans-serif`; if (ctx.measureText(text).width <= maxW) break; }
    return fs;
  };
  const truncate = (name, maxW) => {
    if (ctx.measureText(name).width <= maxW) return name;
    let s = name; while (s.length > 1 && ctx.measureText(s + "…").width > maxW) s = s.slice(0, -1);
    return s + "…";
  };

  // 背景 + 页眉
  ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.orange; ctx.fillRect(sideMargin, 40, 6, 132);
  const textLeft = sideMargin + 22, headMaxW = W - textLeft - sideMargin;
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillStyle = C.orange; ctx.font = "800 20px sans-serif";
  ctx.fillText("极限二选一 · 梯度表排位", textLeft, 66);
  const tfs = fit(tier.theme.title, headMaxW, "900", 46, 24);
  ctx.fillStyle = C.ink; ctx.font = `900 ${tfs}px sans-serif`;
  ctx.fillText(truncate(tier.theme.title, headMaxW), textLeft, 118);
  const parts = [];
  if (filler) parts.push("填表人 by " + filler);
  if (author) parts.push("题库 by " + author);
  parts.push(dateStr);
  ctx.fillStyle = C.muted; ctx.font = "600 16px sans-serif";
  ctx.fillText(truncate(parts.join("   ·   "), headMaxW), textLeft, 168);

  // 卡片阴影 + 底
  ctx.fillStyle = C.ink; ctx.fillRect(cardLeft + shadow, cardTop + shadow, cardW, bodyH);
  ctx.fillStyle = C.white; ctx.fillRect(cardLeft, cardTop, cardW, bodyH);

  // 逐行绘制
  let y = cardTop;
  rows.forEach(({ t, lines, h }) => {
    // 档位色块
    ctx.fillStyle = t.color; ctx.fillRect(cardLeft, y, labelW, h);
    ctx.fillStyle = t.text; ctx.font = `900 ${labelFont}px sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(t.label, cardLeft + labelW / 2, y + h / 2);
    // 分隔线
    ctx.strokeStyle = "#d9d2c6"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cardLeft, y + h); ctx.lineTo(cardLeft + cardW, y + h); ctx.stroke();
    // 选项药丸
    const startX = cardLeft + labelW + rowPadX;
    let cy = y + rowPadY;
    ctx.textAlign = "left"; ctx.textBaseline = "middle";
    lines.forEach(line => {
      let cx = startX;
      line.forEach(({ name, w }) => {
        ctx.fillStyle = C.slot; ctx.fillRect(cx, cy, w, chipH);
        ctx.strokeStyle = t.color; ctx.lineWidth = 2; ctx.strokeRect(cx, cy, w, chipH);
        ctx.fillStyle = C.ink; ctx.font = `800 ${chipFont}px sans-serif`;
        ctx.fillText(truncate(name, w - chipPadX * 2), cx + chipPadX, cy + chipH / 2 + 1);
        cx += w + chipGap;
      });
      cy += chipH + chipGap;
    });
    y += h;
  });
  // 外框
  ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.strokeRect(cardLeft, cardTop, cardW, bodyH);
  // 档位块右边界竖线
  ctx.strokeStyle = C.ink; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cardLeft + labelW, cardTop); ctx.lineTo(cardLeft + labelW, cardTop + bodyH); ctx.stroke();

  // 页脚二维码 + 网址
  const qr = await qrImagePromise;
  const qrS = 100, footTop = cardTop + bodyH + shadow + 22;
  ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
  ctx.font = "800 22px sans-serif"; const w1 = ctx.measureText("扫码来玩").width;
  ctx.font = "700 18px sans-serif"; const w2 = ctx.measureText("pickpickpick.online").width;
  const groupW = qrS + 18 + Math.max(w1, w2), gx = W / 2 - groupW / 2, tx = gx + qrS + 18;
  if (qr) {
    ctx.fillStyle = C.white; ctx.fillRect(gx - 6, footTop - 6, qrS + 12, qrS + 12);
    ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5; ctx.strokeRect(gx - 6, footTop - 6, qrS + 12, qrS + 12);
    ctx.drawImage(qr, gx, footTop, qrS, qrS);
  }
  ctx.fillStyle = C.ink; ctx.font = "800 22px sans-serif"; ctx.fillText("扫码来玩", tx, footTop + 42);
  ctx.fillStyle = C.orange; ctx.font = "700 18px sans-serif"; ctx.fillText("pickpickpick.online", tx, footTop + 72);

  saveCanvas(canvas, `梯度表-${tier.theme.title}.png`);
}

/* ===================== 成就清单（正确版 bingo） ===================== */

const CHECKLISTS = [
  {
    id: "fandom-cert", emoji: "🪶", title: "同人女十级鉴定",
    desc: "圈龄测试 · 中几个算几级",
    items: ["分得清主受主攻", "磕过 ABO 设定", "搞过 / 避雷过 RPS（真人同人）", "耽美 / 百合 / GB 都吃过", "知道 BE / HE / 破镜重圆 / 双向奔赴", "有雷点，避雷避得很坚决", "给主页挂过 tag", "写过或画过同人产出", "瓶邮 / 私信过太太", "为 CP 或拆逆破防过", "手机相册存着几百张图", "给太太催过更 / 打过投", "爬过墙，也拆过官方", "认得常见 AO3 / lofter 标签", "屯过肉 / 存过合集", "看过带🚗的文不脸红", "为一句台词或一个眼神二刷原作", "剪过 CP 视频 / 做过表情包", "经历过塌房", "混过 lofter / AO3 / 长佩 / 超话", "追过一篇几十万字长文完结", "入坑靠一张图 / 一个视频 / 一句话", "参加过同人展 / only / 线下", "买过谷子（周边）", "控评 / 打投 / 反黑过", "嗑到失眠 / 上头到走神", "认得一堆圈黑话（awsl/xswl/dbq/ooc）", "给同担比过心，也暗暗较过劲", "'为爱发电'做过无偿产出", "本命 / 本命 CP 被提名会瞬间激动"]
  },
  {
    id: "fandom-writer", emoji: "✍️", title: "同人写手 / 太太十级",
    desc: "产出型选手自测",
    items: ["码过字 / 画过图 / 剪过刀", "写过或画过 ABO", "写 / 看过带🚗的段落", "写过 PWP（有肉无剧情）", "开过长篇，也弃过坑", "日更过，也断更过", "被审核夹过 / 改词避雷过", "接过梗 / 开过盲盒点梗", "参加过合志 / 出过本", "被太太或读者翻过牌", "为一个梗查过一堆考据", "写完被自己刀哭", "存稿从来存不住", "有专门的产出小号", "收到过长评激动一整天", "给自己的 CP 补过番外", "蹲过热度，也甘于无人问津", "改文改到怀疑人生", "靠一条评论续命", "'产出一时爽，一直产出一直爽'"]
  },
  {
    id: "musical-cert", emoji: "🎭", title: "音乐剧人十级症",
    desc: "剧院常客自我鉴定",
    items: ["同一部刷过 3 遍以上", "抢过前排或 SD 票", "会全场跟唱", "买过纪念册或周边", "追过某位卡司", "坐过 rush / 半价票", "听原声带入睡", "安利到朋友烦", "认得出音乐总监", "去外地或国外看过", "二楼最后一排也满足", "返场喊过安可", "剧院偶遇过演员", "歌单里音乐剧过半", "看谢幕哭过", "收集过 playbill", "给某首歌单曲循环一整周", "记得住返场彩蛋梗"]
  },
  {
    id: "adult-life", emoji: "☕", title: "成年人的碎掉瞬间",
    desc: "破防程度自测 · 越多越破碎",
    items: ["连续熬夜到凌晨", "忘记今天星期几", "外卖比做饭多", "收藏 = 看过", "买课 = 学过", "周末一半在补觉", "报复性熬夜", "手机电量焦虑", "群消息已读不回", "'下次一定'从没兑现", "间歇性踌躇满志", "给购物车养蛊", "闹钟设 5 个还迟到", "社交电量 5 分钟耗尽", "体检报告不敢看", "奶茶续命", "通勤路上最清醒", "计划赶不上变化"]
  }
];

let check = null;

function openCheck() {
  showView($("#checkView"));
  $("#checkPicker").classList.remove("hidden");
  $("#checkEditor").classList.add("hidden");
  $("#checkBackPickerButton").setAttribute("hidden", "");
  $("#checkTopTitle").textContent = "成就清单";
  renderCheckPicker();
}

function renderCheckPicker() {
  $("#checkGrid").innerHTML = CHECKLISTS.map(c => `
    <button class="check-card-pick" data-list="${escapeHtml(c.id)}">
      <span class="emoji">${escapeHtml(c.emoji)}</span>
      <h3>${escapeHtml(c.title)}</h3>
      <p>${c.items.length} 项 · ${escapeHtml(c.desc)}</p>
    </button>`).join("");
}

function startChecklist(id) {
  const list = CHECKLISTS.find(c => c.id === id); if (!list) return;
  check = { list, checked: new Set(), submitted: false };
  $("#checkPicker").classList.add("hidden");
  $("#checkEditor").classList.remove("hidden");
  $("#checkResultWrap").classList.add("hidden");
  $("#checkForm").classList.remove("hidden");
  $("#checkBackPickerButton").removeAttribute("hidden");
  $("#checkTopTitle").textContent = list.title;
  $("#checkFormTitle").textContent = list.title;
  $("#checkItems").innerHTML = list.items.map((it, i) =>
    `<button type="button" class="check-item" data-i="${i}"><span class="check-box">✓</span><span class="check-txt">${escapeHtml(it)}</span></button>`).join("");
  updateCheckCounter();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateCheckCounter() {
  $("#checkCounter").textContent = `已解锁 ${check.checked.size} / ${check.list.items.length}`;
}

function toggleCheckItem(btn) {
  const i = +btn.dataset.i;
  if (check.checked.has(i)) { check.checked.delete(i); btn.classList.remove("on"); }
  else { check.checked.add(i); btn.classList.add("on"); }
  updateCheckCounter();
}

// 结果：解锁率 + 分数分布百分位（依赖 stat_counters；离线只出个人分数）
function computeCheckResult(counters, checkedItems, score, list) {
  const checkedCount = {}, scoreDist = {}; let submissions = 0;
  (counters || []).forEach(({ item, bucket, count }) => {
    count = Number(count);
    if (item === "__submissions") submissions += count;
    else if (item === "__score") scoreDist[bucket] = (scoreDist[bucket] || 0) + count;
    else if (bucket === "checked") checkedCount[item] = count;
  });
  let below = 0;
  Object.entries(scoreDist).forEach(([s, c]) => { if (Number(s) < score) below += c; });
  const percentile = submissions > 0 ? Math.round(below / submissions * 100) : null;
  const rare = checkedItems
    .map(it => ({ it, rate: (submissions > 0 && checkedCount[it] != null) ? checkedCount[it] / submissions : null }))
    .filter(x => x.rate != null).sort((a, b) => a.rate - b.rate).slice(0, 3);
  return { submissions, percentile, rare };
}

async function showCheckResult() {
  if (!check) return;
  const list = check.list;
  const checkedItems = [...check.checked].map(i => list.items[i]);
  const score = checkedItems.length;
  const scope = "check:" + list.id;
  const btn = $("#checkSubmitButton"); btn.disabled = true; const lbl = btn.textContent; btn.textContent = "统计中…";
  let res = { submissions: 0, percentile: null, rare: [] };
  try {
    if (window.PickOneDB.online) {
      if (!check.submitted) {
        check.submitted = true;
        const rows = checkedItems.map(it => ({ scope, item: it, bucket: "checked" }));
        rows.push({ scope, item: "__submissions", bucket: "n" });
        rows.push({ scope, item: "__score", bucket: String(score) });
        await window.PickOneDB.bumpCounters(rows);
      }
      const counters = await window.PickOneDB.getCounters(scope);
      res = computeCheckResult(counters, checkedItems, score, list);
    }
  } catch { /* 离线降级 */ }
  finally { btn.disabled = false; btn.textContent = lbl; }
  buildCheckCard(res, score);
  $("#checkForm").classList.add("hidden");
  $("#checkResultWrap").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildCheckCard(res, score) {
  const list = check.list;
  const total = list.items.length;
  const filler = "";
  const pctLine = res.percentile != null
    ? `解锁数超过 <b>${res.percentile}%</b> 的人`
    : `${window.PickOneDB.online ? "抢先体验 · 暂无大众数据" : "本机成绩 · 联网后可比大众"}`;
  const rareLine = res.rare && res.rare.length
    ? `<div class="cc-rare"><small>你解锁的冷门成就</small>${res.rare.map(r => `<span class="cc-rare-chip">${escapeHtml(r.it)} · ${Math.max(1, Math.round(r.rate * 100))}%</span>`).join("")}</div>`
    : "";
  const items = list.items.map((it, i) => {
    const on = check.checked.has(i);
    return `<div class="cc-item ${on ? "on" : "off"}"><span class="cc-mark">${on ? "✓" : "○"}</span><span>${escapeHtml(it)}</span></div>`;
  }).join("");
  $("#checkCard").innerHTML = `
    <div class="cc-head">
      <p class="cc-eyebrow">成就清单 · ${escapeHtml(list.emoji)}</p>
      <h2 class="cc-title">${escapeHtml(list.title)}</h2>
      <div class="cc-score"><b>${score}</b><span>/ ${total} 解锁</span></div>
      <p class="cc-pct">${pctLine}</p>
      ${rareLine}
    </div>
    <div class="cc-grid">${items}</div>
    <div class="cc-watermark">🎴 pickpickpick.online · 极限二选一 · 成就清单</div>`;
}

async function downloadCheckCard() {
  if (typeof html2canvas !== "function") { showToast("图片库未加载，请检查网络"); return; }
  showToast("正在生成成就卡…");
  try {
    const canvas = await html2canvas($("#checkCard"), { backgroundColor: "#ffffff", scale: 2, logging: false, windowWidth: $("#checkCard").scrollWidth });
    saveCanvas(canvas, `成就清单-${check.list.title}.png`);
  } catch { showToast("生成失败，请再试一次"); }
}

/* ===================== 本命九宫格 ===================== */

const GRID_SLOT_ORDER = [4, 0, 1, 2, 3, 5, 6, 7, 8]; // 第一个进正中 C 位
let gridState = null;

function startGrid(theme) {
  gridState = { theme, picks: [], submitted: false };
  $("#gridTitle").textContent = theme.title;
  $("#gridEmoji").textContent = theme.emoji;
  $("#gridConsensus").classList.add("hidden");
  try { const f = $("#gridFiller"); if (f) f.value = localStorage.getItem("pickone-filler") || ""; } catch {}
  showView($("#gridView"));
  renderGrid();
}

function renderGrid() {
  const picks = gridState.picks;
  const cells = Array.from({ length: 9 }, (_, c) => {
    const pi = GRID_SLOT_ORDER.indexOf(c);
    const name = picks[pi];
    const isC = c === 4;
    if (name != null) {
      return `<button class="grid-cell filled${isC ? " center" : ""}" data-pick="${pi}">${isC ? '<span class="grid-cpos">C位</span>' : ""}<span class="grid-cell-txt">${escapeHtml(name)}</span></button>`;
    }
    return `<div class="grid-cell empty${isC ? " center" : ""}">${isC ? '<span class="grid-cpos">C位</span>' : ""}</div>`;
  }).join("");
  const filler = ((($("#gridFiller") || {}).value) || "").trim();
  $("#gridCard").innerHTML = `
    <div class="grid-c-head">
      <p class="grid-c-eyebrow">本命九宫格 · ${escapeHtml(gridState.theme.emoji)}</p>
      <h2 class="grid-c-title">${escapeHtml(gridState.theme.title)}</h2>
      ${filler ? `<p class="grid-c-by">by ${escapeHtml(filler)}</p>` : ""}
    </div>
    <div class="grid-3x3">${cells}</div>
    <div class="grid-c-watermark">🎴 pickpickpick.online · 极限二选一 · 本命九宫格</div>`;
  const pool = gridState.theme.items.filter(it => !picks.includes(it));
  $("#gridPool").innerHTML = pool.length
    ? pool.map(it => `<button class="grid-pool-chip" data-name="${escapeHtml(it)}">${escapeHtml(it)}</button>`).join("")
    : `<p class="grid-pool-empty">候选都挑完啦。</p>`;
  $("#gridCount").textContent = `已选 ${picks.length} / 9`;
  $("#gridPoolCount").textContent = String(pool.length);
}

function gridAdd(name) {
  if (gridState.picks.length >= 9) { showToast("九宫格满了，点格子里的项可以移除替换"); return; }
  if (gridState.picks.includes(name)) return;
  gridState.picks.push(name); renderGrid();
}
function gridRemove(pi) { gridState.picks.splice(pi, 1); renderGrid(); }

async function downloadGridCard() {
  if (typeof html2canvas !== "function") { showToast("图片库未加载，请检查网络"); return; }
  if (!gridState.picks.length) { showToast("先挑至少一个本命"); return; }
  renderGrid();
  showToast("正在生成九宫格…");
  try {
    const c = await html2canvas($("#gridCard"), { backgroundColor: "#ffffff", scale: 2, logging: false, windowWidth: $("#gridCard").scrollWidth });
    saveCanvas(c, `本命九宫格-${gridState.theme.title}.png`);
  } catch { showToast("生成失败，请再试一次"); }
}

async function showGridConsensus() {
  if (!gridState) return;
  if (gridState.picks.length < 1) { showToast("先挑几个本命，再看大众"); return; }
  const remoteId = gridState.theme.remoteId;
  if (!window.PickOneDB.online || !remoteId) { showToast("大众本命需要联网题库，离线暂不支持"); return; }
  const scope = "top9:" + remoteId;
  const btn = $("#gridConsensusButton"); btn.disabled = true; const lbl = btn.textContent; btn.textContent = "统计中…";
  try {
    if (!gridState.submitted) {
      gridState.submitted = true;
      const rows = gridState.picks.map(it => ({ scope, item: it, bucket: "in" }));
      rows.push({ scope, item: "__submissions", bucket: "n" });
      await window.PickOneDB.bumpCounters(rows);
    }
    const counters = await window.PickOneDB.getCounters(scope);
    let submissions = 0; const inCount = {};
    counters.forEach(({ item, bucket, count }) => { count = Number(count); if (item === "__submissions") submissions += count; else if (bucket === "in") inCount[item] = count; });
    const ranked = Object.entries(inCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const panel = $("#gridConsensus"); panel.classList.remove("hidden");
    if (!ranked.length || !submissions) { panel.innerHTML = `<p class="gc-empty">你是这个题库九宫格的先行者，还没有大众本命数据 🌱</p>`; return; }
    const mine = new Set(gridState.picks);
    panel.innerHTML = `<div class="gc-head"><b>全站最常进本命九宫格</b><small>基于 ${submissions} 份九宫格</small></div>` +
      `<ol class="gc-list">${ranked.map(([it, c]) => `<li class="${mine.has(it) ? "gc-mine" : ""}"><span>${escapeHtml(it)}${mine.has(it) ? ' <b class="gc-tag">你也选了</b>' : ""}</span><span class="gc-pct">${Math.round(c / submissions * 100)}%</span></li>`).join("")}</ol>`;
  } catch { showToast("大众本命加载失败，稍后再试"); }
  finally { btn.disabled = false; btn.textContent = lbl; }
}

function showToast(message) {
  clearTimeout(toastTimer); $("#toast").textContent = message; $("#toast").classList.add("show");
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

$("#themeGrid").addEventListener("click", e => {
  const card = e.target.closest(".theme-card"); if (!card) return;
  if (card.dataset.create) openCreate();
  else {
    const theme = themes.find(t => t.id === card.dataset.theme);
    if (playMode === "tier") startTierList(theme); else if (playMode === "grid") startGrid(theme); else startGame(theme);
  }
});
$("#newThemesBoard").addEventListener("click", e => {
  const card = e.target.closest(".new-theme-card"); if (!card) return;
  const theme = themes.find(t => t.id === card.dataset.theme); if (!theme) return;
  if (playMode === "tier") startTierList(theme); else startGame(theme);
});

// 玩法切换（二选一 / 梯度表 / OC 设定卡）
document.querySelectorAll(".mode-tab").forEach(btn => btn.addEventListener("click", () => {
  if (btn.dataset.mode === "oc") { window.PickOneOC && window.PickOneOC.open(); return; }
  if (btn.dataset.mode === "check") { openCheck(); return; }
  playMode = { tier: "tier", grid: "grid" }[btn.dataset.mode] || "battle";
  document.querySelectorAll(".mode-tab").forEach(b => {
    const on = b === btn && b.dataset.mode !== "oc" && b.dataset.mode !== "check";
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  $("#modeHint").textContent = playMode === "tier"
    ? "选一个题库，把选项拖进 S/A/B/C/D 各档，生成你的梯度图。"
    : playMode === "grid"
    ? "选一个题库，挑出你的本命前 9，生成 3×3 九宫格。"
    : "选一个题库，一路二选一选出唯一冠军。";
}));

// 梯度表：档位板点击（设当前档 / 退回已放选项）
$("#tierBoard").addEventListener("click", e => {
  const placed = e.target.closest(".tier-chip.placed");
  if (placed) { returnToPool(placed.dataset.name); return; }
  const label = e.target.closest(".tier-label");
  if (label) { setActiveTier(label.dataset.tier); return; }
  const slots = e.target.closest(".tier-slots");
  if (slots) { setActiveTier(slots.dataset.tier); }
});
// 梯度表：池中选项点击 → 放入当前档
$("#tierPool").addEventListener("click", e => {
  const chip = e.target.closest(".tier-chip"); if (!chip) return;
  placeInActive(chip.dataset.name);
});
$("#exitTierButton").addEventListener("click", () => showView($("#homeView")));
$("#tierResetButton").addEventListener("click", resetTier);
$("#tierDownloadButton").addEventListener("click", downloadTierCard);
$("#tierConsensusButton").addEventListener("click", showTierConsensus);
// 成就清单
$("#checkGrid").addEventListener("click", e => { const c = e.target.closest(".check-card-pick"); if (c) startChecklist(c.dataset.list); });
$("#checkItems").addEventListener("click", e => { const b = e.target.closest(".check-item"); if (b) toggleCheckItem(b); });
$("#exitCheckButton").addEventListener("click", () => showView($("#homeView")));
$("#checkBackPickerButton").addEventListener("click", openCheck);
$("#checkSubmitButton").addEventListener("click", showCheckResult);
$("#checkResetButton").addEventListener("click", () => { if (check) { check.checked.clear(); check.submitted = false; document.querySelectorAll("#checkItems .check-item.on").forEach(b => b.classList.remove("on")); updateCheckCounter(); } });
$("#checkDownloadButton").addEventListener("click", downloadCheckCard);
$("#checkEditButton").addEventListener("click", () => { $("#checkResultWrap").classList.add("hidden"); $("#checkForm").classList.remove("hidden"); window.scrollTo({ top: 0, behavior: "smooth" }); });
// 本命九宫格
$("#gridPool").addEventListener("click", e => { const c = e.target.closest(".grid-pool-chip"); if (c) gridAdd(c.dataset.name); });
$("#gridCard").addEventListener("click", e => { const c = e.target.closest(".grid-cell.filled"); if (c) gridRemove(+c.dataset.pick); });
$("#exitGridButton").addEventListener("click", () => showView($("#homeView")));
$("#gridResetButton").addEventListener("click", () => { if (gridState) { gridState.picks = []; gridState.submitted = false; $("#gridConsensus").classList.add("hidden"); renderGrid(); } });
$("#gridDownloadButton").addEventListener("click", downloadGridCard);
$("#gridConsensusButton").addEventListener("click", showGridConsensus);
$("#gridFiller")?.addEventListener("input", e => { try { localStorage.setItem("pickone-filler", e.target.value.trim()); } catch {} });
$("#tierPlayBattleButton").addEventListener("click", () => { if (tier) startGame(tier.theme); });
$("#tierFiller")?.addEventListener("input", e => { try { localStorage.setItem("pickone-filler", e.target.value.trim()); } catch {} });
$("#themeSearchButton").addEventListener("click", applyThemeSearch);
$("#themeSearch").addEventListener("input", applyThemeSearch);
$("#themeSearch").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); applyThemeSearch(); } });
$("#themeSort").value = themeSort;
$("#themeSort").addEventListener("change", e => {
  themeSort = e.target.value === "new" ? "new" : "plays";
  try { localStorage.setItem("pickone-sort", themeSort); } catch {}
  renderThemes();
});
[$("#createButton"), $("#heroCreateButton")].forEach(button => button.addEventListener("click", openCreate));
$("#heroStartButton").addEventListener("click", () => startGame(themes[0]));
$("#homeButton").addEventListener("click", () => { location.hash = ""; showView($("#homeView")); });
$("#savedButton").addEventListener("click", () => { showView($("#homeView")); $("#themesTitle").scrollIntoView({behavior:"smooth"}); });
$("#communityButton").addEventListener("click", () => { showView($("#homeView")); $("#communitySection").scrollIntoView({behavior:"smooth"}); });
$("#exitGameButton").addEventListener("click", () => showView($("#homeView")));
$("#choiceA").addEventListener("click", () => choose(0));
$("#choiceB").addEventListener("click", () => choose(1));
$("#undoButton").addEventListener("click", undo);
$("#playAgainButton").addEventListener("click", replay);
$("#downloadButton").addEventListener("click", downloadCard);
$("#fillerName")?.addEventListener("input", e => { try { localStorage.setItem("pickone-filler", e.target.value.trim()); } catch {} });
$("#shareButton").addEventListener("click", shareResult);
$("#vsShareButton").addEventListener("click", shareVs);
$("#vsDownloadButton").addEventListener("click", downloadVsCard);
$("#customItems").addEventListener("input", updateItemCount);
$("#createForm").addEventListener("submit", createTheme);
$("#closeCreateButton").addEventListener("click", () => $("#createDialog").close());
$("#bracketButton").addEventListener("click", renderBracket);
$("#closeBracketButton").addEventListener("click", () => $("#bracketDialog").close());
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && $("#createDialog").open) {
    $("#createDialog").close();
    return;
  }
  if (!$("#gameView").classList.contains("hidden") && !e.metaKey && !e.ctrlKey) {
    if (e.key.toLowerCase() === "a") choose(0);
    if (e.key.toLowerCase() === "b") choose(1);
  }
});

async function init() {
  try {
    const remoteThemes = await window.PickOneDB.listPublicThemes();
    remoteThemes.forEach(remote => {
      const existing = themes.find(theme => theme.remoteId === remote.remoteId);
      if (existing) {
        existing.plays = remote.plays;
        existing.championStats = remote.championStats;
        existing.public = true;
        existing.pending = false;
      } else {
        themes.push(remote);
      }
    });
  } catch (error) {
    const detail = error?.message ? `（${error.message}）` : "";
    showToast(`公开题库暂时无法加载${detail}，已显示本地内容`);
  }
  renderThemes();
  if (!await loadSharedResult()) showView($("#homeView"));
}

init();
