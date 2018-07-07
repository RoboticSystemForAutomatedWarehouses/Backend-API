webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3 mb-3 center\">\n    <div class=\"col-6 card card-body\">\n        <h3>\n            About us...\n        </h3>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus, eligendi magni saepe nam porro voluptate autem veritatis iusto itaque numquam maiores consectetur ipsa id quas veniam harum qui quam?\n    </div>\n    <div class=\"col-6 card card-body\">\n        <h3>\n            Our Partners\n        </h3>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in doloremque repellat placeat obcaecati, officiis architecto at cum assumenda tenetur nisi ipsa quisquam incidunt animi, iste, qui magni optio expedita?\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/account/edit-profile/edit-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model === null\" class=\"alert alert-box alert-danger\">Error loading profile info. Please refresh page...</div>\n<div *ngIf=\"model === undefined\" class=\"alert alert-box alert-warning\">Loading profile info. Please waite...</div>\n\n<div>Edit Profile Info:</div>\n<div *ngIf=\"model\">\n    <div class=\"form-group form-control-sm row m-1\">\n        <div class=\"col-3\">Name: </div>\n        <input [(ngModel)]=\"model.name\" />\n    </div>\n    <div class=\"form-group form-control-sm row m-1\">\n        <div class=\"col-3\">Email: </div>\n        <input type=\"email\" [(ngModel)]=\"model.email\" />\n    </div>\n    <div class=\"form-group form-control-sm row m-1\">\n        <div class=\"col-3\">Gender: </div>\n        <select [(ngModel)]=\"model.gender\">\n        <option [value]=\"0\">Male</option>\n        <option [value]=\"1\">Female</option>\n      </select>\n    </div>\n    <div class=\"form-group form-control-sm row m-1\">\n        <div class=\"col-3\">Old Password: </div>\n        <input type=\"password\" [(ngModel)]=\"model.oldPassword\" />\n    </div>\n    <div class=\"form-group form-control-sm row m-1\">\n        <div class=\"col-3\">New Password: </div>\n        <input type=\"password\" [(ngModel)]=\"model.newPassword\" />\n    </div>\n    <div class=\"form-group form-control-sm row m-1\">\n        <div class=\"col-3\">New Password Confirmation: </div>\n        <input type=\"password\" [(ngModel)]=\"model.newPasswordConfirmation\" />\n    </div>\n    <div class=\"row\">\n        <div class=\"one_quarter\"></div>\n        <a class=\"btn one_quarter\" (click)=\"submit()\">Save</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/account/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = undefined;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__models_remote_url__["a" /* RemoteUrl */].Account.Get(this.authService.Id)).subscribe(function (res) {
            if (res.success) {
                _this.model = res.result;
            }
            else {
                _this.model = null;
            }
        });
    };
    EditProfileComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.model);
        if (!this.model.newPassword || !this.model.newPasswordConfirmation || this.model.newPassword !== this.model.newPasswordConfirmation) {
            alert('Invalid password/confirmation.');
            return;
        }
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__models_remote_url__["a" /* RemoteUrl */].Account.Update(this.authService.Id), this.model).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                alert('Success!');
                _this.ngOnInit();
            }
            else {
                alert('Fail to update: ' + res.message);
            }
        });
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__("./src/app/account/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("./src/app/account/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());

