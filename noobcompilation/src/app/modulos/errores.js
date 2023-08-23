//llamo a la que se rompe dentro de otra funcion y los errores escalan :)

function otrafuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

//Que pasaria con un error asincrono?

//como la mandas a otro hilo al haerla asincrona, no puedes hacerle el tray desde el
//hilo principal
//entonces lo logico es meter el try catch dentro de la asincronia
function seRompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("error en asincrona");
      callback(error);
    }
  }, 1000);
}

//este try catch esta un poco desastre para poder alternar entre la sincrona
//y la asincrona

try {
  //otrafuncion();
  seRompeAsincrona(function (error) {
    console.log("Hay error");
    console.log(error.message);
  });
} catch (err) {
  console.error("Vaya, se ha roto");
  console.error(err.message);
  console.error(err);
  console.log("estamos salvaos!");
  //cuando tienes el error ya puedes hacer lo que quieras con el
}

console.log("Esto es lo ultimo que se ejecuta");
