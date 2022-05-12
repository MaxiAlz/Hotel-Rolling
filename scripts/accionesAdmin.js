//verificar si hay un usuario logueado
const usuarioLogueado = localStorage.getItem("logueado")
if (!usuarioLogueado) {
    alert("No tiene permisos,debe ingresar a su cuenta")
    window.location.href = "/index.html"
}

// metodo eliminar cuenta
 const eliminarCuenta=()=>{
     const usuarioActual=JSON.parse(localStorage.getItem(`logueado`)).id
     console.log(usuarioActual);
      alert(`¿Seguro que quiere Eliminar su Cuenta?`)
      const confirmacion = confirm("Esta accion ¡No se puede Deshacer!")
     if(confirmacion){
         console.log("confirmado");
         fetch(`http://localhost:3000/usuarios/${usuarioActual}`,{
             method: `DELETE`
         })
         localStorage.clear()
     }else{
         alert(`No le tengas miedo al exito`)
     }
 }

const cerrarSesion = () => {
    const confirmacion = confirm("¿Cerrar Sesion?")
    if (confirmacion) {
        localStorage.removeItem("logueado")
        window.location.href = "/index.html"
    } 
}
