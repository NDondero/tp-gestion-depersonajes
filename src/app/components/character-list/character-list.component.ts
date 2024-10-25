import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../types/character';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  characters: Array<Character> = [];

  constructor(
    private service: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getCharacters().subscribe({
      next: (characters) => {
        this.characters = characters;
      },
      error: console.log
    })
  }

  onNavigate(id: string) {
    this.router.navigate([`characters/${id}`]);
  }

  onDelete(id: string) {
    this.service.deleteCharacter(id).subscribe((deleted) => {
      if (deleted) {
        this.characters.splice(this.characters.findIndex(c => c.id === id), 1);
      }
    });
  }
}
