import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getUtilisateurs() {
    return this.http.get<any[]>(`${this.API_URL}/utilisateurs/`);
  }

  ajouterUtilisateur(user: any) {
    return this.http.post<{ mot_de_passe: string }>(`${this.API_URL}/utilisateurs/creer/`, user);
  }
}
