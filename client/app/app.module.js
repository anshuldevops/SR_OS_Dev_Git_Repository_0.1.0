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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var city_list_component_1 = require("./components/city-list/city-list.component");
var main_navigation_menu_component_1 = require("./components/home_navigation/main-navigation-menu.component");
var box_event_component_1 = require("./components/box-events/box-event.component");
var school_detail_component_1 = require("./components/school_detail/school-detail.component");
var page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var root_component_1 = require("./root.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, app_routing_module_1.mainRoutingProviders],
        declarations: [app_component_1.AppComponent, city_list_component_1.CityListComponent, main_navigation_menu_component_1.MainNavigationMenuComponent, box_event_component_1.ScrollBarBoxComponent, page_not_found_component_1.PageNotFoundComponent, school_detail_component_1.SchoolDetailComponent, root_component_1.RootComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map