function toggleMenu() {
  let menu = document.getElementById("menu");

  menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

document.addEventListener(
    "click", 
    function(event) {
      let menu = document.getElementById("menu");
      let button = document.getElementById("menu-btn");

      if (menu.style.display === "block" && !button.contains(event.target) && event.target?.tagName !== "LI") {
        menu.style.display = "none";
      }
    }
);

let currentSlide;
changeSlide(0);

function changeSlide(n) {
  // get elements
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
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



// Scroll Button

// Show the button when the user scrolls down 100px
window.onscroll = function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const footer = document.getElementById("footer");
  
  // Show button when scrolled down 100px
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
  
  // Adjust button position if it's overlapping the footer
  const footerRect = footer.getBoundingClientRect();
  const buttonHeight = scrollToTopBtn.offsetHeight;
  
  // Check if the button would overlap the footer
  if (footerRect.top < window.innerHeight) {
    scrollToTopBtn.style.bottom = `${footerRect.height + 15}px`; // Adjust to just above the footer
  } else {
    // Default position
    scrollToTopBtn.style.bottom = "15px"; 
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}