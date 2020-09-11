(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIntroIntroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <section class=\"slide-home\">\n    <ion-slides pager=\"true\">\n      <ion-slide *ngFor=\"let slide of appSildes\">\n        <img [src]=\"slide.image\" alt=\"\" />\n        <div class=\"absolute caption-slider\">\n          <div *ngIf=\"slide.description == 'Bienvenu'; else elseBlock \">\n            <h6>Piscinadom</h6>\n            <p>\n              <strong>{{ slide.description }}</strong><br />\n              {{ slide.title}}\n            </p>\n          </div>\n          <ng-template #elseBlock>\n            <p>\n              {{ slide.description }}\n              <strong>{{ slide.title}}</strong>\n            </p>\n          </ng-template>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </section>\n  <section class=\"bg-color-slide relative\">\n    <ion-button routerLink=\"/login/intro\" class=\"absolute btn-intro\">\n      Entrez\n    </ion-button>\n  </section>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/intro/intro-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/intro/intro-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: IntroPageRoutingModule */

    /***/
    function srcAppPagesIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function () {
        return IntroPageRoutingModule;
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


      var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/pages/intro/intro.page.ts");

      var routes = [{
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
      }];

      var IntroPageRoutingModule = function IntroPageRoutingModule() {
        _classCallCheck(this, IntroPageRoutingModule);
      };

      IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IntroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/intro/intro.module.ts ***!
      \*********************************************/

    /*! exports provided: IntroPageModule */

    /***/
    function srcAppPagesIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageModule", function () {
        return IntroPageModule;
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


      var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./intro-routing.module */
      "./src/app/pages/intro/intro-routing.module.ts");
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/pages/intro/intro.page.ts");

      var IntroPageModule = function IntroPageModule() {
        _classCallCheck(this, IntroPageModule);
      };

      IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
      })], IntroPageModule);
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/intro/intro.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIntroIntroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".relative {\n  position: relative;\n}\n\n.absolute {\n  position: absolute;\n}\n\nion-slides {\n  --bullet-background-active: white;\n}\n\n.slide-home ion-slide img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 654px;\n}\n\n.slide-home .swiper-container {\n  overflow: visible;\n}\n\n.swiper-pagination.swiper-pagination-bullets {\n  bottom: 126px !important;\n  left: 40% !important;\n}\n\n.bg-color-slide {\n  background: linear-gradient(#00A3F3, #00CEFA);\n  width: 100%;\n  height: 160px;\n}\n\nion-content {\n  --background: #00CEFA ;\n}\n\n.caption-slider {\n  background: #352641;\n  width: 90%;\n  right: 0;\n  bottom: -75px;\n  border-radius: 0 0 0 75px;\n  padding: 35px;\n  text-align: left;\n  height: 196px;\n}\n\n.caption-slider h6 {\n  margin: 0;\n  font-size: 11px;\n  color: #fff;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.caption-slider p {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 300;\n  line-height: 35px;\n  margin: 0;\n}\n\n.btn-intro {\n  --background: #D47FA6;\n  z-index: 99;\n  right: -2px;\n  top: 45px;\n  --border-radius: 50px 0 0 50px;\n  --padding-start: 50px;\n  --padding-end: 65px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.bg-color-slide .arrow-enter {\n  position: absolute;\n  right: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsa0JBQUE7QUFFVjs7QUFEQTtFQUFVLGtCQUFBO0FBS1Y7O0FBSkE7RUFDRSxpQ0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxhQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtBQVNGOztBQVBBO0VBQ0Usd0JBQUE7RUFDQSxvQkFBQTtBQVVGOztBQVJBO0VBQ0UsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVdGOztBQVRBO0VBQ0Usc0JBQUE7QUFZRjs7QUFWQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBYUY7O0FBWEE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBZUY7O0FBYkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQWlCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWxhdGl2ZXtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLmFic29sdXRle3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHdoaXRlO1xufVxuLnNsaWRlLWhvbWUgaW9uLXNsaWRlIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDY1NHB4O1xufVxuLnNsaWRlLWhvbWUgLnN3aXBlci1jb250YWluZXJ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7XG4gIGJvdHRvbTogMTI2cHggIWltcG9ydGFudDtcbiAgbGVmdDogNDAlICFpbXBvcnRhbnQ7XG59XG4uYmctY29sb3Itc2xpZGV7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBBM0YzICwgIzAwQ0VGQSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMwMENFRkFcbn1cbi5jYXB0aW9uLXNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICMzNTI2NDE7XG4gIHdpZHRoOiA5MCU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC03NXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA3NXB4O1xuICBwYWRkaW5nOjM1cHg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgaGVpZ2h0OiAxOTZweDtcbn1cbi5jYXB0aW9uLXNsaWRlciBoNiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNhcHRpb24tc2xpZGVyIHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAwO1xufVxuLmJ0bi1pbnRyb3tcbiAgLS1iYWNrZ3JvdW5kOiAjRDQ3RkE2O1xuICB6LWluZGV4OiA5OTtcbiAgcmlnaHQ6IC0ycHg7XG4gIHRvcDo0NXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNTBweDtcbiAgLS1wYWRkaW5nLWVuZDogNjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJnLWNvbG9yLXNsaWRlIC5hcnJvdy1lbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01MHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/intro/intro.page.ts ***!
      \*******************************************/

    /*! exports provided: IntroPage */

    /***/
    function srcAppPagesIntroIntroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPage", function () {
        return IntroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var IntroPage = /*#__PURE__*/function () {
        function IntroPage() {
          _classCallCheck(this, IntroPage);

          this.appSildes = [{
            image: 'assets/images/pic.jpg',
            title: 'Le shop mobile',
            description: 'Bienvenu'
          }, {
            image: 'assets/images/slide-2.jpg',
            title: 'Service d\'entretien à domicile',
            description: 'Maitrisez la qualité de l’eau de votre piscine. Planifiez les interventions.'
          }, {
            image: 'assets/images/slide-3.jpg',
            title: 'Interventions et SAV',
            description: 'Une panne ou un doute sur le fonctionnement d\’un équipement ?'
          }];
        }

        _createClass(IntroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IntroPage;
      }();

      IntroPage.ctorParameters = function () {
        return [];
      };

      IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./intro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./intro.page.scss */
        "./src/app/pages/intro/intro.page.scss"))["default"]]
      })], IntroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-intro-intro-module-es5.js.map