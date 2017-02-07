import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book.service';
import { CategoryService } from '../categories/category.service';
import { IBook } from './book';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'book-form.component.html',
    styleUrls: [
        'book-form.component.css'
    ]
})
export class BookFormComponent implements OnInit {

    categories: string[];
    model: IBook;
    category: string;

    constructor(
        private _bookService: BookService,
        private _categoryService: CategoryService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    public ngOnInit(): void {

        this.category = this._route.snapshot.params['category'];

        let id = this._route.snapshot.params['id'];

        if (id) {
            this._bookService
                .getBook(this.category, id)
        }
    }

}