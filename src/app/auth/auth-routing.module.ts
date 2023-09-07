import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-sections/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './pages/recoverpassword/recoverpassword.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent },
      { path: 'fpassword', component: ForgotpasswordComponent },
      { path: 'recover-password', component: RecoverpasswordComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
  //{ path: '**', component: PageNotFoundComponent },
  //{ path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
