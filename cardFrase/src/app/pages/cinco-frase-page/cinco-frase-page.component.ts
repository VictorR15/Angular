import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RandomFraseService } from '../../service/randomFrase.service';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinco-frase-page',
  imports: [NavbarComponent, CardComponent, RouterLink],
  templateUrl: './cinco-frase-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CincoFrasePageComponent {
  fraseService = inject(RandomFraseService);

  fraseResource5 = rxResource({
    stream: () => this.fraseService.buscarFrase5(),
  });

  nuevaFrase5() {
    this.fraseResource5.reload();
  }
}
