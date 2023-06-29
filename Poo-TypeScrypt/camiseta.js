//clase (molde del bojeto)
// le voy a meter un export para la clase de import export nada mas
/*export*/ /*class CreaCamiseta  {
    //propiedades (caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

}
*/
// metodos (funciones o acciones del objeto)
//al ser propiedades public cuando tu instances para hacer una nueva camiseta
//podras acceder a todas las propiedades para modificarlas
/*
var camiseta1 = new CreaCamiseta();

camiseta1.color = "rojo"
camiseta1.modelo = "mangalarga"
camiseta1.marca = "nike"
camiseta1.talla = "XL"
camiseta1.precio = 30


var playera1 = new CreaCamiseta();

playera1.color = "azul"
playera1.modelo = "tirantes"
playera1.marca = "adidas"
playera1.talla = "L"
playera1.precio = 20
*/
//console.log([camiseta1, playera1])
//console.log({ camiseta1, playera1 })
//console.log(camiseta1, playera1)
//visivilidad public, private y protected.
//////////////////////////////////////////////////////////////////////////
/*
class CreaCamisetaPrivada {

    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //como son privados no se puede acceder desde fuera y hay que hacer
    //metodos publicos que cambien las variables
    public cambiacolor(nuevocolor: string) {
        this.color = nuevocolor;
    }
    public getcolor() {
        return this.color;
    }
}

*/
//var camiseta2 = new CreaCamisetaPrivada();
//camiseta2.cambiacolor("verde");
//camiseta1.getcolor();
//var playera2 = new CreaCamisetaPrivada();
//playera2.cambiacolor("amarillo");
//console.log(camiseta2, playera2)
//console.log(camiseta2.getcolor(), playera2.getcolor())
//////////////////////////////////////////////////////////////////////////
//le implemento la interfaz que hemos creado
var CreaCamisetaConstructor = /** @class */ (function () {
    function CreaCamisetaConstructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //si la clase no tuviera estos 2 metodos, daria error (Aunque seguria compilando
    CreaCamisetaConstructor.prototype.setColor = function (color) {
        this.color = color;
    };
    CreaCamisetaConstructor.prototype.getColor = function () {
        return this.color;
    };
    return CreaCamisetaConstructor;
}());
var camiseta3 = new CreaCamisetaConstructor("amarillo", "mangacorta", "reebok", "S", 25);
console.log(camiseta3);
console.log(camiseta3.color);
