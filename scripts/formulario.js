const capturaDatos = () => {
  let nombreFormulario = document.getElementById("nombre").value;
  let formulario= document.getElementById("formulario")
  formulario.addEventListener("submit",function (event) {
    event.preventDefault();
    formulario.reset();
    
  })


  let correoElec = document.getElementById("email").value;

  let cuadroText = document.getElementById("mensaje").value;
   let patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
   let patronEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/


  

  if (nombreFormulario == "" || correoElec == "" || cuadroText == "") {
    alert("Campo Obligatorios,Ingrese sus datos faltantes");
    document.getElementById("nombreFormulario").focus();
  } else if (nombreFormulario.length > 15) {
    alert("El nombre es demasiado largo");
    return false;
  } else if (correoElec.length > 30) {
    alert("El email es demasiado largo");
    return false;
  }
  else if(patronNombre.test(nombreFormulario)){
    alert("El campo nombre no acepta numeros ");
    return false
    

  }
  else if(!patronEmail.test(correoElec)){
    alert("El correo no es valido ");

  }
};

