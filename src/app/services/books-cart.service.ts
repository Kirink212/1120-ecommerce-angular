import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksCartService {

  addedBooksList: IBook[] = [];

  constructor() {
    this.addedBooksList = this.getAllBooks();
  }

  getAllBooks() {
    return JSON.parse(localStorage.getItem("addedBooksList") || "[]");
  }

  findOrAddBook(book?: IBook) {
    // Checando se o livro que estou buscando já está no carrinho
    for (let i=0; i<this.addedBooksList.length; i++) {
      const currBook = this.addedBooksList[i];
      if (book?._id === currBook._id) {
        currBook.totalAddedToCart = (currBook.totalAddedToCart < currBook.totalInStock)? currBook.totalAddedToCart + 1 : currBook.totalAddedToCart;
        localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
        return;
      }
    }

    // Adicionando uma cópia de um novo livro ao carrinho
    if (book) {
      book.totalAddedToCart = 1;
      this.addedBooksList.push(book);
    }

    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  }

  findBookIndexById(bookId: string){
    const bookIndex = this.addedBooksList.findIndex((currBook) => {
      return currBook._id === bookId;
    });

    return bookIndex;
  }

  removeBookFromCart(bookId: string) {
    const bookIndex = this.findBookIndexById(bookId);
    this.addedBooksList.splice(bookIndex, 1);
  }

  incrementTotalBookCopies(bookId: string) {
    const bookIndex = this.findBookIndexById(bookId);
    const book = this.addedBooksList[bookIndex];

    book.totalAddedToCart++;
    if (book.totalAddedToCart > book.totalInStock) {
      book.totalAddedToCart = book.totalInStock;
    }

    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  }

  decrementTotalBookCopies(bookId: string) {
    const bookIndex = this.findBookIndexById(bookId);
    const book = this.addedBooksList[bookIndex];

    book.totalAddedToCart--;

    if(book.totalAddedToCart <= 0) {
      this.removeBookFromCart(bookId);
    }

    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  }
}
