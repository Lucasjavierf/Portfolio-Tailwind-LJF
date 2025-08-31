import './style.css'



/* --------------------------------------menu desplegable------------------------------------ */
const btnMenu = document.querySelector('.burger')
const menuDesplegable = document.querySelector('.side-bar')

btnMenu.addEventListener('click', () => {
    menuDesplegable.classList.toggle('ocultar') 
    
})


/* --------------------------------------------modo oscuro----------------------------------- */
const  btnswitch=document.querySelector('#switch')
const btnswitch2=document.querySelector('#switch2')
function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
btnswitch.addEventListener('click',toggleDarkMode)
btnswitch2.addEventListener('click',toggleDarkMode)

/* --------------------------------------------Slide tecnologias---------------------------------- */

const iconos=document.getElementById('slider-track').cloneNode(true)
document.getElementById('contenedor-slide').appendChild(iconos);

/* -----------------------------------------------------AOZ animaciones---------------------------------- */
/* AOS.init();
 */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  //responsive breakpoints
  breakpoints: {
    0:{
      slidesPerView: 1
    },
    620:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }
  }
});