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
