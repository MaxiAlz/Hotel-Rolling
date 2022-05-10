
/*
funciones a crear:
ver si el usuario ingresado existe en la base de datos tal vez un get y recorriendo el arreglo para ver si el usuario existe
cheaquear si la contraseña es correcta

*/
class Usuario{
    constructor(email,contraseña){
        this.email=email
        this.contraseña=contraseña
    }
}

let obtenerDatosLogin=()=>{
    let emailLogin=document.getElementById(`EmailLogin`).value
    let contraseñaLogin=document.getElementById(`ContraseñaLogin`).value
    let ingresaUsusario=new Usuario(emailLogin,contraseñaLogin)
    console.log(ingresaUsusario)
    
}
//obetener datos de la base
let leerUsuariosBaseDeDatos=()=>{
    fetch(`http://localhost:3000/usuarios`)
    .then(response=>response.json())
    .then(response=>console-console.log(response))
  }

  //ver si el usuario existe en la base de datos
  const recorrerusuarios=()=>{
      const baseDeDatosUsuarios= leerUsuariosBaseDeDatos()
      baseDeDatosUsuarios.usuarios
      //como hago para recorrer un objeto de objetos
|
  }
