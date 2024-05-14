import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IBook } from '../../interfaces/book.interface';
import { BooksCartService } from '../../services/books-cart.service';
import { BooksCartApiService } from './../../services/books-cart-api.service';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [ NgIf, MatCardModule, MatButtonModule ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  // @Input() book?: IBook;
  // @Input() teste?: string;
  // @Output() addBookToCart: EventEmitter<void> = new EventEmitter();

  @Input() book?: IBook;
  addedBooksList: IBook[] = [];

  constructor(
    private booksCartSevice: BooksCartService,
    private booksCartApiService: BooksCartApiService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.addedBooksList = this.booksCartSevice.getAllBooks();
  }

  addToShoppingCart() {
    this.booksCartApiService.addOrUpdateBookFromCart(this.book);

    // this.addBookToCart.emit();

    // console.log(this.book);
    // this.booksCartSevice.findOrAddBook(this.book);
    // console.log("Book added to cart successfully!");
  }

  removeFromCatalog() {
    this.dialog.open(DeleteDialogComponent, {
      data: { bookId: this.book?._id }
    });
  }
}
