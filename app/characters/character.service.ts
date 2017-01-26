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

    public getNextCharacterId(category: string, id: number): Observable<number> {
        return this.getCharacters(category)
                    .map(characters => this.getNextId(characters, id));
    }

    public getPreviousCharacterId(category: string, id: number): Observable<number> {
        return this.getCharacters(category)
                    .map(characters => this.getPreviousId(characters, id));
    }
    
    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/characters' + category;
        return url;
    }

    private getNextId(characters: ICharacter[], id: number) {
        const ids = characters.map(c => c.id);
        let currentIndex = ids.indexOf(id);
        
        if (currentIndex >= 0 && currentIndex < ids.length - 1) {
            return ids[currentIndex + 1];
        }
        
        return id;
    }

    private getPreviousId(characters: ICharacter[], id: number) {
        const ids = characters.map(c => c.id);
        let currentIndex = ids.indexOf(id);
        
        if (currentIndex > 0) {
            return ids[currentIndex - 1];
        }
        
        return id;
    }
}