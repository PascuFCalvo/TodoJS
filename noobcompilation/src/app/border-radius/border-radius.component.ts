import { Component, } from '@angular/core';


@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.css']
}) 

export class BorderRadiusComponent {
  
  TopLeft:string= "";
  NumberTopLeft:number = 0

  saveInput(value:any){

  this.TopLeft = value;
  this.NumberTopLeft = +this.TopLeft

  console.log(this.NumberTopLeft)
  
  
  }

  
  
  

 

}
