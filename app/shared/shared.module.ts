import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image.component';
import { PagerComponent } from './pager.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ImageComponent,
        PagerComponent
    ],
    exports: [
        ImageComponent,
        PagerComponent,
        BrowserModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }