//importar un modulo dentro de node
const fs = require("fs");

//creas la funcion leer que le pasas como argumento la ruta y una funcion callback
//para poder luego hacer cosas con el archivo

//utilizas el metodo readfile (que te pide la ruta, y en el callback , le pasas
//como argumento, el error y el dato que capturas)

//con console.log lo pintas pero sale un buffer
//con toString(), lo conviertes a texto legible

function leer(ruta, callback){
    fs.readFile(ruta,(error,dato)=>{
        console.log(dato.toString());

    })
}

//llamas a la funcion y le pasas el argumento (ruta)

function escribir (ruta, contenido, callback){
    fs.writeFile(ruta, contenido, function(error, dato){
        if (error){
            console.error("No he podido escribirlo", error)
        }else{
            console.log("Se ha escrito correctamente")
        }
    });
}

function borrar (ruta, callback){
    fs.unlink(ruta, callback);
}

leer(__dirname + "/archivo.txt")
escribir(__dirname + "/archivo1.txt", "He creado un archivo nuevo", console.log)
borrar(__dirname + "/archivo1.txt", console.log)