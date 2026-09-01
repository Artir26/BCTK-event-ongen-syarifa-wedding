(() => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((el, i) => el.classList.add('scene-reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  sections.forEach(el => io.observe(el));

  const cover = document.querySelector('.cover');
  if (cover) {
    cover.addEventListener('pointermove', (e) => {
      const r = cover.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      cover.style.setProperty('--mx', `${x * 10}px`);
      cover.style.setProperty('--my', `${y * 7}px`);
    }, {passive:true});
    cover.addEventListener('pointerleave', () => {
      cover.style.setProperty('--mx','0px');
      cover.style.setProperty('--my','0px');
    });
  }
})();
