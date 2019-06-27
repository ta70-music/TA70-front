import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';


import { HomeCarouselComponent } from './home-carousel/home-carousel.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserSuggestionComponent} from "./user-suggestion/user-suggestion.component";
import { MainPageComponent } from './main-page/main-page.component';
import { MusicListComponent } from './music-list/music-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LeftBarComponent } from './left-bar/left-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeCarouselComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    UserSuggestionComponent,
    MainPageComponent,
    MusicListComponent,
    LeftBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
