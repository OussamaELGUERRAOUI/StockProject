import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getProduits() {
    return this.http.get<any[]>(`${this.API_URL}/produits/`);
  }

}
