(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-intro-login-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-intro/login-intro.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-intro/login-intro.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content class=\"content-login-intro\">\n  <section class=\"login-intro\">\n    <div class=\"title-login-intro\">\n      <h1>\n        Piscinadom<br />\n        Le Shop Mobile\n      </h1>\n    </div>\n    <div class=\"list-btn-intro-login\">\n      <ion-button (click)=\"signInWithGoogle()\" class=\"btn-login-google\">\n        Google\n      </ion-button>\n      <ion-button (click)=\"signInWithFacebook()\" class=\"btn-login-facebook\">\n        Facebook\n      </ion-button>\n      <ion-button class=\"btn-login-apple\"> Apple </ion-button>\n      <ion-button class=\"btn-login-telephone\"> Téléphone </ion-button>\n      <ion-button routerLink=\"/login/email\" class=\"btn-login-email\">\n        email\n      </ion-button>\n    </div>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login-intro/login-intro-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/login-intro/login-intro-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoginIntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginIntroPageRoutingModule", function() { return LoginIntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-intro.page */ "./src/app/pages/login-intro/login-intro.page.ts");




const routes = [
    {
        path: '',
        component: _login_intro_page__WEBPACK_IMPORTED_MODULE_3__["LoginIntroPage"]
    }
];
let LoginIntroPageRoutingModule = class LoginIntroPageRoutingModule {
};
LoginIntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginIntroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login-intro/login-intro.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/login-intro/login-intro.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginIntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginIntroPageModule", function() { return LoginIntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-intro-routing.module */ "./src/app/pages/login-intro/login-intro-routing.module.ts");
/* harmony import */ var _login_intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-intro.page */ "./src/app/pages/login-intro/login-intro.page.ts");







let LoginIntroPageModule = class LoginIntroPageModule {
};
LoginIntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginIntroPageRoutingModule"]
        ],
        declarations: [_login_intro_page__WEBPACK_IMPORTED_MODULE_6__["LoginIntroPage"]]
    })
], LoginIntroPageModule);



/***/ }),

/***/ "./src/app/pages/login-intro/login-intro.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/login-intro/login-intro.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-login-intro {\n  --background: url(\"/assets/images/bg-intro-login.jpg\") no-repeat center center / cover;\n}\n\n.login-intro {\n  padding: 100px 30px 0 30px;\n}\n\n.title-login-intro h1 {\n  font-size: 31px;\n  text-align: center;\n  color: #78808E;\n  margin: 0;\n}\n\n.list-btn-intro-login ion-button {\n  display: block;\n  margin-bottom: 30px;\n  --border-radius:40px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.list-btn-intro-login {\n  margin-top: 100px;\n}\n\n.btn-login-google {\n  --background: #FF6448;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.btn-login-facebook {\n  --background: linear-gradient(#228CC7, #1F7FB4);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.btn-login-apple {\n  --background: #000;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.btn-login-telephone {\n  --background: #A0ED00;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.btn-login-email {\n  --background: #C14DFF;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4taW50cm8vbG9naW4taW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0ZBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxxQkFBQTtFQUNBLG1GQUFBO0FBTUo7O0FBSkE7RUFDSSwrQ0FBQTtFQUNBLG1GQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLG1GQUFBO0FBUUo7O0FBTkE7RUFDSSxxQkFBQTtFQUNBLG1GQUFBO0FBU0o7O0FBUEE7RUFDSSxxQkFBQTtFQUNBLG1GQUFBO0FBVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi1pbnRyby9sb2dpbi1pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1sb2dpbi1pbnRyb3tcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLWludHJvLWxvZ2luLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuLmxvZ2luLWludHJve1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggMCAzMHB4O1xufVxuLnRpdGxlLWxvZ2luLWludHJvIGgxIHtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNzg4MDhFO1xuICAgIG1hcmdpbjogMDtcbn1cbi5saXN0LWJ0bi1pbnRyby1sb2dpbiBpb24tYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOjQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubGlzdC1idG4taW50cm8tbG9naW4ge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmJ0bi1sb2dpbi1nb29nbGUge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGNjQ0ODtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5idG4tbG9naW4tZmFjZWJvb2sge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMjhDQzcsICMxRjdGQjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmJ0bi1sb2dpbi1hcHBsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmJ0bi1sb2dpbi10ZWxlcGhvbmUge1xuICAgIC0tYmFja2dyb3VuZDogI0EwRUQwMDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5idG4tbG9naW4tZW1haWwge1xuICAgIC0tYmFja2dyb3VuZDogI0MxNERGRjtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login-intro/login-intro.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login-intro/login-intro.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginIntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginIntroPage", function() { return LoginIntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ "./src/app/services/firebase-auth.service.ts");





let LoginIntroPage = class LoginIntroPage {
    constructor(angularFire, router, ngZone, firebaseAuthService) {
        this.angularFire = angularFire;
        this.router = router;
        this.ngZone = ngZone;
        this.firebaseAuthService = firebaseAuthService;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
        };
        this.authRedirectResult = this.firebaseAuthService.getRedirectResult()
            .subscribe(result => {
            if (result.user)
                this.redirectLoggedUser();
            else if (result.error)
                this.submitError = result.error;
        });
    }
    ngOnInit() {
    }
    redirectLoggedUser() {
        this.ngZone.run(() => {
            this.router.navigate(['/dashboard/home']);
        });
    }
    signInWithGoogle() {
        this.firebaseAuthService.signInWithGoogle().then((result) => {
            if (result.additionalUserInfo) {
                this.firebaseAuthService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // const token = result.credential.accessToken;
            this.redirectLoggedUser();
        }).catch((error) => {
            console.log(error);
        });
    }
    signInWithFacebook() {
        this.firebaseAuthService.signInWithFacebook().then((result) => {
            if (result.additionalUserInfo) {
                this.firebaseAuthService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // const token = result.credential.accessToken;
            this.redirectLoggedUser();
        }).catch((error) => {
            console.log(error);
        });
    }
};
LoginIntroPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] }
];
LoginIntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-intro/login-intro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-intro.page.scss */ "./src/app/pages/login-intro/login-intro.page.scss")).default]
    })
], LoginIntroPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-intro-login-intro-module-es2015.js.map