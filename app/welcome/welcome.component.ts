import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css'],
    // animations: [
    //     trigger('myTrigger', [
    //         state('small', style({
    //             transform: 'scale(1)'
    //         })),
    //         state('large', style({
    //             transform: 'scale(1.4)'
    //         })),,
    //         state('extra-large', style({
    //             transform: 'scale(2)'
    //         })),
    //         state('fadeIn', style({
    //             opacity: '1',
    //             transform: 'scale(1.2)'
    //         })),
    //         transition('void => *', [
    //             animate(500, keyframes([
    //                 style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
    //                 style({opacity: 1, transform: 'translateY(5px) scale(1.2)', offset: 0.3}),
    //                 style({opacity: 1, transform: 'translateY(0) scale(1.2)', offset: 1}),
    //             ]))
    //         ])
    //     ])
    // ]
})
export class WelcomeComponent {
    pageTitle: string = "Bienvenue dans l'univers de Dragon Ball et Dragon Ball Z";
    // state: string = 'fadeIn';
    // items: any[] = ['item1', 'item2', 'item3'];

    // toggleState(): void {
    //     // this.state = (this.state === 'small' ? 'large' : 'small');
    //     this.items.push('another item');
    //     this.state = "fadeIn";
    // }
}