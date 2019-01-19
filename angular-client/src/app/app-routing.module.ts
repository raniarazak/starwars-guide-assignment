import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainCategoryComponent } from './starwars-guide/main-category/main-category.component';
import { ItemsCategoryComponent } from './starwars-guide/items-category/items-category.component';
import { ItemDetailsComponent } from './starwars-guide/item-details/item-details.component';
import { PageNotFoundComponent } from './starwars-guide/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/main-category', pathMatch: 'full' },
  { path: 'main-category', component: MainCategoryComponent },
  { path: 'items-category', component: ItemsCategoryComponent },
  { path: 'item-details', component: ItemDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
