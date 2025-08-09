import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'DC';
      case 1:
        return 'Marvel';

      default:
        return 'Creador no encontrado';
    }
  }
}
