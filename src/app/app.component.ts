import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { BooksCatalogComponent } from './pages/books-catalog/books-catalog.component';
import { BooksCartComponent } from './components/books-cart/books-cart.component';
import { IBook } from './interfaces/book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    HeaderComponent,
    BooksCatalogComponent,
    BooksCartComponent
  ],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello, {{ title }}</h1>

  //   <router-outlet />
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "it's me you're looking for...";
  addedBooksList: IBook[] = [];

  addBookToCart(book: IBook) {
    this.addedBooksList.push(book);
  }
}
