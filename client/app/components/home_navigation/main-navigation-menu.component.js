"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("../../services/task.service");
var MainNavigationMenuComponent = (function () {
    function MainNavigationMenuComponent(myElement, taskService) {
        this.taskService = taskService;
        this.query = '';
        this.schools = ["Blue Ridge International Public School", "Akshara International School", "D.A.V. Public School"];
        this.filteredList = [];
        this.navMenu = ['Home', 'School Rankings', 'Contact'];
        this.elementRef = myElement;
        this.selectedIdx = -1;
        console.log(taskService.getTasks());
    }
    MainNavigationMenuComponent.prototype.filter = function (event) {
        if (this.query !== "") {
            this.filteredList = this.schools.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            }
            else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        }
        else {
            this.filteredList = [];
        }
    };
    MainNavigationMenuComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
        this.selectedIdx = -1;
    };
    MainNavigationMenuComponent.prototype.handleBlur = function () {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    };
    MainNavigationMenuComponent.prototype.handleClick = function (event) {
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
    };
    return MainNavigationMenuComponent;
}());
MainNavigationMenuComponent = __decorate([
    core_1.Component({
        selector: 'navmenu-app',
        host: {
            '(document:click)': 'handleClick($event)',
        },
        templateUrl: './app/components/home_navigation/main-navigation-menu.html',
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, task_service_1.TaskService])
], MainNavigationMenuComponent);
exports.MainNavigationMenuComponent = MainNavigationMenuComponent;
//# sourceMappingURL=main-navigation-menu.component.js.map