import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoolToNumComponent } from './bool-to-num/bool-to-num.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { JSONToCSVComponent } from './json-to-csv/json-to-csv.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClimaComponent } from './clima/clima.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AsincroniaComponent } from './asincronia/asincronia.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ModulosComponent } from './modulos/modulos.component';

const routes: Routes = [
  {
    path: 'booltonum',
    component: BoolToNumComponent,
  },
  {
    path: 'borderradius',
    component: BorderRadiusComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'jsontocsv',
    component: JSONToCSVComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'darkmode',
    component: DarkModeComponent,
  },
  {
    path: 'clima',
    component: ClimaComponent,
  },
  {
    path: 'asincronia',
    component: AsincroniaComponent,
  },
  {
    path: 'promesas',
    component: PromesasComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BoolToNumComponent,
    NavbarComponent,
    BorderRadiusComponent,
    HeaderComponent,
    HomeComponent,
    
    JSONToCSVComponent,
    CalculatorComponent,
    DarkModeComponent,
    ClimaComponent,
    AsincroniaComponent,
    PromesasComponent,
    ModulosComponent
    
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
