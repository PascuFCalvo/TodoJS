import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2').pipe(
      map((datos: any) => {
        const users = datos.data;
        const usuariomodificado = users.map((user: any) => {
          user.opinion = this.generarOpinion();
          return user;
        });
        datos.data = usuariomodificado;
        return datos;
      })
    );
  }
  getRandomUser(): Observable<any> {
    return this.http.get('https://reqres.in/api/users').pipe(
      map((response: any) => {
        const users = response.data;
        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
      })
    );
  }
  
  generarOpinion(): string {
    // Generar el texto de Lorem Ipsum de forma aleatoria
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ipsum non vestibulum ullamcorper. Morbi ullamcorper massa a lacus volutpat fermentum. Integer lacinia massa ac luctus lacinia. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed condimentum ligula id fermentum ultrices. Quisque in mauris id ligula maximus lacinia. Donec eu luctus odio, sit amet pharetra erat. Mauris vel fringilla risus. Nullam eget ipsum purus. Donec dignissim feugiat mi, eget tincidunt nibh lacinia et. Nulla facilisi. Donec elementum felis in mauris faucibus iaculis.';

    // Dividir el texto en palabras
    const words = loremIpsum.split(' ');

    // Seleccionar aleatoriamente 50 palabras
    const textoOpinion = [];
    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      textoOpinion.push(words[randomIndex]);
    }

    // Unir las palabras seleccionadas en una cadena de texto
    return textoOpinion.join(' ');
  }
}
