import { Injectable } from "@angular/core";
//estos dos modulos permiten hacer peticiones ajax a una url externa
import { HttpClient, HttpHeaders } from "@angular/common/http";
//el observable para ir recogiendo los datos que va devolviendo la appi res
import { Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";


@Injectable()
export class PeticionesService{
    public url:string;
    constructor (public _http: HttpClient)
    {
        this.url = "https://reqres.in/";
    }

    getUser(userId:any):Observable<any>{
        return this._http.get(this.url+'api/users/'+userId);
    }
    
}