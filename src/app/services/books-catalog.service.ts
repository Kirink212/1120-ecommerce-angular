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

  getBookById(bookId: string) {
    return this.booksList.find((b) => b._id == bookId);
  }

  createBook(book: IBook) {
    book._id = uuidv4();
    this.booksList.push(book);
    localStorage.setItem("booksList", JSON.stringify(this.booksList));
  }

  updateBook(book: IBook) {
    const index = this.booksList.findIndex((b) => b._id == book._id);
    this.booksList[index] = book;
    localStorage.setItem("booksList", JSON.stringify(this.booksList));
  }

  deleteBook(bookId: string) {
    const index = this.booksList.findIndex((b) => b._id == bookId);
    this.booksList.splice(index, 1);
    localStorage.setItem("booksList", JSON.stringify(this.booksList));
  }
}
