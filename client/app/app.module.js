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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var app_component_1 = require('./app.component');
var city_list_component_1 = require('./components/city-list/city-list.component');
var main_navigation_menu_component_1 = require('./components/home_navigation/main-navigation-menu.component');
var box_event_component_1 = require('./components/box-events/box-event.component');
var school_detail_component_1 = require('./components/school_detail/school-detail.component');
var page_not_found_component_1 = require('./components/page-not-found/page-not-found.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, angular2_infinite_scroll_1.InfiniteScrollModule, app_routing_module_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent, city_list_component_1.CityListComponent, main_navigation_menu_component_1.MainNavigationMenuComponent, box_event_component_1.ScrollBarBoxComponent, page_not_found_component_1.PageNotFoundComponent, school_detail_component_1.SchoolDetailComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map