let inputcupon = document.querySelector("#cupon");
let precio = document.querySelector(".precio");
let boton = document.querySelector(".enviarinput")


boton.addEventListener("click", generardescuento)



/*

let codigos = {
    "verano": 30,
    "primavera": 20,
}



function generardescuento() {
    
    for (descuento in codigos) {
             if (descuento == inputcupon.value) {
            precio.textContent = "Nuevo precio: " + (Number(precio.id) - ((Number(precio.id) * Number(codigos[descuento])) / 100))+"€";
            return;
        } else {
            console.log("descuento no valido")
        }

    }
    

    
    //otra forma solo con un if
    //si en el objeto codigos, encuentra algo como lo que ha introducido el usuario
    
    if (codigos[inputcupon.value]){
        //lo guarda como descuento, y lo usa para calcular el nuevo precio.
        let descuento =  codigos[inputcupon.value]
        precio.textContent = "Nuevo precio: " + (Number(precio.id) - ((Number(precio.id) * Number(descuento)) / 100))+"€";
    }else {
        console.log("descuento no valido")
    }

    


}
*/

//seguramente cuando trabajas con backend te devuelvan el valor como una array y no como un objeto
//entonces vamos a trabajar con arrays (podriamos usar fin o filter) como solo quiero uno, usamos find



//generar el array de objetos fake que devolveria el backend
let arraycupones = [];
arraycupones.push({
    nombrecupon: "verano",
    descuentocupon: 30,
},
{
    nombrecupon: "primavera",
    descuentocupon: 20,
}
    
);





//al hacer click

function generardescuento(){
//inicializar descuento, y la variable cuponeti que es igual al input del formulario.
let descuento;
let cuponeti = inputcupon.value;

//si en todo el arraycupones, algun nombrecupon es igual a cuponeti, devuelve true
function encuentracupon(indicecupon){
    
    if(indicecupon.nombrecupon == cuponeti);
    return true; 
    
}
//le pasamos al arraycupones que busque mediante find , y guarde el resultado en una variable
let cuponenarray = arraycupones.find(encuentracupon);

//comprueba si cuponenarray es true (podriamos poner if(cuponenarray == True))
if(cuponenarray){
    // si es true, coge el elemento cuponenarray, su atributo descuento y lo guarda en descuento
    descuento = cuponenarray.descuentocupon;

}else {
    console.log ("cupon no valido");

}    
//aqui ya pues usa la variable descuento para hacer el calculo
precio.textContent = Number(precio.id) - ((Number(precio.id) * descuento / 100));
    
   
console.log({
    cuponeti,
    descuento,
    cuponenarray,

})
}

