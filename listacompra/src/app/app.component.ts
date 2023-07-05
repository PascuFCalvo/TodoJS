import { Component } from '@angular/core';

//decoradores, metadatos que utiliza angular en TS para intenpretar mas informacion
@Component({
  //este selector hace referencia a la etiqueta del index.html <app-root>
  selector: 'app-root',
  //referencia a donde esta el codigo html/css del componente
  templateUrl: './app.component.html',
  //si el estilo css estuviera fuera del html lo cargaria aqui
  styleUrls: ['./app.component.css']
})
//exportas la clase
export class AppComponent {
  title = 'lista de la compra';
}
