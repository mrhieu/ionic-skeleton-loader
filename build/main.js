webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacebookPage = /** @class */ (function () {
    function FacebookPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FacebookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacebookPage');
    };
    FacebookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-facebook',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/facebook/facebook.html"*/'<ion-header>\n  <ion-navbar color="facebook">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-searchbar placeholder="Search" (ionFocus)="goToSearch()"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <ion-list>\n    <ion-item no-lines>\n      <ion-avatar item-start>\n        <skeleton-item height="36px" width="36px" rounded></skeleton-item>\n      </ion-avatar>\n      <skeleton-item height="16px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col text-center>\n          <skeleton-item width="60px" inline></skeleton-item>\n        </ion-col>\n        <ion-col text-center>\n          <skeleton-item width="60px" inline></skeleton-item>\n        </ion-col>\n        <ion-col text-center>\n          <skeleton-item width="60px" inline></skeleton-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item no-lines>\n      <skeleton-item width="50px"></skeleton-item>\n      <div>\n        <skeleton-item *ngFor="let i of [0,1,2,3,4,5,6]" height="56px" width="56px" rounded inline style="margin-right: 4px"></skeleton-item>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item no-lines>\n      <ion-avatar item-start>\n        <skeleton-item height="36px" width="36px" rounded></skeleton-item>\n      </ion-avatar>\n      <skeleton-item height="16px"></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item no-lines>\n      <skeleton-item height="14px"></skeleton-item>\n      <skeleton-item height="14px"></skeleton-item>\n      <skeleton-item width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item no-lines>\n      <skeleton-item height="180px" no-animated></skeleton-item>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="white">\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/facebook/facebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FacebookPage);
    return FacebookPage;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/notification/notification.html"*/'<ion-header>\n  <ion-navbar color="pinterest">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n          <skeleton-item height="10px"></skeleton-item>\n          <skeleton-item height="10px" width="67%"></skeleton-item>\n        </ion-col>\n        <ion-col col-auto>\n          <skeleton-item width="60px" height="60px"></skeleton-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n\n          <ion-row margin-top>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n          <skeleton-item height="10px"></skeleton-item>\n          <skeleton-item height="10px" width="67%"></skeleton-item>\n        </ion-col>\n        <ion-col col-auto>\n          <skeleton-item width="64px" height="64px"></skeleton-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n          <skeleton-item height="10px"></skeleton-item>\n          <skeleton-item height="10px" width="67%"></skeleton-item>\n        </ion-col>\n        <ion-col col-auto>\n          <skeleton-item width="64px" height="64px"></skeleton-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n          <skeleton-item height="10px"></skeleton-item>\n          <skeleton-item height="10px" width="67%"></skeleton-item>\n        </ion-col>\n        <ion-col col-auto>\n          <skeleton-item width="64px" height="64px"></skeleton-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n\n          <ion-row margin-top>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col col-auto>\n          <skeleton-item height="44px" width="44px" rounded></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="22px" width="80%"></skeleton-item>\n\n          <ion-row margin-top>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n            <ion-col>\n              <skeleton-item height="60px"></skeleton-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PinterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PinterestPage = /** @class */ (function () {
    function PinterestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PinterestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PinterestPage');
    };
    PinterestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pinterest',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/pinterest/pinterest.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-searchbar mode="ios" placeholder="Search" (ionFocus)="goToSearch()"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle color="muted">\n        <ion-icon name="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="pin-container">\n    <ion-col>\n      <div class="pin-item">\n        <skeleton-item height="220px" radius="8px" style="margin-bottom: 12px" no-animated></skeleton-item>\n        <skeleton-item height="12px" width="67%"></skeleton-item>\n      </div>\n      <div class="pin-item">\n        <skeleton-item height="120px" radius="8px" style="margin-bottom: 12px" no-animated></skeleton-item>\n        <skeleton-item height="12px" width="67%"></skeleton-item>\n      </div>\n      <div class="pin-item">\n        <skeleton-item height="180px" radius="8px" style="margin-bottom: 12px" no-animated></skeleton-item>\n        <skeleton-item height="12px" width="67%"></skeleton-item>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="pin-item">\n        <skeleton-item height="150px" radius="8px" style="margin-bottom: 12px" no-animated></skeleton-item>\n        <skeleton-item height="12px" width="67%"></skeleton-item>\n      </div>\n      <div class="pin-item">\n        <skeleton-item height="240px" radius="8px" style="margin-bottom: 12px" no-animated></skeleton-item>\n        <skeleton-item height="12px" width="67%"></skeleton-item>\n      </div>\n      <div class="pin-item">\n        <skeleton-item height="100px" radius="8px" style="margin-bottom: 12px" no-animated></skeleton-item>\n        <skeleton-item height="12px" width="67%"></skeleton-item>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="white">\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/pinterest/pinterest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PinterestPage);
    return PinterestPage;
}());

//# sourceMappingURL=pinterest.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TablePage = /** @class */ (function () {
    function TablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TablePage');
    };
    TablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-table',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/table/table.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Table</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-muted">\n  <table class="ionic-table">\n    <colgroup>\n      <col style="width:10%">\n      <col style="width:60%">\n      <col style="width:30%">\n    </colgroup>\n    <thead>\n      <tr>\n        <th>\n          <skeleton-item width="16px"></skeleton-item>\n        </th>\n        <th>\n          <skeleton-item></skeleton-item>\n        </th>\n        <th>\n          <skeleton-item></skeleton-item>\n        </th>\n      </tr>\n    </thead>\n    <tr *ngFor="let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">\n      <td>\n        <skeleton-item width="16px"></skeleton-item>\n      </td>\n      <td>\n        <skeleton-item></skeleton-item>\n      </td>\n      <td>\n        <skeleton-item></skeleton-item>\n      </td>\n    </tr>\n  </table>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/table/table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TablePage);
    return TablePage;
}());

