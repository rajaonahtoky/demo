(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-color\" [style.background-color]=\"bgColor\">\n    <ion-buttons class=\"ion-align-self-start\" slot=\"start\">\n      <ion-menu-button *ngIf=\"!back\" [color]=\"color\"></ion-menu-button>\n      <ion-back-button *ngIf=\"back\" defaultHref=\"/dashboard/home\" \n        text=\"\" \n        icon=\"arrow-back-outline\" [color]=\"color\">\n      </ion-back-button>\n    </ion-buttons>\n    <div [style.color]=\"color\">\n      <ng-content select=\".title\"></ng-content>\n    </div>\n    <ion-buttons class=\"ion-align-self-start button-end\" slot=\"end\">\n      <ion-button [color]=\"color\"><ion-icon [name]=\"iconEnd\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header back=\"true\" color=\"dark\" iconEnd=\"filter-outline\" slot=\"fixed\">\n    <div class=\"title\">\n      <h1>Votre profil</h1>\n      <div class=\"img-profil ion-text-center\">\n        <img src=\"assets/images/profile-photo-square.jpg\" alt=\"\">\n      </div>\n      <h2>{{ profile.name }}</h2>\n      <p>{{ profile.address }}</p>\n    </div>\n  </app-header>\n\n  <section class=\"content-profil\">\n    <div class=\"follow-profil\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"following ion-text-center\">\n              <span>{{ profile.likes }}</span>\n              <p>Likes</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"following ion-text-center\">\n              <span>{{ profile.following }}</span>\n            <p>Following</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"following ion-text-center\">\n              <span>{{ profile.followers }}</span>\n              <p>Followers</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"actus-profil\">\n      <div class=\"profil-entretien\">\n        <img src=\"assets/images/profile-photo-square.jpg\" alt=\"\">\n        <span class=\"name-profil-entretien\">\n          <strong>{{ profile.name }}</strong><br/>\n          8 Nov\n        </span>\n      </div>\n      <div class=\"angle-down-profil\">\n        <ion-icon name=\"chevron-down-outline\"></ion-icon>\n      </div>\n      <div class=\"content-user\">\n        <p>\n          When I was 5 years old, my mother always\n        </p>\n        <div class=\"ion-text-center img-content-user\">\n          <img src=\"assets/images/img-stat-user.jpg\" alt=\"\">\n        </div>\n      </div>\n      <ion-list class=\"msg-user\">\n        <ion-item>\n          <span>256</span>\n          <ion-icon name=\"chatbox-outline\"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <span>428</span>\n          <ion-icon name=\"heart-outline\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"actus-profil actus-profil-1\">\n      <div class=\"profil-entretien\">\n        <img src=\"assets/images/profile-photo-square.jpg\" alt=\"\">\n        <span class=\"name-profil-entretien name-user-profil\">\n          <strong>Jack Snow</strong><br/>\n          8 Nov\n        </span>\n      </div>\n      <div class=\"angle-down-profil\">\n        <ion-icon name=\"chevron-down-outline\"></ion-icon>\n      </div>\n      <div class=\"content-user\">\n        <p> \n          told me that happiness was the key to life. \n          When I went to school, they asked me what \n          I wanted to be when I grew up.\n        </p>\n      </div>\n      <ion-list class=\"msg-user\">\n        <ion-item>\n          <span>256</span>\n          <ion-icon name=\"chatbox-outline\"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <span>4k</span>\n          <ion-icon name=\"heart-outline\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n  <div class=\"add\">\n    <ion-button>\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  z-index: 1000;\n}\n\nion-toolbar {\n  --padding-top: 2rem;\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  border-radius: 0 0 0 70px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\nion-title {\n  height: 90%;\n}\n\n.button-end {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxRkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogMnJlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA3MHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5pb24tdGl0bGUge1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmJ1dHRvbi1lbmQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.bgColor = '#FFFFFF';
        this.iconEnd = '';
        this.color = 'light';
        this.back = false;
    }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    bgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    back: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _profile_page_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.page.resolver */ "./src/app/pages/profile/profile.page.resolver.ts");





