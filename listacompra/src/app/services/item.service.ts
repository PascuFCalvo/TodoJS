//servicio para poder acceder a informacion de forma general sin importar
//si esta en un componente o en otro
import { Injectable } from '@angular/core';
import { Item } from '../components/models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {



  items:Item[] = [
      { id: 0, title: 'manzana', price: 1, quantity: 10, completed: false },
      { id: 1, title: 'pan', price: 2, quantity: 5, completed: true },
      { id: 2, title: 'cerveza', price: 1.5, quantity: 20, completed: false }
    
    ];
  constructor() { }

  
  getItems(){
    return this.items;
  }

  addItem(item:Item){
    //con unshift agregamos el elemento al principio del array de elementos
    this.items.unshift(item)
  }
}
