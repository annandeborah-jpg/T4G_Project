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


// ===============================
// ACCESSIBLE SERVICES INTERACTION
// ===============================
const serviceCards = document.querySelectorAll('.services .card');

serviceCards.forEach(card => {

  function toggleCard() {

    const isActive = card.classList.contains('active');

    // Close all cards first
    serviceCards.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });

    // If it was not active, open it
    if (!isActive) {
      card.classList.add('active');
      card.setAttribute('aria-expanded', 'true');
    }
  }

  // Click anywhere on card
  card.addEventListener('click', toggleCard);

  // Keyboard support (Enter or Space)
  card.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCard();
    }
  });

});
// Function to handle card clicking (Professional behavior)
document.querySelectorAll('.article-card, .wide-card').forEach(card => {
    card.addEventListener('click', () => {
        const btn = card.querySelector('button');
        if (btn) btn.click(); // Triggers the "Read More" logic
    });
});

// ===============================
// KIDS CARDS INTERACTION
// ===============================
const kidsCards = document.querySelectorAll('.kids-card');

kidsCards.forEach(card => {

  function toggleCard() {

    const isActive = card.classList.contains('active');

    // Close all
    kidsCards.forEach(c => c.classList.remove('active'));

    // Open if not active
    if (!isActive) {
      card.classList.add('active');
    }
    updateProgress();
    
  }

  // Click anywhere
  card.addEventListener('click', toggleCard);

  // Keyboard support
  card.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCard();
    }
  });

});


  const actionBtns = document.querySelectorAll('.action-btn');

actionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = "✨ Great choice!";
    
    setTimeout(() => {
      btn.textContent = btn.getAttribute('data-original') || btn.textContent;
    }, 1500);
  });

  // Save original text
  btn.setAttribute('data-original', btn.textContent);
});

const heroBtn = document.querySelector('.big-cta-btn');

heroBtn.addEventListener('click', () => {
  heroBtn.textContent = "🎉 Let’s Go!";
  
  setTimeout(() => {
    heroBtn.textContent = "Start Learning 🚀";
  }, 1500);
});

// ===============================
// PROGRESS TRACKER
// ===============================
const progressFill = document.querySelector('.progress-fill');
const progressText = document.querySelector('.progress-text');

function updateProgress() {

  const activeCards = document.querySelectorAll('.kids-card.active').length;
  const totalCards = document.querySelectorAll('.kids-card').length;

  const percent = Math.round((activeCards / totalCards) * 100);

  progressFill.style.width = percent + "%";
  progressText.textContent = percent + "% completed 🎉";

}