import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './MyComponents/user/user.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { VoterListComponent } from './MyComponents/voter-list/voter-list.component';
import { VoterDetailsComponent } from './MyComponents/voter-details/voter-details.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminVotersComponent } from './MyComponents/admin-voters/admin-voters.component';
import { TrackerComponent } from './MyComponents/tracker/tracker.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { PatanVotersComponent } from './MyComponents/patan-voters/patan-voters.component';
import { ChartComponent } from './MyComponents/chart/chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AdminVoterDetailsComponent } from './MyComponents/admin-voter-details/admin-voter-details.component';
import { AdminDashboardComponent } from './MyComponents/admin-dashboard/admin-dashboard.component';
import { TeamsTrackerComponent } from './MyComponents/teams-tracker/teams-tracker.component';

// import { AdminDashboardTracComponent } from './MyComponents/admin-dashboard-trac/admin-dashboard-trac.component';
// import { EvmjhalawarComponent } from './MyComponents/evmjhalawar/evmjhalawar.component';
// import { EvmdagComponent } from './MyComponents/evmdag/evmdag.component';
// import { EvmmanoharthanaComponent } from './MyComponents/evmmanoharthana/evmmanoharthana.component';
// import { EvmkhanpurComponent } from './MyComponents/evmkhanpur/evmkhanpur.component';
// import { EvmTrackingComponent } from './Mycomponent/evm-tracking/evm-tracking.component';
// import { TeamsComponent } from './MyComponents/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatanVotersComponent,
    // EvmdialogComponent,
    // AdminDashboardTracComponent,
    // EvmjhalawarComponent,
    // EvmdagComponent,
    // EvmmanoharthanaComponent,
    // EvmkhanpurComponent,
    // EvmTrackingComponent,
    // TeamsComponent
  ],
  imports: [
    UserModule,
    AdminModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
