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

    constructor(private _http: Http) { }

    public init(categories: string[]) {

        this._data = new BehaviorSubject<IBook[]>([]);


    }

    getBooks(category: string): Observable<IBook[]> {
        return this._http
                        .get(this.getUrl(category))
                        .map((response: Response) => <IBook[]>response.json().data.filter((b: IBook) => b.category === category))
                        .catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/books' + category;
        return url;
    }
}