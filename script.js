/* =========================================================
   RefCase — script.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Nav shadow on scroll --- */
  const nav = document.querySelector('.rc-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 2px 24px rgba(10,22,40,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });

  /* --- Fade-in on scroll (Intersection Observer) --- */
  const fadeEls = document.querySelectorAll(
    '.rc-feature-card, .rc-step, .rc-plan, .rc-testimonial'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  /* --- CTA button clicks (placeholder) --- */
  document.querySelectorAll('.rc-plan-btn, .rc-btn-primary, .rc-btn-amber').forEach(btn => {
    btn.addEventListener('click', () => {
      // Replace with your actual signup / demo URL
      console.log('CTA clicked — wire up your signup flow here');
    });
  });

});
