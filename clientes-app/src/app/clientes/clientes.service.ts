//crear un servicio (service de Angular)
//donde concentremos las tareas de trabajo con los datos de los clientes

//En el servicio tengo que hacer el import del modelo de datos,
//interfaces de Cliente y Grupo (creadas en el paso anterior).

import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';


@Injectable()

export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      { id: 0, nombre: 'Sin definir' },
      { id: 1, nombre: 'Activos' },
      { id: 2, nombre: 'Inactivos' },
      { id: 3, nombre: 'Deudores' },
    ];
    this.clientes = [];
  }

  getGrupos(){
    return this.grupos;
  }
  getClientes(){
    return this.clientes;
  }
  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }
  nuevoCliente(): Cliente {
    return{
      id:this.clientes.length,
      nombre:"",
      cif:"",
      direccion:"",
      grupo: 0
    }
  }
}
