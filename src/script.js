// ===============================
// 1. CARD CLICK INTERACTION
// ===============================
const cards = document.querySelectorAll('.lp-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    // Remove active from others
    cards.forEach(c => c.classList.remove('active'));

    // Add active to clicked
    card.classList.add('active');

  });
});


// ===============================
// 2. BUTTON CLICK FEEDBACK
// ===============================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    
    // Create ripple effect
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);

  });
});


// ===============================
// 3. SCROLL REVEAL (VERY IMPORTANT)
// ===============================
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


// ===============================
// 4. SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });
  });
});


// ===============================
// 5. CARD HOVER ENHANCEMENT (TOUCH DEVICES)
// ===============================
cards.forEach(card => {
  card.addEventListener('touchstart', () => {
    card.classList.add('hover');
  });

  card.addEventListener('touchend', () => {
    setTimeout(() => {
      card.classList.remove('hover');
    }, 300);
  });
});