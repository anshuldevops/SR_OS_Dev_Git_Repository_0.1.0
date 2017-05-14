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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var main_navigation_menu_module_1 = require("./components/home_navigation/main-navigation-menu.module");
var dashboard_module_1 = require("./components/dashboard/dashboard.module");
var about_module_1 = require("./components/about/about.module");
var contact_module_1 = require("./components/contact/contact.module");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var route_outlet_component_1 = require("./route-outlet.component");
var page_not_found_component_1 = require("./page-not-found.component");
var AppModule = (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, dashboard_module_1.DashboardModule, main_navigation_menu_module_1.MainNavigationMenuModule, about_module_1.AboutModule, contact_module_1.ContactModule, app_routing_module_1.AppRoutingModule, app_routing_module_1.mainRoutingProviders],
        declarations: [app_component_1.AppComponent, route_outlet_component_1.RouteOutletComponent, page_not_found_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map