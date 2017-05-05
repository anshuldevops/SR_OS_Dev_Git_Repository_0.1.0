import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<navmenu-app> Loading... </navmenu-app> <filter-app> Loading... </filter-app> <scro-app> Loading... </scro-app> <root></root>',
  providers: [TaskService]
})

export class AppComponent {
  constructor(private http: Http){

  }
 }
