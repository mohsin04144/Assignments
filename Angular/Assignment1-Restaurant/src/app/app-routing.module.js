"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const admin_component_1 = require("./admin/admin.component");
const menu_component_1 = require("./menu/menu.component");
const resturant_component_1 = require("./resturant/resturant.component");
const resturant1_component_1 = require("./resturant1/resturant1.component");
const resturant2_component_1 = require("./resturant2/resturant2.component");
const resturant3_component_1 = require("./resturant3/resturant3.component");
const routes = [
    { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'restaurant', component: resturant_component_1.ResturantComponent },
    { path: 'restaurant1', component: resturant1_component_1.Resturant1Component },
    { path: 'restaurant2', component: resturant2_component_1.Resturant2Component },
    { path: 'restaurant3', component: resturant3_component_1.Resturant3Component },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
