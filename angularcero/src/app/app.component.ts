import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todoArray: string[] = [];
  todo: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    console.log("add", this.todo)
    if(this.todo !==""){
      this.todoArray.push(this.todo);
      console.log(this.todo);
      console.log(this.todoArray);
      this.todo = "";
      
    }
    
  }

  deleteItem(elemento: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (elemento == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

}
