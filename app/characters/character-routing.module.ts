import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterFormComponent } from './character-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'category/:category/characters', component: CharacterListComponent },
            { path: 'category/:category/characters/edit', component: CharacterFormComponent },
            { path: 'category/:category/characters/:id', component: CharacterDetailsComponent },
            { path: 'category/:category/characters/:id/edit', component: CharacterFormComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CharacterRoutingModule {
    
}