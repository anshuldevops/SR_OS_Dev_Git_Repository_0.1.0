import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
  constructor(private http: Http){
    console.log('Task Service Initialized...');
  }

  getTasks(){
    return this.http.get('http://localhost:3000/api/tasks')
      .map(res => res.json());
  }

  getRequest(){
  let headers= new Headers({'Content-Type': 'application/json'});
  let options= new RequestOptions({
    headers: headers,
    search: new URLSearchParams('city=Jodhpur')
  });

  return this.http.get('http://localhost:3000/api/tasks', options)
        .map(res => res.json().data);
  }
}
