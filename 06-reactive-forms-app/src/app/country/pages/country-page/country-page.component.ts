import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country.interface';
import { filter, retry, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {
  fb = inject(FormBuilder);
  contryService = inject(CountryService);

  regions = signal(this.contryService.regions);
  /**HACEMOS EL ESPACIO DE MEMORIA EN DONDE SE VAN A GUARDAR LOS PAISES QUE SE
   * VAN A RECIBIR
   */
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  /**METODO PARA VER SI EL FORMULARIO TIENE CAMBIOS */
  onFormCambios = effect((onCleanup) => {
    /**ESPERAMOS A VER SI LA REGION TIENE ALGUN CAMBIO Y DEJAMOS DE VER SI ESTE TIENE ALGUN CAMIBIO
     * EN EL MOMEENTO QUE ESTE SE SALGA DE AL PAGINA
     */
    const regionSubscription = this.onRegionCambios();
    const countrySubscription = this.onCountryCambios();
    onCleanup(() => {
      regionSubscription?.unsubscribe();
      countrySubscription?.unsubscribe();
    });
  });

  onRegionCambios() {
    return this.myForm
      .get('region')!
      .valueChanges.pipe(
        /**LOS CAMPOS DEL FORMULARIO LOS ESTABLECEMOS COMO VACIOS AL MOMENTO DE HACER ALGUN CAMBIO */
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => {
          /**LA RESPUESTA DE LAS PETICIONES LAS LIMPIAMOS PARA HACER UNA NUEVA PETIICION */
          this.borders.set([]);
          this.countriesByRegion.set([]);
        }),
        switchMap((region) =>
          this.contryService.getCountriesByRegion(region ?? '')
        )
      )
      .subscribe((countries) => {
        this.countriesByRegion.set(countries);
      });
  }
  onCountryCambios() {
    return this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value) => value!.length > 0),
        switchMap((alphaCode) => {
          return this.contryService.getCountryByAlphaCode(alphaCode ?? '');
        }),
        switchMap((country) =>
          this.contryService.getCountryBoderByCodes(country.borders)
        )
      )
      .subscribe((borders) => {
        this.borders.set(borders);
      });
  }
}
