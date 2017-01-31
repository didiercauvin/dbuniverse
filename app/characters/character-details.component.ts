import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CharacterService } from './character.service';
import { ICharacter, ICharacterInfo } from './character';
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
    isFirst: boolean;
    isLast: boolean;

    constructor(
        private _characterService: CharacterService, 
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {

        this._route.params
            .switchMap((params: Params) => this._characterService.getCharacter(params['category'], params['id']))
            .subscribe(
                (info: ICharacterInfo) => {
                    console.log(info);
                    this.character = info.character,
                    this.isFirst = info.isFirst,
                    this.isLast = info.isLast
                },
                error => console.log(error)
            );

        
    }

    onBack(): void {
        this._router.navigate(['../'], {relativeTo: this._route});
    }

    onNextCharacter(): void {
        let category = this._route.snapshot.params['category'];
        let id: string = this._route.snapshot.params['id'];
        this._characterService
            .getNextCharacterId(category, id)
            .subscribe(
                (id: string) => this._router.navigate(['../', id], {relativeTo: this._route}),
                error => console.log(error)
            )
    }

    onPreviousCharacter(): void {
        let category = this._route.snapshot.params['category'];
        let id = this._route.snapshot.params['id'];
        this._characterService
            .getPreviousCharacterId(category, id)
            .subscribe(
                (id: string) => this._router.navigate(['../', id], {relativeTo: this._route}),
                error => console.log(error)
            )
    }

    onEdit(): void {
        this._router.navigate(['edit'], {relativeTo: this._route});
    }

}