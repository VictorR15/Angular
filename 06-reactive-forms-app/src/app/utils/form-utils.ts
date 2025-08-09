import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}

export class FormUtils {
  // Expresiones regulares
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
  /** PARA OBTENER EL TEXTO DEL ERROR BARREMOS EL ARREGLO DE LAS LLAVES DE LOS ERRORES
   * Y CON UN switch HACEMOS QUE POR CADA LLAVE DEL ERROR NOSOTROS PONGAMOS EL MENSAJE
   * QUE REQUERIMOS
   */
  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          /**PARA MOSTRAR ESTE ERROR HACEMOS USO DE "errors" que es de tipo "ValidationErrors"
           * EL CUAL TIENE LA ENTIDAD COMPUTADA DE LA LLAVE Y MOSTRAMOS EL VALIDADOR QUE REQUERIMOS
           */
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
        case 'email':
          return 'Email incorrecto';
        case 'emailTaken':
          return 'Email ya registrado';
        case 'notStrider':
          return 'User ya registrado';
        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El correo no es valido';
          }
          return 'Error de patron contra expresion regular';
      }
    }

    return null;
  }

  static isValidField(form: FormGroup, fieldName: string) {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      /**CON EL ARRAY QUE RECIBIMOS CHECAMOS LOS ERRORES DE CADA POSICION Y TAMBIEN CHECAMOS QUE EL INPUT
       * A SIDO TOCADO
       */
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  /**PARA TENER EL ERROR DEL ARREGLO VAMOS A RECIBIMOS DOS ARGUMENTOS EL CUAL SERIA EL FORMULARIO DE TIPO
   * ARRAY Y EL INDEX QUE ES LA POSICION DEL ERROR EN TODO EL FORMULARIO.
   * CON EL FORMUALRIO PRIMERO VEMOS SI CONTIENE ALGO DE LO CONTRARIO REGRESAMOS NULL
   * DESPUES CON LA VARIABLE "errors" HACEMOS QUE POR CADA POSICION ME DE EL ERROR QUE TIENE ESTE PERO
   * SI ESTE NO CONTIENE NINGUN ERROR VAMOS A REGRESAR UN OBJETO VACIO.
   * AHORA LO QUE VA A REGREASAR EL METODO ES EL ERROR QUE NOSOTROS PUSIMOS EN "getTextError" EL CUAL
   * YA NOS REGRESA EL ERROR PERSONALIZADO.
   */
  static getTextErrorArray(formArray: FormArray, index: number) {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};
    return FormUtils.getTextError(errors);
  }
  static isFielOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      return field1Value === field2Value ? null : { passwordNotEqual: true };
    };
  }

  static async checkingServerResponse(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    console.log('Validando');
    await sleep(); //Espera la respuesta y sigue con la funcion

    const formValue = control.value;
    if (formValue === 'hola@mundo.com') {
      return {
        emailTaken: true,
      };
    }

    return null;
  }

  static notStrider(control: AbstractControl): ValidationErrors | null {
    const formValue = control.value;
    if (formValue === 'strider') {
      return {
        notStrider: true,
      };
    }

    return null;
  }
}

// FormUtils.isValidField()
