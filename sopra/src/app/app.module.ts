import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modulo1Component } from './modulo1/modulo1.component';
import { Modulo2Component } from './modulo2/modulo2.component';
import { Modulo3Component } from './modulo3/modulo3.component';

import { VistaCompletaComponent } from './vista-completa/vista-completa.component';

@NgModule({
  declarations: [
    AppComponent,
    Modulo1Component,
    Modulo2Component,
    Modulo3Component,
    
    VistaCompletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
