# 极限二选一：项目交接说明

更新时间：2026-08-16  
当前主分支：`main`  
GitHub：<https://github.com/fatongchen-nu/pick-one-battle>  
线上地址：<https://www.pickpickpick.online/>（旧的 `pick-one-battle.vercel.app` 已弃用；战报/梯度图页脚文字与内嵌二维码 `REPORT_QR` 均已改指新域名）

> 本轮改动（战报改为浅色报纸风表格，与结果页「完整晋级路线」完全一致；同人女极限二选一署名 xhs@degree、用户投稿改为自动公开）
> 尚在本地，请在本机终端 `git push origin main`；「自动公开」还需在 Supabase 执行下方「上线步骤」里的 RLS 策略。

## 1. 产品目标

这是一个无需手填长图的「极限二选一」淘汰赛网站。用户选择题库后，从初始名单逐轮二选一，最终得到唯一冠军，并可查看完整晋级树、下载**报纸风淘汰赛战报（与结果页「完整晋级路线」同款表格）**或分享永久结果页面。

产品还支持用户创建并公开投稿题库、记录题库游玩次数和热门冠军。当前定位为非营利兴趣项目，主页底部已有版权及侵权处理声明。

## 2. 当前技术方案

项目是无构建步骤的静态网页：

- `index.html`：页面结构、各主要视图（首页 / 对局 / 结果 / 梯度表 / OC 设定卡）和弹窗。
- `styles.css`：全部桌面端和移动端样式。
- `app.js`：内置题库、淘汰赛状态、撤回、对阵树、分享、报纸风表格战报绘制、内嵌二维码、梯度表排位、玩法切换。
- `oc.js`：OC 设定卡（两套模板 schema + 通用控件引擎 + html2canvas 出图）。依赖全局 `saveCanvas`/`showView`/`showToast`（在 `app.js` 里）。
- `html2canvas.min.js`：本地内置的 html2canvas 1.4.1（OC 卡出图用；已本地化，不再依赖 CDN）。
- `data-service.js`：Supabase REST API 与本地存储适配层。
- `config.js`：Supabase Project URL 与 Publishable key。
- `supabase-schema.sql`：完整且可重复执行的数据库初始化/同步脚本。
- `supabase-reset-seed-stats.sql`：一次性写入内置题库的初始游玩数据（见第 5 节）。
- `supabase-add-*.sql`、`supabase-expand-presets.sql`：开发过程中的增量脚本，现已被完整的 `supabase-schema.sql` 取代。

本地运行：

```bash
python3 -m http.server 4173
```

访问 <http://localhost:4173>。项目没有 npm 依赖，也没有构建命令。

## 3. 已实现功能

- 支持 4—128 个选项，非 2 的幂会自动轮空。
- 随机首轮对阵、逐轮二选一、撤回选择。
- 支持键盘 `A` / `B` 快捷选择。
- 游戏中查看当前对阵树。
- 结果页展示完整晋级路线。
- **下载报纸风淘汰赛战报（PNG）**：浅色报纸底（米色 `#f6f0e6` + 墨线 + 硬阴影），排版与结果页
  「完整晋级路线」完全一致——**每一轮是一列**（首列初始名单，末列冠军），列头标注轮次
  （32强/16强/8强/半决赛/决赛/🏆冠军）；晋级者浅橙底 + 橙描边高亮、冠军酸绿底 `#d9f64f`、被淘汰者白底。
  页眉含题库标题、🏆冠军、填表人 / 题库作者 / 日期；页脚含**二维码 + 网址**（白垫确保可扫），扫码直达网站。
  尺寸按选项数分档（N≤16 / ≤32 / ≤64 / 其余，格子越多越小），文字自适应缩放并按格宽截断不溢出。
  画布尺寸随轮数横向展开（`W = 两侧留白 + L*colW`），选项多时偏横向，**不再强制竖屏**。
