console.log("03-tiposdedatos")

//String
let cadena: string = "Pascual Fernandez"
console.log(cadena)

//Number
let numero: number = 25;
console.log(numero)

//Boolean
let booleano: boolean = true;
console.log(booleano)

//Any
let cualquiercosa: any = "lo que sea" + " " + 18
console.log(cualquiercosa)

//Arrays
var lenguajes: Array<string> = ["PHP","JS","TS"]
var lenguajesany: Array<any> = ["PHP","JS","TS",12]
    //otra forma de definirla
let lenguajesforma2:string[] = ["PHP2","JS2","TS2"]
let anos:number[] = [12,13,14,15]
console.log(lenguajes, lenguajesany, lenguajesforma2, anos)

//multiples tipos de datos (puede ser de uno o de otro y no da error)
let cadenamultiple: string | number = "Pascual Fernandez" 
console.log(cadenamultiple)

//puedes crear tipos de datos

type alfanumerico = string | number;

let cadenaalfanumerica = ["a","1","b","2"]
console.log(cadenaalfanumerica)

//let o var?

// let a nivel de bloque, var a nivel global

var numero1 = 10;
var numero2 = 12;
if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log (numero1, numero2) //44 y 55
    //a nivel bloque salen las 2 por consola
}
console.log (numero1, numero2) // 10 55
//a nivel global, numero 2 (55) al ser un var machaca a numero2 (12)


