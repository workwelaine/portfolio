(function () {
  const GATE_HASH = '8976df368faf89a80e8e7a953aa9251cc49474009f1501562384a33dede48975';

  async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function isUnlocked() {
    return localStorage.getItem('portfolio_unlocked') === 'true';
  }

  let pendingUrl = null;

  function openGate(url) {
    if (isUnlocked()) {
      window.location.href = url;
      return;
    }
    pendingUrl = url;
    ensureModal();
    const modal = document.getElementById('gate-modal');
    document.getElementById('gate-error').hidden = true;
    document.getElementById('gate-input').value = '';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('gate-input').focus(), 50);
  }

  function closeGate() {
    const modal = document.getElementById('gate-modal');
    if (modal) modal.hidden = true;
    document.body.style.overflow = '';
  }

  function ensureModal() {
    if (document.getElementById('gate-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'gate-modal';
    modal.className = 'gate-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'gate-title');
    modal.hidden = true;
    modal.innerHTML = `
      <div class="gate-backdrop"></div>
      <div class="gate-panel">
        <button class="gate-close" aria-label="Close">&times;</button>
        <p class="gate-eyebrow">Protected Work</p>
        <h2 class="gate-title" id="gate-title">This case study is password protected.</h2>
        <p class="gate-body">Need access? <a href="mailto:workwelaine@gmail.com">workwelaine@gmail.com</a></p>
        <form class="gate-form" id="gate-form" novalidate>
          <input type="password" class="gate-input" id="gate-input" placeholder="Password" autocomplete="current-password" aria-label="Password" />
          <button type="submit" class="gate-submit">Unlock</button>
        </form>
        <p class="gate-error" id="gate-error" hidden aria-live="polite">Incorrect password.</p>
      </div>`;
    document.body.appendChild(modal);

    modal.querySelector('.gate-backdrop').addEventListener('click', closeGate);
    modal.querySelector('.gate-close').addEventListener('click', closeGate);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !document.getElementById('gate-modal').hidden) closeGate();
    });

    document.getElementById('gate-form').addEventListener('submit', async e => {
      e.preventDefault();
      const val = document.getElementById('gate-input').value;
      const hash = await sha256(val);
      if (hash === GATE_HASH) {
        localStorage.setItem('portfolio_unlocked', 'true');
        closeGate();
        window.location.href = pendingUrl;
      } else {
        document.getElementById('gate-error').hidden = false;
        document.getElementById('gate-input').value = '';
        document.getElementById('gate-input').focus();
      }
    });
  }

  // Intercept clicks on protected card links
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-gate]');
    if (!link) return;
    e.preventDefault();
    openGate(link.getAttribute('href'));
  });
})();
