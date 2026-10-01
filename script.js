// ==============================
// Mobile Navigation
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  document.body.classList.toggle("menu-open");

  const icon = menuBtn.querySelector("i");

  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close menu when clicking nav links

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// ==============================
// Sticky Header
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ==============================
// Typing Animation
// ==============================

const typingText = document.getElementById("typingText");

const words = [
  "Video Editor",
  "Graphics Designer",
  "Motion Graphics Creator",
  "Visual Storyteller",
];

let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  const typingSpeed = isDeleting ? 45 : 90;

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ==============================
// Portfolio Filtering
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");

const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Active button

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Selected category

    const filter = button.getAttribute("data-filter");

    // Filter portfolio

    portfolioCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// ==============================
// Active Navigation On Scroll
// ==============================

const sections = document.querySelectorAll("section[id]");

function activeNavigation() {
  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (!navLink) return;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      navLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeNavigation);

// ==============================
// Current Year
// ==============================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

// ==============================
// Smooth Mouse Movement
// Hero profile subtle effect
// ==============================

const profileCard = document.querySelector(".profile-card");

if (profileCard) {
  profileCard.addEventListener("mousemove", (event) => {
    if (window.innerWidth < 900) return;

    const rect = profileCard.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 30;

    const rotateY = (centerX - x) / 30;

    profileCard.style.transform = `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
  });

  profileCard.addEventListener("mouseleave", () => {
    profileCard.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  });
}
