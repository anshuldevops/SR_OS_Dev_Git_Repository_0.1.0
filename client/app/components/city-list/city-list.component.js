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
var data_service_1 = require("./data-service");
var state_1 = require("./state");
var CityListComponent = (function () {
    function CityListComponent(_dataService) {
        this._dataService = _dataService;
        this.selectedState = new state_1.State(0, 'Maharashtra');
        this.states = this._dataService.getStates();
    }
    CityListComponent.prototype.onSelect = function (state_id) {
        this.cities = this._dataService.getCities().filter(function (item) { return item.state_id == state_id; });
    };
    CityListComponent.prototype.performSearch = function (name) {
    };
    return CityListComponent;
}());
CityListComponent = __decorate([
    core_1.Component({
        selector: 'filter-app',
        templateUrl: './app/components/city-list/searchable-sidebar.html',
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], CityListComponent);
exports.CityListComponent = CityListComponent;
//# sourceMappingURL=city-list.component.js.map