import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BookCardComponent } from '../../components/book-card/book-card.component';
import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-catalog',
  standalone: true,
  imports: [ NgFor, NgIf, BookCardComponent ],
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent {
  booksList: IBook[] = [
    {
      "id": 1,
      "title": "O Silêncio dos Inocentes",
      "author": "Thomas Harris",
      "description": "Um livro muito legal...",
      "published_date": new Date("1988-08-29"),
      "price": 59.99
    },
    {
      "id": 2,
      "title": "Harry Potter e a Ordem da Fênix",
      "author": "J.K. Rowling",
      "description": "Um livro muito legal...",
      "published_date": new Date("1988-08-29"),
      "price": 59.99
    },
    {
      "id": 3,
      "title": "Jogo dos Tronos",
      "author": "George R.R. Martin",
      "description": "Um livro muito legal...",
      "published_date": new Date("1988-08-29"),
      "price": 59.99
    },
    {
      "id": 4,
      "title": "Hábitos Atômicos",
      "author": "James Clear",
      "description": "Um livro muito legal...",
      "published_date": new Date("1988-08-29"),
      "price": 39.99
    },
  ]
}
