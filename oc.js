/* OC 设定卡：数据驱动的所见即所得卡片 + html2canvas 出图。
   复用 app.js 的全局 saveCanvas / showView / showToast。 */
(function () {
  const $ = s => document.querySelector(s);
  const esc = v => String(v == null ? "" : v).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const range = n => Array.from({ length: n }, (_, i) => i);

  // ---- schema 构造器 ----
  const T = (id, label, max) => ({ type: "text", id, label, max: max || 40 });
  const TA = (id, label, rows) => ({ type: "textarea", id, label, rows: rows || 2 });
  const CH = (id, label, opts) => ({ type: "choice", id, label, opts });
  const CK = (id, label, opts) => ({ type: "checks", id, label, opts });
  const SL = (left, right) => ({ type: "slider", id: "sl_" + left + "_" + right, left, right, levels: 5 });
  const DT = (id, label) => ({ type: "dots", id, label, max: 5 });
  const YN = (id, label) => ({ type: "yesno", id, label });

  const TEMPLATES = {
    etoile: {
      title: "是这样的TA", eyebrow: "CHARACTER SHEET", by: "Etoile",
      sections: [
        { title: "", cols: 2, fields: [
          T("name", "姓名"), T("nick", "昵称"), T("birth", "生日"), T("race", "种族"),
          T("blood", "血统"), T("mbti", "MBTI"), T("height", "身高"), T("weight", "体重"),
          T("country", "国家"), T("lang", "语言"), T("identity", "身份"), T("hand", "惯用手"),
          T("camp", "阵营"), T("emo", "情感状态"), T("animal", "动物塑"), T("look", "外貌特点")
        ] },
        { title: "TA 喜欢的", cols: 2, fields: [
          T("f_inst", "乐器"), T("f_food", "食物"), T("f_season", "季节"), T("f_weather", "天气"),
          T("f_color", "颜色"), T("f_food2", "食物"), T("f_plant", "植物"), T("f_animal", "动物")
        ] },
        { title: "如果用一样东西形容 TA", cols: 2, fields: [
          CH("dress", "穿衣风格", ["行政风", "休闲", "华丽"]),
          CH("byinst", "用一种乐器", ["钢琴", "竖琴", "小提琴"]),
          CH("colorpref", "颜色偏好", ["冷色", "暖色", "黑白灰"]),
          CH("bymusic", "用一种音乐", ["摇滚", "古典", "FUNK"]),
          CH("byweather", "自然气象", ["台风", "梅雨", "沙尘暴"]),
          CH("byfood", "用一种食物", ["可丽饼", "寿司", "曲奇"]),
          CH("byastro", "天文景观", ["流星雨", "日食", "彗星"]),
          CH("bywine", "用一种酒", ["香槟", "红酒", "白兰地"]),
          CH("byflower", "用一种花", ["玫瑰", "鸢尾", "蓝花楹"]),
          CH("bycolor", "用一种颜色", ["墨蓝", "樱花粉", "血红"])
        ] },
        { title: "健康状况", cols: 1, fields: [
          YN("ill_phys", "是否有生理疾病"), YN("ill_psy", "是否有心理疾病"), YN("ptsd", "是否有 PTSD")
        ] },
        { title: "能力值", cols: 2, fields: [
          DT("s_drink", "酒量"), DT("s_luck", "运气"), DT("s_face", "颜值"), DT("s_charm", "魅力"),
          DT("s_int", "智力"), DT("s_fight", "战斗力"), DT("s_learn", "学习能力"), DT("s_social", "社交能力"),
          DT("s_sport", "运动能力"), DT("s_hand", "动手能力")
        ] },
        { title: "性格倾向", cols: 2, fields: [
          SL("悲观", "乐观"), SL("外向", "内向"), SL("理想", "现实"), SL("迟钝", "敏锐"),
          SL("整洁", "凌乱"), SL("柔和", "强势"), SL("理性", "感情"), SL("冷漠", "热情"),
          SL("谦虚", "自信"), SL("利己", "利他"), SL("单纯", "复杂"), SL("严谨", "随性"),
          SL("内敛", "外放"), SL("犹豫", "果断"), SL("保守", "创新"), SL("冷血", "共情"),
          SL("冷静", "激动"), SL("节俭", "挥霍"), SL("亲和", "傲慢"), SL("话多", "话少"),
          SL("低调", "高调"), SL("疏离", "亲近")
        ] },
        { title: "关于 TA", cols: 1, fields: [
          TA("hobby", "TA 的爱好"), TA("hate", "TA 厌恶的"), TA("skill", "TA 的特殊技能"),
          TA("weak", "TA 不擅长做的事"), TA("life", "TA 是如何看待人生的"), TA("death", "TA 是如何看待死亡的"),
          TA("honor", "TA 是如何面对荣誉的"), TA("comeback", "TA 是如何逆风翻盘的"), TA("self", "TA 的自我认知")
        ] }
      ]
    },
    rpg: {
      title: "人物信息", eyebrow: "CHARACTER SHEET", by: "",
      sections: [
        { title: "", cols: 2, fields: [
          T("name", "姓名"), T("sex", "性别"), T("birthplace", "出生地"), T("live", "常住地"),
          T("nick", "昵称"), T("age", "年龄"), T("appear", "肤色/发色/瞳色"), T("birth", "生日"),
          T("race", "种族"), T("mark", "特殊印记"), T("height", "身高"), T("weight", "体重"),
          T("catch", "口头禅"), T("lang", "语种"), T("body", "体型"), T("role", "创作定位")
        ] },
        { title: "性格特点", cols: 2, fields: [
          SL("自信", "自卑"), SL("坚强", "脆弱"), SL("理性", "感性"), SL("认真", "粗心"),
          SL("乐观", "悲观"), SL("礼貌", "野蛮"), SL("外向", "内向"), SL("幽默", "正经"),
          SL("热情", "高冷"), SL("乖巧", "叛逆"), SL("坦诚", "内敛"), SL("客观", "偏激"),
          SL("温柔", "暴躁"), SL("果决", "犹豫"), SL("勇敢", "懦弱"), SL("务实", "浪漫"),
          SL("敏感", "迟钝"), SL("正义", "邪恶"), SL("勤快", "懒惰"), SL("清醒", "糊涂"),
          SL("节俭", "挥霍"), SL("冷静", "冲动")
        ] },
        { title: "人生略历", cols: 1, fields: [
          SL("臭名昭著", "心地善良"), SL("默默无闻", "声名显赫"), SL("智力值", "武力值"), SL("平庸", "天才")
        ] },
        { title: "人际关系网", cols: 1, fields: [
          { type: "quad", id: "relation", xLeft: "血仇", xRight: "至亲", yTop: "提升", yBottom: "阻碍" }
        ] },
        { title: "身份立场", cols: 2, fields: [
          T("identity", "身份"), T("job", "职业"), T("camp", "阵营"), T("class", "阶级"), T("blood", "血统"), T("faith", "信仰")
        ] },
        { title: "身体素质", cols: 2, fields: [
          DT("q_hp", "体力"), DT("q_end", "耐力"), DT("q_eq", "情商"), DT("q_int", "智力"),
          DT("q_str", "力量"), DT("q_sense", "感知"), DT("q_eye", "视力"), DT("q_agi", "敏捷"),
          DT("q_luck", "运气"), DT("q_ins", "直觉")
        ] },
        { title: "特质设定", cols: 1, fields: [
          T("sense_sp", "感官特异", 60), T("illness", "特殊病症", 60), T("origin", "本源力量", 60), T("cost", "能力代价", 60)
        ] },
        { title: "战斗属性", cols: 1, fields: [
          { type: "radar", id: "battle", axes: ["攻击", "防御", "速度", "魔力", "治疗", "生命"], max: 5 }
        ] },
        { title: "战斗风格", cols: 1, fields: [
          CK("style", "", ["激进进攻", "防守反击", "灵活游击", "控制消耗", "阵地攻坚", "战术策略"])
        ] },
        { title: "武器类型", cols: 1, fields: [
          CK("weapon", "", ["近战武器", "远程武器", "魔法武器", "特殊武器"])
        ] },
        { title: "个人喜好", cols: 2, fields: [
          T("p_color", "颜色"), T("p_food", "食物"), T("p_dress", "穿衣"), T("p_quirk", "怪癖"),
          T("p_like", "喜欢"), T("p_fear", "害怕"), T("p_hate", "厌恶"), T("p_trauma", "创伤")
        ] },
        { title: "", cols: 1, fields: [
          T("p_dream", "志向梦想", 80), T("p_phil", "哲学观念", 80), T("p_day", "重要纪念日", 60)
        ] }
      ]
    }
  };

  let state = null;
  const card = () => $("#ocCard");

  function open() {
    if (window.showView) window.showView($("#ocView")); else { document.querySelectorAll(".view").forEach(v => v.classList.add("hidden")); $("#ocView").classList.remove("hidden"); }
    showPicker();
  }
  function showPicker() {
    $("#ocPicker").classList.remove("hidden");
    $("#ocEditor").classList.add("hidden");
    $("#ocTopTitle").textContent = "OC 设定卡";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function startTemplate(key) {
    const tpl = TEMPLATES[key]; if (!tpl) return;
    state = { key, tpl, photo: null };
    $("#ocPicker").classList.add("hidden");
    $("#ocEditor").classList.remove("hidden");
    $("#ocTopTitle").textContent = tpl.title;
    renderCard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderField(f) {
    switch (f.type) {
      case "text":
        return `<label class="ocf ocf-text"><span class="ocf-lab">${esc(f.label)}</span><input class="ocf-in" data-id="${f.id}" maxlength="${f.max}"></label>`;
      case "textarea":
        return `<div class="ocf ocf-ta"><span class="ocf-lab">${esc(f.label)}</span><textarea class="ocf-in" rows="${f.rows}" data-id="${f.id}"></textarea></div>`;
      case "choice":
        return `<div class="ocf ocf-choice">${f.label ? `<span class="ocf-lab">${esc(f.label)}</span>` : ""}<span class="ocf-opts" data-role="choice" data-id="${f.id}">${f.opts.map(o => `<button type="button" class="ocf-opt" data-val="${esc(o)}">${esc(o)}</button>`).join("")}<input class="ocf-other" data-id="${f.id}__o" placeholder="其他"></span></div>`;
      case "checks":
        return `<div class="ocf ocf-checks">${f.label ? `<span class="ocf-lab">${esc(f.label)}</span>` : ""}<span class="ocf-opts" data-role="check">${f.opts.map(o => `<button type="button" class="ocf-opt" data-val="${esc(o)}">${esc(o)}</button>`).join("")}</span></div>`;
      case "slider":
        return `<div class="ocf ocf-slider"><span class="ocf-pole">${esc(f.left)}</span><span class="ocf-dots" data-role="slider">${range(f.levels).map(i => `<button type="button" class="ocf-dot" data-i="${i + 1}"></button>`).join("")}</span><span class="ocf-pole right">${esc(f.right)}</span></div>`;
      case "dots":
        return `<div class="ocf ocf-rate"><span class="ocf-lab">${esc(f.label)}</span><span class="ocf-dots" data-role="dots">${range(f.max).map(i => `<button type="button" class="ocf-dot" data-i="${i + 1}"></button>`).join("")}</span></div>`;
      case "yesno":
        return `<div class="ocf ocf-yesno"><span class="ocf-lab">${esc(f.label)}</span><span class="ocf-opts" data-role="yesno"><button type="button" class="ocf-opt" data-val="是">是</button><button type="button" class="ocf-opt" data-val="否">否</button></span><input class="ocf-other" data-id="${f.id}__note" placeholder="说明（可留空）"></div>`;
      case "radar":
        return `<div class="ocf ocf-radar">
          <div class="oc-radar-wrap"><svg class="oc-radar-svg" viewBox="0 0 260 260" data-id="${f.id}" data-max="${f.max}" data-axes="${esc(f.axes.join(","))}"><g class="oc-radar-grid"></g><polygon class="oc-radar-poly" points=""></polygon><g class="oc-radar-labels"></g></svg></div>
          <div class="oc-radar-axes">${f.axes.map((a, k) => `<div class="oc-radar-axis"><span class="oc-axis-name">${esc(a)}</span><span class="ocf-dots" data-role="radar" data-id="${f.id}" data-axis="${k}">${range(f.max).map(i => `<button type="button" class="ocf-dot" data-i="${i + 1}"></button>`).join("")}</span></div>`).join("")}</div>
        </div>`;
      case "quad":
        return `<div class="ocf ocf-quad"><small class="oc-quad-cap">X 轴：羁绊程度　·　Y 轴：命运影响（点方框放置 TA 的位置）</small>
          <div class="oc-quad-pad" data-role="quad"><span class="oc-quad-lab top">${esc(f.yTop)}</span><span class="oc-quad-lab bottom">${esc(f.yBottom)}</span><span class="oc-quad-lab left">${esc(f.xLeft)}</span><span class="oc-quad-lab right">${esc(f.xRight)}</span><span class="oc-quad-axh"></span><span class="oc-quad-axv"></span><span class="oc-quad-dot" hidden></span></div></div>`;
      default: return "";
    }
  }

  function renderCard() {
    const t = state.tpl;
    const sections = t.sections.map(sec =>
      `<section class="oc-sec oc-cols-${sec.cols || 2}">${sec.title ? `<h3 class="oc-sec-title">${esc(sec.title)}</h3>` : ""}<div class="oc-sec-body">${sec.fields.map(renderField).join("")}</div></section>`
    ).join("");
    card().innerHTML =
      `<div class="oc-card-head">
        <button type="button" class="ocf-photo" data-role="photo"><img class="ocf-photo-img" alt=""><span class="ocf-photo-hint">＋<br>头像</span></button>
        <div class="oc-head-main">
          <p class="oc-eyebrow">${esc(t.eyebrow || "CHARACTER SHEET")}</p>
          <h2 class="oc-title">${esc(t.title)}</h2>
          <div class="oc-head-by"><label class="ocf-inline">制表人 <input class="ocf-in" data-id="__author" maxlength="20"></label><label class="ocf-inline">填表人 <input class="ocf-in" data-id="__filler" maxlength="20"></label></div>
        </div>
      </div>
      ${sections}
      <div class="oc-watermark">🎴 pickpickpick.online · 极限二选一 · OC 设定卡</div>`;
    // 预填模板作者
    if (t.by) { const a = card().querySelector('[data-id="__author"]'); if (a) a.value = t.by; }
    // 恢复头像
    if (state.photo) setPhoto(state.photo);
    // 初始化雷达
    card().querySelectorAll(".oc-radar-svg").forEach(initRadar);
  }

  // ---- 交互 ----
  function onCardClick(e) {
    const dot = e.target.closest(".ocf-dot");
    if (dot) { onDot(dot); return; }
    const opt = e.target.closest(".ocf-opt");
    if (opt) { onOpt(opt); return; }
    const photo = e.target.closest(".ocf-photo");
    if (photo) { $("#ocPhotoInput").click(); return; }
    const pad = e.target.closest(".oc-quad-pad");
    if (pad) { onQuad(pad, e); return; }
  }
  function onDot(dot) {
    const group = dot.closest(".ocf-dots");
    const role = group.dataset.role;
    const i = +dot.dataset.i;
    const dots = [...group.querySelectorAll(".ocf-dot")];
    if (role === "slider") {
      const already = dot.classList.contains("on") && !dots.some(d => d !== dot && d.classList.contains("on"));
      dots.forEach(d => d.classList.remove("on"));
      if (!already) dot.classList.add("on");
    } else { // dots / radar：填充到 i；再点同一个则清零
      const cur = dots.filter(d => d.classList.contains("on")).length;
      const target = (cur === i) ? 0 : i;
      dots.forEach(d => d.classList.toggle("on", +d.dataset.i <= target));
    }
    if (role === "radar") updateRadar(group.dataset.id);
  }
  function onOpt(opt) {
    const group = opt.closest(".ocf-opts");
    const role = group.dataset.role;
    if (role === "check") { opt.classList.toggle("on"); return; }
    // choice / yesno：单选
    const on = opt.classList.contains("on");
    group.querySelectorAll(".ocf-opt").forEach(o => o.classList.remove("on"));
    if (!on) opt.classList.add("on");
  }
  function onQuad(pad, e) {
    const r = pad.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    const y = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    const d = pad.querySelector(".oc-quad-dot");
    d.style.left = (x * 100).toFixed(1) + "%";
    d.style.top = (y * 100).toFixed(1) + "%";
    d.hidden = false;
  }

  function initRadar(svg) {
    const cx = 130, cy = 130, R = 92, max = +svg.dataset.max, axes = svg.dataset.axes.split(",");
    const vert = (k, frac) => [cx + R * frac * Math.cos(-Math.PI / 2 + k * Math.PI / 3), cy + R * frac * Math.sin(-Math.PI / 2 + k * Math.PI / 3)];
    let grid = "";
    for (let r = 1; r <= max; r++) {
      const pts = axes.map((_, k) => vert(k, r / max).map(n => n.toFixed(1)).join(",")).join(" ");
      grid += `<polygon points="${pts}" fill="none" stroke="#e3ddd0" stroke-width="1"></polygon>`;
    }
    axes.forEach((_, k) => { const [x, y] = vert(k, 1); grid += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#e3ddd0" stroke-width="1"></line>`; });
    svg.querySelector(".oc-radar-grid").innerHTML = grid;
    let labs = "";
    axes.forEach((a, k) => { const [x, y] = vert(k, 1.2); labs += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" class="oc-radar-lab">${esc(a)}</text>`; });
    svg.querySelector(".oc-radar-labels").innerHTML = labs;
    updateRadar(svg.dataset.id);
  }
  function updateRadar(id) {
    const svg = card().querySelector(`.oc-radar-svg[data-id="${id}"]`); if (!svg) return;
    const cx = 130, cy = 130, R = 92, max = +svg.dataset.max, axes = svg.dataset.axes.split(",");
    const vert = (k, frac) => [cx + R * frac * Math.cos(-Math.PI / 2 + k * Math.PI / 3), cy + R * frac * Math.sin(-Math.PI / 2 + k * Math.PI / 3)];
    const pts = axes.map((_, k) => {
      const row = card().querySelector(`.ocf-dots[data-role="radar"][data-id="${id}"][data-axis="${k}"]`);
      const lvl = row ? row.querySelectorAll(".ocf-dot.on").length : 0;
      return vert(k, lvl / max).map(n => n.toFixed(1)).join(",");
    }).join(" ");
    svg.querySelector(".oc-radar-poly").setAttribute("points", pts);
  }

  function setPhoto(dataUrl) {
    const box = card().querySelector(".ocf-photo"); if (!box) return;
    box.querySelector(".ocf-photo-img").src = dataUrl;
    box.classList.add("has-photo");
  }
  function onPhotoPick(e) {
    const file = e.target.files && e.target.files[0]; e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { state.photo = reader.result; setPhoto(reader.result); };
    reader.readAsDataURL(file);
  }

  async function exportCard() {
    if (typeof html2canvas !== "function") { if (window.showToast) showToast("图片库未加载，请检查网络后重试"); return; }
    if (window.showToast) showToast("正在生成设定卡…");
    const node = card();
    try {
      const canvas = await html2canvas(node, { backgroundColor: "#ffffff", scale: 2, useCORS: true, logging: false, windowWidth: node.scrollWidth });
      if (window.saveCanvas) saveCanvas(canvas, `设定卡-${state.tpl.title}.png`);
    } catch (err) {
      if (window.showToast) showToast("生成失败，请再试一次");
    }
  }

  // ---- 事件绑定 ----
  document.querySelectorAll(".oc-template-card").forEach(c => c.addEventListener("click", () => startTemplate(c.dataset.tpl)));
  $("#ocCard").addEventListener("click", onCardClick);
  $("#ocPhotoInput").addEventListener("change", onPhotoPick);
  $("#exitOcButton").addEventListener("click", () => { if (window.showView) window.showView($("#homeView")); });
  $("#ocBackPickerButton").addEventListener("click", showPicker);
  $("#ocResetButton").addEventListener("click", () => { if (state) { state.photo = null; renderCard(); } });
  $("#ocDownloadButton").addEventListener("click", exportCard);

  window.PickOneOC = { open };
})();
