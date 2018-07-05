// vendors

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// components

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { PollsterComponent } from './pollster/pollster.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// services

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pollster', component: PollsterComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    PollsterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
