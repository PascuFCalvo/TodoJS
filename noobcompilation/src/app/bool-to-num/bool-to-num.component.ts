import { Component } from '@angular/core';

let numerostring:string = "";




@Component({
  selector: 'app-bool-to-num',
  templateUrl: './bool-to-num.component.html',
  styleUrls: ['./bool-to-num.component.css']
})

export class BoolToNumComponent  {
convertido:boolean = false;
convert:number = 0
  

constructor(){}

validar(value:string){
  numerostring = value;
  for (let i= 0; i < numerostring.length ; i++){
    if (numerostring[i] !== "0" && numerostring[i] !== "1"){
      alert("error, introduce un numero binario");
      
    }
    
    else{
      this.convertir(numerostring)
      
    }
  }
}

convertir(numerostring:string){
  
  this.convertido = true;
  this.convert =  +Number.parseInt(numerostring,2);
  
  
  
  }


}
