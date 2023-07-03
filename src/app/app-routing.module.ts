import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee/components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
