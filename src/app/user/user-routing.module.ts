import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../MyComponents/user/user.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'page1', component: Page1Component },
      // { path: 'page2', component: Page2Component },
      // Add more user-specific routes as needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
