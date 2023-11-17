import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';


import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UserComponent } from '../MyComponents/user/user.component';
import { VoterListComponent } from '../MyComponents/voter-list/voter-list.component';
import { VoterDetailsComponent } from '../MyComponents/voter-details/voter-details.component';
import { AdminDashboardTracComponent } from '../MyComponents/admin-dashboard-trac/admin-dashboard-trac.component';
import { EvmTrackingComponent } from '../MyComponents/evm-tracking/evm-tracking.component';
import { EvmjhalawarComponent } from '../MyComponents/evmjhalawar/evmjhalawar.component';
import { EvmdagComponent } from '../MyComponents/evmdag/evmdag.component';
import { EvmkhanpurComponent } from '../MyComponents/evmkhanpur/evmkhanpur.component';
import { EvmmanoharthanaComponent } from '../MyComponents/evmmanoharthana/evmmanoharthana.component';
import { EvmdialogComponent } from '../MyComponents/evmdialog/evmdialog.component';
@NgModule({
  declarations: [
    UserComponent,
    VoterListComponent,
    VoterDetailsComponent,
    AdminDashboardTracComponent,
    EvmTrackingComponent,
    EvmjhalawarComponent,
    EvmdagComponent,
    EvmmanoharthanaComponent,
    EvmkhanpurComponent,
    EvmdialogComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CanvasJSAngularChartsModule
  ]
})
export class UserModule { }
