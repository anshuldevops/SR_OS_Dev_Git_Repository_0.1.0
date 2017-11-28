import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SchoolDetailComponent } from './school_detail/school-detail.component';
import { SchoolResolve } from './school.resolve';
import { PageNotFoundComponent } from '../../../app/page-not-found.component';

const dashboardRoutes: Routes = [

  {
   path: '',
   component: DashboardComponent
  },
  {
    path: 'school', component: SchoolDetailComponent,
    children: [
      {
      path: ':id',
      component : SchoolDetailComponent
    }
    ],
    resolve: {
      school: SchoolResolve
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ SchoolResolve ]
})

export class DashboardRoutingModule{ }
