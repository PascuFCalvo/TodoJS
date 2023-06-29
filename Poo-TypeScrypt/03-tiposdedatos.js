console.log("03-tiposdedatos");
//String
var cadena = "Pascual Fernandez";
console.log(cadena);
//Number
var numero = 25;
console.log(numero);
//Boolean
var booleano = true;
console.log(booleano);
//Any
var cualquiercosa = "lo que sea" + " " + 18;
console.log(cualquiercosa);
//Arrays
var lenguajes = ["PHP", "JS", "TS"];
var lenguajesany = ["PHP", "JS", "TS", 12];
//otra forma de definirla
var lenguajesforma2 = ["PHP2", "JS2", "TS2"];
var anos = [12, 13, 14, 15];
console.log(lenguajes, lenguajesany, lenguajesforma2, anos);
//multiples tipos de datos (puede ser de uno o de otro y no da error)
var cadenamultiple = "Pascual Fernandez";
console.log(cadenamultiple);
var cadenaalfanumerica = ["a", "1", "b", "2"];
console.log(cadenaalfanumerica);
//let o var?
// let a nivel de bloque, var a nivel global
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2); //44 y 55
    //a nivel bloque salen las 2 por consola
}
console.log(numero1, numero2); // 10 55
//a nivel global, numero 2 (55) al ser un var machaca a numero2 (12)
