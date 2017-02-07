import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacter, ICharacterInfo } from './character';
import { CharacterService } from './character.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'character-form.component.html',
    styleUrls: ['character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
    categories: string[];
    model: ICharacter;
    category: string;

    constructor(
        private _service: CharacterService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.category = this._route.snapshot.params['category'];
    }

    ngOnInit(): void {
        this.categories = [
            "db",
            "dbz"
        ];

        let id = this._route.snapshot.params['id'];

        if (id) {
            this._service
                .getCharacter(this.category, id)
                .subscribe(
                    (info: ICharacterInfo) => this.model = info.character,
                    error => console.log(error)
                )
        }
        else {
            this.model = {
                id: null,
                category: this.category,
                name: '',
                description: '',
                imageUrl: ''
            };
        }
    }

    public onSubmit() {
        this._service
                .save(this.category, this.model)
                .subscribe(
                    (character: ICharacter) => this.onBack(),
                    error => console.log(error)
                );
    }

    onBack(): void {
        this._router.navigate(['../'], {relativeTo: this._route});
    }

    get diagnostic() { return JSON.stringify(this.model); }
}