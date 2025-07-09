import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs';
import { Formulaire } from './formulaire/formulaire';
import { Forecast } from './forecast/forecast';
import { Stock } from './stock/stock';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestion_utilisateur', component: GestionUtilisateursComponent },
  { path: 'formulaire', component: Formulaire },
  { path: 'forecast', component: Forecast },
  { path: 'stock', component: Stock },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
