import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IBook } from '../../interfaces/book.interface';
import { BooksCartService } from '../../services/books-cart.service';
import { BooksCartApiService } from './../../services/books-cart-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { CitationPipe } from '../../pipes/citation.pipe';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [ NgIf, MatCardModule, MatButtonModule, RouterModule, DatePipe, CurrencyPipe, CitationPipe ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  // @Input() book?: IBook;
  // @Input() teste?: string;
  // @Output() addBookToCart: EventEmitter<void> = new EventEmitter();

  @Input() book?: IBook;
  loggedUser: IUser | null = null;
  addedBooksList: IBook[] = [];

  constructor(
    private booksCartSevice: BooksCartService,
    private authService: AuthService,
    private booksCartApiService: BooksCartApiService,
    private dialog: MatDialog
  ) {
    this.authService.loggedUser$.subscribe((user: IUser | null) => {
      this.loggedUser = user;
    });
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

  getUpdateLink() {
    return `/books/update/${this.book?._id}`;
  }
}
