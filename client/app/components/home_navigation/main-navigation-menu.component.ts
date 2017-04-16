import { Component } from '@angular/core';

@Component({
  selector: 'navmenu-app',
  templateUrl: './app/components/home_navigation/main-navigation-menu.html'
})

export class MainNavigationMenuComponent {
  navMenu: string[];
  constructor() {
    this.navMenu = ['Home','About School Rankings', 'Contact'];
    }
}
