(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"motorapp\">\r\n  <header class=\"header\">\r\n    <h1>Motors</h1>\r\n    <div class=\"motor-data-container\">\r\n      <app-input-form [motor]=\"newMotor\">\r\n      </app-input-form>\r\n    </div>\r\n  </header>\r\n  <section class=\"main\" *ngIf=\"motors.length > 0\">\r\n      <div class=\"motor-data-container\" *ngFor=\"let motor of motors\">\r\n          <app-input-form [motor]=\"motor\">\r\n          </app-input-form>\r\n        </div>\r\n  </section>\r\n  <footer class=\"footer\" *ngIf=\"motors.length > 0\">\r\n    <span class=\"motor-count\"><strong>{{motors.length}}</strong> {{motors.length == 1 ? 'motor' : 'motors'}} </span>\r\n  </footer>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _motor_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motor-data.service */ "./src/app/motor-data.service.ts");
/* harmony import */ var _motor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motor */ "./src/app/motor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(motorDataService) {
        this.motorDataService = motorDataService;
        this.newMotor = new _motor__WEBPACK_IMPORTED_MODULE_2__["Motor"]();
    }
    Object.defineProperty(AppComponent.prototype, "motors", {
        get: function () {
            return this.motorDataService.getAllMotors();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_motor_data_service__WEBPACK_IMPORTED_MODULE_1__["MotorDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-form/input-form.component */ "./src/app/input-form/input-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_7__["InputFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/input-form/input-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/input-form/input-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expansion-panel-app {\r\n    margin: 18px;\r\n}"

/***/ }),

/***/ "./src/app/input-form/input-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/input-form/input-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel class=\"expansion-panel-app\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        {{ motor.id ? \"Motor\" + motor.id : \"Register new motor\"}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <mat-select placeholder=\"Number of Poles\" [(ngModel)]=\"motor.numberPoles\">\n        <mat-option></mat-option>\n        <mat-option *ngFor=\"let option of numberPolesOptions\" [value]=\"option\">{{option}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  \n    <mat-form-field>\n          <mat-select placeholder=\"Voltage\" [(ngModel)]=\"motor.voltage\">\n            <mat-option></mat-option>\n            <mat-option *ngFor=\"let option of voltageOptions\" [value]=\"option\">{{option}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  \n    <mat-form-field>\n          <mat-select placeholder=\"Duty Class\" [(ngModel)]=\"motor.dutyClass\">\n            <mat-option></mat-option>\n            <mat-option *ngFor=\"let option of dutyClassOptions\" [value]=\"option\">{{option}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  \n    <mat-form-field>\n      <input matInput placeholder=\"Rated Current\" type=\"number\" [(ngModel)]=\"motor.ratedCurrent\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <input matInput placeholder=\"Rated Power\" type=\"number\" [(ngModel)]=\"motor.ratedPower\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <input matInput placeholder=\"Maximum Torque\" type=\"number\" [(ngModel)]=\"motor.maxTorque\">\n    </mat-form-field>\n  \n    <button mat-raised-button color=\"accent\" data-toggle=\"collapse\" (click)=\"saveMotor(motor)\">Save</button>\n  \n    <button mat-raised-button color=\"primary\" data-toggle=\"collapse\" (click)=\"cancelMotorChange()\">Cancel</button>  \n    \n    <button mat-raised-button color=\"warn\" data-toggle=\"collapse\" *ngIf=\"motor.id\" (click)=\"removeMotor(motor)\">Delete</button> \n\n  </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/input-form/input-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/input-form/input-form.component.ts ***!
  \****************************************************/
/*! exports provided: InputFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormComponent", function() { return InputFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _motor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../motor */ "./src/app/motor.ts");
/* harmony import */ var _motor_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../motor-data.service */ "./src/app/motor-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputFormComponent = /** @class */ (function () {
    function InputFormComponent(motorDataService) {
        this.motorDataService = motorDataService;
        this.numberPolesOptions = [2, 4, 6, 8];
        this.voltageOptions = [220, 380, 440];
        this.dutyClassOptions = ["S1", "S2", "S3", "S4", "S5"];
    }
    InputFormComponent.prototype.ngOnInit = function () {
        if (this.motor.id) {
            this.updateBackup(this.motor);
        }
    };
    InputFormComponent.prototype.updateBackup = function (motor) {
        this.backupMotor = Object.assign({}, motor);
    };
    InputFormComponent.prototype.saveMotor = function (motor) {
        if (motor.id) {
            this.motorDataService.updateMotorById(motor.id, motor);
            this.updateBackup(motor);
        }
        else {
            this.motorDataService.addMotor(Object.assign({}, motor));
            this.clearForm();
        }
    };
    InputFormComponent.prototype.cancelMotorChange = function () {
        this.clearForm();
    };
    InputFormComponent.prototype.clearForm = function () {
        if (this.motor.id) {
            this.motor = Object.assign({}, this.backupMotor);
        }
        else {
            this.motor = new _motor__WEBPACK_IMPORTED_MODULE_1__["Motor"];
        }
    };
    InputFormComponent.prototype.removeMotor = function (motor) {
        this.motorDataService.deleteMotorById(motor.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _motor__WEBPACK_IMPORTED_MODULE_1__["Motor"])
    ], InputFormComponent.prototype, "motor", void 0);
    InputFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-form',
            template: __webpack_require__(/*! ./input-form.component.html */ "./src/app/input-form/input-form.component.html"),
            styles: [__webpack_require__(/*! ./input-form.component.css */ "./src/app/input-form/input-form.component.css")]
        }),
        __metadata("design:paramtypes", [_motor_data_service__WEBPACK_IMPORTED_MODULE_2__["MotorDataService"]])
    ], InputFormComponent);
    return InputFormComponent;
}());



/***/ }),

/***/ "./src/app/motor-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/motor-data.service.ts ***!
  \***************************************/
/*! exports provided: MotorDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorDataService", function() { return MotorDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _motor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motor */ "./src/app/motor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotorDataService = /** @class */ (function () {
    function MotorDataService(httpClient) {
        this.httpClient = httpClient;
        this.lastId = 0;
        this.motors = [];
    }
    MotorDataService.prototype.addMotor = function (motor) {
        if (!motor.id) {
            motor.id = ++this.lastId;
        }
        this.motors.push(motor);
        return this;
    };
    MotorDataService.prototype.deleteMotorById = function (id) {
        this.motors = this.motors
            .filter(function (motor) { return motor.id !== id; });
        return this;
    };
    MotorDataService.prototype.updateMotorById = function (id, values) {
        if (values === void 0) { values = {}; }
        var motor = this.getMotorById(id);
        if (!_motor__WEBPACK_IMPORTED_MODULE_1__["Motor"]) {
            return null;
        }
        Object.assign(motor, values);
        return motor;
    };
    MotorDataService.prototype.getAllMotors = function () {
        return this.motors;
    };
    MotorDataService.prototype.getMotorById = function (id) {
        return this.motors
            .filter(function (motor) { return motor.id === id; })
            .pop();
    };
    MotorDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MotorDataService);
    return MotorDataService;
}());



/***/ }),

/***/ "./src/app/motor.ts":
/*!**************************!*\
  !*** ./src/app/motor.ts ***!
  \**************************/
/*! exports provided: Motor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motor", function() { return Motor; });
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.contructor = function (values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    };
    return Motor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lucas\Documents\virtuarian-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map