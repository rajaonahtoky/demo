(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item (click)=\"close('')\" detail=\"false\" button>\n    <ion-label>Mon logement</ion-label>\n  </ion-item>\n  <ion-item (click)=\"close('/dashboard/profile')\" detail=\"false\" button>\n    <ion-label>Mon profil</ion-label>\n  </ion-item>\n  <ion-item (click)=\"close('')\" detail=\"false\" button>\n    <ion-label>Mes préférences</ion-label>\n  </ion-item>\n  <ion-item (click)=\"close('')\" detail=\"false\" button>\n    <ion-label>Menu Equipe</ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane contentId=\"main-content\">\n  <ion-menu contentId=\"main-content\" type=\"push\">\n    <ion-content class=\"content-menu\">\n      <section class=\"header-menu\">\n        <div class=\"title-menu\">\n          <h1>\n            Votre<br/> \n            Application <br/>\n            Piscinadom\n          </h1>\n        </div>\n      </section>\n      <section class=\"list-menu\">\n        <a href=\"/dashboard/entretien\">\n          <div class=\"menu-entretien\">\n            <h2>Votre entretien</h2>\n            <span>& contrats d’entretiens</span>\n          </div>\n        </a>\n\n        <a href=\"/dashboard/sav\">\n          <div class=\"menu-entretien menu-demande\">\n            <h2>Vos demandes</h2>\n            <span>Interventions & SAV</span>\n          </div>\n        </a>\n\n        <a href=\"/dashboard/shop\">\n          <div class=\"menu-entretien menu-shop\">\n            <h2>Le Shop</h2>\n            <span>128 topics - 4k articles</span>\n          </div>\n        </a>\n\n        <a href=\"/dashboard/profile\">\n          <div class=\"menu-entretien menu-profil\">\n            <div class=\"img-profil\">\n              <img src=\"assets/images/profile-photo-square.jpg\" alt=\"\">\n            </div>\n            <h2>Votre profil</h2>\n            <span>vos informations</span>\n          </div>\n        </a>\n      </section>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\">\n    <ion-alert-controller></ion-alert-controller>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n          <ion-label>Accueil</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"entretien\">\n          <ion-icon name=\"document-text-outline\"></ion-icon>\n          <ion-label>Entretien</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"sav\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n          <ion-label>SAV</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"shop\">\n          <ion-icon name=\"card-outline\"></ion-icon>\n          <ion-label>Le Shop</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"presentPlus($event)\">\n          <ion-icon name=\"menu-outline\"></ion-icon>\n          <ion-label>Plus</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-router-outlet>\n</ion-split-pane>");

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let PopoverComponent = class PopoverComponent {
    constructor(popoverCtrl, router) {
        this.popoverCtrl = popoverCtrl;
        this.router = router;
    }
    ngOnInit() { }
    close(url) {
        if (url !== '')
            this.router.navigate([url]);
        this.popoverCtrl.dismiss();
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/components/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _dashboard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.guard */ "./src/app/pages/dashboard/dashboard.guard.ts");





const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"],
        canActivate: [_dashboard_guard__WEBPACK_IMPORTED_MODULE_4__["DashboardGuard"]],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'entretien',
                loadChildren: () => Promise.all(/*! import() | entretien-entretien-module */[__webpack_require__.e("default~entretien-entretien-module~sav-sav-module~shop-shop-module"), __webpack_require__.e("entretien-entretien-module")]).then(__webpack_require__.bind(null, /*! ../entretien/entretien.module */ "./src/app/pages/entretien/entretien.module.ts")).then(m => m.EntretienPageModule)
            },
            {
                path: 'sav',
                loadChildren: () => Promise.all(/*! import() | sav-sav-module */[__webpack_require__.e("default~entretien-entretien-module~sav-sav-module~shop-shop-module"), __webpack_require__.e("sav-sav-module")]).then(__webpack_require__.bind(null, /*! ../sav/sav.module */ "./src/app/pages/sav/sav.module.ts")).then(m => m.SavPageModule)
            },
            {
                path: 'shop',
                loadChildren: () => Promise.all(/*! import() | shop-shop-module */[__webpack_require__.e("default~entretien-entretien-module~sav-sav-module~shop-shop-module"), __webpack_require__.e("shop-shop-module")]).then(__webpack_require__.bind(null, /*! ../shop/shop.module */ "./src/app/pages/shop/shop.module.ts")).then(m => m.ShopPageModule)
            }
        ]
    },
    {
        path: 'profile',
        canActivate: [_dashboard_guard__WEBPACK_IMPORTED_MODULE_4__["DashboardGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
    {
        path: 'admin',
        // canActivate: [DashboardGuard],
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ../admin/admin.module */ "./src/app/pages/admin/admin.module.ts")).then(m => m.AdminPageModule)
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.guard.ts ***!
  \****************************************************/
/*! exports provided: DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return DashboardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ "./src/app/services/firebase-auth.service.ts");




let DashboardGuard = class DashboardGuard {
    constructor(firebaseAuthService, router) {
        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.firebaseAuthService.getLoggedInUser() != null) {
            return true;
        }
        else {
            this.router.navigate(['/login/intro']);
            return false;
        }
    }
};
DashboardGuard.ctorParameters = () => [
    { type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardGuard);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --color-selected: #DB4C00;\n}\n\n.header-menu {\n  background: url(\"/assets/images/bg-head.png\") no-repeat center center/cover;\n  padding: 10px 0 50px 145px;\n  border-bottom-left-radius: 70px;\n}\n\n.title-menu h1 {\n  margin: 0;\n  font-size: 24px;\n  color: #fff;\n  font-weight: 400;\n}\n\n.content-menu {\n  --background: url(\"/assets/images/bg.png\") no-repeat center center;\n}\n\n.list-menu {\n  padding-left: 62px;\n}\n\n.list-menu a {\n  text-decoration: none;\n}\n\n.menu-entretien {\n  background: #4EBDEF;\n  padding: 28px 20px 30px 35px;\n  border-bottom-left-radius: 50px;\n  position: relative;\n  z-index: 4;\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.menu-entretien h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #fff;\n}\n\n.menu-entretien span {\n  font-size: 14px;\n  color: #fff;\n  opacity: 0.72;\n}\n\n.menu-demande {\n  background: #455D9D;\n  position: relative;\n  z-index: 3;\n  margin-top: -43px;\n  padding: 65px 20px 30px 35px;\n}\n\n.menu-shop {\n  background: #132641;\n  position: relative;\n  z-index: 2;\n  margin-top: -43px;\n  padding: 65px 20px 30px 35px;\n}\n\n.menu-profil {\n  background: #FFC603;\n  position: relative;\n  z-index: 1;\n  margin-top: -43px;\n  padding: 65px 20px 30px 35px;\n}\n\n.img-profil {\n  margin-left: 27px;\n}\n\n.img-profil img {\n  width: 56px;\n  height: 56px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkVBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0Usa0VBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEU7RUFDRSxxQkFBQTtBQUtKOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQVNGOztBQVBBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBVUY7O0FBUkE7RUFDRSxpQkFBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFZRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjREI0QzAwO1xufVxuLmhlYWRlci1tZW51e1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy1oZWFkLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBwYWRkaW5nOiAxMHB4IDAgNTBweCAxNDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbn1cbi50aXRsZS1tZW51IGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRlbnQtbWVudXtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG59XG4ubGlzdC1tZW51IHtcbiAgcGFkZGluZy1sZWZ0OiA2MnB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuLm1lbnUtZW50cmV0aWVuIHtcbiAgYmFja2dyb3VuZDogIzRFQkRFRjtcbiAgcGFkZGluZzogMjhweCAyMHB4IDMwcHggMzVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWVudS1lbnRyZXRpZW4gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1lbnUtZW50cmV0aWVuIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjcyO1xufVxuLm1lbnUtZGVtYW5kZXtcbiAgYmFja2dyb3VuZDogIzQ1NUQ5RDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBtYXJnaW4tdG9wOiAtNDNweDtcbiAgcGFkZGluZzogNjVweCAyMHB4IDMwcHggMzVweDtcbn1cbi5tZW51LXNob3B7XG4gIGJhY2tncm91bmQ6ICMxMzI2NDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLXRvcDogLTQzcHg7XG4gIHBhZGRpbmc6IDY1cHggMjBweCAzMHB4IDM1cHg7XG59XG4ubWVudS1wcm9maWx7XG4gIGJhY2tncm91bmQ6ICNGRkM2MDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogLTQzcHg7XG4gIHBhZGRpbmc6IDY1cHggMjBweCAzMHB4IDM1cHg7XG59XG4uaW1nLXByb2ZpbCB7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxuLmltZy1wcm9maWwgaW1nIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");




let DashboardPage = class DashboardPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() {
    }
    presentPlus(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.popoverCtrl.create({
                component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"],
                event
            });
            yield alert.present();
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map