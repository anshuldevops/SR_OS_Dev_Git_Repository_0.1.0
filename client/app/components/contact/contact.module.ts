import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from './contact-form.component';
import { ContactComponent } from './contact.component';
import { MainNavigationMenuModule } from '../home_navigation/main-navigation-menu.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [ BrowserModule, CommonModule, MainNavigationMenuModule, ContactRoutingModule ],
  declarations: [ContactFormComponent, ContactComponent],
  exports: [ContactFormComponent, ContactComponent]
})

export class ContactModule {}
