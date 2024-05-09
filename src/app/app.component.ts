import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { BooksCatalogComponent } from './pages/books-catalog/books-catalog.component';
import { BooksCartComponent } from './components/books-cart/books-cart.component';
import { BookCreateComponent } from './pages/book-create/book-create.component';

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
    BooksCartComponent,
    BookCreateComponent
  ],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello, {{ title }}</h1>

  //   <router-outlet />
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = "it's me you're looking for...";
  addedBooksList: IBook[] = [];

  ngOnInit() {
    this.addedBooksList = JSON.parse(localStorage.getItem("addedBooksList") || "[]");
  }

  // findOrAddBook(book: IBook) {
  //   // Checando se o livro que estou buscando já está no carrinho
  //   for (let i=0; i<this.addedBooksList.length; i++) {
  //     const currBook = this.addedBooksList[i];
  //     if (book.id === currBook.id) {
  //       currBook.totalAddedToCart = (book.totalAddedToCart < book.totalInStock)? currBook.totalAddedToCart + 1 : currBook.totalAddedToCart;
  //       return;
  //     }
  //   }

  //   // Adicionando uma cópia de um novo livro ao carrinho
  //   book.totalAddedToCart = 1;
  //   this.addedBooksList.push(book);
  // }

  // addBookToCart(book: IBook) {
  //   // console.log("Deu bom, cria! O livro vai ser adicionado ao carrinho.");

  //   this.findOrAddBook(book);
  //   this.addedBooksList = [...this.addedBooksList]; // sobrescrevendo o array com uma cópia dele mesmo

  //   // console.log(this.addedBooksList);
  // }
}
