import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SchoolData } from '../models/schooldata.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {

  constructor(private http: Http){}

  private apiUrl = 'http://localhost:3000/api/tasks';

  getSchool(id): Observable<SchoolData[]>{
    return this.http.get(this.apiUrl).map(res=> res.json());
  }

  getSchools(): Observable<SchoolData[]>{
    return this.http.get(this.apiUrl).map(res=> res.json());
  }

}
