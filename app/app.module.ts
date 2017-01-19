import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { CategoryModule } from './categories/category.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule,
                  WelcomeModule,
                  CategoryModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }