"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var city_list_component_1 = require("./city-list/city-list.component");
var box_event_component_1 = require("./box-events/box-event.component");
var school_detail_component_1 = require("./school_detail/school-detail.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var main_navigation_menu_module_1 = require("../home_navigation/main-navigation-menu.module");
var dashboard_service_1 = require("./services/dashboard.service");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule, dashboard_routing_module_1.DashboardRoutingModule, main_navigation_menu_module_1.MainNavigationMenuModule],
        declarations: [dashboard_component_1.DashboardComponent, city_list_component_1.CityListComponent, box_event_component_1.ScrollBarBoxComponent, school_detail_component_1.SchoolDetailComponent],
        exports: [dashboard_component_1.DashboardComponent, city_list_component_1.CityListComponent, box_event_component_1.ScrollBarBoxComponent, school_detail_component_1.SchoolDetailComponent],
        providers: [dashboard_service_1.DashboardService]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map