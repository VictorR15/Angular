import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RESTFrase } from '../interface/res-randomFrase.interface';

@Injectable({
  providedIn: 'root',
})
export class RandomFraseService {
  private URL_API = 'https://api.breakingbadquotes.xyz/v1/quotes';

  html = inject(HttpClient);

  buscarFrase(): Observable<RESTFrase[]> {
    return this.html.get<RESTFrase[]>(this.URL_API).pipe(
      catchError(() => {
        return throwError(() => new Error('No se pudo obtener la frase'));
      })
    );
  }
  buscarFrase5(): Observable<RESTFrase[]> {
    return this.html.get<RESTFrase[]>(`${this.URL_API}/5`).pipe(
      catchError(() => {
        return throwError(() => new Error('No se pudo obtener la frase'));
      })
    );
  }
}
