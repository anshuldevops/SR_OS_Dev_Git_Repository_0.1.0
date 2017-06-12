import { Component, ElementRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { Http } from '@angular/http';

@Component({
  selector: 'navmenu-app',
  host: {
      '(document:click)': 'handleClick($event)',
  },
  templateUrl: './app/components/home_navigation/main-navigation-menu.html',
  providers: [TaskService]
})

export class MainNavigationMenuComponent {
  public query = '';
  public schools = ["Blue Ridge International Public School", "Akshara International School", "D.A.V. Public School"];
  public filteredList = [];
  public elementRef;
  selectedIdx: number;

  navMenu: string[];
  constructor(myElement: ElementRef, private taskService: TaskService) {
    this.navMenu = ['Home','School Rankings', 'Contact'];
    this.elementRef = myElement;
    this.selectedIdx = -1;
    console.log(taskService.getTasks());
    }

    filter(event: any) {
        if (this.query !== "") {
            this.filteredList = this.schools.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        } else {
            this.filteredList = [];
        }
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
        this.selectedIdx = -1;
    }
}
