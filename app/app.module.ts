import { NgModule, APP_INITIALIZER }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { AppComponent }  from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { CategoryModule } from './categories/category.module';
import { BookModule } from './books/book.module';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDbUniverseService } from './inmemorydata.service';
import { CoreModule } from './core/core.module';
import { CoreService } from './core/core.service';

function loadData(service: CoreService) {
    return () => service.load();
}

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule,
                  WelcomeModule,
                  CategoryModule,
                  BookModule,
                  AppRoutingModule,
                  InMemoryWebApiModule.forRoot(InMemoryDbUniverseService),
                  CoreModule
                ],
  declarations: [ 
        AppComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    CoreService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadData,
      deps: [CoreService],
      multi: true
    }
  ]
})
export class AppModule { }