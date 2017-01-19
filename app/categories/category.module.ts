import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CharacterModule } from '../characters/character.module';
import { CategoryGuard } from './category-guard.service';

@NgModule({
    imports: [ 
        CommonModule,
        CategoryRoutingModule,
        CharacterModule
    ],
    declarations: [
        CategoryComponent
    ],
    providers: [
        CategoryGuard
    ]
})
export class CategoryModule {
    
}