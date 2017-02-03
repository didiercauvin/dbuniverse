import { NgModule } from '@angular/core';
import { CoreService } from './core.service';
import { CharacterService } from '../characters/character.service';

@NgModule({
    providers: [
        CharacterService
    ]
})
export class CoreModule {

}