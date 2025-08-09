import { Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-gifts-side-manu-header',
  imports: [],
  templateUrl: './gifts-side-manu-header.component.html',
})
export class GiftsSideManuHeaderComponent {
  envs = environment;
}
