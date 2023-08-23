import { Component } from '@angular/core';

@Component({
  selector: 'app-asincronia',
  templateUrl: './asincronia.component.html',
  styleUrls: ['./asincronia.component.css'],
})
export class AsincroniaComponent {
  public i = 0;
  public saludo = 'Hola soy una funcion asincrona';
  public nombre = 'Pascual';
  public saludo2 = '';
  public saludo3 = '';
  public despedida = '';
  public estado = '';
  public estado2 = '';
  public inicioproceso = 'iniciando proceso...';
  public inicioproceso2 = 'iniciando proceso...';
  public finproceso = '';
  public finproceso2 = '';
  public dialogo = '';
  public convers = '';

  soyAsincrona() {
    setTimeout(() => {
      this.estado = 'Estoy siendo asincrona(2000ms)';
      setTimeout(() => {
        this.finproceso = 'finalizando proceso..(200ms))';
      }, 200);
    }, 2000);

    return this.estado;
  }

  hola(nombre: string) {
    this.saludo2 = 'hola, ' + nombre;
    setTimeout(() => {
      this.estado2 = 'Estoy siendo asincrona(2000ms)';
      this.adios(nombre);
    }, 2000);

    return this.estado2;
  }

  adios(nombre: string) {
    setTimeout(() => {
      this.despedida = 'adios ,' + nombre + '(1000ms)';
      setTimeout(() => {
        this.finproceso2 = 'finalizando proceso...(200ms)';
      }, 200);
    }, 1000);
  }

  hablar() {
    setTimeout(() => {
      this.dialogo = 'Bla bla bla...';
    }, 500);
  }

  conversacion(nombre: string) {
    this.saludo3 = 'hola, ' + nombre;
    if (this.i < 10) {
      if (this.i % 2 == 0) {
        setTimeout(
          () => {
            this.convers = 'Bla bla bla...(1000ms)';
          },

          2000
        );
      } else {
        setTimeout(() => {
          this.convers = 'Blo blo blo...(1000ms)';
        }, 2000);
      }
    }
  }
}
