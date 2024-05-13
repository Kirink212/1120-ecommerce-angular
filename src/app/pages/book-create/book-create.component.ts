import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IBook } from '../../interfaces/book.interface';
import { BooksCatalogService } from '../../services/books-catalog.service';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule ],
  providers: [ provideNativeDateAdapter() ],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent {
  private bookId: string;
  bookToUpdate?: IBook;
  booksList: IBook[] = [];
  bookForm: FormGroup;

  constructor(private booksCatalogService: BooksCatalogService, private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.params["id"];

    this.bookToUpdate = this.booksCatalogService.getBookById(this.bookId);
    console.log(this.bookToUpdate);

    this.bookForm = new FormGroup({
      title: new FormControl(this.bookToUpdate?.title || "Título Padrão"),
      author: new FormControl(this.bookToUpdate?.author || "Nome do Autor"),
      description: new FormControl(this.bookToUpdate?.description),
      published_date: new FormControl(this.bookToUpdate?.published_date),
      price: new FormControl(this.bookToUpdate?.price),
      totalInStock: new FormControl(this.bookToUpdate?.totalInStock)
    });

  }

  // changeTitleValue(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   this.newBook.title = target.value;
  //   console.log(this.newBook);
  // }

  submitForm() {
    const newBook: IBook = this.bookForm.value;
    this.booksCatalogService.createBook(newBook);
  }
}
