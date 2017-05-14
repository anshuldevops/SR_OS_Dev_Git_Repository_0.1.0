import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes= [


  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const mainRoutingProviders: any[] = [];
export const AppRoutingModule = RouterModule.forRoot(appRoutes);
