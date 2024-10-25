import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Character } from '../../types/character';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit {

  character?: Character;

  constructor(
    private service: CharacterService,
    private route: ActivatedRoute
  ) { }

  /* swtichMap me permite quedarme con el observable de lo que devuelve el servicio,
  si utilizara map en lugar de switchMap tendriamos un observable dentro de otro */
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getCharacterById(params.get('id')?? '')
      })
    ).subscribe(character => {
      this.character = character;
    })
  }

}
