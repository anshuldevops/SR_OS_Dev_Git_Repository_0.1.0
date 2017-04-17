import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SchoolDetailComponent } from './components/school_detail/school-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes= [
  { path: 'school', component: SchoolDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes)],
  exports:      [ RouterModule ]

})
export class AppRoutingModule { }
