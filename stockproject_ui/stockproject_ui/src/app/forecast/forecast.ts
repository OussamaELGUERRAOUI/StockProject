import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forecast.html',
  styleUrls: ['./forecast.css']
})
export class Forecast {
  columns: string[] = []; // 👉 déclarée ici
  data: any[] = [];
  filters: { [key: string]: string } = {};
  showFilter: { [key: string]: boolean } = {};

  // Méthode utilisée dans le HTML
  filteredData(): any[] {
    if (!this.data.length) return [];

    return this.data.filter(row => {
      return this.columns.every(col => {
        const filterValue = this.filters[col];
        return !filterValue || (row[col] + '').toLowerCase().includes(filterValue.toLowerCase());
      });
    });
  }

  openFileInput(): void {
    const input = document.querySelector<HTMLInputElement>('input[type="file"]');
    if (input) input.click();
  }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = new Uint8Array(e.target?.result as ArrayBuffer);
        this.parseExcel(content);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  parseExcel(content: Uint8Array): void {
    import('xlsx').then(xlsx => {
      const workbook = xlsx.read(content, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = xlsx.utils.sheet_to_json(sheet);

      this.data = json;
      this.columns = Object.keys(json[0] || {});
      this.filters = {};
      this.showFilter = {};

      this.columns.forEach(col => {
        this.filters[col] = '';
        this.showFilter[col] = false;
      });
    });
  }

  toggleFilter(col: string): void {
    this.showFilter[col] = !this.showFilter[col];
  }
}
