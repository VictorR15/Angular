import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const authRoutes: Routes = [
  {
    /** AL MOMENTO DE INGRESAR BUSCAL EL PATH VACIO Y ENTRA AL HIJO EN EL CUAL
     * NO SE ENCUTRA NINGUN PATH VACIO PERO AL HACER EL USO DE EL COMODIN SE
     * REDICRECCIONA A "sing-up"
     */
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      },
    ],
  },
];

export default authRoutes;
