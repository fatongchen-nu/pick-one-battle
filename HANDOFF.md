# 极限二选一：项目交接说明

更新时间：2026-08-11  
当前主分支：`main`  
GitHub：<https://github.com/fatongchen-nu/pick-one-battle>  
线上地址：<https://pick-one-battle.vercel.app/>

> 本轮改动（竖版战报、二维码、手机保存、文案精简、作者与初始数据调整）已提交到本地 `main`，
> 请在本机终端 `git push origin main`，并在 Supabase 执行下方「上线步骤」里的 SQL。

## 1. 产品目标

这是一个无需手填长图的「极限二选一」淘汰赛网站。用户选择题库后，从初始名单逐轮二选一，最终得到唯一冠军，并可查看完整晋级树、下载**竖版对阵战报**或分享永久结果页面。

产品还支持用户创建并公开投稿题库、记录题库游玩次数和热门冠军。当前定位为非营利兴趣项目，主页底部已有版权及侵权处理声明。

## 2. 当前技术方案

项目是无构建步骤的静态网页：

- `index.html`：页面结构、三个主要视图和弹窗。
- `styles.css`：全部桌面端和移动端样式。
- `app.js`：内置题库、淘汰赛状态、撤回、对阵树、分享、竖版对阵战报绘制、内嵌二维码。
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
- **下载竖版对阵战报（PNG）**：选手从上下两端向中央的冠军收拢，冠军金色大框居中、
  文字自适应缩放不溢出，冠军晋级路线橙色高亮；战报底部含**二维码 + 网址**，扫码直达网站。
- **战报保存**：手机端优先调用系统分享（`navigator.share` + 文件），可直接保存到相册/文件；
  桌面端及不支持分享的浏览器回退为普通下载。保存流程全程同步（`toDataURL`），
  确保 `share()` 在点击手势内触发、不被浏览器拦截。
- Supabase 在线时生成 `#r=<result-id>` 永久分享链接。
- Supabase 不可用时使用 `#result=<encoded-data>` 分享快照。
- 用户自建题库保存在 `localStorage`，公开投稿进入 `pending` 状态。
- 公开题库热度、冠军计数和社区排行榜。
- 创建题库弹窗可通过右上角关闭按钮和 Escape 退出。
- 首页底部有非营利与版权声明。

## 4. 当前内置题库

| 题库 | 数量 | 署名 |
| --- | ---: | --- |
| 同人女极限二选一 | 16 | —— |
| 《汉密尔顿》歌曲淘汰赛 | 46 | —— |
| 《摩门经》歌曲淘汰赛 | 16 | —— |
| 《Dear Evan Hansen》歌曲淘汰赛 | 14 | —— |
| 《EPIC》全曲淘汰赛 | 40 | —— |
| 漫威角色人气战 | 64 | —— |
| 中式小吃二选一 | 64 | —— |
| 同人女右位 XP 二选一 | 48 | xhs@一只不眠喵 |
| 同人女左位 XP 二选一 | 48 | xhs@一只不眠喵 |
| 喜人作品二选一 | 128 | xhs@没有wifi也没有流量 |

内置题库在 `app.js` 的 `PRESETS` 中维护，每个线上题库都有固定 `remoteId`。新增或修改内置题库时，必须同时更新 `supabase-schema.sql`，否则永久结果写入可能因外键不存在而失败。

关于署名与游玩数据：

- 只有 3 个 `xhs@` 投稿题库保留作者；其余 7 个内置题库不署名（`author` 字段已移除 / 数据库 `author_name` 为 `null`）。
- 首页 `init()` **不再用远程 `author` 覆盖内置题库**，内置题库署名以 `PRESETS` 为准。
- 题库卡片与社区榜在无作者时不显示「by …」。
- 内置题库的初始游玩数（16～47 局）与冠军票是少量真实感基数，冠军票之和等于游玩数、
  票名均为该题库的有效选项。`app.js`、`supabase-schema.sql` 种子、`supabase-reset-seed-stats.sql` 三处保持一致。

## 5. Supabase

项目地址：<https://nhysxbmhccbzgposbxth.supabase.co>

前端使用的是 Publishable key。它可以公开出现在浏览器代码中；不要把 `service_role` key、数据库密码或其他管理员密钥提交到仓库。

