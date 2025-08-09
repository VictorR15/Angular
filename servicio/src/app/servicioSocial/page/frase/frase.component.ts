import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CartaFraseComponent } from '../../components/carta-frase/carta-frase.component';
import { FrasesService } from '../../services/frases.service';

@Component({
  selector: 'app-frase',
  imports: [CartaFraseComponent],
  templateUrl: './frase.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FraseComponent {
  fraseService = inject(FrasesService);

  fraseResource = rxResource({
    stream: () => this.fraseService.buscarFrase(),
  });
}
