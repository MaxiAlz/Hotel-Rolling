/*
crear funciones:
1 capturar id de las etiquetas donde va el contenido a agregar
1 metodo post que tome los campos de la pagina para mostrarlos en el index
2 metodo para tomar los datos de la base de datos y mostrarlos en pantalla
*/

// ACA DEBERIAMOS HACER TODA LA LOGICA DE LA PAGINA DE ADMINISTRACION
const cargarContenidoHabitaciones=document.getElementById(`PintarCategoria`)//div donde se van a subir
// const templateCards=document.getElementById(`template-Card-Habitaciones`).content
const fragment=document.createDocumentFragment()

console.log(cargarContenidoHabitaciones);
document.addEventListener(`DOMContentLoaded`,()=>{
    obtenerDatosHabitaciones()
})

const obtenerDatosHabitaciones=()=>{
    fetch(`http://localhost:3000/habitaciones`)
    .then(response=>response.json())
    .then(response=>{
        agregarContenidoCards(response)
    })
}

// const agregarContenidoCards=(habitaciones)=>{
//     habitaciones.forEach(habitacion => {
//         // en cada vuelta pinto los templates
//         templateCards.getElementById(`titulo-habitacion-card`).textContent=habitacion.titulo
//         templateCards.getElementById(`descipcion-habitacion-card`).textContent=habitacion.descripcion
//         // #####ver que onda esto que no anda###########
//         templateCards.getElementById(`imagen-habitacion-card`).setAttribute("src",habitacion.imagen)
//         // agregar al boton check el id
//         // templateCards.querySelector(`.botoncheck1`).dataset.id=habitacion.id
//         const clone=templateCards.cloneNode(true)
//         fragment.appendChild(clone)
//     })
//     cargarContenidoHabitaciones.appendChild(fragment)
// }

// const botonCheck=document.getElementById(`BotonCheck1`)
// const mostrarCard=(boton)=>{
//     if(boton.checked){
//         console.log(`el boton dio: ${boton.checked}`)
//         //ir a la card del index y modificar la clase
//         let habitacion=document.getElementById(`habitacion1`)
//         habitacion.className="d-none"
//         console.log(habitacion)

//     }else{
//         let habitacion=document.getElementById(`habitacion1`)
//         habitacion.className="cateGorias"
//     }
// }

