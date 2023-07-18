import { Component } from '@angular/core';
import data from '/home/pascu/javascript/sopra2/src/app/vista-completa/products.json';

@Component({
  selector: 'app-vista-completa',
  templateUrl: './vista-completa.component.html',
  styleUrls: ['./vista-completa.component.css'],
})
export class VistaCompletaComponent {
  Datos: any = data;
  datosclick: any = '';
  detalles: boolean = false;

  showdetails(valor: any) {
    this.datosclick = valor;
    console.log('p', this.datosclick.product);

    if (!this.detalles) {
      this.detalles = true;
    } else {
      this.detalles = false;
    }
  }

  closedetails(){
    this.detalles = false;
  }
}
