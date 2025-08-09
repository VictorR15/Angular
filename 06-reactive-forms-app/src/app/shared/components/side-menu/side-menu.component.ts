import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  /**HACEMOS UNA PROPIEDAD QUE TENGA EL NOMBRE DE "reactiveMenu" EN DONDE ESTE
   * VA A TENER UNA INTERFACE DE TIPO "MenuItem" EN DONDE ESTE VA A RECIBIR UN ARREGLO DE
   * RUTAS, EL CUAL YA TIENE LA PROPIEDAD "reactiveItems" Y NOSOTROS SOLAMENTE HACEMOS
   * UN FILTRO DE LOS PATHS QUE SI TENGAN UNA RUTA Y REGREAMOS UN ARREGLO NUEVO CON LAS
   * RUTAS
   */
  reactiveMenu: MenuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((item) => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`,
    }));
  authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];
  country: MenuItem[] = [
    {
      title: 'Paises',
      route: './country',
    },
  ];
}
