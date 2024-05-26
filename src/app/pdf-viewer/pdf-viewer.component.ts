import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent {
  constructor(public _sanitizer: DomSanitizer) {}
  pdfUrl!: string;
  urlSafe!: SafeHtml;
  pdfPages: any[] = [];
  ngOnInit() {
    this.pdfUrl='file:///C:/Users/hharik01/Downloads/HITESH_CV_2024.pdf';
    this.loadPdf();
  }
  loadPdf() {
    this.urlSafe = this._sanitizer.bypassSecurityTrustHtml(this.pdfUrl);
  }
}
