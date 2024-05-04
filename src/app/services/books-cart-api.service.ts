import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksCartApiService {

  API_URL: string = "https://crudcrud.com/api/06e0303204a2494891481d3e5b4eaa04/cart";

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<IBook[]>(this.API_URL);
  }
}
