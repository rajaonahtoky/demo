(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"burger-menu\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"logo-home\">\n      <img src=\"assets/images/logo.png\" alt=\"\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <section class=\"content-home\">\n    <a href=\"/dashboard/entretien\">\n      <div class=\"bloc-home-entretien bg-home-entretien\">\n        <span class=\"date-home\">\n          Vendredi 17:30\n        </span>\n        <h2>\n          <strong>Entretien de votre piscine</strong><br/> \n          Gestion du planning\n        </h2>\n        <div class=\"bloc-follow\">\n          <div class=\"img-follow-1 img-follow\">\n            <img src=\"assets/images/follow-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"img-follow-2 img-follow\">\n            <img src=\"assets/images/follow-2.jpg\" alt=\"\">\n          </div>\n            <span>\n              join Marie, John & 10 others\n            </span>\n        </div>\n      </div>\n    </a>\n\n    <a href=\"/dashboard/sav\">\n      <div class=\"bloc-home-entretien bg-home-sav\">\n        <h2>\n          <strong>SAV & Interventions !</strong>\n        </h2>\n        <div class=\"bloc-follow\">\n          <div class=\"img-follow-1 img-follow\">\n            <img src=\"assets/images/follow-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"img-follow-2 img-follow\">\n            <img src=\"assets/images/follow-2.jpg\" alt=\"\">\n          </div>\n            <span>\n              join Marie, John & 10 others\n            </span>\n        </div>\n      </div>\n    </a>\n\n    <a href=\"/dashboard/shop\">\n      <div class=\"bloc-home-entretien bg-home-shop\">\n        <h2>\n          <strong>Piscinadom Le Shop</strong><br/>\n          Produits & accessoires\n        </h2>\n        <div class=\"bloc-follow\">\n          <div class=\"img-follow-1 img-follow\">\n            <img src=\"assets/images/follow-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"img-follow-2 img-follow\">\n            <img src=\"assets/images/follow-2.jpg\" alt=\"\">\n          </div>\n            <span>\n              join Marie, John & 10 others\n            </span>\n        </div>\n      </div>\n    </a>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".burger-menu {\n  --border-width: 0 !important;\n  --background: url(\"/assets/images/bg-head.png\") no-repeat center center / cover;\n  padding: 40px 20px;\n}\n\n.burger-menu ion-buttons {\n  margin-top: -80px;\n}\n\n.logo-home {\n  float: right;\n}\n\n.burger-menu ion-menu-button {\n  color: #fff;\n}\n\n.content-home a {\n  text-decoration: none;\n}\n\n.bloc-home-entretien {\n  background: #4EBDEF;\n  border-radius: 0 0 0 80px;\n  padding: 10px 10px 30px 30px;\n}\n\n.date-home {\n  font-size: 11px;\n  font-weight: 600;\n  color: #fff;\n}\n\n.bloc-home-entretien h2 {\n  font-size: 22px;\n  color: #fff;\n  font-weight: 400;\n  line-height: 32px;\n  margin: 0;\n}\n\n.img-follow {\n  display: inline;\n}\n\n.img-follow-1 img, .img-follow-2 img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: solid 2px #fff;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img-follow-1 {\n  position: relative;\n  z-index: 2;\n}\n\n.img-follow-2 {\n  position: relative;\n  z-index: 1;\n  left: -10px;\n}\n\n.bloc-follow span {\n  display: inline-block;\n  position: relative;\n  top: -10px;\n  opacity: 0.48;\n}\n\n.bloc-follow {\n  margin-top: 25px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.bg-home-sav {\n  background: #3B77D6;\n  position: relative;\n  top: -75px;\n  z-index: 2;\n  padding-top: 120px;\n}\n\n.bg-home-entretien {\n  position: relative;\n  z-index: 3;\n}\n\n.bg-home-shop {\n  background: #455D9D;\n  position: relative;\n  top: -160px;\n  z-index: 1;\n  padding-top: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsK0VBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFBRTtFQUNFLHFCQUFBO0FBR0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQVlKOztBQVZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFhSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVyZ2VyLW1lbnV7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLWhlYWQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgcGFkZGluZzo0MHB4IDIwcHg7XG59XG4uYnVyZ2VyLW1lbnUgaW9uLWJ1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDogLTgwcHg7XG59XG4ubG9nby1ob21lIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uYnVyZ2VyLW1lbnUgaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiNmZmY7XG59XG5cbi5jb250ZW50LWhvbWUge1xuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmJsb2MtaG9tZS1lbnRyZXRpZW4ge1xuICAgIGJhY2tncm91bmQ6ICM0RUJERUY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgODBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMzBweCAzMHB4O1xufVxuLmRhdGUtaG9tZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYmxvYy1ob21lLWVudHJldGllbiBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLmltZy1mb2xsb3cge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cbi5pbWctZm9sbG93LTEgaW1nLCAuaW1nLWZvbGxvdy0yIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmltZy1mb2xsb3ctMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG4uaW1nLWZvbGxvdy0yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAtMTBweDtcbn1cbi5ibG9jLWZvbGxvdyBzcGFue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBvcGFjaXR5OiAwLjQ4O1xufVxuLmJsb2MtZm9sbG93IHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5iZy1ob21lLXNhdntcbiAgICBiYWNrZ3JvdW5kOiMzQjc3RDY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTc1cHg7XG4gICAgei1pbmRleDogMjtcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7XG59XG4uYmctaG9tZS1lbnRyZXRpZW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG59XG4uYmctaG9tZS1zaG9we1xuICAgIGJhY2tncm91bmQ6IzQ1NUQ5RDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTYwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map