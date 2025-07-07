import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccueilComponent } from './accueil/accueil.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs';
import { Accueil} from './accueil/accueil';
export const routes: Routes = [
  { path: 'gestion_utilisateur', component: GestionUtilisateursComponent },
  { path: 'accueil', component: Accueil },
  { path: '', component: Accueil },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
