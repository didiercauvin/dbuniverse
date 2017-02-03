import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterFormComponent } from './character-form.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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