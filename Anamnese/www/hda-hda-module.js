(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hda-hda-module"],{

/***/ "./src/app/hda/hda.module.ts":
/*!***********************************!*\
  !*** ./src/app/hda/hda.module.ts ***!
  \***********************************/
/*! exports provided: HdaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdaPageModule", function() { return HdaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hda.page */ "./src/app/hda/hda.page.ts");







var routes = [
    {
        path: '',
        component: _hda_page__WEBPACK_IMPORTED_MODULE_6__["HdaPage"]
    }
];
var HdaPageModule = /** @class */ (function () {
    function HdaPageModule() {
    }
    HdaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hda_page__WEBPACK_IMPORTED_MODULE_6__["HdaPage"]]
        })
    ], HdaPageModule);
    return HdaPageModule;
}());



/***/ }),

/***/ "./src/app/hda/hda.page.html":
/*!***********************************!*\
  !*** ./src/app/hda/hda.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>hda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/hda/hda.page.scss":
/*!***********************************!*\
  !*** ./src/app/hda/hda.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hkYS9oZGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/hda/hda.page.ts":
/*!*********************************!*\
  !*** ./src/app/hda/hda.page.ts ***!
  \*********************************/
/*! exports provided: HdaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdaPage", function() { return HdaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HdaPage = /** @class */ (function () {
    function HdaPage() {
    }
    HdaPage.prototype.ngOnInit = function () {
    };
    HdaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hda',
            template: __webpack_require__(/*! ./hda.page.html */ "./src/app/hda/hda.page.html"),
            styles: [__webpack_require__(/*! ./hda.page.scss */ "./src/app/hda/hda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HdaPage);
    return HdaPage;
}());



/***/ })

}]);
//# sourceMappingURL=hda-hda-module.js.map