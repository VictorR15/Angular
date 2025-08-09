import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    /**VA A RECIBIR UN VALOR DE NOMBRE "name" EL CUAL ES OBLIGATORIO Y TIENE QUE TENER UN MINIMO
     * DE 3 DE EXTENCION
     */
    name: ['', [(Validators.required, Validators.minLength(3))]],
    /**ES UN ARREGLO EL CUAL SE INICIA CON DOS VALORES Y SON REQUERIDOS, POSTERIORMETE SE HACE UNA
     * VALIDACION EL CUAL TIENE QUE SER DE 3 EL ARREGLO
     */
    favoriteGame: this.fb.array(
      [
        ['metal gear', Validators.required],
        ['death stranding', Validators.required],
      ],
      Validators.minLength(3)
    ),
  });

  /**PARA QUE SEA MAS FACIL PODER LEER EL ARREGLODE "favoriteGame" HACER UNA FUNCION get
   * EL CUAL ME VA A REGRESAR LA PROPIEDAD "favoriteGame" Y LE DECIMOS A LA FUNCION
   * QUE ES UN array CON EL "as"
   */
  get favoriteGames() {
    return this.myForm.get('favoriteGame') as FormArray;
  }

  /**AGREGAR NUEVO FAVORITO */

  /**HACEMOS UNA PROPIEDAD DE TIPO  "FormBuilder" EL CUAL ES REQUERIDO FORSOZAMENTE POR QUE ES LE NOMBRE
   * DEL INPUT
   */
  newFavorite = this.fb.control([], Validators.required);

  /**CREAMOS EL METODO PARA AGREGAR UN NUEVO FAVORITO */
  onAddToFavorite() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;
    this.favoriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFavorite.reset();
  }
  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
