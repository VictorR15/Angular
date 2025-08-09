import { Component } from '@angular/core';
import { GiftsSideManuHeaderComponent } from './gifts-side-menu-header/gifts-side-manu-header.component';
import { GiftsSideMenuOptionsComponent } from './gifts-side-menu-options/gifts-side-menu-options.component';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GiftsSideManuHeaderComponent, GiftsSideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenuComponent {}
