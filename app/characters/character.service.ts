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

        return this._http
                    .get(this.getUrl(category))
                    .map((response: Response) => <ICharacter[]>response.json().data.filter((c: ICharacter) => c.category === category))
                    .catch(this.handleError);
    }

    public getCharacter(category: string, id: number): Observable<ICharacter> {
        return this.getCharacters(category)
                   .map(characters => characters.filter(c => c.id === id)[0]);
    }

    public getPreviousCharacterId(category: string, id: number): Observable<number> {
        return this.getCharacters(category)
                    .map(characters => characters.filter(c => c.id === id)[0].id);
    }
    
    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/characters' + category;
        return url;
    }
}