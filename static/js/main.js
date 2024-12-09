// Barcha elementlarni olish
const elements = document.querySelectorAll('.scrolleffect');

// Scroll vaqtida kuzatish funksiyasi
function handleScroll() {
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top; // Elementning yuqori pozitsiyasi
    const windowHeight = window.innerHeight; // Oynaning balandligi

    // Agar element ko'rinish maydoniga kirsagina `show` sinfini qo'sh
    if (elementPosition < windowHeight - 100) {
      element.classList.add('show');
    }
  });
}

// Scroll hodisasini tinglash
window.addEventListener('scroll', handleScroll);

// Boshlanishda elementlarni tekshirish
handleScroll();

//Loader animatsiyasi
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // 2 soniyadan keyin loaderni yo'q qilish
  setTimeout(() => {
    loader.classList.add("hidden"); // Loaderga animatsiya klassi qo'shildi
    setTimeout(() => {
      loader.style.display = "none"; // Loaderni butunlay o'chirish
      content.style.display = "block"; // Kontentni ko‘rsatish
    }, 300); // Animatsiya davomiyligiga mos ravishda kutish
  }, 500); // 2 soniya yuklashni kutish
});

// code for light/dark mode 
// Elements
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Determine user's system preference
const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
let currentTheme = savedTheme || (userPrefersDark ? "dark" : "light");

// Apply the saved or detected theme
document.documentElement.setAttribute("data-theme", currentTheme);

// Toggle theme button icon
const updateIcon = () => {
    if (currentTheme === "dark") {
        themeIcon.style.transform = "rotate(0deg)";
    } else {
        themeIcon.style.transform = "rotate(180deg)";
    }
};

// Update icon initially
updateIcon();

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    updateIcon();
});
