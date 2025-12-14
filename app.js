const MOCK_USERS = {
  admin: {
    id: 'u-admin',
    name: 'Kwame Mensah',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1522512115668-c09775d6f424?q=80&w=200&auto=format&fit=crop'
  },
  editor: {
    id: 'u-editor',
    name: 'Sarah Jenkins',
    role: 'editor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  viewer: {
    id: 'u-viewer',
    name: 'David Okeke',
    role: 'viewer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
};

const INITIAL_ASSETS = [
  {
    id: 'ast-101',
    title: 'Black Sherif - Kilos Milos (Official Video Final Cut)',
    url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop',
    type: 'video',
    tags: ['black sherif', 'music video', 'konongo zongo', 'afrobeats', 'highlife'],
    description: 'Final graded version of the Kilos Milos music video ready for broadcast on 3Music TV.',
    uploadedBy: 'Sarah Jenkins',
    uploadDate: '2024-05-15T10:30:00Z',
    fileSize: '450.4 MB',
    securityLevel: 'restricted',
    isFavorite: true,
  },
  {
    id: 'ast-102',
    title: 'Accra Independence Square - Drone Footage Raw',
    url: 'https://images.unsplash.com/photo-1543169865-c8b544d6db8b?q=80&w=1000&auto=format&fit=crop',
    type: 'video',
    tags: ['accra', 'drone', 'b-roll', 'independence square', 'ghana', 'stock'],
    description: 'Unedited 4K aerial shots of Black Star Square for the "Visit Ghana" campaign documentary.',
    uploadedBy: 'David Okeke',
    uploadDate: '2024-05-14T15:00:00Z',
    fileSize: '1.2 GB',
    securityLevel: 'public',
    isFavorite: false,
  },
  {
    id: 'ast-103',
    title: 'Sarkodie - Rapperholic 2024 Promo Poster',
    url: 'https://images.unsplash.com/photo-1514525253440-b393452e27e9?q=80&w=1000&auto=format&fit=crop',
    type: 'image',
    tags: ['sarkodie', 'rapperholic', 'concert', 'marketing', 'grand arena'],
    description: 'High-res poster for social media and billboards. Needs final approval from Sarkess Music.',
    uploadedBy: 'Emmanuel Boateng',
    uploadDate: '2024-05-14T14:15:00Z',
    fileSize: '12.1 MB',
    securityLevel: 'internal',
    isFavorite: true,
  },
  {
    id: 'ast-104',
    title: 'Strategic Partnership - 3Media x Joy Prime',
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    type: 'document',
    tags: ['contract', 'partnership', 'legal', 'restricted', 'media'],
    description: 'Signed MOU regarding content syndication between 3Media Networks and Joy Prime.',
    uploadedBy: 'Kwame Mensah',
    uploadDate: '2024-05-12T09:00:00Z',
    fileSize: '2.5 MB',
    securityLevel: 'restricted',
    isFavorite: false,
  },
  {
    id: 'ast-105',
    title: 'Chale Wote Street Art Festival - Coverage Plan',
    url: 'https://images.unsplash.com/photo-1572914857229-37bf6ee84063?q=80&w=1000&auto=format&fit=crop',
    type: 'document',
    tags: ['chale wote', 'jamestown', 'events', 'production', 'schedule'],
    description: 'Logistics and crew deployment schedule for the upcoming Chale Wote festival in Jamestown.',
    uploadedBy: 'Sarah Jenkins',
    uploadDate: '2024-05-11T16:45:00Z',
    fileSize: '845 KB',
    securityLevel: 'internal',
    isFavorite: false,
  },
  {
    id: 'ast-106',
    title: 'Ghana Jollof vs Naija Jollof - Cookout Banner',
    url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1000&auto=format&fit=crop',
    type: 'image',
    tags: ['food', 'jollof', 'culture', 'social media', 'engagement'],
    description: 'Web banner for the Independence Day food rivalry segment.',
    uploadedBy: 'David Okeke',
    uploadDate: '2024-05-10T11:20:00Z',
    fileSize: '3.2 MB',
    securityLevel: 'public',
    isFavorite: false,
  },
  {
    id: 'ast-107',
    title: '3Music Awards 2025 - Stage Design Render',
    url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop',
    type: 'image',
    tags: ['3music', 'awards', 'stage', 'production', 'design'],
    description: '3D visualization of the new stage layout at Grand Arena.',
    uploadedBy: 'Kwame Mensah',
    uploadDate: '2024-05-09T14:30:00Z',
    fileSize: '25.6 MB',
    securityLevel: 'internal',
    isFavorite: false,
  }
];

const INITIAL_LOGS = [
  {
    id: 'log-001',
    userId: 'u-editor',
    userName: 'Sarah Jenkins',
    action: 'UPLOAD',
    details: 'Uploaded "Black Sherif - Kilos Milos (Official Video Final Cut)"',
    timestamp: '2024-05-15T10:30:05Z',
    ipAddress: '192.168.1.42',
  },
  {
    id: 'log-002',
    userId: 'u-viewer',
    userName: 'David Okeke',
    action: 'VIEW',
    details: 'Accessed "Ghana Jollof vs Naija Jollof - Cookout Banner"',
    timestamp: '2024-05-15T11:20:00Z',
    ipAddress: '10.0.5.12',
  },
  {
    id: 'log-003',
    userId: 'u-admin',
    userName: 'Kwame Mensah',
    action: 'DELETE',
    details: 'Removed "Accra_Budget_2023_Draft.pdf"',
    timestamp: '2024-05-15T09:15:00Z',
    ipAddress: '192.168.1.10',
  },
  {
    id: 'log-004',
    userId: 'u-004',
    userName: 'Emmanuel Boateng',
    action: 'LOGIN',
    details: 'Successful authentication via VPN (Accra Node)',
    timestamp: '2024-05-15T08:00:00Z',
    ipAddress: '10.0.5.55',
  },
];

const ViewState = {
  LOGIN: 'login',
  DASHBOARD: 'dashboard',
  UPLOAD: 'upload',
  AUDIT: 'audit'
};

const state = {
  theme: 'light',
  view: ViewState.LOGIN,
  currentUser: null,
  assets: [...INITIAL_ASSETS],
  logs: [...INITIAL_LOGS],
  selectedAssetId: null,
  login: { role: null, employeeId: '', error: '' },
  assetFilters: { search: '', type: 'all', favoritesOnly: false },
  selection: { enabled: false, ids: [] },
  upload: { file: null, preview: '', metadata: null, progress: 0, status: 'idle' },
  audit: { search: '', onlyCritical: false }
};

const appEl = document.getElementById('app');

function init() {
  // Remove any duplicate records that may exist from prior sessions/imports.
  state.assets = dedupeById(state.assets);
  state.logs = dedupeById(state.logs);
  setTheme(state.theme, false);
  render();
}

document.addEventListener('DOMContentLoaded', init);

function setTheme(next, shouldRender = true) {
  state.theme = next;
  document.body.dataset.theme = next;
  if (shouldRender) render();
}

function dedupeById(items) {
  const seen = new Set();
  return items.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function setView(view) {
  state.view = view;
  state.selectedAssetId = null;
  state.selection = { enabled: false, ids: [] };
  render();
}

function addLog(action, details) {
  if (!state.currentUser) return;
  const entry = {
    id: `log-${Date.now()}`,
    userId: state.currentUser.id,
    userName: state.currentUser.name,
    action,
    details,
    timestamp: new Date().toISOString(),
    ipAddress: '192.168.1.10'
  };
  state.logs = [...state.logs, entry];
}

function permissions() {
  const user = state.currentUser;
  if (!user) return { canUpload: false, canDelete: false, canViewAudit: false, canViewRestricted: false };
  return {
    canUpload: user.role === 'admin' || user.role === 'editor',
    canDelete: user.role === 'admin',
    canViewAudit: user.role === 'admin',
    canViewRestricted: user.role === 'admin' || user.role === 'editor'
  };
}

function visibleAssets() {
  const perm = permissions();
  if (!perm.canViewRestricted) {
    return state.assets.filter(a => a.securityLevel !== 'restricted');
  }
  return state.assets;
}

function render() {
  if (!state.currentUser || state.view === ViewState.LOGIN) {
    appEl.innerHTML = renderLogin();
    bindLogin();
    return;
  }

  appEl.innerHTML = `
    <div class="app-shell">
      ${renderHeader()}
      <main class="main">
        <div class="container">
          ${renderView()}
        </div>
      </main>
    </div>
  `;

  bindHeader();
  bindView();
  if (state.selectedAssetId) mountAssetModal();
}

function renderHeader() {
  const perm = permissions();
  return `
    <header class="header">
      <div class="container header__inner">
        <a class="brand" data-action="go-dashboard" href="https://www.youtube.com/channel/UCcvZrECWjP0Mj5Y_U9jxlGQ" target="_blank" rel="noopener noreferrer" title="3Music YouTube Channel">
          <div class="brand__logo" aria-label="3Music">
            <img src="logo.png" alt="3Music logo" loading="lazy"
              onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22 viewBox=%220 0 48 48%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 stop-color=%23e11d48/%3E%3Cstop offset=%2250%25%22 stop-color=%23fb7185/%3E%3Cstop offset=%22100%25%22 stop-color=%23f59e0b/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect rx=%2212%22 width=%2248%22 height=%2248%22 fill=%22%23000000%22/%3E%3Cpath fill=%22url(%23g)%22 d=%22M12 12h10l-7 6 8 6-8 6h21v-7l-6-5 6-5v-7H12z%22/%3E%3C/svg%3E';" />
          </div>
          <div>
            <div>3Music</div>
            <div class="small">Media Networks · Secure Vault</div>
          </div>
        </a>
        <nav class="nav">
          <button data-nav="${ViewState.DASHBOARD}" class="${state.view === ViewState.DASHBOARD ? 'active' : ''}">Dashboard</button>
          ${perm.canUpload ? `<button data-nav="${ViewState.UPLOAD}" class="${state.view === ViewState.UPLOAD ? 'active' : ''}">Upload</button>` : ''}
          ${perm.canViewAudit ? `<button data-nav="${ViewState.AUDIT}" class="${state.view === ViewState.AUDIT ? 'active' : ''}">Audit</button>` : ''}
        </nav>
        <div class="header__actions">
          <button class="btn-ghost" data-action="toggle-theme">${state.theme === 'light' ? 'Dark' : 'Light'} Mode</button>
          <div class="badge">${state.currentUser.role}</div>
          <img src="${state.currentUser.avatar}" alt="avatar" class="avatar" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%2218%22 fill=%22%23e11d48%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2216%22 font-weight=%22bold%22%3E${state.currentUser.name.charAt(0)}%3C/text%3E%3C/svg%3E';" />
          <button class="btn-ghost" data-action="logout">Logout</button>
        </div>
      </div>
    </header>
  `;
}

function renderView() {
  if (state.view === ViewState.DASHBOARD) return renderDashboard();
  if (state.view === ViewState.UPLOAD) return renderUpload();
  if (state.view === ViewState.AUDIT) return renderAudit();
  return '<p>Unknown view</p>';
}

function renderDashboard() {
  const assets = visibleAssets();
  const stats = [
    { label: 'Total Assets', value: assets.length },
    { label: 'Restricted', value: assets.filter(a => a.securityLevel === 'restricted').length },
    { label: 'Favorites', value: assets.filter(a => a.isFavorite).length },
    { label: 'Downloads (logs)', value: state.logs.filter(l => l.action === 'DOWNLOAD').length }
  ];

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  })();

  const firstName = state.currentUser.name.split(' ')[0];
  const restrictedCount = stats[1].value;
  const favoriteCount = stats[2].value;

  return `
    <div class="section dashboard-hero" style="margin-bottom:14px;">
      <div>
        <div class="eyebrow">3Music Control Center</div>
        <h2 style="margin:4px 0 8px;">${greeting}, ${firstName}.</h2>
        <p class="small" style="margin:0 0 12px; max-width:520px;">Track assets, triage restricted items, and jump into uploads without leaving this view.</p>
        <div class="chip-row">
          ${['all','image','video','document'].map(t => `
            <button type="button" class="chip ${state.assetFilters.type===t?'active':''}" data-quick-filter="${t}">${t.toUpperCase()}</button>
          `).join('')}
          <button type="button" class="chip ${state.assetFilters.favoritesOnly?'active':''}" data-quick-favorite>
            ${state.assetFilters.favoritesOnly ? '★ Favorites only' : 'Show favorites'}
          </button>
          <button type="button" class="chip" data-action="toggle-select">${state.selection.enabled ? 'Done selecting' : 'Bulk select'}</button>
        </div>
      </div>
      <div class="hero-meta">
        <div class="mini-stat">
          <span class="pill">Live</span>
          <strong>${stats[0].value}</strong>
          <small>Assets indexed</small>
        </div>
        <div class="mini-stat">
          <span class="pill warn">Restricted</span>
          <strong>${restrictedCount}</strong>
          <small>Requires clearance</small>
        </div>
        <div class="mini-stat">
          <span class="pill soft">Favorites</span>
          <strong>${favoriteCount}</strong>
          <small>Priority picks</small>
        </div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-bottom:14px;">
      ${stats.map(s => `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('')}
    </div>
    <div class="section" style="margin-bottom:14px;">
      <div class="filters">
        <input class="input" placeholder="Search assets" value="${state.assetFilters.search}" data-asset-search />
        <select class="select" data-asset-type>
          ${['all','image','video','document'].map(t => `<option value="${t}" ${state.assetFilters.type===t?'selected':''}>${t.toUpperCase()}</option>`).join('')}
        </select>
        <button class="btn" data-action="new-upload">Upload</button>
        <button class="btn-ghost" data-action="toggle-select">${state.selection.enabled ? 'Done Selecting' : 'Bulk Select'}</button>
      </div>
      ${renderAssetGrid(assets)}
      ${renderSelectionBar(assets)}
    </div>
  `;
}

function renderAssetGrid(allAssets) {
  const { search, type } = state.assetFilters;
  const selectedIds = new Set(state.selection.ids);
  const filtered = allAssets.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesType = type === 'all' || a.type === type;
    const matchesFavorites = !state.assetFilters.favoritesOnly || a.isFavorite;
    return matchesSearch && matchesType && matchesFavorites;
  });

  if (!filtered.length) return `<div class="empty">No assets match your filters.</div>`;

  return `
    <div class="asset-grid">
      ${filtered.map(asset => `
        <article class="asset-card ${asset.isFavorite ? 'is-favorite' : ''}" data-id="${asset.id}">
          <div class="asset-card__thumb">
            <img src="${asset.url}" alt="${asset.title}" />
          </div>
          <div class="asset-card__body">
            <div class="security-pill security-${asset.securityLevel}">${asset.securityLevel}</div>
            <h4>${asset.title}</h4>
            <div class="asset-meta">
              <span>${asset.type}</span>
              <span>|</span>
              <span>${new Date(asset.uploadDate).toLocaleDateString()}</span>
            </div>
            <div class="chips">${asset.tags.slice(0,3).map(t => `<span class="tag">#${t}</span>`).join('')}</div>
            <div class="asset-actions">
              <button class="btn-secondary" data-action="view-asset" data-id="${asset.id}">Details</button>
              <button class="btn-ghost" data-action="favorite" data-id="${asset.id}">${asset.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
            </div>
            <div class="asset-actions">
              <button class="btn-ghost" data-action="download" data-id="${asset.id}">Download</button>
              ${permissions().canDelete ? `<button class="btn-danger" data-action="delete" data-id="${asset.id}">Delete</button>` : ''}
              ${state.selection.enabled ? `<label class="small"><input type="checkbox" data-action="select" data-id="${asset.id}" ${selectedIds.has(asset.id) ? 'checked' : ''}/> Select</label>` : ''}
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderSelectionBar(allAssets) {
  if (!state.selection.enabled) return '';
  const selectedIds = new Set(state.selection.ids);
  const selectedAssets = allAssets.filter(a => selectedIds.has(a.id));
  return `
    <div class="section" style="margin-top:14px; display:flex; align-items:center; gap:10px; justify-content:space-between;">
      <div><strong>${selectedAssets.length}</strong> selected</div>
      <div style="display:flex; gap:10px;">
        <button class="btn-ghost" data-action="select-all">${selectedAssets.length === allAssets.length ? 'Clear All' : 'Select All'}</button>
        <button class="btn-ghost" data-action="bulk-download" ${!selectedAssets.length ? 'disabled' : ''}>Bulk Download</button>
        ${permissions().canDelete ? `<button class="btn-danger" data-action="bulk-delete" ${!selectedAssets.length ? 'disabled' : ''}>Bulk Delete</button>` : ''}
      </div>
    </div>
  `;
}

function renderUpload() {
  const { file, preview, metadata, status, progress } = state.upload;
  const hasFile = Boolean(file);
  return `
    <div class="section">
      <div class="filters" style="justify-content: space-between; align-items:center;">
        <h2 style="margin:0;">Upload Asset</h2>
        <button class="btn-ghost" data-action="back-dashboard">Back</button>
      </div>
      <div class="grid cols-2">
        <div>
          <div class="upload-drop">
            <p><strong>Drop media here</strong> or <button class="btn-ghost" data-action="pick-file">browse</button></p>
            ${preview ? `<img src="${preview}" alt="preview" style="max-height:220px; margin:10px auto; border-radius:12px;" />` : '<p class="small">Images, video, or documents supported.</p>'}
            <input type="file" id="file-input" accept="image/*,video/*,.pdf,.doc,.docx" style="display:none" />
          </div>
        </div>
        <div>
          ${!hasFile ? '<p class="small">Select a file to begin.</p>' : ''}
          ${hasFile ? `
            <div class="section" style="padding:14px; background: var(--card-muted);">
              <p><strong>${file.name}</strong> (${formatSize(file.size)})</p>
              <div class="filters">
                <button class="btn" data-action="analyze">Smart Suggest</button>
                <button class="btn-ghost" data-action="manual-meta">Manual Metadata</button>
              </div>
              ${status === 'uploading' ? `
                <div class="progress"><div class="progress__bar" style="width:${progress}%"></div></div>
                <p class="small">Encrypting and uploading...</p>
              ` : ''}
              ${metadata ? renderMetadataEditor(metadata) : '<p class="small">Run smart suggest or enter metadata manually.</p>'}
              <div class="filters" style="margin-top:12px;">
                <button class="btn" data-action="confirm-upload" ${status === 'uploading' ? 'disabled' : ''}>Confirm Upload</button>
                <button class="btn-ghost" data-action="reset-upload">Discard</button>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderMetadataEditor(meta) {
  return `
    <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
      <label class="small">Title
        <input class="input" value="${meta.title}" data-meta-field="title" />
      </label>
      <label class="small">Description
        <textarea class="textarea" data-meta-field="description">${meta.description}</textarea>
      </label>
      <label class="small">Tags (comma separated)
        <input class="input" value="${meta.tags.join(', ')}" data-meta-field="tags" />
      </label>
      <label class="small">Security level
        <select class="select" data-meta-field="securitySuggestion">
          ${['public','internal','restricted'].map(s => `<option value="${s}" ${meta.securitySuggestion===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </label>
    </div>
  `;
}

function renderAudit() {
  const filtered = filteredLogs();
  return `
    <div class="section">
      <div class="filters">
        <input class="input" placeholder="Search user, action, or IP" value="${state.audit.search}" data-audit-search />
        <label class="small"><input type="checkbox" data-audit-critical ${state.audit.onlyCritical ? 'checked' : ''}/> Critical only</label>
        <button class="btn-ghost" data-action="export-logs">Export CSV</button>
      </div>
      <div style="overflow:auto;">
        <table class="table">
          <thead><tr><th>Time</th><th>User</th><th>Action</th><th>Details</th><th>IP</th></tr></thead>
          <tbody>
            ${filtered.map(log => `
              <tr>
                <td>${new Date(log.timestamp).toLocaleString()}</td>
                <td>${log.userName}</td>
                <td><span class="badge">${log.action}</span></td>
                <td>${log.details}</td>
                <td>${log.ipAddress}</td>
              </tr>
            `).join('') || '<tr><td colspan="5" class="empty">No logs</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function loginGreeting(role, employeeId) {
  const displayRole = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Guest';
  const nameHint = role ? MOCK_USERS[role].name.split(' ')[0] : 'there';
  const idHint = employeeId ? `ID ${employeeId}` : 'your employee ID';
  return `Hi ${nameHint}, ${displayRole} lane is ready. Enter ${idHint} to continue.`;
}

function renderLogin() {
  const { role, employeeId, error } = state.login;
  const greeting = loginGreeting(role, employeeId);
  return `
    <div class="login-shell">
      <div class="hero-pane">
        <div class="badge glossy">3Music · SMAMS · Secure Media Asset Management System</div>
        <h1>Preserve African stories securely.</h1>
        <p>Role-based access, encrypted storage, and auditable actions in one lightweight page.</p>
        <ul style="margin:0; padding-left:18px; color: #cbd5f5; line-height:1.6;">
          <li>Admin: full access, delete & audit</li>
          <li>Editor: upload and restricted view</li>
          <li>Viewer: browse public/internal assets</li>
        </ul>
      </div>
      <div class="login-pane">
        <form class="login-card" id="login-form">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div>
              <div class="badge" style="margin-bottom:6px;">3Music Access</div>
              <h2 style="margin:0;">Sign in or Create session</h2>
            </div>
            <button type="button" class="btn-ghost" data-action="swap-theme">${state.theme === 'light' ? 'Dark' : 'Light'}</button>
          </div>
          <p class="small">Choose a role, then enter your employee ID.</p>
          <div class="empty" style="margin-top:6px; background: var(--card-muted); border: 1px dashed var(--border);">${greeting}</div>
          ${error ? `<div class="empty" style="color:#b91c1c; border-color:#fecdd3; background:#fff1f2;">${error}</div>` : ''}
          <div class="role-grid" style="margin:16px 0;">
            ${['admin','editor','viewer'].map(r => `
              <button type="button" class="role-btn ${role===r?'active':''}" data-role="${r}">${r}</button>
            `).join('')}
          </div>
          <label class="small">Employee ID
            <input class="input" required value="${employeeId}" data-login-id placeholder="e.g. ${role ? MOCK_USERS[role].id : 'EMP-001'}" />
          </label>
          <div class="filters" style="margin-top:10px;">
            <button type="button" class="btn-ghost" data-fill="admin">Admin demo</button>
            <button type="button" class="btn-ghost" data-fill="editor">Editor demo</button>
            <button type="button" class="btn-ghost" data-fill="viewer">Viewer demo</button>
          </div>
          <button class="btn" type="submit" style="width:100%; margin-top:12px;">Enter vault</button>
        </form>
      </div>
    </div>
  `;
}

// Binding
function bindHeader() {
  const navButtons = appEl.querySelectorAll('[data-nav]');
  navButtons.forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.nav)));

  const brand = appEl.querySelector('[data-action="go-dashboard"]');
  if (brand) brand.addEventListener('click', () => setView(ViewState.DASHBOARD));

  const themeBtn = appEl.querySelector('[data-action="toggle-theme"]');
  if (themeBtn) themeBtn.addEventListener('click', () => setTheme(state.theme === 'light' ? 'dark' : 'light'));

  const logoutBtn = appEl.querySelector('[data-action="logout"]');
  if (logoutBtn) logoutBtn.addEventListener('click', () => {
    addLog('LOGIN', 'User logged out');
    state.currentUser = null;
    state.login = { role: null, employeeId: '', error: '' };
    setView(ViewState.LOGIN);
  });
}

function bindView() {
  if (state.view === ViewState.DASHBOARD) bindDashboard();
  if (state.view === ViewState.UPLOAD) bindUpload();
  if (state.view === ViewState.AUDIT) bindAudit();
}

function bindDashboard() {
  const search = appEl.querySelector('[data-asset-search]');
  if (search) search.addEventListener('input', e => { state.assetFilters.search = e.target.value; render(); });

  const type = appEl.querySelector('[data-asset-type]');
  if (type) type.addEventListener('change', e => { state.assetFilters.type = e.target.value; render(); });

  appEl.querySelectorAll('[data-quick-filter]').forEach(btn => btn.addEventListener('click', () => {
    state.assetFilters.type = btn.dataset.quickFilter;
    render();
  }));

  const favoriteToggle = appEl.querySelector('[data-quick-favorite]');
  if (favoriteToggle) favoriteToggle.addEventListener('click', () => {
    state.assetFilters.favoritesOnly = !state.assetFilters.favoritesOnly;
    render();
  });

  const uploadBtn = appEl.querySelector('[data-action="new-upload"]');
  if (uploadBtn) uploadBtn.addEventListener('click', () => setView(ViewState.UPLOAD));

  const toggleSelect = appEl.querySelector('[data-action="toggle-select"]');
  if (toggleSelect) toggleSelect.addEventListener('click', () => {
    state.selection.enabled = !state.selection.enabled;
    if (!state.selection.enabled) state.selection.ids = [];
    render();
  });

  appEl.querySelectorAll('[data-action="view-asset"]').forEach(btn => btn.addEventListener('click', () => openAsset(btn.dataset.id)));
  appEl.querySelectorAll('[data-action="favorite"]').forEach(btn => btn.addEventListener('click', () => toggleFavorite(btn.dataset.id)));
  appEl.querySelectorAll('[data-action="download"]').forEach(btn => btn.addEventListener('click', () => downloadAsset(btn.dataset.id)));
  appEl.querySelectorAll('[data-action="delete"]').forEach(btn => btn.addEventListener('click', () => deleteAsset(btn.dataset.id)));
  appEl.querySelectorAll('[data-action="select"]').forEach(input => input.addEventListener('change', e => toggleSelectAsset(e.target.dataset.id, e.target.checked)));

  const selectAll = appEl.querySelector('[data-action="select-all"]');
  if (selectAll) selectAll.addEventListener('click', () => toggleSelectAll());

  const bulkDownload = appEl.querySelector('[data-action="bulk-download"]');
  if (bulkDownload) bulkDownload.addEventListener('click', () => bulkDownloadAssets());

  const bulkDelete = appEl.querySelector('[data-action="bulk-delete"]');
  if (bulkDelete) bulkDelete.addEventListener('click', () => bulkDeleteAssets());
}

function bindUpload() {
  const fileInput = appEl.querySelector('#file-input');
  const pickBtn = appEl.querySelector('[data-action="pick-file"]');
  if (pickBtn && fileInput) pickBtn.addEventListener('click', () => fileInput.click());
  if (fileInput) fileInput.addEventListener('change', handleFilePick);

  const analyze = appEl.querySelector('[data-action="analyze"]');
  if (analyze) analyze.addEventListener('click', handleAnalyze);

  const manual = appEl.querySelector('[data-action="manual-meta"]');
  if (manual) manual.addEventListener('click', () => {
    if (!state.upload.file) return;
    state.upload.metadata = defaultMetadata(state.upload.file);
    render();
  });

  const confirm = appEl.querySelector('[data-action="confirm-upload"]');
  if (confirm) confirm.addEventListener('click', handleConfirmUpload);

  const reset = appEl.querySelector('[data-action="reset-upload"]');
  if (reset) reset.addEventListener('click', resetUpload);

  const back = appEl.querySelector('[data-action="back-dashboard"]');
  if (back) back.addEventListener('click', () => setView(ViewState.DASHBOARD));

  appEl.querySelectorAll('[data-meta-field]').forEach(input => {
    input.addEventListener('input', e => {
      if (!state.upload.metadata) return;
      const key = e.target.dataset.metaField;
      if (key === 'tags') {
        state.upload.metadata.tags = e.target.value.split(',').map(t => t.trim()).filter(Boolean);
      } else {
        state.upload.metadata[key] = e.target.value;
      }
    });
  });
}

function bindAudit() {
  const search = appEl.querySelector('[data-audit-search]');
  if (search) search.addEventListener('input', e => { state.audit.search = e.target.value; render(); });

  const critical = appEl.querySelector('[data-audit-critical]');
  if (critical) critical.addEventListener('change', e => { state.audit.onlyCritical = e.target.checked; render(); });

  const exportBtn = appEl.querySelector('[data-action="export-logs"]');
  if (exportBtn) exportBtn.addEventListener('click', () => exportLogs(filteredLogs()));
}

function bindLogin() {
  const roleButtons = appEl.querySelectorAll('[data-role]');
  roleButtons.forEach(btn => btn.addEventListener('click', () => {
    state.login.role = btn.dataset.role;
    state.login.error = '';
    render();
  }));

  const idInput = appEl.querySelector('[data-login-id]');
  if (idInput) idInput.addEventListener('input', e => {
    state.login.employeeId = e.target.value;
    render();
  });

  const fills = appEl.querySelectorAll('[data-fill]');
  fills.forEach(btn => btn.addEventListener('click', () => {
    const role = btn.dataset.fill;
    state.login.role = role;
    state.login.employeeId = MOCK_USERS[role].id;
    state.login.error = '';
    render();
  }));

  const form = appEl.querySelector('#login-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    if (!state.login.role) {
      state.login.error = 'Please choose a role.';
      render();
      return;
    }
    if (!state.login.employeeId.trim()) {
      state.login.error = 'Enter your employee ID.';
      render();
      return;
    }
    const template = MOCK_USERS[state.login.role];
    state.currentUser = { ...template, id: state.login.employeeId.trim() };
    state.login = { role: null, employeeId: '', error: '' };
    addLog('LOGIN', `Successful authentication as ${state.currentUser.role}`);
    setView(ViewState.DASHBOARD);
  });

  const themeSwap = appEl.querySelector('[data-action="swap-theme"]');
  if (themeSwap) themeSwap.addEventListener('click', () => setTheme(state.theme === 'light' ? 'dark' : 'light'));
}

// Actions
function openAsset(id) {
  state.selectedAssetId = id;
  render();
}

function toggleFavorite(id) {
  state.assets = state.assets.map(a => a.id === id ? { ...a, isFavorite: !a.isFavorite } : a);
  const asset = state.assets.find(a => a.id === id);
  addLog('FAVORITE', `${asset.isFavorite ? 'Favorited' : 'Unfavorited'} asset: ${asset.title}`);
  render();
}

function downloadAsset(id) {
  const asset = state.assets.find(a => a.id === id);
  if (!asset) return;
  addLog('DOWNLOAD', `Downloaded asset: ${asset.title}`);
  const link = document.createElement('a');
  link.href = asset.url;
  link.download = asset.title.replace(/\s+/g, '_');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function deleteAsset(id) {
  if (!permissions().canDelete) return;
  const asset = state.assets.find(a => a.id === id);
  if (!asset) return;
  if (!confirm(`Delete ${asset.title}?`)) return;
  state.assets = state.assets.filter(a => a.id !== id);
  addLog('DELETE', `Deleted asset: ${asset.title}`);
  state.selectedAssetId = null;
  render();
}

function toggleSelectAsset(id, checked) {
  const ids = new Set(state.selection.ids);
  if (checked) ids.add(id); else ids.delete(id);
  state.selection.ids = Array.from(ids);
}

function toggleSelectAll() {
  const assets = visibleAssets();
  const ids = new Set(state.selection.ids);
  if (ids.size === assets.length) {
    state.selection.ids = [];
  } else {
    state.selection.ids = assets.map(a => a.id);
  }
  render();
}

function bulkDownloadAssets() {
  const ids = new Set(state.selection.ids);
  const assets = state.assets.filter(a => ids.has(a.id));
  assets.forEach((asset, idx) => setTimeout(() => downloadAsset(asset.id), idx * 200));
  addLog('DOWNLOAD', `Bulk operation: Downloaded ${assets.length} assets`);
}

function bulkDeleteAssets() {
  if (!permissions().canDelete) return;
  const ids = new Set(state.selection.ids);
  if (!ids.size) return;
  if (!confirm(`Delete ${ids.size} assets?`)) return;
  state.assets = state.assets.filter(a => !ids.has(a.id));
  addLog('DELETE', `Bulk operation: Deleted ${ids.size} assets`);
  state.selection.ids = [];
  render();
}

function handleFilePick(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.upload.file = file;
    state.upload.preview = reader.result;
    state.upload.metadata = null;
    state.upload.status = 'idle';
    state.upload.progress = 0;
    render();
  };
  reader.readAsDataURL(file);
}

function defaultMetadata(file) {
  const base = file.name.replace(/\.[^.]+$/, '');
  const parts = base.split(/[-_\s]+/).filter(Boolean);
  const tags = parts.slice(0, 5).map(p => p.toLowerCase());
  return {
    title: base,
    description: 'No description provided.',
    tags: tags.length ? tags : ['untagged'],
    securitySuggestion: file.size > 700000000 ? 'restricted' : 'internal'
  };
}

function handleAnalyze() {
  if (!state.upload.file) return;
  // Browser-safe placeholder for Gemini: derive metadata locally
  const meta = defaultMetadata(state.upload.file);
  meta.description = 'AI suggestion (offline): refine if needed.';
  meta.securitySuggestion = state.upload.file.type.startsWith('video/') ? 'internal' : meta.securitySuggestion;
  state.upload.metadata = meta;
  render();
}

function handleConfirmUpload() {
  const { file, preview, metadata } = state.upload;
  if (!file) return;
  const meta = metadata || defaultMetadata(file);
  state.upload.status = 'uploading';
  state.upload.progress = 0;
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const pct = Math.min(100, ((now - start) / duration) * 100);
    state.upload.progress = pct;
    render();
    if (pct < 100) {
      requestAnimationFrame(tick);
    } else {
      finalizeUpload(file, preview, meta);
    }
  };
  requestAnimationFrame(tick);
}

