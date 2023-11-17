import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../MyComponents/admin/admin.component';
import { AdminVotersComponent } from '../MyComponents/admin-voters/admin-voters.component';
import { AdminVoterDetailsComponent } from '../MyComponents/admin-voter-details/admin-voter-details.component';
import { AdminDashboardComponent } from '../MyComponents/admin-dashboard/admin-dashboard.component';
import { TrackerComponent } from '../MyComponents/tracker/tracker.component';
import { TeamsTrackerComponent } from '../MyComponents/teams-tracker/teams-tracker.component';
import { TeamsComponent } from '../MyComponents/teams/teams.component';
import { EvmTrackingComponent } from '../MyComponents/evm-tracking/evm-tracking.component';
import { EvmdagComponent } from '../MyComponents/evmdag/evmdag.component';
import { EvmjhalawarComponent } from '../MyComponents/evmjhalawar/evmjhalawar.component';
import { EvmmanoharthanaComponent } from '../MyComponents/evmmanoharthana/evmmanoharthana.component';
import { EvmkhanpurComponent } from '../MyComponents/evmkhanpur/evmkhanpur.component';
import { AdminDashboardTracComponent } from '../MyComponents/admin-dashboard-trac/admin-dashboard-trac.component';

const routes: Routes = [
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'adminVoters', component: AdminVotersComponent },
      { path: 'adminVoterList', component: AdminVoterDetailsComponent },
      { path: 'tracker', component: TrackerComponent },
      { path: 'teamsTracker', component: TeamsTrackerComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'evmdag', component: EvmdagComponent },
      { path: 'evmjhalawar', component: EvmjhalawarComponent },
      { path: 'evmkhanpur', component: EvmkhanpurComponent },
      { path: 'evmmanoharthana', component: EvmmanoharthanaComponent },
    ],
  },
  {
    path: 'admindashboardtrac',
    component: AdminDashboardTracComponent,
    children: [
      { path: 'evmtracking', component:EvmTrackingComponent },
      { path: 'adminVoters', component: AdminVotersComponent },
      { path: 'adminVoterList', component: AdminVoterDetailsComponent },
      { path: 'tracker', component: TrackerComponent },
      { path: 'teamsTracker', component: TeamsTrackerComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'evmdag', component: EvmdagComponent },
      { path: 'evmjhalawar', component: EvmjhalawarComponent },
      { path: 'evmkhanpur', component: EvmkhanpurComponent },
      { path: 'evmmanoharthana', component: EvmmanoharthanaComponent },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
