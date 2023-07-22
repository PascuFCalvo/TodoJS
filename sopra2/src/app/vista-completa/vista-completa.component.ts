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
  primerproducto: boolean = true;
  filtroactivado: boolean = false;
  listadoinicial: boolean = true;
  imagendetalle: boolean = false;
  indiceproductoseleccionado: number = 0;
  fav:boolean = false;
  arrayestrellas = ["0","0","0","0","0"];
  arrayimprimir:string[] = [];
  arrayimprimirsimilar:string[] = [];
  arrayimprimirsimilar2:string[] = [];
  primerelemento = ["1","1","1","1","/"];
  

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

  isfav(){
    //this.fav === false  ? this.fav = true : this.fav = false;
    this.fav = this.fav === false;
    if(!this.Datos[this.indiceproductoseleccionado].fav){
      this.Datos[this.indiceproductoseleccionado].fav = true;
    }else {delete this.Datos[this.indiceproductoseleccionado].fav}
    console.log(this.indiceproductoseleccionado, this.Datos)
  }

  favfalse(){
    this.fav = false;
  }

  funcionestrellas(num:number){
    let stringnum = num.toString();
    for (let i = 0; i < Math.trunc(num) ; i++){
      this.arrayestrellas.splice(i,1,"1")
      
    }
    if (stringnum.includes(".")){
      this.arrayestrellas.splice(Math.trunc(num),1,"/")
    }
   this.arrayimprimir = this.arrayestrellas;
   
   console.log( this.arrayimprimir);
   this.arrayestrellas = ["0","0","0","0","0"];
   
   
  }

  funcionestrellassimilar(num:number){
    let stringnum = num.toString();
    for (let i = 0; i < Math.trunc(num) ; i++){
      this.arrayestrellas.splice(i,1,"1")
      
    }
    if (stringnum.includes(".")){
      this.arrayestrellas.splice(Math.trunc(num),1,"/")
    }
   this.arrayimprimirsimilar = this.arrayestrellas;
   
   console.log( this.arrayimprimir);
   this.arrayestrellas = ["0","0","0","0","0"];
   
   
  }

  funcionestrellassimilar2(num:number){
    let stringnum = num.toString();
    for (let i = 0; i < Math.trunc(num) ; i++){
      this.arrayestrellas.splice(i,1,"1")
      
    }
    if (stringnum.includes(".")){
      this.arrayestrellas.splice(Math.trunc(num),1,"/")
    }
   this.arrayimprimirsimilar2 = this.arrayestrellas;
   
   console.log( this.arrayimprimir);
   this.arrayestrellas = ["0","0","0","0","0"];
   
   
  }

  ajusterating(indice:number){
    console.log(this.arrayimprimir);
    console.log(indice);
    this.Datos[this.indiceproductoseleccionado].rating = indice+1
    for(let x = indice; x>= 0; x--){
      this.arrayimprimir[x] = "1"
    }
  
    for(let j = indice+1; j<=4; j++){
        this.arrayimprimir[j] = "0";
    }
    
    console.log(this.arrayimprimir);
  }


  ajusteratinginicio(indice:number){
    console.log(this.arrayimprimir);
    console.log(indice);
    this.Datos[this.indiceproductoseleccionado].rating = indice+1
    for(let x = indice; x>= 0; x--){
      this.primerelemento[x] = "1"
    }
  
    for(let j = indice+1; j<=4; j++){
        this.primerelemento[j] = "0";
    }
    
    console.log(this.primerelemento);
  }

 
}
