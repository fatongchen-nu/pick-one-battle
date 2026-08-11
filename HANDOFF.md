# 极限二选一：项目交接说明

更新时间：2026-08-11  
当前主分支：`main`  
交接时提交：`583ae9f`  
GitHub：<https://github.com/fatongchen-nu/pick-one-battle>

## 1. 产品目标

这是一个无需手填长图的“极限二选一”淘汰赛网站。用户选择题库后，从初始名单逐轮二选一，最终得到唯一冠军，并可查看完整晋级树、下载长图战报或分享永久结果页面。

产品还支持用户创建并公开投稿题库、记录题库游玩次数和热门冠军。当前定位为非营利兴趣项目，主页底部已有版权及侵权处理声明。

## 2. 当前技术方案

项目是无构建步骤的静态网页：

- `index.html`：页面结构、三个主要视图和弹窗。
- `styles.css`：全部桌面端和移动端样式。
- `app.js`：内置题库、淘汰赛状态、撤回、对阵树、分享和下载长图。
- `data-service.js`：Supabase REST API 与本地存储适配层。
- `config.js`：Supabase Project URL 与 Publishable key。
- `supabase-schema.sql`：完整且可重复执行的数据库初始化/同步脚本。
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
- 下载包含全部轮次的 PNG 长图。
- Supabase 在线时生成 `#r=<result-id>` 永久分享链接。
- Supabase 不可用时使用 `#result=<encoded-data>` 分享快照。
- 用户自建题库保存在 `localStorage`，公开投稿进入 `pending` 状态。
- 公开题库热度、冠军计数和社区排行榜。
- 创建题库弹窗可通过右上角关闭按钮和 Escape 退出。
- 首页底部有非营利与版权声明。

## 4. 当前内置题库

| 题库 | 数量 | 署名 |
| --- | ---: | --- |
| 同人女极限二选一 | 16 | degree |
| 《汉密尔顿》歌曲淘汰赛 | 46 | Broadway 茶水间 |
| 《摩门经》歌曲淘汰赛 | 16 | 音乐剧观察员 |
| 《Dear Evan Hansen》歌曲淘汰赛 | 14 | Broadway 茶水间 |
| 《EPIC》全曲淘汰赛 | 40 | 音乐剧观察员 |
| 漫威角色人气战 | 64 | 极限二选一编辑部 |
| 中式小吃二选一 | 64 | 极限二选一编辑部 |
| 同人女右位 XP 二选一 | 48 | xhs@一只不眠喵 |
| 同人女左位 XP 二选一 | 48 | xhs@一只不眠喵 |
| 喜人作品二选一 | 128 | xhs@没有wifi也没有流量 |

内置题库在 `app.js` 的 `PRESETS` 中维护，每个线上题库都有固定 `remoteId`。新增或修改内置题库时，必须同时更新 `supabase-schema.sql`，否则永久结果写入可能因外键不存在而失败。

## 5. Supabase

项目地址：<https://nhysxbmhccbzgposbxth.supabase.co>

前端使用的是 Publishable key。它可以公开出现在浏览器代码中；不要把 `service_role` key、数据库密码或其他管理员密钥提交到仓库。

数据库包含：

- `brackets`：题库内容、作者、公开状态、审核状态、游玩次数和冠军计数。
- `results`：每次完成后的初始对阵、全部轮次和最终冠军。
- `count_completed_result()`：插入结果后原子累加题库游玩次数和冠军票数。
- RLS：匿名用户只能读取已审核公开题库、提交待审核题库、写入和读取分享结果。

### 当前必须执行的上线步骤

在 Supabase SQL Editor 中整段执行 `supabase-schema.sql`。这是目前唯一需要执行的 SQL：

- 可在已有数据库上安全重复运行。
- 将题库及结果限制升级至 128 项。
- 重建所需 RLS policies，避免“policy already exists”。
- 同步全部 10 套内置题库。
- 再次执行不会清空已有 `play_count` 或 `champion_counts`。

旧的增量 SQL 不需要再执行。

## 6. 数据与分享逻辑

页面启动时先加载本地 `PRESETS`，再读取 Supabase 已审核题库：

- `remoteId` 相同：只用线上数据刷新热度、冠军统计和作者，本地题目内容仍作为内置版本。
- 新的远程题库：追加到首页。
- Supabase 请求失败：继续显示本地题库。

本地存储键：

- `pickone-themes`：用户创建的题库。
- `pickone-stats`：离线游玩次数和冠军计数。
- `pickone-results`：离线结果快照。

## 7. GitHub 与 Vercel

GitHub 仓库为公开仓库，远程地址是：

```text
git@github.com:fatongchen-nu/pick-one-battle.git
```

代码已推送到 `main`。用户已登录 Vercel，但本次交接前没有记录最终生产域名，也没有在仓库中发现 `.vercel/` 配置被提交。若 Vercel 项目已经连接该 GitHub 仓库，推送 `main` 会自动部署；否则需要在 Vercel 导入仓库。该静态站无需填写构建命令，输出目录为项目根目录。

## 8. 验证清单

部署或改动后至少检查：

1. 首页能显示全部 10 套题库，作者署名正确。
2. 14、40、46、48、64、128 项题库均能开始，轮空题不会卡住。
3. 撤回后进度、当前对阵和后续轮次正确。
4. 完成一局后 Supabase `results` 新增记录。
5. 对应 `brackets.play_count` 与 `champion_counts` 自动增加。
6. 复制的永久链接可在另一浏览器打开。
7. 128 项结果可下载完整长图，文字没有被裁切。
8. 手机宽度下题库卡片、选择按钮和弹窗可以正常操作。

目前已执行的静态检查包括 `node --check app.js`、题库数量/重复项校验和 `git diff --check`。

## 9. 建议的下一步

优先级从高到低：

1. 让用户执行最新 `supabase-schema.sql`，再做一次线上永久分享回归测试。
2. 确认 Vercel 生产 URL 和 GitHub 自动部署状态。
3. 首页题库已经较多，增加分类筛选或搜索：音乐剧、影视、美食、同人、喜剧。
4. 为侵权声明补充明确但防垃圾邮件的联系渠道。
5. 增加管理员审核界面，目前公开投稿需在 Supabase 中手动把 `pending` 改为 `approved`。
6. 为匿名投稿和结果写入增加限流、举报、内容长度检查和滥用防护。
7. 增加自动化浏览器测试，覆盖轮空、撤回、分享恢复和 128 项长图。

## 10. 注意事项

- 不要提交 Supabase `service_role` key。
- 不要删除或改变已经上线题库的固定 UUID，否则旧结果和统计会断开。
- 修改内置题库时，始终同步更新 `app.js` 与 `supabase-schema.sql`。
- `supabase-schema.sql` 的 upsert 有意不覆盖热度与冠军票数。
- 仓库可能包含用户自己的未提交修改；操作前先检查 `git status`。
