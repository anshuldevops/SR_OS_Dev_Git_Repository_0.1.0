import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavigationMenuComponent } from './main-navigation-menu.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, RouterModule ],
  declarations: [ MainNavigationMenuComponent ],
  exports: [ MainNavigationMenuComponent ]
})

export class MainNavigationMenuModule {}
