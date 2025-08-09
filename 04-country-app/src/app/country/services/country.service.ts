import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interface/res-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interface/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  /** Es de tipo "Observable" por que es una tipo promesa que espera regresar un
   * arreglo de "Country[]" */
  buscarPorCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    /**Esta funcion recibe un "query" que es la capital que se desea
     * buscar y vamos a hacer una peticion en el cual vamos a usar
     * el url de base mas la capital ya que se esta buscando por capital,
     * por ultimo mandamos el "query" que deseaamos buscar
     */
    return (
      /**
       * Imagina que haces un pedido por internet:
          http.get(...): pides una caja (con productos).
          pipe(...): colocas una estación de procesamiento
          map(...): alguien abre la caja, reacomoda los productos y los deja listos para que los uses.
       */
      this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
        map((respuestaCapitales) =>
          CountryMapper.mapRespuestaCapitales(respuestaCapitales)
        ),

        catchError((error) => {
          console.log('Error fetching', error);
          return throwError(
            () => new Error('No se pudo obtener capital con ese query')
          );
        })
      )
    );
  }

  buscarPorPais(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((respuestaPais) =>
        CountryMapper.mapRespuestaCapitales(respuestaPais)
      ),
      delay(2000),
      catchError((error) => {
        console.log('Error fetchingh', error);
        return throwError(() => new Error(`No se encontro ${error}`));
      })
    );
  }

  buscarPaisPorAlphaCode(codigo: string) {
    const url = `${API_URL}/alpha/${codigo}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((respuestaPais) =>
        CountryMapper.mapRespuestaCapitales(respuestaPais)
      ),
      delay(1000),
      map((paises) => paises.at(0)),
      catchError((error) => {
        console.log('Error fetchingh', error);
        return throwError(() => new Error(`No se encontro ${codigo}`));
      })
    );
  }
}
