import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.scss'],
})
export class PdfUploadComponent {
  constructor() {}
  pdfFile!: File;
  showErrorMessage: boolean = false;
  successfulMessage: boolean = false;

  onFileChange(event: any) {
    this.pdfFile = event.target.files[0];
  }
  uploadPdf() {
    //console.log('Uploaded PDF:', this.pdfFile);
    this.showErrorMessage = !this.showErrorMessage;
    this.successfulMessage = !this.successfulMessage;
    if (this.pdfFile == undefined) {
      this.showErrorMessage = true;
      this.successfulMessage = false;
    } else {
      this.successfulMessage = true;
      this.showErrorMessage = false;
    }
  }
}
