"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuServiceService = void 0;
const core_1 = require("@angular/core");
let MenuServiceService = class MenuServiceService {
    constructor(http) {
        this.http = http;
        this.dataSource = [
            { position: 1, name: 'Tandoori Momos', price: 70 },
            { position: 2, name: 'Tandoori Ghobi Tikka', price: 80 },
            { position: 3, name: 'Tandoori Aloo', price: 80, },
            { position: 4, name: 'Tandoori Tikka', price: 100, },
            { position: 5, name: 'Tandoori Paneer Tikka', price: 110, },
            { position: 6, name: 'Soya Chaap', price: 120, },
            { position: 7, name: 'Veg Sizzler', price: 150, },
            { position: 8, name: 'Indian Sizzler', price: 160, },
            { position: 9, name: 'Chinese Sizzler', price: 160, },
            { position: 10, name: 'Veggie Burger', price: 40, },
        ];
        this.dataSourceMenu1 = [];
        this.dataSourceMenu2 = [];
        this.dataSourceMenu3 = [];
        this.adminstate = false;
        this.ownerState = false;
    }
    getDataSource() {
        return this.dataSource;
    }
    assignToRest1(obj) {
        this.dataSourceMenu1.push(obj);
    }
    assignToRest2(obj) {
        this.dataSourceMenu2.push(obj);
    }
    assignToRest3(obj) {
        this.dataSourceMenu3.push(obj);
    }
    getDataSourceRest1() {
        return this.dataSourceMenu1;
    }
    getDataSourceRest2() {
        return this.dataSourceMenu2;
    }
    getDataSourceRest3() {
        return this.dataSourceMenu3;
    }
    UpdateAdminState(state) {
        this.adminstate = state;
    }
    isAdminLogin() {
        return this.adminstate;
    }
    UpdateOwnerState(state) {
        this.ownerState = state;
    }
    isOwnerLogin() {
        return this.ownerState;
    }
};
MenuServiceService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], MenuServiceService);
exports.MenuServiceService = MenuServiceService;
