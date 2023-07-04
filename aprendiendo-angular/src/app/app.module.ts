import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

import { FormsModule}    from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
//para poder navegar por paginas
import { routing } from './app.routing';
import { appRoutingProviders } from './app.routing';
import { ExternoComponent } from './externo/externo.component';
//para poder crear peticiones http
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ni idea de porque se queda blanco
    routing,
    HttpClientModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
