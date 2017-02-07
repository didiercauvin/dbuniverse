import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';
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

        for(let i = 0; i < 10; i++) {
            console.log(UUID.UUID());
        }

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
                            previousId: this.getPreviousId(books, b.id),
                            nextId: this.getNextId(books, b.id)
                        }
                    });

    }

    public save(category: string, book: IBook): Observable<IBook> {
        if (book.id) {
            return this.put(category, book);
        }

        return this.post(category, book);
    }

    private put(category: string, book: IBook): Observable<IBook> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.getUrl(category)}/${book.id}`;

        return this._http
                    .put(url, JSON.stringify(book), {headers: headers})
                    .map(() => book)
                    .catch(this.handleError);
    }

    private post(category: string, book: IBook): Observable<IBook> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        book.id = UUID.UUID();

        return this._http
                    .post(this.getUrl(category), JSON.stringify(book), {headers: headers})
                    .map((response: Response) => {
                        let c = <IBook>response.json().data;
                        this._values.push(c);
                        return c;
                    })
                    .catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/books' + category;
        return url;
    }

    private getNextId(books: IBook[], id: string) {

        const ids = books.map(c => c.id);
        let currentIndex = ids.indexOf(id);

        if (currentIndex >= 0 && currentIndex < ids.length - 1) {
            return ids[currentIndex + 1];
        }

        return id;

    }

    private getPreviousId(books: IBook[], id: string) {
        
        const ids = books.map(c => c.id);
        let currentIndex = ids.indexOf(id);

        if (currentIndex > 0) {
            return ids[currentIndex - 1];
        }

        return id;

    }
}