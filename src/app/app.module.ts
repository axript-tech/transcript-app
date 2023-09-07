import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-sections/header/header.component';
import { SidebarComponent } from './page-sections/sidebar/sidebar.component';
import { ContentHeaderComponent } from './page-sections/content-header/content-header.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ManageTranscriptsComponent } from './pages/manage-transcripts/manage-transcripts.component';
import { ManagePaymentsComponent } from './pages/manage-payments/manage-payments.component';
import { ManageCollegesComponent } from './pages/manage-colleges/manage-colleges.component';
import { ManageDepartmentsComponent } from './pages/manage-departments/manage-departments.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RightbarComponent } from './page-sections/rightbar/rightbar.component';
import { PageNotFoundComponent } from './page-sections/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentHeaderComponent,
    ManageUsersComponent,
    SettingsComponent,
    ManageTranscriptsComponent,
    ManagePaymentsComponent,
    ManageCollegesComponent,
    ManageDepartmentsComponent,
    DashboardComponent,
    RightbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
