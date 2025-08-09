import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'ToggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean): string {
    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