function finalizeUpload(file, preview, meta) {
  const newAsset = {
    id: `ast-${Date.now()}`,
    title: meta.title,
    url: preview,
    type: file.type.startsWith('video/') ? 'video' : (file.type.startsWith('image/') ? 'image' : 'document'),
    tags: meta.tags,
    description: meta.description,
    uploadedBy: state.currentUser.name,
    uploadDate: new Date().toISOString(),
    fileSize: formatSize(file.size),
    securityLevel: meta.securitySuggestion,
    isFavorite: false,
  };
  state.assets = [newAsset, ...state.assets];
  addLog('UPLOAD', `Uploaded asset: ${newAsset.title} with security ${newAsset.securityLevel}`);
  resetUpload();
  setView(ViewState.DASHBOARD);
}

function resetUpload() {
  state.upload = { file: null, preview: '', metadata: null, progress: 0, status: 'idle' };
  const input = appEl.querySelector('#file-input');
  if (input) input.value = '';
  render();
}

function filteredLogs() {
  const term = state.audit.search.toLowerCase();
  return state.logs.filter(log => {
    const matches = log.userName.toLowerCase().includes(term) || log.action.toLowerCase().includes(term) || log.details.toLowerCase().includes(term) || log.ipAddress.includes(term);
    const crit = !state.audit.onlyCritical || log.action === 'DELETE' || log.action === 'DOWNLOAD';
    return matches && crit;
  });
}

