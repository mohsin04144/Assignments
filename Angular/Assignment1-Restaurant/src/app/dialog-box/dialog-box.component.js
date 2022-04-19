"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogBoxComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
let DialogBoxComponent = class DialogBoxComponent {
    constructor(dialogRef, 
    //@Optional() is used to prevent error if no data is passed
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.local_data = data;
        this.action = this.local_data.action;
    }
    ngOnInit() {
    }
    doAction() {
        console.log(this.local_data);
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
DialogBoxComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-dialog-box',
        templateUrl: './dialog-box.component.html',
        styleUrls: ['./dialog-box.component.css']
    }),
    __param(1, (0, core_1.Optional)()),
    __param(1, (0, core_1.Inject)(dialog_1.MAT_DIALOG_DATA))
], DialogBoxComponent);
exports.DialogBoxComponent = DialogBoxComponent;
