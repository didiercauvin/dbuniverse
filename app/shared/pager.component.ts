import { Component, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'db-pager',
    moduleId: module.id.toString(),
    templateUrl: 'pager.component.html',
    styleUrls: [
        'pager.component.css'
    ]
})
export class PagerComponent {

    @Input()
    currentId: string

    @Input()
    previousId: string;

    @Input()
    nextId: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    goTo(id: string): void {
        this._router.navigate(['../', id], {relativeTo: this._route})
    }

    isFirst(): boolean {
        return this.currentId === this.previousId;
    }

    isLast(): boolean {
        return this.currentId === this.nextId;
    }

}