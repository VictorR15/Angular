import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  //Evento
  /**
   * Espera que el evento "entrada" reciba un string, la logica del evento esta en el
   * html del componente (click, keyup, focus, etc)
   */
  entrada = output<string>();
  /**
   * La variable "placeholder espera recibir un string del exterior"
   */
  placeholder = input<string>('Buscar');
}
