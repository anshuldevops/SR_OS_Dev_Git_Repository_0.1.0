import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


export class DashboardService {

  constructor(private http: Http){
  }

  loadEvents(){
    return this.http.get('http://localhost:3000/api/tasks?limit=5').map(res=> res.json());
  }
}
