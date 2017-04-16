import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { MainNavigationMenuComponent } from './components/home_navigation/main-navigation-menu.component';
import { ScrollBarBoxComponent } from './components/box-events/box-event.component';
import { SchoolDetailComponent } from './components/school_detail/school-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes= [
  { path: 'school', component: SchoolDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, HttpModule, InfiniteScrollModule, RouterModule.forRoot(appRoutes)],
  exports:      [ RouterModule ],
  declarations: [ AppComponent, CityListComponent, MainNavigationMenuComponent, ScrollBarBoxComponent, PageNotFoundComponent, SchoolDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
