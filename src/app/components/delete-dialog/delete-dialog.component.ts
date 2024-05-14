import { Component, Inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BooksCatalogService } from '../../services/books-catalog.service';

import { DialogData } from '../../interfaces/dialog-data.interface';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private booksCatalogService: BooksCatalogService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

  }

  closeDialog() {
    this.dialogRef.close();
  }

  removeFromCatalog() {
    this.booksCatalogService.deleteBook(this.data.bookId);
    this.closeDialog();
  }
}
