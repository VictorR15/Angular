import { HttpClient } from '@angular/common/http';
import {
  APP_ID,
  computed,
  effect,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const cargarDeLocalStorage = () => {
  const gifsDeLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsDeLocalStorage);
  return gifs;
};

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  constructor() {
    this.loadTrendingGifs();
  }

  guardarGifsToLocalStorage = effect(() => {
    const historialString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historialString);
  });

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoding = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(cargarDeLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoding.set(false);
      });
  }

  serachGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLocaleLowerCase()]: items,
          }));
        })
      );
    // .subscribe((resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    //   console.log({ search: gifs });
    // });
  }

  getHistorialGifs(peticion: string): Gif[] {
    return this.searchHistory()[peticion] ?? [];
  }
}
