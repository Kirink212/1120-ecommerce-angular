import { Routes } from '@angular/router';

import { BooksCatalogComponent } from './pages/books-catalog/books-catalog.component';
import { BookCreateComponent } from './pages/book-create/book-create.component';

export const routes: Routes = [
  { path: '', component: BooksCatalogComponent },
  { path: 'books/create', component: BookCreateComponent },
];
