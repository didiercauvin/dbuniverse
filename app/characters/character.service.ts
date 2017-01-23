import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICharacter} from './character';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CharacterService {
    
    constructor(private _http: Http) {}
    
    public getCharacters(category: string): Observable<ICharacter[]> {
        const url = 'data/' + category + '-characters.json';
        
        return this._http
                        .get(url)
                        .map((response: Response) => <ICharacter[]>response.json())
                        .catch(this.handleError);
    }

    public getCharacter(category: string, id: number): Observable<ICharacter> {
        console.log('looking for characterid ', id, ' in ', category, ' collection');
        return this.getCharacters(category)
                   .map(characters => characters.filter(c => c.id === id)[0]);
    }
    
    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}