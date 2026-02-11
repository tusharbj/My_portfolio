
// ================================
// 1️⃣ Smooth Scroll with Easing
// ================================

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });
  });
});


// ================================
// 2️⃣ Navbar Background on Scroll
// ================================

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 ? "#ffffffcc" : "white";
  header.style.backdropFilter = window.scrollY > 50 ? "blur(10px)" : "none";
});


// ================================
// 3️⃣ Intersection Observer Reveal
// ================================

const revealElements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.8s ease";
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});


// ================================
// 4️⃣ 3D Tilt Effect on Cards
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.transition = "0.1s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.transition = "0.5s";
  });
});


// ================================
// 5️⃣ Typewriter Effect
// ================================

const text = "A passionate developer creating modern and responsive web applications.";
const typingElement = document.querySelector(".home p");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 30);
  }
}

typingElement.textContent = "";
typeEffect();


// ================================
// 6️⃣ Custom Cursor
// ================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// ================================
// 7️⃣ Dark Mode Toggle
// ================================

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
