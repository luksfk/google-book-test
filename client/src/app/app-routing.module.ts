import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { FavoriteBooksComponent } from './components/favorite-books/favorite-books.component';


const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'favorites',
    component: FavoriteBooksComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