var EditUserViewModel = /** @class */ (function () {
    function EditUserViewModel() {
    }
    return EditUserViewModel;
}());
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/account/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row3\">\n    <main class=\"hoc container clear\">\n        <div class=\"sidebar one_quarter first\">\n            <nav class=\"sdb_holder\">\n                <ul>\n                    <li>\n                        <a routerLink=\"/account/profile\">Account info</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/account/items\">Items</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"content three_quarter\">\n            <router-outlet></router-outlet>\n        </div>\n        <div class=\"clear\"></div>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/account/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-home',
            template: __webpack_require__("./src/app/account/home/home.component.html"),
            styles: [__webpack_require__("./src/app/account/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/account/items/items.component.css":
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Materialize v0.100.2 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red{background-color:#e51c23 !important}\r\n.materialize-red-text{color:#e51c23 !important}\r\n.materialize-red.lighten-5{background-color:#fdeaeb !important}\r\n.materialize-red-text.text-lighten-5{color:#fdeaeb !important}\r\n.materialize-red.lighten-4{background-color:#f8c1c3 !important}\r\n.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}\r\n.materialize-red.lighten-3{background-color:#f3989b !important}\r\n.materialize-red-text.text-lighten-3{color:#f3989b !important}\r\n.materialize-red.lighten-2{background-color:#ee6e73 !important}\r\n.materialize-red-text.text-lighten-2{color:#ee6e73 !important}\r\n.materialize-red.lighten-1{background-color:#ea454b !important}\r\n.materialize-red-text.text-lighten-1{color:#ea454b !important}\r\n.materialize-red.darken-1{background-color:#d0181e !important}\r\n.materialize-red-text.text-darken-1{color:#d0181e !important}\r\n.materialize-red.darken-2{background-color:#b9151b !important}\r\n.materialize-red-text.text-darken-2{color:#b9151b !important}\r\n.materialize-red.darken-3{background-color:#a21318 !important}\r\n.materialize-red-text.text-darken-3{color:#a21318 !important}\r\n.materialize-red.darken-4{background-color:#8b1014 !important}\r\n.materialize-red-text.text-darken-4{color:#8b1014 !important}\r\n.red{background-color:#F44336 !important}\r\n.red-text{color:#F44336 !important}\r\n.red.lighten-5{background-color:#FFEBEE !important}\r\n.red-text.text-lighten-5{color:#FFEBEE !important}\r\n.red.lighten-4{background-color:#FFCDD2 !important}\r\n.red-text.text-lighten-4{color:#FFCDD2 !important}\r\n.red.lighten-3{background-color:#EF9A9A !important}\r\n.red-text.text-lighten-3{color:#EF9A9A !important}\r\n.red.lighten-2{background-color:#E57373 !important}\r\n.red-text.text-lighten-2{color:#E57373 !important}\r\n.red.lighten-1{background-color:#EF5350 !important}\r\n.red-text.text-lighten-1{color:#EF5350 !important}\r\n.red.darken-1{background-color:#E53935 !important}\r\n.red-text.text-darken-1{color:#E53935 !important}\r\n.red.darken-2{background-color:#D32F2F !important}\r\n.red-text.text-darken-2{color:#D32F2F !important}\r\n.red.darken-3{background-color:#C62828 !important}\r\n.red-text.text-darken-3{color:#C62828 !important}\r\n.red.darken-4{background-color:#B71C1C !important}\r\n.red-text.text-darken-4{color:#B71C1C !important}\r\n.red.accent-1{background-color:#FF8A80 !important}\r\n.red-text.text-accent-1{color:#FF8A80 !important}\r\n.red.accent-2{background-color:#FF5252 !important}\r\n.red-text.text-accent-2{color:#FF5252 !important}\r\n.red.accent-3{background-color:#FF1744 !important}\r\n.red-text.text-accent-3{color:#FF1744 !important}\r\n.red.accent-4{background-color:#D50000 !important}\r\n.red-text.text-accent-4{color:#D50000 !important}\r\n.pink{background-color:#e91e63 !important}\r\n.pink-text{color:#e91e63 !important}\r\n.pink.lighten-5{background-color:#fce4ec !important}\r\n.pink-text.text-lighten-5{color:#fce4ec !important}\r\n.pink.lighten-4{background-color:#f8bbd0 !important}\r\n.pink-text.text-lighten-4{color:#f8bbd0 !important}\r\n.pink.lighten-3{background-color:#f48fb1 !important}\r\n.pink-text.text-lighten-3{color:#f48fb1 !important}\r\n.pink.lighten-2{background-color:#f06292 !important}\r\n.pink-text.text-lighten-2{color:#f06292 !important}\r\n.pink.lighten-1{background-color:#ec407a !important}\r\n.pink-text.text-lighten-1{color:#ec407a !important}\r\n.pink.darken-1{background-color:#d81b60 !important}\r\n.pink-text.text-darken-1{color:#d81b60 !important}\r\n.pink.darken-2{background-color:#c2185b !important}\r\n.pink-text.text-darken-2{color:#c2185b !important}\r\n.pink.darken-3{background-color:#ad1457 !important}\r\n.pink-text.text-darken-3{color:#ad1457 !important}\r\n.pink.darken-4{background-color:#880e4f !important}\r\n.pink-text.text-darken-4{color:#880e4f !important}\r\n.pink.accent-1{background-color:#ff80ab !important}\r\n.pink-text.text-accent-1{color:#ff80ab !important}\r\n.pink.accent-2{background-color:#ff4081 !important}\r\n.pink-text.text-accent-2{color:#ff4081 !important}\r\n.pink.accent-3{background-color:#f50057 !important}\r\n.pink-text.text-accent-3{color:#f50057 !important}\r\n.pink.accent-4{background-color:#c51162 !important}\r\n.pink-text.text-accent-4{color:#c51162 !important}\r\n.purple{background-color:#9c27b0 !important}\r\n.purple-text{color:#9c27b0 !important}\r\n.purple.lighten-5{background-color:#f3e5f5 !important}\r\n.purple-text.text-lighten-5{color:#f3e5f5 !important}\r\n.purple.lighten-4{background-color:#e1bee7 !important}\r\n.purple-text.text-lighten-4{color:#e1bee7 !important}\r\n.purple.lighten-3{background-color:#ce93d8 !important}\r\n.purple-text.text-lighten-3{color:#ce93d8 !important}\r\n.purple.lighten-2{background-color:#ba68c8 !important}\r\n.purple-text.text-lighten-2{color:#ba68c8 !important}\r\n.purple.lighten-1{background-color:#ab47bc !important}\r\n.purple-text.text-lighten-1{color:#ab47bc !important}\r\n.purple.darken-1{background-color:#8e24aa !important}\r\n.purple-text.text-darken-1{color:#8e24aa !important}\r\n.purple.darken-2{background-color:#7b1fa2 !important}\r\n.purple-text.text-darken-2{color:#7b1fa2 !important}\r\n.purple.darken-3{background-color:#6a1b9a !important}\r\n.purple-text.text-darken-3{color:#6a1b9a !important}\r\n.purple.darken-4{background-color:#4a148c !important}\r\n.purple-text.text-darken-4{color:#4a148c !important}\r\n.purple.accent-1{background-color:#ea80fc !important}\r\n.purple-text.text-accent-1{color:#ea80fc !important}\r\n.purple.accent-2{background-color:#e040fb !important}\r\n.purple-text.text-accent-2{color:#e040fb !important}\r\n.purple.accent-3{background-color:#d500f9 !important}\r\n.purple-text.text-accent-3{color:#d500f9 !important}\r\n.purple.accent-4{background-color:#a0f !important}\r\n.purple-text.text-accent-4{color:#a0f !important}\r\n.deep-purple{background-color:#673ab7 !important}\r\n.deep-purple-text{color:#673ab7 !important}\r\n.deep-purple.lighten-5{background-color:#ede7f6 !important}\r\n.deep-purple-text.text-lighten-5{color:#ede7f6 !important}\r\n.deep-purple.lighten-4{background-color:#d1c4e9 !important}\r\n.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}\r\n.deep-purple.lighten-3{background-color:#b39ddb !important}\r\n.deep-purple-text.text-lighten-3{color:#b39ddb !important}\r\n.deep-purple.lighten-2{background-color:#9575cd !important}\r\n.deep-purple-text.text-lighten-2{color:#9575cd !important}\r\n.deep-purple.lighten-1{background-color:#7e57c2 !important}\r\n.deep-purple-text.text-lighten-1{color:#7e57c2 !important}\r\n.deep-purple.darken-1{background-color:#5e35b1 !important}\r\n.deep-purple-text.text-darken-1{color:#5e35b1 !important}\r\n.deep-purple.darken-2{background-color:#512da8 !important}\r\n.deep-purple-text.text-darken-2{color:#512da8 !important}\r\n.deep-purple.darken-3{background-color:#4527a0 !important}\r\n.deep-purple-text.text-darken-3{color:#4527a0 !important}\r\n.deep-purple.darken-4{background-color:#311b92 !important}\r\n.deep-purple-text.text-darken-4{color:#311b92 !important}\r\n.deep-purple.accent-1{background-color:#b388ff !important}\r\n.deep-purple-text.text-accent-1{color:#b388ff !important}\r\n.deep-purple.accent-2{background-color:#7c4dff !important}\r\n.deep-purple-text.text-accent-2{color:#7c4dff !important}\r\n.deep-purple.accent-3{background-color:#651fff !important}\r\n.deep-purple-text.text-accent-3{color:#651fff !important}\r\n.deep-purple.accent-4{background-color:#6200ea !important}\r\n.deep-purple-text.text-accent-4{color:#6200ea !important}\r\n.indigo{background-color:#3f51b5 !important}\r\n.indigo-text{color:#3f51b5 !important}\r\n.indigo.lighten-5{background-color:#e8eaf6 !important}\r\n.indigo-text.text-lighten-5{color:#e8eaf6 !important}\r\n.indigo.lighten-4{background-color:#c5cae9 !important}\r\n.indigo-text.text-lighten-4{color:#c5cae9 !important}\r\n.indigo.lighten-3{background-color:#9fa8da !important}\r\n.indigo-text.text-lighten-3{color:#9fa8da !important}\r\n.indigo.lighten-2{background-color:#7986cb !important}\r\n.indigo-text.text-lighten-2{color:#7986cb !important}\r\n.indigo.lighten-1{background-color:#5c6bc0 !important}\r\n.indigo-text.text-lighten-1{color:#5c6bc0 !important}\r\n.indigo.darken-1{background-color:#3949ab !important}\r\n.indigo-text.text-darken-1{color:#3949ab !important}\r\n.indigo.darken-2{background-color:#303f9f !important}\r\n.indigo-text.text-darken-2{color:#303f9f !important}\r\n.indigo.darken-3{background-color:#283593 !important}\r\n.indigo-text.text-darken-3{color:#283593 !important}\r\n.indigo.darken-4{background-color:#1a237e !important}\r\n.indigo-text.text-darken-4{color:#1a237e !important}\r\n.indigo.accent-1{background-color:#8c9eff !important}\r\n.indigo-text.text-accent-1{color:#8c9eff !important}\r\n.indigo.accent-2{background-color:#536dfe !important}\r\n.indigo-text.text-accent-2{color:#536dfe !important}\r\n.indigo.accent-3{background-color:#3d5afe !important}\r\n.indigo-text.text-accent-3{color:#3d5afe !important}\r\n.indigo.accent-4{background-color:#304ffe !important}\r\n.indigo-text.text-accent-4{color:#304ffe !important}\r\n.blue{background-color:#2196F3 !important}\r\n.blue-text{color:#2196F3 !important}\r\n.blue.lighten-5{background-color:#E3F2FD !important}\r\n.blue-text.text-lighten-5{color:#E3F2FD !important}\r\n.blue.lighten-4{background-color:#BBDEFB !important}\r\n.blue-text.text-lighten-4{color:#BBDEFB !important}\r\n.blue.lighten-3{background-color:#90CAF9 !important}\r\n.blue-text.text-lighten-3{color:#90CAF9 !important}\r\n.blue.lighten-2{background-color:#64B5F6 !important}\r\n.blue-text.text-lighten-2{color:#64B5F6 !important}\r\n.blue.lighten-1{background-color:#42A5F5 !important}\r\n.blue-text.text-lighten-1{color:#42A5F5 !important}\r\n.blue.darken-1{background-color:#1E88E5 !important}\r\n.blue-text.text-darken-1{color:#1E88E5 !important}\r\n.blue.darken-2{background-color:#1976D2 !important}\r\n.blue-text.text-darken-2{color:#1976D2 !important}\r\n.blue.darken-3{background-color:#1565C0 !important}\r\n.blue-text.text-darken-3{color:#1565C0 !important}\r\n.blue.darken-4{background-color:#0D47A1 !important}\r\n.blue-text.text-darken-4{color:#0D47A1 !important}\r\n.blue.accent-1{background-color:#82B1FF !important}\r\n.blue-text.text-accent-1{color:#82B1FF !important}\r\n.blue.accent-2{background-color:#448AFF !important}\r\n.blue-text.text-accent-2{color:#448AFF !important}\r\n.blue.accent-3{background-color:#2979FF !important}\r\n.blue-text.text-accent-3{color:#2979FF !important}\r\n.blue.accent-4{background-color:#2962FF !important}\r\n.blue-text.text-accent-4{color:#2962FF !important}\r\n.light-blue{background-color:#03a9f4 !important}\r\n.light-blue-text{color:#03a9f4 !important}\r\n.light-blue.lighten-5{background-color:#e1f5fe !important}\r\n.light-blue-text.text-lighten-5{color:#e1f5fe !important}\r\n.light-blue.lighten-4{background-color:#b3e5fc !important}\r\n.light-blue-text.text-lighten-4{color:#b3e5fc !important}\r\n.light-blue.lighten-3{background-color:#81d4fa !important}\r\n.light-blue-text.text-lighten-3{color:#81d4fa !important}\r\n.light-blue.lighten-2{background-color:#4fc3f7 !important}\r\n.light-blue-text.text-lighten-2{color:#4fc3f7 !important}\r\n.light-blue.lighten-1{background-color:#29b6f6 !important}\r\n.light-blue-text.text-lighten-1{color:#29b6f6 !important}\r\n.light-blue.darken-1{background-color:#039be5 !important}\r\n.light-blue-text.text-darken-1{color:#039be5 !important}\r\n.light-blue.darken-2{background-color:#0288d1 !important}\r\n.light-blue-text.text-darken-2{color:#0288d1 !important}\r\n.light-blue.darken-3{background-color:#0277bd !important}\r\n.light-blue-text.text-darken-3{color:#0277bd !important}\r\n.light-blue.darken-4{background-color:#01579b !important}\r\n.light-blue-text.text-darken-4{color:#01579b !important}\r\n.light-blue.accent-1{background-color:#80d8ff !important}\r\n.light-blue-text.text-accent-1{color:#80d8ff !important}\r\n.light-blue.accent-2{background-color:#40c4ff !important}\r\n.light-blue-text.text-accent-2{color:#40c4ff !important}\r\n.light-blue.accent-3{background-color:#00b0ff !important}\r\n.light-blue-text.text-accent-3{color:#00b0ff !important}\r\n.light-blue.accent-4{background-color:#0091ea !important}\r\n.light-blue-text.text-accent-4{color:#0091ea !important}\r\n.cyan{background-color:#00bcd4 !important}\r\n.cyan-text{color:#00bcd4 !important}\r\n.cyan.lighten-5{background-color:#e0f7fa !important}\r\n.cyan-text.text-lighten-5{color:#e0f7fa !important}\r\n.cyan.lighten-4{background-color:#b2ebf2 !important}\r\n.cyan-text.text-lighten-4{color:#b2ebf2 !important}\r\n.cyan.lighten-3{background-color:#80deea !important}\r\n.cyan-text.text-lighten-3{color:#80deea !important}\r\n.cyan.lighten-2{background-color:#4dd0e1 !important}\r\n.cyan-text.text-lighten-2{color:#4dd0e1 !important}\r\n.cyan.lighten-1{background-color:#26c6da !important}\r\n.cyan-text.text-lighten-1{color:#26c6da !important}\r\n.cyan.darken-1{background-color:#00acc1 !important}\r\n.cyan-text.text-darken-1{color:#00acc1 !important}\r\n.cyan.darken-2{background-color:#0097a7 !important}\r\n.cyan-text.text-darken-2{color:#0097a7 !important}\r\n.cyan.darken-3{background-color:#00838f !important}\r\n.cyan-text.text-darken-3{color:#00838f !important}\r\n.cyan.darken-4{background-color:#006064 !important}\r\n.cyan-text.text-darken-4{color:#006064 !important}\r\n.cyan.accent-1{background-color:#84ffff !important}\r\n.cyan-text.text-accent-1{color:#84ffff !important}\r\n.cyan.accent-2{background-color:#18ffff !important}\r\n.cyan-text.text-accent-2{color:#18ffff !important}\r\n.cyan.accent-3{background-color:#00e5ff !important}\r\n.cyan-text.text-accent-3{color:#00e5ff !important}\r\n.cyan.accent-4{background-color:#00b8d4 !important}\r\n.cyan-text.text-accent-4{color:#00b8d4 !important}\r\n.teal{background-color:#009688 !important}\r\n.teal-text{color:#009688 !important}\r\n.teal.lighten-5{background-color:#e0f2f1 !important}\r\n.teal-text.text-lighten-5{color:#e0f2f1 !important}\r\n.teal.lighten-4{background-color:#b2dfdb !important}\r\n.teal-text.text-lighten-4{color:#b2dfdb !important}\r\n.teal.lighten-3{background-color:#80cbc4 !important}\r\n.teal-text.text-lighten-3{color:#80cbc4 !important}\r\n.teal.lighten-2{background-color:#4db6ac !important}\r\n.teal-text.text-lighten-2{color:#4db6ac !important}\r\n.teal.lighten-1{background-color:#26a69a !important}\r\n.teal-text.text-lighten-1{color:#26a69a !important}\r\n.teal.darken-1{background-color:#00897b !important}\r\n.teal-text.text-darken-1{color:#00897b !important}\r\n.teal.darken-2{background-color:#00796b !important}\r\n.teal-text.text-darken-2{color:#00796b !important}\r\n.teal.darken-3{background-color:#00695c !important}\r\n.teal-text.text-darken-3{color:#00695c !important}\r\n.teal.darken-4{background-color:#004d40 !important}\r\n.teal-text.text-darken-4{color:#004d40 !important}\r\n.teal.accent-1{background-color:#a7ffeb !important}\r\n.teal-text.text-accent-1{color:#a7ffeb !important}\r\n.teal.accent-2{background-color:#64ffda !important}\r\n.teal-text.text-accent-2{color:#64ffda !important}\r\n.teal.accent-3{background-color:#1de9b6 !important}\r\n.teal-text.text-accent-3{color:#1de9b6 !important}\r\n.teal.accent-4{background-color:#00bfa5 !important}\r\n.teal-text.text-accent-4{color:#00bfa5 !important}\r\n.green{background-color:#4CAF50 !important}\r\n.green-text{color:#4CAF50 !important}\r\n.green.lighten-5{background-color:#E8F5E9 !important}\r\n.green-text.text-lighten-5{color:#E8F5E9 !important}\r\n.green.lighten-4{background-color:#C8E6C9 !important}\r\n.green-text.text-lighten-4{color:#C8E6C9 !important}\r\n.green.lighten-3{background-color:#A5D6A7 !important}\r\n.green-text.text-lighten-3{color:#A5D6A7 !important}\r\n.green.lighten-2{background-color:#81C784 !important}\r\n.green-text.text-lighten-2{color:#81C784 !important}\r\n.green.lighten-1{background-color:#66BB6A !important}\r\n.green-text.text-lighten-1{color:#66BB6A !important}\r\n.green.darken-1{background-color:#43A047 !important}\r\n.green-text.text-darken-1{color:#43A047 !important}\r\n.green.darken-2{background-color:#388E3C !important}\r\n.green-text.text-darken-2{color:#388E3C !important}\r\n.green.darken-3{background-color:#2E7D32 !important}\r\n.green-text.text-darken-3{color:#2E7D32 !important}\r\n.green.darken-4{background-color:#1B5E20 !important}\r\n.green-text.text-darken-4{color:#1B5E20 !important}\r\n.green.accent-1{background-color:#B9F6CA !important}\r\n.green-text.text-accent-1{color:#B9F6CA !important}\r\n.green.accent-2{background-color:#69F0AE !important}\r\n.green-text.text-accent-2{color:#69F0AE !important}\r\n.green.accent-3{background-color:#00E676 !important}\r\n.green-text.text-accent-3{color:#00E676 !important}\r\n.green.accent-4{background-color:#00C853 !important}\r\n.green-text.text-accent-4{color:#00C853 !important}\r\n.light-green{background-color:#8bc34a !important}\r\n.light-green-text{color:#8bc34a !important}\r\n.light-green.lighten-5{background-color:#f1f8e9 !important}\r\n.light-green-text.text-lighten-5{color:#f1f8e9 !important}\r\n.light-green.lighten-4{background-color:#dcedc8 !important}\r\n.light-green-text.text-lighten-4{color:#dcedc8 !important}\r\n.light-green.lighten-3{background-color:#c5e1a5 !important}\r\n.light-green-text.text-lighten-3{color:#c5e1a5 !important}\r\n.light-green.lighten-2{background-color:#aed581 !important}\r\n.light-green-text.text-lighten-2{color:#aed581 !important}\r\n.light-green.lighten-1{background-color:#9ccc65 !important}\r\n.light-green-text.text-lighten-1{color:#9ccc65 !important}\r\n.light-green.darken-1{background-color:#7cb342 !important}\r\n.light-green-text.text-darken-1{color:#7cb342 !important}\r\n.light-green.darken-2{background-color:#689f38 !important}\r\n.light-green-text.text-darken-2{color:#689f38 !important}\r\n.light-green.darken-3{background-color:#558b2f !important}\r\n.light-green-text.text-darken-3{color:#558b2f !important}\r\n.light-green.darken-4{background-color:#33691e !important}\r\n.light-green-text.text-darken-4{color:#33691e !important}\r\n.light-green.accent-1{background-color:#ccff90 !important}\r\n.light-green-text.text-accent-1{color:#ccff90 !important}\r\n.light-green.accent-2{background-color:#b2ff59 !important}\r\n.light-green-text.text-accent-2{color:#b2ff59 !important}\r\n.light-green.accent-3{background-color:#76ff03 !important}\r\n.light-green-text.text-accent-3{color:#76ff03 !important}\r\n.light-green.accent-4{background-color:#64dd17 !important}\r\n.light-green-text.text-accent-4{color:#64dd17 !important}\r\n.lime{background-color:#cddc39 !important}\r\n.lime-text{color:#cddc39 !important}\r\n.lime.lighten-5{background-color:#f9fbe7 !important}\r\n.lime-text.text-lighten-5{color:#f9fbe7 !important}\r\n.lime.lighten-4{background-color:#f0f4c3 !important}\r\n.lime-text.text-lighten-4{color:#f0f4c3 !important}\r\n.lime.lighten-3{background-color:#e6ee9c !important}\r\n.lime-text.text-lighten-3{color:#e6ee9c !important}\r\n.lime.lighten-2{background-color:#dce775 !important}\r\n.lime-text.text-lighten-2{color:#dce775 !important}\r\n.lime.lighten-1{background-color:#d4e157 !important}\r\n.lime-text.text-lighten-1{color:#d4e157 !important}\r\n.lime.darken-1{background-color:#c0ca33 !important}\r\n.lime-text.text-darken-1{color:#c0ca33 !important}\r\n.lime.darken-2{background-color:#afb42b !important}\r\n.lime-text.text-darken-2{color:#afb42b !important}\r\n.lime.darken-3{background-color:#9e9d24 !important}\r\n.lime-text.text-darken-3{color:#9e9d24 !important}\r\n.lime.darken-4{background-color:#827717 !important}\r\n.lime-text.text-darken-4{color:#827717 !important}\r\n.lime.accent-1{background-color:#f4ff81 !important}\r\n.lime-text.text-accent-1{color:#f4ff81 !important}\r\n.lime.accent-2{background-color:#eeff41 !important}\r\n.lime-text.text-accent-2{color:#eeff41 !important}\r\n.lime.accent-3{background-color:#c6ff00 !important}\r\n.lime-text.text-accent-3{color:#c6ff00 !important}\r\n.lime.accent-4{background-color:#aeea00 !important}\r\n.lime-text.text-accent-4{color:#aeea00 !important}\r\n.yellow{background-color:#ffeb3b !important}\r\n.yellow-text{color:#ffeb3b !important}\r\n.yellow.lighten-5{background-color:#fffde7 !important}\r\n.yellow-text.text-lighten-5{color:#fffde7 !important}\r\n.yellow.lighten-4{background-color:#fff9c4 !important}\r\n.yellow-text.text-lighten-4{color:#fff9c4 !important}\r\n.yellow.lighten-3{background-color:#fff59d !important}\r\n.yellow-text.text-lighten-3{color:#fff59d !important}\r\n.yellow.lighten-2{background-color:#fff176 !important}\r\n.yellow-text.text-lighten-2{color:#fff176 !important}\r\n.yellow.lighten-1{background-color:#ffee58 !important}\r\n.yellow-text.text-lighten-1{color:#ffee58 !important}\r\n.yellow.darken-1{background-color:#fdd835 !important}\r\n.yellow-text.text-darken-1{color:#fdd835 !important}\r\n.yellow.darken-2{background-color:#fbc02d !important}\r\n.yellow-text.text-darken-2{color:#fbc02d !important}\r\n.yellow.darken-3{background-color:#f9a825 !important}\r\n.yellow-text.text-darken-3{color:#f9a825 !important}\r\n.yellow.darken-4{background-color:#f57f17 !important}\r\n.yellow-text.text-darken-4{color:#f57f17 !important}\r\n.yellow.accent-1{background-color:#ffff8d !important}\r\n.yellow-text.text-accent-1{color:#ffff8d !important}\r\n.yellow.accent-2{background-color:#ff0 !important}\r\n.yellow-text.text-accent-2{color:#ff0 !important}\r\n.yellow.accent-3{background-color:#ffea00 !important}\r\n.yellow-text.text-accent-3{color:#ffea00 !important}\r\n.yellow.accent-4{background-color:#ffd600 !important}\r\n.yellow-text.text-accent-4{color:#ffd600 !important}\r\n.amber{background-color:#ffc107 !important}\r\n.amber-text{color:#ffc107 !important}\r\n.amber.lighten-5{background-color:#fff8e1 !important}\r\n.amber-text.text-lighten-5{color:#fff8e1 !important}\r\n.amber.lighten-4{background-color:#ffecb3 !important}\r\n.amber-text.text-lighten-4{color:#ffecb3 !important}\r\n.amber.lighten-3{background-color:#ffe082 !important}\r\n.amber-text.text-lighten-3{color:#ffe082 !important}\r\n.amber.lighten-2{background-color:#ffd54f !important}\r\n.amber-text.text-lighten-2{color:#ffd54f !important}\r\n.amber.lighten-1{background-color:#ffca28 !important}\r\n.amber-text.text-lighten-1{color:#ffca28 !important}\r\n.amber.darken-1{background-color:#ffb300 !important}\r\n.amber-text.text-darken-1{color:#ffb300 !important}\r\n.amber.darken-2{background-color:#ffa000 !important}\r\n.amber-text.text-darken-2{color:#ffa000 !important}\r\n.amber.darken-3{background-color:#ff8f00 !important}\r\n.amber-text.text-darken-3{color:#ff8f00 !important}\r\n.amber.darken-4{background-color:#ff6f00 !important}\r\n.amber-text.text-darken-4{color:#ff6f00 !important}\r\n.amber.accent-1{background-color:#ffe57f !important}\r\n.amber-text.text-accent-1{color:#ffe57f !important}\r\n.amber.accent-2{background-color:#ffd740 !important}\r\n.amber-text.text-accent-2{color:#ffd740 !important}\r\n.amber.accent-3{background-color:#ffc400 !important}\r\n.amber-text.text-accent-3{color:#ffc400 !important}\r\n.amber.accent-4{background-color:#ffab00 !important}\r\n.amber-text.text-accent-4{color:#ffab00 !important}\r\n.orange{background-color:#ff9800 !important}\r\n.orange-text{color:#ff9800 !important}\r\n.orange.lighten-5{background-color:#fff3e0 !important}\r\n.orange-text.text-lighten-5{color:#fff3e0 !important}\r\n.orange.lighten-4{background-color:#ffe0b2 !important}\r\n.orange-text.text-lighten-4{color:#ffe0b2 !important}\r\n.orange.lighten-3{background-color:#ffcc80 !important}\r\n.orange-text.text-lighten-3{color:#ffcc80 !important}\r\n.orange.lighten-2{background-color:#ffb74d !important}\r\n.orange-text.text-lighten-2{color:#ffb74d !important}\r\n.orange.lighten-1{background-color:#ffa726 !important}\r\n.orange-text.text-lighten-1{color:#ffa726 !important}\r\n.orange.darken-1{background-color:#fb8c00 !important}\r\n.orange-text.text-darken-1{color:#fb8c00 !important}\r\n.orange.darken-2{background-color:#f57c00 !important}\r\n.orange-text.text-darken-2{color:#f57c00 !important}\r\n.orange.darken-3{background-color:#ef6c00 !important}\r\n.orange-text.text-darken-3{color:#ef6c00 !important}\r\n.orange.darken-4{background-color:#e65100 !important}\r\n.orange-text.text-darken-4{color:#e65100 !important}\r\n.orange.accent-1{background-color:#ffd180 !important}\r\n.orange-text.text-accent-1{color:#ffd180 !important}\r\n.orange.accent-2{background-color:#ffab40 !important}\r\n.orange-text.text-accent-2{color:#ffab40 !important}\r\n.orange.accent-3{background-color:#ff9100 !important}\r\n.orange-text.text-accent-3{color:#ff9100 !important}\r\n.orange.accent-4{background-color:#ff6d00 !important}\r\n.orange-text.text-accent-4{color:#ff6d00 !important}\r\n.deep-orange{background-color:#ff5722 !important}\r\n.deep-orange-text{color:#ff5722 !important}\r\n.deep-orange.lighten-5{background-color:#fbe9e7 !important}\r\n.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}\r\n.deep-orange.lighten-4{background-color:#ffccbc !important}\r\n.deep-orange-text.text-lighten-4{color:#ffccbc !important}\r\n.deep-orange.lighten-3{background-color:#ffab91 !important}\r\n.deep-orange-text.text-lighten-3{color:#ffab91 !important}\r\n.deep-orange.lighten-2{background-color:#ff8a65 !important}\r\n.deep-orange-text.text-lighten-2{color:#ff8a65 !important}\r\n.deep-orange.lighten-1{background-color:#ff7043 !important}\r\n.deep-orange-text.text-lighten-1{color:#ff7043 !important}\r\n.deep-orange.darken-1{background-color:#f4511e !important}\r\n.deep-orange-text.text-darken-1{color:#f4511e !important}\r\n.deep-orange.darken-2{background-color:#e64a19 !important}\r\n.deep-orange-text.text-darken-2{color:#e64a19 !important}\r\n.deep-orange.darken-3{background-color:#d84315 !important}\r\n.deep-orange-text.text-darken-3{color:#d84315 !important}\r\n.deep-orange.darken-4{background-color:#bf360c !important}\r\n.deep-orange-text.text-darken-4{color:#bf360c !important}\r\n.deep-orange.accent-1{background-color:#ff9e80 !important}\r\n.deep-orange-text.text-accent-1{color:#ff9e80 !important}\r\n.deep-orange.accent-2{background-color:#ff6e40 !important}\r\n.deep-orange-text.text-accent-2{color:#ff6e40 !important}\r\n.deep-orange.accent-3{background-color:#ff3d00 !important}\r\n.deep-orange-text.text-accent-3{color:#ff3d00 !important}\r\n.deep-orange.accent-4{background-color:#dd2c00 !important}\r\n.deep-orange-text.text-accent-4{color:#dd2c00 !important}\r\n.brown{background-color:#795548 !important}\r\n.brown-text{color:#795548 !important}\r\n.brown.lighten-5{background-color:#efebe9 !important}\r\n.brown-text.text-lighten-5{color:#efebe9 !important}\r\n.brown.lighten-4{background-color:#d7ccc8 !important}\r\n.brown-text.text-lighten-4{color:#d7ccc8 !important}\r\n.brown.lighten-3{background-color:#bcaaa4 !important}\r\n.brown-text.text-lighten-3{color:#bcaaa4 !important}\r\n.brown.lighten-2{background-color:#a1887f !important}\r\n.brown-text.text-lighten-2{color:#a1887f !important}\r\n.brown.lighten-1{background-color:#8d6e63 !important}\r\n.brown-text.text-lighten-1{color:#8d6e63 !important}\r\n.brown.darken-1{background-color:#6d4c41 !important}\r\n.brown-text.text-darken-1{color:#6d4c41 !important}\r\n.brown.darken-2{background-color:#5d4037 !important}\r\n.brown-text.text-darken-2{color:#5d4037 !important}\r\n.brown.darken-3{background-color:#4e342e !important}\r\n.brown-text.text-darken-3{color:#4e342e !important}\r\n.brown.darken-4{background-color:#3e2723 !important}\r\n.brown-text.text-darken-4{color:#3e2723 !important}\r\n.blue-grey{background-color:#607d8b !important}\r\n.blue-grey-text{color:#607d8b !important}\r\n.blue-grey.lighten-5{background-color:#eceff1 !important}\r\n.blue-grey-text.text-lighten-5{color:#eceff1 !important}\r\n.blue-grey.lighten-4{background-color:#cfd8dc !important}\r\n.blue-grey-text.text-lighten-4{color:#cfd8dc !important}\r\n.blue-grey.lighten-3{background-color:#b0bec5 !important}\r\n.blue-grey-text.text-lighten-3{color:#b0bec5 !important}\r\n.blue-grey.lighten-2{background-color:#90a4ae !important}\r\n.blue-grey-text.text-lighten-2{color:#90a4ae !important}\r\n.blue-grey.lighten-1{background-color:#78909c !important}\r\n.blue-grey-text.text-lighten-1{color:#78909c !important}\r\n.blue-grey.darken-1{background-color:#546e7a !important}\r\n.blue-grey-text.text-darken-1{color:#546e7a !important}\r\n.blue-grey.darken-2{background-color:#455a64 !important}\r\n.blue-grey-text.text-darken-2{color:#455a64 !important}\r\n.blue-grey.darken-3{background-color:#37474f !important}\r\n.blue-grey-text.text-darken-3{color:#37474f !important}\r\n.blue-grey.darken-4{background-color:#263238 !important}\r\n.blue-grey-text.text-darken-4{color:#263238 !important}\r\n.grey{background-color:#9e9e9e !important}\r\n.grey-text{color:#9e9e9e !important}\r\n.grey.lighten-5{background-color:#fafafa !important}\r\n.grey-text.text-lighten-5{color:#fafafa !important}\r\n.grey.lighten-4{background-color:#f5f5f5 !important}\r\n.grey-text.text-lighten-4{color:#f5f5f5 !important}\r\n.grey.lighten-3{background-color:#eee !important}\r\n.grey-text.text-lighten-3{color:#eee !important}\r\n.grey.lighten-2{background-color:#e0e0e0 !important}\r\n.grey-text.text-lighten-2{color:#e0e0e0 !important}\r\n.grey.lighten-1{background-color:#bdbdbd !important}\r\n.grey-text.text-lighten-1{color:#bdbdbd !important}\r\n.grey.darken-1{background-color:#757575 !important}\r\n.grey-text.text-darken-1{color:#757575 !important}\r\n.grey.darken-2{background-color:#616161 !important}\r\n.grey-text.text-darken-2{color:#616161 !important}\r\n.grey.darken-3{background-color:#424242 !important}\r\n.grey-text.text-darken-3{color:#424242 !important}\r\n.grey.darken-4{background-color:#212121 !important}\r\n.grey-text.text-darken-4{color:#212121 !important}\r\n.black{background-color:#000 !important}\r\n.black-text{color:#000 !important}\r\n.white{background-color:#fff !important}\r\n.white-text{color:#fff !important}\r\n.transparent{background-color:transparent !important}\r\n.transparent-text{color:transparent !important}\r\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\r\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\r\nbody{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}\r\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden],template{display:none}\r\na{background-color:transparent}\r\na:active,a:hover{outline:0}\r\nabbr[title]{border-bottom:1px dotted}\r\nb,strong{font-weight:bold}\r\ndfn{font-style:italic}\r\nh1{font-size:2em;margin:0.67em 0}\r\nmark{background:#ff0;color:#000}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsup{top:-0.5em}\r\nsub{bottom:-0.25em}\r\nimg{border:0}\r\nsvg:not(:root){overflow:hidden}\r\nfigure{margin:1em 40px}\r\nhr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}\r\npre{overflow:auto}\r\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\r\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}\r\nbutton{overflow:visible}\r\nbutton,select{text-transform:none}\r\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\r\nbutton[disabled],html input[disabled]{cursor:default}\r\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\r\ninput{line-height:normal}\r\ninput[type=\"checkbox\"],input[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}\r\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\r\ninput[type=\"search\"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}\r\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}\r\nlegend{border:0;padding:0}\r\ntextarea{overflow:auto}\r\noptgroup{font-weight:bold}\r\ntable{border-collapse:collapse;border-spacing:0}\r\ntd,th{padding:0}\r\nhtml{-webkit-box-sizing:border-box;box-sizing:border-box}\r\n*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit}\r\nul:not(.browser-default){padding-left:0;list-style-type:none}\r\nul:not(.browser-default)>li{list-style-type:none}\r\na{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}\r\n.valign-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\r\n.clearfix{clear:both}\r\n.z-depth-0{-webkit-box-shadow:none !important;box-shadow:none !important}\r\n.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-floating,.dropdown-content,.collapsible,.side-nav{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2)}\r\n.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-floating:hover{-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}\r\n.z-depth-2{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3);box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}\r\n.z-depth-3{-webkit-box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.3);box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.3)}\r\n.z-depth-4,.modal{-webkit-box-shadow:0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.3);box-shadow:0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.3)}\r\n.z-depth-5{-webkit-box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.3);box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.3)}\r\n.hoverable{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s}\r\n.hoverable:hover{-webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.divider{height:1px;overflow:hidden;background-color:#e0e0e0}\r\nblockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}\r\ni{line-height:inherit}\r\ni.left{float:left;margin-right:15px}\r\ni.right{float:right;margin-left:15px}\r\ni.tiny{font-size:1rem}\r\ni.small{font-size:2rem}\r\ni.medium{font-size:4rem}\r\ni.large{font-size:6rem}\r\nimg.responsive-img,video.responsive-video{max-width:100%;height:auto}\r\n.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}\r\n.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}\r\n.pagination li.active a{color:#fff}\r\n.pagination li.active{background-color:#ee6e73}\r\n.pagination li.disabled a{cursor:default;color:#999}\r\n.pagination li i{font-size:2rem}\r\n.pagination li.pages ul li{display:inline-block;float:none}\r\n@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}\r\n.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}\r\n.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}\r\n.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}\r\n.breadcrumb:first-child:before{display:none}\r\n.breadcrumb:last-child{color:#fff}\r\n.parallax-container{position:relative;overflow:hidden;height:500px}\r\n.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}\r\n.parallax-container .parallax img{display:none;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}\r\n.pin-top,.pin-bottom{position:relative}\r\n.pinned{position:fixed !important}\r\nul.staggered-list li{opacity:0}\r\n.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}\r\n@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}\r\n@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}\r\n@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}\r\n@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}\r\n@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}\r\n@media only screen and (min-width: 993px){.show-on-large{display:block !important}}\r\n@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}\r\n@media only screen and (max-width: 600px){.show-on-small{display:block !important}}\r\n@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}\r\n@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}\r\n@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}\r\n.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}\r\n.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}\r\ntable,th,td{border:none}\r\ntable{width:100%;display:table}\r\ntable.bordered>thead>tr,table.bordered>tbody>tr{border-bottom:1px solid #d0d0d0}\r\ntable.striped>tbody>tr:nth-child(odd){background-color:#f2f2f2}\r\ntable.striped>tbody>tr>td{border-radius:0}\r\ntable.highlight>tbody>tr{-webkit-transition:background-color .25s ease;transition:background-color .25s ease}\r\ntable.highlight>tbody>tr:hover{background-color:#f2f2f2}\r\ntable.centered thead tr th,table.centered tbody tr td{text-align:center}\r\nthead{border-bottom:1px solid #d0d0d0}\r\ntd,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}\r\n@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\00a0'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid #d0d0d0}table.responsive-table.bordered th{border-bottom:0;border-left:0}table.responsive-table.bordered td{border-left:0;border-right:0;border-bottom:0}table.responsive-table.bordered tr{border:0}table.responsive-table.bordered tbody tr{border-right:1px solid #d0d0d0}}\r\n.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}\r\n.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}\r\n.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}\r\n.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}\r\n.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}\r\n.collection .collection-item.avatar .title{font-size:16px}\r\n.collection .collection-item.avatar p{margin:0}\r\n.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}\r\n.collection .collection-item:last-child{border-bottom:none}\r\n.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}\r\n.collection .collection-item.active .secondary-content{color:#fff}\r\n.collection a.collection-item{display:block;-webkit-transition:.25s;transition:.25s;color:#26a69a}\r\n.collection a.collection-item:not(.active):hover{background-color:#ddd}\r\n.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}\r\n.collection.with-header .collection-item{padding-left:30px}\r\n.collection.with-header .collection-item.avatar{padding-left:72px}\r\n.secondary-content{float:right;color:#26a69a}\r\n.collapsible .collection{margin:0;border:none}\r\n.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}\r\n.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}\r\n.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}\r\n.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;-webkit-transition:width .3s linear;transition:width .3s linear}\r\n.progress .indeterminate{background-color:#26a69a}\r\n.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}\r\n.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}\r\n@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}\r\n@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}\r\n@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}\r\n@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}\r\n.hide{display:none !important}\r\n.left-align{text-align:left}\r\n.right-align{text-align:right}\r\n.center,.center-align{text-align:center}\r\n.left{float:left !important}\r\n.right{float:right !important}\r\n.no-select,input[type=range],input[type=range]+.thumb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.circle{border-radius:50%}\r\n.center-block{display:block;margin-left:auto;margin-right:auto}\r\n.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r\n.no-padding{padding:0 !important}\r\nspan.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;-webkit-box-sizing:border-box;box-sizing:border-box}\r\nspan.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}\r\nspan.badge.new:after{content:\" new\"}\r\nspan.badge[data-badge-caption]::after{content:\" \" attr(data-badge-caption)}\r\nnav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}\r\n.collection-item span.badge{margin-top:calc(.75rem - 11px)}\r\n.collapsible span.badge{margin-left:auto}\r\n.side-nav span.badge{margin-top:calc(24px - 11px)}\r\n.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:'liga';font-feature-settings:'liga'}\r\n.container{margin:0 auto;max-width:1280px;width:90%}\r\n@media only screen and (min-width: 601px){.container{width:85%}}\r\n@media only screen and (min-width: 993px){.container{width:70%}}\r\n.container .row{margin-left:-.75rem;margin-right:-.75rem}\r\n.section{padding-top:1rem;padding-bottom:1rem}\r\n.section.no-pad{padding:0}\r\n.section.no-pad-bot{padding-bottom:0}\r\n.section.no-pad-top{padding-top:0}\r\n.row{margin-left:auto;margin-right:auto;margin-bottom:20px}\r\n.row:after{content:\"\";display:table;clear:both}\r\n.row .col{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .75rem;min-height:1px}\r\n.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}\r\n.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}\r\n.row .col.offset-s1{margin-left:8.3333333333%}\r\n.row .col.pull-s1{right:8.3333333333%}\r\n.row .col.push-s1{left:8.3333333333%}\r\n.row .col.offset-s2{margin-left:16.6666666667%}\r\n.row .col.pull-s2{right:16.6666666667%}\r\n.row .col.push-s2{left:16.6666666667%}\r\n.row .col.offset-s3{margin-left:25%}\r\n.row .col.pull-s3{right:25%}\r\n.row .col.push-s3{left:25%}\r\n.row .col.offset-s4{margin-left:33.3333333333%}\r\n.row .col.pull-s4{right:33.3333333333%}\r\n.row .col.push-s4{left:33.3333333333%}\r\n.row .col.offset-s5{margin-left:41.6666666667%}\r\n.row .col.pull-s5{right:41.6666666667%}\r\n.row .col.push-s5{left:41.6666666667%}\r\n.row .col.offset-s6{margin-left:50%}\r\n.row .col.pull-s6{right:50%}\r\n.row .col.push-s6{left:50%}\r\n.row .col.offset-s7{margin-left:58.3333333333%}\r\n.row .col.pull-s7{right:58.3333333333%}\r\n.row .col.push-s7{left:58.3333333333%}\r\n.row .col.offset-s8{margin-left:66.6666666667%}\r\n.row .col.pull-s8{right:66.6666666667%}\r\n.row .col.push-s8{left:66.6666666667%}\r\n.row .col.offset-s9{margin-left:75%}\r\n.row .col.pull-s9{right:75%}\r\n.row .col.push-s9{left:75%}\r\n.row .col.offset-s10{margin-left:83.3333333333%}\r\n.row .col.pull-s10{right:83.3333333333%}\r\n.row .col.push-s10{left:83.3333333333%}\r\n.row .col.offset-s11{margin-left:91.6666666667%}\r\n.row .col.pull-s11{right:91.6666666667%}\r\n.row .col.push-s11{left:91.6666666667%}\r\n.row .col.offset-s12{margin-left:100%}\r\n.row .col.pull-s12{right:100%}\r\n.row .col.push-s12{left:100%}\r\n@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}\r\n@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}\r\n@media only screen and (min-width: 1201px){.row .col.xl1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl1{margin-left:8.3333333333%}.row .col.pull-xl1{right:8.3333333333%}.row .col.push-xl1{left:8.3333333333%}.row .col.offset-xl2{margin-left:16.6666666667%}.row .col.pull-xl2{right:16.6666666667%}.row .col.push-xl2{left:16.6666666667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.3333333333%}.row .col.pull-xl4{right:33.3333333333%}.row .col.push-xl4{left:33.3333333333%}.row .col.offset-xl5{margin-left:41.6666666667%}.row .col.pull-xl5{right:41.6666666667%}.row .col.push-xl5{left:41.6666666667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.3333333333%}.row .col.pull-xl7{right:58.3333333333%}.row .col.push-xl7{left:58.3333333333%}.row .col.offset-xl8{margin-left:66.6666666667%}.row .col.pull-xl8{right:66.6666666667%}.row .col.push-xl8{left:66.6666666667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.3333333333%}.row .col.pull-xl10{right:83.3333333333%}.row .col.push-xl10{left:83.3333333333%}.row .col.offset-xl11{margin-left:91.6666666667%}.row .col.pull-xl11{right:91.6666666667%}.row .col.push-xl11{left:91.6666666667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}\r\nnav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}\r\nnav.nav-extended{height:auto}\r\nnav.nav-extended .nav-wrapper{min-height:56px;height:auto}\r\nnav.nav-extended .nav-content{position:relative;line-height:normal}\r\nnav a{color:#fff}\r\nnav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}\r\nnav .nav-wrapper{position:relative;height:100%}\r\n@media only screen and (min-width: 993px){nav a.button-collapse{display:none}}\r\nnav .button-collapse{float:left;position:relative;z-index:1;height:56px;margin:0 18px}\r\nnav .button-collapse i{height:56px;line-height:56px}\r\nnav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}\r\nnav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\r\n@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}\r\nnav .brand-logo.right{right:0.5rem;padding:0}\r\nnav .brand-logo i,nav .brand-logo [class^=\"mdi-\"],nav .brand-logo [class*=\"mdi-\"],nav .brand-logo i.material-icons{float:left;margin-right:15px}\r\nnav .nav-title{display:inline-block;font-size:32px;padding:28px 0}\r\nnav ul{margin:0}\r\nnav ul li{-webkit-transition:background-color .3s;transition:background-color .3s;float:left;padding:0}\r\nnav ul li.active{background-color:rgba(0,0,0,0.1)}\r\nnav ul a{-webkit-transition:background-color .3s;transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}\r\nnav ul a.btn,nav ul a.btn-large,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}\r\nnav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}\r\nnav ul a:hover{background-color:rgba(0,0,0,0.1)}\r\nnav ul.left{float:left}\r\nnav form{height:100%}\r\nnav .input-field{margin:0;height:100%}\r\nnav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}\r\nnav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;-webkit-box-shadow:none;box-shadow:none}\r\nnav .input-field label{top:0;left:0}\r\nnav .input-field label i{color:rgba(255,255,255,0.7);-webkit-transition:color .3s;transition:color .3s}\r\nnav .input-field label.active i{color:#fff}\r\n.navbar-fixed{position:relative;height:56px;z-index:997}\r\n.navbar-fixed nav{position:fixed}\r\n@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.button-collapse,nav a.button-collapse i{height:64px;line-height:64px}.navbar-fixed{height:64px}}\r\n@font-face{font-family:\"Roboto\";src:local(Roboto Thin),url('Roboto-Thin.1f35e6a11d27d2e10d28.woff2') format(\"woff2\"),url('Roboto-Thin.44b78f142603eb69f593.woff') format(\"woff\");font-weight:100}\r\n@font-face{font-family:\"Roboto\";src:local(Roboto Light),url('Roboto-Light.3c37aa69cd77e6a53a06.woff2') format(\"woff2\"),url('Roboto-Light.ea36cd9a0e9eee97012a.woff') format(\"woff\");font-weight:300}\r\n@font-face{font-family:\"Roboto\";src:local(Roboto Regular),url('Roboto-Regular.5136cbe62a63604402f2.woff2') format(\"woff2\"),url('Roboto-Regular.3cf6adf61054c328b1b0.woff') format(\"woff\");font-weight:400}\r\n@font-face{font-family:\"Roboto\";src:local(Roboto Medium),url('Roboto-Medium.1561b424aaef2f704bbd.woff2') format(\"woff2\"),url('Roboto-Medium.cf4d60bc0b1d4b231408.woff') format(\"woff\");font-weight:500}\r\n@font-face{font-family:\"Roboto\";src:local(Roboto Bold),url('Roboto-Bold.c0f1e4a4fdfb8048c72e.woff2') format(\"woff2\"),url('Roboto-Bold.eed9aab5449cc9c8430d.woff') format(\"woff\");font-weight:700}\r\na{text-decoration:none}\r\nhtml{line-height:1.5;font-family:\"Roboto\", sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}\r\n@media only screen and (min-width: 0){html{font-size:14px}}\r\n@media only screen and (min-width: 992px){html{font-size:14.5px}}\r\n@media only screen and (min-width: 1200px){html{font-size:15px}}\r\nh1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.1}\r\nh1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}\r\nh1{font-size:4.2rem;line-height:110%;margin:2.1rem 0 1.68rem 0}\r\nh2{font-size:3.56rem;line-height:110%;margin:1.78rem 0 1.424rem 0}\r\nh3{font-size:2.92rem;line-height:110%;margin:1.46rem 0 1.168rem 0}\r\nh4{font-size:2.28rem;line-height:110%;margin:1.14rem 0 .912rem 0}\r\nh5{font-size:1.64rem;line-height:110%;margin:.82rem 0 .656rem 0}\r\nh6{font-size:1rem;line-height:110%;margin:.5rem 0 .4rem 0}\r\nem{font-style:italic}\r\nstrong{font-weight:500}\r\nsmall{font-size:75%}\r\n.light,.page-footer .footer-copyright{font-weight:300}\r\n.thin{font-weight:200}\r\n.flow-text{font-weight:300}\r\n@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}\r\n@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}\r\n@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}\r\n@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}\r\n@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}\r\n@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}\r\n@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}\r\n@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}\r\n@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}\r\n@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}\r\n@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}\r\n@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}\r\n@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}\r\n@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}\r\n@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}\r\n@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}\r\n@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}\r\n@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}\r\n@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}\r\n@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}\r\n@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}\r\n@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}\r\n.scale-transition{-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}\r\n.scale-transition.scale-out{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .2s !important;transition:-webkit-transform .2s !important;transition:transform .2s !important;transition:transform .2s, -webkit-transform .2s !important}\r\n.scale-transition.scale-in{-webkit-transform:scale(1);transform:scale(1)}\r\n.card-panel{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}\r\n.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;border-radius:2px}\r\n.card .card-title{font-size:24px;font-weight:300}\r\n.card .card-title.activator{cursor:pointer}\r\n.card.small,.card.medium,.card.large{position:relative}\r\n.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}\r\n.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}\r\n.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}\r\n.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}\r\n.card.small{height:300px}\r\n.card.medium{height:400px}\r\n.card.large{height:500px}\r\n.card.horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}\r\n.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}\r\n.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}\r\n.card.horizontal .card-image{max-width:50%}\r\n.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}\r\n.card.horizontal .card-stacked{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative}\r\n.card.horizontal .card-stacked .card-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}\r\n.card.sticky-action .card-action{z-index:2}\r\n.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}\r\n.card .card-image{position:relative}\r\n.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}\r\n.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}\r\n.card .card-content{padding:24px;border-radius:0 0 2px 2px}\r\n.card .card-content p{margin:0;color:inherit}\r\n.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}\r\n.card .card-content .card-title i{line-height:32px}\r\n.card .card-action{position:relative;background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);padding:16px 24px}\r\n.card .card-action:last-child{border-radius:0 0 2px 2px}\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;-webkit-transition:color .3s ease;transition:color .3s ease;text-transform:uppercase}\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}\r\n.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}\r\n.card .card-reveal .card-title{cursor:pointer;display:block}\r\n#toast-container{display:block;position:fixed;z-index:10000}\r\n@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}\r\n@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}\r\n@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}\r\n.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;word-break:break-all;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:default}\r\n.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}\r\n.toast.rounded{border-radius:24px}\r\n@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}\r\n.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}\r\n.tabs.tabs-transparent{background-color:transparent}\r\n.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}\r\n.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}\r\n.tabs.tabs-transparent .indicator{background-color:#fff}\r\n.tabs.tabs-fixed-width{display:-webkit-box;display:-ms-flexbox;display:flex}\r\n.tabs.tabs-fixed-width .tab{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}\r\n.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}\r\n.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;-webkit-transition:color .28s ease;transition:color .28s ease}\r\n.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}\r\n.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.7);cursor:default}\r\n.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}\r\n@media only screen and (max-width: 992px){.tabs{display:-webkit-box;display:-ms-flexbox;display:flex}.tabs .tab{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab a{padding:0 12px}}\r\n.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden}\r\n.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;visibility:hidden}\r\n.btn,.btn-large,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 2rem;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}\r\n.btn.disabled,.disabled.btn-large,.btn-floating.disabled,.btn-large.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-flat:disabled,.btn[disabled],[disabled].btn-large,.btn-floating[disabled],.btn-large[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;-webkit-box-shadow:none;box-shadow:none;color:#9F9F9F !important;cursor:default}\r\n.btn.disabled:hover,.disabled.btn-large:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,[disabled].btn-large:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}\r\n.btn,.btn-large,.btn-floating,.btn-large,.btn-flat{font-size:1rem;outline:0}\r\n.btn i,.btn-large i,.btn-floating i,.btn-large i,.btn-flat i{font-size:1.3rem;line-height:inherit}\r\n.btn:focus,.btn-large:focus,.btn-floating:focus{background-color:#1d7d74}\r\n.btn,.btn-large{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;-webkit-transition:.2s ease-out;transition:.2s ease-out;cursor:pointer}\r\n.btn:hover,.btn-large:hover{background-color:#2bbbad}\r\n.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;-webkit-transition:.3s;transition:.3s;cursor:pointer;vertical-align:middle}\r\n.btn-floating:hover{background-color:#26a69a}\r\n.btn-floating:before{border-radius:0}\r\n.btn-floating.btn-large{width:56px;height:56px}\r\n.btn-floating.btn-large.halfway-fab{bottom:-28px}\r\n.btn-floating.btn-large i{line-height:56px}\r\n.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}\r\n.btn-floating.halfway-fab.left{right:auto;left:24px}\r\n.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}\r\nbutton.btn-floating{border:none}\r\n.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}\r\n.fixed-action-btn.active ul{visibility:visible}\r\n.fixed-action-btn.horizontal{padding:0 0 0 15px}\r\n.fixed-action-btn.horizontal ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}\r\n.fixed-action-btn.horizontal ul li{display:inline-block;margin:15px 15px 0 0}\r\n.fixed-action-btn.toolbar{padding:0;height:56px}\r\n.fixed-action-btn.toolbar.active>a i{opacity:0}\r\n.fixed-action-btn.toolbar ul{display:-webkit-box;display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}\r\n.fixed-action-btn.toolbar ul li{-webkit-box-flex:1;-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;-webkit-transition:none;transition:none}\r\n.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff;line-height:56px;z-index:1}\r\n.fixed-action-btn.toolbar ul li a i{line-height:inherit}\r\n.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}\r\n.fixed-action-btn ul li{margin-bottom:15px}\r\n.fixed-action-btn ul a.btn-floating{opacity:0}\r\n.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}\r\n.btn-flat{-webkit-box-shadow:none;box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;-webkit-transition:background-color .2s;transition:background-color .2s}\r\n.btn-flat:focus,.btn-flat:hover{-webkit-box-shadow:none;box-shadow:none}\r\n.btn-flat:focus{background-color:rgba(0,0,0,0.1)}\r\n.btn-flat.disabled{background-color:transparent !important;color:#b3b2b2 !important;cursor:default}\r\n.btn-large{height:54px;line-height:54px}\r\n.btn-large i{font-size:1.6rem}\r\n.btn-block{display:block}\r\n.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;max-height:650px;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width, height}\r\n.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left;text-transform:none}\r\n.dropdown-content li:hover,.dropdown-content li.active,.dropdown-content li.selected{background-color:#eee}\r\n.dropdown-content li.active.selected{background-color:#e1e1e1}\r\n.dropdown-content li.divider{min-height:0;height:1px}\r\n.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}\r\n.dropdown-content li>span>label{top:1px;left:0;height:18px}\r\n.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}\r\n.input-field.col .dropdown-content [type=\"checkbox\"]+label{top:1px;left:0;height:18px}\r\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */\r\n.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out}\r\n.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);-webkit-transition:all 0.7s ease-out;transition:all 0.7s ease-out;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}\r\n.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}\r\n.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}\r\n.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}\r\n.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}\r\n.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}\r\n.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}\r\n.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}\r\n.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}\r\n.waves-effect img{position:relative;z-index:-1}\r\n.waves-notransition{-webkit-transition:none !important;transition:none !important}\r\n.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}\r\n.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}\r\n.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}\r\n.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}\r\n.waves-block{display:block}\r\n.waves-effect .waves-ripple{z-index:-1}\r\n.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}\r\n@media only screen and (max-width: 992px){.modal{width:80%}}\r\n.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}\r\n.modal .modal-content{padding:24px}\r\n.modal .modal-close{cursor:pointer}\r\n.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}\r\n.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-flat{margin:6px 0}\r\n.modal-overlay{position:fixed;z-index:999;top:-25%;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}\r\n.modal.modal-fixed-footer{padding:0;height:70%}\r\n.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}\r\n.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}\r\n.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}\r\n.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}\r\n.collapsible-header{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}\r\n.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}\r\n.collapsible-body{display:none;border-bottom:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box;padding:2rem}\r\n.side-nav .collapsible,.side-nav.fixed .collapsible{border:none;-webkit-box-shadow:none;box-shadow:none}\r\n.side-nav .collapsible li,.side-nav.fixed .collapsible li{padding:0}\r\n.side-nav .collapsible-header,.side-nav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}\r\n.side-nav .collapsible-header:hover,.side-nav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}\r\n.side-nav .collapsible-header i,.side-nav.fixed .collapsible-header i{line-height:inherit}\r\n.side-nav .collapsible-body,.side-nav.fixed .collapsible-body{border:0;background-color:#fff}\r\n.side-nav .collapsible-body li a,.side-nav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}\r\n.collapsible.popout{border:none;-webkit-box-shadow:none;box-shadow:none}\r\n.collapsible.popout>li{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;-webkit-transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}\r\n.collapsible.popout>li.active{-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}\r\n.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}\r\n.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}\r\n.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}\r\n.chips{border:none;border-bottom:1px solid #9e9e9e;-webkit-box-shadow:none;box-shadow:none;margin:0 0 20px 0;min-height:45px;outline:none;-webkit-transition:all .3s;transition:all .3s}\r\n.chips.focus{border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}\r\n.chips:hover{cursor:text}\r\n.chips .chip.selected{background-color:#26a69a;color:#fff}\r\n.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:1rem;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}\r\n.chips .input:focus{border:0 !important;-webkit-box-shadow:none !important;box-shadow:none !important}\r\n.chips .autocomplete-content{margin-top:0;margin-bottom:0}\r\n.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}\r\n.chips:empty ~ label{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}\r\n.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;-webkit-transition:opacity .4s;transition:opacity .4s;-webkit-backface-visibility:hidden}\r\n.materialboxed:hover:not(.active){opacity:.8}\r\n.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}\r\n#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}\r\n.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}\r\nselect:focus{outline:1px solid #c9f3ef}\r\nbutton:focus{outline:none;background-color:#2ab7a9}\r\nlabel{font-size:.8rem;color:#9e9e9e}\r\n::-webkit-input-placeholder{color:#d1d1d1}\r\n:-ms-input-placeholder{color:#d1d1d1}\r\n::-ms-input-placeholder{color:#d1d1d1}\r\n::placeholder{color:#d1d1d1}\r\ninput:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:1rem;margin:0 0 20px 0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transition:all 0.3s;transition:all 0.3s}\r\ninput:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly=\"readonly\"],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly=\"readonly\"],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly=\"readonly\"],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly=\"readonly\"],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly=\"readonly\"],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly=\"readonly\"],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly=\"readonly\"],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.42);border-bottom:1px dotted rgba(0,0,0,0.42)}\r\ninput:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.42)}\r\ninput:not([type]):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}\r\ninput:not([type]):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}\r\ninput:not([type]).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}\r\ninput:not([type]).invalid+label:after,input:not([type]).valid+label:after,input[type=text]:not(.browser-default).invalid+label:after,input[type=text]:not(.browser-default).valid+label:after,input[type=password]:not(.browser-default).invalid+label:after,input[type=password]:not(.browser-default).valid+label:after,input[type=email]:not(.browser-default).invalid+label:after,input[type=email]:not(.browser-default).valid+label:after,input[type=url]:not(.browser-default).invalid+label:after,input[type=url]:not(.browser-default).valid+label:after,input[type=time]:not(.browser-default).invalid+label:after,input[type=time]:not(.browser-default).valid+label:after,input[type=date]:not(.browser-default).invalid+label:after,input[type=date]:not(.browser-default).valid+label:after,input[type=datetime]:not(.browser-default).invalid+label:after,input[type=datetime]:not(.browser-default).valid+label:after,input[type=datetime-local]:not(.browser-default).invalid+label:after,input[type=datetime-local]:not(.browser-default).valid+label:after,input[type=tel]:not(.browser-default).invalid+label:after,input[type=tel]:not(.browser-default).valid+label:after,input[type=number]:not(.browser-default).invalid+label:after,input[type=number]:not(.browser-default).valid+label:after,input[type=search]:not(.browser-default).invalid+label:after,input[type=search]:not(.browser-default).valid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea.valid+label:after{display:none}\r\ninput:not([type]).invalid+label.active:after,input:not([type]).valid+label.active:after,input[type=text]:not(.browser-default).invalid+label.active:after,input[type=text]:not(.browser-default).valid+label.active:after,input[type=password]:not(.browser-default).invalid+label.active:after,input[type=password]:not(.browser-default).valid+label.active:after,input[type=email]:not(.browser-default).invalid+label.active:after,input[type=email]:not(.browser-default).valid+label.active:after,input[type=url]:not(.browser-default).invalid+label.active:after,input[type=url]:not(.browser-default).valid+label.active:after,input[type=time]:not(.browser-default).invalid+label.active:after,input[type=time]:not(.browser-default).valid+label.active:after,input[type=date]:not(.browser-default).invalid+label.active:after,input[type=date]:not(.browser-default).valid+label.active:after,input[type=datetime]:not(.browser-default).invalid+label.active:after,input[type=datetime]:not(.browser-default).valid+label.active:after,input[type=datetime-local]:not(.browser-default).invalid+label.active:after,input[type=datetime-local]:not(.browser-default).valid+label.active:after,input[type=tel]:not(.browser-default).invalid+label.active:after,input[type=tel]:not(.browser-default).valid+label.active:after,input[type=number]:not(.browser-default).invalid+label.active:after,input[type=number]:not(.browser-default).valid+label.active:after,input[type=search]:not(.browser-default).invalid+label.active:after,input[type=search]:not(.browser-default).valid+label.active:after,textarea.materialize-textarea.invalid+label.active:after,textarea.materialize-textarea.valid+label.active:after{display:block}\r\ninput.valid:not([type]),input.valid:not([type]):focus,input[type=text].valid:not(.browser-default),input[type=text].valid:not(.browser-default):focus,input[type=password].valid:not(.browser-default),input[type=password].valid:not(.browser-default):focus,input[type=email].valid:not(.browser-default),input[type=email].valid:not(.browser-default):focus,input[type=url].valid:not(.browser-default),input[type=url].valid:not(.browser-default):focus,input[type=time].valid:not(.browser-default),input[type=time].valid:not(.browser-default):focus,input[type=date].valid:not(.browser-default),input[type=date].valid:not(.browser-default):focus,input[type=datetime].valid:not(.browser-default),input[type=datetime].valid:not(.browser-default):focus,input[type=datetime-local].valid:not(.browser-default),input[type=datetime-local].valid:not(.browser-default):focus,input[type=tel].valid:not(.browser-default),input[type=tel].valid:not(.browser-default):focus,input[type=number].valid:not(.browser-default),input[type=number].valid:not(.browser-default):focus,input[type=search].valid:not(.browser-default),input[type=search].valid:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus,.select-wrapper.valid>input.select-dropdown{border-bottom:1px solid #4CAF50;-webkit-box-shadow:0 1px 0 0 #4CAF50;box-shadow:0 1px 0 0 #4CAF50}\r\ninput.invalid:not([type]),input.invalid:not([type]):focus,input[type=text].invalid:not(.browser-default),input[type=text].invalid:not(.browser-default):focus,input[type=password].invalid:not(.browser-default),input[type=password].invalid:not(.browser-default):focus,input[type=email].invalid:not(.browser-default),input[type=email].invalid:not(.browser-default):focus,input[type=url].invalid:not(.browser-default),input[type=url].invalid:not(.browser-default):focus,input[type=time].invalid:not(.browser-default),input[type=time].invalid:not(.browser-default):focus,input[type=date].invalid:not(.browser-default),input[type=date].invalid:not(.browser-default):focus,input[type=datetime].invalid:not(.browser-default),input[type=datetime].invalid:not(.browser-default):focus,input[type=datetime-local].invalid:not(.browser-default),input[type=datetime-local].invalid:not(.browser-default):focus,input[type=tel].invalid:not(.browser-default),input[type=tel].invalid:not(.browser-default):focus,input[type=number].invalid:not(.browser-default),input[type=number].invalid:not(.browser-default):focus,input[type=search].invalid:not(.browser-default),input[type=search].invalid:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus,.select-wrapper.invalid>input.select-dropdown{border-bottom:1px solid #F44336;-webkit-box-shadow:0 1px 0 0 #F44336;box-shadow:0 1px 0 0 #F44336}\r\ninput:not([type]).valid+label:after,input:not([type]):focus.valid+label:after,input[type=text]:not(.browser-default).valid+label:after,input[type=text]:not(.browser-default):focus.valid+label:after,input[type=password]:not(.browser-default).valid+label:after,input[type=password]:not(.browser-default):focus.valid+label:after,input[type=email]:not(.browser-default).valid+label:after,input[type=email]:not(.browser-default):focus.valid+label:after,input[type=url]:not(.browser-default).valid+label:after,input[type=url]:not(.browser-default):focus.valid+label:after,input[type=time]:not(.browser-default).valid+label:after,input[type=time]:not(.browser-default):focus.valid+label:after,input[type=date]:not(.browser-default).valid+label:after,input[type=date]:not(.browser-default):focus.valid+label:after,input[type=datetime]:not(.browser-default).valid+label:after,input[type=datetime]:not(.browser-default):focus.valid+label:after,input[type=datetime-local]:not(.browser-default).valid+label:after,input[type=datetime-local]:not(.browser-default):focus.valid+label:after,input[type=tel]:not(.browser-default).valid+label:after,input[type=tel]:not(.browser-default):focus.valid+label:after,input[type=number]:not(.browser-default).valid+label:after,input[type=number]:not(.browser-default):focus.valid+label:after,input[type=search]:not(.browser-default).valid+label:after,input[type=search]:not(.browser-default):focus.valid+label:after,textarea.materialize-textarea.valid+label:after,textarea.materialize-textarea:focus.valid+label:after,.select-wrapper.valid+label:after{content:attr(data-success);color:#4CAF50;opacity:1;-webkit-transform:translateY(9px);transform:translateY(9px)}\r\ninput:not([type]).invalid+label:after,input:not([type]):focus.invalid+label:after,input[type=text]:not(.browser-default).invalid+label:after,input[type=text]:not(.browser-default):focus.invalid+label:after,input[type=password]:not(.browser-default).invalid+label:after,input[type=password]:not(.browser-default):focus.invalid+label:after,input[type=email]:not(.browser-default).invalid+label:after,input[type=email]:not(.browser-default):focus.invalid+label:after,input[type=url]:not(.browser-default).invalid+label:after,input[type=url]:not(.browser-default):focus.invalid+label:after,input[type=time]:not(.browser-default).invalid+label:after,input[type=time]:not(.browser-default):focus.invalid+label:after,input[type=date]:not(.browser-default).invalid+label:after,input[type=date]:not(.browser-default):focus.invalid+label:after,input[type=datetime]:not(.browser-default).invalid+label:after,input[type=datetime]:not(.browser-default):focus.invalid+label:after,input[type=datetime-local]:not(.browser-default).invalid+label:after,input[type=datetime-local]:not(.browser-default):focus.invalid+label:after,input[type=tel]:not(.browser-default).invalid+label:after,input[type=tel]:not(.browser-default):focus.invalid+label:after,input[type=number]:not(.browser-default).invalid+label:after,input[type=number]:not(.browser-default):focus.invalid+label:after,input[type=search]:not(.browser-default).invalid+label:after,input[type=search]:not(.browser-default):focus.invalid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea:focus.invalid+label:after,.select-wrapper.invalid+label:after{content:attr(data-error);color:#F44336;opacity:1;-webkit-transform:translateY(9px);transform:translateY(9px)}\r\ninput:not([type])+label:after,input[type=text]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after,.select-wrapper+label:after{display:block;content:\"\";position:absolute;top:100%;left:0;opacity:0;-webkit-transition:.2s opacity ease-out, .2s color ease-out;transition:.2s opacity ease-out, .2s color ease-out}\r\n.input-field{position:relative;margin-top:1rem}\r\n.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}\r\n.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}\r\n.input-field.col label{left:.75rem}\r\n.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}\r\n.input-field label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out, -webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;-webkit-transform:translateY(12px);transform:translateY(12px);pointer-events:none}\r\n.input-field label:not(.label-icon).active{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}\r\n.input-field .prefix{position:absolute;width:3rem;font-size:2rem;-webkit-transition:color .2s;transition:color .2s}\r\n.input-field .prefix.active{color:#26a69a}\r\n.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}\r\n.input-field .prefix ~ label{margin-left:3rem}\r\n@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}\r\n@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}\r\n.input-field input[type=search]{display:block;line-height:inherit}\r\n.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;-webkit-box-shadow:none;box-shadow:none}\r\n.input-field input[type=search]:focus{background-color:#fff;border:0;-webkit-box-shadow:none;box-shadow:none;color:#444}\r\n.input-field input[type=search]:focus+label i,.input-field input[type=search]:focus ~ .mdi-navigation-close,.input-field input[type=search]:focus ~ .material-icons{color:#444}\r\n.input-field input[type=search]+label{left:1rem}\r\n.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;-webkit-transition:.3s color;transition:.3s color}\r\ntextarea{width:100%;height:3rem;background-color:transparent}\r\ntextarea.materialize-textarea{overflow-y:hidden;padding:.8rem 0 1.6rem 0;resize:none;min-height:3rem}\r\ntextarea.materialize-textarea.validate+label{height:100%}\r\ntextarea.materialize-textarea.validate+label::after{top:calc(100% - 12px)}\r\ntextarea.materialize-textarea.validate+label:not(.label-icon).active{-webkit-transform:translateY(-25px);transform:translateY(-25px)}\r\n.hiddendiv{display:none;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0}\r\n.autocomplete-content{margin-top:-20px;margin-bottom:20px;display:block;opacity:1;position:static}\r\n.autocomplete-content li .highlight{color:#444}\r\n.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}\r\n[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;opacity:0;pointer-events:none}\r\n[type=\"radio\"]:not(:checked)+label,[type=\"radio\"]:checked+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-transition:.28s ease;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n[type=\"radio\"]+label:before,[type=\"radio\"]+label:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;-webkit-transition:.28s ease;transition:.28s ease}\r\n[type=\"radio\"]:not(:checked)+label:before,[type=\"radio\"]:not(:checked)+label:after,[type=\"radio\"]:checked+label:before,[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:before,[type=\"radio\"].with-gap:checked+label:after{border-radius:50%}\r\n[type=\"radio\"]:not(:checked)+label:before,[type=\"radio\"]:not(:checked)+label:after{border:2px solid #5a5a5a}\r\n[type=\"radio\"]:not(:checked)+label:after{-webkit-transform:scale(0);transform:scale(0)}\r\n[type=\"radio\"]:checked+label:before{border:2px solid transparent}\r\n[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:before,[type=\"radio\"].with-gap:checked+label:after{border:2px solid #26a69a}\r\n[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:after{background-color:#26a69a}\r\n[type=\"radio\"]:checked+label:after{-webkit-transform:scale(1.02);transform:scale(1.02)}\r\n[type=\"radio\"].with-gap:checked+label:after{-webkit-transform:scale(0.5);transform:scale(0.5)}\r\n[type=\"radio\"].tabbed:focus+label:before{-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1)}\r\n[type=\"radio\"].with-gap:disabled:checked+label:before{border:2px solid rgba(0,0,0,0.42)}\r\n[type=\"radio\"].with-gap:disabled:checked+label:after{border:none;background-color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled:not(:checked)+label:before,[type=\"radio\"]:disabled:checked+label:before{background-color:transparent;border-color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled+label{color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled:not(:checked)+label:before{border-color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled:checked+label:after{background-color:rgba(0,0,0,0.42);border-color:#949494}\r\nform p{margin-bottom:10px;text-align:left}\r\nform p:last-child{margin-bottom:0}\r\n[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;opacity:0;pointer-events:none}\r\n[type=\"checkbox\"]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n[type=\"checkbox\"]+label:before,[type=\"checkbox\"]:not(.filled-in)+label:after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:2px;-webkit-transition:.2s;transition:.2s}\r\n[type=\"checkbox\"]:not(.filled-in)+label:after{border:0;-webkit-transform:scale(0);transform:scale(0)}\r\n[type=\"checkbox\"]:not(:checked):disabled+label:before{border:none;background-color:rgba(0,0,0,0.42)}\r\n[type=\"checkbox\"].tabbed:focus+label:after{-webkit-transform:scale(1);transform:scale(1);border:0;border-radius:50%;-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}\r\n[type=\"checkbox\"]:checked+label:before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}\r\n[type=\"checkbox\"]:checked:disabled+label:before{border-right:2px solid rgba(0,0,0,0.42);border-bottom:2px solid rgba(0,0,0,0.42)}\r\n[type=\"checkbox\"]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}\r\n[type=\"checkbox\"]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,0.42);background-color:transparent}\r\n[type=\"checkbox\"].filled-in+label:after{border-radius:2px}\r\n[type=\"checkbox\"].filled-in+label:before,[type=\"checkbox\"].filled-in+label:after{content:'';left:0;position:absolute;-webkit-transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}\r\n[type=\"checkbox\"].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}\r\n[type=\"checkbox\"].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}\r\n[type=\"checkbox\"].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}\r\n[type=\"checkbox\"].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}\r\n[type=\"checkbox\"].filled-in.tabbed:focus+label:after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}\r\n[type=\"checkbox\"].filled-in.tabbed:checked:focus+label:after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}\r\n[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:before{background-color:transparent;border:2px solid transparent}\r\n[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:after{border-color:transparent;background-color:#949494}\r\n[type=\"checkbox\"].filled-in:disabled:checked+label:before{background-color:transparent}\r\n[type=\"checkbox\"].filled-in:disabled:checked+label:after{background-color:#949494;border-color:#949494}\r\n.switch,.switch *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.switch label{cursor:pointer}\r\n.switch label input[type=checkbox]{opacity:0;width:0;height:0}\r\n.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}\r\n.switch label input[type=checkbox]:checked+.lever:before,.switch label input[type=checkbox]:checked+.lever:after{left:18px}\r\n.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}\r\n.switch label .lever{content:\"\";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,0.38);border-radius:15px;margin-right:10px;-webkit-transition:background 0.3s ease;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}\r\n.switch label .lever:before,.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;-webkit-transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease}\r\n.switch label .lever:before{background-color:rgba(38,166,154,0.15)}\r\n.switch label .lever:after{background-color:#F1F1F1;-webkit-box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}\r\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(38,166,154,0.15)}\r\ninput[type=checkbox]:not(:disabled) ~ .lever:active:before,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(0,0,0,0.08)}\r\n.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,0.12)}\r\n.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}\r\nselect{display:none}\r\nselect.browser-default{display:block}\r\nselect{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}\r\n.input-field>select{display:block;position:absolute;width:0;pointer-events:none;height:0;top:0;left:0;opacity:0}\r\n.select-label{position:absolute}\r\n.select-wrapper{position:relative}\r\n.select-wrapper.valid+label,.select-wrapper.invalid+label{width:100%;pointer-events:none}\r\n.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:1rem;margin:0 0 20px 0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.select-wrapper span.caret{color:initial;position:absolute;right:0;top:0;bottom:0;height:10px;margin:auto 0;font-size:10px;line-height:10px}\r\n.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}\r\nselect:disabled{color:rgba(0,0,0,0.42)}\r\n.select-wrapper.disabled span.caret,.select-wrapper.disabled+label{color:rgba(0,0,0,0.42)}\r\n.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.42);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.select-wrapper i{color:rgba(0,0,0,0.3)}\r\n.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}\r\n.select-dropdown.dropdown-content li.active{background-color:transparent}\r\n.select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,0.06)}\r\n.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,0.03)}\r\n.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}\r\n.prefix ~ label{margin-left:3rem}\r\n.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}\r\n.select-dropdown li.optgroup{border-top:1px solid #eee}\r\n.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}\r\n.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}\r\n.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}\r\n.file-field{position:relative}\r\n.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}\r\n.file-field input.file-path{width:100%}\r\n.file-field .btn,.file-field .btn-large{float:left;height:3rem;line-height:3rem}\r\n.file-field span{cursor:pointer}\r\n.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}\r\n.file-field input[type=file]::-webkit-file-upload-button{display:none}\r\n.range-field{position:relative}\r\ninput[type=range],input[type=range]+.thumb{cursor:pointer}\r\ninput[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}\r\ninput[type=range]:focus{outline:none}\r\ninput[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}\r\ninput[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}\r\ninput[type=range]+.thumb.active{border-radius:50% 50% 50% 0}\r\ninput[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}\r\ninput[type=range]{-webkit-appearance:none}\r\ninput[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}\r\ninput[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0;-webkit-transition:.3s;transition:.3s}\r\ninput[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}\r\ninput[type=range]{border:1px solid white}\r\ninput[type=range]::-moz-range-track{height:3px;background:#ddd;border:none}\r\ninput[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;margin-top:-5px}\r\ninput[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}\r\ninput[type=range]:focus::-moz-range-track{background:#ccc}\r\ninput[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}\r\ninput[type=range]::-ms-fill-lower{background:#777}\r\ninput[type=range]::-ms-fill-upper{background:#ddd}\r\ninput[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a}\r\ninput[type=range]:focus::-ms-fill-lower{background:#888}\r\ninput[type=range]:focus::-ms-fill-upper{background:#ccc}\r\n.table-of-contents.fixed{position:fixed}\r\n.table-of-contents li{padding:2px 0}\r\n.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:20px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}\r\n.table-of-contents a:hover{color:#a8a8a8;padding-left:19px;border-left:1px solid #ee6e73}\r\n.table-of-contents a.active{font-weight:500;padding-left:18px;border-left:2px solid #ee6e73}\r\n.side-nav{position:fixed;width:300px;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-105%);transform:translateX(-105%)}\r\n.side-nav.right-aligned{right:0;-webkit-transform:translateX(105%);transform:translateX(105%);left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}\r\n.side-nav .collapsible{margin:0}\r\n.side-nav li{float:none;line-height:48px}\r\n.side-nav li.active{background-color:rgba(0,0,0,0.05)}\r\n.side-nav li>a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}\r\n.side-nav li>a:hover{background-color:rgba(0,0,0,0.05)}\r\n.side-nav li>a.btn,.side-nav li>a.btn-large,.side-nav li>a.btn-large,.side-nav li>a.btn-flat,.side-nav li>a.btn-floating{margin:10px 15px}\r\n.side-nav li>a.btn,.side-nav li>a.btn-large,.side-nav li>a.btn-large,.side-nav li>a.btn-floating{color:#fff}\r\n.side-nav li>a.btn-flat{color:#343434}\r\n.side-nav li>a.btn:hover,.side-nav li>a.btn-large:hover,.side-nav li>a.btn-large:hover{background-color:#2bbbad}\r\n.side-nav li>a.btn-floating:hover{background-color:#26a69a}\r\n.side-nav li>a>i,.side-nav li>a>[class^=\"mdi-\"],.side-nav li>a li>a>[class*=\"mdi-\"],.side-nav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}\r\n.side-nav .divider{margin:8px 0 0 0}\r\n.side-nav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}\r\n.side-nav .subheader:hover{background-color:transparent}\r\n.side-nav .user-view,.side-nav .userView{position:relative;padding:32px 32px 0;margin-bottom:8px}\r\n.side-nav .user-view>a,.side-nav .userView>a{height:auto;padding:0}\r\n.side-nav .user-view>a:hover,.side-nav .userView>a:hover{background-color:transparent}\r\n.side-nav .user-view .background,.side-nav .userView .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}\r\n.side-nav .user-view .circle,.side-nav .user-view .name,.side-nav .user-view .email,.side-nav .userView .circle,.side-nav .userView .name,.side-nav .userView .email{display:block}\r\n.side-nav .user-view .circle,.side-nav .userView .circle{height:64px;width:64px}\r\n.side-nav .user-view .name,.side-nav .user-view .email,.side-nav .userView .name,.side-nav .userView .email{font-size:14px;line-height:24px}\r\n.side-nav .user-view .name,.side-nav .userView .name{margin-top:16px;font-weight:500}\r\n.side-nav .user-view .email,.side-nav .userView .email{padding-bottom:16px;font-weight:400}\r\n.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}\r\n.side-nav.fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}\r\n.side-nav.fixed.right-aligned{right:0;left:auto}\r\n@media only screen and (max-width: 992px){.side-nav.fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.side-nav.fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}.side-nav a{padding:0 16px}.side-nav .user-view,.side-nav .userView{padding:16px 16px 0}}\r\n.side-nav .collapsible-body>ul:not(.collapsible)>li.active,.side-nav.fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}\r\n.side-nav .collapsible-body>ul:not(.collapsible)>li.active a,.side-nav.fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}\r\n.side-nav .collapsible-body{padding:0}\r\n#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;will-change:opacity}\r\n.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}\r\n.preloader-wrapper.small{width:36px;height:36px}\r\n.preloader-wrapper.big{width:64px;height:64px}\r\n.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}\r\n@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}\r\n@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\r\n.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}\r\n.spinner-blue,.spinner-blue-only{border-color:#4285f4}\r\n.spinner-red,.spinner-red-only{border-color:#db4437}\r\n.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}\r\n.spinner-green,.spinner-green-only{border-color:#0f9d58}\r\n.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}\r\n@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}\r\n@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}\r\n@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}\r\n@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}\r\n@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}\r\n@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}\r\n@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}\r\n@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}\r\n@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}\r\n.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}\r\n.gap-patch .circle{width:1000%;left:-450%}\r\n.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}\r\n.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}\r\n.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}\r\n.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}\r\n.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}\r\n@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}\r\n@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}\r\n@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}\r\n#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}\r\n@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}\r\n@keyframes fade-out{from{opacity:1}to{opacity:0}}\r\n.slider{position:relative;height:400px;width:100%}\r\n.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}\r\n.slider.fullscreen ul.slides{height:100%}\r\n.slider.fullscreen ul.indicators{z-index:2;bottom:30px}\r\n.slider .slides{background-color:#9e9e9e;margin:0;height:400px}\r\n.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}\r\n.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}\r\n.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}\r\n.slider .slides li .caption p{color:#e0e0e0}\r\n.slider .slides li.active{z-index:2}\r\n.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}\r\n.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}\r\n.slider .indicators .indicator-item.active{background-color:#4CAF50}\r\n.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}\r\n.carousel.carousel-slider{top:0;left:0}\r\n.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}\r\n.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}\r\n.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}\r\n.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}\r\n.carousel.carousel-slider .carousel-item p{font-size:15px}\r\n.carousel .carousel-item{display:none;width:200px;height:200px;position:absolute;top:0;left:0}\r\n.carousel .carousel-item>img{width:100%}\r\n.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}\r\n.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}\r\n.carousel .indicators .indicator-item.active{background-color:#fff}\r\n.carousel.scrolling .carousel-item .materialboxed,.carousel .carousel-item:not(.active) .materialboxed{pointer-events:none}\r\n.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;-webkit-transition:visibility 0s .3s;transition:visibility 0s .3s}\r\n.tap-target-wrapper.open{visibility:visible;-webkit-transition:visibility 0s;transition:visibility 0s}\r\n.tap-target-wrapper.open .tap-target{-webkit-transform:scale(1);transform:scale(1);opacity:.95;-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}\r\n.tap-target-wrapper.open .tap-target-wave::before{-webkit-transform:scale(1);transform:scale(1)}\r\n.tap-target-wrapper.open .tap-target-wave::after{visibility:visible;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;-webkit-transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s}\r\n.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;-webkit-box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);width:100%;height:100%;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}\r\n.tap-target-content{position:relative;display:table-cell}\r\n.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}\r\n.tap-target-wave::before,.tap-target-wave::after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#ffffff}\r\n.tap-target-wave::before{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s}\r\n.tap-target-wave::after{visibility:hidden;-webkit-transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s;transition:opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;z-index:-1}\r\n.tap-target-origin{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:10002;position:absolute !important}\r\n.tap-target-origin:not(.btn):not(.btn-large),.tap-target-origin:not(.btn):not(.btn-large):hover{background:none}\r\n@media only screen and (max-width: 600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}\r\n.pulse{overflow:initial;position:relative}\r\n.pulse::before{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;-webkit-transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, transform .3s;transition:opacity .3s, transform .3s, -webkit-transform .3s;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}\r\n@-webkit-keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}\r\n@keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}\r\n.picker{font-size:16px;text-align:left;line-height:1.2;color:#000000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}\r\n.picker__input{cursor:default}\r\n.picker__input.picker__input--active{border-color:#0089ec}\r\n.picker__holder{width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}\r\n/*!\r\n * Default mobile-first, responsive styling for pickadate.js\r\n * Demo: http://amsul.github.io/pickadate.js\r\n */\r\n.picker__holder,.picker__frame{bottom:0;left:0;right:0;top:100%}\r\n.picker__holder{position:fixed;-webkit-transition:background 0.15s ease-out, top 0s 0.15s;transition:background 0.15s ease-out, top 0s 0.15s;-webkit-backface-visibility:hidden}\r\n.picker__frame{position:absolute;margin:0 auto;min-width:256px;width:300px;max-height:350px;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-moz-opacity:0;opacity:0;-webkit-transition:all 0.15s ease-out;transition:all 0.15s ease-out}\r\n@media (min-height: 28.875em){.picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}}\r\n@media (min-height: 40.125em){.picker__frame{margin-bottom:7.5%}}\r\n.picker__wrap{display:table;width:100%;height:100%}\r\n@media (min-height: 28.875em){.picker__wrap{display:block}}\r\n.picker__box{background:#ffffff;display:table-cell;vertical-align:middle}\r\n@media (min-height: 28.875em){.picker__box{display:block;border:1px solid #777777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;-webkit-box-shadow:0 12px 36px 16px rgba(0,0,0,0.24);box-shadow:0 12px 36px 16px rgba(0,0,0,0.24)}}\r\n.picker--opened .picker__holder{top:0;background:transparent;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";zoom:1;background:rgba(0,0,0,0.32);-webkit-transition:background 0.15s ease-out;transition:background 0.15s ease-out}\r\n.picker--opened .picker__frame{top:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-moz-opacity:1;opacity:1}\r\n@media (min-height: 35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}\r\n.picker__input.picker__input--active{border-color:#E3F2FD}\r\n.picker__frame{margin:0 auto;max-width:325px}\r\n@media (min-height: 38.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}\r\n@media only screen and (min-width: 601px){.picker__box{display:-webkit-box;display:-ms-flexbox;display:flex}.picker__frame{width:80%;max-width:600px}}\r\n.picker__box{padding:0;border-radius:2px;overflow:hidden}\r\n.picker__header{text-align:center;position:relative;margin-top:.75em}\r\n.picker__month,.picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}\r\n.picker__select--month,.picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em}\r\n.picker__select--month.browser-default{display:inline;background-color:#FFFFFF;width:40%}\r\n.picker__select--year.browser-default{display:inline;background-color:#FFFFFF;width:26%}\r\n.picker__select--month:focus,.picker__select--year:focus{border-color:rgba(0,0,0,0.05)}\r\n.picker__nav--prev,.picker__nav--next{position:absolute;padding:.5em 1.25em;width:1em;height:1em;-webkit-box-sizing:content-box;box-sizing:content-box;top:-0.25em}\r\n.picker__nav--prev{left:-1em;padding-right:1.25em}\r\n.picker__nav--next{right:-1em;padding-left:1.25em}\r\n.picker__nav--disabled,.picker__nav--disabled:hover,.picker__nav--disabled:before,.picker__nav--disabled:before:hover{cursor:default;background:none;border-right-color:#f5f5f5;border-left-color:#f5f5f5}\r\n.picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}\r\n.picker__table th,.picker__table td{text-align:center}\r\n.picker__table td{margin:0;padding:0}\r\n.picker__weekday{width:14.285714286%;font-size:.75em;padding-bottom:.25em;color:#999999;font-weight:500}\r\n@media (min-height: 33.875em){.picker__weekday{padding-bottom:.5em}}\r\n.picker__day--today{position:relative;color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}\r\n.picker__day--disabled:before{border-top-color:#aaaaaa}\r\n.picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}\r\n.picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}\r\n.picker__day--outfocus:hover{cursor:pointer;color:#dddddd;font-weight:500}\r\n.picker__day--highlighted:hover,.picker--focused .picker__day--highlighted{cursor:pointer}\r\n.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.75);transform:scale(0.75);background:#0089ec;color:#ffffff}\r\n.picker__day--disabled,.picker__day--disabled:hover,.picker--focused .picker__day--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}\r\n.picker__day--highlighted.picker__day--disabled,.picker__day--highlighted.picker__day--disabled:hover{background:#bbbbbb}\r\n.picker__footer{text-align:right}\r\n.picker__button--today,.picker__button--clear,.picker__button--close{border:1px solid #ffffff;background:#ffffff;font-size:.8em;padding:.66em 0;font-weight:bold;width:33%;display:inline-block;vertical-align:bottom}\r\n.picker__button--today:hover,.picker__button--clear:hover,.picker__button--close:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-bottom-color:#b1dcfb}\r\n.picker__button--today:focus,.picker__button--clear:focus,.picker__button--close:focus{background:#b1dcfb;border-color:rgba(0,0,0,0.05);outline:none}\r\n.picker__button--today:before,.picker__button--clear:before,.picker__button--close:before{position:relative;display:inline-block;height:0}\r\n.picker__button--today:before,.picker__button--clear:before{content:\" \";margin-right:.45em}\r\n.picker__button--today:before{top:-0.05em;width:0;border-top:0.66em solid #0059bc;border-left:.66em solid transparent}\r\n.picker__button--clear:before{top:-0.25em;width:.66em;border-top:3px solid #ee2200}\r\n.picker__button--close:before{content:\"\\D7\";top:-0.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777777}\r\n.picker__button--today[disabled],.picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}\r\n.picker__button--today[disabled]:before{border-top-color:#aaaaaa}\r\n.picker__date-display{text-align:left;background-color:#26a69a;color:#fff;padding:18px;font-weight:300}\r\n@media only screen and (min-width: 601px){.picker__date-display{-webkit-box-flex:1;-ms-flex:1;flex:1}.picker__weekday-display{display:block}.picker__container__wrapper{-webkit-box-flex:2;-ms-flex:2;flex:2}}\r\n.picker__nav--prev:hover,.picker__nav--next:hover{cursor:pointer;color:#000000;background:#a1ded8}\r\n.picker__weekday-display{font-weight:500;font-size:2.8rem;margin-right:5px;margin-top:4px}\r\n.picker__month-display{font-size:2.8rem;font-weight:500}\r\n.picker__day-display{font-size:2.8rem;font-weight:500;margin-right:5px}\r\n.picker__year-display{font-size:1.5rem;font-weight:500;color:rgba(255,255,255,0.7)}\r\n.picker__calendar-container{padding:0 1rem}\r\n.picker__calendar-container thead{border:none}\r\n.picker__table{margin-top:0;margin-bottom:.5em}\r\n.picker__day--infocus{color:rgba(0,0,0,0.87);letter-spacing:-.3px;padding:0.75rem 0;font-weight:400;border:1px solid transparent}\r\n@media only screen and (min-width: 601px){.picker__day--infocus{padding:1.1rem 0}}\r\n.picker__day.picker__day--today{color:#26a69a}\r\n.picker__day.picker__day--today.picker__day--selected{color:#fff}\r\n.picker__weekday{font-size:.9rem}\r\n.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.9);transform:scale(0.9);background-color:#26a69a;color:#ffffff}\r\n.picker__day--selected.picker__day--outfocus,.picker__day--selected:hover.picker__day--outfocus,.picker--focused .picker__day--selected.picker__day--outfocus{background-color:#a1ded8}\r\n.picker__footer{text-align:right;padding:5px 10px}\r\n.picker__close,.picker__today,.picker__clear{font-size:1.1rem;padding:0 1rem;color:#26a69a}\r\n.picker__clear{color:#f44336;float:left}\r\n.picker__nav--prev:before,.picker__nav--next:before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:0.75em solid #676767;width:0;height:0;display:block;margin:0 auto}\r\n.picker__nav--next:before{border-right:0;border-left:0.75em solid #676767}\r\nbutton.picker__today:focus,button.picker__clear:focus,button.picker__close:focus{background-color:#a1ded8}\r\n.picker__list{list-style:none;padding:0.75em 0 4.2em;margin:0}\r\n.picker__list-item{border-bottom:1px solid #ddd;border-top:1px solid #ddd;margin-bottom:-1px;position:relative;background:#fff;padding:.75em 1.25em}\r\n@media (min-height: 46.75em){.picker__list-item{padding:.5em 1em}}\r\n.picker__list-item:hover{cursor:pointer;color:#000;background:#b1dcfb;border-color:#0089ec;z-index:10}\r\n.picker__list-item--highlighted{border-color:#0089ec;z-index:10}\r\n.picker__list-item--highlighted:hover,.picker--focused .picker__list-item--highlighted{cursor:pointer;color:#000;background:#b1dcfb}\r\n.picker__list-item--selected,.picker__list-item--selected:hover,.picker--focused .picker__list-item--selected{background:#0089ec;color:#fff;z-index:10}\r\n.picker__list-item--disabled,.picker__list-item--disabled:hover,.picker--focused .picker__list-item--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default;border-color:#ddd;z-index:auto}\r\n.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:none;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:rgba(0,0,0,0.87)}\r\n.picker--time .picker__button--clear:hover,.picker--time .picker__button--clear:focus{color:#000;background:#b1dcfb;background:#ee2200;border-color:#ee2200;cursor:pointer;color:#fff;outline:none}\r\n.picker--time .picker__button--clear:before{top:-0.25em;color:rgba(0,0,0,0.87);font-size:1.25em;font-weight:bold}\r\n.picker--time .picker__button--clear:hover:before,.picker--time .picker__button--clear:focus:before{color:#fff}\r\n.picker--time .picker__frame{min-width:256px;max-width:320px}\r\n.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}\r\n@media (min-height: 40.125em){.picker--time .picker__box{margin-bottom:5em}}\r\n.clockpicker-display{font-size:4rem;font-weight:bold;text-align:center;color:rgba(255,255,255,0.6);font-weight:400;clear:both;position:relative}\r\n.clockpicker-span-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:0.3rem;line-height:2rem;font-weight:500}\r\n@media only screen and (min-width: 601px){.clockpicker-display{top:32%}.clockpicker-span-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}\r\n.text-primary{color:#fff}\r\n.clockpicker-span-hours{margin-right:3px}\r\n.clockpicker-span-minutes{margin-left:3px}\r\n.clockpicker-span-hours,.clockpicker-span-minutes,.clockpicker-span-am-pm div{cursor:pointer}\r\n.clockpicker-moving{cursor:move}\r\n.clockpicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:auto;margin-top:25px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.clockpicker-canvas,.clockpicker-dial{width:270px;height:270px;position:absolute;left:-1px;top:-1px}\r\n.clockpicker-minutes{visibility:hidden}\r\n.clockpicker-tick{border-radius:50%;color:rgba(0,0,0,0.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer}\r\n.clockpicker-tick.active,.clockpicker-tick:hover{background-color:rgba(38,166,154,0.25)}\r\n.clockpicker-dial{-webkit-transition:-webkit-transform 350ms, opacity 350ms;-webkit-transition:opacity 350ms, -webkit-transform 350ms;transition:opacity 350ms, -webkit-transform 350ms;transition:transform 350ms, opacity 350ms;transition:transform 350ms, opacity 350ms, -webkit-transform 350ms}\r\n.clockpicker-dial-out{opacity:0}\r\n.clockpicker-hours.clockpicker-dial-out{-webkit-transform:scale(1.2, 1.2);transform:scale(1.2, 1.2)}\r\n.clockpicker-minutes.clockpicker-dial-out{-webkit-transform:scale(0.8, 0.8);transform:scale(0.8, 0.8)}\r\n.clockpicker-canvas{-webkit-transition:opacity 175ms;transition:opacity 175ms}\r\n.clockpicker-canvas-out{opacity:0.25}\r\n.clockpicker-canvas-bearing{stroke:none;fill:#26a69a}\r\n.clockpicker-canvas-bg{stroke:none;fill:#26a69a}\r\n.clockpicker-canvas-bg-trans{fill:#26a69a}\r\n.clockpicker-canvas line{stroke:#26a69a;stroke-width:4;stroke-linecap:round}"

/***/ }),

/***/ "./src/app/account/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"success===false\" class=\"text text-danger alert alert-box alert-danger\">\r\n    Error while processing request, check developer console for info.\r\n</div>\r\n<div *ngIf=\"success===true\" class=\"text text-success alert alert-box alert-success\">\r\n    Operation performed successfully.\r\n</div>\r\n<div *ngIf=\"success===undefined\" class=\"text text-warning alert alert-box alert-warning\">\r\n    Operation in progress, please wait...\r\n</div>\r\n\r\n<collapsible-list [type]=\"'accordion'\" *ngIf=\"data\">\r\n    <collapsible-list-item *ngFor=\"let kvp of data|mapIterator|sortByKey\">\r\n        <collapsible-header class=\"waves-effect\">\r\n            {{kvp.key}}\r\n        </collapsible-header>\r\n        <collapsible-body expanded=\"false\">\r\n            <div class=\"card\">\r\n                <div class=\"card-title\">\r\n                    Summary:\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div *ngIf=\"kvp.val.get(null)\" class=\"text text-success\">Free: {{kvp.val.get(null) ? kvp.val.get(null).length : 0}}</div>\r\n                    <ng-container *ngFor=\"let row of kvp.val|mapIterator\">\r\n                        <div *ngIf=\"row.key\" class=\"text text-justify\">{{row.key}}: {{row.val.length}}</div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"kvp.val.get(null) ? kvp.val.get(null).length > 0 : false\">\r\n                <div class=\"card-title\">Add item:</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"label\">Arrive Date:</div>\r\n                        <input type=\"datetime-local\" [(ngModel)]=\"model.arriveDate\" />\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"label\">Remove Date:</div>\r\n                        <input type=\"datetime-local\" [(ngModel)]=\"model.removeDate\" />\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"label\">Quantity:</div>\r\n                        <input type=\"number\" [(ngModel)]=\"model.quantity\" min=\"0\" [max]=\"kvp.val.get(null).length\" />\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        Category:\r\n                        <select [(ngModel)]=\"model.categoryId\" style=\"display: inline;\">\r\n                    <option *ngFor=\"let cat of categories\" [ngValue]=\"cat.id\">{{cat.name}}</option>\r\n                  </select>\r\n                    </div>\r\n                    <div class=\"btn btn-success\" (click)=\"insertItem(kvp.val.get(null))\">Submit</div>\r\n                </div>\r\n            </div>\r\n        </collapsible-body>\r\n    </collapsible-list-item>\r\n\r\n</collapsible-list>"

/***/ }),