数据库包含：

- `brackets`：题库内容、作者、公开状态、审核状态、游玩次数和冠军计数。
- `results`：每次完成后的初始对阵、全部轮次和最终冠军。
- `count_completed_result()`：插入结果后原子累加题库游玩次数和冠军票数。
- RLS：匿名用户只能读取已审核公开题库、提交待审核题库、写入和读取分享结果。

### 当前上线步骤（SQL）

1. 在 Supabase SQL Editor 中整段执行 `supabase-schema.sql`。可在已有数据库上安全重复运行：
   升级至 128 项、重建所需 RLS policies、同步 10 套内置题库；upsert **有意不覆盖** `play_count`
   与 `champion_counts`，但会把内置题库的 `author_name` 同步为最新值（7 个已置空）。
2. 执行一次 `supabase-reset-seed-stats.sql`：把 10 个内置题库的 `play_count` / `champion_counts`
   写成少量初始基数（主 schema 的 upsert 不覆盖热度，所以已存在的行只能靠这一步刷新）。
   之后玩家正常游玩累计的真实数据会在此基数上继续增加，重跑 schema 不会清掉。

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

战报里的二维码是内嵌的静态 PNG（`app.js` 顶部 `REPORT_QR` 常量），指向线上地址。
它不依赖网络、不会污染 canvas 导出。**如果线上域名变化，需要重新生成该二维码并替换常量。**

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

1. 首页能显示全部 10 套题库；7 个不显示作者，3 个 `xhs@` 正常显示。
2. 首页「大家正在选」显示少量真实感数据（非 12843 这类假数字）。
3. 14、40、46、48、64、128 项题库均能开始，轮空题不会卡住。
4. 撤回后进度、当前对阵和后续轮次正确。
5. 完成一局后 Supabase `results` 新增记录，`brackets.play_count` 与 `champion_counts` 自动增加。
6. 复制的永久链接可在另一浏览器打开。
7. 下载竖版对阵战报：冠军居中不溢出、路线高亮、底部二维码可扫（解码到线上地址）、文字不裁切。
8. 手机端下载战报会弹出系统分享/保存，能存进相册；桌面端正常下载。
9. 手机宽度下题库卡片、选择按钮、弹窗、首页 hero 的 VS 徽标显示正常。

目前已执行的静态检查包括 `node --check app.js`、题库数量/重复项校验、冠军票名有效性校验，
以及用 node-canvas 对竖版战报（含 4/14/16/32/48/64/128 项与二维码）实跑出图验证。

## 9. 建议的下一步

优先级从高到低：

1. 推送本轮改动并做一次线上回归（永久分享、手机保存战报、扫码跳转）。
2. 确认 Vercel 生产 URL 和 GitHub 自动部署状态。
3. 首页题库已经较多，增加分类筛选或搜索：音乐剧、影视、美食、同人、喜剧。
4. 为侵权声明补充明确但防垃圾邮件的联系渠道。
5. 增加管理员审核界面，目前公开投稿需在 Supabase 中手动把 `pending` 改为 `approved`。
6. 为匿名投稿和结果写入增加限流、举报、内容长度检查和滥用防护。
7. 增加自动化浏览器测试，覆盖轮空、撤回、分享恢复、手机保存与 128 项战报。

## 10. 注意事项

- 不要提交 Supabase `service_role` key。
- 不要删除或改变已经上线题库的固定 UUID，否则旧结果和统计会断开。
- 修改内置题库时，始终同步更新 `app.js` 与 `supabase-schema.sql`（题库内容、作者、初始数据）。
- `supabase-schema.sql` 的 upsert 有意不覆盖热度与冠军票数；重置初始数据用 `supabase-reset-seed-stats.sql`。
- 战报二维码写死在 `app.js` 的 `REPORT_QR`；换域名需重新生成替换。
- 首页 hero 的 VS 徽标位置在 `styles.css` 的 `.versus-burst`（`left` / `top` 百分比），可微调。
- 竖版战报为「选手横向铺开」，题库越大图越宽（128 项约 6752px 宽），属正常现象。
- 仓库可能包含用户自己的未提交修改（如 `.Rhistory`）；操作前先检查 `git status`。
