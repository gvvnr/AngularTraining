import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { MatTableModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {HomePageComponent} from './home-page/home-page.component';
const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},

  { path: 'doctorDetails/:id', component: DoctorDetailsComponent},
  { path: '**', component: PageNotfoundComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomePageComponent,
    DisplayComponent,
    PageNotfoundComponent,
    AdminLoginComponent,
    DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
