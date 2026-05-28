// ============ 滚动时导航变色 + 高亮当前区段 ============
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ============ 移动端菜单 ============
const toggle = document.querySelector('.nav-toggle');
const linksWrap = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  linksWrap.classList.toggle('open');
});
navLinks.forEach(a => a.addEventListener('click', () => linksWrap.classList.remove('open')));

// ============ 数字滚动动画 ============
const animateNumber = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('zh-CN');
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('zh-CN');
  };
  requestAnimationFrame(tick);
};

// ============ 入场动画 + 数字触发 ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('stat-num') && !entry.target.dataset.done) {
        entry.target.dataset.done = '1';
        animateNumber(entry.target);
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section-head, .card, .stat, .modern-item, .flavor-item, .tl-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));

// ============ 卡片倾斜（鼠标视差）============
document.querySelectorAll('.heritage-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-10px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ============ 英雄区视差 ============
const heroPattern = document.querySelector('.hero-pattern');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight && heroPattern) {
    heroPattern.style.transform = `translateY(${y * 0.4}px)`;
  }
});

// ============ 时间线渐入 ============
const tlItems = document.querySelectorAll('.tl-item');
tlItems.forEach((item, i) => {
  item.style.transitionDelay = `${i * 80}ms`;
});

console.log('%c 廣州 · 云山珠水 ', 'background: #c0392b; color: #e8c574; font-size: 14px; padding: 6px 12px; font-family: serif;');
