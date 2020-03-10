(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novo-novo-module"],{

/***/ "./src/app/novo/hda-moda/hda-moda.module.ts":
/*!**************************************************!*\
  !*** ./src/app/novo/hda-moda/hda-moda.module.ts ***!
  \**************************************************/
/*! exports provided: HdaModaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdaModaPageModule", function() { return HdaModaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hda_moda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hda-moda.page */ "./src/app/novo/hda-moda/hda-moda.page.ts");







var routes = [
    {
        path: '',
        component: _hda_moda_page__WEBPACK_IMPORTED_MODULE_6__["HdaModaPage"]
    }
];
var HdaModaPageModule = /** @class */ (function () {
    function HdaModaPageModule() {
    }
    HdaModaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hda_moda_page__WEBPACK_IMPORTED_MODULE_6__["HdaModaPage"]]
        })
    ], HdaModaPageModule);
    return HdaModaPageModule;
}());



/***/ }),

/***/ "./src/app/novo/novo-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/novo/novo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NovoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoRoutingModule", function() { return NovoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./novo.page */ "./src/app/novo/novo.page.ts");




var routes = [
    {
        path: 'novo',
        component: _novo_page__WEBPACK_IMPORTED_MODULE_3__["NovoPage"],
        children: [
            {
                path: 'aluno',
                children: [
                    {
                        path: '',
                        loadChildren: './aluno/aluno.module#AlunoPageModule'
                    }
                ]
            },
            {
                path: 'id',
                children: [
                    {
                        path: '',
                        loadChildren: './identificacao/identificacao.module#IdentificacaoPageModule'
                    }
                ]
            },
            {
                path: 'isda',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/isda.module#IsdaPageModule'
                    }
                ]
            },
            {
                path: 'isda2',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/page2/page2.module#Page2PageModule'
                    }
                ]
            },
            {
                path: 'isda3',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/page3/page3.module#Page3PageModule'
                    }
                ]
            },
            {
                path: 'isda4',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/page4/page4.module#Page4PageModule'
                    }
                ]
            },
            {
                path: 'isda5',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/page5/page5.module#Page5PageModule'
                    }
                ]
            },
            {
                path: 'isda6',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/page6/page6.module#Page6PageModule'
                    }
                ]
            },
            {
                path: 'isda7',
                children: [
                    {
                        path: '',
                        loadChildren: './isda/page7/page7.module#Page7PageModule'
                    }
                ]
            },
            {
                path: 'ats',
                children: [
                    {
                        path: '',
                        loadChildren: './antecedentes/antecedentes.module#AntecedentesPageModule'
                    }
                ]
            },
            {
                path: 'ec',
                children: [
                    {
                        path: '',
                        loadChildren: './exame-cardiovascular/exame-cardiovascular.module#ExameCardiovascularPageModule'
                    }
                ]
            },
            {
                path: 'eda',
                children: [
                    {
                        path: '',
                        loadChildren: './exame-do-abdome/exame-do-abdome.module#ExameDoAbdomePageModule'
                    }
                ]
            },
            {
                path: 'er',
                children: [
                    {
                        path: '',
                        loadChildren: './exame-respiratorio/exame-respiratorio.module#ExameRespiratorioPageModule'
                    }
                ]
            },
            {
                path: 'hps',
                children: [
                    {
                        path: '',
                        loadChildren: './habitos-de-vida/habitos-de-vida.module#HabitosDeVidaPageModule'
                    }
                ]
            },
            {
                path: 'ectoscopia',
                children: [
                    {
                        path: '',
                        loadChildren: './ectoscopia/ectoscopia.module#EctoscopiaPageModule'
                    }
                ]
            },
            {
                path: 'ect02',
                children: [
                    {
                        path: '',
                        loadChildren: './ectoscopia/ect02/ect02.module#Ect02PageModule'
                    }
                ]
            },
            {
                path: 'ect03',
                children: [
                    {
                        path: '',
                        loadChildren: './ectoscopia/ect03/ect03.module#Ect03PageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/novo/aluno',
                pathMatch: 'full'
            }
        ]
    }
];
var NovoRoutingModule = /** @class */ (function () {
    function NovoRoutingModule() {
    }
    NovoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NovoRoutingModule);
    return NovoRoutingModule;
}());



/***/ }),

/***/ "./src/app/novo/novo.module.ts":
/*!*************************************!*\
  !*** ./src/app/novo/novo.module.ts ***!
  \*************************************/
/*! exports provided: NovoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPageModule", function() { return NovoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _novo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./novo-routing.module */ "./src/app/novo/novo-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _novo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./novo.page */ "./src/app/novo/novo.page.ts");
/* harmony import */ var _hda_moda_hda_moda_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hda-moda/hda-moda.module */ "./src/app/novo/hda-moda/hda-moda.module.ts");








// O módulo modal

var routes = [
    {
        path: '',
        component: _novo_page__WEBPACK_IMPORTED_MODULE_7__["NovoPage"]
    }
];
var NovoPageModule = /** @class */ (function () {
    function NovoPageModule() {
    }
    NovoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_novo_page__WEBPACK_IMPORTED_MODULE_7__["NovoPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _novo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NovoRoutingModule"],
                _hda_moda_hda_moda_module__WEBPACK_IMPORTED_MODULE_8__["HdaModaPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], NovoPageModule);
    return NovoPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=novo-novo-module.js.map