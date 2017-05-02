import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<navmenu-app>Loading...</navmenu-app> <filter-app></filter-app> <scro-app></scro-app>',
  providers: [TaskService]
})

export class AppComponent {
  constructor(private http: Http){

  }
 }
