"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const login_component_1 = require("./login/login.component");
let AppComponent = class AppComponent {
    constructor(router, dialog, menuService) {
        this.router = router;
        this.dialog = dialog;
        this.menuService = menuService;
        this.userState = false;
        this.role = "user";
        this.success = true;
    }
    onRest1() {
        this.router.navigate(["restaurant"]);
    }
    onHome() {
        this.router.navigate(["restaurant"]);
    }
    onMenu() {
        this.router.navigate(['menu']);
    }
    //logoutState=false;
    login() {
        const dialogRef = this.dialog.open(login_component_1.LoginComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.role = result.data;
            if (this.role === "admin") {
                this.success = false;
                this.menuService.UpdateAdminState(true);
                this.router.navigate(['admin']);
            }
            if (this.role === "owner") {
                this.success = false;
                this.menuService.UpdateOwnerState(true);
                this.router.navigate(['restaurant']);
            }
        });
    }
    logout() {
        this.success = true;
        this.menuService.UpdateAdminState(false);
        this.router.navigate(["restaurant"]);
    }
};
AppComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
