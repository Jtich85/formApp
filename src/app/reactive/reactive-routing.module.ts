import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import BasicPageComponent from './pages/BasicPage/BasicPage.component';
import { DynamicPageComponent } from './DynamicPage/DynamicPage.component';
import { SwitchesPagesComponent } from './SwitchesPages/SwitchesPages.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicPageComponent },
      { path: 'dynamic', component: DynamicPageComponent },
      { path: 'switches', component: SwitchesPagesComponent },
      { path: '**', redirectTo: 'basic' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
