//importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar los componentes

import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { ExternoComponent } from "./externo/externo.component";

//configuracion de las rutas (array de rutas)

const appRoutes: Routes = [
    {path: 'externo', component: ExternoComponent},
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'zapatillas', component: ZapatillasComponent},
    {path:'videojuegos', component: VideojuegoComponent},
    {path:'cursos', component: CursosComponent},
     //pasar parametros por url
    //{path:'cursos/:nombre', component: CursosComponent},
    {path:'cursos/:nombre/:edad', component: CursosComponent},
    //si quisieramos que el paremtro apellido fuera opcional
    //{path:'cursos/:nombre/:apellidos', component: CursosComponent},
    //ruta 404, para cuando no encuentra ningun component
    {path:'**', component:HomeComponent}

];

//exportar el modulo del routing


//esto lo he tenido que buscar por ahi porque si no modulewithproviders me daba un error
declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        
    }
}

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

    


