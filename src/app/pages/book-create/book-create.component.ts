import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatDatepickerModule ],
  providers: [ provideNativeDateAdapter() ],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent {

}
