import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BookCardComponent } from '../../components/book-card/book-card.component';
import { IBook } from '../../interfaces/book.interface';
import { BooksCatalogService } from '../../services/books-catalog.service';

@Component({
  selector: 'app-books-catalog',
  standalone: true,
  imports: [ NgFor, NgIf, BookCardComponent ],
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent implements OnInit {
  @Output() addBookToCart: EventEmitter<IBook> = new EventEmitter();
  // booksList: Array<IBook>
  teste: string = 'ABC';
  booksList: IBook[] = [];

  constructor(private booksCatalogService: BooksCatalogService) {

  }

  ngOnInit() {
    this.booksList = this.booksCatalogService.getAllBooks();
  }

  warnAboutAddBookToCart(book: IBook){
    // console.log("Opa, clicou no botão de compra, né filhão?");
    // console.log(book);
    this.addBookToCart.emit(book);
  }
}
