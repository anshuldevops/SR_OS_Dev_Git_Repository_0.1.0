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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var lodash_1 = require("lodash");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var ScrollBarBoxComponent = (function () {
    function ScrollBarBoxComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.cache = [];
        this.pageByManual$ = new Rx_1.BehaviorSubject(1);
        this.itemHeight = 40;
        this.numberOfItems = 10;
        this.pageByScroll$ = Rx_1.Observable.fromEvent(window, "scroll")
            .map(function () { return window.scrollY; })
            .filter(function (current) { return current >= document.body.clientHeight - window.innerHeight; })
            .debounceTime(200)
            .distinct()
            .map(function (y) { return Math.ceil((y + window.innerHeight) / (_this.itemHeight * _this.numberOfItems)); });
        this.pageByResize$ = Rx_1.Observable
            .fromEvent(window, "resize")
            .debounceTime(200)
            .map(function (_) { return Math.ceil((window.innerHeight + document.body.scrollTop) / (_this.itemHeight * _this.numberOfItems)); });
        this.pageToLoad$ = Rx_1.Observable
            .merge(this.pageByManual$, this.pageByScroll$, this.pageByResize$)
            .distinct()
            .filter(function (page) { return _this.cache[page - 1] === undefined; });
        this.loading = false;
        this.itemResults$ = this.pageToLoad$
            .do(function (_) { return _this.loading = true; })
            .flatMap(function (page) {
            return _this.http.get('http://localhost:3000/api/tasks?limit=5')
                .map(function (resp) { return resp.json().results; })
                .do(function (resp) {
                _this.cache[page - 1] = resp;
                _this.loading = false;
                if ((_this.itemHeight * _this.numberOfItems * page) < window.innerHeight) {
                    _this.pageByManual$.next(page + 1);
                }
            });
        })
            .map(function (_) { return lodash_1.flatMap(_this.cache); });
    }
    return ScrollBarBoxComponent;
}());
ScrollBarBoxComponent = __decorate([
    core_1.Component({
        selector: 'scro-app',
        templateUrl: './app/components/dashboard/box-events/scrollbar-box.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], ScrollBarBoxComponent);
exports.ScrollBarBoxComponent = ScrollBarBoxComponent;
//# sourceMappingURL=box-event.component.js.map