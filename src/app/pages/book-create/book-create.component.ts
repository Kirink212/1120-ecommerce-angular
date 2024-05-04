import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IBook } from '../../interfaces/book.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  booksList: IBook[] = [];
  bookForm: FormGroup;

  constructor(private booksCatalogService: BooksCatalogService) {
    this.bookForm = new FormGroup({
      title: new FormControl("Título padrão"),
      author: new FormControl(),
      description: new FormControl(),
      published_date: new FormControl(),
      price: new FormControl(),
      totalInStock: new FormControl()
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
