import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    complexForm: FormGroup;

    constructor(
        private _characterService: CharacterService,
        private _route: ActivatedRoute,
        private _router: Router,
        private fb: FormBuilder
    ) {
        let category = this._route.snapshot.params['category'];
        this.complexForm = fb.group({
            'name': '',
            'description': '',
            'category': category,
            'imageUrl': ''
        });
    }

    ngOnInit(): void {
        this.categories = [
            "db",
            "dbz"
        ];

        let category = this._route.snapshot.params['category'];
        let id = +this._route.snapshot.params['id'];

        this._characterService
                .getCharacter(category, id)
                .subscribe(
                    (info: ICharacterInfo) => this.model = info.character,
                    error => console.log(error)
                )
    }

    public onSubmit(data: any) {
        console.log(data);
    }
}