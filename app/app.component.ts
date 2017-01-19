import { Component } from '@angular/core';

@Component({
    selector: 'db-app',
    moduleId: module.id.toString(),
    templateUrl: "app.component.html",
    styleUrls: ['app.component.css']
})
export class AppComponent {
    pageTitle: string = "Bienvenue dans l'univers de Dragon Ball";
    
}