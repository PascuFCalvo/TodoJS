import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  flipficha(ficha:any){
    ficha.classList.toggle("ficha-flip");
    
  }
}
