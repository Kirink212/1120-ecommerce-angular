import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BooksCatalogComponent } from './pages/books-catalog/books-catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BooksCatalogComponent],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello, {{ title }}</h1>

  //   <router-outlet />
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "it's me you're looking for...";

}
