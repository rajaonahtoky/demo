(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lost-password-lost-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lost-password/lost-password.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lost-password/lost-password.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"sign-in-content\">\n  <section class=\"form-login-email\">\n    <div class=\"logo-login-email ion-text-center\">\n      <img src=\"assets/images/logo.png\" alt=\"\">\n    </div>\n    <div class=\"bloc-form-login-email\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"resetPassword()\">\n        <ion-list class=\"inputs-list input-list-login-email\" lines=\"full\">\n          <ion-item class=\"input-item input-login-email\">\n            <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-list>\n        <ion-button class=\"btn-login-email\" type=\"submit\" expand=\"block\" [disabled]=\"!loginForm.valid\">demander un mot de passe</ion-button>\n        <ion-button class=\"btn-annuler\" type=\"submit\" expand=\"block\" [disabled]=\"!loginForm.valid\">annuler</ion-button>\n        <div class=\"error-container\" *ngIf=\"submitError\">\n          <div class=\"error-message\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ submitError }}</span>\n          </div>\n        </div>\n      </form>\n    </div>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lost-password/lost-password-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/lost-password/lost-password-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LostPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordPageRoutingModule", function() { return LostPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lost_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lost-password.page */ "./src/app/pages/lost-password/lost-password.page.ts");




const routes = [
    {
        path: '',
        component: _lost_password_page__WEBPACK_IMPORTED_MODULE_3__["LostPasswordPage"]
    }
];
let LostPasswordPageRoutingModule = class LostPasswordPageRoutingModule {
};
LostPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LostPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lost-password/lost-password.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/lost-password/lost-password.module.ts ***!
  \*************************************************************/
/*! exports provided: LostPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordPageModule", function() { return LostPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lost_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lost-password-routing.module */ "./src/app/pages/lost-password/lost-password-routing.module.ts");
/* harmony import */ var _lost_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lost-password.page */ "./src/app/pages/lost-password/lost-password.page.ts");







let LostPasswordPageModule = class LostPasswordPageModule {
};
LostPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _lost_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["LostPasswordPageRoutingModule"]
        ],
        declarations: [_lost_password_page__WEBPACK_IMPORTED_MODULE_6__["LostPasswordPage"]]
    })
], LostPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/lost-password/lost-password.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/lost-password/lost-password.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-in-content {\n  --background: linear-gradient(#00A3F3, #00CEFA);\n}\n\n.form-login-email {\n  padding: 100px 30px 0 30px;\n}\n\n.logo-login-email {\n  margin-bottom: 50px;\n}\n\n.input-list-login-email {\n  background: transparent;\n}\n\n.input-login-email {\n  --border-width: 0 0 3px 0 !important;\n  margin-bottom: 30px;\n  --background: transparent;\n  --border-color: #fff;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.btn-login-email {\n  --background: #A0ED00;\n  --border-radius: 50px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.btn-annuler {\n  --background: #FF6448;\n  --border-radius: 50px;\n  font-size: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9zdC1wYXNzd29yZC9sb3N0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0FBSUY7O0FBRkE7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvc3QtcGFzc3dvcmQvbG9zdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBBM0YzLCAjMDBDRUZBKTtcbn1cbi5mb3JtLWxvZ2luLWVtYWlsIHtcbiAgcGFkZGluZzogMTAwcHggMzBweCAwIDMwcHg7XG59XG4ubG9nby1sb2dpbi1lbWFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uaW5wdXQtbGlzdC1sb2dpbi1lbWFpbHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaW5wdXQtbG9naW4tZW1haWx7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgM3B4IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYnRuLWxvZ2luLWVtYWlse1xuICAtLWJhY2tncm91bmQ6ICNBMEVEMDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnRuLWFubnVsZXIge1xuICAtLWJhY2tncm91bmQ6ICNGRjY0NDg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/lost-password/lost-password.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/lost-password/lost-password.page.ts ***!
  \***********************************************************/
/*! exports provided: LostPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordPage", function() { return LostPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let LostPasswordPage = class LostPasswordPage {
    constructor() {
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ]
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }
    ngOnInit() {
    }
    resetPassword() {
    }
};
LostPasswordPage.ctorParameters = () => [];
LostPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lost-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lost-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lost-password/lost-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lost-password.page.scss */ "./src/app/pages/lost-password/lost-password.page.scss")).default]
    })
], LostPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-lost-password-lost-password-module-es2015.js.map