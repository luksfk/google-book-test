import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

  loadingFavorites = true;
  books = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.loadingFavorites = true;
    this.bookService.getFavoriteBooks()
      .pipe(finalize(() => this.loadingFavorites = false),
      ).subscribe(res => {
        this.books = res;
      });
  }

  favoriteChanged() {
    this.loadFavorites();
  }
}
