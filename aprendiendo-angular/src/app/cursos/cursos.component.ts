import { Component, OnInit } from '@angular/core';

//recoger parametros de la url

import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  //una vez capturado por ejemplo podriamos crear una propiedad...
  public nombre:string;
  public edad:number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.subscribe((params: Params)=>{
      //...y asignarle ese valor que hemos capturado
      this.nombre = params.nombre;
      //tu le dices que es de tipo number, pero el lo recoge como un string
      //digamos que es porque llega "tarde" a la comprobacion porque viene asincrono
      this.edad = params.edad;
      //tb podria ser como un array asociativo
      // this.nombre = params['nombre];
      console.log(params.nombre)
      console.log(typeof params.nombre)

      console.log(params.edad)
      console.log(typeof params.edad)
      //con un ma delante lo fuerzas a que sea number
      console.log(typeof +params.nombre)

      if(this.nombre == 'Pascual'){
        this._router.navigate(['/home']);
        console.log("redirigido al home");
      }

      
    });
  }

  //metodo que te lleva a cualquier link del proyecto
  redirigir(){
    this._router.navigate(['/zapatillas'])
  }

}
