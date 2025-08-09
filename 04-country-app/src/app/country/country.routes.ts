import { Routes } from '@angular/router';
import { ByCapiltalPageComponent } from './pages/by-capiltal-page/by-capiltal-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapiltalPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },
      {
        /**
         * Esta ruta es dinamica por eso se usa los dos puntos ":" ya que se espera
         * que depues del "by/" llegue una ruta que no se conoce y esta la va a redireccionar
         * al componente que pusimos
         */
        path: 'by/:codigoPais',
        component: CountryPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  // {
  //   path: 'country',
  // },
];

export default countryRoutes;
