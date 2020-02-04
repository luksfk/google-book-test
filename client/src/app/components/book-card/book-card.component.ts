import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  @Input() book: any;
  @Input() id;
  @Input() thumbnail: string;
  @Input() favorite = false;
  @Output() favoriteChanged = new EventEmitter();

  ngOnInit() {
  }

  getBookSubtitle(): string {
    let result = (this.book.authors || []).join(', ');
    if (this.book.publishedDate) {
      const year = (this.book.publishedDate.split('-') || [])[0];
      if (year) {
        result += (result ? ' - ' : '') + year;
      }
    }
    return result;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateFavoriteBook();
      }
    });
  }

  toggleFavoriteBook() {
    if (this.favorite) {
      this.openDialog();
    } else {
      this.updateFavoriteBook();
    }
  }

  private updateFavoriteBook() {
    const book = { id: this.id, thumbnail: this.thumbnail, ...this.book };
    this.bookService.updateFavoriteBook(book).subscribe(res => {
      this.favorite = res.isFavorite;
      this.favoriteChanged.emit();
    });
  }
}