const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
        resolve: { data: _profile_page_resolver__WEBPACK_IMPORTED_MODULE_4__["ProfilePageResolver"] }
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _profile_page_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page.resolver */ "./src/app/pages/profile/profile.page.resolver.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
        providers: [_profile_page_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/profile/profile.page.resolver.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageResolver", function() { return ProfilePageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web.service */ "./src/app/services/web.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ProfilePageResolver = class ProfilePageResolver {
    constructor(webService) {
        this.webService = webService;
    }
    resolve() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])({
            posts: this.webService.getPostsByUserId(1),
            profile: this.webService.getUserById(1)
        });
    }
};
ProfilePageResolver.ctorParameters = () => [
    { type: src_app_services_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"] }
];
ProfilePageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProfilePageResolver);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-header {\n  width: 100%;\n}\napp-header .title {\n  padding-bottom: 0.5rem;\n  margin-left: 2rem;\n  font-size: 26px;\n  color: #000000;\n}\napp-header .title h1 {\n  font-family: \"Montserrat Bold\";\n  font-size: 26px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\napp-header .title h2 {\n  font-family: \"Montserrat Bold\";\n  font-size: 24px;\n  margin-top: 1rem;\n  margin-bottom: 0;\n  text-align: center;\n}\napp-header .title p {\n  font-size: 14px;\n  margin-top: 1px;\n  text-align: center;\n  color: #78849E;\n}\n.content-profil {\n  margin-top: 16rem;\n}\n.img-profil {\n  margin-top: 7px;\n}\n.img-profil img {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n}\n.add {\n  position: fixed;\n  z-index: 99999999;\n  bottom: 1rem;\n  right: 1rem;\n}\n.add ion-icon {\n  color: #000000;\n  font-size: 30px;\n}\n.add ion-button {\n  --background: #FFFFFF;\n  --border-radius: 50%;\n  width: 56px;\n  height: 56px;\n}\n.follow-profil {\n  background: url(\"/assets/images/bg-img-profil.jpg\") no-repeat center center/cover;\n}\n.following span {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n}\n.following p {\n  margin: 0;\n  font-size: 11px;\n  color: #fff;\n  opacity: 0.65;\n}\n.follow-profil {\n  position: relative;\n  z-index: 9;\n  border-bottom-left-radius: 70px;\n  margin-top: 4px;\n  padding: 90px 0 30px;\n}\n.actus-profil {\n  position: relative;\n  background: #FFC603;\n  padding: 100px 30px 15px;\n  border-bottom-left-radius: 70px;\n  margin-top: -65px;\n  z-index: 8;\n}\n.profil-entretien img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  float: left;\n}\n.name-profil-entretien {\n  display: inline-block;\n  margin-left: 16px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n}\n.name-profil-entretien strong {\n  font-size: 16px;\n  color: #fff;\n}\n.angle-down-profil {\n  float: right;\n  margin-top: -31px;\n  font-size: 21px;\n}\n.angle-down-profil ion-icon {\n  color: #78849E;\n}\n.content-user p {\n  font-size: 13px;\n  color: #fff;\n  opacity: 0.65;\n  margin-bottom: 25px;\n}\n.img-content-user img {\n  width: 295px;\n  height: 104px;\n  border-top-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.msg-user {\n  text-align: right;\n  background: transparent;\n}\n.msg-user ion-item {\n  display: inline-block;\n  --background: transparent;\n  border-bottom: none !important;\n  --border-color: transparent;\n  --padding-start: 3px;\n}\n.msg-user ion-item span {\n  font-size: 12px;\n  font-weight: bold;\n  color: #BBBCCD;\n  display: inline-block;\n  padding-right: 5px;\n}\n.msg-user ion-item ion-icon {\n  font-size: 20px;\n  font-weight: bold;\n  color: #998FA2;\n  display: inline-block;\n}\n.actus-profil-1 {\n  background: #241332;\n  z-index: 7;\n  margin-bottom: 30px;\n}\n.name-user-profil {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNJO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ047QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUlBO0VBQ0UsaUZBQUE7QUFERjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlGO0FBRkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBT0Y7QUFMQTtFQUNFLGNBQUE7QUFRRjtBQU5BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUFVRjtBQVJBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQVdGO0FBVEE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBWUY7QUFWQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBYUY7QUFYQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWNGO0FBWkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQWVGO0FBYkE7RUFDRSxZQUFBO0FBZ0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG5cbiAgICBoMSB7XG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEJvbGRcIjsgIFxuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBCb2xkXCI7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzc4ODQ5RTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnQtcHJvZmlsIHtcbiAgbWFyZ2luLXRvcDogMTZyZW07XG59XG4uaW1nLXByb2ZpbCB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi5pbWctcHJvZmlsIGltZyB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWRkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgYm90dG9tOiAxcmVtO1xuICByaWdodDogMXJlbTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICB9XG59XG5cbi5mb2xsb3ctcHJvZmlsIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctaW1nLXByb2ZpbC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbi5mb2xsb3dpbmcgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZvbGxvd2luZyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjY1O1xufVxuLmZvbGxvdy1wcm9maWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZzogOTBweCAwIDMwcHg7XG59XG4uYWN0dXMtcHJvZmlse1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6I0ZGQzYwMztcbiAgcGFkZGluZzogMTAwcHggMzBweCAxNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3MHB4O1xuICBtYXJnaW4tdG9wOiAtNjVweDtcbiAgei1pbmRleDogODtcbn1cbi5wcm9maWwtZW50cmV0aWVuIGltZyB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hbWUtcHJvZmlsLWVudHJldGllbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubmFtZS1wcm9maWwtZW50cmV0aWVuIHN0cm9uZ3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hbmdsZS1kb3duLXByb2ZpbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTMxcHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi5hbmdsZS1kb3duLXByb2ZpbCBpb24taWNvbntcbiAgY29sb3I6ICM3ODg0OUU7XG59XG4uY29udGVudC11c2VyIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjY1O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmltZy1jb250ZW50LXVzZXIgaW1ne1xuICB3aWR0aDogMjk1cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ubXNnLXVzZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubXNnLXVzZXIgaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbn1cbi5tc2ctdXNlciBpb24taXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNCQkJDQ0Q7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1zZy11c2VyIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5OThGQTI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hY3R1cy1wcm9maWwtMXtcbiAgYmFja2dyb3VuZDogIzI0MTMzMjtcbiAgei1pbmRleDogNztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5uYW1lLXVzZXItcHJvZmlse1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProfilePage = class ProfilePage {
    constructor(route) {
        this.route = route;
        this.posts = [];
    }
    ngOnInit() {
        if (this.route && this.route.data) {
            this.route.data.subscribe(pageData => {
                this.posts = pageData.data.posts;
                this.profile = pageData.data.profile;
            });
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/services/web.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/web.service.ts ***!
  \*****************************************/
/*! exports provided: WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let WebService = class WebService {
    constructor(http) {
        this.http = http;
    }
    getPostsByUserId(userId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'posts/' + userId);
    }
    getUserById(userId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'user/' + userId);
    }
};
WebService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WebService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebService);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map