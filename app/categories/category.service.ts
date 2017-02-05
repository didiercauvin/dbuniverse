import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CategoryService {

    public getCategories(): Observable<string[]> {

        return Observable.of(["db", "dbz"]);

    }

}