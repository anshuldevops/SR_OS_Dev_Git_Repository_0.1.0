import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SchoolDetailComponent } from './school_detail/school-detail.component';

const dashboardRoutes: Routes = [

  {
   path: '',
   component: DashboardComponent
  },
  {
    path: 'school/:id',
    component: SchoolDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule{ }
