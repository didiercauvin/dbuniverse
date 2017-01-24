import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookListComponent} from './book-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'category/:category/books', component: BookListComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BookRoutingModule {

}