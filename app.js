// Cleaned & Optimized Script with Working Typewriter, Dark Mode, and Scroll Reveal

const typewriterTexts = [
  { tag: "h1", text: "Hello, Welcome!" },
  { tag: "h2", text: "Mechanical Engineering Association" },
  { tag: "h3", text: "IIT Bombay" }
];

let typeIndex = 0, charIndex = 0;
const container = document.querySelector(".container");

function type() {
  if (typeIndex < typewriterTexts.length) {
    const line = document.createElement(typewriterTexts[typeIndex].tag);
    line.textContent = "";
    line.classList.add("type-line"); // optional for styling
    container.appendChild(line);

    const interval = setInterval(() => {
      const currentText = typewriterTexts[typeIndex].text;
      if (charIndex < currentText.length) {
        line.textContent += currentText.charAt(charIndex);
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

// Scroll Reveal
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

// Animated Counter (if used)
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

// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
}

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Call initial functions on load
window.addEventListener("DOMContentLoaded", () => {
  if (container) type();
  revealOnScroll();

  // Optional counter logic (if counters are in use)
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    if (!isNaN(target)) animateCounter(counter, target);
  });
});

// Scroll listener for reveal animation
window.addEventListener("scroll", revealOnScroll);
  

