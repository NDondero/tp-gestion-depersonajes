import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../types/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'http://localhost:3000/characters'

  constructor(private http: HttpClient) { }

  /* paso uno: implementar los metodos basicos, 
  sin asumir nada y loggear los resultados en los componentes */

  /* paso dos: tipar los retornos de los metodos */

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.baseUrl, character);
  }

  /* TODO: utilizar este metodo en CharacterDetailComponent */
  editCharacter(character: Character) {
    return this.http.patch(`${this.baseUrl}/${character.id}`, character);
  }

  /* Este metodo retorna el objeto eliminado
  lo que se suele hacer es convertirlo a un booleano */
  deleteCharacter(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`)
    .pipe(
      map(() => true)
    );
  }
}
