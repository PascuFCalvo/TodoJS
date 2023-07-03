import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = 'aprendiendo-angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.config = configuracion;
    this.titulo = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }

  ocultarVideojuegos(value:boolean){
    this.mostrar_videojuegos = value;
  }
}
