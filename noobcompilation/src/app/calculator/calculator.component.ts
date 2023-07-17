import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  public pantalla1: string = '';
  public pantalla2: string = '';
  public operando1: number = 0;
  public operando2: number = 0;
  public resultado: number = 0;
  public memoria: string = '';

  pantalla(valor: string) {
    if (this.pantalla1.length <= 8) {
      this.pantalla1 = this.pantalla1 + valor;
    }

    return this.pantalla1;
  }

  borrar1() {
    this.pantalla1 = this.pantalla1.substring(0, this.pantalla1.length - 1);
    console.log(this.pantalla1);
  }

  borrartodo() {
    this.pantalla1 = '';
    //if (this.pantalla1.length === 0) {
    if (!this.pantalla1.length) {
      this.pantalla2 = '';
    }
  }

  anadirdecimal() {
    /*if (!this.pantalla1.includes('.')) {
      if(!this.pantalla1.length){
        this.pantalla1 = "0";
      }
      this.pantalla1 = this.pantalla1 + '.';
    } */
    if (!this.pantalla1.includes('.')) {
      this.pantalla1 = !this.pantalla1.length ? '0.' : this.pantalla1 + '.';
    }
  }

  cambiasigno() {
    if (!this.pantalla1.includes('-') && this.pantalla1.length) {
      this.pantalla1 = '-' + this.pantalla1;
    } else {
      this.pantalla1 = this.pantalla1.substring(1);
    }
  }

  igual() {
    this.asignaroperandos();

    if (this.memoria === '+') {
      this.resultado = this.operando1 + this.operando2;
    } else if (this.memoria === '-') {
      this.resultado = this.operando1 - this.operando2;
    } else if (this.memoria === 'x') {
      this.resultado = this.operando1 * this.operando2;
    } else if (this.memoria === '/') {
      this.resultado = this.operando1 / this.operando2;
    }
    this.pantalla2 = this.resultado.toString();
    this.pantalla1 = '';
  }

  operacion(op: string) {
    this.memoria = op;

    this.pantallas();

    if (this.pantalla1.length) {
      this.asignaroperandos();
      if (this.memoria === '+') {
        this.resultado = this.operando1 + this.operando2;
      } else if (this.memoria === '-') {
        this.resultado = this.operando1 - this.operando2;
      } else if (this.memoria === 'x') {
        this.resultado = this.operando1 * this.operando2;
      } else if (this.memoria === '/') {
        this.resultado = this.operando1 / this.operando2;
      }
    }
  }

  pantallas() {
    if (this.pantalla2.length == 0) {
      this.pantalla2 = this.pantalla1;
      this.pantalla1 = '';
      this.operando1 = +this.pantalla2;
    }
  }

  asignaroperandos() {
    this.operando1 = +this.pantalla2;
    this.operando2 = +this.pantalla1;
  }
}
