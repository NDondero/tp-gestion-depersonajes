import { Component } from '@angular/core';
import { Character } from '../../types/character';
import { CharacterService } from '../../services/character.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {
  
  constructor(
    private service: CharacterService,
    private router: Router
  ) { }

  model: Character = {
    name: '',
    alias: '',
    powers: '',
    description: ''
  }

  addCharacter() {
    this.service.addCharacter(this.model).subscribe({
      next: () => {
        this.router.navigate(['characters']);
      },
      error: console.log
    });
  }
}
