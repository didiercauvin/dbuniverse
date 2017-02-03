import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacter, ICharacterInfo } from './character';
import { CoreService } from '../core/core.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'character-form.component.html',
    styleUrls: ['character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
    categories: string[];
    model: ICharacter;
    complexForm: FormGroup;
    category: string;

    constructor(
        private _service: CoreService,
        private _route: ActivatedRoute,
        private _router: Router,
        private fb: FormBuilder
    ) {
        this.category = this._route.snapshot.params['category'];
        this.complexForm = fb.group({
            'name': '',
            'description': '',
            'category': this.category,
            'imageUrl': ''
        });
    }

    ngOnInit(): void {
        this.categories = [
            "db",
            "dbz"
        ];

        let id = this._route.snapshot.params['id'];

        if (id) {
            this._service.characterService
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
        this._service.characterService
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