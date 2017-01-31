import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs/Observable';
import { ICharacter, ICharacterInfo } from './character';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CharacterService {
    
    constructor(private _http: Http) {}
    
    public getCharacters(category: string): Observable<ICharacter[]> {

        // for(let i = 0; i < 10; i++) {
        //     console.log(UUID.UUID());
        // }

        return this._http
                    .get(this.getUrl(category))
                    .map((response: Response) => <ICharacter[]>response.json().data.filter((c: ICharacter) => c.category === category))
                    .catch(this.handleError);
    }

    public getCharacter(category: string, id: string): Observable<ICharacterInfo> {
        return this.getCharacters(category)
                   .map(characters => {
                       const c = characters.filter(c => c.id === id)[0];
                       return {
                           character: c,
                           isFirst: this.getPreviousId(characters, id) === id,
                           isLast: this.getNextId(characters, id) === id
                       }
                    });
    }

    public getNextCharacterId(category: string, id: string): Observable<string> {
        return this.getCharacters(category)
                    .map(characters => this.getNextId(characters, id));
    }

    public getPreviousCharacterId(category: string, id: string): Observable<string> {
        return this.getCharacters(category)
                    .map(characters => this.getPreviousId(characters, id));
    }

    public isLastCharacter(category: string, id: string): Observable<boolean> {
        return this.getNextCharacterId(category, id)
                    .map(i => i === id);
    }

    public isFirstCharacter(category: string, id: string): Observable<boolean> {
        return this.getPreviousCharacterId(category, id)
                    .map(i => i === id);
    }

    public save(category: string, character: ICharacter): Observable<ICharacter> {
        if (character.id) {
            return this.put(category, character);
        }

        return this.post(category, character);
    }

    private put(category: string, character: ICharacter): Observable<ICharacter> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.getUrl(category)}/${character.id}`;
        console.log('character', character);
        console.log('url', url);
        return this._http
                    .put(url, JSON.stringify(character), {headers: headers})
                    .map(() => character)
                    .catch(this.handleError);
    }

    private post(category: string, character: ICharacter): Observable<ICharacter> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        character.id = UUID.UUID();

        return this._http
                    .post(this.getUrl(category), JSON.stringify(character), {headers: headers})
                    .map((response: Response) => <ICharacter>response.json().data)
                    .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }

    private getUrl(category: string): string {
        const url = 'app/characters' + category;
        return url;
    }

    private getNextId(characters: ICharacter[], id: string) {
        const ids = characters.map(c => c.id);
        let currentIndex = ids.indexOf(id);
        
        if (currentIndex >= 0 && currentIndex < ids.length - 1) {
            return ids[currentIndex + 1];
        }
        
        return id;
    }

    private getPreviousId(characters: ICharacter[], id: string) {
        const ids = characters.map(c => c.id);
        let currentIndex = ids.indexOf(id);
        
        if (currentIndex > 0) {
            return ids[currentIndex - 1];
        }
        
        return id;
    }
}