/***/ "./src/app/account/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(http) {
        this.http = http;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new ItemViewModel();
        this.model.quantity = 0;
        this.data = null;
        this.success = undefined;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Categories.List).subscribe(function (categories) {
            _this.categories = categories.result;
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Orders.List).subscribe(function (res) {
                _this.success = res.success;
                if (!res.success) {
                    return;
                }
                var result = [];
                for (var _i = 0, _a = res.result; _i < _a.length; _i++) {
                    var order = _a[_i];
                    for (var _b = 0, _c = order.storageSpaces; _b < _c.length; _b++) {
                        var space = _c[_b];
                        var spaceStartDate = new Date(space.startDate.split('T')[0]);
                        var spaceEndDate = new Date(space.endDate.split('T')[0]);
                        var slot = new Slot();
                        slot.orderId = order.id;
                        slot.storageId = space.id;
                        slot.startDate = spaceStartDate;
                        for (var _d = 0, _e = space.item; _d < _e.length; _d++) {
                            var item = _e[_d];
                            slot.endDate = new Date(item.arriveDate.split('T')[0]);
                            if (slot.startDate.getTime() - slot.endDate.getTime() !== 0) {
                                result.push(slot);
                            }
                            slot = new Slot();
                            slot.orderId = order.id;
                            slot.storageId = space.id;
                            slot.startDate = new Date(item.arriveDate.split('T')[0]);
                            slot.item = item;
                            if (!item.removeDate) {
                                break;
                            }
                            slot.endDate = new Date(item.removeDate.split('T')[0]);
                            if (slot.startDate.getTime() - slot.endDate.getTime() !== 0) {
                                result.push(slot);
                            }
                            slot = new Slot();
                            slot.orderId = order.id;
                            slot.storageId = space.id;
                            slot.startDate = new Date(item.removeDate.split('T')[0]);
                        }
                        slot.endDate = spaceEndDate;
                        if (slot.startDate.getTime() - slot.endDate.getTime() !== 0) {
                            result.push(slot);
                        }
                    }
                }
                var data = new Map();
                for (var _f = 0, result_1 = result; _f < result_1.length; _f++) {
                    var entry = result_1[_f];
                    var period = entry.startDate.toISOString().slice(0, 10).split('-').reverse().join('-')
                        + ' || '
                        + entry.endDate.toISOString().slice(0, 10).split('-').reverse().join('-');
                    if (!data.has(period)) {
                        data.set(period, new Map());
                    }
                    var periodEntry = data.get(period);
                    var name_1 = entry.item ? entry.item.name : null;
                    if (!periodEntry.has(name_1)) {
                        periodEntry.set(name_1, []);
                    }
                    periodEntry.get(name_1).push(entry);
                }
                console.log(data);
                _this.data = data;
            });
        });
    };
    ItemsComponent.prototype.insertItem = function (arr) {
        if (this.model.quantity > arr.length) {
            alert('Not enough free space');
            return;
        }
        if (!this.model.arriveDate) {
            alert('Arrive date can\'t be empty');
            return;
        }
        if (new Date(this.model.arriveDate) < arr[0].startDate) {
            alert('Item can\'t arrive before contract start date.');
            return;
        }
        if (!this.model.categoryId) {
            alert('Category can\'t be empty.');
            return;
        }
        var count = this.model.quantity;
        this.success = undefined;
        this.sendInsertRequest(arr, this.model, count);
    };
    ItemsComponent.prototype.sendInsertRequest = function (arr, item, quantity) {
        var _this = this;
        if (quantity < 1) {
            this.success = true;
            this.ngOnInit();
            return;
        }
        var slot = arr.pop();
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Items.Insert(slot.orderId, slot.storageId), item)
            .subscribe(function (res) {
            if (res.success) {
                _this.sendInsertRequest(arr, item, quantity - 1);
            }
            else {
                console.log(res);
                _this.success = false;
                arr.push(slot);
            }
        });
    };
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("./src/app/account/items/items.component.html"),
            styles: [__webpack_require__("./src/app/account/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ItemsComponent);
    return ItemsComponent;
}());

