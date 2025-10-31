import {Routes} from '@angular/router';
import {FormationCatalogComponent} from './views/formation/formation-catalog/formation-catalog.component';
import {FormationCreationComponent} from './views/formation/formation-creation/formation-creation.component';
import {FormationDetailComponent} from './views/formation/formation-detail/formation-detail.component';
import {HomeComponent} from './views/home/home.component';
import {UserProfileComponent} from './views/components/user-profile/user-profile.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: FormationCatalogComponent},
  {path: 'create', component: FormationCreationComponent},
  {path: 'formation/:id', component: FormationDetailComponent},
  {path: 'profil', component: UserProfileComponent },

];
