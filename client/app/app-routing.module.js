"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./page-not-found.component");
var appRoutes = [
    {
        path: ' ',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.mainRoutingProviders = [];
exports.AppRoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map