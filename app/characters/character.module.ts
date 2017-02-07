import { NgModule } from '@angular/core';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterFormComponent } from './character-form.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CharacterRoutingModule,
        CoreModule
    ],
    declarations: [
        CharacterListComponent,
        CharacterDetailsComponent,
        CharacterFormComponent
    ],
    exports: [
        CharacterListComponent,
        CharacterDetailsComponent
    ]
})
export class CharacterModule {

}