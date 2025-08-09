import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

import { Country } from '../../interface/country.interface';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-capiltal-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capiltal-page.component.html',
})
export class ByCapiltalPageComponent {
  capitalService = inject(CountryService);

  query = signal('');

  capitalRecurso = rxResource({
    /** El "params" es el parametro que vamos a necesitar para hcer la peticion al servicio
     *  que es la capital a buscar y en el "stream" vamos a esperar que el "params" nos mande
     *  el query y posteriormente hacemos la peticion al servicio */
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.capitalService.buscarPorCapital(params.query);
    },
  });

  // capitalRecurso = resource({
  //   /** El "request" es el parametro que vamos a necesitar para hcer la peticion al servicio
  //    *  que es la capital a buscar y en el "loader" vamos a esperar que el "request" nos mande
  //    *  el query y posteriormente hacemos la peticion al servicio */
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];
  //     return await firstValueFrom(
  //       this.capitalService.buscarPorCapital(request.query)
  //     );
  //   },
  // });

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(entrada: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   /**Se usa el servicio de "capitalService" en donde adentro tiene un metodo llamada
  //    * "buscarPorCapital" en donde hacermos la peticion con el url que se necesita para
  //    * obtener la informacion en el cual ademas necesitamos el metodo "subscribe" para
  //    * esperar una respuesta de la peticion
  //    */
  //   this.capitalService.buscarPorCapital(entrada).subscribe({
  //     next: (capitales) => {
  //       this.isLoading.set(false);
  //       this.countries.set(capitales);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err);
  //     },
  //   });
  // }
}
