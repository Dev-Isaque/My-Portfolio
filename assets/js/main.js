 // Inicio do menu mobile
const navBtn = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');

//  carrega todos os tipos de eventos
allEventListners();

// funções de todos os eventos
function allEventListners() {
  // evento de clique do ícone
  navBtn.addEventListener('click', togglerClick);
  // nav-links clique em evento
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// Função togglerClick
function togglerClick() {
  navBtn.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// Função navLinkClick
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navBtn.click();
  }
}

// Fim do menu mobile

/* menu ativo com rolagem */

const li=document.querySelectorAll(".nav-link");
const sec=document.querySelectorAll("section");

function activeMenu() {wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwa
    let len=sec.length;
    while(--len && window.scrollY + 180 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Animação Scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
      } else {
          reveal.classList.remove("active");
      }
  });
}

window.addEventListener("scroll", reveal);

// Habilidades função

$(document).ready(function() {
  $('.skillbar').each(function() {
      $(this).find('.skillbar-bar').animate({ width: $(this).attr('data-percent') }, 3000);
  });
});


// Slide de Projetos Função

const slideshow = document.querySelector(".slideshow");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const slideIndicators = document.querySelectorAll(".slide-indicator");

let slideIndex = 0;

function showSlide() {
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideIndicators.forEach((indicator, index) => {
    if (index === slideIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slideIndicators.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slideIndicators.length - 1;
  }
  showSlide();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
slideIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    slideIndex = index;
    showSlide();
  });
});

showSlide();
