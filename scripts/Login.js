
/*
funciones a crear:
ver si el usuario ingresado existe en la base de datos tal vez un get y recorriendo el arreglo para ver si el usuario existe
cheaquear si la contraseña es correcta

*/
let arrayDeUsuarios;
let emailInput = document.getElementById(`EmailLogin`)
let contraseñaInput = document.getElementById(`ContraseñaLogin`)

const botonIngresar=document.getElementById(`botonIngresarLogIn`)
botonIngresar.addEventListener(`click`,(event)=>{event.preventDefault()})

class Usuario{
    constructor(email,contraseña){
        this.email=email
        this.contraseña=contraseña
    }
}
class UserEncontrado{
    constructor(email,nombreUsuario,id){
        this.email=email
        this.nombreUsuario=nombreUsuario
        this.id=id
    }
}

let obtenerDatosLogin=()=>{
    let emailLogin=document.getElementById(`EmailLogin`).value
    let contraseñaLogin=document.getElementById(`ContraseñaLogin`).value
    let ingresaUsusario=new Usuario(emailLogin,contraseñaLogin)
    // console.log(ingresaUsusario)
    
}
//obetener datos de la base para ingresar en el loging
let leerUsuariosBaseDeDatos=()=>{
    fetch(`http://localhost:3000/usuarios`)
    .then(response=>response.json())
    .then(response=>{
        usuarioLogueado(response)
    })
}  
const usuarioLogueado=(response)=>{
    //aca lo que hago es buscar si el usuario se encuentra en la base de datos,si es asi lo almaceno en una variable match
    let match= usuarioEncontrado(response)
        if(!match){
            alert("Usuario o contraseña incorrectos")
        } else {
            if (match.contraseña === contraseñaInput.value) {
                const guardarUsusario=new UserEncontrado(match.email,match.nombreUsuario,match.id)
                localStorage.setItem("logueado", JSON.stringify(guardarUsusario))
                window.location.href = "/index.html"
             } else {
                alert("Usuario o contraseña incorrectos")
             } 
        }
}
const usuarioEncontrado=(response)=>{
    const usuario = response.find(usuario => usuario.email === emailInput.value)
    return usuario
}

  
