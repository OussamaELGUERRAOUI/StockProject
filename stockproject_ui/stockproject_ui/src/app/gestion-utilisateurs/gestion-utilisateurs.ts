import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-utilisateurs',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-utilisateurs.html',
  styleUrls: ['./gestion-utilisateurs.css']
})
export class GestionUtilisateursComponent implements OnInit {
  utilisateurs: any[] = [];
  nouvelUtilisateur: any = {
    nom: '',
    prenom: '',
    email: '',
    depot: '',
    etat_utilisateur: 'normal'
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.chargerUtilisateurs();
  }

  chargerUtilisateurs() {
    this.userService.getUtilisateurs().subscribe(data => {
      console.log(data)
      this.utilisateurs = data;
    });
  }

  ajouterUtilisateur() {
    const userData = { ...this.nouvelUtilisateur };
    this.userService.ajouterUtilisateur(userData).subscribe({
      next: (res) => {
        const newUser = { ...userData, mot_de_passe: res.mot_de_passe };
        this.utilisateurs.push(newUser);
        this.nouvelUtilisateur = {
          nom: '',
          prenom: '',
          email: '',
          depot: '',
          etat_utilisateur: 'normal'
        };
      },
      error: (err) => {
        alert('Erreur : ' + (err?.error?.message || 'Une erreur est survenue.'));
      }
    });
  }

  modifierUtilisateur(index: number, field: string, value: string) {
    this.utilisateurs[index][field] = value;
   
  }
  
  tousChampsRenseignes(): boolean {
  const u = this.nouvelUtilisateur;
  return !!u.nom && !!u.prenom && !!u.email && !!u.depot && !!u.etat_utilisateur;
}
}
