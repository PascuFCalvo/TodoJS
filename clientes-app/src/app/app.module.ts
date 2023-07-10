import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientesModule } from './clientes/clientes.module';
import { ApicallService } from './apicall/apicall.service';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  
  declarations: [
    AppComponent,
    ApicallComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    HttpClientModule
    
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
