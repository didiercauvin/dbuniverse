import { NgModule } from '@angular/core';
import { CoreService } from './core.service';
import { CharacterService } from '../characters/character.service';
import { BookService } from '../books/book.service';
import { CategoryService } from '../categories/category.service';

@NgModule({
    providers: [
        CharacterService,
        BookService,
        CategoryService
    ]
})
export class CoreModule {

}