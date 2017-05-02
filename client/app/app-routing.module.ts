import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';

import { SchoolDetailComponent } from './components/school_detail/school-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes= [
  { path: 'school', component: SchoolDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

export const mainRoutingProviders: any[] = [];
export const AppRoutingModule = RouterModule.forRoot(appRoutes);
