import { NgModule } from '@angular/core';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent} from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { BookDetailsComponent } from './book-details.component';
import { BookService } from './book.service';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        BookRoutingModule
    ],
    declarations: [
        BookListComponent,
        BookFormComponent,
        BookDetailsComponent
    ],
    providers: [
        BookService
    ]
})
export class BookModule {

}