import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from './character.service';
import { ICharacter } from './character';

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
        let category = this._route.snapshot.params['category'];
        let id = +this._route.snapshot.params['id'];
        this._characterService
                .getCharacter(category, id)
                .subscribe(
                    character => this.character = character,
                    error => console.log(error)
                )
    }

    onBack(): void {
        this._router.navigate(['../'], {relativeTo: this._route}); //, {category: this._route.snapshot.params['category']}
    }

}