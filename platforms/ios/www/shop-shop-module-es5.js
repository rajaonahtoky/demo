(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesShopShopPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header bgColor=\"#455D9D\">\n  <div class=\"title\">\n    <h1>Le Shop</h1>\n  </div>\n</app-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <section *ngFor=\"let shop of shops\">\n      <div class=\"photo\" [ngStyle]=\"{'background-image': 'url(' + shop.imageUrl + ')'}\">\n        <div class=\"infos\">\n          <span>{{shop.comments}}<ion-icon name=\"document-text-outline\"></ion-icon></span>\n          <span class=\"ion-padding-start\">{{shop.likes}}<ion-icon name=\"heart-outline\"></ion-icon>\n          </span>\n        </div>\n      </div>\n      <div>\n        <p class=\"title\">{{shop.title}}</p>\n        <p class=\"date\">{{shop.date}}</p>\n      </div>\n    </section>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/shop/shop-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/shop/shop-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ShopPageRoutingModule */

    /***/
    function srcAppPagesShopShopRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPageRoutingModule", function () {
        return ShopPageRoutingModule;
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


      var _shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shop.page */
      "./src/app/pages/shop/shop.page.ts");
      /* harmony import */


      var _shop_page_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shop.page.resolver */
      "./src/app/pages/shop/shop.page.resolver.ts");

      var routes = [{
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_3__["ShopPage"],
        resolve: {
          shops: _shop_page_resolver__WEBPACK_IMPORTED_MODULE_4__["ShopPageResolver"]
        }
      }];

      var ShopPageRoutingModule = function ShopPageRoutingModule() {
        _classCallCheck(this, ShopPageRoutingModule);
      };

      ShopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShopPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/shop/shop.module.ts ***!
      \*******************************************/

    /*! exports provided: ShopPageModule */

    /***/
    function srcAppPagesShopShopModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPageModule", function () {
        return ShopPageModule;
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


      var _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shop-routing.module */
      "./src/app/pages/shop/shop-routing.module.ts");
      /* harmony import */


      var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shop.page */
      "./src/app/pages/shop/shop.page.ts");
      /* harmony import */


      var _shop_page_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shop.page.resolver */
      "./src/app/pages/shop/shop.page.resolver.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var ShopPageModule = function ShopPageModule() {
        _classCallCheck(this, ShopPageModule);
      };

      ShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopPageRoutingModule"]],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]],
        providers: [_shop_page_resolver__WEBPACK_IMPORTED_MODULE_7__["ShopPageResolver"]]
      })], ShopPageModule);
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.page.resolver.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/shop/shop.page.resolver.ts ***!
      \**************************************************/

    /*! exports provided: ShopPageResolver */

    /***/
    function srcAppPagesShopShopPageResolverTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPageResolver", function () {
        return ShopPageResolver;
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


      var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/firebase.service */
      "./src/app/services/firebase.service.ts");

      var ShopPageResolver = /*#__PURE__*/function () {
        function ShopPageResolver(firebaseService) {
          _classCallCheck(this, ShopPageResolver);

          this.firebaseService = firebaseService;
        }

        _createClass(ShopPageResolver, [{
          key: "resolve",
          value: function resolve() {
            return this.firebaseService.getShops();
          }
        }]);

        return ShopPageResolver;
      }();

      ShopPageResolver.ctorParameters = function () {
        return [{
          type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
        }];
      };

      ShopPageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ShopPageResolver);
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/shop/shop.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesShopShopPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-header {\n  margin-bottom: 1rem;\n}\napp-header .title {\n  padding-bottom: 3.5rem;\n}\napp-header .title h1 {\n  font-family: \"Montserrat Bold\";\n  color: #FFFFFF;\n}\nsection {\n  width: 85%;\n}\n.photo {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0 30px 30px 0;\n  position: relative;\n  height: 14rem;\n}\n.infos {\n  position: absolute;\n  bottom: 1rem;\n  left: 2rem;\n  color: white;\n  font-size: 12pt;\n  font-family: \"Montserrat Bold\";\n}\nion-icon {\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n}\n.title {\n  text-align: center;\n  font-family: \"Montserrat Bold\";\n  margin-bottom: 0;\n  font-size: 16pt;\n}\n.date {\n  text-align: center;\n  margin-top: 1px;\n  font-size: 12pt;\n  opacity: 56%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7QUFDSTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQUNOO0FBSUE7RUFDRSxVQUFBO0FBREY7QUFJQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQURGO0FBSUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3Avc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAudGl0bGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG5cbiAgICBoMSB7XG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEJvbGRcIjtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLnBob3RvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE0cmVtO1xufVxuXG4uaW5mb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQm9sZFwiO1xufVxuXG5pb24taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBCb2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbn1cblxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBvcGFjaXR5OiA1NiU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/shop/shop.page.ts ***!
      \*****************************************/

    /*! exports provided: ShopPage */

    /***/
    function srcAppPagesShopShopPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPage", function () {
        return ShopPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/firebase.service */
      "./src/app/services/firebase.service.ts");

      var ShopPage = /*#__PURE__*/function () {
        function ShopPage(loadingCtrl, router, firebaseService, route) {
          _classCallCheck(this, ShopPage);

          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.firebaseService = firebaseService;
          this.route = route;
          this.shops = [];
        }

        _createClass(ShopPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.route && this.route.data) {
              this.getShops();
            }
          }
        }, {
          key: "getShops",
          value: function getShops() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context.sent;
                      this.presentLoading(loading);
                      this.route.data.subscribe(function (routeData) {
                        routeData.shops.subscribe(function (shops) {
                          _this.shops = [];
                          shops.forEach(function (element) {
                            var shop = element.payload.doc.data();

                            _this.shops.push(shop);
                          });
                          loading.dismiss();
                        });
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(loading) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return loading.present();

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "createShop",
          value: function createShop() {
            var data = {
              title: 'Accessoires & Equipements',
              imageUrl: './assets/images/acces_equip.png',
              date: '08 nov'
            };
            this.firebaseService.createShop(data).then(function (res) {//this.router.navigate(["/home"]);
            });
          }
        }]);

        return ShopPage;
      }();

      ShopPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./shop.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./shop.page.scss */
        "./src/app/pages/shop/shop.page.scss"))["default"]]
      })], ShopPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shop-shop-module-es5.js.map