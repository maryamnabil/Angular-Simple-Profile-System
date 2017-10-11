"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var newservice_service_1 = require("./newservice.service");
describe('NewserviceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [newservice_service_1.NewserviceService]
        });
    });
    it('should be created', testing_1.inject([newservice_service_1.NewserviceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=newservice.service.spec.js.map