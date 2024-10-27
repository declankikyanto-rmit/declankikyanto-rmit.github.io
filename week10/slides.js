// Accessing the slide
const slides = document.querySelectorAll(".slides");
console.log(slides);

const slideContainer = document.querySelector("#slides-container");
console.log(slideContainer);

let slideIndex = 0;
let distance = 0;

// Previous Button

const previousButton = document.querySelector("#previous-button");
console.log(previousButton);

function goToPreviousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
}

previousButton.addEventListener("click", goToPreviousSlide);

// Next Button

const nextButton = document.querySelector("#next-button");
console.log(nextButton);

function goToNextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
}

nextButton.addEventListener("click", goToNextSlide);
