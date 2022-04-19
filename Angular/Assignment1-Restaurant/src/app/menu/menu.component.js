"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuComponent = void 0;
const core_1 = require("@angular/core");
const table_1 = require("@angular/material/table");
const dialog_box_component_1 = require("../dialog-box/dialog-box.component");
let MenuComponent = class MenuComponent {
    constructor(dialog, menuService) {
        this.dialog = dialog;
        this.menuService = menuService;
        this.ROLE = true;
        this.displayedColumns = ['position', 'name', 'price', 'edit', 'delete', 'assign'];
        this.displayedColumns1 = ['position', 'name', 'price'];
        this.displayedColumns2 = ['position', 'name', 'price', 'Order'];
        this.ownerState = false;
        this.adminState = false;
        this.userState = true;
    }
    ngOnInit() {
        this.dataSource = this.menuService.getDataSource();
        this.ownerState = this.menuService.isOwnerLogin();
        this.adminState = this.menuService.isAdminLogin();
        console.log(this.dataSource);
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(dialog_box_component_1.DialogBoxComponent, {
            width: '250px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.addRowData(result.data);
            }
            else if (result.event == 'Update') {
                this.updateRowData(result.data);
            }
            else if (result.event == 'Delete') {
                this.deleteRowData(result.data);
            }
        });
    }
    addRowData(row_obj) {
        this.dataSource.push(row_obj);
        this.table.renderRows();
    }
    updateRowData(row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            if (value.position == row_obj.position) {
                value.name = row_obj.name;
            }
            return true;
        });
    }
    deleteRowData(row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            return value.position != row_obj.position;
        });
    }
    postMenu1(element) {
        console.log(element);
        this.menuService.assignToRest1(element);
    }
    postMenu2(element) {
        console.log(element);
        this.menuService.assignToRest2(element);
    }
    postMenu3(element) {
        console.log(element);
        this.menuService.assignToRest3(element);
    }
};
__decorate([
    (0, core_1.ViewChild)(table_1.MatTable, { static: true })
], MenuComponent.prototype, "table", void 0);
MenuComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
