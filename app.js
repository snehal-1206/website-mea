

// Typewriter Animation
const typewriterTexts = ["Hello, Welcome!", "Mechanical Engineering Association", "IIT Bombay"];
let typeIndex = 0, charIndex = 0;
const container = document.querySelector(".container");

function type() {
  if (typeIndex < typewriterTexts.length) {
    const line = document.createElement("h" + (typeIndex + 1));
    line.textContent = "";
    container.appendChild(line);
    const interval = setInterval(() => {
      if (charIndex < typewriterTexts[typeIndex].length) {
        line.textContent += typewriterTexts[typeIndex].charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
        typeIndex++;
        charIndex = 0;
        setTimeout(type, 600);
      }
    }, 80);
  }
}

// Scroll Fade In
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
}

// Carousel
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Animated Counter
function animateCounter(el, target) {
  let count = 0;
  const speed = 50;
  const increment = target / speed;
  const counter = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(counter);
    }
    el.textContent = Math.floor(count);
  }, 30);
}

// Live Clock
function updateClock() {
  const clock = document.getElementById("live-clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
  setTimeout(updateClock, 1000);
}

// Popup Modal
function showModal() {
  const modal = document.getElementById("popup-modal");
  modal.style.display = "block";
  document.getElementById("close-modal").onclick = () => {
    modal.style.display = "none";
  };
}

// Image Hover Zoom (CSS handled)

// On Load
window.onload = () => {
  type();
  showSlides();
  updateClock();
  revealOnScroll();
  // Example Counter Init
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    animateCounter(counter, target);
  });
  // Show modal after delay
  setTimeout(showModal, 2000);
};

// Scroll Event
window.addEventListener("scroll", revealOnScroll);

// Dark mode toggle (connect this to a button in HTML)
document.getElementById("dark-mode-toggle")?.addEventListener("click", toggleDarkMode);
