import { DragonballServices } from './../../services/dragonball.services';
import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../components/dragonball/character-add/character-add.component';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponet {
  public DragonballServices = inject(DragonballServices);
}
