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
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { PollsterPickComponent } from './pollster-pick/pollster-pick.component';
import { ResidentialComponent } from './residential/residential.component';
import { PymeComponent } from './pyme/pyme.component';
import { ResidentialFillupComponent } from './residential/residential-fillup/residential-fillup.component';
import { ResidentialQuestionsComponent } from './residential/residential-questions/residential-questions.component';
import { PymeFillupComponent } from './pyme/pyme-fillup/pyme-fillup.component';
import { PymeQuestionsComponent } from './pyme/pyme-questions/pyme-questions.component';



const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pollster', component: PollsterComponent},
  {path: 'field', component: PollsterPickComponent},
  {path: 'residential', component: ResidentialComponent},
  {path: 'pyme', component: PymeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    PollsterComponent,
    HomeComponent,
    LoginComponent,
    PollsterPickComponent,
    ResidentialComponent,
    PymeComponent,
    ResidentialFillupComponent,
    ResidentialQuestionsComponent,
    PymeFillupComponent,
    PymeQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
