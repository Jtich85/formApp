import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageComponent } from './pages/RegisterPage/RegisterPage.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
