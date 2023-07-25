import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemoduloComponent } from './homemodulo/homemodulo.component';
import { SegundomoduloModule } from '../segundomodulo/segundomodulo.module';
import { PrimermoduloModule } from '../primermodulo/primermodulo.module';
import { TercermoduloModule } from '../tercermodulo/tercermodulo.module';


@NgModule({
  declarations: [
    HomemoduloComponent
  ],
  imports: [
    CommonModule,
    TercermoduloModule,
    SegundomoduloModule,
    PrimermoduloModule
  ],
  exports:[
    HomemoduloComponent
  ]
})
export class HomemoduloModule { }
