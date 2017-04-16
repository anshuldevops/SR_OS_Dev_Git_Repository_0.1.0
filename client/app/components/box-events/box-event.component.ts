import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Directive, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'scro-app',
    templateUrl: './app/components/box-events/scrollbar-box.html'
})

export class ScrollBarBoxComponent {
    tasks: Task[];

    constructor(private taskService: TaskService){
      this.taskService.getTasks()
        .subscribe(tasks =>{
          this.tasks= tasks;
        });
    }

      onScrollDown () {
	    console.log('scrolled down!!');
	}

	   onScrollUp () {
    	console.log('scrolled up!!');
    }

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
