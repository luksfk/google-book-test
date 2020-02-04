import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  search = '';
  loadingData = false;
  books = [];
  totalItems = 0;
  pageSize = 10;

  emptyResults = false;

  constructor(private bookService: BookService) { }

  searchBook(index = 0) {
    this.loadingData = true;
    this.emptyResults = false;

    this.bookService.getBooksByQuery(this.search, index)
      .pipe(finalize(() => this.loadingData = false),
      ).subscribe(res => {
        this.books = res.items;
        this.totalItems = res.totalItems;

        if (res.totalItems === 0) {
          this.emptyResults = true;
        }
      });
  }

  pageChanged(event) {
    document.querySelector('#seachBookParent').scrollIntoView();
    this.searchBook(event.pageIndex * this.pageSize);
  }
}
