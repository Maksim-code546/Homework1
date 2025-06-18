const scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = window.innerWidth <= 493 
        ? this.dataset.mobileTarget 
        : this.dataset.desktopTarget;
    
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Показываем/скрываем кнопку при скролле
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

// Плавный скролл наверх
document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});