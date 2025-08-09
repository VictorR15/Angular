import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { RandomFraseService } from '../../service/randomFrase.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-una-frase-page',
  imports: [NavbarComponent, CardComponent, RouterLink],
  templateUrl: './una-frase-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnaFrasePageComponent {
  fraseService = inject(RandomFraseService);

  fraseResource = rxResource({
    stream: () => this.fraseService.buscarFrase(),
  });
  fraseResource5 = rxResource({
    stream: () => this.fraseService.buscarFrase5(),
  });

  nuevaFrase() {
    this.fraseResource.reload();
  }
  nuevaFrase5() {
    this.fraseResource5.reload();
  }
}