var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());
var Slot = /** @class */ (function () {
    function Slot() {
    }
    Object.defineProperty(Slot.prototype, "free", {
        get: function () {
            return !this.item;
        },
        enumerable: true,
        configurable: true
    });
    return Slot;
}());
var Space = /** @class */ (function () {
    function Space() {
    }
    return Space;
}());
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
var ItemViewModel = /** @class */ (function () {
    function ItemViewModel() {
    }
    return ItemViewModel;
}());


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__ = __webpack_require__("./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_accordion__ = __webpack_require__("./node_modules/ngx-accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_collapsible__ = __webpack_require__("./node_modules/angular2-collapsible/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__authentication_interceptor__ = __webpack_require__("./src/app/authentication-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__call_us_call_us_component__ = __webpack_require__("./src/app/call-us/call-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__account_home_home_component__ = __webpack_require__("./src/app/account/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__our_services_our_services_component__ = __webpack_require__("./src/app/our-services/our-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__checkout_checkout_component__ = __webpack_require__("./src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__account_items_items_component__ = __webpack_require__("./src/app/account/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_map_iterator_pipe__ = __webpack_require__("./src/app/pipes/map-iterator.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_order_total_pipe__ = __webpack_require__("./src/app/pipes/order-total.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_sort_by_key_pipe__ = __webpack_require__("./src/app/pipes/sort-by-key.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__account_edit_profile_edit_profile_component__ = __webpack_require__("./src/app/account/edit-profile/edit-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_24__our_services_our_services_component__["a" /* OurServicesComponent */]
    }, {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_25__checkout_checkout_component__["a" /* CheckoutComponent */]
    }, {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */]
    }, {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_22__call_us_call_us_component__["a" /* CallUsComponent */]
    }, {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_20__logout_logout_component__["a" /* LogoutComponent */]
    }, {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */]
    }, {
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_23__account_home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: 'items',
                component: __WEBPACK_IMPORTED_MODULE_26__account_items_items_component__["a" /* ItemsComponent */]
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_30__account_edit_profile_edit_profile_component__["a" /* EditProfileComponent */]
            }
        ]
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_15__not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__call_us_call_us_component__["a" /* CallUsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__account_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__our_services_our_services_component__["a" /* OurServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_26__account_items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_map_iterator_pipe__["a" /* MapIteratorPipe */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_order_total_pipe__["a" /* OrderTotalPipe */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_sort_by_key_pipe__["a" /* SortByKeyPipe */],
                __WEBPACK_IMPORTED_MODULE_30__account_edit_profile_edit_profile_component__["a" /* EditProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBxlkBbuOmlXCDtqn0unAwgEKzOoiNqRt8'
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_collapsible__["a" /* CollapsibleModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_21__authentication_interceptor__["a" /* AuthenticationInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** Pass untouched request through to the next request handler. */
var AuthenticationInterceptor = /** @class */ (function () {
    function AuthenticationInterceptor(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthenticationInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        req = req.clone({ withCredentials: true });
        var handler;
        if (req.url === __WEBPACK_IMPORTED_MODULE_4__models_remote_url__["a" /* RemoteUrl */].Account.Logout || req.url === __WEBPACK_IMPORTED_MODULE_4__models_remote_url__["a" /* RemoteUrl */].Account.Login) {
            handler = next.handle(req).map(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */] && event.status === 200) {
                    var res = event.body;
                    if (res.success) {
                        _this.service.Id = res.message;
                    }
                }
                return event;
            });
        }
        else {
            handler = next.handle(req);
        }
        return handler.catch(function (err, caught) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */] && err.status === 401) {
                _this.handleNotAuthorized();
                return;
            }
            return caught;
        });
    };
    AuthenticationInterceptor.prototype.handleNotAuthorized = function () {
        alert('This page requires being authorized. You\'ll be redirected to login page momentarily.');
        this.service.Id = null;
        this.router.navigate(['/login']);
    };
    AuthenticationInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], AuthenticationInterceptor);
    return AuthenticationInterceptor;
}());



