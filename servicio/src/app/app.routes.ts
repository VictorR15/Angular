import { Routes } from '@angular/router';
import { FraseComponent } from './servicioSocial/page/frase/frase.component';
import { FrasesComponent } from './servicioSocial/page/frase/frases/frases.component';

export const routes: Routes = [
  {
    path: '',
    component: FrasesComponent,
  },
  {
    path: 'frasesHero',
    children: [
      {
        path: 'frasesHeroHome',
        component: FraseComponent,
      },
      {
        path: '**',
        redirectTo: 'frasesHeroHome',
      },
    ],
  },
];
