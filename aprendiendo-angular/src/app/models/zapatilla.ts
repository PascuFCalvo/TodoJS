//lo normal cuando creas un modelo de dataos tenga el nombre en singular

export class Zapatilla{
    /*
    public nombre: string;
    public marca: string;
    public precio: number;
    public color: string;
    public stock: boolean;

    constructor(nombre, marca, precio, color, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.color = color;
        this.stock = stock;

}
*/


//esto en typescript es lo mismo que el troncho de arriba con el constructor
//define la propiedad en tu clase y setea el valor a la propiedad.
constructor(
    public nombre: string,
    public marca: string,
    public precio: number,
    public color: string,
    public stock: boolean,
){}
}

//modificando para hacer push