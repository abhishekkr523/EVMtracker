import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../MyComponents/admin/admin.component';
import { AdminVotersComponent } from '../MyComponents/admin-voters/admin-voters.component';
import { AdminVoterDetailsComponent } from '../MyComponents/admin-voter-details/admin-voter-details.component';
import { AdminDashboardComponent } from '../MyComponents/admin-dashboard/admin-dashboard.component';
import { TrackerComponent } from '../MyComponents/tracker/tracker.component';
import { TeamsTrackerComponent } from '../MyComponents/teams-tracker/teams-tracker.component';
import { TeamsComponent } from '../MyComponents/teams/teams.component';



const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'adminVoters', component: AdminVotersComponent },
      { path: 'adminVoterList', component: AdminVoterDetailsComponent },
      { path: 'tracker', component: TrackerComponent },
      { path: 'teamsTracker', component: TeamsTrackerComponent },
      { path: 'teams', component: TeamsComponent },
      
    ],
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
