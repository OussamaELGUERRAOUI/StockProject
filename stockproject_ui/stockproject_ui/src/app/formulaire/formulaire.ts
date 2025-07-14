import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/formualire';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

interface Produit {
  CODE: number;
  FLAVOR: string;
}

interface Format {
  format: string;
  produits: Produit[];
}

interface SegmentData {
  segment: string;
  formats: Format[];
}

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './formulaire.html',
  styleUrls: ['./formulaire.css']
})
export class Formulaire implements OnInit {
  form!: FormGroup;
  data: SegmentData[] = [];

  selectedFormats: Format[] = [];
  selectedProduits: Produit[] = [];

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.getProduits().subscribe((res) => {
      this.data = res;
      this.loading = false;
      this.cdr.detectChanges(); // important pour éviter ExpressionChangedAfterItHasBeenCheckedError
    });

    this.form = this.fb.group({
      segment: ['', Validators.required],
      format: [{ value: '', disabled: true }, Validators.required],
      code: [{ value: '', disabled: true }, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });

    this.form.get('segment')?.valueChanges.subscribe(segment => {
      const selectedSegment = this.data.find(s => s.segment === segment);
      this.selectedFormats = selectedSegment ? selectedSegment.formats : [];

      const formatCtrl = this.form.get('format');
      const codeCtrl = this.form.get('code');

      if (this.selectedFormats.length) formatCtrl?.enable();
      else formatCtrl?.disable();

      formatCtrl?.reset();
      codeCtrl?.disable();
      codeCtrl?.reset();
      this.selectedProduits = [];
    });

    this.form.get('format')?.valueChanges.subscribe(format => {
      const segment = this.form.get('segment')?.value;
      const selectedSegment = this.data.find(s => s.segment === segment);
      const selectedFormat = selectedSegment?.formats.find(f => f.format === format);
      this.selectedProduits = selectedFormat ? selectedFormat.produits : [];

      const codeCtrl = this.form.get('code');
      if (this.selectedProduits.length) codeCtrl?.enable();
      else codeCtrl?.disable();

      codeCtrl?.reset();
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(' Données soumises :', this.form.value);
    }
  }
}
