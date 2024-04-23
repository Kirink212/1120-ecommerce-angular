import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-cart',
  standalone: true,
  imports: [ MatListModule, MatDividerModule ],
  templateUrl: './books-cart.component.html',
  styleUrl: './books-cart.component.css'
})
export class BooksCartComponent implements OnInit, OnChanges {
  @Input("booksList") addedBooksList: IBook[] = [];

  ngOnInit() {
    console.log(this.addedBooksList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addedBooksList);
  }
}
