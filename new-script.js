// Get all images in the slider (if any)
var currentIndex = 0;
var slider = document.querySelector(".slider");
var images = slider ? slider.getElementsByClassName("image") : [];

// Update the slider to show only the current image.
function updateSlider() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = (i === currentIndex) ? "block" : "none";
  }
}

// Show next slide.
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

// Show previous slide.
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

// Initialize the slider on page load.
updateSlider();

// Open the modal to show the clicked image and its description (from the alt attribute).
function openModal(image) {
  document.getElementById("modalImg").src = image.src;
  document.getElementById("modalDesc").innerText = image.alt;
  document.getElementById("imageModal").style.display = "block";
}

// Close the modal.
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}