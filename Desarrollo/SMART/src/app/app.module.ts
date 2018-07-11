// vendors

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

// components

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { PollsterComponent } from './pollster/pollster.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// services

import { AuthService } from './services/auth.service';
import { FieldService } from './services/field.service';
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
import { AdminComponent } from './admin/admin.component';
import { FieldManagementComponent } from './fields/field-management/field-management.component';
import { FieldListComponent } from './fields/field-list/field-list.component';
import { CompanyService } from './services/company.service';
import { QuestionService } from './services/question.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { FieldsComponent } from './fields/fields.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';



const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pollster', component: PollsterComponent},
  {path: 'field', component: PollsterPickComponent},
  {path: 'residential', component: ResidentialComponent},
  {path: 'pyme', component: PymeComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'admin/dashboard/roles', component: RolesComponent},
  {path: 'admin/dashboard/fields', component: FieldsComponent},
  {path: 'admin/companies', component: CompanyComponent}

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
    AdminComponent,
    FieldManagementComponent,
    FieldListComponent,
    DashboardComponent,
    RolesComponent,
    FieldsComponent,
    CompanyComponent,
    CompanyListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ 
    AuthService, 
    FieldService, 
    CompanyService,
    QuestionService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