- **战报保存**：手机端优先调用系统分享（`navigator.share` + 文件），可直接保存到相册/文件；
  桌面端及不支持分享的浏览器回退为普通下载。保存流程全程同步（`toDataURL`），
  确保 `share()` 在点击手势内触发、不被浏览器拦截。
- Supabase 在线时生成 `#r=<result-id>` 永久分享链接。
- Supabase 不可用时使用 `#result=<encoded-data>` 分享快照。
- 用户自建题库保存在 `localStorage`；勾选公开后**直接以 `approved` 投稿、即时公开**（不再进入 `pending` 审核队列）。
- 公开题库热度、冠军计数和社区排行榜。
- 创建题库弹窗可通过右上角关闭按钮和 Escape 退出。
- 首页底部有非营利与版权声明。
- **冠军稀有度徽章（少数派钩子）**：用已有 `champion_counts` 算本局冠军占全站冠军票的比例 → 稀有度 SSR/SR/R/N
  （`championRarity()`，<8% SSR / <18% SR / <33% R / 其余 N；总票<10 不显示）。结果页 hero 显示一行「你的冠军只有 X% 的人选到 · 稀有度」（`#rarityLine`），
  战报图右上角盖一枚旋转稀有度印章（`downloadCard()` 里，按 `TIER_COLOR` 上色）。纯前端、零新增后端。
- **三个入口**：首页题库区上方有「⚔️ 极限二选一 / 📊 梯度表排位 / 🎴 OC 设定卡」。前两个是 `playMode`（决定点题库卡的行为，复用同一套题库）；OC 设定卡点一下直接进 `#ocView`（与题库无关）。
- **梯度表排位（`#tierView`）**：手机优先的点选式分档。点档位色块设为「当前档」，再点待分配池中的选项即放入该档；
  点已放好的选项退回池。档位为 S/A/B/C/D（热→冷配色，见 `app.js` 的 `TIERS`）。
  「生成梯度图」用 `downloadTierCard()` 画一张**报纸风梯度图**（左侧彩色档位块 + 右侧选项药丸自动换行，
  页眉标题/填表人/日期、页脚二维码），复用 `saveCanvas` 存图/分享，与战报同款风格。
  出个人梯度图为纯前端。**梯度共识（你 vs 大众梯度）**：点「🌐 看大众梯度」会把你的分档提交到通用计数表并取回全站数据，
  算出每个选项的「大众档」（`tierConsensus()`），对比出你的独特度与最大分歧项（`showTierConsensus()`，面板 `#tierConsensus`）。
  需要联网 + 题库有 `remoteId`；离线或无数据时提示或显示"先行者"。

社交对比通用后端（见 `supabase-social.sql`，梯度共识/小众引擎/成就清单共用）：
  一张 `stat_counters(scope,item,bucket,count)` 表 + `bump_counters(jsonb)` 自增函数（SECURITY DEFINER、每条固定 +1、单次≤300 条防刷）。
  前端封装在 `data-service.js` 的 `bumpCounters(rows)` / `getCounters(scope, item?)`。**上线前需在 Supabase 执行一次 `supabase-social.sql`。**

- **成就清单（`#checkView`，正确版 bingo）**：网站供给主题清单（`CHECKLISTS`，目前 3 份：同人女鉴定 / 音乐剧人 / 成年人碎掉瞬间），
  点勾符合项 → `showCheckResult()` 提交并聚合，算出「X/N 解锁」「解锁数超过 Y% 的人」（分数分布百分位）和你解锁的冷门成就（解锁率最低几项）。
  用 `stat_counters` 的 `check:<listId>` 作用域（item=选项/`__submissions`/`__score`），**复用同一张表，无需新增 SQL**。
  结果做成一张 `#checkCard` 卡片，`downloadCheckCard()` 用 html2canvas 出图。离线可玩、只出个人分数无百分位。

