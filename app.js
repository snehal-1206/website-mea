
// for effect on text
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
    line.classList.add("type-line"); 
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
window.addEventListener("scroll", revealOnScroll);

// Optional: trigger once on page load
window.addEventListener("load", revealOnScroll);



// Update Logo Depending on Theme
function updateLogoBasedOnTheme() {
  const logoImg = document.getElementById("logo-img");
  const isDark = document.body.classList.contains("dark-mode");
  if (logoImg) {
    logoImg.src = isDark ? "image/13.png" : "download.png";
  }
}

// DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  if (container) type();
  revealOnScroll();

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateLogoBasedOnTheme();

  // Toggle button functionality
  const toggleButton = document.getElementById("dark-mode-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", theme);
      updateLogoBasedOnTheme();
    });
  }
});

// Scroll listener
window.addEventListener("scroll", revealOnScroll);

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const logoImg = document.getElementById("logo-img");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change logo based on mode
  if (body.classList.contains("dark-mode")) {
    logoImg.src = "image/13.png"; // white logo
  } else {
    logoImg.src = "download.png"; // black logo
  }
});







