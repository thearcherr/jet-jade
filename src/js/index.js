document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
});

// Function to check screen size and add/remove the "grid" class
function adjustLayout() {
    const heroContent = document.querySelector('.hero-content');
    if (window.matchMedia('(min-width: 768px)').matches) {
      // Screen is medium or larger
      heroContent.classList.remove('grid');
      heroContent.classList.add('flex', 'flex-col', 'md:flex-row');
    } else {
      // Screen is small
      heroContent.classList.add('grid');
      heroContent.classList.remove('flex', 'flex-col');
    }
  }
  
  // Run the function on page load and when the window is resized
  window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
  
// Carousel Logic
const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextImage() {
  // Hide the current image
  items[currentIndex].classList.remove('opacity-100');
  items[currentIndex].classList.add('opacity-0');

  // Move to the next image
  currentIndex = (currentIndex + 1) % items.length;

  // Show the next image
  items[currentIndex].classList.remove('opacity-0');
  items[currentIndex].classList.add('opacity-100');
}

// Initialize the first image
items[currentIndex].classList.add('opacity-100');

// Automatically transition images every 2.5 seconds
setInterval(showNextImage, 2500);

let currentTestimonial = 1;
    const totalTestimonials = 3;

    const autoplayCarousel = () => {
      setInterval(() => {
        currentTestimonial = (currentTestimonial % totalTestimonials) + 1;
        document.querySelector(`#testimonial${currentTestimonial}`).scrollIntoView({
          behavior: 'smooth'
        });
      }, 5000); // Change testimonial every 5 seconds
    };

    autoplayCarousel();