- **双人对比 / 口味契合度（1 带 1 裂变）**：二选一结果页多了「🤝 拉朋友对比」，复制 `#vs=<resultId>`（在线）或 `#vsd=<编码>`（快照）链接。
  朋友打开 → `beginVs()` 载入对方结果、让本人玩同一题库；玩完后 `renderVsComparison()` 算契合度（`vsCompare()`：按每个选项"走到第几轮"的 `itemScores` 归一化后比对），
  展示双方冠军、都爱/分歧项，`downloadVsCard()` 用 html2canvas 出「口味契合度」图。**无需新增 SQL**（复用已有分享结果）。

- **本命九宫格（`#gridView`，`playMode="grid"`）**：选题库后从候选点选前 9（第一个进正中 C 位，`GRID_SLOT_ORDER`），
  `#gridCard` 是 3×3 卡片也是出图目标（`downloadGridCard()` 用 html2canvas）。「🌐 看大众本命」用 `stat_counters` 的 `top9:<remoteId>` 作用域
  聚合"全站最常进九宫格"的选项（`showGridConsensus()`），标出你也选的。**复用同一张表，无需新增 SQL。**
- **OC 设定卡（`#ocView`，`oc.js`）**：两套模板（`是这样的TA` / RPG 风 `人物信息`），先选模板再填。
  数据驱动：每套模板是一个 section/field 的 schema，`TEMPLATES` 里维护；一个通用引擎把它渲染成**所见即所得**的可编辑卡片。
  控件类型：文本 / 多行 / 单选(choice+其他) / 多选(checks) / 双极性格滑条(单点) / 0–5 能力值 / 六边形雷达(SVG，点各轴打分自动重画多边形) / 二维关系网(点方框放点) / 头像上传(FileReader→dataURL) / 是否+说明。
  「生成设定卡图片」用 **html2canvas** 把 `#ocCard` 截成 PNG，再交给 `saveCanvas` 存图/分享。纯前端、不写库。
  新增/改模板字段：改 `oc.js` 的 `TEMPLATES` 即可，引擎与样式无需动。
- **本周新题榜（`#newThemesSection`，`renderNewThemes()`）**：首页 hero 下方展示最近 7 天创建的公开题库（最新在前，最多 8 个），
  横向滑动卡片、NEW 徽标 + 相对时间（今天/昨天/N 天前），点卡片按当前玩法开局。
  创建时间来源：远程题库用 `created_at`（`data-service.js` 的 `listPublicThemes` 已加进 select，并改为 `order=created_at.desc`），
  用户自建题库从 `id`（`custom-<时间戳>`）解析；内置题库无创建时间、永远不进此榜。没有本周新题时整块隐藏。

## 4. 当前内置题库

| 题库 | 数量 | 署名 |
| --- | ---: | --- |
| 同人女极限二选一 | 16 | xhs@degree |
| 《汉密尔顿》歌曲淘汰赛 | 46 | —— |
| 《摩门经》歌曲淘汰赛 | 16 | —— |
| 《Dear Evan Hansen》歌曲淘汰赛 | 14 | —— |
| 《EPIC》全曲淘汰赛 | 40 | —— |
| 漫威角色人气战 | 64 | —— |
| 中式小吃二选一 | 64 | —— |
| 同人女右位 XP 二选一 | 48 | xhs@一只不眠喵 |
| 同人女左位 XP 二选一 | 48 | xhs@一只不眠喵 |
| 喜人作品二选一 | 128 | xhs@没有wifi也没有流量 |
| 同人病状/异常状态XP二选一 | 48 | ZN |

内置题库在 `app.js` 的 `PRESETS` 中维护，每个线上题库都有固定 `remoteId`。新增或修改内置题库时，必须同时更新 `supabase-schema.sql`，否则永久结果写入可能因外键不存在而失败。

关于署名与游玩数据：

