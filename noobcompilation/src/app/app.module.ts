import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoolToNumComponent } from './bool-to-num/bool-to-num.component';
import { routing } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { JSONToCSVComponent } from './json-to-csv/json-to-csv.component';
import { CalculatorComponent } from './calculator/calculator.component';

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
    FooterComponent,
   
    JSONToCSVComponent,
        CalculatorComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