/***/ }),

/***/ "./src/app/call-us/call-us.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/call-us/call-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3 mb-3\">\n    <div class=\"col-6 card card-body\">\n        <h3>\n            Contact info\n        </h3>\n        <div>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo dolore commodi sunt praesentium, iure consequuntur in quisquam rerum explicabo alias numquam ad nobis quaerat. Nam officia ipsam aut repellendus.\n        </div>\n        <div class=\"m-2 card card-body\">\n            <div class=\"row\">\n                <div class=\"col-5\">\n                    <div class=\"row\">\n                        <fa name=\"phone\" size=\"lg\"> </fa>: +00-000-0000-0000\n                    </div>\n                    <div class=\"row\">\n                        <fa name=\"fax\" size=\"lg\"> </fa>: +00-000-0000-0000\n                    </div>\n                    <div class=\"row\">\n                        <fa name=\"envelope\" size=\"lg\"> </fa> mail@dom.com\n                    </div>\n                </div>\n                <div class=\"col-1\"></div>\n                <div class=\"col-5\">\n                    <div class=\"row\">\n                        <fa name=\"skype\" size=\"lg\"> </fa> skype\n                    </div>\n                    <div class=\"row\">\n                        <fa name=\"twitter\" size=\"lg\"> </fa> twitter\n                    </div>\n                    <div class=\"row\">\n                        <fa name=\"facebook\" size=\"lg\"> </fa> facebook\n                    </div>\n                    <div class=\"row\">\n                        <fa name=\"linkedin\" size=\"lg\"> </fa> linkedin\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6 card card-body\">\n        <agm-map [latitude]=\"30.8255082\" [longitude]=\"30.992081\" [zoom]=\"16\">\n        </agm-map>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/call-us/call-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallUsComponent = /** @class */ (function () {
    function CallUsComponent() {
    }
    CallUsComponent.prototype.ngOnInit = function () {
    };
    CallUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-us',
            template: __webpack_require__("./src/app/call-us/call-us.component.html"),
            styles: [__webpack_require__("./src/app/call-us/call-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallUsComponent);
    return CallUsComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 text-center\">\n    <h3>Checkout</h3>\n</div>\n<div class=\"col-11 m-1\">\n    <ng-container *ngIf=\"!order; else showData\">\n        <div class=\"alert alert-box alert-error\">\n            {{message}}\n        </div>\n    </ng-container>\n    <ng-template #showData>\n\n        <div *ngIf=\"success===false\" class=\"text text-danger alert alert-box alert-danger\">\n            Error while processing request, check developer console for info.\n        </div>\n        <div *ngIf=\"success===true\" class=\"text text-success alert alert-box alert-success\">\n            Operation performed successfully.\n        </div>\n        <div *ngIf=\"success===undefined\" class=\"text text-warning alert alert-box alert-warning\">\n            Operation in progress, please wait...\n        </div>\n        <ng-container *ngIf=\"message && !checkResults\">\n            <div class=\"alert alert-box alert-info\">\n                {{message}}\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"checkResults\">\n            <div class=\"row\">\n                <div class=\"col-3\"></div>\n                <div class=\"col-6\">\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>description</th>\n                                <th>price</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let entry of checkResults; let i = index\" [ngClass]=\"{'table-danger': !entry.item1}\">\n                                <td>{{i}}</td>\n                                <td>\n                                    <div>Quantity: {{order[i].quantity}}</div>\n                                    <div>Period: {{order[i].startDate}} - {{order[i].endDate}}</div>\n                                </td>\n                                <td>{{entry.item2}}$</td>\n                                <td>\n                                    <fa name=\"remove\" (click)=\"removeEntry(i)\"></fa>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"row\">\n                        <div *ngIf=\"canPay\" (click)=\"confirm()\" class=\"btn btn-primary m-1\">Continue to payment</div>\n                        <div class=\"btn btn-warning m-1\" (click)=\"validateWithServer()\">Refresh Order</div>\n                    </div>\n                </div>\n                <div class=\"col-3\"></div>\n            </div>\n        </ng-container>\n    </ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(http) {
        this.http = http;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.success = null;
        this.canPay = false;
        this.checkResults = null;
        var data = localStorage.getItem('order');
        if (!data || data === '[]') {
            this.message = 'there\'s no order to process...';
            this.order = null;
            return;
        }
        this.order = JSON.parse(data);
        this.validateWithServer();
    };
    CheckoutComponent.prototype.validateWithServer = function () {
        var _this = this;
        this.message = 'validating order, please wait ☺';
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Orders.Check, this.order)
            .subscribe(function (res) {
            console.log(res);
            if (!res.success) {
                _this.message = res.message;
                return;
            }
            _this.checkResults = res.result;
            _this.canPay = !!res.message;
        });
    };
    CheckoutComponent.prototype.confirm = function () {
        var _this = this;
        this.success = undefined;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Orders.Confirm, '').subscribe(function (res) {
            console.log(res);
            _this.success = res.success;
            if (res.success) {
                _this.order = [];
                _this.saveOrder();
            }
        });
    };
    CheckoutComponent.prototype.removeEntry = function (idx) {
        this.order.splice(idx, 1);
        this.saveOrder();
        this.checkResults.splice(idx, 1);
        this.canPay = false;
    };
    CheckoutComponent.prototype.saveOrder = function () {
        localStorage.setItem('order', JSON.stringify(this.order));
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());

