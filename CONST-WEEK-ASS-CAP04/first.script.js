const slider = document.getElementById('slider');
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % slider.children.length;
  updateSlider();
}

function updateSlider() {
  const translateValue = -slideIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(nextSlide, 3000); 













