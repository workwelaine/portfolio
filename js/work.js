const LOCK_ICON = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="6" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
  <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

function tagHTML(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join('');
}

function cardInnerHTML(p) {
  const thumbContent = p.thumbnail
    ? `<img src="${p.thumbnail}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">`
    : `<div class="card-thumb-placeholder"></div>`;

  const badges = [
    p.status === 'coming-soon' ? `<span class="card-badge">Coming soon</span>` : '',
    p.protected ? `<span class="card-lock" aria-label="Password protected">${LOCK_ICON}</span>` : '',
  ].join('');

  return `
    <div class="card-thumb">
      ${thumbContent}
      ${badges}
    </div>
    <div class="card-body">
      <p class="card-subtitle">${p.subtitle}</p>
      <h2 class="card-title">${p.title}</h2>
      ${p.description ? `<p class="card-description">${p.description}</p>` : ''}
      <div class="card-tags">${tagHTML(p.tags)}</div>
    </div>`;
}

function cardHTML(p) {
  const categoriesAttr = p.categories.join(' ');

  if (p.status === 'coming-soon') {
    return `<article class="project-card is-coming-soon reveal" data-categories="${categoriesAttr}">
      ${cardInnerHTML(p)}
    </article>`;
  }

  const gateAttr = p.protected ? ' data-gate' : '';
  return `<article class="project-card reveal" data-categories="${categoriesAttr}">
    <a href="work/${p.slug}.html" class="card-link"${gateAttr}>
      ${cardInnerHTML(p)}
    </a>
  </article>`;
}

function renderCards(filter) {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  const pool = projects.filter(p => p.status !== 'draft');

  const visible = filter === 'all'
    ? pool
    : pool.filter(p => p.categories.includes(filter));

  if (visible.length === 0) {
    grid.innerHTML = `<p class="grid-empty">No projects in this category yet.</p>`;
    return;
  }

  grid.innerHTML = visible.map(cardHTML).join('');
}

// Wire up filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderCards(tab.dataset.filter);
  });
});

renderCards('all');
