import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftsSideManuHeaderComponent } from '../../components/gifs-side-menu/gifts-side-menu-header/gifts-side-manu-header.component';
import { GiftsSideMenuOptionsComponent } from '../../components/gifs-side-menu/gifts-side-menu-options/gifts-side-menu-options.component';
import { GifsSideMenuComponent } from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}
