// Navigation scroll behavior
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── Hero texts reveal ──
const heroStagger = document.querySelector('.hero-text.t-stagger');
if (heroStagger) {
  setTimeout(() => heroStagger.classList.add('is-shown'), 80);
}

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Trigger digit pop-in for any phase numbers inside the revealed element
      const digitGroup = entry.target.querySelector('.t-digit-group');
      if (digitGroup) {
        digitGroup.classList.remove('is-animating');
        void digitGroup.offsetHeight;
        digitGroup.classList.add('is-animating');
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

// Stagger delays for cards in grids (2-col: left=0, right=0.1s)
document.querySelectorAll('.project-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((card, i) => {
    card.style.setProperty('--reveal-delay', `${(i % 2) * 0.1}s`);
  });
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Filter tab sliding indicator ──
const filterTabsEl = document.querySelector('.filter-tabs');
if (filterTabsEl) {
  const indicator = filterTabsEl.querySelector('.filter-tab-indicator');
  const filterTabs = [...filterTabsEl.querySelectorAll('.filter-tab')];

  function moveIndicator(tab, animate) {
    if (!animate) {
      const prev = indicator.style.transition;
      indicator.style.transition = 'none';
      indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
      indicator.style.width = `${tab.offsetWidth}px`;
      void indicator.offsetWidth;
      indicator.style.transition = prev;
    } else {
      indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
      indicator.style.width = `${tab.offsetWidth}px`;
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => moveIndicator(tab, true));
  });

  const activeTab = filterTabs.find(t => t.classList.contains('active')) || filterTabs[0];
  requestAnimationFrame(() => moveIndicator(activeTab, false));
  window.addEventListener('resize', () => {
    const current = filterTabs.find(t => t.classList.contains('active')) || filterTabs[0];
    moveIndicator(current, false);
  });
}

// ── Playlist shelf avatar group hover ──
document.querySelectorAll('.t-avatar-group').forEach(root => {
  const avatars = [...root.querySelectorAll('.t-avatar')];
  const cs = getComputedStyle(document.documentElement);
  const num = (name, fb) => { const v = parseFloat(cs.getPropertyValue(name)); return Number.isFinite(v) ? v : fb; };
  const ease = (name, fb) => cs.getPropertyValue(name).trim() || fb;

  function setShifts(activeIdx, phase) {
    const lift    = num('--avatar-lift', -4);
    const falloff = num('--avatar-falloff', 0.45);
    const scale   = num('--avatar-scale', 1.05);
    const tf = phase === 'out'
      ? ease('--avatar-ease-out', 'cubic-bezier(0.34, 3.85, 0.64, 1)')
      : ease('--avatar-ease-in',  'cubic-bezier(0.22, 1, 0.36, 1)');

    avatars.forEach((el, i) => {
      el.style.transitionTimingFunction = tf;
      if (activeIdx == null) {
        el.style.setProperty('--shift', '0px');
        el.style.setProperty('--scale-active', '1');
        return;
      }
      const d = Math.abs(i - activeIdx);
      el.style.setProperty('--shift', (lift * Math.pow(falloff, d)).toFixed(3) + 'px');
      el.style.setProperty('--scale-active', i === activeIdx ? String(scale) : '1');
    });
  }

  avatars.forEach((el, i) => el.addEventListener('mouseenter', () => setShifts(i, 'in')));
  root.addEventListener('mouseleave', () => setShifts(null, 'out'));
});
