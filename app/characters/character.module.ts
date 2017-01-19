import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterService } from './character.service';

@NgModule({
    imports: [
        CommonModule,
        CharacterRoutingModule
    ],
    declarations: [
        CharacterListComponent,
        CharacterDetailsComponent
    ],
    exports: [
        CharacterListComponent,
        CharacterDetailsComponent
    ],
    providers: [
        CharacterService    
    ]
})
export class CharacterModule {
    
}