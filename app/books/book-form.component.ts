import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book.service';
import { CategoryService } from '../categories/category.service';
import { IBook, IBookInfo } from './book';

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

        this.categories = [
            "db",
            "dbz"
        ];

        this.category = this._route.snapshot.params['category'];

        let id = this._route.snapshot.params['id'];

        if (id) {
            this._bookService
                .getBook(this.category, id)
                .subscribe(
                    (info: IBookInfo) => this.model = Object.assign({}, info.book),
                    error => console.log(error)
                );
        }
        else {
            this.model = {
                id: null,
                category: this.category,
                title: '',
                description: '',
                imageUrl: ''
            }
        }
    }

    public onSubmit() {
        this._bookService
                .save(this.category, this.model)
                .subscribe(
                    (_) => this.onBack(),
                    error => console.log(error)
                );
    }

    onBack(): void {
        this._router.navigate(['../'], {relativeTo: this._route});
    }

}