import { Routes } from '@angular/router';

import { BooksCatalogComponent } from './pages/books-catalog/books-catalog.component';
import { BookCreateComponent } from './pages/book-create/book-create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BooksCatalogComponent,
    // children: [
    //   { path: 'create', component: BookCreateComponent },
    //   { path: 'update/:id', component: BookCreateComponent },
    // ]
  },
  { path: 'books/create', component: BookCreateComponent },
  { path: 'books/update/:id', component: BookCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "books", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
