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
