import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorComponent } from './components/pages/colaborator/colaborator.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LinksComponent } from './components/pages/links/links.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SpecialtiesComponent } from './components/pages/specialties/specialties.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colaborator', component: ColaboratorComponent },
  { path: 'links', component: LinksComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'specialties', component: SpecialtiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