var CheckEntry = /** @class */ (function () {
    function CheckEntry() {
    }
    return CheckEntry;
}());


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 200px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row4 bgded overlay\" style=\"background-image:url('../images/demo/backgrounds/05.png');\">\n    <footer id=\"footer\" class=\"hoc clear\" style=\"max-width:1045px\">\n        <!-- ################################################################################################ -->\n        <div class=\"one_third first\">\n            <h6 class=\"heading\">Contact us:</h6>\n            <ul class=\"nospace linklist contact\">\n                <li>\n                    <i class=\"fa fa-map-marker\"></i>\n                    <address>\n            Faculty of Engineering,\n          </address>\n                    <address>\n            Tanta University, Egypt\n          </address>\n                </li>\n                <li>\n                    <i class=\"fa fa-phone\"></i> +00 (123) 456 7890</li>\n                <li>\n                    <i class=\"fa fa-fax\"></i> +00 (123) 456 7890</li>\n                <li>\n                    <i class=\"fa fa-envelope-o\"></i> info@domain.com</li>\n            </ul>\n        </div>\n\n        <div class=\"one_third\">\n            <h2 class=\"heading\">Our mission</h2>\n            <ul class=\"nospace linklist\">\n                <li>\n                    <article>\n                        <!-- <h2 class=\"nospace font-x1\"><a href=\"#\">Dictum vivamus condimentum</a></h2> -->\n                        <p class=\"nospace\">Our mission is to provide three main things to help you in th ebusiness race, not just to be in it, but to win it, those three things are:</p>\n                        <time class=\"block btmspace-10\" datetime=\"2045-04-06\">• security</time>\n                        <time class=\"block btmspace-10\" datetime=\"2045-04-06\">• speed</time>\n                        <time class=\"block btmspace-10\" datetime=\"2045-04-06\">• easy management</time>\n                    </article>\n                </li>\n            </ul>\n        </div>\n        <div class=\"one_third\">\n            <h6 class=\"heading\">Our address</h6>\n            <agm-map [latitude]=\"30.8255082\" [longitude]=\"30.992081\" [zoom]=\"15\">\n            </agm-map>\n        </div>\n        <!-- ################################################################################################ -->\n    </footer>\n</div>\n<!-- ################################################################################################ -->\n<!-- ################################################################################################ -->\n<!-- ################################################################################################ -->\n<div class=\"wrapper row5\">\n    <div id=\"copyright\" class=\"hoc clear\">\n        <!-- ################################################################################################ -->\n        <p class=\"fl_left\">Copyright &copy; 2018 - All Rights Reserved -\n            <a href=\"#\">Domain Name</a>\n        </p>\n        <p class=\"fl_right\">Template by\n            <a target=\"_blank\" href=\"https://www.os-templates.com/\" title=\"Free Website Templates\">OS Templates</a>\n        </p>\n        <!-- ################################################################################################ -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".speech-bubble {\r\n    position: relative;\r\n    background: #00aabb;\r\n    border-radius: .4em;\r\n}\r\n\r\n.speech-bubble:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border: 36px solid transparent;\r\n    border-right-color: #00aabb;\r\n    border-left: 0;\r\n    margin-top: -36px;\r\n    margin-left: -36px;\r\n}\r\n\r\n.bubble {\r\n    position: relative;\r\n    background: #FFFFCC;\r\n    border: 1px solid #FFCC00;\r\n    max-width: 250px;\r\n    padding: 10px;\r\n    font-family: arial;\r\n    margin: 0 auto;\r\n    font-size: 14px;\r\n    border-radius: 6px;\r\n}\r\n\r\n.bubble:after,\r\n.bubble:before {\r\n    right: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble:after {\r\n    border-color: rgba(255, 255, 204, 0);\r\n    border-right-color: #FFFFCC;\r\n    border-width: 15px;\r\n    margin-top: -15px;\r\n}\r\n\r\n.bubble:before {\r\n    border-color: rgba(255, 204, 0, 0);\r\n    border-right-color: #FFCC00;\r\n    border-width: 16px;\r\n    margin-top: -16px;\r\n}\r\n\r\n#mini {\r\n    position: relative;\r\n    -webkit-animation: miniRobot 25s linear infinite;\r\n            animation: miniRobot 25s linear infinite;\r\n    /* animation-name: miniRobot;\r\n    animation-duration: 20s;\r\n    animation-iteration-count: infinite; */\r\n    width: 100px;\r\n    height: 100px;\r\n    background-image: url(\"/assets/giphy.gif\");\r\n    background-size: cover;\r\n    background-color: transparent;\r\n}\r\n\r\n#t {\r\n    position: relative;\r\n    padding-left: 0px;\r\n    -webkit-animation: robotText 25s linear infinite;\r\n            animation: robotText 25s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes robotText {\r\n    0% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    2% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    48% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    50% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    52% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    98% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    100% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n}\r\n\r\n@keyframes robotText {\r\n    0% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    2% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    48% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    50% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    52% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    98% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    100% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n}\r\n\r\n@-webkit-keyframes miniRobot {\r\n    0% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0)\r\n    }\r\n    2% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(-1);\r\n                transform: scaleX(-1)\r\n    }\r\n    48% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(-1);\r\n                transform: scaleX(-1)\r\n    }\r\n    50% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0)\r\n    }\r\n    52% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    98% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    100% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0)\r\n    }\r\n}\r\n\r\n@keyframes miniRobot {\r\n    0% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0)\r\n    }\r\n    2% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(-1);\r\n                transform: scaleX(-1)\r\n    }\r\n    48% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(-1);\r\n                transform: scaleX(-1)\r\n    }\r\n    50% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0)\r\n    }\r\n    52% {\r\n        left: 110%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    98% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1)\r\n    }\r\n    100% {\r\n        left: 10%;\r\n        top: 0px;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0)\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayImage\" class=\"bgded\" style=\"background-image:url('/assets/img/2.jpg');background-repeat: round;\">\r\n    <div id=\"pageintro\" class=\"hoc clear\"></div>\r\n</div>\r\n<!-- ################################################################################################ -->\r\n<!-- ################################################################################################ -->\r\n<!-- ################################################################################################ -->\r\n<div class=\"wrapper row0\">\r\n    <div id=\"topbar\" class=\"hoc clear\">\r\n        <div class=\"fl_left\">\r\n            <ul class=\"nospace\">\r\n                <li><i class=\"fa fa-clock-o\"></i> Mon. - Fri. 8am - 5pm</li>\r\n                <li><i class=\"fa fa-phone\"></i> +00 (123) 456 7890</li>\r\n                <li><i class=\"fa fa-envelope-o\"></i> info@domain.com</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"fl_right\">\r\n            <ul class=\"nospace\">\r\n                <li><a title=\"Home\" routerLink=\"/home\"><i class=\"fa fa-lg fa-home\"></i></a></li>\r\n                <li><a title=\"Login\" routerLink=\"/login\"><i class=\"fa fa-lg fa-sign-in\"></i></a></li>\r\n                <li><a title=\"Sign Up\" routerLink=\"/register\"><i class=\"fa fa-lg fa-edit\"></i></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ################################################################################################ -->\r\n<!-- ################################################################################################ -->\r\n<!-- ################################################################################################ -->\r\n<div class=\"wrapper row1\">\r\n    <div class=\"hoc clear row\">\r\n        <div id=\"mini\">\r\n        </div>\r\n        <div id=\"t\" class=\"rtl text text-right\">\r\n            <p>\r\n                {{message}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <header id=\"header\" class=\"hoc clear\">\r\n        <div id=\"logo\" class=\"fl_left\">\r\n            <h1><a>Automated Warehouse</a></h1>\r\n        </div>\r\n        <nav id=\"mainav\" class=\"fl_right\">\r\n            <ul class=\"clear\">\r\n                <li><a routerLink=\"/home\">Home</a></li>\r\n                <li> <a routerLink=\"/services\">Services</a> </li>\r\n                <!-- <li> <a routerLink=\"/about\">About Us</a> </li> -->\r\n                <!-- <li> <a routerLink=\"/contact\">Call us</a> </li> -->\r\n                <ng-container *ngIf=\"authenticationService.isAuthenticated; else unAuthenticatedTemplate \">\r\n                    <li> <a routerLink=\"/account\">Account</a> </li>\r\n                    <li> <a routerLink=\"/logout\">Logout</a> </li>\r\n                </ng-container>\r\n                <ng-template #unAuthenticatedTemplate>\r\n                    <li> <a routerLink=\"/login\">Login</a> </li>\r\n                    <li> <a routerLink=\"/register\">Register</a> </li>\r\n                </ng-template>\r\n                <!-- <li><a class=\"drop\" >Dropdown</a>\r\n                    <ul>\r\n                        <li><a >Level 2</a></li>\r\n                        <li><a class=\"drop\" >Level 2 + Drop</a>\r\n                            <ul>\r\n                                <li><a >Level 3</a></li>\r\n                                <li><a >Level 3</a></li>\r\n                                <li><a >Level 3</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li><a >Level 2</a></li>\r\n                    </ul>\r\n                </li> -->\r\n            </ul>\r\n        </nav>\r\n    </header>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authenticationService, route, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.messages = [
            'عاملين ايه على الغدا؟',
            'كان فيه ماتش ايه اليوم؟',
            'الarm اتكسرت ولا لسا؟',
            'هنفطر ايه النهارده؟',
            'هنتقابل ايمتى مع التيم؟',
            'شهاب جاي ولا مش جاي؟',
            'كيف بدأ الخلق؟',
            'انا مين؟',
            'شرف فين؟'
        ];
        this.message = this.messages[0];
        var i = 0;
        setInterval(function () {
            _this.message = _this.messages[i];
            i = (i + 1) % _this.messages.length;
        }, 3000);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayImage = true;
        this.router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            _this.displayImage = event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/';
            console.log(_this.displayImage);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".website_header h2,\r\nh1 {\r\n    position: relative;\r\n    left: 25%;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row3\">\n    <main class=\"hoc container clear\">\n        <div class=\"content\">\n            <div *ngFor=\"let group of news;\" class=\"group btmspace-50 demo\">\n                <div *ngFor=\"let n of group; let f = first\" [ngClass]=\"{'one_third': true, 'first': f}\">\n                    <div class=\"card\">\n                        <div class=\"card-title\">\n                            {{n.title}} ({{n.date}})\n                        </div>\n                        <div class=\"card-body\">\n                            {{n.content}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"clear\"></div>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.news = [];
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].News(6)).subscribe(function (res) {
            if (!res.success) {
                console.log(res);
                return;
            }
            while (res.result.length) {
                _this.news.push(res.result.splice(0, 3));
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());

var News = /** @class */ (function () {
    function News() {
    }
    return News;
}());


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center col-12 m-3\">\n    <div class=\"col-3\"></div>\n    <div class=\"col-6\" id=\"sign_up\">\n\n        <div *ngIf=\"errors\" class=\"m-3 alert alert-danger text-danger\">\n            <div *ngFor=\"let error of errors\">\n                {{error.code}} : {{error.description}}\n            </div>\n        </div>\n\n        <div class=\"row m-3\">\n            <label class=\"col-md-3\"> Email </label>\n            <input class=\"text col-md-6\" type=\"email\" [(ngModel)]=\"model.email\">\n        </div>\n\n        <div class=\"row m-3\">\n            <label class=\"col-md-3\"> Password</label>\n            <input class=\"text col-md-6\" type=\"password\" [(ngModel)]=\"model.password\">\n        </div>\n\n        <div class=\"row m-3\">\n            <label> Remember me? </label>\n            <input name=\"remember\" type=\"checkbox\" class=\"m-1\" [(ngModel)]=\"model.remember\">\n        </div>\n        <div class=\"row m-3\">\n            <div class=\"col-4\"></div>\n            <button id=\"sign_up_button\" class=\"col-4\" (click)=\"submit()\"> Login</button>\n            <div class=\"col-4\"></div>\n        </div>\n    </div>\n    <div class=\"col-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_login_model__ = __webpack_require__("./src/app/models/user-login-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, auth_service) {
        this.http = http;
        this.router = router;
        this.auth_service = auth_service;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_user_login_model__["a" /* UserLoginModel */]();
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.model);
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__models_remote_url__["a" /* RemoteUrl */].Account.Login, this.model).subscribe(function (next) {
            console.log(next);
            if (next.success) {
                _this.auth_service.Id = next.message;
                _this.router.navigate(['/account']);
            }
            else {
                _this.errors = next.result;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-box alert-warning\">\r\n    Logout in progress. Please wait...\r\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http, router, auth_service) {
        this.http = http;
        this.router = router;
        this.auth_service = auth_service;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Account.Logout).subscribe(function () {
            _this.auth_service.Id = '';
            _this.router.navigate(['/home']);
        });
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/models/remote-url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteUrl; });
var RemoteUrl = /** @class */ (function () {
    function RemoteUrl() {
    }
    RemoteUrl.News = function (count) {
        return this.BaseUrl + 'News/List/?count=' + count.toString();
    };
    RemoteUrl.BaseUrl = 'http://192.168.10.17:5000/api/';
    RemoteUrl.Warehouse = RemoteUrl.BaseUrl + 'Warehouse/List';
    RemoteUrl.Account = {
        Login: RemoteUrl.BaseUrl + 'Account/Login',
        Logout: RemoteUrl.BaseUrl + 'Account/Logout',
        Register: RemoteUrl.BaseUrl + 'Account/Register',
        Get: function (id) { return RemoteUrl.BaseUrl + 'Account/Get/' + id; },
        Update: function (id) { return RemoteUrl.BaseUrl + 'Account/Update/' + id; }
    };
    RemoteUrl.Orders = {
        Check: RemoteUrl.BaseUrl + 'Orders/Check',
        Confirm: RemoteUrl.BaseUrl + 'Orders/Confirm',
        List: RemoteUrl.BaseUrl + 'Orders/List'
    };
    RemoteUrl.Categories = {
        List: RemoteUrl.BaseUrl + 'Categories/List'
    };
    RemoteUrl.Items = {
        // Order/{orderId}/StorageSpaces/[action]/{storageId}
        Insert: function (orderId, storageId) { return RemoteUrl.BaseUrl + ("Order/" + orderId + "/StorageSpaces/Insert/" + storageId); },
        Remove: function (orderId, storageId) { return RemoteUrl.BaseUrl + ("Order/" + orderId + "/StorageSpaces/Remove/" + storageId); }
    };
    return RemoteUrl;
}());



