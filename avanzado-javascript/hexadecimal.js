let cuadro = document.querySelector(".cuadro");
let boton = document.querySelector(".button");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexadecimales = [];


boton.addEventListener("click", modificarcuadro)

function modificarcuadro(){
    crearhexadecimal()
    cuadro.style.backgroundColor = (crearhexadecimal())
    cuadro.innerHTML = (crearhexadecimal())
}


function crearhexadecimal() {
    let newhex = "#";
    for (let i = 0; i < 6; i++) {
        newhex = newhex + hex[(Math.floor(Math.random() * hex.length))];
    }
    return newhex;
}
//let hexadecimal = crearhexadecimal();
//console.log (hexadecimal)

/*
for (let j = 0; j < 10; j++) {
    let hexadecimal = crearhexadecimal();
    hexadecimales.push(hexadecimal)
}
console.log(hexadecimales)
*/