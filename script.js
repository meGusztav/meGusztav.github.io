window.onload = function () {
  initNav();
  initSkills();
  initSmoothScroll();
};

/* ---- Navbar scroll + hamburger ---- */
function initNav() {
  var navbar    = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var mobNav    = document.getElementById('mob-nav');
  var mobClose  = document.getElementById('mob-close');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  function openMenu() {
    mobNav.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    mobNav.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobClose.addEventListener('click', closeMenu);

  document.querySelectorAll('.mob-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}

/* ---- Skill bars (Intersection Observer) ---- */
function initSkills() {
  var skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.skill-bar').forEach(function (bar) {
        bar.style.width = bar.getAttribute('data-w') + '%';
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  observer.observe(skillsSection);
}

/* ---- Smooth scroll for # links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = document.getElementById('navbar').offsetHeight;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });
}

window.onorientationchange = function () {
  document.body.scrollTop = 0;
};
