import { Injectable } from '@angular/core';
import { CharacterService } from '../characters/character.service';

@Injectable()
export class CoreService {

    constructor(public characterService: CharacterService) { }

}