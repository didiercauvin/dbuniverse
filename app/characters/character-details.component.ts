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
    previousId: string;
    nextId: string;

    constructor(
        private _service: CharacterService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {

        this._route.params
            .switchMap((params: Params) => this._service.getCharacter(params['category'], params['id']))
            .subscribe(
                (info: ICharacterInfo) => {
                    this.previousId = info.previousId;
                    this.nextId = info.nextId;
                    this.character = info.character
                },
                error => console.log(error)
            );

    }

    onBack(): void {

        this._router.navigate(['../'], {relativeTo: this._route});

    }

    onEdit(): void {

        this._router.navigate(['edit'], {relativeTo: this._route});
        
    }

}