- 有 5 个内置题库保留作者（4 个 `xhs@`，含同人女极限二选一 = `xhs@degree`；同人病状/异常状态 = `ZN`）；其余 6 个内置题库不署名（`author` 字段缺省 / 数据库 `author_name` 为 `null`）。
- 首页 `init()` **不再用远程 `author` 覆盖内置题库**，内置题库署名以 `PRESETS` 为准。
- 题库卡片与社区榜在无作者时不显示「by …」。
- 内置题库的初始游玩数（15～47 局）与冠军票是少量真实感基数，冠军票之和等于游玩数、
  票名均为该题库的有效选项。`app.js`、`supabase-schema.sql` 种子、`supabase-reset-seed-stats.sql` 三处保持一致。

## 5. Supabase

项目地址：<https://nhysxbmhccbzgposbxth.supabase.co>

前端使用的是 Publishable key。它可以公开出现在浏览器代码中；不要把 `service_role` key、数据库密码或其他管理员密钥提交到仓库。

数据库包含：

- `brackets`：题库内容、作者、公开状态、审核状态、游玩次数和冠军计数。
- `results`：每次完成后的初始对阵、全部轮次和最终冠军。
- `count_completed_result()`：插入结果后原子累加题库游玩次数和冠军票数。
- RLS：匿名用户可读取已审核公开题库、**投稿可直接写入 `approved`**（仍锁死 `play_count = 0` / `champion_counts = {}`，防伪造热度）、写入和读取分享结果。

### 当前上线步骤（SQL）

1. 在 Supabase SQL Editor 中整段执行 `supabase-schema.sql`。可在已有数据库上安全重复运行：
   升级至 128 项、重建所需 RLS policies（**投稿策略已改为允许直接写入 `approved`**）、同步 11 套内置题库；
   upsert **有意不覆盖** `play_count` 与 `champion_counts`，但会把内置题库的 `author_name` 同步为最新值
   （同人女 = `xhs@degree`，其余 6 个置空）。
2. 执行一次 `supabase-reset-seed-stats.sql`：把 11 个内置题库的 `play_count` / `champion_counts`
   写成少量初始基数（主 schema 的 upsert 不覆盖热度，所以已存在的行只能靠这一步刷新）。
   之后玩家正常游玩累计的真实数据会在此基数上继续增加，重跑 schema 不会清掉。
3. 一次性把历史遗留、卡在待审核的投稿放出来（自动公开前提交的题库仍是 `pending`）：
   `update public.brackets set status = 'approved' where status = 'pending';`

旧的 `supabase-add-*` 增量 SQL 不需要再执行。

## 6. 数据与分享逻辑

页面启动时先加载本地 `PRESETS`，再读取 Supabase 已审核题库：

- `remoteId` 相同：只用线上数据刷新热度、冠军统计（**不再覆盖作者**），本地题目内容仍作为内置版本。
- 新的远程题库：追加到首页。
- Supabase 请求失败：继续显示本地题库。

本地存储键：

- `pickone-themes`：用户创建的题库。
- `pickone-stats`：离线游玩次数和冠军计数。
- `pickone-results`：离线结果快照。

战报/梯度图里的二维码是内嵌的静态 PNG（`app.js` 顶部 `REPORT_QR` 常量），当前指向 <https://www.pickpickpick.online/>。
它不依赖网络、不会污染 canvas 导出。**如果线上域名再变化，需要重新生成该二维码并替换常量，同时改页脚显示的网址文字（`downloadCard()` 与 `downloadTierCard()` 各有一处）。**

## 7. GitHub 与 Vercel

GitHub 仓库为公开仓库，远程地址是：

```text
git@github.com:fatongchen-nu/pick-one-battle.git
```

该静态站无需填写构建命令，输出目录为项目根目录。若 Vercel 已连接该仓库，推送 `main` 会自动部署。

> 注意：在云端沙箱里对本仓库执行 git 会残留删不掉的 `.git/*.lock`，并可能挡住提交/推送。
> 请在本机终端操作 git；若遇到 `HEAD.lock` / `index.lock` 报 “File exists”，先 `rm -f .git/*.lock .git/objects/*.lock` 再重试。

