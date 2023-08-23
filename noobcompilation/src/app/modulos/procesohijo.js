const { exec, spawn } = require("child_process");

/*

//esto es igual que
//const exec = requier("child_process").exec;

//fallo al poner la direccion 
//pero con esto puedes ejecutar un proceso, que a su vez llama a otro proceso
exec("noobcompilation modulos/consola.js", (error, standardout, standarderror)=>{
    if(error) {
        console.error(error);
        return false;
    }

    console.log(standardout);
})

*/
let proceso = spawn("ls", ["-la"]);
console.log(proceso.id);
console.log("Esta muerto?")
console.log(proceso.killed);
console.log("Esta conectado?")
console.log(proceso.connected);

proceso.stdout.on("data", function(dato){
    console.log(dato.toString())
})

proceso.on("exit", function(){
    console.log("el proceso termina");
    console.log("Esta muerto?")
    console.log(proceso.killed);
})