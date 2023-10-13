import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login' },
//   { path: 'create-employee', component: EmployeeCreateComponent },
//   { path: '', canActivate: [authGuard], children: [
//     { path: 'edit-employee/:id', component: EmployeeEditComponent },
//     { path: 'employees-list', component: EmployeeListComponent },
//   ]},
//   { path: 'login', component: LoginComponent }  
// ];

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'account', loadChildren: () => import('../components/account/account.module').then(m => m.AccountModule)},
      {path: 'employee', loadChildren: () => import('../components/employee/employee.module').then(m => m.EmployeeModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }