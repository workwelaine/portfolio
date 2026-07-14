// Navigation scroll behavior
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
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
