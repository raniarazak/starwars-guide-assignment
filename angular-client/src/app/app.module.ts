import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCategoryComponent } from './starwars-guide/main-category/main-category.component';
import { ItemsCategoryComponent } from './starwars-guide/items-category/items-category.component';
import { ItemDetailsComponent } from './starwars-guide/item-details/item-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './starwars-guide/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCategoryComponent,
    ItemsCategoryComponent,
    ItemDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
