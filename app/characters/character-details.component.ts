import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CharacterService } from './character.service';
import { ICharacter } from './character';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id.toString(),
    templateUrl: "character-details.component.html",
    styleUrls: ["character-details.component.css"]
})
export class CharacterDetailsComponent implements OnInit {

    character: ICharacter;
    imageWidth: number = 150;
    imageHeight: number = 300;

    constructor(
        private _characterService: CharacterService, 
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._characterService.getCharacter(params['category'], +params['id']))
            .subscribe(
                (character: ICharacter) => this.character = character,
                error => console.log(error)
            );
    }

    onBack(): void {
        this._router.navigate(['../'], {relativeTo: this._route}); //, {category: this._route.snapshot.params['category']}
    }

    onNextCharacter(): void {
        let category = this._route.snapshot.params['category'];
        let id = +this._route.snapshot.params['id'];
        this._characterService
            .getNextCharacterId(category, id)
            .subscribe(
                (id: number) => this._router.navigate(['../', id], {relativeTo: this._route}),
                error => console.log(error)
            )
    }

    onPreviousCharacter(): void {
        let category = this._route.snapshot.params['category'];
        let id = +this._route.snapshot.params['id'];
        this._characterService
            .getPreviousCharacterId(category, id)
            .subscribe(
                (id: number) => this._router.navigate(['../', id], {relativeTo: this._route}),
                error => console.log(error)
            )
    }

}