import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.html',
  imports: [CommonModule, FormsModule]
})
export class AccueilComponent {
  data: any[] = [];
  columns: string[] = ['SEGMENT', 'FORMAT', 'CODE', 'FLAVOR', 'PLANT'];
  filters: { [key: string]: string } = {};
  showFilter: { [key: string]: boolean } = {}; // pour afficher/masquer chaque champ

  constructor() {
    this.filters = this.columns.reduce((acc, col) => ({ ...acc, [col]: '' }), {});
    this.showFilter = this.columns.reduce((acc, col) => ({ ...acc, [col]: false }), {});
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

      this.data = jsonData.map((row: any) =>
        this.columns.reduce((obj: any, col) => ({ ...obj, [col]: row[col] ?? '' }), {})
      );
    };
    reader.readAsArrayBuffer(file);
  }

  filteredData(): any[] {
    return this.data.filter(row =>
      this.columns.every(col =>
        !this.filters[col] || (row[col] + '').toLowerCase().includes(this.filters[col].toLowerCase())
      )
    );
  }

  toggleFilter(col: string) {
    this.showFilter[col] = !this.showFilter[col];
  }

  openFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.click();
  }
}
