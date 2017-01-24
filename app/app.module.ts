import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { AppComponent }  from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { CategoryModule } from './categories/category.module';
import { BookModule } from './books/book.module';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDbUniverseService } from './inmemorydata.service';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule,
                  WelcomeModule,
                  CategoryModule,
                  BookModule,
                  AppRoutingModule,
                  InMemoryWebApiModule.forRoot(InMemoryDbUniverseService)
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }