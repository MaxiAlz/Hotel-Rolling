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
 limpiar campos formulario
*/
// const ejecutarValidaciones=()=>{
//   contraseñaInvalida()
//   emailIncorrecto()
//   usuarioIncorrecto()
// }
// validar contraseñas
  let contraseñaInvalida=()=>{
    let contraseña=document.getElementById(`contraseñaCrearCuenta`).value
    let confirmarContraseña=document.getElementById(`confirmarContraseña`).value
    console.log(contraseña,confirmarContraseña)
    if(contraseña!=confirmarContraseña){
      document.getElementById(`contraseñaNoCoinciden`).className=`form-text text-danger`
      return true
    }else {
      document.getElementById(`contraseñaNoCoinciden`).className=`d-none`
      return false
    }
  }

  //validar email
  const emailIncorrecto=()=>{
    let email=document.getElementById(`emailCrearCuenta`).value
    console.log(email);
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // const esValido=expReg.test(email)
    console.log(expReg.test(email));
    if(expReg.test(email)==false){
      document.getElementById(`emailIncorrecto`).className=`form-text text-danger`
      return true
    }else {
      document.getElementById(`emailIncorrecto`).className=`d-none`
      return false
    }
  }

  //validar nombre de usuario
  const usuarioIncorrecto=()=>{
    const nombreUsuario=document.getElementById(`nombreUsuarioCrearCuenta`).value
    if(nombreUsuario.length>15){
      document.getElementById(`nombreUsuarioLargo`).className=`form-text text-danger`
      return true
    }else{
      document.getElementById(`nombreUsuarioLargo`).className=`d-none`
      return false
    }
  }

  
  // para acceder a la base de datos de usuarios uso:
  //http://localhost:3000/usuarios
  
  //metodo GET
  let obtenerDatos=()=>{
    fetch(`http://localhost:3000/usuarios`)
    .then(response=>response.json())
    .then(response=>console-console.log(response))
  }
 
  //metodo Post
  
  const postUsuario=()=>{
    fetch(`http://localhost:3000/usuarios`,{
      method:`POST`,
    // body:JSON.stringify(UsuarioNuevo())
    body: JSON.stringify({
      email: `${document.getElementById(`emailCrearCuenta`).value}`,
      nombreUsuario: `${document.getElementById(`nombreUsuarioCrearCuenta`).value}`,
      contraseña: `${document.getElementById(`contraseñaCrearCuenta`).value}`
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }
  })
  .then(response=>response.json())
  .then(response=>console.log(response))
}

const crearUsuarionuevo=()=>{
  if( contraseñaInvalida()||emailIncorrecto()||usuarioIncorrecto()){
    return
  }else{
    let contraseña=document.getElementById(`contraseñaCrearCuenta`).value
    let email=document.getElementById(`emailCrearCuenta`).value
    let nombreUsuario=document.getElementById(`nombreUsuarioCrearCuenta`).value
    let nuevoUsuario = new UsuarioNuevo(email,nombreUsuario,contraseña)
    console.log(nuevoUsuario)
    return nuevoUsuario
  }
}