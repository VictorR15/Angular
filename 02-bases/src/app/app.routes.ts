import { Routes } from '@angular/router';
import { CounterPageConponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponet } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponet } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageConponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponet,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponet,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
