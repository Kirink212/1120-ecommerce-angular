import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {
    // console.log(this.book);
    // console.log(this.teste);
  }

  ngOnInit() {
    // console.log(this.book);
    // console.log(this.teste);
  }

  addToShoppingCart() {
    console.log("Book added to cart successfully!");
  }
}
