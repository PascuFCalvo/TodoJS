/*
const num = 4;
let arrayestrellas = [];

function creararray(num) {
  let stringnum = num.toString();
  let estrellasvacias = 5 - num;
  let truncestrellasvacias = Math.trunc(estrellasvacias);
  let truncnum = Math.trunc(num);

  
  for (let i = 1; i <= truncnum; i++) {
    arrayestrellas.push("*");
  }

  if (stringnum.includes(".")) {
    arrayestrellas.push("/");
  }

  for (let i = 1; i <= truncestrellasvacias; i++) {
    arrayestrellas.push("0");
  }

  console.log(arrayestrellas);
}

creararray(num);
*/
const num = 3.5;
let stringnum = num.toString();
let arrayestrellas = ["0","0","0","0","0"];

function creararray(num) {
  for (let i = 0; i < Math.trunc(num) ; i++){
    arrayestrellas.splice(i,1,"*")
    
  }
  if (stringnum.includes(".")){
    arrayestrellas.splice(Math.trunc(num),1,"/")
  }
 

console.log(arrayestrellas);
}

creararray(num);


