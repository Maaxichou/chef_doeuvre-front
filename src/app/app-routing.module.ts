import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ExpoListComponent } from './expo-list/expo-list.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"expo-list", component: ExpoListComponent},
  {path:"authentification", component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
