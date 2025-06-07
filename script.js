const logo = document.getElementById('logo');
const soon = document.getElementById('soon');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollY / maxScroll, 1);

  const isMobile = window.innerWidth < 768;

  const maxOffsetX = isMobile ? 6600 : 7700;
  const maxOffsetY = isMobile ? -2400 : -3000;

  const maxScale = isMobile ? 150 : 90;

  const moveX = progress * maxOffsetX;
  const moveY = progress * maxOffsetY;
  const scale = 1 + progress * (maxScale - 1);

  logo.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;

  soon.style.opacity = progress > 0.3 ? '1' : '0';
});