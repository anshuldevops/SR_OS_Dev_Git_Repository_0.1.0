import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { CityListComponent } from './city-list/city-list.component';
import { ScrollBarBoxComponent } from './box-events/box-event.component';
import { SchoolDetailComponent } from './school_detail/school-detail.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainNavigationMenuModule } from '../home_navigation/main-navigation-menu.module';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, HttpModule, RouterModule, DashboardRoutingModule, MainNavigationMenuModule ],
  declarations: [ DashboardComponent, CityListComponent, ScrollBarBoxComponent, SchoolDetailComponent],
  exports:      [ DashboardComponent, CityListComponent, ScrollBarBoxComponent, SchoolDetailComponent ],
  providers:    [ DashboardService]
})

export class DashboardModule { }
