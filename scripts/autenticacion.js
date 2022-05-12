const usuarioLogueado = localStorage.getItem("logueado")
if (!usuarioLogueado) {
    alert("No tiene permisos,debe ingresar a su cuenta")
    window.location.href = "/index.html"
}else if(usuarioLogueado){
    document.getElementById(`BotonLogin`).className="d-none"
    document.getElementById(`botonAdmin`).className="nav-item dropdown d-flex justify-content-start"
}

