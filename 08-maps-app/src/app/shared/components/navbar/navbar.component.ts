import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  router = inject(Router);

  rutas = routes
    .map((route) => ({
      path: route.path,
      title: route.title ?? 'Maps en Angular',
    }))
    .filter((route) => route.path !== '**');

  paginaTitulo$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e) => e.url),
    map(
      (url) =>
        routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas'
    )
  );
}