//# sourceMappingURL=table.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		276,
		4
	],
	"../pages/facebook/facebook.module": [
		277,
		3
	],
	"../pages/notification/notification.module": [
		278,
		2
	],
	"../pages/pinterest/pinterest.module": [
		279,
		1
	],
	"../pages/table/table.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Skeleton Loader</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px" rounded></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-card-content>\n      <skeleton-item></skeleton-item>\n      <skeleton-item></skeleton-item>\n      <skeleton-item width="67%"></skeleton-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <skeleton-item height="120px"></skeleton-item>\n    </ion-item>\n    <ion-card-content>\n      <skeleton-item height="24px" width="80%" style="margin-bottom: 12px"></skeleton-item>\n      <skeleton-item height="12px"></skeleton-item>\n      <skeleton-item height="12px" width="67%"></skeleton-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <skeleton-item height="180px"></skeleton-item>\n    </ion-item>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <skeleton-item height="60px"></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="60px"></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="60px"></skeleton-item>\n        </ion-col>\n        <ion-col>\n          <skeleton-item height="60px"></skeleton-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px"></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px"></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px"></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px"></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px"></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="m-n">\n    <ion-item no-lines *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px"></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n    <ion-item no-lines *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n      <ion-avatar item-start>\n        <skeleton-item height="50px" width="50px" rounded></skeleton-item>\n      </ion-avatar>\n      <skeleton-item></skeleton-item>\n      <skeleton-item height="8px" width="67%"></skeleton-item>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_facebook_facebook__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pinterest_pinterest__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_table_table__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_facebook_facebook__["a" /* FacebookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pinterest_pinterest__["a" /* PinterestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_table_table__["a" /* TablePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facebook/facebook.module#FacebookPageModule', name: 'FacebookPage', segment: 'facebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pinterest/pinterest.module#PinterestPageModule', name: 'PinterestPage', segment: 'pinterest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table/table.module#TablePageModule', name: 'TablePage', segment: 'table', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_facebook_facebook__["a" /* FacebookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pinterest_pinterest__["a" /* PinterestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_table_table__["a" /* TablePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_facebook_facebook__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pinterest_pinterest__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_table_table__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Skeleton Loader', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Detail', component: __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__["a" /* DetailPage */] },
            { title: 'Facebook', component: __WEBPACK_IMPORTED_MODULE_7__pages_facebook_facebook__["a" /* FacebookPage */] },
            { title: 'Pinterest', component: __WEBPACK_IMPORTED_MODULE_8__pages_pinterest_pinterest__["a" /* PinterestPage */] },
            { title: 'Notification', component: __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */] },
            { title: 'Table', component: __WEBPACK_IMPORTED_MODULE_10__pages_table_table__["a" /* TablePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_item_skeleton_item__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**

  # Ionic 3 Skeleton Loader component

  ## Setup

  After clone or download this project.

  Install Ionic CLI

  ```
  $ npm install -g ionic
  ```

  Install dependencies

  ```
  $ cd <project>
  $ npm install
  ```

  Run the app on Localhost

  ```
  $ ionic serve
  ```

  See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

  ## skeleton-item
  `<skeleton-item>` is the main block to build more complex skeleton-style loading screen

  ### Usage

  ```
  <skeleton-item height="50px" width="50px" rounded></skeleton-item>
  ```

  You can add CSS classes or inline CSS as normal HTML element

  ```
  <skeleton-item class="pin-image" height="50px" width="50px" rounded style="margin-bottom: 16px"></skeleton-item>
  ```

  ### Available attributes

  - {height: string} can be px or %, default value is '16px'
  - {width: string} can be px or %, default value is '100%'
  - {radius: string} set border-radius, default value is '4px'
  - {rounded} set border-radius to 999em to make rounded block when the height and width have the same value
  - {no-animated} disable animation effect

 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkeletonItemComponent = /** @class */ (function () {
    function SkeletonItemComponent() {
        this.styles = {};
    }
    SkeletonItemComponent.prototype.ngOnInit = function () {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "radius", void 0);
    SkeletonItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'skeleton-item',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/components/skeleton-item/skeleton-item.html"*/'<div [ngStyle]="styles"></div>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/components/skeleton-item/skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <skeleton-item height="320px" no-animated></skeleton-item>\n  <div padding>\n    <skeleton-item height="24px"></skeleton-item>\n    <skeleton-item height="24px" width="67%" style="margin-bottom: 12px"></skeleton-item>\n    <skeleton-item height="14px"></skeleton-item>\n    <skeleton-item height="14px"></skeleton-item>\n    <skeleton-item width="67%"></skeleton-item>\n  </div>\n  <div padding>\n    <skeleton-item height="52px" radius="8px"></skeleton-item>\n  </div>\n\n  <ion-item no-lines>\n    <ion-avatar item-start>\n      <skeleton-item height="36px" width="36px" rounded></skeleton-item>\n    </ion-avatar>\n    <skeleton-item height="16px" width="67%"></skeleton-item>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Workspace/IONIC/v2/skeleton-loader/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map