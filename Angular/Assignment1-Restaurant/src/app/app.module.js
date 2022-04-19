"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const admin_component_1 = require("./admin/admin.component");
const material_module_1 = require("./material/material.module");
const menu_component_1 = require("./menu/menu.component");
const resturant_component_1 = require("./resturant/resturant.component");
const dialog_box_component_1 = require("./dialog-box/dialog-box.component");
const resturant1_component_1 = require("./resturant1/resturant1.component");
const resturant2_component_1 = require("./resturant2/resturant2.component");
const resturant3_component_1 = require("./resturant3/resturant3.component");
const http_1 = require("@angular/common/http");
const login_component_1 = require("./login/login.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            admin_component_1.AdminComponent,
            menu_component_1.MenuComponent,
            resturant_component_1.ResturantComponent,
            dialog_box_component_1.DialogBoxComponent,
            resturant1_component_1.Resturant1Component,
            resturant2_component_1.Resturant2Component,
            resturant3_component_1.Resturant3Component,
            login_component_1.LoginComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            material_module_1.MaterialModule,
            forms_1.FormsModule,
            http_1.HttpClientModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
