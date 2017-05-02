"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var school_detail_component_1 = require("./components/school_detail/school-detail.component");
var page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
var appRoutes = [
    { path: 'school', component: school_detail_component_1.SchoolDetailComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.mainRoutingProviders = [];
exports.AppRoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map