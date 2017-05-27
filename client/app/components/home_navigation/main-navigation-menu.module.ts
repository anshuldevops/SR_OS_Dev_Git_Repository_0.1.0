import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainNavigationMenuComponent } from './main-navigation-menu.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, CommonModule, RouterModule ],
  declarations: [ MainNavigationMenuComponent ],
  exports: [ MainNavigationMenuComponent ]
})

export class MainNavigationMenuModule {}
