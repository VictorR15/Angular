import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
@Component({
  selector: 'app-base-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './base-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasePageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  /**HACEMOS UNA VALIDACION EN EL CUAL SI EL FORMULARIO ESTA COMO "invalid" MARCAMOS TODOS LOS
   * INPUTS COMO TOCADOS Y ESTO HACE QUE EL FORMULARIO MUESTRE LOS ERRORES
   */
  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    /**RESETEAMOS EL FORMULARIO SOLO SI EL FORMULARIO ESTA CORRECTO */
    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
