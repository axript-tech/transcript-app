import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-sections/page-not-found/page-not-found.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent},
  //{ path: '**', component: PageNotFoundComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)//canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
