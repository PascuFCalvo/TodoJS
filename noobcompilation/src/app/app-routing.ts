import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoolToNumComponent } from './bool-to-num/bool-to-num.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';

const routes: Routes = [
  { path: "booltonum", component: BoolToNumComponent, 
    
  },
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
