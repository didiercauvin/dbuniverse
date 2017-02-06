import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBook } from './book';
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

    handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/books' + category;
        return url;
    }
}