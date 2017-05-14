import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { TaskService } from '../../services/task.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'dash-app',
  template: '<filter-app>Loading...</filter-app><scro-app>Loading...</scro-app>',
  providers: [TaskService]
})

export class DashboardComponent{
 constructor(private http: Http){
 }
}
