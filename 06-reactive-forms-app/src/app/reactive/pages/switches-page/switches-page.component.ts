import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesPageComponent {
  /** HACEMOS LA INYECION DE "FormBuilder" EL CUAL NOS VA A AYUDAR A CREAR LAS PROPIEDADES DE NUESTRO
   * FORMULARIO
   */
  private fb = inject(FormBuilder);

  /**HACEMOS USO DE LAS UTILIDADES DEL ARCHIVO "FormUtils" */
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    /**PONEMOS LOS CAMPOS QUE VAMOS A USAR EN EL INPUT */
    gender: ['M', Validators.required],
    notifications: [true],
    termAndConditions: [false, Validators.requiredTrue],
  });
  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }
}
