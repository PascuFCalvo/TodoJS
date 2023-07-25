import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimermoduloComponent } from './primermodulo/primermodulo.component';



@NgModule({
  declarations: [
    PrimermoduloComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrimermoduloComponent
  ]
})
export class PrimermoduloModule { }
