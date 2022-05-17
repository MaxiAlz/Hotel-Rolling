//metodo agregar habitaciones
class habitacion {
    constructor() {
      this.arrhabitacion = [];
    }
    //el boton ejecutara la funcion addHabitacion
    //tomara los valores de los input
    addHabitacion(code, habitaCion, descript) {
      const hab = {
        code: code.value,
        habitaCion: habitaCion.value,
        descript: descript.value,
      };
      this.arrhabitacion.push(hab);
      localStorage.setItem(
        "TodasHabitaciones",
        JSON.stringify(this.arrhabitacion)
      );
    }
  
    getHabitacion() {
      if (localStorage.getItem("TodasHabitaciones")) {
        const list = JSON.parse(localStorage.getItem("TodasHabitaciones"));
        console.log(list);
        list.map((hab) => {
          console.group("Item");
          console.log(`Codigo : ${hab.code}`);
          console.log(`Habitacion : ${hab.habitaCion}`);
          console.log(`Descripcion : ${hab.descript}`);
          console.groupEnd();
        });
      } else {
        alert("No hay habitaciones en tu LocalStorage");
      }
    }
  
    //eliminar habitaciones de localstorage
    deleteHabitacion() {
      const warning = confirm("estas seguro que desea eliminar esta habitacion?");
      if (warning) {
        localStorage.clear;
        
      }
    }
  }
  const libraryHabitacion = new habitacion()
  libraryHabitacion.addHabitacion()