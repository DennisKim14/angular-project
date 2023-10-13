import {NgModule} from '@angular/core';
import {JoinComponent} from './join/join.component';
import {AccountRoutingModule} from "./account-routing.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    AccountRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  declarations: [
    JoinComponent,
    LoginComponent,
  ],
})
export class AccountModule {
}