import { Component, inject, input, output, signal } from '@angular/core';

import { FrasesService } from '../../services/frases.service';
import { RESTFrases } from '../../interface/res-frases.interface';

@Component({
  selector: 'app-carta-frase',

  templateUrl: './carta-frase.component.html',
})
export class CartaFraseComponent {
  frase = input.required<RESTFrases[]>();
  btn = inject(FrasesService);
}
