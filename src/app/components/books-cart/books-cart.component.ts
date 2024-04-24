import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-cart',
  standalone: true,
  imports: [ MatListModule, MatDividerModule, MatButtonModule ],
  templateUrl: './books-cart.component.html',
  styleUrl: './books-cart.component.css'
})
export class BooksCartComponent implements OnInit, OnChanges {
  @Input("booksList") addedBooksList: IBook[] = [];

  ngOnInit() {
    // console.log(this.addedBooksList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.addedBooksList);
    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  }

  removeBookFromCart(book: IBook) {
    const bookIndex = this.addedBooksList.findIndex((currBook) => {
      return currBook.id === book.id;
    })
    this.addedBooksList.splice(bookIndex, 1);
  }

  incrementTotalBookCopies(book: IBook) {
    book.totalAddedToCart++;
    if (book.totalAddedToCart > book.totalInStock) {
      book.totalAddedToCart = book.totalInStock;
    }

    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  }

  decrementTotalBookCopies(book: IBook) {
    book.totalAddedToCart--;

    if(book.totalAddedToCart <= 0) {
      this.removeBookFromCart(book);
    }

    localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  }
}
