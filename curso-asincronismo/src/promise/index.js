//añadiendo un comentario para poder hacer commit

const promise = new Promise(function(resolve, reject){
    resolve("hola")
});

const vacas = 15;

const cuentavacas = new Promise (function (resolve, reject){
    if(vacas > 10){
        resolve(`Llegamos al minimo de leche necesario porque tenemos ${vacas} vacas`)
    }else{
        reject("No tenemos vacas ninio, solo masibon");
    }
    });

cuentavacas.then((resultado) =>{
    console.log(resultado)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("terminado")
})