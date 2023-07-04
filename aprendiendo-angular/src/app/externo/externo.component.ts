import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { AnimateTimings } from '@angular/animations';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService],
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userId:any;

  constructor(private _peticionesService: PeticionesService){
    this.userId;
  }
  
  ngOnInit(): void {
    this.cargaUsuario();
    //con subscribe recoges el resultado que te devuelve el observable
    }
  cargaUsuario(){this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        console.log(result)
        this.user = result.data;
      },
      error =>{
        console.log(<any>error)
      }
    )

  }   

}
