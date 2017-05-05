import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { flatMap } from 'lodash';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'scro-app',
    templateUrl: './app/components/box-events/scrollbar-box.html'
})

export class ScrollBarBoxComponent {
    tasks: Task[];

  private cache = [];
  private pageByManual$ = new BehaviorSubject(1);
  private itemHeight = 40;
  private numberOfItems = 10;

    constructor(private taskService: TaskService, private http: Http, private route: ActivatedRoute, private router: Router){
      this.taskService.getTasks()
        .subscribe(tasks =>{
          this.tasks= tasks;
        });
    }

      onScrollDown(event) {
	    console.log('scrolled down!!', event);
	}

	   onScrollUp () {
    	console.log('scrolled up!!');
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
          return this.http.get('https://swapi.co/api/people?page=1')
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


    getInitials(input): any{
    var canvas = document.createElement('canvas');
             canvas.style.display = 'none';
             canvas.width = 170;
             canvas.height = 150;
             document.body.appendChild(canvas);
             var context = canvas.getContext('2d');
             context.fillStyle = "#fff";
             context.fillRect(0, 0, canvas.width, canvas.height);
             context.font = "32px Arial";
             context.fillStyle = "#003A6A";
             context.textAlign= "center";
             var first;
             if(input.indexOf(' ') !== -1){
                   var inputPieces,i, name;

                   input = input.toLowerCase();
                   inputPieces = input.split(' ');
                   name= '';

                   for(i = 0; i < inputPieces.length; i++){
                     inputPieces[i] = this.capitalizeString(inputPieces[i]);
                     name+= inputPieces[i];
                   }
                   var initials = name.toString();
                   context.fillText(initials.toUpperCase(), 50, 55);
                   var data = canvas.toDataURL();
                   document.body.removeChild(canvas);
                   return data;
                 }
                 else {
                   return false;
                 }
              }

              capitalizeString(inputString): string{
      return inputString.substring(0,1).toUpperCase();
    }
}
