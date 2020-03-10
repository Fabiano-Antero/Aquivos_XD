(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isda-page6-page6-module"],{

/***/ "./src/app/novo/isda/page6/page6.module.ts":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page6/page6.module.ts ***!
  \*************************************************/
/*! exports provided: Page6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page6PageModule", function() { return Page6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page6.page */ "./src/app/novo/isda/page6/page6.page.ts");







var routes = [
    {
        path: '',
        component: _page6_page__WEBPACK_IMPORTED_MODULE_6__["Page6Page"]
    }
];
var Page6PageModule = /** @class */ (function () {
    function Page6PageModule() {
    }
    Page6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page6_page__WEBPACK_IMPORTED_MODULE_6__["Page6Page"]]
        })
    ], Page6PageModule);
    return Page6PageModule;
}());



/***/ }),

/***/ "./src/app/novo/isda/page6/page6.page.html":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page6/page6.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n    <ion-item-divider color=\"asubcard\" class=\"ion-padding\">\n      <ion-title class=\"ion-text-center\">\n        Sistema Geniturinário\n      </ion-title>\n    </ion-item-divider>\n\n    <!-- \n      ==============================================================\n      Campo Rins e vias urinárias\n      ==============================================================\n    -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Rins e vias urinárias</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of rins\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!--\n            ==============================================================\n            Campo Orgãos Genitais Masculinos\n            só deverá ser exibido caso o paciente\n                                  seja do sexo masculino\n            ==============================================================\n          -->\n\n    <ion-card color=\"light\" *ngIf=\"identService.allObject.paciente.sexo == 'masculino'\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Orgãos Genitais Masculinos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of orgaosgenitaisMasculino\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <!-- \n        ==============================================================\n                     Campos Orgãos Genitais Femininos\n                     Só deverá ser exibido se o pacientre seja do sexo\n                     feminino.\n            ==============================================================\n          -->\n\n    <ion-card color=\"light\" *ngIf=\"identService.allObject.paciente.sexo == 'feminino'\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Orgãos Genitais Femininos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of orgaosgenitaisFeminino\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <h5 class=\"ion-text-center\"><strong>ISDA Página 6</strong></h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/isda5']\">Anterior</ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/isda7']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/isda/page6/page6.page.scss":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page6/page6.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomTab {\n  margin-bottom: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pc2RhL3BhZ2U2L0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlzZGFcXHBhZ2U2XFxwYWdlNi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaXNkYS9wYWdlNi9wYWdlNi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tVGFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/novo/isda/page6/page6.page.ts":
/*!***********************************************!*\
  !*** ./src/app/novo/isda/page6/page6.page.ts ***!
  \***********************************************/
/*! exports provided: Page6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page6Page", function() { return Page6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// Import das das bibliotecas para validação das entradas

// Importe da biblioteca para o alert

var Page6Page = /** @class */ (function () {
    function Page6Page(fBuilder, identService, alertController) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.alertController = alertController;
        this.rins = [];
        this.orgaosgenitaisMasculino = [];
        this.orgaosgenitaisFeminino = [];
        // tslint:disable-next-line: variable-name
        this.sistema_geniturinario = {
            rins_dor: '',
            rins_alt_miccionais: '',
            rins_alt_cor_urina: '',
            rins_alt_cheiro_urina: '',
            rins_alt_volume_urinario: '',
            rins_edema: '',
            rins_febre: '',
            orgaosgenitais_dor: '',
            orgaosgenitais_masculino_corrimento: '',
            orgaosgenitais_masculino_lesoes: '',
            orgaosgenitais_masculino_nodulos: '',
            orgaosgenitais_masculino_priapismo: '',
            orgaosgenitais_masculino_hemospernia: '',
            orgaosgenitais_masculino_disfuncoes: '',
            orgaosgenitais_feminino_corrimento: '',
            orgaosgenitais_feminino_hemorragia: '',
            orgaosgenitais_feminino_prurido: ''
        };
        this.fGroup = this.fBuilder.group({
            // Falta fazer as validações com o validator
            rins_dor: [''],
            rins_alt_miccionais: [''],
            rins_alt_cor_urina: [''],
            rins_alt_cheiro_urina: [''],
            rins_alt_volume_urinario: [''],
            rins_edema: [''],
            rins_febre: [''],
            orgaosgenitais_dor: [''],
            orgaosgenitais_masculino_corrimento: [''],
            orgaosgenitais_masculino_lesoes: [''],
            orgaosgenitais_masculino_nodulos: [''],
            orgaosgenitais_masculino_priapismo: [''],
            orgaosgenitais_masculino_hemospernia: [''],
            orgaosgenitais_masculino_disfuncoes: [''],
            orgaosgenitais_feminino_corrimento: [''],
            orgaosgenitais_feminino_hemorragia: [''],
            orgaosgenitais_feminino_prurido: ['']
        });
        this.rins = [
            {
                titulo: 'Dor?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_dor'
            },
            {
                titulo: 'Alterações miccionais?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_alt_miccionais'
            },
            {
                titulo: 'Alterações da cor da urina?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_alt_cor_urina'
            },
            {
                titulo: 'Alterações do cheiro da urina?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_alt_cheiro_urina'
            },
            {
                titulo: 'Alterações de volumes urinário?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_alt_volume_urinario'
            },
            {
                titulo: 'Edema?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_edema'
            },
            {
                titulo: 'Febre?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'rins_febre'
            }
        ],
            this.orgaosgenitaisMasculino = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_dor'
                },
                {
                    titulo: 'Corrimento?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_masculino_corrimento'
                },
                {
                    titulo: 'Lesões?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_masculino_lesoes'
                },
                {
                    titulo: 'Nódulos?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_masculino_nodulos'
                },
                {
                    titulo: 'Priapismo?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_masculino_priapismo'
                },
                {
                    titulo: 'Hemospernia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_masculino_hemospernia'
                },
                {
                    titulo: 'Disfunções?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_masculino_disfuncoes'
                }
            ],
            this.orgaosgenitaisFeminino = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_dor'
                },
                {
                    titulo: 'Corrimento?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_feminino_corrimento'
                },
                {
                    titulo: 'Hemorragia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_feminino_hemorragia'
                },
                {
                    titulo: 'Prurido?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'orgaosgenitais_feminino_prurido'
                }
            ];
    }
    Page6Page.prototype.ngOnInit = function () {
    };
    Page6Page.prototype.ionViewWillLeave = function () {
        // evia para o big json
        this.identService.allObject.isda.sistema_geniturinario = this.fGroup.value;
        // visualizar resultadonos no console
        console.log(this.identService.allObject.isda.sistema_geniturinario);
    };
    Page6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page6',
            template: __webpack_require__(/*! ./page6.page.html */ "./src/app/novo/isda/page6/page6.page.html"),
            styles: [__webpack_require__(/*! ./page6.page.scss */ "./src/app/novo/isda/page6/page6.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], Page6Page);
    return Page6Page;
}());



/***/ })

}]);
//# sourceMappingURL=isda-page6-page6-module.js.map