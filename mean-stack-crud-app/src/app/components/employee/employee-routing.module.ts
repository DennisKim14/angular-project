import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { authGuard } from 'src/app/core/guard/auth.guard';

const employeeRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'create-employee', component: EmployeeCreateComponent },
    { path: '', canActivate: [authGuard], children: [
        { path: 'edit-employee/:id', component: EmployeeEditComponent },
        { path: 'employees-list', component: EmployeeListComponent },
    ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }