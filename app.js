const PRESETS = [
  {
    id: "fandom",
    remoteId: "11111111-1111-4111-8111-111111111111",
    title: "同人女极限二选一",
    emoji: "🪶",
    description: "16 个经典设定 · 看看你的终极取向",
    author: "degree", public: true, plays: 12843,
    championStats: { "宿敌变情人": 2841, "Hurt / Comfort": 2316, "青梅竹马": 1789 },
    items: ["ABO", "武侠江湖", "宗门修仙", "黑帮", "花吐症", "Fork & Cake", "Hurt / Comfort", "古风权谋", "都市现代", "灵魂互换", "前世今生", "末世", "无限流", "青梅竹马", "欢喜冤家", "宿敌变情人"]
  },
  {
    id: "hamilton",
    remoteId: "22222222-2222-4222-8222-222222222222",
    title: "《汉密尔顿》歌曲淘汰赛",
    emoji: "⭐",
    description: "16 首高人气歌曲 · My Shot 还是 Burn？",
    author: "Broadway 茶水间", public: true, plays: 7632,
    championStats: { "Wait for It": 1920, "Satisfied": 1741, "Burn": 988 },
    items: ["Alexander Hamilton", "My Shot", "The Schuyler Sisters", "You'll Be Back", "Satisfied", "Wait for It", "Guns and Ships", "History Has Its Eyes on You", "Yorktown", "Dear Theodosia", "Non-Stop", "What'd I Miss", "The Room Where It Happens", "Burn", "It's Quiet Uptown", "Who Lives, Who Dies, Who Tells Your Story"]
  },
  {
    id: "book-of-mormon",
    remoteId: "33333333-3333-4333-8333-333333333333",
    title: "《摩门经》歌曲淘汰赛",
    emoji: "📖",
    description: "16 首原声歌曲 · 选出你的循环单曲",
    author: "音乐剧观察员", public: true, plays: 4196,
    championStats: { "Turn It Off": 1132, "I Believe": 987, "Hello!": 621 },
    items: ["Hello!", "Two by Two", "You and Me (But Mostly Me)", "Hasa Diga Eebowai", "Turn It Off", "I Am Here for You", "All-American Prophet", "Sal Tlay Ka Siti", "Man Up", "Making Things Up Again", "Spooky Mormon Hell Dream", "I Believe", "Baptize Me", "I Am Africa", "Joseph Smith American Moses", "Tomorrow Is a Latter Day"]
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
      <span class="theme-stats"><span>▶ ${formatNumber(stats.plays)} 局</span><span>by ${escapeHtml(theme.author || "我")}</span></span>
      <span class="arrow">↗</span>
    </button>`;
  }).join("") + `
    <button class="theme-card create-card" data-create="true">
      <span class="emoji">＋</span>
      <h3>你的脑洞<br />不限主题</h3>
      <p>4—64 个选项 · 自动生成</p>
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
      <p>${formatNumber(row.stats.plays)} 人完成 · by ${escapeHtml(row.theme.author || "匿名")}</p>
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
  $("#countHint").textContent = count < 4 ? `至少还需要 ${4-count} 个` : count > 64 ? "最多 64 个" : "可以开局";
}

function parseItems() {
  return $("#customItems").value.split(/\n/).map(x => x.trim()).filter(Boolean);
}

async function createTheme(event) {
  event.preventDefault();
  const items = [...new Set(parseItems())];
  if (items.length < 4 || items.length > 64) {
    $("#formError").textContent = items.length < 4 ? "至少需要 4 个不重复的选项。" : "最多支持 64 个选项。";
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
  const columnWidth = 210;
  canvas.width = Math.max(1200, game.rounds.length * columnWidth + 100);
  canvas.height = Math.max(1350, game.initialItems.length * 42 + 360);
  ctx.fillStyle = "#f6f0e6"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#ff5c35"; ctx.fillRect(0,0,canvas.width,250);
  ctx.textAlign = "left"; ctx.fillStyle = "rgba(255,255,255,.8)"; ctx.font = "700 22px sans-serif"; ctx.fillText("极 限 二 选 一 · 完 整 战 报",50,60);
  ctx.fillStyle = "white"; ctx.font = "900 54px sans-serif"; ctx.fillText(game.theme.title,50,135);
  ctx.font = "700 26px sans-serif"; ctx.fillText(`🏆 冠军：${game.rounds.at(-1)[0]}`,50,196);
  ctx.textAlign = "center";
  const top = 310, availableHeight = canvas.height - top - 80;
  game.rounds.forEach((round, roundIndex) => {
    const x = 50 + roundIndex * columnWidth;
    const width = columnWidth - 18;
    const next = game.rounds[roundIndex + 1] || [];
    ctx.fillStyle = "#171716"; ctx.font = "800 18px sans-serif"; ctx.fillText(round.length === 1 ? "🏆 冠军" : roundName(round.length),x + width/2,top - 22);
    const step = availableHeight / round.length;
    round.forEach((name,index) => {
      const y = top + step * index + step/2 - 18;
      const advanced = next.includes(name), champion = round.length === 1;
      ctx.fillStyle = champion ? "#d9f64f" : advanced ? "#fff0eb" : "#ffffff";
      ctx.fillRect(x,y,width,36); ctx.strokeStyle = champion ? "#171716" : advanced ? "#ff5c35" : "#bdb7ae"; ctx.lineWidth = champion ? 3 : 1; ctx.strokeRect(x,y,width,36);
      ctx.fillStyle = "#171716"; ctx.font = `${advanced || champion ? 700 : 500} 14px sans-serif`;
      const label = name.length > 20 ? `${name.slice(0,19)}…` : name; ctx.fillText(label,x+width/2,y+23);
    });
  });
  const link = document.createElement("a");
  link.download = `极限二选一-${game.rounds.at(-1)[0]}.png`;
  link.href = canvas.toDataURL("image/png"); link.click();
  showToast("结果卡已下载");
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
$("#bracketButton").addEventListener("click", renderBracket);
$("#closeBracketButton").addEventListener("click", () => $("#bracketDialog").close());
document.addEventListener("keydown", e => {
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
        existing.author = remote.author;
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
