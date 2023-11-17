import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../MyComponents/admin/admin.component';
import { AdminVotersComponent } from '../MyComponents/admin-voters/admin-voters.component';
import { AdminVoterDetailsComponent } from '../MyComponents/admin-voter-details/admin-voter-details.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartComponent } from '../MyComponents/chart/chart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdminDashboardComponent } from '../MyComponents/admin-dashboard/admin-dashboard.component';
import { AdminDashboardTracComponent } from '../MyComponents/admin-dashboard-trac/admin-dashboard-trac.component';
import { TrackerComponent } from '../MyComponents/tracker/tracker.component';
import { TeamsTrackerComponent } from '../MyComponents/teams-tracker/teams-tracker.component';
import { TeamsComponent } from '../MyComponents/teams/teams.component';
import { EvmTrackingComponent } from '../MyComponents/evm-tracking/evm-tracking.component';
import { EvmjhalawarComponent } from '../MyComponents/evmjhalawar/evmjhalawar.component';
import { EvmdagComponent } from '../MyComponents/evmdag/evmdag.component';
import { EvmmanoharthanaComponent } from '../MyComponents/evmmanoharthana/evmmanoharthana.component';
import { EvmkhanpurComponent } from '../MyComponents/evmkhanpur/evmkhanpur.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminVotersComponent,
    AdminVoterDetailsComponent,
    ChartComponent,
    AdminDashboardComponent,
    TrackerComponent,
    TeamsTrackerComponent,
    TeamsComponent,
    


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CanvasJSAngularChartsModule,
    MatExpansionModule
  ]
})
export class AdminModule { }
