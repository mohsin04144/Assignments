"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const card_1 = require("@angular/material/card");
const grid_list_1 = require("@angular/material/grid-list");
const table_1 = require("@angular/material/table");
const dialog_1 = require("@angular/material/dialog");
const form_field_1 = require("@angular/material/form-field");
const input_1 = require("@angular/material/input");
const toolbar_1 = require("@angular/material/toolbar");
const icon_1 = require("@angular/material/icon");
const materialModule = [
    button_1.MatButtonModule,
    card_1.MatCardModule,
    grid_list_1.MatGridListModule,
    table_1.MatTableModule,
    dialog_1.MatDialogModule,
    form_field_1.MatFormFieldModule,
    input_1.MatInputModule,
    toolbar_1.MatToolbarModule,
    icon_1.MatIconModule
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    (0, core_1.NgModule)({
        exports: [materialModule],
        imports: [materialModule]
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
