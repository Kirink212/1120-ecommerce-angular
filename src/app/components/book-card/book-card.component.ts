import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book: IBook = {
    "id": 1,
    "title": "O Silêncio dos Inocentes",
    "author": "Thomas Harris",
    "description": "Um livro muito legal...",
    "published_date": new Date("1988-08-29"),
    "price": 59.99
  };
}
