import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  apikey: string = '96aec4af055b90655ca39d88b69640f9';
  urlclima: string = '';

  constructor(public httpClient: HttpClient) {
    //https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=96aec4af055b90655ca39d88b69640f9
    //de la url ejemplo, se traslada la consulta al final
    this.urlclima = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apikey}&q=`;
  }

  getclima(nombreciudad: string): Observable<any> {
    return this.httpClient.get(`${this.urlclima}${nombreciudad}&units=metric`);
  }
}