/***/ }),

/***/ "./src/app/models/user-login-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginModel; });
var UserLoginModel = /** @class */ (function () {
    /**
     *
     */
    function UserLoginModel() {
    }
    return UserLoginModel;
}());



/***/ }),

/***/ "./src/app/models/user-register-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterModel; });
/* unused harmony export Gender */
var UserRegisterModel = /** @class */ (function () {
    function UserRegisterModel() {
    }
    UserRegisterModel.prototype.ValidatePassword = function () {
        return !!this.password;
    };
    UserRegisterModel.prototype.ValidateEmail = function () {
        return !!this.email;
    };
    UserRegisterModel.prototype.ValidateName = function () {
        return !!this.name;
    };
    UserRegisterModel.prototype.ValidatePasswordConfirmation = function () {
        return this.password === this.confirm_password;
    };
    UserRegisterModel.prototype.ValidateGender = function () {
        // tslint:disable-next-line:triple-equals
        return this.gender == Gender.Male || this.gender == Gender.Female;
    };
    return UserRegisterModel;
}());

var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center text-danger alert-danger\">\n    <h2>Page Not Found</h2>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/our-services/our-services.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/our-services/our-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row3\">\r\n    <section class=\"hoc container clear\">\r\n        <ul class=\"nospace group services\">\r\n            <li class=\"one_quarter first\">\r\n                <h6 class=\"heading text-center\">Our warehouses <a *ngIf=\"data\">({{data.length}})</a></h6>\r\n                <article *ngIf=\"data===null\" class=\"m-1\">\r\n                    <h3 class=\"text text-info alert-info\">Loading warehouse info... please wait ☺</h3>\r\n                </article>\r\n                <owl-carousel [items]=\"data\" [options]=\"{items: 1, navigation: true, loop: true}\" [carouselClasses]=\"['owl-theme']\">\r\n                    <article class=\"item\" *ngFor=\"let warehouse of data\">\r\n                        <div class=\"m-1\">\r\n                            <h6 class=\"card-header\">\r\n                                {{warehouse.name}}\r\n                            </h6>\r\n                            <div class=\"row ml-1\">\r\n                                Initial cost: {{warehouse.priceSchema.baseCost}}$\r\n                            </div>\r\n                            <div class=\"row ml-1\">\r\n                                Daily rate: {{warehouse.priceSchema.dailyRate}}$\r\n                            </div>\r\n                            <div class=\"row ml-1\">\r\n                                Taxes: {{warehouse.priceSchema.taxPercent}}%\r\n                            </div>\r\n                            <div class=\"row ml-1\">\r\n                                Available units: {{warehouse.available}}\r\n                            </div>\r\n                            <input type=\"submit\" (click)=\"createOrder(warehouse)\" value=\"Add Order\" class=\"mt-2\" />\r\n                        </div>\r\n                    </article>\r\n                </owl-carousel>\r\n            </li>\r\n            <li class=\"two_quarter\">\r\n                <h6 class=\"heading text-center\">{{editing ? 'Edit' : 'Add'}} Order</h6>\r\n                <article>\r\n                    <div *ngIf=\"model\">\r\n                        <div class=\"row\">\r\n                            <div>Quantity: </div>\r\n                            <input type=\"number\" min=\"0\" [max]=\"maxUnits\" [(ngModel)]=\"model.quantity\" class=\"m-1\">\r\n                            <div class=\"text text-info\">maximum ({{maxUnits}})</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div>Start Date: </div>\r\n                            <input type=\"date\" min=\"{{today}}\" (change)=\"startDayChange()\" [(ngModel)]=\"model.startDate\" class=\"m-1\">\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div>End Date: </div>\r\n                            <input type=\"date\" [min]=\"minEndDay\" [(ngModel)]=\"model.endDate\" class=\"m-1\">\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"btn btn-success m-1\" (click)=\"addOrder(model, !editing)\">Save</div>\r\n                            <div *ngIf=\"!editing\" class=\"btn btn-danger m-1\" (click)=\"cancel()\">Cancel</div>\r\n                        </div>\r\n                    </div>\r\n                </article>\r\n            </li>\r\n            <li class=\"one_quarter\">\r\n                <h6 class=\"heading text-center\">Orders basket ({{order.length}})</h6>\r\n                <div class=\"text text-primary text-center\">Total: <i>{{order|orderTotal}}</i> $</div>\r\n                <owl-carousel [items]=\"order\" [options]=\"{items: 1, navigation: true, loop: true}\" [carouselClasses]=\"['owl-theme']\">\r\n                    <article class=\"item\" ngfor *ngFor=\"let entry of order; let i=index\">\r\n                        <h6 class=\"card-header\">\r\n                            {{getWarehouseName(entry.warehouseId)}}: {{entry.price}}$\r\n                        </h6>\r\n                        <div class=\"row\">Quantity: {{entry.quantity}}</div>\r\n                        <div class=\"row\">Start:&nbsp;<input type=\"date\" [value]=\"entry.startDate\" readonly=\"readonly\" /></div>\r\n                        <div class=\"row\">End:&nbsp;&nbsp;&nbsp;<input type=\"date\" [value]=\"entry.endDate\" readonly=\"readonly\" /></div>\r\n                        <div class=\"row\">\r\n                            <fa name=\"edit\" size=\"lg\" (click)=\"editOrder(i)\"></fa>\r\n                            &nbsp;&nbsp;\r\n                            <fa name=\"close\" size=\"lg\" (click)=\"removeOrder(i)\"></fa>\r\n                        </div>\r\n                    </article>\r\n                </owl-carousel>\r\n                <div class=\"m-1\">\r\n                    <ng-container *ngIf=\"auth.isAuthenticated; else loginToCheckout\">\r\n                        <ng-container *ngIf=\"order.length > 0; else emptyCart\">\r\n                            <a class=\"btn\" routerLink=\"/checkout\">Checkout</a>\r\n                        </ng-container>\r\n                        <ng-template #emptyCart>\r\n                            <div class=\"card-header\">Your cart is empty. Checkout our available warehouses in the other side.</div>\r\n                        </ng-template>\r\n                    </ng-container>\r\n                    <ng-template #loginToCheckout>\r\n                        <a class=\"btn\" routerLink=\"/login\">Login</a> or\r\n                        <a class=\"btn\" routerLink=\"/register\">Register</a> to checkout\r\n                    </ng-template>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- ################################################################################################ -->\r\n        <div class=\"clear\"></div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./src/app/our-services/our-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurServicesComponent; });
/* unused harmony export StorageSpace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.message = 'Loading... Please wait';
        this.order = (JSON.parse(localStorage.getItem('order')) || []).map(function (s) {
            return Object.assign(new StorageSpace(), s);
        });
    }
    OurServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = null;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__models_remote_url__["a" /* RemoteUrl */].Warehouse).subscribe(function (res) {
            console.log(res);
            if (!res.success) {
                _this.message = 'Error while loading, please check developer console for more details, or try refreshing page.';
                return;
            }
            if (!res.result) {
                _this.message = 'Empty result... no warehouse found.';
            }
            _this.data = res.result;
        });
    };
    Object.defineProperty(OurServicesComponent.prototype, "today", {
        get: function () {
            return new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        },
        enumerable: true,
        configurable: true
    });
    OurServicesComponent.prototype.startDayChange = function () {
        console.log(this.model);
        if (this.model && this.model.startDate) {
            this.minEndDay = new Date(new Date(this.model.startDate).getTime() + 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        }
        else {
            this.minEndDay = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        }
    };
    OurServicesComponent.prototype.saveOrder = function () {
        localStorage.setItem('order', JSON.stringify(this.order));
        this.model = null;
    };
    OurServicesComponent.prototype.cancel = function () {
        this.model = null;
    };
    OurServicesComponent.prototype.createOrder = function (warehouse) {
        console.log(this.data);
        this.editing = false;
        this.model = new StorageSpace();
        this.model.warehouseId = warehouse.id;
        this.maxUnits = warehouse.available;
        this.model.priceSchema = warehouse.priceSchema;
    };
    OurServicesComponent.prototype.addOrder = function (storage, add) {
        if (!storage.startDate || !storage.endDate) {
            alert('Invalid dates, please make sure to enter the dates and the period is at least 7 days.');
            return;
        }
        if ((new Date() - new Date(storage.startDate) > 0)
            || (Math.round((new Date(storage.endDate) - new Date(storage.startDate)) / (1000 * 60 * 60 * 24))) <= 7) {
            alert('Invalid date period, please make sure to enter the dates and the period is at least 7 days.');
            return;
        }
        if (add) {
            if (storage.quantity > 0) {
                this.order.push(storage);
            }
        }
        else {
            if (storage.quantity === 0) {
                this.order.splice(this.order.indexOf(storage), 1);
            }
        }
        this.saveOrder();
        this.model = null;
    };
    OurServicesComponent.prototype.editOrder = function (idx) {
        var _this = this;
        this.editing = true;
        this.model = this.order[idx];
        this.maxUnits = this.data.filter(function (w) { return w.id === _this.model.warehouseId; })[0].available;
    };
    OurServicesComponent.prototype.removeOrder = function (idx) {
        this.order.splice(idx, 1);
        this.saveOrder();
    };
    OurServicesComponent.prototype.getWarehouseName = function (id) {
        return this.data.filter(function (w) { return w.id === id; })[0].name;
    };
    OurServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__("./src/app/our-services/our-services.component.html"),
            styles: [__webpack_require__("./src/app/our-services/our-services.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]])
    ], OurServicesComponent);
    return OurServicesComponent;
}());

