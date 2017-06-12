import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { flatMap } from 'lodash';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'scro-app',
    templateUrl: './app/components/dashboard/box-events/scrollbar-box.html'
})


export class ScrollBarBoxComponent {

  private cache = [];
  private pageByManual$ = new BehaviorSubject(1);
  private itemHeight = 40;
  private numberOfItems = 10;

    constructor(private http: Http, private route: ActivatedRoute, private router: Router){
    }

    private pageByScroll$ = Observable.fromEvent(window, "scroll")
          .map(() => window.scrollY)
          .filter(current => current >=  document.body.clientHeight - window.innerHeight)
          .debounceTime(200)
          .distinct()
          .map(y => Math.ceil((y + window.innerHeight)/ (this.itemHeight * this.numberOfItems)));

      private pageByResize$ = Observable
        .fromEvent(window, "resize")
        .debounceTime(200)
        .map(_ => Math.ceil((window.innerHeight + document.body.scrollTop) / (this.itemHeight * this.numberOfItems)));

      private pageToLoad$ = Observable
        .merge(this.pageByManual$, this.pageByScroll$, this.pageByResize$)
        .distinct()
        .filter(page => this.cache[page-1] === undefined)

      loading = false;
      itemResults$ = this.pageToLoad$
        .do(_ => this.loading = true)
        .flatMap((page: number) =>{
          return this.http.get('http://localhost:3000/api/tasks?limit=5')
              .map(resp => resp.json().results)
              .do(resp => {
                this.cache[page -1] = resp;
                this.loading = false;
                if((this.itemHeight * this.numberOfItems * page) < window.innerHeight){
                  this.pageByManual$.next(page + 1);
                }
              })
        })
        .map(_ => flatMap(this.cache));

}
