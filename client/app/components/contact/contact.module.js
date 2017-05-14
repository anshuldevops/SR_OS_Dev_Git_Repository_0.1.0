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
var contact_form_component_1 = require("./contact-form.component");
var contact_component_1 = require("./contact.component");
var main_navigation_menu_module_1 = require("../home_navigation/main-navigation-menu.module");
var contact_routing_module_1 = require("./contact-routing.module");
var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, main_navigation_menu_module_1.MainNavigationMenuModule, contact_routing_module_1.ContactRoutingModule],
        declarations: [contact_form_component_1.ContactFormComponent, contact_component_1.ContactComponent],
        exports: [contact_form_component_1.ContactFormComponent, contact_component_1.ContactComponent]
    })
], ContactModule);
exports.ContactModule = ContactModule;
//# sourceMappingURL=contact.module.js.map