import { Component } from '@angular/core';
import data from '/home/pascu/javascript/sopra/src/app/productillos/products.json';

@Component({
  selector: 'app-productillos',
  templateUrl: './productillos.component.html',
  styleUrls: ['./productillos.component.css'],
})
export class ProductillosComponent {
  Datos: any = data;
  datosclick: any = '';
  detalles: boolean = false;
  primerproducto: boolean = true;
  filtroactivado: boolean = false;
  listadoinicial: boolean = true;
  imagendetalle: boolean = false;
  indiceproductoseleccionado: number = 0;
  fav: boolean = false;
  arrayestrellas = ['0', '0', '0', '0', '0'];
  arrayimprimir: string[] = [];
  arrayimprimirclick: string[] = [];
  arrayimprimirsimilarprimero1: string[] = [];
  arrayimprimirsimilarprimero2: string[] = [];
  arrayimprimirsimilar: string[] = [];
  arrayimprimirsimilar2: string[] = [];
  arrayreview: string[] = [];
  arrayreviewprimero1: string[] = [];
  arrayreviewprimero2: string[] = [];
  arrayreview1: string[] = [];
  arrayreview2: string[] = [];
  primerelemento = ['1', '1', '1', '1', '/'];
  fecha = new Date();

  showdetails(valor: any, index: number) {
    this.datosclick = valor;

    this.indiceproductoseleccionado = index;
    if (!this.detalles) {
      this.detalles = true;
      this.primerproducto = false;
    }
  }

  closedetails() {
    this.detalles = false;
    this.primerproducto = false;
  }

  mas1000() {
    this.filtroactivado = true;
    this.listadoinicial = false;
    for (let i = 0; i < this.Datos.length; i++) {
      if (this.Datos[i].price >= 1001) {
        this.Datos[i].filter = true;
      } else {
        this.Datos[i].filter = false;
      }
    }
  }
  resetfilter() {
    this.filtroactivado = false;
    this.listadoinicial = true;
  }

  eliminar() {
    if (this.indiceproductoseleccionado > -1) {
      this.Datos.splice(this.indiceproductoseleccionado, 1);
      this.closedetails();
      this.indiceproductoseleccionado = 0; // Reiniciar el índice del producto seleccionado
    }
  }

  imagenfull() {
    if (this.imagendetalle == false) {
      this.imagendetalle = true;
    } else {
      this.imagendetalle = false;
    }
  }

  isfav() {
    //this.fav === false  ? this.fav = true : this.fav = false;
    this.fav = this.fav === false;
    if (!this.Datos[this.indiceproductoseleccionado].fav) {
      this.Datos[this.indiceproductoseleccionado].fav = true;
    } else {
      delete this.Datos[this.indiceproductoseleccionado].fav;
    }
  }

  favfalse() {
    this.fav = false;
  }

  funcionestrellas(num: number) {
    let stringnum = num.toString();
    for (let i = 0; i < Math.trunc(num); i++) {
      this.arrayestrellas.splice(i, 1, '1');
    }
    if (stringnum.includes('.')) {
      this.arrayestrellas.splice(Math.trunc(num), 1, '/');
    }
    this.arrayimprimir = this.arrayestrellas;

    this.arrayestrellas = ['0', '0', '0', '0', '0'];
    return this.arrayimprimir;
  }

  funcionestrellassimilarprimero() {
    this.arrayimprimirsimilarprimero1 = this.funcionestrellas(
      this.Datos[0].similarProducts[0].rating
    );
  }

  funcionestrellassimilarprimero2() {
    this.arrayimprimirsimilarprimero2 = this.funcionestrellas(
      this.Datos[0].similarProducts[1].rating
    );
  }

  funcionestrellassimilar() {
    this.arrayimprimirsimilar = this.funcionestrellas(
      this.datosclick.similarProducts[0].rating
    );
  }
  funcionestrellassimilar2() {
    this.arrayimprimirsimilar2 = this.funcionestrellas(
      this.datosclick.similarProducts[1].rating
    );
  }
  funcionestrellasonclick() {
    this.arrayimprimirclick = this.funcionestrellas(this.datosclick.rating);
  }


  funcionreviewprimero1() {
    this.arrayreviewprimero1 = this.funcionestrellas(
      this.Datos[0].reviews[0].raging
    );
  }
  funcionreviewprimero2() {
    this.arrayreviewprimero2 = this.funcionestrellas(
      this.Datos[0].reviews[1].raging
    );
  }

  funcionreview1() {
    this.arrayreview1 = this.funcionestrellas(
      this.datosclick.reviews[0].raging
    );
  }
  funcionreview2() {
    this.arrayreview2 = this.funcionestrellas(
      this.datosclick.reviews[1].raging
    );
  }

  ajusterating(indice: number) {
    this.Datos[this.indiceproductoseleccionado].rating = indice + 1;
    for (let x = indice; x >= 0; x--) {
      this.arrayimprimir[x] = '1';
    }

    for (let j = indice + 1; j <= 4; j++) {
      this.arrayimprimir[j] = '0';
    }
  }

  ajusteratinginicio(indice: number) {
    this.Datos[this.indiceproductoseleccionado].rating = indice + 1;
    for (let x = indice; x >= 0; x--) {
      this.primerelemento[x] = '1';
    }

    for (let j = indice + 1; j <= 4; j++) {
      this.primerelemento[j] = '0';
    }
  }
}
