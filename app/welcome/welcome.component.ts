import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
    pageTitle: string = "Bienvenue dans l'univers de Dragon Ball et Dragon Ball Z";
}