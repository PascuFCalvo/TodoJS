import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { BoundElementProperty } from "@angular/compiler";

@Component({
    selector:"zapatillas",
    templateUrl: "./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit {
    public titulo:string = "Componente de Zapatillas";
    //crear un array de objetos tipo zapatilla
    public zapatillas: Array<Zapatilla>
    //vamos a crear un array de marcas a base de recorrer el array zapatillas
    // tb se podria definir asi public marcaZapas: Array<string>
    public marcaZapas: String[];
    public miMarca:String;
    public color: string;

    constructor(){
        //era undefinded hasta que le has dicho que es un array nuevo
        this.miMarca ="";
        this.color = "red";
        this.marcaZapas = new Array;
        this.zapatillas = [
            //accedes a tu objeto y creas una nueva 
            new Zapatilla("AirMax", "Nike", 150, "Negro", true),
            new Zapatilla("Jordan", "Reebok", 120, "Rojo", true),
            new Zapatilla("Pippen", "Reebok", 110, "Negro", true),
            new Zapatilla("Messi", "Nike", 100, "Azul", false),
            new Zapatilla("cr7", "adidas", 200, "Azul", false),
        ]
    }

    ngOnInit(): void {
        //console.log("OnInit Running")
        console.log (this.zapatillas)
        //console.log(this.zapatillas[2].nombre)

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, indice) =>{
            //vamos a eliminar las marcas dubplicadas
            //si esa marca no esta ya en el array devuelve -1 y la añade al array
            //si ya esta devuelve el primer elemento , es >0 y por lo tanto no lo pushea
            if(this.marcaZapas.indexOf(zapatilla.marca) < 0){
                this.marcaZapas.push(zapatilla.marca)
            }
            
            console.log(indice)

        });

        console.log(this.marcaZapas)
    }

    addMarca(){
        console.log(this.miMarca);
        this.marcaZapas.push(this.miMarca);
    }
}