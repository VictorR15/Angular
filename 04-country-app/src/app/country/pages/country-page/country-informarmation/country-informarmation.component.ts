import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../../interface/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-informarmation-page',
  imports: [DecimalPipe],
  templateUrl: './country-informarmation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformarmationComponent {
  pais = input<Country>();
}
