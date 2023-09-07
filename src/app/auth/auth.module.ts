import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HeaderComponent } from './page-sections/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './pages/recoverpassword/recoverpassword.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    RecoverpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
