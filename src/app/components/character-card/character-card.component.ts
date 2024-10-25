import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../types/character';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input({ required: true }) character!: Character;
  @Output() navigateEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  onNavigate() {
    this.navigateEvent.emit(this.character.id);
  }

  onDelete() {
    this.deleteEvent.emit(this.character.id);
  }
}
