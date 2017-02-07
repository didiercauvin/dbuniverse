import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookListComponent} from './book-list.component';
import { BookFormComponent } from './book-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'category/:category/books', component: BookListComponent },
            { path: 'category/:category/books/edit', component: BookFormComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BookRoutingModule {

}