import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';

export const routes: Routes = [
    { path: 'characters', component: CharacterListComponent },
    { path: 'add-characters', component: CharacterFormComponent },
    { path: 'characters/:id', component: CharacterDetailComponent },
    { path: '**', redirectTo: 'characters' }
];
