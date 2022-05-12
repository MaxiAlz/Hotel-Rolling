
const usuarioLogueado = localStorage.getItem("logueado")
if(usuarioLogueado){
    document.getElementById(`BotonLogin`).className="d-none"
    document.getElementById(`botonAdmin`).className="nav-item dropdown d-flex justify-content-start"
    document.getElementById(`botonEliminarCuentaNav`).className="d-none"  
}
const cerrarSesion = () => {
    const confirmacion = confirm("¿Cerrar Sesion?")
    if (confirmacion) {
        localStorage.removeItem("logueado")
        window.location.href = "/index.html"
    } 
}

