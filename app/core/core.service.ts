import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CharacterService } from '../characters/character.service';
import { BookService } from '../books/book.service';
import { CategoryService } from '../categories/category.service';

@Injectable()
export class CoreService {

    constructor(
        private _characterService: CharacterService,
        private _bookService: BookService,
        private _categoryService: CategoryService
    ) { }

    public load() {

        this._categoryService
            .getCategories()
            .subscribe((categories: string[]) => {
                this._characterService.init(categories);
                this._bookService.init(categories);
            });
    }

}