import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  title:string = "";
  price:number = 0;
  quantity: number = 0;
  id: number  = 0;
  //le injectas las variables item service y router
  constructor(private itemService: ItemService, private router: Router){}

  ngOnInit(): void {
    
  }
  onSubmit(){
    //cuando enviamos el formulario creamos un nuevo objeto
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item);
    this.router.navigate(["/"])
  }

}
