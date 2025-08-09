import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const character = localStorage.getItem('character');
  return character ? JSON.parse(character) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballServices {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('character', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
