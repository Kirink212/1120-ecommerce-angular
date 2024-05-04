import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { IBook } from '../../interfaces/book.interface';
import { BooksCartService } from '../../services/books-cart.service';

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

  constructor(private booksCartSevice: BooksCartService) {

  }

  ngOnInit() {
    this.addedBooksList = this.booksCartSevice.getAllBooks();
  }

  addToShoppingCart() {
    this.addBookToCart.emit();

    console.log(this.book);
    this.booksCartSevice.findOrAddBook(this.book);
    // console.log("Book added to cart successfully!");
  }
}
