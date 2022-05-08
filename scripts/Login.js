
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