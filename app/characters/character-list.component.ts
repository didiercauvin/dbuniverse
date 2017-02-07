import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterService } from './character.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'character-list.component.html',
    styleUrls: ['character-list.component.css'],
    // animations: [
    //     trigger('myTrigger', [
    //         state('fadeIn', style({
    //             opacity: 1
    //         })),
    //         transition('void => *', [
    //             style({opacity: 0, transform: 'translateY(20px)'}),
    //             animate('500ms 0 ease-in')
    //             // animate(500, keyframes([
    //             //     style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
    //             //     style({opacity: 1, transform: 'translateY(5px)', offset: 0.3}),
    //             //     style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
    //             // ]))
    //         ])
    //     ])
    // ]
})
export class CharacterListComponent implements OnInit {
    public pageTitle: string = "Liste des personnages";
    public characters: any[];
    // public state: string = 'fadeIn';

    constructor(
        private _service: CharacterService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    public ngOnInit(): void {

        this.getCharacters();

    }

    public getCharacters() {

        this._route.params
            .switchMap((params: Params) => this._service.getCharacters(params['category']))
            .subscribe(
                characters => this.characters = characters,
                error => console.log(<any>error)
            );

    }

    public onNew() {

        this._router.navigate(['edit'], {relativeTo: this._route});
        
    }

    onBack(): void {

        this._router.navigate(['../'], {relativeTo: this._route});

    }
}