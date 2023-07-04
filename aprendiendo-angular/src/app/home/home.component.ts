//el OnInit se lo tengo que agregar yo siempre de manera manual

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//constructor y ngOnInit tb se lo tengo que agregar manual
export class HomeComponent implements OnInit{
  public identificado:boolean;

  constructor(){
    this.identificado =false;

  }
  
  ngOnInit(){}

  setIdentificado(){
    this.identificado = true;
  }
  unsetIdentificado(){
    this.identificado = false;
  }


}
