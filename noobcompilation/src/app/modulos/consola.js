const { ɵɵpureFunction2, ɵɵpureFunction1 } = require("@angular/core")

//tipos de logs
console.log("log estandar")
console.info("info")
console.error("errores")
console.warn("potencal error / aviso")

var tabla =[
    {a:1,b:"Pepe",c:35},{a:2, b:"Luis",c:40}
]

console.table(tabla)

//agrupar logs

console.group("conversacion")
console.log("Hola");
console.group("bla")
console.log("blablablabla");
console.log("blablablabla");
console.log("blablablabla");
console.groupEnd("bla")
console.log("adios");
console.groupEnd("conversacion")
console.log("otra cosa que no tiene nada que ver")

function funcion1(){
    console.group("funcion 1");
    console.log("esto es de la funcion 1");
    console.log("esto tambien")
    console.log("esto tambien")
    funcion2()
    console.groupEnd("funcion 1");
}

function funcion2(){
    console.group("funcion 2");
    console.log("ahora estoy en la funcion 2")
    console.groupEnd("funcion 2");
    console.log("hemos vuelto a la funcion 1")
}


console.log("empezamos");
funcion1();

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
