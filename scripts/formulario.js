const capturaDatos = () => {
  let nombreFormulario = document.getElementById("nombre").value;
  let formulario= document.getElementById("formulario")
  // formulario.addEventListener("submit",function (event) {
  //   event.preventDefault();
  //   formulario.reset();
    
  // })


  let correoElec = document.getElementById("email").value;

  let cuadroText = document.getElementById("mensaje").value;
  let patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
  let patronEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/


  

  if (nombreFormulario == "" || correoElec == "" || cuadroText == "") {
    alert("No pueden existir campos vacios");
    document.getElementById("nombreFormulario").focus();
  } else if (nombreFormulario.length > 15) {
    alert("El nombre es demasiado largo");
    
  } else if (correoElec.length > 30) {
    alert("El email es demasiado largo");
    
  }
  else if(patronNombre.test(nombreFormulario)){
    alert("El campo nombre no acepta numeros ");
    return false
    

  }
  else if(!patronEmail.test(correoElec)){
    alert("El correo no es valido ");
   

  }
  else if (!nombreFormulario == "" || correoElec == "" || cuadroText == ""){
    alert("Datos en orden, presione Enviar ")

  }
  
  
};
function postear(){
  
  fetch(`http://localhost:3000/comments`,{
    method:"POST",
    body:JSON.stringify({
      nombre:document.getElementById("nombre").value,
      correo:document.getElementById("email").value,
      texto:document.getElementById("mensaje").value,
     
    }),
    headers:{
      'Content-type': 'application/json; charset=UTF-8',

    }
  })
  .then(response=>response.json())
  .then(response => console.log(response))
}




