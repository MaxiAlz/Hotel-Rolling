class UsuarioNuevo{
  constructor(email,nombreUsuario,contraseña){
    this.email=email
    this.nombreUsuario=nombreUsuario
    this.contraseña=contraseña
  }
  
}
const botonCrearCuenta=document.getElementById(`botonCrearCuenta`)
botonCrearCuenta.addEventListener(`click`,(event)=>{event.preventDefault()})
/*
funciones a crear:

validar que el mail este bien ingresado
validar nombre de usuario(no mas de 15 caracteres)
crear usuario nuevo a partir de clase

*/
// validar contraseñas
  let ContraseñaInvalida=()=>{
    let contraseña=document.getElementById(`contraseñaCrearCuenta`).value
    let confirmarContraseña=document.getElementById(`confirmarContraseña`).value
    console.log(contraseña,confirmarContraseña)
    if(contraseña!=confirmarContraseña){
      document.getElementById(`contraseñaNoCoinciden`).className=`form-text text-danger`
      return true
    }else return false
  }

  //validar email
  const validarEmail=()=>{
    let email=document.getElementById(`emailCrearCuenta`).value
    console.log(email);
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // const esValido=expReg.test(email)
    console.log(expReg.test(email));
    if(expReg.test(email)==false){
      document.getElementById(`emailIncorrecto`).className=`form-text text-danger`
      return true
    }else return false
  }



 
