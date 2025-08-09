import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  autor = input.required();
  frase = input.required();
}
