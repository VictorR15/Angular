import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gifs-service';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

@Component({
  selector: 'app-gifs-history',
  imports: [GifsListComponent],
  templateUrl: './gifs-history.component.html',
})
export default class GifsHistoryComponent {
  gifService = inject(GifService);
  peticion = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['peticion']))
  );

  gifsLlave = computed(() => {
    return this.gifService.getHistorialGifs(this.peticion());
  });
}
