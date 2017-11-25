import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DashboardService } from './services/dashboard.service';
import { SchoolData } from './models/schooldata.model';

@Injectable()

export class SchoolResolve implements Resolve<SchoolData[]> {

  constructor(private dashboardService: DashboardService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<SchoolData[]>{
    return this.dashboardService.getSchool(route.paramMap.get('id'));
  }
}
