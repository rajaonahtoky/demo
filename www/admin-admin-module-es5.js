(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-color\" [style.background-color]=\"bgColor\">\n    <ion-buttons class=\"ion-align-self-start\" slot=\"start\">\n      <ion-menu-button *ngIf=\"!back\" [color]=\"color\"></ion-menu-button>\n      <ion-back-button *ngIf=\"back\" defaultHref=\"/dashboard/home\" \n        text=\"\" \n        icon=\"arrow-back-outline\" [color]=\"color\">\n      </ion-back-button>\n    </ion-buttons>\n    <div [style.color]=\"color\">\n      <ng-content select=\".title\"></ng-content>\n    </div>\n    <ion-buttons class=\"ion-align-self-start button-end\" slot=\"end\">\n      <ion-button [color]=\"color\"><ion-icon [name]=\"iconEnd\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminAdminPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen>\n  <app-header color=\"dark\" back=\"true\" iconEnd=\"settings-outline\" slot=\"fixed\">\n    <div class=\"title\">\n      <h1>Les indicateurs</h1>\n      <p>Votre tableau de bord</p>\n      <h2>Team</h2>\n    </div>\n  </app-header>\n\n  <section class=\"status\">\n    <div class=\"status-content\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\"><ion-icon style=\"color: #B07DD1\" name=\"ellipse\"></ion-icon></ion-col>\n          <ion-col size=\"7\"><p class=\"title\">SAV</p></ion-col>\n          <ion-col><div class=\"bar\">\n            <div class=\"sub-bar\" style=\"background: #B07DD1; width: 60%;\"></div>\n          </div></ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\"><ion-icon style=\"color: #4F8DCB\" name=\"ellipse\"></ion-icon></ion-col>\n          <ion-col size=\"7\"><p class=\"title\">Entretiens</p></ion-col>\n          <ion-col><div class=\"bar\">\n            <div class=\"sub-bar\" style=\"background: #4F8DCB; width: 80%;\"></div>\n          </div></ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\"><ion-icon style=\"color: #5F4591\" name=\"ellipse\"></ion-icon></ion-col>\n          <ion-col size=\"7\"><p class=\"title\">Produits</p></ion-col>\n          <ion-col><div class=\"bar\">\n            <div class=\"sub-bar\" style=\"background: #5F4591; width: 35%;\"></div>\n          </div></ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\"><ion-icon style=\"color: #9599B3\" name=\"ellipse\"></ion-icon></ion-col>\n          <ion-col size=\"7\"><p class=\"title\">Utilisation</p></ion-col>\n          <ion-col><div class=\"bar\">\n            <div class=\"sub-bar\" style=\"background: #9599B3; width: 60%;\"></div>\n          </div></ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n\n  <section class=\"rendez-vous\">\n    <ion-icon name=\"chevron-down-outline\"></ion-icon>\n    <div class=\"rendez-vous-content\">\n      <h1>47<span>rendez-vous</span></h1>\n      <ion-row>\n        <ion-col>\n          <p class=\"details\">Détails</p>\n        </ion-col>\n        <ion-col>\n          <p class=\"settings\">paramètres</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </section>\n\n  <section class=\"graphics\">\n    <p class=\"graphics-title\">Graphiques</p>\n    <ion-slides [options]=\"options\">\n      <ion-slide>\n        <div class=\"box\">\n          <ion-icon size=\"large\" name=\"partly-sunny-outline\"></ion-icon><br><br>\n          <div>\n            <p>Entretiens</p>\n            <h2>405 évènements</h2>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"box\">\n          <ion-icon size=\"large\" name=\"sunny-outline\"></ion-icon><br><br>\n          <div>\n            <p>SAV</p>\n            <h2>347 évènements</h2>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"box\">\n          <ion-icon size=\"large\" name=\"bug-outline\"></ion-icon><br><br>\n          <div>\n            <p>Produits</p>\n            <h2>163 évènements</h2>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </section>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/components/header/header.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/header/header.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  z-index: 1000;\n}\n\nion-toolbar {\n  --padding-top: 2rem;\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  border-radius: 0 0 0 70px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\nion-title {\n  height: 90%;\n}\n\n.button-end {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxRkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogMnJlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA3MHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5pb24tdGl0bGUge1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmJ1dHRvbi1lbmQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/header/header.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.bgColor = '#FFFFFF';
          this.iconEnd = '';
          this.color = 'light';
          this.back = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent.propDecorators = {
        bgColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        back: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./header.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./header.component.scss */
        "./src/app/components/header/header.component.scss"))["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "./src/app/pages/admin/admin-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/admin/admin-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AdminPageRoutingModule */

    /***/
    function srcAppPagesAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function () {
        return AdminPageRoutingModule;
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


      var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin.page */
      "./src/app/pages/admin/admin.page.ts");

      var routes = [{
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
      }];

      var AdminPageRoutingModule = function AdminPageRoutingModule() {
        _classCallCheck(this, AdminPageRoutingModule);
      };

      AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/admin.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/admin/admin.module.ts ***!
      \*********************************************/

    /*! exports provided: AdminPageModule */

    /***/
    function srcAppPagesAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageModule", function () {
        return AdminPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-routing.module */
      "./src/app/pages/admin/admin-routing.module.ts");
      /* harmony import */


      var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin.page */
      "./src/app/pages/admin/admin.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var AdminPageModule = function AdminPageModule() {
        _classCallCheck(this, AdminPageModule);
      };

      AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"]],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
      })], AdminPageModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/admin.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/admin/admin.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdminAdminPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-header {\n  width: 100%;\n}\napp-header .title {\n  margin-top: -1rem;\n}\napp-header .title h1 {\n  font-family: \"Montserrat Bold\";\n  margin-bottom: 0;\n  text-align: center;\n  font-size: 26px;\n  color: #000000;\n}\napp-header .title p {\n  font-family: \"Montserrat Medium Italic\";\n  font-size: 12px;\n  margin-bottom: 0;\n  text-align: center;\n  color: #403249;\n  opacity: 48%;\n}\napp-header .title h2 {\n  font-family: \"Montserrat SemiBold\";\n  font-size: 16px;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: #352641;\n}\n.status {\n  position: relative;\n  background: #F7F7F7;\n  border-radius: 0 0 0 70px;\n  width: 100%;\n  height: 25.5rem;\n  z-index: 100;\n  padding-top: 15rem;\n}\n.status-content {\n  position: absolute;\n  top: 11.5rem;\n  left: 10%;\n  width: 80%;\n}\n.status-content .title {\n  font-family: \"Montserrat SemiBold\";\n  font-size: 16px;\n  margin: 0;\n  margin-left: 1rem;\n}\n.status-content .bar {\n  background: #EAE7F0;\n  height: 1rem;\n  border-radius: 10px;\n}\n.status-content .sub-bar {\n  height: 1rem;\n  border-radius: 10px;\n}\n.status-content .divider {\n  background: #998FA2;\n  height: 1px;\n  width: 100%;\n  opacity: 14%;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.rendez-vous {\n  position: relative;\n  background: linear-gradient(-10deg, #669CD6, #669CD6 35%, #4989CF 35%, #4989CF);\n  border-radius: 0 0 0 70px;\n  width: 100%;\n  height: 15rem;\n  margin-top: -4rem;\n  z-index: 90;\n}\n.rendez-vous ion-icon {\n  position: absolute;\n  top: 4.8rem;\n  right: 3rem;\n  color: #FFFFFF;\n}\n.rendez-vous-content {\n  position: absolute;\n  top: 8rem;\n  left: 2.5rem;\n  color: #FFFFFF;\n}\n.rendez-vous-content h1 {\n  font-family: \"Montserrat Bold\";\n  font-size: 57px;\n  margin: 0;\n}\n.rendez-vous-content h1 span {\n  font-family: \"Montserrat Light\";\n  font-size: 38px;\n  opacity: 40%;\n}\n.rendez-vous-content ion-row {\n  padding: 0 10px 0 10px;\n}\n.rendez-vous-content .details {\n  margin: 0;\n  font-size: 14px;\n  opacity: 56%;\n}\n.rendez-vous-content .settings {\n  margin: 0;\n  font-family: \"Montserrat Bold\";\n  font-size: 14px;\n  text-align: right;\n}\n.graphics {\n  position: relative;\n  background: #455D9D;\n  border-radius: 0 0 0 70px;\n  width: 100%;\n  height: 18.5rem;\n  margin-top: -4rem;\n  z-index: 80;\n}\n.graphics .graphics-title {\n  position: absolute;\n  top: 4rem;\n  left: 3.5rem;\n  color: #FFFFFF;\n  font-family: \"Montserrat Bold\";\n  font-size: 14px;\n}\n.graphics ion-slides {\n  position: absolute;\n  top: 8rem;\n  left: 3rem;\n}\n.graphics .box {\n  background: #352641;\n  border-radius: 30px;\n  width: 9.5rem;\n  height: 7.5rem;\n  color: #FFFFFF;\n  padding-top: 1rem;\n  padding-left: 1rem;\n}\n.graphics .box ion-icon {\n  float: left;\n  opacity: 60%;\n  margin-bottom: 0.5rem;\n  text-align: left;\n}\n.graphics .box p {\n  font-family: \"Montserrat Bold\";\n  font-size: 16px;\n  margin: 0;\n  text-align: left;\n}\n.graphics .box h2 {\n  font-size: 12px;\n  opacity: 70%;\n  margin: 2px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBQ0k7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQ0k7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDTjtBQUNJO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNOO0FBSUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURGO0FBR0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSwrRUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFMRjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFMSjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFORjtBQVFFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQU5KO0FBUUk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTk47QUFVRTtFQUNFLHNCQUFBO0FBUko7QUFXRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVRKO0FBWUU7RUFDRSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQWNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFYRjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFYSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVpKO0FBZUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWdCSTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWROO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFmTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuXG4gICAgaDEge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBCb2xkXCI7ICBcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IE1lZGl1bSBJdGFsaWNcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzQwMzI0OTtcbiAgICAgIG9wYWNpdHk6IDQ4JTtcbiAgICB9XG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBTZW1pQm9sZFwiO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzM1MjY0MTtcbiAgICB9XG4gIH1cbn1cblxuLnN0YXR1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUuNXJlbTtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nLXRvcDogMTVyZW07XG59XG5cbi5zdGF0dXMtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMS41cmVtO1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiA4MCU7XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IFNlbWlCb2xkXCI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuXG4gIC5iYXIge1xuICAgIGJhY2tncm91bmQ6ICNFQUU3RjA7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuc3ViLWJhciB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZDogIzk5OEZBMjtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAxNCU7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgfVxufVxuXG4ucmVuZGV6LXZvdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTBkZWcsICM2NjlDRDYsICM2NjlDRDYgMzUlLCAjNDk4OUNGIDM1JSwgIzQ5ODlDRik7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1cmVtO1xuICBtYXJnaW4tdG9wOiAtNHJlbTtcbiAgei1pbmRleDogOTA7XG5cbiAgaW9uLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQuOHJlbTtcbiAgICByaWdodDogM3JlbTsgIFxuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG59XG5cbi5yZW5kZXotdm91cy1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhyZW07XG4gIGxlZnQ6IDIuNXJlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogNTdweDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgTGlnaHRcIjtcbiAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgIG9wYWNpdHk6IDQwJTtcbiAgICB9XG4gIH1cblxuICBpb24tcm93IHtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICB9XG5cbiAgLmRldGFpbHMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3BhY2l0eTogNTYlO1xuICB9XG5cbiAgLnNldHRpbmdzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBCb2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbi5ncmFwaGljcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzQ1NUQ5RDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTguNXJlbTtcbiAgbWFyZ2luLXRvcDogLTRyZW07XG4gIHotaW5kZXg6IDgwO1xuXG4gIC5ncmFwaGljcy10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHJlbTtcbiAgICBsZWZ0OiAzLjVyZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBCb2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHJlbTtcbiAgICBsZWZ0OiAzcmVtO1xuICB9XG5cbiAgLmJveCB7XG4gICAgYmFja2dyb3VuZDogIzM1MjY0MTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHdpZHRoOiA5LjVyZW07XG4gICAgaGVpZ2h0OiA3LjVyZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBvcGFjaXR5OiA2MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEJvbGRcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgb3BhY2l0eTogNzAlO1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/admin/admin.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/admin/admin.page.ts ***!
      \*******************************************/

    /*! exports provided: AdminPage */

    /***/
    function srcAppPagesAdminAdminPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPage", function () {
        return AdminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AdminPage = /*#__PURE__*/function () {
        function AdminPage() {
          _classCallCheck(this, AdminPage);

          this.options = {
            slidesPerView: 3,
            spaceBetween: 10
          };
        }

        _createClass(AdminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminPage;
      }();

      AdminPage.ctorParameters = function () {
        return [];
      };

      AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin.page.scss */
        "./src/app/pages/admin/admin.page.scss"))["default"]]
      })], AdminPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map