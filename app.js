const PRESETS = [
  {
    id: "fandom",
    remoteId: "11111111-1111-4111-8111-111111111111",
    title: "同人女极限二选一",
    emoji: "🪶",
    description: "16 个经典设定 · 看看你的终极取向",
    public: true, plays: 47,
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
  }
];

const $ = (selector) => document.querySelector(selector);
const views = [$("#homeView"), $("#gameView"), $("#resultView")];
let themes = [...PRESETS, ...loadCustomThemes()];
let game = null;
let toastTimer;

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

function renderThemes() {
  const grid = $("#themeGrid");
  grid.innerHTML = themes.map(theme => {
    const stats = themeNumbers(theme);
    return `
    <button class="theme-card" data-theme="${escapeHtml(theme.id)}" aria-label="开始 ${escapeHtml(theme.title)}">
      ${theme.public ? `<span class="public-pill">${theme.pending ? "待审核" : "公开"}</span>` : ''}
      <span class="emoji">${escapeHtml(theme.emoji)}</span>
      <h3>${escapeHtml(theme.title)}</h3>
      <p>${theme.items.length} 强 · ${escapeHtml(theme.description.split("·").pop().trim())}</p>
      <span class="theme-stats"><span>▶ ${formatNumber(stats.plays)} 局</span>${theme.author ? `<span>by ${escapeHtml(theme.author)}</span>` : ""}</span>
      <span class="arrow">↗</span>
    </button>`;
  }).join("") + `
    <button class="theme-card create-card" data-create="true">
      <span class="emoji">＋</span>
      <h3>你的脑洞<br />不限主题</h3>
      <p>4—128 个选项 · 自动生成</p>
      <span class="arrow">↗</span>
    </button>`;
  renderCommunity();
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
  startGame(theme);
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

async function loadSharedResult() {
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

function downloadCard() {
  const canvas = $("#shareCanvas");
  const ctx = canvas.getContext("2d");
  const rounds = game.rounds;              // [初始名单 … 冠军]
  const L = rounds.length;
  const N = rounds[0].length;
  const champ = rounds.at(-1)[0];

  // 上下分半：决赛两位对手各领一棵子树，从上下两端向中央的冠军收拢（竖版）
  const k = Math.min(2 ** (L - 2), N);     // 上半叶子数（初始名单前 k 个）
  const kL = k, kR = N - k, M = Math.max(kL, kR);

  // 尺寸分档：选手越多，框越小、字越小
  let bw, bh, hGap, font, rowGap;
  if (M <= 8)       { bw = 150; bh = 40; hGap = 16; font = 15; rowGap = 64; }
  else if (M <= 16) { bw = 140; bh = 36; hGap = 14; font = 14; rowGap = 56; }
  else if (M <= 32) { bw = 120; bh = 32; hGap = 12; font = 13; rowGap = 48; }
  else              { bw = 96;  bh = 28; hGap = 8;  font = 12; rowGap = 40; }
  const leafStride = bw + hGap, rowStride = bh + rowGap;

  const headerH = 230, padTop = 54, padBottom = 54, sideMargin = 48;
  const bodyW = M * leafStride, W = sideMargin * 2 + bodyW, centerX = W / 2;
  const champW = Math.round(bw * 1.5), champH = Math.round(bh * 1.9);
  const gapHalf = Math.round(rowGap * 0.55);

  const topBody = headerH + padTop;
  const yTop = (r) => topBody + bh / 2 + r * rowStride;            // 上半：r 越大越靠中央
  const champY = yTop(L - 2) + (bh / 2 + gapHalf + champH / 2);
  const yBotFinal = champY + (champH / 2 + gapHalf + bh / 2);
  const yBot = (r) => yBotFinal + (L - 2 - r) * rowStride;         // 下半：r 越大越靠中央
  const H = yBot(0) + bh / 2 + padBottom;
  canvas.width = W; canvas.height = H;

  // 背景与顶部橙色标题带
  ctx.fillStyle = "#f6f0e6"; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#ff5c35"; ctx.fillRect(0, 0, W, headerH);
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255,255,255,.82)"; ctx.font = "700 22px sans-serif";
  ctx.fillText("极 限 二 选 一 · 对 阵 战 报", sideMargin, 58);
  ctx.fillStyle = "#fff"; ctx.font = "900 50px sans-serif";
  ctx.fillText(game.theme.title, sideMargin, 128);
  ctx.font = "700 25px sans-serif"; ctx.fillText(`🏆 冠军：${champ}`, sideMargin, 184);

  // 文字自适应
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

  // 位置表 pos[r][i] = {x, y(中心), side:'T'|'B'|'C'}
  const pos = rounds.map(() => []);
  const sideOf = (r, i) => (i * (2 ** r)) < k ? "T" : "B";
  rounds[0].forEach((name, i) => {
    const isT = i < k;
    const x = isT ? sideMargin + (i + 0.5) * (bodyW / kL) : sideMargin + ((i - k) + 0.5) * (bodyW / kR);
    pos[0][i] = { x, y: isT ? yTop(0) : yBot(0), side: isT ? "T" : "B" };
  });
  for (let r = 1; r <= L - 2; r++) {
    rounds[r].forEach((name, i) => {
      const kids = [pos[r - 1][2 * i], pos[r - 1][2 * i + 1]].filter(Boolean);
      const s = sideOf(r, i);
      pos[r][i] = { x: kids.map(c => c.x).reduce((a, b) => a + b, 0) / kids.length, y: s === "T" ? yTop(r) : yBot(r), side: s };
    });
  }
  pos[L - 1][0] = { x: centerX, y: champY, side: "C" };

  // ---- 连线（胜者路线高亮橙色，淘汰者淡灰）----
  for (let r = 1; r <= L - 2; r++) {
    rounds[r].forEach((name, i) => {
      const parent = pos[r][i];
      const kids = [pos[r - 1][2 * i], pos[r - 1][2 * i + 1]].filter(Boolean);
      const isT = parent.side === "T";
      const junctionY = isT ? parent.y - rowGap / 2 : parent.y + rowGap / 2;
      if (kids.length === 2) {
        ctx.beginPath(); ctx.moveTo(kids[0].x, junctionY); ctx.lineTo(kids[1].x, junctionY);
        ctx.strokeStyle = "rgba(23,23,22,.16)"; ctx.lineWidth = 1; ctx.stroke();
      }
      kids.forEach((c, ci) => {
        const won = rounds[r][i] === rounds[r - 1][2 * i + ci];
        const childInner = isT ? c.y + bh / 2 : c.y - bh / 2;
        ctx.beginPath(); ctx.moveTo(c.x, childInner); ctx.lineTo(c.x, junctionY);
        ctx.strokeStyle = won ? "#ff5c35" : "rgba(23,23,22,.16)"; ctx.lineWidth = won ? 2.5 : 1; ctx.stroke();
      });
      const parentInner = isT ? parent.y - bh / 2 : parent.y + bh / 2;
      ctx.beginPath(); ctx.moveTo(parent.x, junctionY); ctx.lineTo(parent.x, parentInner);
      ctx.strokeStyle = "#ff5c35"; ctx.lineWidth = 2.5; ctx.stroke();
    });
  }
  // 决赛 → 冠军
  const f0 = pos[L - 2][0], f1 = pos[L - 2][1], winnerIsF0 = rounds[L - 2][0] === champ;
  [[f0, f0.y + bh / 2, champY - champH / 2, winnerIsF0], [f1, f1.y - bh / 2, champY + champH / 2, !winnerIsF0]]
    .forEach(([f, fInner, champEdge, won]) => {
      ctx.beginPath(); ctx.moveTo(f.x, fInner); ctx.lineTo(f.x, champEdge); ctx.lineTo(centerX, champEdge);
      ctx.strokeStyle = won ? "#ff5c35" : "rgba(23,23,22,.16)"; ctx.lineWidth = won ? 3 : 1.5; ctx.stroke();
    });

  // ---- 画框 ----
  const drawBox = (x, y, w, h, name, champion, advanced) => {
    ctx.fillStyle = champion ? "#d9f64f" : advanced ? "#fff0eb" : "#ffffff";
    ctx.fillRect(x - w / 2, y - h / 2, w, h);
    ctx.strokeStyle = champion ? "#171716" : advanced ? "#ff5c35" : "#cbc5bb";
    ctx.lineWidth = champion ? 3 : 1; ctx.strokeRect(x - w / 2, y - h / 2, w, h);
    ctx.fillStyle = "#171716"; ctx.textAlign = "center";
    if (champion) {
      const text = "🏆 " + name;
      const fs = fitFont(text, w - 24, "900", Math.round(champH * 0.5), 16);
      ctx.font = `900 ${fs}px sans-serif`;
      ctx.fillText(text, x, y + fs * 0.34);
    } else {
      ctx.font = `${advanced ? 700 : 500} ${font}px sans-serif`;
      ctx.fillText(truncate(name, w - 14), x, y + font * 0.34);
    }
  };
  for (let r = 0; r <= L - 2; r++) {
    rounds[r].forEach((name, i) => drawBox(pos[r][i].x, pos[r][i].y, bw, bh, name, false, (rounds[r + 1] || []).includes(name)));
  }
  drawBox(centerX, champY, champW, champH, champ, true, false);
  ctx.fillStyle = "rgba(23,23,22,.5)"; ctx.font = "700 15px sans-serif"; ctx.textAlign = "center";
  ctx.fillText("冠军", centerX, champY - champH / 2 - 8);

  const link = document.createElement("a");
  link.download = `极限二选一-${champ}.png`;
  link.href = canvas.toDataURL("image/png"); link.click();
  showToast("对阵战报已下载");
}

function showToast(message) {
  clearTimeout(toastTimer); $("#toast").textContent = message; $("#toast").classList.add("show");
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

$("#themeGrid").addEventListener("click", e => {
  const card = e.target.closest(".theme-card"); if (!card) return;
  if (card.dataset.create) openCreate();
  else startGame(themes.find(t => t.id === card.dataset.theme));
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
$("#shareButton").addEventListener("click", shareResult);
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
