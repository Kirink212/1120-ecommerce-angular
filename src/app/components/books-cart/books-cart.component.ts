import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { IBook } from '../../interfaces/book.interface';
import { BooksCartService } from '../../services/books-cart.service';
import { BooksCartApiService } from '../../services/books-cart-api.service';

@Component({
  selector: 'app-books-cart',
  standalone: true,
  imports: [ MatListModule, MatDividerModule, MatButtonModule ],
  templateUrl: './books-cart.component.html',
  styleUrl: './books-cart.component.css'
})
export class BooksCartComponent implements OnInit {
  // @Input("booksList") addedBooksList: IBook[] = [];
  addedBooksList: IBook[] = [];

  constructor(
    private booksCartSevice: BooksCartService,
    private booksCartApiSevice: BooksCartApiService
  ) {

  }

  ngOnInit() {
    // console.log(this.addedBooksList);
    const $addedBooksList = this.booksCartApiSevice.getAllBooks();
    $addedBooksList.subscribe((addedBooksList) => {
      this.addedBooksList = addedBooksList;
      console.log(this.addedBooksList);
    });

    // this.addedBooksList = this.booksCartApiSevice.getAllBooks();
    // this.addedBooksList = this.booksCartSevice.getAllBooks();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(this.addedBooksList);
  //   localStorage.setItem("addedBooksList", JSON.stringify(this.addedBooksList));
  // }

  incrementTotalBookCopies(book: IBook) {
    this.booksCartSevice.incrementTotalBookCopies(book.id);
    this.addedBooksList = this.booksCartSevice.getAllBooks();
  }

  decrementTotalBookCopies(book: IBook) {
    this.booksCartSevice.decrementTotalBookCopies(book.id);
    this.addedBooksList = this.booksCartSevice.getAllBooks();
  }
}
