import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookService } from './book.service';
import { IBook, IBookInfo } from './book';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'book-details.component.html',
    styleUrls: [
        'book-details.component.css'
    ]
})
export class BookDetailsComponent {

    book: IBook;
    imageWidth: number = 160;
    imageHeight: number = 250;
    previousId: string;
    nextId: string

    constructor(
        private _service: BookService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {

        this._route.params
            .switchMap((params: Params) => this._service.getBook(params['category'], params['id']))
            .subscribe(
                (info: IBookInfo) => {
                    this.previousId = info.previousId;
                    this.nextId = info.nextId;
                    this.book = info.book
                },
                error => console.log(error)
            );

    }

    onBack(): void {
        this._router.navigate(['../'], {relativeTo: this._route});
    }

    onEdit(): void {
        this._router.navigate(['edit'], {relativeTo: this._route});
    }

}