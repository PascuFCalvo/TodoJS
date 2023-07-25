import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductillosComponent } from './productillos/productillos.component';
import { HomemoduloComponent } from './homemodulo/homemodulo/homemodulo.component';
import { PrimermoduloComponent } from './primermodulo/primermodulo/primermodulo.component';
import { SegundomoduloComponent } from './segundomodulo/segundomodulo/segundomodulo.component';
import { TercermoduloComponent } from './tercermodulo/tercermodulo/tercermodulo.component';



const rutas: Routes = [
  {
    path: 'modulo1',
    component: PrimermoduloComponent
  },
  {
    path: 'plans',
    component: SegundomoduloComponent
  },
  {
    path:'register',
    component: TercermoduloComponent
    
  },
  {
    path:'home',
    component: HomemoduloComponent
    
  }
  ,
  {
    path:'products',
    component: ProductillosComponent
    
  }
  ,
  {
    path:'',
    component: HomemoduloComponent
    
  }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