## 8. 验证清单

部署或改动后至少检查：

1. 首页能显示全部 11 套题库；6 个不显示作者，5 个显示作者（4 个 `xhs@`，含同人女 = `xhs@degree`；病状/异常状态 = `ZN`）。
2. 首页「大家正在选」显示少量真实感数据（非 12843 这类假数字）。
3. 14、40、46、48、64、128 项题库均能开始，轮空题不会卡住。
4. 撤回后进度、当前对阵和后续轮次正确。
5. 完成一局后 Supabase `results` 新增记录，`brackets.play_count` 与 `champion_counts` 自动增加。
6. 复制的永久链接可在另一浏览器打开。
7. 下载战报：浅色报纸底、每轮一列且列头轮次正确、晋级者橙色高亮、冠军酸绿、被淘汰者白底、页眉题库/冠军/署名齐全、底部二维码可扫（解码到线上地址）、文字自适应不裁切。
8. 手机端下载战报会弹出系统分享/保存，能存进相册；桌面端正常下载。
9. 手机宽度下题库卡片、选择按钮、弹窗、首页 hero 的 VS 徽标显示正常。
10. 新建一个公开题库后，在**另一台设备/浏览器**（匿名）刷新首页应能立即看到（自动公开生效）。

目前已执行的静态检查包括 `node --check app.js`、题库数量/重复项校验、冠军票名有效性校验，
以及用 node-canvas 对报纸风表格战报（4/14/16/32/48/64/128 项，均验证列数/轮次标签/含二维码）实跑出图验证。

## 9. 建议的下一步

优先级从高到低：

1. 推送本轮改动并做一次线上回归（永久分享、手机保存战报、扫码跳转）。
2. 确认 Vercel 生产 URL 和 GitHub 自动部署状态。
3. 首页题库已经较多，增加分类筛选或搜索：音乐剧、影视、美食、同人、喜剧。
4. 为侵权声明补充明确但防垃圾邮件的联系渠道。
5. **投稿已改为自动公开、无审核门槛**：优先补上限流、举报、脏词/内容长度过滤等滥用防护。
6. 如需恢复人工审核：把 `data-service.js` 的投稿 `status` 改回 `pending`、收紧 RLS 插入策略（`status = 'pending'`），并做一个审核界面。
7. 增加自动化浏览器测试，覆盖轮空、撤回、分享恢复、手机保存与 128 项战报。

## 10. 注意事项

- 不要提交 Supabase `service_role` key。
- 不要删除或改变已经上线题库的固定 UUID，否则旧结果和统计会断开。
- 修改内置题库时，始终同步更新 `app.js` 与 `supabase-schema.sql`（题库内容、作者、初始数据）。
- `supabase-schema.sql` 的 upsert 有意不覆盖热度与冠军票数；重置初始数据用 `supabase-reset-seed-stats.sql`。
- 战报/梯度图二维码写死在 `app.js` 的 `REPORT_QR`（现指向 pickpickpick.online）；换域名需重新生成替换，并同步改两处页脚网址文字。
- 首页 hero 的 VS 徽标位置在 `styles.css` 的 `.versus-burst`（`left` / `top` 百分比），可微调。
- 战报现为浅色报纸风表格，与结果页「完整晋级路线」同款；宽度随轮数横向展开（`W = 两侧留白 + L*colW`），
  选项/轮数多时会偏横向，配色与尺寸分档见 `downloadCard()` 里的 `C` 常量与 `slotH/gap/font` 分档。
- 投稿自动公开依赖 RLS 策略允许写入 `approved`；改动 `data-service.js` 的投稿 `status` 时，务必同步 `supabase-schema.sql` 的插入策略，否则前端与数据库会不一致导致发布失败。
- 仓库可能包含用户自己的未提交修改（如 `.Rhistory`）；操作前先检查 `git status`。
