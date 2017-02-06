import { NgModule } from '@angular/core';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent} from './book-list.component';
import { BookService } from './book.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
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