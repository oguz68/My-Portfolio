let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // Hide the current slide
  slides[currentSlide].style.opacity = 0;

  // Update the slide index
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Show the new slide
  slides[currentSlide].style.opacity = 1;

  // Update slider position
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Initialize by showing the first slide
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.style.opacity = index === 0 ? 1 : 0;
  });
});