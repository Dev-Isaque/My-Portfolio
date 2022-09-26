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

function activeMenu() {
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

jQuery(document).ready(function() {
  jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({ width: jQuery(this).attr('data-percent') }, 3000);
  });
});


