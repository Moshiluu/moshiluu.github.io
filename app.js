const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.hyperlinks')
const navLogo = document.querySelector('#title')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}





let slidePastIndex = 1;
showPastSlides(slidePastIndex);

function plusPastSlides(n) {
  showPastSlides(slidePastIndex += n);
}

function currentSlide(n) {
  showPastSlides(slidePastIndex = n);
}

function showPastSlides(n) {
  let i;
  let PastSlides = document.getElementsByClassName("myPastSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > PastSlides.length) {slidePastIndex = 1}
  if (n < 1) {slidePastIndex = PastSlides.length}
  for (i = 0; i < PastSlides.length; i++) {
    PastSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  PastSlides[slidePastIndex-1].style.display = "flex";
  dots[slidePastIndex-1].className += " active";
}