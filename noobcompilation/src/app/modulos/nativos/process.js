//const process = require ("process");

//process viene dentro de los modulos globales, no hace falta importarlo

process.on("beforeExit", ()=>{
    console.log("el proceso va a temrinar...");
});

process.on("exit", ()=>{
    console.log("proceso terminado");
    //te has salido del event loop
    setTimeout(()=>{
        console.log("Esto no se va a ver nunca")
    },0)
});

setTimeout(()=>{
    console.log("Esto si se va a ver")
},0)

process.on("uncaughtException", (error, origen)=>{
    console.error("No hemos capturado un error");
    console.error(error.message);
})


funcionQueNoExiste();

console.log("Mensaje despues del error (no debe salir)...")