var Warehouse = /** @class */ (function () {
    function Warehouse() {
    }
    return Warehouse;
}());
var PriceSchema = /** @class */ (function () {
    function PriceSchema() {
    }
    return PriceSchema;
}());
var StorageSpace = /** @class */ (function () {
    function StorageSpace() {
    }
    Object.defineProperty(StorageSpace.prototype, "price", {
        get: function () {
            return (this.priceSchema.baseCost
                + this.priceSchema.dailyRate * (Math.round((new Date(this.endDate) - new Date(this.startDate)) / (1000 * 60 * 60 * 24))))
                * this.priceSchema.taxPercent
                * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    return StorageSpace;
}());



/***/ }),

/***/ "./src/app/pipes/map-iterator.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapIteratorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapIteratorPipe = /** @class */ (function () {
    function MapIteratorPipe() {
    }
    MapIteratorPipe.prototype.transform = function (map) {
        var ret = [];
        if (map) {
            map.forEach(function (val, key) {
                ret.push({
                    key: key,
                    val: val
                });
            });
        }
        return ret;
    };
    MapIteratorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'mapIterator'
        })
    ], MapIteratorPipe);
    return MapIteratorPipe;
}());



/***/ }),

/***/ "./src/app/pipes/order-total.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTotalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderTotalPipe = /** @class */ (function () {
    function OrderTotalPipe() {
    }
    OrderTotalPipe.prototype.transform = function (value, args) {
        var res = value.reduce(function (total, order) {
            return total + order.price;
        }, 0);
        console.log(res);
        return res;
    };
    OrderTotalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderTotal',
            pure: false
        })
    ], OrderTotalPipe);
    return OrderTotalPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sort-by-key.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByKeyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByKeyPipe = /** @class */ (function () {
    function SortByKeyPipe() {
    }
    SortByKeyPipe.prototype.transform = function (value) {
        return value.sort(function (a, b) { return a.key > b.key ? 1 : a.key === b.key ? 0 : -1; });
    };
    SortByKeyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortByKey'
        })
    ], SortByKeyPipe);
    return SortByKeyPipe;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center col-12 m-3\">\n    <div class=\"col-3\"></div>\n    <div class=\"col-6\" id=\"sign_up\">\n        <div *ngIf=\"errors\" class=\"m-3 alert alert-danger text-danger\">\n            <div *ngFor=\"let error of errors\">\n                {{error.code}} : {{error.description}}\n            </div>\n        </div>\n        <div class=\"row m-3\">\n            <label class=\"col-md-4 text-right\"> Name </label>\n            <input class=\"text col-md-6\" [(ngModel)]=\"model.name\">\n        </div>\n\n        <div class=\"row m-3\">\n            <label class=\"col-md-4 text-right\"> Email </label>\n            <input class=\"text col-md-6\" type=\"email\" [(ngModel)]=\"model.email\">\n        </div>\n\n        <div class=\"row m-3\">\n            <label class=\"col-md-4 text-right\"> Password</label>\n            <input class=\"text col-md-6\" type=\"password\" [(ngModel)]=\"model.password\">\n        </div>\n        <div class=\"row m-3\">\n            <label class=\"col-md-4 text-right\"> Confirm Password</label>\n            <input class=\"text col-md-6\" type=\"password\" [(ngModel)]=\"model.confirm_password\">\n        </div>\n\n        <div class=\"row m-3\">\n            <label class=\"col-md-4 text-right\"> Gender</label>\n            <select [(ngModel)]=\"model.gender\">\n              <option value=\"0\">Male</option>\n              <option value=\"1\">Female</option>\n            </select>\n        </div>\n\n        <div class=\"row m-3\">\n            <div class=\"col-4\"></div>\n            <button id=\"sign_up_button\" class=\"col-4\" type=\"submit\" (click)=\"register()\"> Sign Up</button>\n            <div class=\"col-4\"></div>\n        </div>\n    </div>\n\n    <div class=\"col-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_register_model__ = __webpack_require__("./src/app/models/user-register-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_remote_url__ = __webpack_require__("./src/app/models/remote-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user_register_model__["a" /* UserRegisterModel */]();
        this.valid_confirm_password = this.valid_email = this.valid_gender = this.valid_name = this.valid_password = true;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.model);
        this.valid_name = this.model.ValidateName();
        this.valid_email = this.model.ValidateEmail();
        this.valid_gender = this.model.ValidateGender();
        this.valid_password = this.model.ValidatePassword();
        this.valid_confirm_password = this.model.ValidatePasswordConfirmation();
        if (this.valid_name && this.valid_email && this.valid_gender && this.valid_password && this.valid_confirm_password) {
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__models_remote_url__["a" /* RemoteUrl */].Account.Register, this.model).subscribe(function (next) {
                if (next.success) {
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.errors = next.result;
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.load();
    }
    Object.defineProperty(AuthenticationService.prototype, "isAuthenticated", {
        get: function () {
            return !!this.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "Id", {
        get: function () {
            return this._Id;
        },
        set: function (v) {
            this._Id = v;
            this.save();
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.save = function () {
        localStorage.setItem('Id', this.Id);
    };
    AuthenticationService.prototype.load = function () {
        this._Id = localStorage.getItem('Id');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map