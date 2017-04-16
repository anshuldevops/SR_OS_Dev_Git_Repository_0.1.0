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
var city_1 = require('./city');
var state_1 = require('./state');
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getStates = function () {
        return [
            new state_1.State(1, 'Maharashtra'),
            new state_1.State(2, 'Rajasthan')
        ];
    };
    DataService.prototype.getCities = function () {
        return [
            new city_1.City(1, 1, 'Mumbai'),
            new city_1.City(2, 1, 'Pune'),
            new city_1.City(3, 1, 'Nagpur'),
            new city_1.City(4, 1, 'Nashik'),
            new city_1.City(5, 1, 'Kolhapur'),
            new city_1.City(6, 2, 'Jodhpur'),
            new city_1.City(7, 2, 'Jaipur'),
            new city_1.City(8, 2, 'Udaipur'),
            new city_1.City(9, 2, 'Kota'),
            new city_1.City(10, 2, 'Barmer')
        ];
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map