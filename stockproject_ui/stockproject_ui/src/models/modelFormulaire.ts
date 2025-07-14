export interface Produit {
  CODE: number;
  FLAVOR: string;
}

export interface Format {
  format: string;
  produits: Produit[];
}

export interface SegmentData {
  segment: string;
  formats: Format[];
}
