//aqui es donde se manejan las integraciones de servicios, modulos, componentes etc...

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importa automaticamente el componente header creado por la consola
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { AddItemComponent } from './components/add-item/add-item.component';

//importa auto el formsmodule
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    //ha insertado automaticamente el componente header que hemos creado
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    AddItemComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //hay que decirle que vmamos a trabajar con formularios
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
