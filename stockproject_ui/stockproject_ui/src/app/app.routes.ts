import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs';
import { Formulaire } from './formulaire/formulaire';
import { Forecast } from './forecast/forecast';
import { Stock } from './stock/stock';
import { PagePepsi } from './pages/page-pepsi';
export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestion_utilisateur', component: GestionUtilisateursComponent },
  { path: 'formulaire', component: Formulaire },
  { path: 'forecast', component: Forecast },
  { path: 'stock', component: Stock },
  { path: 'pepsi', loadComponent: () => import('./pages/page-pepsi').then(m => m.PagePepsi) },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];
