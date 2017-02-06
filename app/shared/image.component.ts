import { Component, Input } from '@angular/core';
import { IDbImageUrl } from './image';

@Component({
    selector: 'db-image',
    moduleId: module.id.toString(),
    templateUrl: 'image.component.html',
    styleUrls: [
        'image.component.css'
    ]
})
export class ImageComponent {

    @Input() model: IDbImageUrl;
    @Input() imageWidth: number = 150;
    @Input() imageHeight: number = 300;

}