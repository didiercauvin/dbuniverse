import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CharacterService {
    
    constructor(private _http: Http) {}
    
    public getCharacters(category: string): Observable<any[]> {
        const url = 'data/' + category + '-characters.json';
        
        return this._http
                        .get(url)
                        .map((response: Response) => <any[]>response.json())
                        .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}