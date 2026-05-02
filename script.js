const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.dot');
  const total = 3;
  let current = 0;

  function goToSlide(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.style.opacity = i === current ? '1' : '0.4';
    });
  }

  document.getElementById('prevSlide').addEventListener('click', () => goToSlide(current - 1));
  document.getElementById('nextSlide').addEventListener('click', () => goToSlide(current + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });


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

// Shuffle the array so the order is different every visit
const shuffled = quotes.sort(() => Math.random() - 0.5);
let currentQuote = 0;

function displayQuote(index) {
  const display = document.getElementById('quoteDisplay');
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');

  // Fade out
  display.style.opacity = '0';

  setTimeout(() => {
    quoteText.textContent = `"${shuffled[index].text}"`;
    quoteAuthor.textContent = `— ${shuffled[index].author}`;
    // Fade in
    display.style.opacity = '1';
  }, 600);
}

// Show first quote immediately
displayQuote(currentQuote);

// Rotate every 6 seconds
setInterval(() => {
  currentQuote = (currentQuote + 1) % shuffled.length;
  displayQuote(currentQuote);
}, 8000);