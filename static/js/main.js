// 1. Scroll effekti uchun kod
// Scroll effekti uchun kod
const classList = ['.scrolleffect', '.scrolleffect-2', '.scrolleffect-3']; // Yangi classlar qo'shing
const elements = classList.map((className) => document.querySelectorAll(className));

function handleScroll() {
  elements.forEach((nodeList) => {
    nodeList.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add('show');
      }
    });
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

  
// 2. Loader animatsiyasi
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 300);
  }, 500);
});

// 3. Light/Dark rejim kodlari
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const logo = document.getElementById("magicsite-logo");

const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
let currentTheme = savedTheme || (userPrefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);

const updateTheme = () => {
  if (currentTheme === "dark") {
    themeIcon.style.transform = "rotate(0deg)";
    logo.src = "./static/media/logo/magicsitelight.PNG";
  } else {
    themeIcon.style.transform = "rotate(180deg)";
    logo.src = "./static/media/logo/magicsitetext.PNG";
  }
};

updateTheme();

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateTheme();
});




//CANVAS
// Canvasni tanlash
const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");

// Canvas o'lchamlarini sozlash
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Zarracha obyekti
class Particle {
  constructor(x, y, size, speedX, speedY, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Ekrandan chiqib ketgan zarrachalarni qayta joylashtirish
    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }
}

// Zarrachalar massivi
const particles = [];
const particleCount = 50;

// Zarrachalarni yaratish
for (let i = 0; i < particleCount; i++) {
  const size = Math.random() * 3 + 1; // Zarrachalar kattaligi
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speedX = Math.random() * 1 - 0.5; // Harakat tezligi
  const speedY = Math.random() * 1 - 0.5;
  const color = `rgba(255, 255, 255, ${Math.random()})`; // Oq va shaffof rang

  particles.push(new Particle(x, y, size, speedX, speedY, color));
}

// Animatsiya funksiyasi
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvasni tozalash
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate); // Animatsiyani davom ettirish
}

// Animatsiyani boshlash
animate();

