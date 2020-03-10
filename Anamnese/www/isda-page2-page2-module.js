(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isda-page2-page2-module"],{

/***/ "./src/app/novo/isda/page2/page2.module.ts":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page2/page2.module.ts ***!
  \*************************************************/
/*! exports provided: Page2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page2.page */ "./src/app/novo/isda/page2/page2.page.ts");







var routes = [
    {
        path: '',
        component: _page2_page__WEBPACK_IMPORTED_MODULE_6__["Page2Page"]
    }
];
var Page2PageModule = /** @class */ (function () {
    function Page2PageModule() {
    }
    Page2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page2_page__WEBPACK_IMPORTED_MODULE_6__["Page2Page"]]
        })
    ], Page2PageModule);
    return Page2PageModule;
}());



/***/ }),

/***/ "./src/app/novo/isda/page2/page2.page.html":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page2/page2.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n      \n    <!-- \n          ==============================================================\n                                  Card olhos \n          ==============================================================\n        -->\n    <ion-item-divider color=\"asubcard\" class=\"ion-padding\">\n      \n      <ion-title class=\"ion-text-center\">\n        Sintomas gerais\n      </ion-title>\n    </ion-item-divider>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Olhos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of olhos\">\n\n\n          <!--Campo dor ocular-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <!-- \n          ==============================================================\n                                Campo ouvidos\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Ouvidos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of ouvidos\">\n\n\n          <!--Campo dor ocular-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- \n          ==============================================================\n                                Campo Nariz\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Nariz e cavidades paranasais</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of narizCavidadesParanasais\">\n\n\n          <!--Campo Prurido-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- \n          ==============================================================\n                                Campo Cavidade bucal e anexos\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Cavidade bucal e anexos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of cavidadeBucalAnexos\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card><h5 class=\"ion-text-center\"><strong>ISDA Página 2</strong></h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/isda']\">Anterior</ion-button>\n        </ion-col>\n        <ion-col  size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/isda3']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/isda/page2/page2.page.scss":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page2/page2.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomTab {\n  margin-bottom: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pc2RhL3BhZ2UyL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlzZGFcXHBhZ2UyXFxwYWdlMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaXNkYS9wYWdlMi9wYWdlMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tVGFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/novo/isda/page2/page2.page.ts":
/*!***********************************************!*\
  !*** ./src/app/novo/isda/page2/page2.page.ts ***!
  \***********************************************/
/*! exports provided: Page2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Page", function() { return Page2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// Import das das bibliotecas para validação das entradas

// Importe da biblioteca para o alert

var Page2Page = /** @class */ (function () {
    function Page2Page(fBuilder, identService, alertController) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.alertController = alertController;
        this.olhos = [];
        this.ouvidos = [];
        this.narizCavidadesParanasais = [];
        this.cavidadeBucalAnexos = [];
        this.fGroup = this.fBuilder.group({
            // Falta fazer as validações com o validator
            ouvidos_dor: [''],
            ouvidos_otorreia: [''],
            ouvido_otoragia: [''],
            ouvidos_zumbidos: [''],
            ouvidos_tontura: [''],
            olhos_dor_ocular: [''],
            olhos_prurido: [''],
            olhos_queimacao: [''],
            olhos_olho_seco: [''],
            olhos_perda_visao: [''],
            olhos_fotofobia: [''],
            olhos_vermelhidao: [''],
            faringe_dor_garganta: [''],
            faringe_disfagia: [''],
            faringe_tosse: [''],
            faringe_halitose: [''],
            faringe_pigarro: [''],
            faringe_ronco: [''],
            cavidade_bucal_silose: [''],
            cavidade_bucal_halitose: [''],
            cavidade_bucal_dor: [''],
            cavidade_bucal_ulceracoes: [''],
            nariz_prurido: [''],
            nariz_dor: [''],
            nariz_espirros: [''],
            nariz_obstrucao_nasal: [''],
            nariz_corrimento_nasal: [''],
            nariz_epistaxe: [''],
            nariz_dispneia: [''],
            nariz_diminuicao_olfato: ['']
        });
        this.olhos = [
            {
                titulo: 'Dor ocular?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_dor_ocular'
            },
            {
                titulo: 'Prurido?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_prurido'
            },
            {
                titulo: 'Queimação ou Ardência?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_queimacao'
            },
            {
                titulo: 'Sensação de olho seco?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_olho_seco'
            },
            {
                titulo: 'Diminuição ou perda da visão?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_perda_visao'
            },
            {
                titulo: 'Fotofobia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_fotofobia'
            },
            {
                titulo: 'Vermelhidão?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'olhos_vermelhidao'
            }
        ],
            this.ouvidos = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'ouvidos_dor'
                },
                {
                    titulo: 'Otorreia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'ouvidos_otorreia'
                },
                {
                    titulo: 'Otorragia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'ouvido_otoragia'
                },
                {
                    titulo: 'Zumbidos?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'ouvidos_zumbidos'
                },
                {
                    titulo: 'Vertigem e tontura?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'ouvidos_tontura'
                }
            ],
            this.narizCavidadesParanasais = [
                {
                    titulo: 'Prurido?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_prurido'
                },
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_dor'
                },
                {
                    titulo: 'Espirros?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_espirros'
                },
                {
                    titulo: 'Obstrução Nasal?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_obstrucao_nasal'
                },
                {
                    titulo: 'Corrimento Nasal?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_corrimento_nasal'
                },
                {
                    titulo: 'Epistaxe?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_epistaxe'
                },
                {
                    titulo: 'Dispneia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_dispneia'
                },
                {
                    titulo: 'Diminuição do olfato?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'nariz_diminuicao_olfato'
                }
            ],
            this.cavidadeBucalAnexos = [
                {
                    sub: 'Cavidade Bucal e Anexos',
                    titulo: 'Sialose?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'cavidade_bucal_silose'
                },
                {
                    sub: 'Cavidade Bucal e Anexos',
                    titulo: 'Halitose?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'cavidade_bucal_halitose'
                },
                {
                    sub: 'Cavidade Bucal e Anexos',
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'cavidade_bucal_dor'
                },
                {
                    titulo: 'Ulcerações ou sangramento?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'cavidade_bucal_ulceracoes'
                },
                {
                    titulo: 'Dor de garganta?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'faringe_dor_garganta'
                },
                {
                    titulo: 'Disfagia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'faringe_disfagia'
                },
                {
                    titulo: 'Tosse?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'faringe_tosse'
                },
                {
                    titulo: 'Faringe halitose?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'faringe_halitose'
                },
                {
                    titulo: 'Pigarro?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'faringe_pigarro'
                },
                {
                    titulo: 'Ronco?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'faringe_ronco'
                }
            ];
    }
    Page2Page.prototype.ngOnInit = function () {
    };
    Page2Page.prototype.ionViewWillLeave = function () {
        // evia para o big json
        this.identService.allObject.isda.sintomas_gerais = Object.assign(this.identService.allObject.isda.sintomas_gerais, this.fGroup.value);
        // visualizar resultadonos no console
        console.log(this.identService.allObject.isda.sintomas_gerais);
    };
    Page2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.page.html */ "./src/app/novo/isda/page2/page2.page.html"),
            styles: [__webpack_require__(/*! ./page2.page.scss */ "./src/app/novo/isda/page2/page2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], Page2Page);
    return Page2Page;
}());



/***/ })

}]);
//# sourceMappingURL=isda-page2-page2-module.js.map