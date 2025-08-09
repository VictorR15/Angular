import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'HeroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Rojo';
      case 1:
        return 'Negro';
      case 2:
        return 'Azul';
      case 3:
        return 'Verde';
      default:
        return 'Color no encontrado';
    }
  }
}
