(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isda-page7-page7-module"],{

/***/ "./src/app/novo/isda/page7/page7.module.ts":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page7/page7.module.ts ***!
  \*************************************************/
/*! exports provided: Page7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page7PageModule", function() { return Page7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page7.page */ "./src/app/novo/isda/page7/page7.page.ts");







var routes = [
    {
        path: '',
        component: _page7_page__WEBPACK_IMPORTED_MODULE_6__["Page7Page"]
    }
];
var Page7PageModule = /** @class */ (function () {
    function Page7PageModule() {
    }
    Page7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page7_page__WEBPACK_IMPORTED_MODULE_6__["Page7Page"]]
        })
    ], Page7PageModule);
    return Page7PageModule;
}());



/***/ }),

/***/ "./src/app/novo/isda/page7/page7.page.html":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page7/page7.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroupSh\">\n\n    <!-- \n          ==============================================================\n          Campo Sistema Hemolinfopético\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Sistema Hemolinfopético</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of sistemaHemolinfopetico\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </form>\n\n  <!-- \n      ==============================================================\n                                Campo Coluna vertebral, ossos, articulações e extremidades\n                                ==============================================================\n        -->\n  <form [formGroup]=\"fGroupCv\">\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Coluna vertebral | Ossos | Articulações e Extremidades</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of colunaossosArticulacoesExtremidades\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </form>\n\n\n  <!-- \n          ==============================================================\n          Campos Músculos\n          ==============================================================\n        -->\n <form [formGroup]=\"fGroupM\">\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Músculos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of sistemaMuscular\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n</form>\n\n\n  <!-- \n          ==============================================================\n          Campos Sistema Nervoso\n          ==============================================================\n        -->\n<form [formGroup]=\"fGroupN\" class=\"bottomTab\">\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Sistema Nervoso</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of sistemaNervoso\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label>Outros:</ion-label>\n                <ion-input type=\"text\" placeholder=\"Descreva aqui!\" formControlName=\"outros\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <h5 class=\"ion-text-center\"><strong>ISDA última página</strong></h5>\n\n</form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/isda/page7/page7.page.scss":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page7/page7.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomTab {\n  margin-bottom: 21%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pc2RhL3BhZ2U3L0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlzZGFcXHBhZ2U3XFxwYWdlNy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaXNkYS9wYWdlNy9wYWdlNy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tVGFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDIxJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/novo/isda/page7/page7.page.ts":
/*!***********************************************!*\
  !*** ./src/app/novo/isda/page7/page7.page.ts ***!
  \***********************************************/
/*! exports provided: Page7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page7Page", function() { return Page7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// Import das das bibliotecas para validação das entradas

// Importe da biblioteca para o alert

var Page7Page = /** @class */ (function () {
    function Page7Page(fBuilder, identService, alertController) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.alertController = alertController;
        this.sistemaHemolinfopetico = [];
        this.colunaossosArticulacoesExtremidades = [];
        this.sistemaMuscular = [];
        this.sistemaNervoso = [];
        this.fGroupSh = this.fBuilder.group({
            // Falta fazer as validações com o validator
            astenia: [''],
            adenomegalia: [''],
            hepatomegalia: [''],
            esplenomegalia: [''],
            hemorragia: ['']
        });
        this.fGroupCv = this.fBuilder.group({
            // Coluna vertebral
            dor: [''],
            rigidez: [''],
            sinais_inflamatorios: [''],
            crepitacao_articular: [''],
            manifestacao_sistemica: ['']
        });
        this.fGroupM = this.fBuilder.group({
            // sistema muscular
            atrofia_muscular: [''],
            dificuldade_andar: [''],
            fraqueza_muscular: [''],
            dor: [''],
            caibras: [''],
            espasmos_musculares: ['']
        });
        this.fGroupN = this.fBuilder.group({
            // sistema nervoso
            disturbios_consciencia: [''],
            cefaleia: [''],
            tontura_vertigem: [''],
            ausencias: [''],
            convusoes: [''],
            automatismos: [''],
            amnesia: [''],
            disturbios_visuais: [''],
            disturbios_auditivos: [''],
            disturbios_mancha: [''],
            disturbios_motricidade: [''],
            disturbios_esfincterianos: [''],
            disturbios_sono: [''],
            disturbios_funcoes: [''],
            outros: ['']
        });
        this.sistemaHemolinfopetico = [
            {
                titulo: 'Astenia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'astenia'
            },
            {
                titulo: 'Adenomegalia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'adenomegalia'
            },
            {
                titulo: 'Hepatomegalia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'hepatomegalia'
            },
            {
                titulo: 'Esplenomegalia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'esplenomegalia'
            },
            {
                titulo: 'Hemorragia?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'hemorragia'
            }
        ],
            this.colunaossosArticulacoesExtremidades = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'dor'
                },
                {
                    titulo: 'Rigidez pós-repouso?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'rigidez'
                },
                {
                    titulo: 'Sinais inflamatórios?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'sinais_inflamatorios'
                },
                {
                    titulo: 'Crepitação articular?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'crepitacao_articular'
                },
                {
                    titulo: 'Manifestação sistêmatica?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'manifestacao_sistemica'
                }
            ],
            this.sistemaMuscular = [
                {
                    titulo: 'Atrofia muscular?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'atrofia_muscular'
                },
                {
                    titulo: 'Dificuldade para andar ou subir escadas?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'dificuldade_andar'
                },
                {
                    titulo: 'Fraqueza muscular?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'fraqueza_muscular'
                },
                {
                    titulo: 'Cãibras?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'caibras'
                },
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'dor'
                },
                {
                    titulo: 'Espasmos musculares?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'espasmos_musculares'
                }
            ],
            this.sistemaNervoso = [
                {
                    titulo: 'Distúrbios da conciência?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_consciencia'
                },
                {
                    titulo: 'Cefaleia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'cefaleia'
                },
                {
                    titulo: 'Tontura e vertigem?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'tontura_vertigem'
                },
                {
                    titulo: 'Convulsões?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'convusoes'
                },
                {
                    titulo: 'Ausências?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'ausencias'
                },
                {
                    titulo: 'Automatismo?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'automatismos'
                },
                {
                    titulo: 'Amnésia',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'amnesia'
                },
                {
                    titulo: 'Distúrbios visuais?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_visuais'
                },
                {
                    titulo: 'Distúrbios auditivos?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_auditivos'
                },
                {
                    titulo: 'Distúrbios da marcha?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_mancha'
                },
                {
                    titulo: 'Distúrbios de motricidade voluntária?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_motricidade'
                },
                {
                    titulo: 'Distúrbios esfincterianos?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_esfincterianos'
                },
                {
                    titulo: 'Distúrbios do sono?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_sono'
                },
                {
                    titulo: 'Distúrbios das funções cerebrais superiores?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'disturbios_funcoes'
                },
            ];
    }
    Page7Page.prototype.ngOnInit = function () {
    };
    // Metodo que cria um alerta
    Page7Page.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ops!',
                            subHeader: 'Página (ISDA página 7)',
                            message: 'Foram encontrados campos vazios! A Anamnese só será enviada após o preenchimento de todos os campos obrigatórios.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page7Page.prototype.ionViewWillLeave = function () {
        this.identService.allObject.isda.sistema_hemolinfopetico = this.fGroupSh.value;
        this.identService.allObject.isda.coluna_vertebral = this.fGroupCv.value;
        this.identService.allObject.isda.musculos = this.fGroupM.value;
        this.identService.allObject.isda.nervoso = this.fGroupN.value;
        console.log(this.identService.allObject.isda.sistema_hemolinfopetico);
        console.log(this.identService.allObject.isda.coluna_vertebral);
        console.log(this.identService.allObject.isda.musculos);
        console.log(this.identService.allObject.isda.nervoso);
    };
    Page7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page7',
            template: __webpack_require__(/*! ./page7.page.html */ "./src/app/novo/isda/page7/page7.page.html"),
            styles: [__webpack_require__(/*! ./page7.page.scss */ "./src/app/novo/isda/page7/page7.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], Page7Page);
    return Page7Page;
}());



/***/ })

}]);
//# sourceMappingURL=isda-page7-page7-module.js.map