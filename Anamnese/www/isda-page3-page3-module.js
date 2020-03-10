(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isda-page3-page3-module"],{

/***/ "./src/app/novo/isda/page3/page3.module.ts":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page3/page3.module.ts ***!
  \*************************************************/
/*! exports provided: Page3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3PageModule", function() { return Page3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page3.page */ "./src/app/novo/isda/page3/page3.page.ts");







var routes = [
    {
        path: '',
        component: _page3_page__WEBPACK_IMPORTED_MODULE_6__["Page3Page"]
    }
];
var Page3PageModule = /** @class */ (function () {
    function Page3PageModule() {
    }
    Page3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page3_page__WEBPACK_IMPORTED_MODULE_6__["Page3Page"]]
        })
    ], Page3PageModule);
    return Page3PageModule;
}());



/***/ }),

/***/ "./src/app/novo/isda/page3/page3.page.html":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page3/page3.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n    <ion-item-divider color=\"asubcard\" class=\"ion-padding\">\n      <ion-title class=\"ion-text-center\">\n        Tórax\n      </ion-title>\n    </ion-item-divider>\n\n    <!-- \n    ==============================================================\n                                Campo parede torácica\n                                ==============================================================\n                              -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Parede torácica</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of toraxParedeToraxica\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- \n      ==============================================================\n                                Campo Mamas\n      \n                                OBS: Verificar se o campo Mamas deve ser ativo para ambos \n            generos.\n            ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Mamas</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of mamas\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <!-- \n      ==============================================================\n      Campos Traqueia\n      ==============================================================\n    -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Traqueia</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of traqueia\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <h5 class=\"ion-text-center\"><strong>ISDA Página 3</strong></h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\" [routerLink]=\"['/novo/isda2']\">Anterior</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\" [routerLink]=\"['/novo/isda4']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/isda/page3/page3.page.scss":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page3/page3.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomTab {\n  margin-bottom: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pc2RhL3BhZ2UzL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlzZGFcXHBhZ2UzXFxwYWdlMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaXNkYS9wYWdlMy9wYWdlMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tVGFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/novo/isda/page3/page3.page.ts":
/*!***********************************************!*\
  !*** ./src/app/novo/isda/page3/page3.page.ts ***!
  \***********************************************/
/*! exports provided: Page3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3Page", function() { return Page3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 // Import das das bibliotecas para validação das entradas

// Importe da biblioteca para o alert

var Page3Page = /** @class */ (function () {
    function Page3Page(fBuilder, identService, alertController) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.alertController = alertController;
        this.toraxParedeToraxica = [];
        this.mamas = [];
        this.traqueia = [];
        this.fGroup = this.fBuilder.group({
            // Falta fazer as validações com o validator
            traqueia_dor: [''],
            traqueia_tosse: [''],
            traqueia_expectoracao: [''],
            traqueia_hemoptise: [''],
            traqueia_vomica: [''],
            traqueia_chieira: [''],
            traqueia_estridor: [''],
            traqueia_triagem: [''],
            parede_toraxica_dor: [''],
            parede_toraxica_dispineia: [''],
            mamas_dor: [''],
            mamas_nodulo: [''],
            mamas_secrecao: [''],
        });
        this.toraxParedeToraxica = [
            {
                titulo: 'Dor?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'parede_toraxica_dor'
            },
            {
                titulo: 'Dispneia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'parede_toraxica_dispineia'
            }
        ],
            this.mamas = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'mamas_dor'
                },
                {
                    titulo: 'Nódulos?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'mamas_nodulo'
                },
                {
                    titulo: 'Secreção mamilar?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'mamas_secrecao'
                }
            ],
            this.traqueia = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_dor'
                },
                {
                    titulo: 'Tosse?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_tosse'
                },
                {
                    titulo: 'Expectoração?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_expectoracao'
                },
                {
                    titulo: 'Hemoptise?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_hemoptise'
                },
                {
                    titulo: 'Vômica?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_vomica'
                },
                {
                    titulo: 'Chieira?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_chieira'
                },
                {
                    titulo: 'Estridor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_estridor'
                },
                {
                    titulo: 'Triagem?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'traqueia_triagem'
                }
            ];
    }
    Page3Page.prototype.ngOnInit = function () {
    };
    Page3Page.prototype.ionViewWillLeave = function () {
        // evia para o big json
        this.identService.allObject.isda.torax = this.fGroup.value;
        // visualizar resultadonos no console
        console.log(this.identService.allObject.isda.torax);
    };
    Page3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page3',
            template: __webpack_require__(/*! ./page3.page.html */ "./src/app/novo/isda/page3/page3.page.html"),
            styles: [__webpack_require__(/*! ./page3.page.scss */ "./src/app/novo/isda/page3/page3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], Page3Page);
    return Page3Page;
}());



/***/ })

}]);
//# sourceMappingURL=isda-page3-page3-module.js.map