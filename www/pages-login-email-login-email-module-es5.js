(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-email-login-email-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-email/login-email.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-email/login-email.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginEmailLoginEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"sign-in-content\">\n  <section class=\"form-login-email\">\n    <div class=\"logo-login-email ion-text-center\">\n      <img src=\"assets/images/logo.png\" alt=\"\">\n    </div>\n    <div class=\"bloc-form-login-email\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"signInWithEmail()\">\n        <ion-list class=\"inputs-list input-list-login-email\" lines=\"full\">\n          <ion-item class=\"input-item input-login-email\">\n            <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item input-login-email\">\n            <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-list>\n        <ion-button class=\"sign-in-btn btn-login-email\" type=\"submit\" expand=\"block\" [disabled]=\"!loginForm.valid\">Go !</ion-button>\n        <div class=\"error-container\" *ngIf=\"submitError\">\n          <div class=\"error-message\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ submitError }}</span>\n          </div>\n        </div>\n        <div class=\"forgot-password ion-text-center\">\n          <ion-button routerLink=\"/login/lost-password\">\n            mot de passe oublié\n          </ion-button>\n        </div>\n      </form>\n    </div>\n  </section>\n  <section class=\"remove-form ion-text-center\">\n    <div class=\"bloc-remove-form\">\n      <ion-button>\n        Annuler\n      </ion-button>\n    </div>\n  </section>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/login-email/login-email-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/login-email/login-email-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: LoginEmailPageRoutingModule */

    /***/
    function srcAppPagesLoginEmailLoginEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginEmailPageRoutingModule", function () {
        return LoginEmailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-email.page */
      "./src/app/pages/login-email/login-email.page.ts");

      var routes = [{
        path: '',
        component: _login_email_page__WEBPACK_IMPORTED_MODULE_3__["LoginEmailPage"]
      }];

      var LoginEmailPageRoutingModule = function LoginEmailPageRoutingModule() {
        _classCallCheck(this, LoginEmailPageRoutingModule);
      };

      LoginEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginEmailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login-email/login-email.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/login-email/login-email.module.ts ***!
      \*********************************************************/

    /*! exports provided: LoginEmailPageModule */

    /***/
    function srcAppPagesLoginEmailLoginEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginEmailPageModule", function () {
        return LoginEmailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_email_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-email-routing.module */
      "./src/app/pages/login-email/login-email-routing.module.ts");
      /* harmony import */


      var _login_email_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-email.page */
      "./src/app/pages/login-email/login-email.page.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var LoginEmailPageModule = function LoginEmailPageModule() {
        _classCallCheck(this, LoginEmailPageModule);
      };

      LoginEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _login_email_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginEmailPageRoutingModule"]],
        declarations: [_login_email_page__WEBPACK_IMPORTED_MODULE_5__["LoginEmailPage"]]
      })], LoginEmailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login-email/login-email.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/login-email/login-email.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginEmailLoginEmailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sign-in-content {\n  --background: linear-gradient(#00A3F3, #00CEFA);\n}\n\n.form-login-email {\n  padding: 100px 30px 0 30px;\n}\n\n.logo-login-email {\n  margin-bottom: 50px;\n}\n\n.input-list-login-email {\n  background: transparent;\n}\n\n.input-login-email {\n  --border-width: 0 0 3px 0 !important;\n  margin-bottom: 30px;\n  --background: transparent;\n  --border-color: #fff;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.btn-login-email {\n  --background: #A0ED00;\n  --border-radius: 50px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.forgot-password ion-button {\n  --background: transparent;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.remove-form {\n  padding-top: 190px;\n}\n\n.bloc-remove-form {\n  padding: 0 30px;\n}\n\n.bloc-remove-form ion-button {\n  font-size: 20px;\n  font-weight: 600;\n  --border-radius: 50px;\n  width: 100%;\n  --background: #8B8B8B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tZW1haWwvbG9naW4tZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tZW1haWwvbG9naW4tZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24taW4tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBBM0YzLCAjMDBDRUZBKTtcbn1cbi5mb3JtLWxvZ2luLWVtYWlsIHtcbiAgICBwYWRkaW5nOiAxMDBweCAzMHB4IDAgMzBweDtcbn1cbi5sb2dvLWxvZ2luLWVtYWlsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmlucHV0LWxpc3QtbG9naW4tZW1haWx7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaW5wdXQtbG9naW4tZW1haWx7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAzcHggMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5idG4tbG9naW4tZW1haWx7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQTBFRDAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb3Jnb3QtcGFzc3dvcmQgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZW1vdmUtZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDE5MHB4O1xufVxuLmJsb2MtcmVtb3ZlLWZvcm0ge1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbn1cbi5ibG9jLXJlbW92ZS1mb3JtIGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJhY2tncm91bmQ6ICM4QjhCOEI7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/login-email/login-email.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/login-email/login-email.page.ts ***!
      \*******************************************************/

    /*! exports provided: LoginEmailPage */

    /***/
    function srcAppPagesLoginEmailLoginEmailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginEmailPage", function () {
        return LoginEmailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/firebase-auth.service */
      "./src/app/services/firebase-auth.service.ts");

      var LoginEmailPage = /*#__PURE__*/function () {
        function LoginEmailPage(angularFire, router, ngZone, authService) {
          var _this = this;

          _classCallCheck(this, LoginEmailPage);

          this.angularFire = angularFire;
          this.router = router;
          this.ngZone = ngZone;
          this.authService = authService;
          this.validation_messages = {
            'email': [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Enter a valid email.'
            }],
            'password': [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minlength',
              message: 'Password must be at least 6 characters long.'
            }]
          };
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
          this.authRedirectResult = this.authService.getRedirectResult().subscribe(function (result) {
            if (result.user) {
              _this.redirectLoggedUserToHomePage();
            } else if (result.error) {
              _this.submitError = result.error;
            }
          });
        }

        _createClass(LoginEmailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signInWithEmail",
          value: function signInWithEmail() {
            var _this2 = this;

            this.authService.signInWithEmail(this.loginForm.value['email'], this.loginForm.value['password']).then(function (user) {
              _this2.redirectLoggedUserToHomePage();
            })["catch"](function (error) {
              _this2.submitError = error.message;
            });
          }
        }, {
          key: "redirectLoggedUserToHomePage",
          value: function redirectLoggedUserToHomePage() {
            var _this3 = this;

            this.ngZone.run(function () {
              _this3.router.navigate(['/dashboard/home']);
            });
          }
        }]);

        return LoginEmailPage;
      }();

      LoginEmailPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]
        }];
      };

      LoginEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login-email.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-email/login-email.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login-email.page.scss */
        "./src/app/pages/login-email/login-email.page.scss"))["default"]]
      })], LoginEmailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-email-login-email-module-es5.js.map