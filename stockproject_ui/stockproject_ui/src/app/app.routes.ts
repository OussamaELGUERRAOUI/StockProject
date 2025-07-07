import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccueilComponent } from './accueil/accueil.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs';
import { Accueil} from './accueil/accueil';
import {Formulaire} from './formulaire/formulaire'
export const routes: Routes = [
    { path: '', component: Accueil },
  { path: 'gestion_utilisateur', component: GestionUtilisateursComponent },
  { path: 'accueil', component: Accueil },
  { path: 'formualire', component: Formulaire },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
