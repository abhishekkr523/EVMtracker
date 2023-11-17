import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../MyComponents/user/user.component';
import { LoginComponent } from '../login/login.component';
import { AdminDashboardTracComponent } from '../MyComponents/admin-dashboard-trac/admin-dashboard-trac.component';
import { EvmTrackingComponent } from '../MyComponents/evm-tracking/evm-tracking.component';
import { EvmjhalawarComponent } from '../MyComponents/evmjhalawar/evmjhalawar.component';
import { EvmdagComponent } from '../MyComponents/evmdag/evmdag.component';
import { EvmkhanpurComponent } from '../MyComponents/evmkhanpur/evmkhanpur.component';
import { EvmmanoharthanaComponent } from '../MyComponents/evmmanoharthana/evmmanoharthana.component';
import { EvmdialogComponent } from '../MyComponents/evmdialog/evmdialog.component';
const routes: Routes = [
  {
    path: '',
    component:  AdminDashboardTracComponent,
    children: [
      { path: '', component: EvmTrackingComponent},
      { path: 'evmjhalawar', component: EvmjhalawarComponent},
      { path: 'evmdag', component: EvmdagComponent },
      { path: 'evmkhanpur', component: EvmkhanpurComponent },
      { path: 'evmmanoharthana', component: EvmmanoharthanaComponent},
      // Add more user-specific routes as needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
