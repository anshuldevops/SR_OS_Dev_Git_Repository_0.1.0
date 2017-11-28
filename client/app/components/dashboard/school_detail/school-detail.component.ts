import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SchoolData } from '../models/schooldata.model';

@Component({
  selector: 'schooldetail-app',
  templateUrl: './app/components/dashboard/school_detail/school-detail.html'
})

export class SchoolDetailComponent implements OnInit {

 schools: Observable<SchoolData[]>;

 constructor(private route: ActivatedRoute){}

 ngOnInit() {
  this.schools = this.route.data.pluck['school'];
  console.log(this.schools);
    }
 }
