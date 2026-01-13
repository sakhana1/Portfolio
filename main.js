// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Smooth scroll + close nav
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
    nav.classList.remove("open");
  });
});

// Active link on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Reveal on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Simple contact form feedback
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "Message sent! (demo only)";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
