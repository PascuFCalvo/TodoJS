import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector : 'videojuego',
    templateUrl: 'videojuego.component.html'
  

})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo = "Componente (Titulo del constructor)"
        this.listado = "Listado de juegos (constructor)"

        console.log("Cargado");
    }

    ngOnInit(){
        console.log ("OnInit Cargado")
    }

    ngDoCheck(): void {
        console.log("DoCheck cargado")
    }

    ngOnDestroy(): void {
        console.log("OnDestroy ejecutado")
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo activar DoCheck"
    }


}