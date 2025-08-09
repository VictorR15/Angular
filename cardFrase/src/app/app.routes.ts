import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UnaFrasePageComponent } from './pages/una-frase-page/una-frase-page.component';
import { CincoFrasePageComponent } from './pages/cinco-frase-page/cinco-frase-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'frase',
    component: UnaFrasePageComponent,
  },
  {
    path: 'fraseCinco',
    component: CincoFrasePageComponent,
  },
];
