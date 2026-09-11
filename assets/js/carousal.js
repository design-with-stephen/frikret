document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;

  const viewport = carousel.querySelector('.carousel-viewport');
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const dotsWrap = document.querySelector('.carousel-dots');

  let slidesPerView = 1;
  let currentIndex = 0;
  let autoplayTimer = null;

  function getSlidesPerView() {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  }

  function maxIndex() {
    return Math.max(0, slides.length - slidesPerView);
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    const dotCount = maxIndex() + 1;
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsWrap.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function updateArrows() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex();
  }

  function render() {
    const slideWidth = 100 / slidesPerView;
    track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    updateDots();
    updateArrows();
  }

  function goTo(index) {
    currentIndex = Math.min(Math.max(index, 0), maxIndex());
    render();
    resetAutoplay();
  }

  function next() { goTo(currentIndex + 1 > maxIndex() ? 0 : currentIndex + 1); }
  function prev() { goTo(currentIndex - 1 < 0 ? maxIndex() : currentIndex - 1); }

  function startAutoplay() {
    autoplayTimer = setInterval(next, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  function handleResize() {
    const newSlidesPerView = getSlidesPerView();
    if (newSlidesPerView !== slidesPerView) {
      slidesPerView = newSlidesPerView;
      currentIndex = Math.min(currentIndex, maxIndex());
      buildDots();
      render();
    }
  }

  // Touch/swipe support
  let startX = 0;
  let isDragging = false;

  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    clearInterval(autoplayTimer);
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    isDragging = false;
    resetAutoplay();
  });

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  window.addEventListener('resize', handleResize);

  // init
  slidesPerView = getSlidesPerView();
  buildDots();
  render();
  startAutoplay();
});