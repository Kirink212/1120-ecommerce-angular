import { Component, Input } from '@angular/core';

import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-cart',
  standalone: true,
  imports: [ ],
  templateUrl: './books-cart.component.html',
  styleUrl: './books-cart.component.css'
})
export class BooksCartComponent {
  @Input() addedBooksList: IBook[] = [];
}
