import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBook } from '../interfaces/book.interface';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksCartApiService {

  API_URL: string = "https://crudcrud.com/api/0094b25c416e42a287fd5755d376188c/cart";

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<IBook[]>(this.API_URL);
  }

  getBookById(bookId: string) {
    return this.http.get<IBook>(`${this.API_URL}/${bookId}`);
  }

  addOrUpdateBookFromCart(book?: IBook) {
    if (!book) return;

    this.getBookById(book._id)
      .subscribe({
        next: (book: IBook) => {
          book.totalAddedToCart = (book.totalAddedToCart < book.totalInStock)? book.totalAddedToCart + 1 : book.totalAddedToCart;
          this.updateBookOnCart(book).subscribe(() => {
            console.log("Atualização do total de livros no carrinho feita com sucesso");
          });
        },
        // error: (error) => console.log("TESTE", error)
      })

    // book.totalAddedToCart = 1;
  }

  addBookToCart(book?: IBook) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL, book, { headers });
  }

  updateBookOnCart(book: IBook) {
    const { _id: bookId, ...bookNoId } = book;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.API_URL}/${bookId}`, bookNoId, { headers });
  }
}
