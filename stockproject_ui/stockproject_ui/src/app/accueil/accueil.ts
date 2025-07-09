import { Component, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.html'
})
export class AccueilComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const firstSheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheet];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log("Données Excel :", jsonData);
    };

    reader.readAsArrayBuffer(file);
  }
}
