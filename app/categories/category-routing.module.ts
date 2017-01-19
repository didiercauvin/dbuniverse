import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryGuard } from './category-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'category/:id', component: CategoryComponent, canActivate: [ CategoryGuard ] }
        ])
    ],
    exports: [ RouterModule ]
})
export class CategoryRoutingModule {
    
}