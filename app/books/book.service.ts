import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBook, IBookInfo } from './book';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    private _url: string = 'app/books';
    private _data: BehaviorSubject<IBook[]>;
    private _values: IBook[];

    constructor(private _http: Http) { }

    public init(categories: string[]) {

        this._data = new BehaviorSubject<IBook[]>([]);
        this._values = [];

        Observable.from(categories)
                .concatMap(
                    (category: string) => {
                        return Observable.defer(() => this._http.get(this.getUrl(category)))
                    },
                    (_, response: Response) => <IBook[]>response.json().data
                )
                .subscribe(
                    (data: IBook[]) => this._values = this._values.concat(data),
                    (err: any) => console.error(err),
                    () => {
                        console.log('books loaded');
                        this._data.next(this._values);
                    }
                )

    }

    getBooks(category: string): Observable<IBook[]> {
        
        return this._data
                    .map((books: IBook[]) => books.filter((b: IBook) => b.category === category));
        
    }

    getBook(category: string, id: string): Observable<IBookInfo> {
        
        return this.getBooks(category)
                    .map((books: IBook[]) => {
                        const b = books.filter((b: IBook) => b.id === id)[0];

                        return {
                            book: b,
                            previousId: "-1",
                            nextId: "-1"
                        }
                    });

    }

    handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/books' + category;
        return url;
    }
}