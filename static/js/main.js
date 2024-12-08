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
    }, 1000); // Animatsiya davomiyligiga mos ravishda kutish
  }, 2000); // 2 soniya yuklashni kutish
});



