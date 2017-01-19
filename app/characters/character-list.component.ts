import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from './character.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'character-list.component.html',
    styleUrls: ['character-list.component.css']
})
export class CharacterListComponent implements OnInit {
    public pageTitle: string = "Liste des personnages";
    public characters: any[];
    
    constructor(private _service: CharacterService, private _route: ActivatedRoute) {}
    
    public ngOnInit(): void {
        let category = this._route.snapshot.params['category'];
        this._service
                .getCharacters(category)
                .subscribe(
                    characters => this.characters = characters,
                    error => console.log(<any>error)       
                );
    }
}