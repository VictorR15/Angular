import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { GifService } from 'src/app/gifs/services/gifs-service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-gifts-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifts-side-menu-options.component.html',
})
export class GiftsSideMenuOptionsComponent {
  gifService = inject(GifService);
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscador gifs',
      route: '/dashboard/search',
    },
  ];
}
