//nav bar transition
const nav=document.querySelector(".navbarStyle");

window.addEventListener(`scroll`, ()=>{
    nav.classList.toggle(`active`,window.scrollY>0)
})

// const usuarioLogueado = localStorage.getItem("logueado")
// if (usuarioLogueado) {
//     document.getElementById(`BotonLogin`).className="d-none"
//     document.getElementById(`botonAdmin`).className="nav-item dropdown d-flex justify-content-start"
// }

const $days = document.getElementById('days'),
 $hours = document.getElementById('hours'),
 $minutes = document.getElementById('minutes'),
 $seconds = document.getElementById('seconds'),
 $finalMes = document.querySelector('.final-msn');

 //fecha a futuro

 const countdownDate = new Date('may 18, 2022 00:00:00').getTime();

 let interval = setInterval(function(){
//fecha actual
const now = new Date().getTime();
//obtener las distancias entre las fechas
let distancia = countdownDate - now;
//calculos respectivos
let days = Math.floor(distancia / (1000 * 60 * 60 * 24));

let hours = Math.floor((distancia % (1000 * 60 * 60 * 24))/(1000*60*60));
let minutes = Math.floor((distancia % (1000 * 60 * 60))/(1000*60));
let seconds = Math.floor((distancia % (1000 * 60))/(1000));console.log(seconds);

//escribimos resultados
$days.innerHTML = days;
$hours.innerHTML = hours;
$minutes.innerHTML = minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);

//cuando llegue a 0
if (distancia < 0) {
    clearInterval(interval);
    $finalMes.style.transform = 'translateY(0)';

    
}
 },1000);
