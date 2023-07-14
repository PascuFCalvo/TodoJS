import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {

  public modoOscuro = false;

toggleDark(){

  if(this.modoOscuro == false){
    this.modoOscuro = true
  }else{this.modoOscuro = false}

}
}
