import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesModule } from '../clientes/clientes.module';
import { FacturaComponent } from './factura.component';



@NgModule({
  declarations: [
    FacturaComponent
  ],
  imports: [
    CommonModule,
    ClientesModule
  ]
})
export class FacturaModule { }
