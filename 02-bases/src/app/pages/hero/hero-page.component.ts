import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.update((name) => 'Spiderman');
    this.age.update((age) => 22);
  }
  resetForm() {
    this.name.update((name) => 'Ironman');
    this.age.update((age) => 45);
  }
  chageAge() {
    this.age.update((age) => 60);
  }
}
