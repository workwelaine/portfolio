// Color palette explorer — development tool only

(function () {

  // ── Color spectrum stops ─────────────────────────────────────────────
  const stops = [
    {
      teal:       [115, 156, 156],  // #739C9C — current muted teal
      brown:      [140, 107,  82],  // #8C6B52 — current warm brown
      brownLight: [237, 228, 216],  // #EDE4D8
      bg:         [247, 244, 239],  // #F7F4EF
    },
    {
      teal:       [125, 150, 179],  // #7D96B3 — slate blue
      brown:      [122,  72,  48],  // #7A4830 — richer brown
      brownLight: [228, 211, 194],  // #E4D3C2
      bg:         [245, 241, 236],  // #F5F1EC
    },
    {
      teal:       [ 91, 130, 184],  // #5B82B8 — French blue
      brown:      [ 92,  41,  18],  // #5C2912 — dark chocolate
      brownLight: [219, 191, 163],  // #DBBFA3
      bg:         [243, 238, 230],  // #F3EEE6
    },
    {
      teal:       [ 43,  76, 153],  // #2B4C99 — Mazarine Blue (Pantone 19-3864)
      brown:      [ 58,  33,  22],  // #3A2116 — Coffee Bean (Pantone 19-0915)
      brownLight: [180, 148, 118],  // #B49476
      bg:         [240, 234, 225],  // #F0EAE1
    },
  ];

  // Spectral: 300, 400, 600 — DM Sans: 300, 400, 500
  const weightStops = [
    { heading: 300, body: 300 },
    { heading: 400, body: 400 },
    { heading: 600, body: 500 },
  ];

  let darkMode = false;

  // ── Color math ───────────────────────────────────────────────────────
  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerpRgb(a, b, t) { return a.map((c, i) => Math.round(lerp(c, b[i], t))); }

  function interpolateColor(t) {
    const n = stops.length - 1;
    const s = t * n;
    const i = Math.min(Math.floor(s), n - 1);
    const lt = s - i;
    const a = stops[i], b = stops[i + 1];
    return {
      teal:       lerpRgb(a.teal,       b.teal,       lt),
      brown:      lerpRgb(a.brown,      b.brown,      lt),
      brownLight: lerpRgb(a.brownLight, b.brownLight, lt),
      bg:         lerpRgb(a.bg,         b.bg,         lt),
    };
  }

  function hex(rgb) {
    return '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('');
  }

  // ── WCAG contrast ────────────────────────────────────────────────────
  function luminance(rgb) {
    return rgb.map(c => {
      const s = c / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }).reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
  }

  function contrast(a, b) {
    const l1 = luminance(a), l2 = luminance(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }

  // Returns all resolved RGB values for the current state
  function resolveColors(colors, dark) {
    if (!dark) {
      return {
        bg:      colors.bg,
        text:    [26, 26, 26],
        mid:     [102, 102, 102],
        teal:    colors.teal,
        surface: colors.brownLight,
      };
    }
    return {
      bg:      lerpRgb(colors.brown, [0, 0, 0], 0.72),
      text:    lerpRgb(colors.teal,  [255, 255, 255], 0.70),
      mid:     lerpRgb(colors.teal,  [255, 255, 255], 0.45),
      teal:    colors.teal,
      surface: lerpRgb(colors.brown, [0, 0, 0], 0.55),
    };
  }

  // ── Apply colors to :root ─────────────────────────────────────────────
  function applyLight(colors) {
    const r = document.documentElement;
    r.style.setProperty('--color-teal',        hex(colors.teal));
    r.style.setProperty('--color-brown',       hex(colors.brown));
    r.style.setProperty('--color-brown-light', hex(colors.brownLight));
    r.style.setProperty('--color-bg',          hex(colors.bg));
    r.style.setProperty('--color-text',        '#1A1A1A');
    r.style.setProperty('--color-mid',         '#666666');
    r.style.setProperty('--color-dark',        '#1E2E2E');
  }

  function applyDark(colors) {
    const resolved = resolveColors(colors, true);
    const r = document.documentElement;
    r.style.setProperty('--color-bg',          hex(resolved.bg));
    r.style.setProperty('--color-text',        hex(resolved.text));
    r.style.setProperty('--color-mid',         hex(resolved.mid));
    r.style.setProperty('--color-brown-light', hex(resolved.surface));
    r.style.setProperty('--color-dark',        hex(lerpRgb(colors.brown, [0, 0, 0], 0.85)));
    r.style.setProperty('--color-teal',        hex(colors.teal));
    r.style.setProperty('--color-brown',       hex(colors.brown));
  }

  // ── Styles ───────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #px-explorer {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9999;
      background: #16201F;
      border-radius: 14px;
      padding: 16px 18px 14px;
      width: 240px;
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 11px;
      color: rgba(247,244,239,0.5);
      box-shadow: 0 16px 48px rgba(0,0,0,0.45);
      user-select: none;
    }
    #px-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .px-label {
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 10px;
      margin: 0;
      color: rgba(247,244,239,0.5);
    }
    #px-dark-toggle {
      background: rgba(255,255,255,0.07);
      border: none;
      border-radius: 20px;
      padding: 4px 10px;
      color: rgba(247,244,239,0.55);
      font-family: inherit;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 150ms, color 150ms;
    }
    #px-dark-toggle:hover   { background: rgba(255,255,255,0.13); color: rgba(247,244,239,0.9); }
    #px-dark-toggle.is-dark { background: rgba(255,255,255,0.16); color: rgba(247,244,239,1); }

    /* ── Mini preview ── */
    #px-preview {
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 14px;
      border: 1px solid rgba(255,255,255,0.07);
    }
    #px-preview-nav {
      background: var(--color-dark);
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px;
    }
    .pxp-logo {
      font-family: 'Cormorant Garamond', serif;
      font-size: 6px;
      font-weight: 400;
      color: var(--color-bg);
      opacity: 0.9;
      letter-spacing: 0.02em;
    }
    .pxp-nav-links {
      font-size: 5px;
      color: var(--color-bg);
      opacity: 0.5;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    #px-preview-hero {
      background: var(--color-bg);
      padding: 10px 10px 8px;
    }
    .pxp-eyebrow {
      font-size: 5px;
      color: var(--color-teal);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
    }
    .pxp-heading {
      font-family: 'Cormorant Garamond', serif;
      font-size: 9.5px;
      font-weight: 300;
      color: var(--color-text);
      line-height: 1.3;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }
    .pxp-heading em { font-style: italic; color: var(--color-teal); }
    .pxp-sub {
      font-size: 5.5px;
      color: var(--color-mid);
      line-height: 1.6;
      margin-bottom: 7px;
      font-family: 'DM Sans', sans-serif;
    }
    .pxp-actions { display: flex; gap: 5px; align-items: center; }
    .pxp-btn {
      font-size: 5px;
      padding: 3px 7px;
      background: var(--color-text);
      color: var(--color-bg);
      border-radius: 2px;
      font-family: 'DM Sans', sans-serif;
      letter-spacing: 0.04em;
    }
    .pxp-link {
      font-size: 5px;
      color: var(--color-teal);
      font-family: 'DM Sans', sans-serif;
    }
    #px-preview-cards {
      background: var(--color-bg);
      padding: 0 10px 8px;
      display: flex;
      gap: 5px;
    }
    .pxp-card {
      flex: 1;
      background: var(--color-brown-light);
      border-radius: 4px;
      overflow: hidden;
    }
    .pxp-card-img {
      width: 100%;
      height: 22px;
      background: var(--color-teal);
      opacity: 0.25;
    }
    .pxp-card-body { padding: 4px 5px 5px; }
    .pxp-card-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 6px;
      font-weight: 300;
      color: var(--color-text);
      margin-bottom: 2px;
    }
    .pxp-card-tag {
      font-size: 4.5px;
      color: var(--color-teal);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-family: 'DM Sans', sans-serif;
    }
    #px-preview-footer {
      background: var(--color-dark);
      height: 10px;
      opacity: 0.9;
    }

    /* ── Sliders ── */
    .px-slider-row { margin-bottom: 10px; }
    .px-slider-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    .px-slider-meta span:last-child {
      color: rgba(247,244,239,0.8);
      font-variant-numeric: tabular-nums;
    }
    .px-range {
      -webkit-appearance: none;
      width: 100%;
      height: 3px;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
      background: rgba(255,255,255,0.12);
    }
    .px-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #F7F4EF;
      cursor: pointer;
      box-shadow: 0 1px 4px rgba(0,0,0,0.45);
    }
    #px-color-slider {
      background: linear-gradient(to right,
        #739C9C 0%, #7D96B3 33%, #5B82B8 67%, #2B4C99 100%);
    }
    .px-divider {
      border: none;
      border-top: 1px solid rgba(255,255,255,0.07);
      margin: 12px 0;
    }

    /* ── Contrast checker ── */
    #px-contrast { margin-top: 2px; }
    .px-contrast-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 0;
      font-size: 10px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .px-contrast-row:last-child { border-bottom: none; }
    .px-contrast-pair { color: rgba(247,244,239,0.5); }
    .px-contrast-right {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .px-contrast-ratio {
      font-variant-numeric: tabular-nums;
      color: rgba(247,244,239,0.85);
      min-width: 34px;
      text-align: right;
    }
    .px-badge {
      font-size: 9px;
      padding: 1px 5px;
      border-radius: 3px;
      letter-spacing: 0.04em;
      font-weight: 500;
      min-width: 28px;
      text-align: center;
    }
    .px-badge.pass   { background: rgba(80,200,120,0.18); color: #6EE7A0; }
    .px-badge.warn   { background: rgba(250,180,50,0.18);  color: #FACC74; }
    .px-badge.fail   { background: rgba(240,80,80,0.18);   color: #F88; }

    /* ── Buttons ── */
    #px-buttons { display: flex; gap: 6px; margin-top: 12px; }
    #px-copy, #px-copy-dark {
      flex: 1;
      padding: 7px 4px;
      background: rgba(255,255,255,0.07);
      border: none;
      border-radius: 7px;
      color: rgba(247,244,239,0.65);
      font-family: inherit;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 150ms;
    }
    #px-copy:hover, #px-copy-dark:hover { background: rgba(255,255,255,0.14); }

    /* ── Type weight overrides ── */
    body.px-type h1, body.px-type h2, body.px-type h3,
    body.px-type h4, body.px-type .hero-headline,
    body.px-type .about-page-name, body.px-type .contact-headline,
    body.px-type .work-title, body.px-type .card-title,
    body.px-type .ai-band-title { font-weight: var(--px-fw-heading) !important; }

    body.px-type p, body.px-type a, body.px-type li,
    body.px-type .about-body, body.px-type .hero-sub,
    body.px-type .hero-eyebrow, body.px-type .card-subtitle,
    body.px-type .section-label, body.px-type .about-page-eyebrow,
    body.px-type .nav-links a, body.px-type .btn-primary,
    body.px-type .btn-secondary { font-weight: var(--px-fw-body) !important; }

    body.px-dark h1, body.px-dark h2, body.px-dark h3 { font-weight: 400 !important; }
    body.px-dark p, body.px-dark a, body.px-dark li   { font-weight: 400 !important; }
    body.px-dark .hero-eyebrow, body.px-dark .section-label,
    body.px-dark .about-page-eyebrow                   { font-weight: 500 !important; }

    body.px-dark.px-type h1, body.px-dark.px-type h2, body.px-dark.px-type h3,
    body.px-dark.px-type .hero-headline, body.px-dark.px-type .about-page-name {
      font-weight: var(--px-fw-heading) !important;
    }
    body.px-dark.px-type p, body.px-dark.px-type a,
    body.px-dark.px-type .about-body, body.px-dark.px-type .hero-sub {
      font-weight: var(--px-fw-body) !important;
    }
  `;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────────
  const panel = document.createElement('div');
  panel.id = 'px-explorer';
  panel.innerHTML = `
    <div id="px-top-row">
      <p class="px-label">Preview</p>
      <button id="px-dark-toggle">Light</button>
    </div>

    <div id="px-preview">
      <div id="px-preview-nav">
        <span class="pxp-logo">Elaine Shih</span>
        <span class="pxp-nav-links">Work · About · Contact</span>
      </div>
      <div id="px-preview-hero">
        <p class="pxp-eyebrow">UX Designer · SAP · New York</p>
        <p class="pxp-heading">A designer who thinks in <em>systems</em>, sweats the right details.</p>
        <p class="pxp-sub">Currently building partner discovery, universal search, and AI-assisted experiences.</p>
        <div class="pxp-actions">
          <span class="pxp-btn">View Work</span>
          <span class="pxp-link">About Me →</span>
        </div>
      </div>
      <div id="px-preview-cards">
        <div class="pxp-card">
          <div class="pxp-card-img"></div>
          <div class="pxp-card-body">
            <div class="pxp-card-title">Partner Search</div>
            <div class="pxp-card-tag">Product · SAP</div>
          </div>
        </div>
        <div class="pxp-card">
          <div class="pxp-card-img"></div>
          <div class="pxp-card-body">
            <div class="pxp-card-title">AI Discovery</div>
            <div class="pxp-card-tag">Product · SAP</div>
          </div>
        </div>
      </div>
      <div id="px-preview-footer"></div>
    </div>

    <div class="px-slider-row">
      <div class="px-slider-meta">
        <span>Color</span>
        <span id="px-color-val">#739C9C · #8C6B52</span>
      </div>
      <input type="range" class="px-range" id="px-color-slider" min="0" max="100" value="0">
    </div>

    <hr class="px-divider">
    <p class="px-label" style="margin-bottom:12px">Type</p>

    <div class="px-slider-row">
      <div class="px-slider-meta">
        <span>Weight</span>
        <span id="px-weight-val">H·300 / B·300</span>
      </div>
      <input type="range" class="px-range" id="px-weight-slider" min="0" max="2" step="1" value="0">
    </div>

    <div class="px-slider-row">
      <div class="px-slider-meta">
        <span>Scale</span>
        <span id="px-scale-val">16px</span>
      </div>
      <input type="range" class="px-range" id="px-scale-slider" min="13" max="20" step="0.5" value="16">
    </div>

    <hr class="px-divider">
    <p class="px-label" style="margin-bottom:10px">Contrast — WCAG AA</p>
    <div id="px-contrast">
      <div class="px-contrast-row">
        <span class="px-contrast-pair">Text / Bg</span>
        <span class="px-contrast-right">
          <span class="px-contrast-ratio" id="cr-text-bg">—</span>
          <span class="px-badge" id="cb-text-bg">—</span>
        </span>
      </div>
      <div class="px-contrast-row">
        <span class="px-contrast-pair">Mid / Bg</span>
        <span class="px-contrast-right">
          <span class="px-contrast-ratio" id="cr-mid-bg">—</span>
          <span class="px-badge" id="cb-mid-bg">—</span>
        </span>
      </div>
      <div class="px-contrast-row">
        <span class="px-contrast-pair">Accent / Bg</span>
        <span class="px-contrast-right">
          <span class="px-contrast-ratio" id="cr-teal-bg">—</span>
          <span class="px-badge" id="cb-teal-bg">—</span>
        </span>
      </div>
      <div class="px-contrast-row">
        <span class="px-contrast-pair">Text / Card</span>
        <span class="px-contrast-right">
          <span class="px-contrast-ratio" id="cr-text-surface">—</span>
          <span class="px-badge" id="cb-text-surface">—</span>
        </span>
      </div>
    </div>

    <div id="px-buttons">
      <button id="px-copy">Copy</button>
      <button id="px-copy-dark">Copy Dark</button>
    </div>
  `;
  document.body.appendChild(panel);

  const colorSlider  = document.getElementById('px-color-slider');
  const weightSlider = document.getElementById('px-weight-slider');
  const scaleSlider  = document.getElementById('px-scale-slider');
  const toggle       = document.getElementById('px-dark-toggle');
  const copyBtn      = document.getElementById('px-copy');
  const copyDark     = document.getElementById('px-copy-dark');

  // ── Contrast display helpers ──────────────────────────────────────────
  function badge(ratio, min) {
    if (ratio >= 7)   return { cls: 'pass', label: 'AAA' };
    if (ratio >= min) return { cls: 'pass', label: 'AA' };
    if (ratio >= 3)   return { cls: 'warn', label: '3:1' };  // passes large-text only
    return { cls: 'fail', label: 'Fail' };
  }

  function renderContrast(id, ratio, min) {
    const r = document.getElementById('cr-' + id);
    const b = document.getElementById('cb-' + id);
    const val = ratio.toFixed(1);
    r.textContent = val + ':1';
    const { cls, label } = badge(ratio, min);
    b.className = 'px-badge ' + cls;
    b.textContent = label;
  }

  function updateContrast(colors) {
    const c = resolveColors(colors, darkMode);
    // Text and mid need 4.5:1 (normal text). Accent/teal used as small labels — also 4.5:1.
    renderContrast('text-bg',      contrast(c.text,    c.bg),      4.5);
    renderContrast('mid-bg',       contrast(c.mid,     c.bg),      4.5);
    renderContrast('teal-bg',      contrast(c.teal,    c.bg),      4.5);
    renderContrast('text-surface', contrast(c.text,    c.surface), 4.5);
  }

  // ── Update functions ──────────────────────────────────────────────────
  function updateColor() {
    const colors = interpolateColor(colorSlider.value / 100);
    if (darkMode) applyDark(colors); else applyLight(colors);
    document.getElementById('px-color-val').textContent =
      hex(colors.teal) + ' · ' + hex(colors.brown);
    updateContrast(colors);
  }

  function updateWeight() {
    const i = parseInt(weightSlider.value);
    const w = weightStops[i];
    document.documentElement.style.setProperty('--px-fw-heading', w.heading);
    document.documentElement.style.setProperty('--px-fw-body',    w.body);
    document.body.classList.add('px-type');
    document.getElementById('px-weight-val').textContent = `H·${w.heading} / B·${w.body}`;
  }

  function updateScale() {
    const px = parseFloat(scaleSlider.value);
    document.documentElement.style.fontSize = px + 'px';
    document.getElementById('px-scale-val').textContent = px + 'px';
  }

  colorSlider.addEventListener('input',  updateColor);
  weightSlider.addEventListener('input', updateWeight);
  scaleSlider.addEventListener('input',  updateScale);

  toggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('px-dark', darkMode);
    toggle.textContent = darkMode ? 'Dark' : 'Light';
    toggle.classList.toggle('is-dark', darkMode);
    updateColor();
  });

  // ── Copy ──────────────────────────────────────────────────────────────
  function buildCss(dark) {
    const colors = interpolateColor(colorSlider.value / 100);
    const wi    = parseInt(weightSlider.value);
    const w     = weightStops[wi];
    const scale = parseFloat(scaleSlider.value);
    const lines = [];

    if (!dark) {
      lines.push(
        `--color-teal:        ${hex(colors.teal)};`,
        `--color-brown:       ${hex(colors.brown)};`,
        `--color-brown-light: ${hex(colors.brownLight)};`,
        `--color-bg:          ${hex(colors.bg)};`,
      );
    } else {
      const resolved = resolveColors(colors, true);
      lines.push(
        `--color-bg:          ${hex(resolved.bg)};`,
        `--color-text:        ${hex(resolved.text)};`,
        `--color-mid:         ${hex(resolved.mid)};`,
        `--color-teal:        ${hex(colors.teal)};`,
        `--color-brown:       ${hex(colors.brown)};`,
        `--color-brown-light: ${hex(resolved.surface)};`,
        `--color-dark:        ${hex(lerpRgb(colors.brown, [0, 0, 0], 0.85))};`,
      );
    }

    if (wi !== 0) lines.push(`/* heading weight: ${w.heading}, body weight: ${w.body} */`);
    if (scale !== 16) lines.push(`/* root font-size: ${scale}px */`);

    // Append contrast summary as a comment
    const resolved = resolveColors(colors, dark);
    const pairs = [
      ['Text / Bg',      contrast(resolved.text,    resolved.bg)],
      ['Mid / Bg',       contrast(resolved.mid,     resolved.bg)],
      ['Accent / Bg',    contrast(resolved.teal,    resolved.bg)],
      ['Text / Card',    contrast(resolved.text,    resolved.surface)],
    ];
    const summary = pairs.map(([lbl, r]) => `${lbl}: ${r.toFixed(1)}:1 ${r >= 4.5 ? '✓' : '✗'}`).join(' · ');
    lines.push(`/* Contrast — ${summary} */`);

    return lines.join('\n');
  }

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(buildCss(false)).then(() => {
      copyBtn.textContent = 'Copied ✓';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
    });
  });

  copyDark.addEventListener('click', () => {
    navigator.clipboard.writeText(buildCss(true)).then(() => {
      copyDark.textContent = 'Copied ✓';
      setTimeout(() => { copyDark.textContent = 'Copy Dark'; }, 1800);
    });
  });

  updateColor();
  updateWeight();
  updateScale();

})();
