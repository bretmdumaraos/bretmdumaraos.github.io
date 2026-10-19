(() => {
  'use strict';
  const get = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];
  const apps = Array.isArray(window.PORTFOLIO_APPS) ? window.PORTFOLIO_APPS : [];
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = (value) => { if (!value || typeof value !== 'string') return ''; try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };

  // Theme is a small, local-only preference, never sent to a server.
  const root = document.documentElement;
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('bmd-theme') || 'light'; } catch (_) {}
  root.dataset.theme = ['light','dark'].includes(savedTheme) ? savedTheme : 'light';
  all('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('bmd-theme', next); } catch (_) {}
  }));
  all('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));

  const menuButton = get('.menu-toggle'), nav = get('#site-nav');
  if (menuButton && nav) {
    const closeMenu = () => { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); };
    menuButton.addEventListener('click', () => { const opening = !nav.classList.contains('is-open'); nav.classList.toggle('is-open', opening); menuButton.setAttribute('aria-expanded', String(opening)); menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu'); });
    all('a', nav).forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  }

  const grid = get('#apps-grid'), filterRoot = get('#app-filters'), search = get('#app-search');
  if (grid && filterRoot && search) {
    let activeFilter = 'All';
    const categories = ['All', ...new Set(apps.map(app => app.category))];
    filterRoot.innerHTML = categories.map(cat => `<button type="button" class="filter${cat === 'All' ? ' active' : ''}" data-filter="${escapeHtml(cat)}" aria-pressed="${cat === 'All'}">${cat === 'All' ? 'All projects' : escapeHtml(cat)}</button>`).join('');
    const makeCard = app => {
      const comingSoon = app.status.toLowerCase() === 'coming soon';
      const id = encodeURIComponent(app.slug);
      // For published projects, the card opens the app's actual GitHub Pages site.
      // Upcoming projects remain on their local Coming Soon detail page.
      const externalUrl = comingSoon ? '' : safeUrl(app.website);
      const cardHref = escapeHtml(externalUrl || `app.html?app=${id}`);
      const target = externalUrl ? ' target="_blank" rel="noopener noreferrer"' : '';
      const imageLabel = externalUrl ? `Visit ${app.title} website (opens in a new tab)` : `View ${app.title} details${comingSoon ? ' — coming soon' : ''}`;
      return `<article class="app-card" style="--app-accent:${escapeHtml(app.accent || '#a8c6ff')}">
        <a class="app-image${comingSoon ? ' image-coming-soon' : ''}" href="${cardHref}"${target} aria-label="${escapeHtml(imageLabel)}"><img src="${escapeHtml(app.image)}" alt="Official banner artwork for ${escapeHtml(app.title)}" loading="lazy" decoding="async"><span class="app-number">${escapeHtml(app.number)}</span>${comingSoon ? '<span class="app-coming-badge">✦ COMING SOON</span>' : app.featured ? '<span class="app-featured">✦ FEATURED</span>' : ''}<span class="app-image-arrow" aria-hidden="true">↗</span></a>
        <div class="app-info"><div class="app-eyebrow"><span>${escapeHtml(app.category)}</span><span class="app-status${comingSoon ? ' is-upcoming' : ''}"><span class="status-pin"></span>${escapeHtml(app.status)}</span></div><h3><a href="${cardHref}"${target}>${escapeHtml(app.title)}</a></h3><p>${escapeHtml(app.tagline)}</p><div class="app-card-footer"><a href="${cardHref}"${target} class="app-details">${comingSoon ? 'See what’s coming' : externalUrl ? 'Visit app website' : 'Discover project'} <span aria-hidden="true">↗</span></a><span class="card-footmark" aria-hidden="true">BRET / ${escapeHtml(app.number)}</span></div></div>
      </article>`;
    };
    const render = () => {
      const term = search.value.trim().toLowerCase();
      const shown = apps.filter(app => (activeFilter === 'All' || app.category === activeFilter) && [app.title,app.tagline,app.category,app.description].join(' ').toLowerCase().includes(term));
      grid.innerHTML = shown.map(makeCard).join('');
      const empty = get('#empty-state');
      if (empty) empty.hidden = shown.length !== 0;
      const count = get('#result-count');
      if (count) count.textContent = `${String(shown.length).padStart(2,'0')} ${shown.length === 1 ? 'PROJECT' : 'PROJECTS'} IN VIEW`;
    };
    filterRoot.addEventListener('click', e => { const btn = e.target.closest('button[data-filter]'); if (!btn) return; activeFilter = btn.dataset.filter; all('button[data-filter]', filterRoot).forEach(item => { const selected = item === btn; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); }); render(); });
    search.addEventListener('input', render);
    get('#clear-filters')?.addEventListener('click', () => { search.value = ''; filterRoot.querySelector('button[data-filter="All"]')?.click(); search.focus(); });
    render();
  }

  // App detail page; query parameter only selects an item from the local whitelist.
  const detail = get('#app-detail');
  if (detail) {
    const slug = new URLSearchParams(location.search).get('app');
    const app = apps.find(item => item.slug === slug);
    if (!app) {
      document.title = 'Project not found — Bret Michael Dumaraos';
      detail.innerHTML = '<div class="detail-notfound"><span>404 / PROJECT</span><h1>That project isn’t here.</h1><p>It may have moved or the link may be incorrect.</p><a href="index.html#work" class="button button-dark">Back to the gallery ↗</a></div>';
    } else {
      document.title = `${app.title} — Bret Michael Dumaraos`;
      const links = [
        ['Website', app.website, '↗'],['Google Play', app.playStore,'↗'],['GitHub repository', app.repository,'↗'],['App privacy policy',app.privacy,'↗'],['App terms of service',app.terms,'↗']
      ].filter(link => safeUrl(link[1]));
      detail.innerHTML = `<div class="detail-crumb"><a href="index.html">Home</a><span>/</span><a href="index.html#work">Collection</a><span>/</span><strong>${escapeHtml(app.title)}</strong></div>
        <div class="detail-hero"><div class="detail-copy"><div class="section-label"><span class="label-line"></span> ${escapeHtml(app.category.toUpperCase())} / PROJECT ${escapeHtml(app.number)}</div><h1>${escapeHtml(app.title)}<span class="detail-period">.</span></h1><p class="detail-lead">${escapeHtml(app.tagline)}</p><div class="detail-status${app.status.toLowerCase() === 'coming soon' ? ' is-upcoming' : ''}"><span class="status-pin"></span>${escapeHtml(app.status)}</div><div class="detail-cta"><a href="index.html#work" class="button button-dark">← Back to gallery</a>${safeUrl(app.website) ? `<a class="button button-outline" href="${escapeHtml(safeUrl(app.website))}" target="_blank" rel="noopener noreferrer">Visit website ↗</a>` : ''}</div></div><div class="detail-cover${app.status.toLowerCase() === 'coming soon' ? ' detail-upcoming' : ''}"><img src="${escapeHtml(app.image)}" alt="Official banner for ${escapeHtml(app.title)}">${app.status.toLowerCase() === 'coming soon' ? '<span class="detail-coming-badge">COMING SOON · IN DEVELOPMENT</span>' : ''}</div></div>
        <div class="detail-bottom"><section><span class="section-label"><span class="label-line"></span> THE STORY</span><h2>A closer look.</h2><p>${escapeHtml(app.description)}</p></section><aside class="detail-links"><h3>Explore this project</h3>${links.length ? links.map(link => `<a href="${escapeHtml(safeUrl(link[1]))}" target="_blank" rel="noopener noreferrer">${escapeHtml(link[0])}<span aria-hidden="true">${link[2]}</span></a>`).join('') : '<p>Links will appear here when the project is published.</p>'}<small>External links open in a new tab.</small></aside></div>`;
    }
  }
})();
