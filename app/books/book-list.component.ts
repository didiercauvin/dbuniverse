import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { IBook } from './book';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'book-list.component.html',
    styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {

    public books: IBook[];
    public imageWidth: number = 160;
    public imageHeight: number = 250;

    constructor(
        private _bookService: BookService, 
        private _route: ActivatedRoute
    ){}

    ngOnInit(): void {
        const category = this._route.snapshot.params['category'];

        this._bookService
                .getBooks(category)
                .subscribe(
                    (books: IBook[]) => this.books = books,
                    error => console.log(error)
                );
    }
}