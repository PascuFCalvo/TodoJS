//servicio para poder acceder a informacion de forma general sin importar
//si esta en un componente o en otro
import { Injectable } from '@angular/core';
import { Item } from '../components/models/item';
import { ItemsComponent } from '../components/items/items.component';



@Injectable({
  providedIn: 'root',
})
export class ItemService {
  ids: number[] = [];

  items: Item[] = [
    //{ id: 0, title: 'manzana', price: 1, quantity: 10, completed: false },
    //{ id: 1, title: 'pan', price: 2, quantity: 5, completed: true },
    //{ id: 2, title: 'cerveza', price: 1.5, quantity: 20, completed: false }
  ];
  constructor() {}

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    //con unshift agregamos el elemento al principio del array de elementos
    this.items.unshift(item);
  }

  availableId(id: number): boolean {
    let found = this.items.find((item) => {
      return item.id === id;
    });
    //la !! convierte un undefined en false (casteo)
    return !!found;
  }

  creararrayids(id: number) {
    this.ids.push(+id);
    this.ids.sort(function (a, b) {
      return a - b;
    });

    console.log(this.ids);
  }

  firstidavaliable() {
    
  for (let i = 0; i < this.ids.length; i++){
    if (this.ids[i] !== i+1){
      alert("Error! la primera id disponible es: " + (i+1))
      break;
    }
  } 
    
  }
  loadlocal() {
    console.log("click")
    return  JSON.parse(localStorage.getItem('item')!); 
    console.log (this.items)
    
    }
  
    saveonlocal() {
      console.log("click")
      localStorage.setItem('item',JSON.stringify(this.items));
    }
  

}


