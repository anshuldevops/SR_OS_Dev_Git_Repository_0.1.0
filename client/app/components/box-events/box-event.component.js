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
var core_1 = require('@angular/core');
var task_service_1 = require('../../services/task.service');
var ScrollBarBoxComponent = (function () {
    function ScrollBarBoxComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    ScrollBarBoxComponent.prototype.onScrollDown = function () {
        console.log('scrolled down!!');
    };
    ScrollBarBoxComponent.prototype.onScrollUp = function () {
        console.log('scrolled up!!');
    };
    ScrollBarBoxComponent.prototype.getInitials = function (input) {
        var canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.width = 170;
        canvas.height = 150;
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        context.fillStyle = "#003A6A";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = "32px Arial";
        context.fillStyle = "#fff";
        context.textAlign = "center";
        var first;
        if (input.indexOf(' ') !== -1) {
            var inputPieces, i, name;
            input = input.toLowerCase();
            inputPieces = input.split(' ');
            name = '';
            for (i = 0; i < inputPieces.length; i++) {
                inputPieces[i] = this.capitalizeString(inputPieces[i]);
                name += inputPieces[i];
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
    };
    ScrollBarBoxComponent.prototype.capitalizeString = function (inputString) {
        return inputString.substring(0, 1).toUpperCase();
    };
    ScrollBarBoxComponent = __decorate([
        core_1.Component({
            selector: 'scro-app',
            templateUrl: './app/components/box-events/scrollbar-box.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], ScrollBarBoxComponent);
    return ScrollBarBoxComponent;
}());
exports.ScrollBarBoxComponent = ScrollBarBoxComponent;
//# sourceMappingURL=box-event.component.js.map