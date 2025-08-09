import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environments';
import { DecimalPipe, JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    div{
      width: 100vw;
      height: calc(100vh - 64px)
    }
    #controls{
       background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgb(0,0,0,0.1);
      border:1px solid #e2e8f0;
      width:250px;
    }
  `,
})
export class FullscreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  zoom = signal(14);
  cordenadas = signal({
    lng: -74.5,
    lat: 40,
  });

  zoomEfecto = effect(() => {
    if (!this.map()) return;
    this.map()?.setZoom(this.zoom());
    // this.map()?.zoomTo(this.zoom());
  });

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    const element = this.divElement()!.nativeElement;
    const { lat, lng } = this.cordenadas();

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });
    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });
    map.on('moveend', () => {
      const center = map.getCenter();
      this.cordenadas.set(center);
    });
    this.map.set(map);
  }
}
