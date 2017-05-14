import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { MainNavigationMenuModule } from '../home_navigation/main-navigation-menu.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [ BrowserModule, CommonModule, MainNavigationMenuModule, AboutRoutingModule ],
  declarations: [ AboutComponent ],
  exports: [ AboutComponent ]
})

export class AboutModule {}
