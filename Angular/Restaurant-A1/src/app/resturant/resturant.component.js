"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResturantComponent = void 0;
const core_1 = require("@angular/core");
let ResturantComponent = class ResturantComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.click = true;
    }
    ngOnInit() {
    }
    resturant1() {
        this.click = false;
        this.router.navigate(['restaurant1']);
    }
    resturant2() {
        this.click = false;
        this.router.navigate(['restaurant2']);
    }
    resturant3() {
        this.click = false;
        this.router.navigate(['restaurant3']);
    }
};
ResturantComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-resturant',
        templateUrl: './resturant.component.html',
        styleUrls: ['./resturant.component.css']
    })
], ResturantComponent);
exports.ResturantComponent = ResturantComponent;
