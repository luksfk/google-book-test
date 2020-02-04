import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
