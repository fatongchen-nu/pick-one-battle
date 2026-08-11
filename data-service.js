(function () {
  const config = window.PICKONE_CONFIG || {};
  const apiKey = config.supabasePublishableKey || config.supabaseAnonKey || "";
  const online = Boolean(config.supabaseUrl && apiKey);
  const resultKey = "pickone-results";

  function headers(extra = {}) {
    const base = {
      apikey: apiKey,
      "Content-Type": "application/json",
    };
    // 旧版 anon key 是 JWT；新版 sb_publishable_ key 只应放在 apikey 头中。
    if (!apiKey.startsWith("sb_publishable_")) base.Authorization = `Bearer ${apiKey}`;
    return { ...base, ...extra };
  }

  async function request(path, options = {}) {
    const response = await fetch(`${config.supabaseUrl}/rest/v1/${path}`, {
      ...options,
      headers: headers(options.headers)
    });
    if (!response.ok) throw new Error(`Database request failed: ${response.status}`);
    const body = await response.text();
    return body ? JSON.parse(body) : null;
  }

  function localResults() {
    try { return JSON.parse(localStorage.getItem(resultKey) || "{}"); }
    catch { return {}; }
  }

  window.PickOneDB = {
    online,

    async listPublicThemes() {
      if (!online) return [];
      const rows = await request("brackets?visibility=eq.public&status=eq.approved&select=id,title,emoji,description,items,author_name,play_count,champion_counts&order=play_count.desc&limit=30");
      return rows.map(row => ({
        id: `remote-${row.id}`, remoteId: row.id, title: row.title, emoji: row.emoji,
        description: row.description || "社区公开题库", items: row.items,
        author: row.author_name || "匿名玩家", plays: row.play_count || 0,
        championStats: row.champion_counts || {}, public: true
      }));
    },

    async publishTheme(theme) {
      if (!online) return { local: true };
      const id = crypto.randomUUID();
      await request("brackets", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          id, title: theme.title, emoji: theme.emoji, description: theme.description,
          items: theme.items, author_name: theme.author || null,
          visibility: "public", status: "pending"
        })
      });
      return { id, pending: true };
    },

    async saveResult(payload) {
      if (!online) {
        const all = localResults();
        const id = payload.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
        all[id] = { ...payload, id };
        localStorage.setItem(resultKey, JSON.stringify(all));
        return { id, local: true };
      }
      const rows = await request("results", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify({
          bracket_id: payload.remoteId || null, bracket_title: payload.title,
          bracket_emoji: payload.emoji, author_name: payload.author || null,
          initial_items: payload.initialItems, rounds: payload.rounds,
          winner: payload.winner
        })
      });
      return { id: rows[0].id };
    },

    async getResult(id) {
      if (!online) return localResults()[id] || null;
      const rows = await request(`results?id=eq.${encodeURIComponent(id)}&select=*&limit=1`);
      if (!rows[0]) return null;
      const row = rows[0];
      return {
        id: row.id, remoteId: row.bracket_id, title: row.bracket_title,
        emoji: row.bracket_emoji, author: row.author_name,
        initialItems: row.initial_items, rounds: row.rounds,
        winner: row.winner, createdAt: row.created_at
      };
    }
  };
})();
