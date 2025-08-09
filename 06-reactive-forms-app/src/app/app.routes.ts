import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    /**CUANDO ESTE EN EL PATH "reactive" VA A CARGAR TODAS LAS RUTAS HIJAS QUE ESTAN EN
     * LA RUTA QUE SE LE ESTA PASANDO
     */
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.routes').then((m) => m.reactiveRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.routes').then((m) => m.countryRoutes),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  },
];
