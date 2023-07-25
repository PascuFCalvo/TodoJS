import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaCompletaComponent } from './vista-completa/vista-completa.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductillosComponent } from './productillos/productillos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimermoduloModule } from './primermodulo/primermodulo.module';
import { SegundomoduloModule } from './segundomodulo/segundomodulo.module';
import { HomemoduloModule } from './homemodulo/homemodulo.module';
import { TercermoduloModule } from './tercermodulo/tercermodulo.module';




@NgModule({
  declarations: [
    AppComponent,
    ProductillosComponent,
    VistaCompletaComponent,
    NavbarComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    PrimermoduloModule,
    SegundomoduloModule,
    TercermoduloModule,
    HomemoduloModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
