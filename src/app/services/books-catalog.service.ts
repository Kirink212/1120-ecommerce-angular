import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksCatalogService {
  booksList: IBook[] = [];

  constructor() {
    this.booksList = this.getAllBooks();
  }

  getAllBooks() {
    return JSON.parse(localStorage.getItem("booksList") || "[]");
  }

  createBook(book: IBook) {
    book._id = uuidv4();
    this.booksList.push(book);
    localStorage.setItem("booksList", JSON.stringify(this.booksList));
  }
}
