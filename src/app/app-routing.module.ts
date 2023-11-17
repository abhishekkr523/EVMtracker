import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './MyComponents/user/user.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { VoterListComponent } from './MyComponents/voter-list/voter-list.component';
import { VoterDetailsComponent } from './MyComponents/voter-details/voter-details.component';
import { TrackerComponent } from './MyComponents/tracker/tracker.component';
import { AdminVotersComponent } from './MyComponents/admin-voters/admin-voters.component';
import { ChartComponent } from './MyComponents/chart/chart.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
// import { TeamsComponent } from './MyComponents/teams/teams.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'voter', component: VoterListComponent },
  { path: 'voterDetails', component: VoterDetailsComponent },
  { path: 'tracker', component: TrackerComponent },
  // { path: 'adminVoters', component: AdminVotersComponent },
  { path: 'chart', component: ChartComponent },
  // { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
