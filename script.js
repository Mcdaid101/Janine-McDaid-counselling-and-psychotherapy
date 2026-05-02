// ─── Mobile Menu ─────────────────────────────────────────────────────────────

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});


// ─── Services Carousel (responsive: 1 card mobile / 2 cards desktop) ─────────

(function () {
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  const dotContainer = document.getElementById('dotContainer');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  let currentIndex = 0;
  let isDesktop = window.innerWidth >= 640;
  let totalSteps = 0;

  function getStepCount() {
    return isDesktop ? Math.ceil(slides.length / 2) : slides.length;
  }

  function buildDots() {
    dotContainer.innerHTML = '';
    totalSteps = getStepCount();
    for (let i = 0; i < totalSteps; i++) {
      const dot = document.createElement('button');
      dot.className = 'w-2 h-2 rounded-full bg-[#6A9E9F] transition-opacity dot';
      dot.style.opacity = i === currentIndex ? '1' : '0.4';
      dot.addEventListener('click', () => goTo(i));
      dotContainer.appendChild(dot);
    }
  }

  function updateSlideWidths() {
    isDesktop = window.innerWidth >= 640;
    slides.forEach(slide => {
      slide.style.minWidth = isDesktop ? '50%' : '100%';
    });
  }

  function goTo(index) {
    totalSteps = getStepCount();
    currentIndex = Math.max(0, Math.min(index, totalSteps - 1));

    const offset = isDesktop ? currentIndex * 2 : currentIndex;
    track.style.transform = `translateX(-${offset * (100 / slides.length)}%)`;

    dotContainer.querySelectorAll('.dot').forEach((dot, i) => {
      dot.style.opacity = i === currentIndex ? '1' : '0.4';
    });
  }

  function rebuild() {
    updateSlideWidths();
    buildDots();
    currentIndex = Math.min(currentIndex, getStepCount() - 1);
    goTo(currentIndex);
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rebuild, 150);
  });

  rebuild();
})();


// ─── Rotating Quotes ──────────────────────────────────────────────────────────

const quotes = [
  { text: "You don't have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
  { text: "There is hope, even when your brain tells you there isn't.", author: "John Green" },
  { text: "You are not your illness. You have an individual story to tell. You have a name, a history, a personality.", author: "Julian Seifter" },
  { text: "Sometimes the people around you won't understand your journey. They don't need to — it's not for them.", author: "Joubert Botha" },
  { text: "Healing is not linear. It's okay to have bad days.", author: "Unknown" },
  { text: "You are allowed to be both a masterpiece and a work in progress simultaneously.", author: "Sophia Bush" },
  { text: "Out of your vulnerabilities will come your strength.", author: "Sigmund Freud" },
  { text: "Just when you feel you have no time to relax, know that this is the moment you most need to make time to relax.", author: "Matt Haig" },
  { text: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.", author: "Unknown" },
  { text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, or anxious. Having feelings doesn't make you a negative person — it makes you human.", author: "Lori Deschene" }
];

const shuffled = quotes.sort(() => Math.random() - 0.5);
let currentQuote = 0;

function displayQuote(index) {
  const display = document.getElementById('quoteDisplay');
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');

  display.style.opacity = '0';

  setTimeout(() => {
    quoteText.textContent = `"${shuffled[index].text}"`;
    quoteAuthor.textContent = `— ${shuffled[index].author}`;
    display.style.opacity = '1';
  }, 600);
}

displayQuote(currentQuote);

setInterval(() => {
  currentQuote = (currentQuote + 1) % shuffled.length;
  displayQuote(currentQuote);
}, 8000);