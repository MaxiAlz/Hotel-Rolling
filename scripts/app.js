//nav bar transition
const nav=document.querySelector(".navbarStyle");

window.addEventListener(`scroll`, ()=>{
    nav.classList.toggle(`active`,window.scrollY>0)
})

//ler api
document.addEventListener(`DOMContentLoaded`,()=>{
    leerApiUsuarios()
})

const leerApiUsuarios=async()=>{
    try{
        const respuesta=await fetch(`users.json`)
        const datosDeLaApi=await respuesta.json()
        console.log(datosDeLaApi)
    }catch(error){
        console.log(error);
    }
}

const recorrerDAtos=(arrayDatos)=>{
    arrayDatos.forEach(objeto => {
        console.log(objeto.tittle);
    });
}