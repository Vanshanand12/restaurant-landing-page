document.addEventListener('DOMContentLoaded', function () {
  // NAVBAR: active link on scroll
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks.map(l => document.querySelector(l.getAttribute('href')));

  function updateActiveNav(){
    const pos = window.scrollY + 90; // offset for fixed navbar
    sections.forEach((sec, i) => {
      if (!sec) return;
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(x => x.classList.remove('active'));
        navLinks[i].classList.add('active');
      }
    });
  }
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);

  // Close mobile navbar when link clicked
  const navCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });

  // Gallery modal: set clicked thumbnail into modal
  document.querySelectorAll('.gallery-thumb').forEach(img => {
    img.addEventListener('click', function () {
      const modalImg = document.querySelector('#galleryModal .modal-img');
      if (modalImg) {
        modalImg.src = this.src;
        modalImg.alt = this.alt || '';
      }
    });
  });

  // Contact form demo handler (prevents actual submit)
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';
      setTimeout(() => {
        alert('Message submitted (demo).');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
      }, 700);
    });
  }
});
