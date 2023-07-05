import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
//al hacer el @Input y terminar la sintaxis, te lo importa aqui auto
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //configurar una entrada para decirle a este componente que va a recibir un objeto
  //le decimos que la propiedad item va a ser de tipo Item
  //y lo inicializamos para que no de error
  @Input() item: Item = new Item();
  //crear un evento personalizado
  //este evento se va a activar y va a tener en su definicion un objeto de tipo item
  //con esto dices que deleteItem es un evento
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  constructor(){}

  ngOnInit(): void {
    
  }
  //aqui cremos la funcion que le pasamos al boton con el evento click

  onDelete(item:Item){
    //que empiece a emitir ese evento sobre item
    this.deleteItem.emit(item);

  }
  onToggle(item:Item){
    //en vez de hacer un if item.completed =  true, blablabla false y el else...
    item.completed  = !item.completed;
    //directamente le decimos que el valor completed es lo contrario de lo que tenia
    this.toggleItem.emit(item);
  }

}
