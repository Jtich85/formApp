import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import BasicPageComponent from './pages/BasicPage/BasicPage.component';
import { DynamicPageComponent } from './DynamicPage/DynamicPage.component';
import { SwitchesPagesComponent } from './SwitchesPages/SwitchesPages.component';


@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
