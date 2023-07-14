import { Component, OnInit } from '@angular/core';
import { ClimaService } from './climaservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
})

export class ClimaComponent implements OnInit {

  clima:any;
  redondeado:number = 0;

  constructor(public climaService: ClimaService){}

  ngOnInit(): void {
    
  }

  obtenerclima(nombreciudad:string){
    this.climaService.getclima(nombreciudad)
    .subscribe(
      //si encuentra datos, devuelve los datos, si no devuelve error
      datos => {
        this.clima = datos,
        console.log(this.clima)},
      error => console.log(error))
      


  }

  truncarclima(temp:number){
    let redondeado = Math.trunc(temp)
    console.log(redondeado)
    return +redondeado;
  }

  guardarciudad(city:HTMLInputElement){
    this.obtenerclima(city.value);
    city.value = "";
    city.focus();
    return false

  }


  


}


