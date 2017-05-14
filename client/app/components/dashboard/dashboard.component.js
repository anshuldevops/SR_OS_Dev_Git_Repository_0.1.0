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
var http_1 = require("@angular/http");
var task_service_1 = require("../../services/task.service");
require("rxjs/add/operator/switchMap");
var DashboardComponent = (function () {
    function DashboardComponent(http) {
        this.http = http;
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dash-app',
        template: '<filter-app>Loading...</filter-app><scro-app>Loading...</scro-app>',
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map