import { Component } from '@angular/core';

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.css']
})
export class JSONToCSVComponent {
public csv:string = "";

//constructor(){}

convertir(valor:string){
  let json = "{"+valor+"}"
  let parsed = JSON.parse(json)
  

  console.log(json)
  console.log(parsed)
  this.csv = (`${parsed.name}, ${parsed.secretIdentity}, ${parsed.powers}`)
  console.log (this.csv)
  return this.csv

}

}
