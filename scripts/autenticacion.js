const usuarioLogueado = localStorage.getItem("logueado")
if (!usuarioLogueado) {
    alert("No tiene permisos,debe ingresar a su cuenta")
    window.location.href = "/index.html"
}