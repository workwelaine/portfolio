function featuredCardHTML(p) {
  const url = p.status === 'coming-soon' ? null : `work/${p.slug}.html`;
  const tagHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const inner = `
    <div class="card-thumb">
      ${p.thumbnail
        ? `<img src="${p.thumbnail}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">`
        : `<div class="card-thumb-placeholder"></div>`}
      ${p.status === 'coming-soon' ? `<span class="card-badge">Coming soon</span>` : ''}
      ${p.protected ? `<span class="card-lock" aria-label="Password protected">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="6" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>` : ''}
    </div>
    <div class="card-body">
      <p class="card-subtitle">${p.subtitle}</p>
      <h3 class="card-title">${p.title}</h3>
      ${p.description ? `<p class="card-description">${p.description}</p>` : ''}
      <div class="card-tags">${tagHTML}</div>
    </div>`;

  const wideClass = p.wide ? ' is-wide' : '';

  if (!url) {
    return `<article class="project-card is-coming-soon${wideClass} reveal">${inner}</article>`;
  }

  const gateAttr = p.protected ? ' data-gate' : '';
  return `<article class="project-card${wideClass} reveal">
    <a href="${url}" class="card-link"${gateAttr}>${inner}</a>
  </article>`;
}

function aiBandHTML(p) {
  const url = p.status === 'coming-soon' ? null : `work/${p.slug}.html`;
  const tagHTML = p.tags.map(t => `<span class="tag tag--light">${t}</span>`).join('');

  const content = `
    <div class="ai-band-text">
      <p class="ai-band-label">Process · AI</p>
      <h3 class="ai-band-title">${p.title}</h3>
      ${p.description ? `<p class="ai-band-description">${p.description}</p>` : ''}
      <div class="card-tags">${tagHTML}</div>
      ${url ? `<a href="${url}" class="ai-band-link">Read the case study <span class="ai-band-link-arrow">→</span></a>` : `<span class="card-badge card-badge--light">Coming soon</span>`}
    </div>
    <div class="ai-band-visual" aria-hidden="true">
      ${p.thumbnail ? `<img src="${p.thumbnail}" alt="">` : ''}
    </div>`;

  return `<article class="ai-band">
    ${url ? `<a href="${url}" class="ai-band-inner">${content}</a>` : `<div class="ai-band-inner">${content}</div>`}
  </article>`;
}

function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  // Standard cards go in the grid; ai-band sits below it full-width
  const standardCards = featuredProjects.filter(p => p.featuredType !== 'ai-band');
  const aiBand = featuredProjects.find(p => p.featuredType === 'ai-band');

  grid.innerHTML = standardCards.map(featuredCardHTML).join('');

  if (aiBand) {
    const bandSection = document.getElementById('ai-band-section');
    if (bandSection) bandSection.innerHTML = aiBandHTML(aiBand);
  }
}

renderFeatured();
