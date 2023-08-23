import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent {
  public saludo = '';
  public despedida = '';
  public nombre = 'Pascual';
  public estado = '';
  public estado2 = '';
  public error = "";

  hola() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.saludo = 'Hola, ' + this.nombre + '(1000ms)';
        resolve(this.nombre);
        reject(this.error = "hay un error")
        return this.saludo;
      }, 1000);
    });
  }

  adios() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.despedida = 'adios, ' + this.nombre + '(1000ms)';
        resolve(this.nombre /*mas la logica que quieras*/);
        reject(this.error = "hay un error")
        return this.despedida;
      }, 1000);
    });
  }

  async saludar() {
    
    this.estado = 'iniciando proceso...';
    this.hola()
      .then(() => {
        return this.adios();
      })
      .finally(() => {
        setTimeout(() => {
          this.estado2 = 'terminando proceso...(1000ms)';

          return this.saludo;
        }, 1000);
      })
      .catch(error =>{
        console.error("hay un error");
        console.error(error);
      });
  }
//--para hacerla asyncawait


async hola2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.saludo = 'Hola, ' + this.nombre + '(1000ms)';
      resolve(this.nombre);
      reject(this.error = "hay un error")
      return this.saludo;
    }, 1000);
  });
}

async adios2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.despedida = 'adios, ' + this.nombre + '(1000ms)';
      resolve(this.nombre /*mas la logica que quieras*/);
      reject(this.error = "hay un error");
      this.estado2 = "finalizando proceso";
      return this.despedida;
      
    }, 1000);
  });
}


  async saludar2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.estado = "iniciando proyecto"
        resolve(this.estado);
        reject(this.error = "hay un error")
        return this.saludo;
      }, 1000);
    });
      
  }

  async main(){
    await this.saludar2()
    await this.hola2();
    await this.adios2();
  }
}




//--ASYNC AWAIT