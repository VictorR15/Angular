import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTFrases } from '../interface/res-frases.interface';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrasesService {
  URL_API = 'https://api.breakingbadquotes.xyz/v1/quotes/5';
  private html = inject(HttpClient);

  buscarFrase(): Observable<RESTFrases[]> {
    return this.html.get<RESTFrases[]>(this.URL_API).pipe(
      catchError(() => {
        return throwError(() => new Error('No se pudo obtener la frase'));
      })
    );
  }

  // constructor(private http: HttpClient) {}

  // obtenerFrase() {
  //   return this.html.get(this.URL_API);
  // }
}
