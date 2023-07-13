import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { BoolToNumComponent } from '../bool-to-num/bool-to-num.component';
import { BorderRadiusComponent } from '../border-radius/border-radius.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';



const routes: Routes = [
  {path: "home", component: AppComponent},
  {path: "booltonum", component: BoolToNumComponent},
  {path: "borderradius", component: BorderRadiusComponent},
  {path: "calculator", component: CalculatorComponent},
  {path: "darkmode", component: DarkModeComponent},
  {path: "**", component: AppComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
