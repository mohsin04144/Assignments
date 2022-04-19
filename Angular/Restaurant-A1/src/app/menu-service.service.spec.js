"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const menu_service_service_1 = require("./menu-service.service");
describe('MenuServiceService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(menu_service_service_1.MenuServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