function exportLogs(logs) {
  const headers = ['Timestamp','User','Action','Details','IP Address'];
  const csv = [headers.join(',')].concat(logs.map(l => [
    new Date(l.timestamp).toISOString(),
    `"${l.userName}"`,
    l.action,
    `"${l.details.replace(/"/g,'""')}"`,
    l.ipAddress
  ].join(','))).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `audit_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  addLog('DOWNLOAD', 'Exported audit logs to CSV');
  render();
}

function mountAssetModal() {
  const asset = state.assets.find(a => a.id === state.selectedAssetId);
  if (!asset) return;
  const existing = document.querySelector('.modal-backdrop');
  if (existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.className = 'modal-backdrop';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal__media">
        <img src="${asset.url}" alt="${asset.title}" style="max-height:320px; border-radius:12px;" />
      </div>
      <div class="modal__content">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
          <div>
            <h3 style="margin:0;">${asset.title}</h3>
            <p class="small">${asset.id}</p>
          </div>
          <button class="btn-ghost" data-action="close-modal">Close</button>
        </div>
        <p class="small">${asset.description || 'No description provided.'}</p>
        <div class="chips">${asset.tags.map(t => `<span class="tag">#${t}</span>`).join('')}</div>
        <div class="filters" style="margin-top:10px;">
          <div class="badge">${asset.securityLevel}</div>
          <div class="badge">${asset.fileSize}</div>
          <div class="badge">${new Date(asset.uploadDate).toLocaleDateString()}</div>
        </div>
        <div class="filters" style="margin-top:12px;">
          <button class="btn" data-action="modal-download">Download</button>
          ${permissions().canDelete ? '<button class="btn-danger" data-action="modal-delete">Delete</button>' : ''}
        </div>
      </div>
    </div>
  `;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  overlay.querySelector('[data-action="close-modal"]').addEventListener('click', closeModal);
  overlay.querySelector('[data-action="modal-download"]').addEventListener('click', () => downloadAsset(asset.id));
  const del = overlay.querySelector('[data-action="modal-delete"]');
  if (del) del.addEventListener('click', () => deleteAsset(asset.id));
  document.body.appendChild(overlay);
}

function closeModal() {
  state.selectedAssetId = null;
  const overlay = document.querySelector('.modal-backdrop');
  if (overlay) overlay.remove();
}

// Helpers
function formatSize(bytes) {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024*1024*1024)).toFixed(2)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024*1024)).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}
