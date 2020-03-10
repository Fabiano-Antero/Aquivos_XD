(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-menu-button></ion-menu-button>-->\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      {{ titulo.title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n<ion-grid >\n  <ion-row>\n      <ion-col size=\"12\" if='true' size-lg>\n\n          <ion-card color=\"light\" class=\"welcome-card\">\n            <ion-img [src]=\"home.url\"></ion-img>\n            <ion-card-header>\n              <ion-card-title class=\"title\">{{ home.welcome }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"ion-text-center\">\n              <p>{{ home.msg }}</p>\n            </ion-card-content>\n          </ion-card>\n   </ion-col>\n  </ion-row>\n<ion-row>\n      <ion-col size=\"12\" if='true' size-md>\n          <ion-card color=\"light\">\n            <ion-card-header>\n              <ion-card-title class=\"title\">{{ home.dv }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button expand=\"block\" color=\"danger\">\n                {{ home.init }}\n                <ion-icon slot=\"end\" name=\"play\"></ion-icon>\n              </ion-button>\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n       <ion-col size=\"12\" if='true' size-md>\n\n\n          <ion-card color=\"light\">\n            <ion-card-header>\n              <ion-card-title class=\"title\">{{ home.novo }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button expand=\"block\" [routerLink]=\"['/novo']\">\n                {{ home.criar }}\n                <ion-icon slot=\"end\" name=\"person-add\"></ion-icon>\n              </ion-button>\n            </ion-card-content>\n          </ion-card>\n     </ion-col>\n      <ion-col size=\"12\"  if='true' size-md>\n\n\n          <ion-card color=\"light\">\n            <ion-card-header>\n              <ion-card-title class=\"title\">{{ home.lista }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button expand=\"block\" color=\"success\" [routerLink]=\"['/listanamnese']\">\n                {{ home.ace }}\n                <ion-icon slot=\"end\" name=\"archive\"></ion-icon>\n              </ion-button>\n            </ion-card-content>\n        </ion-card>\n        </ion-col>\n     </ion-row>\n    </ion-grid>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Logo temporário anamnese*/\nion-img {\n  width: 30%;\n  height: auto;\n  overflow: hidden;\n  margin: 10% 0% 0% 35%; }\n.title {\n  font-size: 200%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGZhYmlhXFxEb2N1bWVudHNcXGFwcDIwMTlfMV9hbmFtbmVzZV9kaWdpdGFsL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsMkJBQUE7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qTG9nbyB0ZW1wb3LDoXJpbyBhbmFtbmVzZSovXG5pb24taW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwJSAwJSAwJSAzNSU7IH1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiIsIi8qTG9nbyB0ZW1wb3LDoXJpbyBhbmFtbmVzZSovXG5pb24taW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwJSAwJSAwJSAzNSU7XG59XG5cbi50aXRsZXtcbiAgZm9udC1zaXplOiAyMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.titulo = {
            title: 'Anamnese Digital'
        };
        this.home = {
            url: '/assets/icon/img/clipboard1.png',
            welcome: 'Bem-vindo(a)!',
            // tslint:disable-next-line: max-line-length
            msg: 'Com o Anamnese Digital, tudo fica mais rápido! O aplicativo trás a praticidade de agilizar seus diagnósticos com maior rápidez em qualquer lugar mesmo sem conexão com a internet.',
            dv: 'Duvida?',
            init: 'Iniciar tutorial',
            novo: 'Novo Paciente',
            criar: 'Adicionar',
            lista: 'Lista de Anamnese',
            ace: 'Acessar'
        };
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map