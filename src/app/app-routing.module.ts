import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {MainPageComponent} from "./main-page/main-page.component";
import {ProfileComponent} from "./profile/profile.component";



const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component:HomeComponent},
  { path: '', component:HomeComponent},
  { path: 'profile/:id', component: ProfileComponent},
  {path: 'main', component: MainPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
