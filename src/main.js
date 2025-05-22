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