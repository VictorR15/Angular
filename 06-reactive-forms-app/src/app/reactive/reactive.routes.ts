import { Routes } from '@angular/router';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';

export const reactiveRoutes: Routes = [
  {
    /** AL MOMENTO DE INGRESAR BUSCAL EL PATH VACIO Y ENTRA AL HIJO EN EL CUAL
     * NO SE ENCUTRA NINGUN PATH VACIO PERO AL HACER EL USO DE EL COMODIN SE
     * REDICRECCIONA A "basic"
     */
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Basicos',
        component: BasePageComponent,
      },
      {
        path: 'dynamic',
        title: 'Dinamicos',
        component: DynamicPageComponent,
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
