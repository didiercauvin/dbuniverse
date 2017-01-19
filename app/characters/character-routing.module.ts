import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailsComponent } from './character-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'category/:category/characters', component: CharacterListComponent },
            { path: 'category/:category/characters/:id', component: CharacterDetailsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CharacterRoutingModule {
    
}