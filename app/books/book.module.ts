import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent} from './book-list.component';
import { BookService } from './book.service';

@NgModule({
    imports: [
        CommonModule,
        BookRoutingModule
    ],
    declarations: [
        BookListComponent
    ],
    providers: [
        BookService
    ]
})
export class BookModule {

}