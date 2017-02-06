import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image.component';

@NgModule({
    declarations: [
        ImageComponent
    ],
    exports: [
        ImageComponent,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }