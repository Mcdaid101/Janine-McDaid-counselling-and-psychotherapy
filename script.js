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