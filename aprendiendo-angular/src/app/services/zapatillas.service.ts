import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            //accedes a tu objeto y creas una nueva 
            new Zapatilla("AirMax", "Nike", 150, "Negro", true),
            new Zapatilla("Jordan", "Reebok", 120, "Rojo", true),
            new Zapatilla("Pippen", "Reebok", 110, "Negro", true),
            new Zapatilla("Messi", "Nike", 100, "Azul", false),
            new Zapatilla("cr7", "adidas", 200, "Azul", false),
        ];
    }

    getTexto(){
        return "Hola, probando el servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;

    }
}