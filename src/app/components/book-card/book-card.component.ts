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

  constructor() {
    // console.log(this.book);
    // console.log(this.teste);
  }

  ngOnInit() {
    // console.log(this.book);
    // console.log(this.teste);
  }

  addToShoppingCart() {
    this.addBookToCart.emit();
    console.log("Book added to cart successfully!");
  }
}
