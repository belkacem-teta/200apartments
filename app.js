function toggleMenu() {
  let menu = document.getElementById("menu");

  menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

document.addEventListener(
    "click", 
    function(event) {
      let menu = document.getElementById("menu");
      let button = document.getElementById("menu-btn");

      if (menu.style.display === "block" && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
      }
    }
);

let currentSlide;
changeSlide(0);

function changeSlide(n) {
  // get elements
  let slides = document.getElementsByClassName("slide");
  console.log(slides);
  let dots = document.getElementsByClassName("dot");
  console.log(dots);
  // check n
  if (n >= slides.length) {n = 0}
  else if (n < 0) {n = slides.length - 1}
  // clear slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  // set the slide
  slides[n].style.display = "block";
  dots[n].classList.add("active");
  currentSlide = n;
} 

function nextSlide() {
  changeSlide(currentSlide + 1);
}

function prevSlide() {
  changeSlide(currentSlide - 1);
}