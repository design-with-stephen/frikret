document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loading');
});

window.addEventListener('load', () => {
  hideLoader();
});

// Fallback: if 'load' takes too long (slow images/fonts), hide anyway after 4s
// so the loader never traps a user on a slow connection.

setTimeout(hideLoader, 8000);

function hideLoader(){
  const loader = document.querySelector('.loader');
  if (!loader || loader.dataset.hidden === 'true') return;

  loader.dataset.hidden = 'true';
  loader.classList.add('loader-hidden');
  document.body.classList.remove('loading');

  // Fully remove from DOM after the fade transition finishes
  loader.addEventListener('transitionend', () => {
    loader.remove();
  }, { once: true });
}