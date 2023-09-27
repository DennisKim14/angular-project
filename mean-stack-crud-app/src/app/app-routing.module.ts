import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { LoginComponent } from './components/account/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [authGuard], children: [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'create-employee', component: EmployeeCreateComponent },
    { path: 'edit-employee/:id', component: EmployeeEditComponent },
    { path: 'employees-list', component: EmployeeListComponent },
  ]},
  { path: 'login', component: LoginComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }