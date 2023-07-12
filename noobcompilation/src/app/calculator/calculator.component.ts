import { Component } from '@angular/core';
import { BoolToNumComponent } from '../bool-to-num/bool-to-num.component';

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
  public signooperacion: string = "";

  pantalla(valor: string) {
    if (this.pantalla1.length <= 8) {
      this.pantalla1 = this.pantalla1 + valor;
    }
    
    return this.pantalla1;
    
  }

  borrar1(){
    this.pantalla1 = this.pantalla1.substring(0, this.pantalla1.length -1);
    console.log(this.pantalla1)
  }

  borrartodo(){
    if(this.pantalla1.length != 0){
      this.pantalla1 = "";
    }else{
      this.pantalla2 = "";
      this.pantalla1 = "";
    }
    
  }

  anadirdecimal(){
    if (this.pantalla1.includes(".") == false){
      this.pantalla1 = this.pantalla1 + ".";
    }else{
      this.pantalla1 = this.pantalla1.substring(1);
    }

  }

  cambiasigno(){
    if(this.pantalla1.includes("-")==false && this.pantalla1.length > 0){
      this.pantalla1 = "-" + this.pantalla1;

    }

  }

  igual(){
    if (this.signooperacion == "+"){
      this.operando1 = +this.pantalla2;
      this.operando2 = +this.pantalla1;
      this.resultado = this.operando1 + this.operando2;
      this.pantalla2 = this.resultado.toString();
      this.pantalla1 = '';
    }else if (this.signooperacion == "-"){
      this.operando1 = +this.pantalla2;
      this.operando2 = +this.pantalla1;
      this.resultado = this.operando1 - this.operando2;
      this.pantalla2 = this.resultado.toString();
      this.pantalla1 = '';
    }else if(this.signooperacion == "x"){
      this.operando1 = +this.pantalla2;
      this.operando2 = +this.pantalla1;
      this.resultado = this.operando1 * this.operando2;
      this.pantalla2 = this.resultado.toString();
      this.pantalla1 = '';

    }else if(this.signooperacion == "/"){
      this.operando1 = +this.pantalla2;
      this.operando2 = +this.pantalla1;
      this.resultado = this.operando1 / this.operando2;
      this.pantalla2 = this.resultado.toString();
      this.pantalla1 = '';

    }
    
  }

  operacion(op: string) {
    switch (op) {
      case '+':
        this.signooperacion = "+";
        if (this.pantalla2.length == 0) {
          this.pantalla2 = this.pantalla1;
          this.pantalla1 = '';
          this.operando1 = +this.pantalla2;
        }if (this.pantalla2.length == 0 && this.pantalla1.length>0) {
          this.operando1 = +this.pantalla2;
          this.operando2 = +this.pantalla1;
          this.resultado = this.operando1 + this.operando2;
          this.pantalla2 = this.resultado.toString();
          this.pantalla1 = '';
        }
        break;

      case '-':
        this.signooperacion = "-";
        if (this.pantalla2.length == 0) {
          this.pantalla2 = this.pantalla1;
          this.pantalla1 = '';
          this.operando1 = +this.pantalla2;
        }if(this.pantalla2.length == 0 && this.pantalla1.length>0) {
          this.operando1 = +this.pantalla2;
          this.operando2 = +this.pantalla1;
          this.resultado = this.operando1 - this.operando2;
          this.pantalla2 = this.resultado.toString();
          this.pantalla1 = '';
        }
        break;

      case 'x':
        this.signooperacion = "x";
        if (this.pantalla2.length == 0) {
          this.pantalla2 = this.pantalla1;
          this.pantalla1 = '';
          this.operando1 = +this.pantalla2;
        } if (this.pantalla2.length == 0 && this.pantalla1.length>0 ){
          this.operando1 = +this.pantalla2;
          this.operando2 = +this.pantalla1;
          this.resultado = this.operando1 * this.operando2;
          this.pantalla2 = this.resultado.toString();
          this.pantalla1 = '';
        }
        break;

      case '/':
        this.signooperacion = "/";
        if (this.pantalla2.length == 0) {
          this.pantalla2 = this.pantalla1;
          this.pantalla1 = '';
          this.operando1 = +this.pantalla2;
        }if (this.pantalla2.length == 0 && this.pantalla1.length>0 ) {
          this.operando1 = +this.pantalla2;
          this.operando2 = +this.pantalla1;
          this.resultado = this.operando1 / this.operando2;
          this.pantalla2 = this.resultado.toString();
          this.pantalla1 = '';
        }
        break;
    }
  }
}
