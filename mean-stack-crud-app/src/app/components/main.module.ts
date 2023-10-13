import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/basic/header/header.component';
import { FooterComponent } from '../components/basic/footer/footer.component';
import { MainComponent } from '../components/main.component';
import {MainRoutingModule} from '../components/main-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
