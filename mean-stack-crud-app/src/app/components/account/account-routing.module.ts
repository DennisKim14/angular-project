import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../account/login/login.component';
import { JoinComponent } from './join/join.component';

const accountRoutes: Routes = [
    {
      path: '',
      children: [
        {path: 'join', component: JoinComponent},
        {path: 'login', component: LoginComponent},
        {path: '**', redirectTo: 'login'}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }