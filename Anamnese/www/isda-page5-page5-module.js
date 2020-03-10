(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isda-page5-page5-module"],{

/***/ "./src/app/novo/isda/page5/page5.module.ts":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page5/page5.module.ts ***!
  \*************************************************/
/*! exports provided: Page5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page5PageModule", function() { return Page5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page5.page */ "./src/app/novo/isda/page5/page5.page.ts");







var routes = [
    {
        path: '',
        component: _page5_page__WEBPACK_IMPORTED_MODULE_6__["Page5Page"]
    }
];
var Page5PageModule = /** @class */ (function () {
    function Page5PageModule() {
    }
    Page5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page5_page__WEBPACK_IMPORTED_MODULE_6__["Page5Page"]]
        })
    ], Page5PageModule);
    return Page5PageModule;
}());



/***/ }),

/***/ "./src/app/novo/isda/page5/page5.page.html":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page5/page5.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n    <ion-item-divider color=\"asubcard\" class=\"ion-padding\">\n      <ion-title class=\"ion-text-center\">\n        Abdome\n      </ion-title>\n    </ion-item-divider>\n\n    <!-- \n        ==============================================================\n                                Campo Parede Abdominal\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Parede Abdominal</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of paredeabdominal\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- \n          ==============================================================\n                                Campo pâncreas\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Pâncreas</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of pancreas\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <!-- \n          ==============================================================\n                   Campos figado\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Fígado</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of figado\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <!-- \n          ==============================================================\n                   Campos Estomago\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Estômago</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of estomago\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n\n    <!-- \n          ==============================================================\n                   Campos Intestino\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Intestino Delgado</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of intestino\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <!-- \n          ==============================================================\n                   Campos Cólon\n          ==============================================================\n        -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Cólon | reto | ânus</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\" *ngFor=\"let lista of colon\">\n\n\n          <!--Campo Sialose-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>{{ lista.titulo }}</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"{{ lista.key }}\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome1 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor1 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome2 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor2 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>{{ lista.nome3 }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor3 }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <h5 class=\"ion-text-center\"><strong>ISDA Página 5</strong></h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/isda4']\">Anterior</ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/isda6']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/isda/page5/page5.page.scss":
/*!*************************************************!*\
  !*** ./src/app/novo/isda/page5/page5.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomTab {\n  margin-bottom: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pc2RhL3BhZ2U1L0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlzZGFcXHBhZ2U1XFxwYWdlNS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaXNkYS9wYWdlNS9wYWdlNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tVGFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/novo/isda/page5/page5.page.ts":
/*!***********************************************!*\
  !*** ./src/app/novo/isda/page5/page5.page.ts ***!
  \***********************************************/
/*! exports provided: Page5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page5Page", function() { return Page5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// Import das das bibliotecas para validação das entradas

// Importe da biblioteca para o alert

var Page5Page = /** @class */ (function () {
    function Page5Page(fBuilder, identService, alertController) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.alertController = alertController;
        // Abdome
        this.paredeabdominal = [];
        this.pancreas = [];
        this.figado = [];
        this.estomago = [];
        this.intestino = [];
        this.colon = [];
        this.fGroup = this.fBuilder.group({
            // Falta fazer as validações com o validator
            paredeabdominal_dor: [''],
            paredeabdominal_alteracao: [''],
            pancreas_dor: [''],
            pancreas_diarreia: [''],
            pancreas_nauseas: [''],
            figado_dor: [''],
            figado_ictericia: [''],
            estomago_dor: [''],
            estomago_nauseas: [''],
            estomago_dispepsia: [''],
            estomago_pirose: [''],
            intestino_dor: [''],
            intestino_diarreia: [''],
            intestino_esteatorreia: [''],
            intestino_distensao: [''],
            intestino_hemorragia: [''],
            colon_dor: [''],
            colon_diarreia: [''],
            colon_obstipacao: [''],
            colon_sangramento: [''],
            colon_prurido: [''],
        });
        this.paredeabdominal = [
            {
                titulo: 'Dor?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'paredeabdominal_dor'
            },
            {
                titulo: 'Alteração?',
                nome1: 'Sim',
                valor1: 'sim',
                nome2: 'Não',
                valor2: 'nao',
                nome3: 'NQN',
                valor3: 'nqn',
                key: 'paredeabdominal_alteracao'
            }
        ],
            this.pancreas = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'pancreas_dor'
                },
                {
                    titulo: 'Diarreia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'pancreas_diarreia'
                },
                {
                    titulo: 'Nauseas?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'pancreas_nauseas'
                }
            ],
            this.figado = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'figado_dor'
                },
                {
                    titulo: 'Icterícia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'figado_ictericia'
                }
            ],
            this.estomago = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'estomago_dor'
                },
                {
                    titulo: 'Nauseas?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'estomago_nauseas'
                },
                {
                    titulo: 'Dispepsia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'estomago_dispepsia'
                },
                {
                    titulo: 'Pirose?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'estomago_pirose'
                }
            ],
            this.intestino = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'intestino_dor'
                },
                {
                    titulo: 'Diarreia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'intestino_diarreia'
                },
                {
                    titulo: 'Esteatorreia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'intestino_esteatorreia'
                },
                {
                    titulo: 'Distensão?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'intestino_distensao'
                },
                {
                    titulo: 'Hemorragia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'intestino_hemorragia'
                }
            ],
            this.colon = [
                {
                    titulo: 'Dor?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'colon_dor'
                },
                {
                    titulo: 'Diarreia?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'colon_diarreia'
                },
                {
                    titulo: 'Obstipação?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'colon_obstipacao'
                },
                {
                    titulo: 'Sangramento?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'colon_sangramento'
                },
                {
                    titulo: 'prurido?',
                    nome1: 'Sim',
                    valor1: 'sim',
                    nome2: 'Não',
                    valor2: 'nao',
                    nome3: 'NQN',
                    valor3: 'nqn',
                    key: 'colon_prurido'
                }
            ];
    }
    Page5Page.prototype.ngOnInit = function () {
    };
    Page5Page.prototype.ionViewWillLeave = function () {
        // evia para o big json
        this.identService.allObject.isda.abdome = this.fGroup.value;
        // visualizar resultadonos no console
        console.log(this.identService.allObject.isda.abdome);
    };
    Page5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page5',
            template: __webpack_require__(/*! ./page5.page.html */ "./src/app/novo/isda/page5/page5.page.html"),
            styles: [__webpack_require__(/*! ./page5.page.scss */ "./src/app/novo/isda/page5/page5.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], Page5Page);
    return Page5Page;
}());



/***/ })

}]);
//# sourceMappingURL=isda-page5-page5-module.js.map