document.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    const text = document.querySelector('.text');
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
  
    const scrollProgress = scrollY / maxScroll; 
  
    const scaleFactor = 1 + scrollProgress * 300;
    logoContainer.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
  
    const startFade = 0.12; 
    const fadeInProgress = Math.min(Math.max((scrollProgress - startFade) / 0.2, 0), 1);
    text.style.opacity = fadeInProgress;
  });
  
