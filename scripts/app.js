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
let seconds = Math.floor((distancia % (1000 * 60))/(1000));
// console.log(seconds);

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

 const pintarCards=()=>{
    fetch(`http://localhost:3000/habitaciones`)
    .then(response=>response.json())
    .then(response=>{
        // console.log(response)
        response.map((habitacion)=>{
            if(habitacion.visible){
                const containerCards=document.getElementById(`PintarCategoria`)
                containerCards.innerHTML=` <section class="cateGorias" id="habitacion1">
                <div class="categoria d-flex">
                  <div class="categoria-style primTerc">
                    <a href="#"><img src="./img/habitacion1.jpg" alt="habitacion1"></a>
                  </div>
                  <div class="categoria-textos">
                    <h3>Habitación - Relax</h3>
                    <p>Las suites relax están orientadas al sur y tienen vista a la terraza de la piscina. Cada una de nuestras suites ofrece 1 cama King y un sofá cama grande, y la mayoría cuenta con un balcón privado y dos baños completos. Los muebles contemporáneos transmiten una atmósfera de elegancia informal y brindan un amplio espacio de almacenamiento para una escapada romántica a Miami o unas vacaciones prolongadas frente a la playa en Miami. Los balcones privados permiten que los viajeros de negocios o de placer aprovechen el clima casi perfecto de Miami. Aproximadamente 440 pies cuadrados. Ocupación máxima 4 personas. No hay camas plegables disponibles. Cunas para bebés disponibles bajo petición.</p>
                  </div>
                </div>
              </section> 
              <section class="cateGorias" id="habitacion1">
                <div class="categoria habdos d-flex">
                  <div class="categoria-style primTerc">
                    <a href="#"><img src="./img/habitacion2.jpg" alt="habitacion2"></a>
                  </div>
                  <div class="categoria-textos">
                    <h3>Habitación - Familiar</h3>
                    <p>Nuestras suites familiares están ubicadas en la esquina sureste o suroeste del Grand Rolling Hotel Miami, mientras que nuestras suites Penthouse están ubicadas en el último piso del hotel. Estas habitaciones ofrecen vistas a la bahía de Biscayne o al océano Atlántico. Todos vienen con balcones privados para aprovechar el clima casi perfecto de Miami y las puestas de sol perfectas. Aproximadamente 840-880 pies cuadrados. ocupación máxima 8 personas dependiendo de la habitación. No hay camas plegables disponibles. Cunas para bebés disponibles bajo petición.</p>
                  </div>
        
                </div>
              </section>
              <section class="cateGorias ">
                <div class="categoria d-flex">
                  <div class="categoria-style primTerc">
                    <a href="#"><img src="./img/habitacion3.jpg" alt="habitacion3"></a>
                  </div>
                  <div class="categoria-textos">
                    <h3>Habitación - King</h3>
                    <p>Nuestras king suites frente al mar en el Grand Rolling Hotel Miami están orientadas hacia el este y permiten vistas directas del amanecer sobre el Océano Atlántico y la playa blanca. Cada suite está equipada con una cama King o dos camas dobles, un sofá cama grande, balcón y dos baños completos. Aproximadamente 440 - 500 pies cuadrados, ocupación máxima de 4 personas. No hay camas supletorias disponibles. Cunas para bebés disponibles bajo petición.</p>
                  </div>
        
                </div>
              </section>`

            }

        })
    })
 }

 pintarCards()

