import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [ NgIf, MatCardModule ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  @Input() book?: IBook;
  @Input() teste?: string;
  @Output() addBookToCart: EventEmitter<void> = new EventEmitter();

  addedBooksList: IBook[] = [];

  ngOnInit() {
    this.addedBooksList = JSON.parse(localStorage.getItem("addedBooksList") || "[]");
  }

  findOrAddBook(book?: IBook) {
    // Checando se o livro que estou buscando já está no carrinho
    for (let i=0; i<this.addedBooksList.length; i++) {
      const currBook = this.addedBooksList[i];
      if (book?.id === currBook.id) {
        currBook.totalAddedToCart = (book.totalAddedToCart < book.totalInStock)? currBook.totalAddedToCart + 1 : currBook.totalAddedToCart;
        return;
      }
    }

    // Adicionando uma cópia de um novo livro ao carrinho
    if (book) {
      book.totalAddedToCart = 1;
      this.addedBooksList.push(book);
    }
  }

  addToShoppingCart() {
    this.addBookToCart.emit();

    this.findOrAddBook(this.book)

    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
    // console.log("Book added to cart successfully!");
  }
}
