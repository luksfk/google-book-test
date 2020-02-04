import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BooksQueryResult, UpdateFavoriteBook } from '../models/books-response';

@Injectable()
export class BookService extends BaseService {
    constructor(private http: HttpClient) { super(); }

    getBooksByQuery(search: string, index: number): Observable<BooksQueryResult> {
        return this.http.get<BooksQueryResult>(`${this.URL_SERVICE}book?search=${encodeURIComponent(search)}&index=${index}`);
    }

    updateFavoriteBook(book): Observable<UpdateFavoriteBook> {
        return this.http.post<UpdateFavoriteBook>(`${this.URL_SERVICE}book/favorite`, book);
    }

    getFavoriteBooks(): Observable<any[]> {
        return this.http.get<any[]>(`${this.URL_SERVICE}book/favorites`);
    }
}
