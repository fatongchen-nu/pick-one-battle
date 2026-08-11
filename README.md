# 极限二选一

一个可自定义题库的淘汰赛网页。从 4—128 个选项中一路二选一，最后生成冠军结果卡和分享链接。

## 本地运行

无需安装依赖，在项目目录执行：

```bash
python3 -m http.server 4173
```

然后访问 <http://localhost:4173>。

## 已有功能

- 10 套内置题库，覆盖同人、音乐剧、影视角色、喜剧作品和小吃
- 自定义 4—128 个选项，自动保存到浏览器
- 随机对阵、逐轮选择、撤回、键盘 A/B 快捷键
- 对阵树进度查看
- 分享结果链接
- 下载包含所有轮次的长图 PNG 完整战报

## 多人社区与永久结果

页面已经支持公开题库、游玩次数、热门冠军、完整对阵树和永久结果 URL。

默认使用浏览器本地数据，方便零配置预览。上线多人版：

1. 创建 Supabase 项目。
2. 在 SQL Editor 执行 `supabase-schema.sql`。
3. 把 Project URL 与 Publishable key（`sb_publishable_...`）填入 `config.js`。
4. 管理员将合规投稿的 `brackets.status` 从 `pending` 改成 `approved`。

配置后，公开题库和永久结果页会自动改用线上 PostgreSQL；无需修改页面代码。
