import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuComponent } from './components/SideMenu/SideMenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
