import { Component } from '@angular/core';

@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.css'],
})
export class BorderRadiusComponent {
  NumberTopLeft: number = 0;
  inputlleno: boolean = false;
  topLeft: string = '';

  saveInput() {
    this.topLeft = this.NumberTopLeft + 'px';
  }
}
