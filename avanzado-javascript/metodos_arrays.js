//map() : Permite recorrer el array y modificar los elementos presentes en él, 
//retornando un nuevo array con la misma longitud que el original.

let array = [1,2,3,4,5];
let arraynuevo = [];
arraynuevo = array.map(elemento=> elemento+"h");
console.log(arraynuevo); // ["1h","2h","3h","4h","5h"]

//filter() : Recorre el array y retorna un nuevo array con aquellos 
//elementos que pasen una determinada condición.

let array = [1,2,3,4,5];
let arraynuevo = [];
arraynuevo = array.filter(elemento => elemento >=3)
console.log (arraynuevo); // [3,4,5]

//forEach() : Permite iterar el contenido de un array. Recibe un callback
//que toma como parámetro el elemento actual de la iteración y el indice del mismo.

let array = ["banana","manzana","naranja"];
let arraynuevo =[];
arraynuevo = array.forEach((elemento, indice) =>{
    array[1] = "manzanamodificada"
    console.log(`${elemento} esta en indice ${indice}`)
});

//find() : Recorre el array y retorna la primera coincidencia
//del elemento que se busca

