// 1. Scroll effekti uchun kod
// Scroll effekti uchun kod
const classList = ['.scrolleffect', '.scrolleffect-2', '.scrolleffect-3', '.scrolleffect-4', '.scrolleffect-5', '.scrolleffect-6', '.scrolleffect-7 ', '.scrolleffect-8', '.scrolleffect-9' ]; // Yangi classlar qo'shing
const elements = classList.map((className) => document.querySelectorAll(className));

function handleScroll() {
  elements.forEach((nodeList) => {
    nodeList.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 10) {
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
const headerImg = document.getElementById("header-img"); // Header rasm elementini tanlash

const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
let currentTheme = savedTheme || (userPrefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);

// Funksiya: Element mavjudligini tekshirish va faqat mavjud bo'lganda yangilash
const updateTheme = () => {
  if (themeIcon) {
    themeIcon.style.transform = currentTheme === "dark" ? "rotate(0deg)" : "rotate(180deg)";
  }
  if (logo) {
    logo.src = currentTheme === "dark"
      ? "./static/media/logo/magicsitelight.PNG"
      : "./static/media/logo/magicsitetext.PNG";
  }
  if (headerImg) {
    headerImg.src = currentTheme === "dark"
      ? "./static/media/sitephotos/header-section-img.webp"
      : "./static/media/sitephotos/header-section-img-light.webp";
  }
};

updateTheme();

// Tugma bosilganda ishlaydi
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    updateTheme();
  });
}



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


//prohibits zooming for laptop, computers
// Ctrl va Cmd tugmalari bilan zoom qilishni cheklash
document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
      e.preventDefault();
  }
});

// Ctrl + sichqoncha g'ildiragini aylantirishni cheklash
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
      e.preventDefault();
  }
}, { passive: false });

// Gesture zoomni mobil qurilmalar uchun cheklash (qo'shimcha)
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

//prohibits zooming 
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});