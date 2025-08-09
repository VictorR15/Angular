import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformarmationComponent } from './country-informarmation/country-informarmation.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformarmationComponent],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {
  /** Manda el parametro del url que esta en este momento */
  codigoPais = inject(ActivatedRoute).snapshot.params['codigoPais'];
  paisServicio = inject(CountryService);

  paisRecurso = rxResource({
    params: () => ({ codigoPais: this.codigoPais }),
    stream: ({ params }) => {
      return this.paisServicio.buscarPaisPorAlphaCode(params.codigoPais);
    },
  });
}
