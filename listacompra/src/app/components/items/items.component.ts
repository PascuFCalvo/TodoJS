import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//...>para poder importarlo y usarlo aqui
import { Item } from '../models/item';
import { ItemService } from 'src/app/services/item.service';
import { subscribeOn } from 'rxjs';




@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  //definir las variables del componente item
  //le decimos que items son variables del tipo objeto Item[],
  //hay que inicializarlo por culpa de TS, aunque sea a un array vacio
  items: Item[] = [];
  total:number = 0;

  //vamos a injectar la variable para poder usar el servicio de datos
  constructor(private itemService:ItemService ) {}

  ngOnInit(): void {
    //cuando se ejecute va a definir los siguientes datos/items
    //this.items = [];

    //lo hemos separado a un servicio para poder acceder de manera externa
    
    this.items = this.itemService.getItems();
    
   

    //total no se actualiza de forma dinamica, asi que hay que llamarlo manualmente cuando se generan los items
    this.getTotal();
  }
  //creamos deleteItem
  deleteItem(item:Item){
    //esta funcion va a devolver todos los elementos que us id sea difernte al id 
    //del item que le has pasado por parametro
    this.items = this.items.filter( index => index.id != item.id);
    this.getTotal();
    //basicamente, cuando haces click en un elemento de la lista, coge ese id, y entonces
    //hace un array con todos los item.id, menos el que has hecho click
    //y llama a getTotal para realcular el precio
    
  }

  //cada vez que se activa el check de la caja recalcula el total
  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    //coge todos los items que no estan completados (los que indice.completed = false)
    //luego recorre todos esos elementos y va multiplando la cantidad por el precio 
    this.total = this.items
                  .filter( indice => !indice.completed)  
                  .map( indice => indice.quantity * indice.price)
                  .reduce( (acc, item) =>acc += item, 0);
  }

  loadData(){
   
    this.items = this.itemService.getItems();
    console.log(this.items)
  }

  
  loadlocal() {
    console.log("click")
    this.items = this.itemService.loadlocal();
    console.log (this.items)
    
    }
  
    saveonlocal() {
      console.log("click")
      this.itemService.saveonlocal();
    }
}
