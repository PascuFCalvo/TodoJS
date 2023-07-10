import { Component, OnInit } from '@angular/core';
import { ApicallService } from './apicall.service';


@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css'],
})
export class ApicallComponent implements OnInit {
  fakerandom: boolean = true;
  users: any[];
  usuariorandom: any;
  randomUser: any;
  showUsers: boolean = false; // Variable para controlar la visibilidad de los usuarios

  constructor(private apiService: ApicallService) {}

  botonShowUsers() {
    this.apiService.getUsers().subscribe((listausuarios) => {
      this.users = listausuarios.data;
      this.showUsers = true; // Mostrar los usuarios cuando se obtiene la respuesta
      console.log(this.users);
    });
  }

  botonShowRandomUser() {
    if (this.users && this.users.length > 0) {
      let indicealeatorio = Math.floor(Math.random() * this.users.length);
      this.randomUser = this.users[indicealeatorio];
      this.fakerandom = false;
      
    }
  }

  botonCloseUsers() {
    this.showUsers = false; // Ocultar los usuarios al hacer clic en el botón "Cerrar usuarios"
   // this.randomUser = null;
  }

  //al inicio carga los usuarios pero no los muestra para poder enseñar un usuario aleatorio desde el inicio
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((listausuarios) => {
      this.users = listausuarios.data;
      this.showUsers = false; // Mostrar los usuarios cuando se obtiene la respuesta
      console.log(this.users[2])
    });

  
}
}