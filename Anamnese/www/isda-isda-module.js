(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isda-isda-module"],{

/***/ "./src/app/novo/isda/isda.module.ts":
/*!******************************************!*\
  !*** ./src/app/novo/isda/isda.module.ts ***!
  \******************************************/
/*! exports provided: IsdaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdaPageModule", function() { return IsdaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _isda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isda.page */ "./src/app/novo/isda/isda.page.ts");



/*
Autenticação
*/




var routes = [
    {
        path: '',
        component: _isda_page__WEBPACK_IMPORTED_MODULE_6__["IsdaPage"]
    }
];
var IsdaPageModule = /** @class */ (function () {
    function IsdaPageModule() {
    }
    IsdaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _isda_page__WEBPACK_IMPORTED_MODULE_6__["IsdaPage"]
            ]
        })
    ], IsdaPageModule);
    return IsdaPageModule;
}());



/***/ }),

/***/ "./src/app/novo/isda/isda.page.html":
/*!******************************************!*\
  !*** ./src/app/novo/isda/isda.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n    <ion-item-divider color=\"asubcard\" class=\"ion-padding\">\n      <ion-title class=\"ion-text-center\">\n        Sintomas gerais\n      </ion-title>\n    </ion-item-divider>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Sintoma</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Faça uma breve descrição:</ion-label>\n            <ion-input type=\"text\" formControlName=\"sintomas\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.sintomas.errors\">\n            <p *ngIf=\"fGroup.controls.sintomas.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Por quanto tempo?</ion-label>\n            <ion-input type=\"text\" formControlName=\"tempo\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.tempo.errors\">\n            <p *ngIf=\"fGroup.controls.tempo.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Card Febre -->\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Apresenta Febre?</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-radio-group formControlName=\"febre_presenca\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col *ngFor=\"let lista of febre\">\n                  <ion-item>\n                    <ion-text>{{ lista.nome }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <!--Input number, captura de temperatura-->\n\n          <ion-item *ngIf=\"fGroup.value.febre_presenca == 'sim'\">\n\n            <ion-label position=\"floating\"><span>*</span>Quantos graus?</ion-label>\n            <ion-input type=\"text\" formControlName=\"febre_valor\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.febre_valor.errors\">\n            <p *ngIf=\"fGroup.controls.febre_valor.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n\n          <ion-item *ngIf=\"fGroup.value.febre_presenca ==  'sim'\">\n            <ion-label position=\"floating\"><span>*</span>Por quanto tempo?</ion-label>\n            <ion-input type=\"text\" formControlName=\"febre_tempo\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.febre_tempo.errors\">\n            <p *ngIf=\"fGroup.controls.febre_tempo.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Card Alterações de peso -->\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Presença de alteração de peso?</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <!--\n             Checkbox: <ion-label>Sim</ion-label>, <ion-label>Não</ion-label> e <ion-label>Não</ion-label> questionado.\n             Obs: Ao selecionar o checkbox de opção <ion-label>Sim</ion-label>, o campo de input \n                 Que receberá o período de tempo da alteraçãode peso do paciente deverá ser ativado. \n                 Preferencialmente se possível ele deverá permanecer \n                 oculto, porém se não houver essa possibilidade ele deverá permanecer desabilitado.\n           -->\n          <ion-radio-group formControlName=\"alteracao_peso_presenca\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col *ngFor=\"let lista of peso\">\n                  <ion-item>\n                    <ion-text>{{ lista.nome }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <!--Input text, captura de período de tempo-->\n          <ion-item *ngIf=\"fGroup.value.alteracao_peso_presenca == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span>Peso:</ion-label>\n            <ion-input type=\"text\" formControlName=\"alteracao_peso_valor\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.alteracao_peso_valor.errors\">\n            <p *ngIf=\"fGroup.controls.alteracao_peso_valor.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n          \n          <ion-item *ngIf=\"fGroup.value.alteracao_peso_presenca == 'sim'\">\n                  <ion-label position=\"floating\"><span>*</span>Alteração do peso: </ion-label>\n                  <ion-input type=\"text\" formControlName=\"alteracao_peso_valor_peso\">\n                  </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.alteracao_peso_valor_peso.errors\">\n            <p *ngIf=\"fGroup.controls.alteracao_peso_valor_peso.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n\n          <ion-item *ngIf=\"fGroup.value.alteracao_peso_presenca == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span>Em quanto tempo?</ion-label>\n                  <ion-input type=\"text\" formControlName=\"alteracao_peso_tempo\">\n                  </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.alteracao_peso_tempo.errors\">\n            <p *ngIf=\"fGroup.controls.alteracao_peso_tempo.errors.maxlength\"\n              class=\"ion-padding-start \">Valo máximo de caracteres é\n              250!</p>\n          </div>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Card Sudorese -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Sudorese?</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-radio-group formControlName=\"sudoreses\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col *ngFor=\"let lista of sudorese\">\n                  <ion-item>\n                    <ion-text>{{ lista.nome }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Card Calafrios -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Calafrios?</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-radio-group formControlName=\"calafrios\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col *ngFor=\"let lista of calafrios\">\n                  <ion-item>\n                    <ion-text>{{ lista.nome }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Card Cãibras -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Cãibras?</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n          <ion-radio-group formControlName=\"caibras\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col *ngFor=\"let lista of caibras\">\n                  <ion-item>\n                    <ion-text>{{ lista.nome }}</ion-text>\n                    <ion-radio value=\"{{ lista.valor }}\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"dark\" expand=\"block\" [routerLink]=\"['/novo/isda2']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/isda/isda.page.scss":
/*!******************************************!*\
  !*** ./src/app/novo/isda/isda.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nspan {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n.ion-label {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pc2RhL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlzZGFcXGlzZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3ZvL2lzZGEvaXNkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5zcGFue1xyXG5cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJvdHRvbVRhYntcclxuICAgIG1hcmdpbi1ib3R0b206ICAyMCU7XHJcbn1cclxuLmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/novo/isda/isda.page.ts":
/*!****************************************!*\
  !*** ./src/app/novo/isda/isda.page.ts ***!
  \****************************************/
/*! exports provided: IsdaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdaPage", function() { return IsdaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/*

 Import das das bibliotecas para validação das entradas

 */

var IsdaPage = /** @class */ (function () {
    function IsdaPage(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.title = 'ISDA';
        // variáveis
        this.parte2 = false;
        this.parte3 = false;
        this.parte4 = false;
        this.parte5 = false;
        this.parte6 = false;
        this.parte7 = false;
        this.parte8 = false;
        this.parte9 = false;
        // Array de nomes e valores
        this.febre = [];
        this.peso = [];
        this.sudorese = [];
        this.calafrios = [];
        this.caibras = [];
        this.fGroup = this.fBuilder.group({
            // Falta fazer as validações com o validator
            sintomas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            tempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            febre_valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            febre_tempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            sudoreses: [''],
            calafrios: [''],
            caibras: [''],
            alteracao_peso_presenca: [''],
            alteracao_peso_valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            // tslint:disable-next-line: max-line-length
            alteracao_peso_valor_peso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            alteracao_peso_tempo: [''],
            febre_presenca: ['']
        });
        this.febre = [
            {
                nome: 'Sim',
                valor: 'sim'
            },
            {
                nome: 'Não',
                valor: 'nao'
            },
            {
                nome: 'NQN',
                valor: 'nqn'
            }
        ],
            this.peso = [
                {
                    nome: 'Sim',
                    valor: 'sim'
                },
                {
                    nome: 'Não',
                    valor: 'nao'
                },
                {
                    nome: 'NQN',
                    valor: 'nqn'
                }
            ],
            this.sudorese = [
                {
                    nome: 'Sim',
                    valor: 'sim'
                },
                {
                    nome: 'Não',
                    valor: 'nao'
                },
                {
                    nome: 'NQN',
                    valor: 'nqn'
                }
            ],
            this.calafrios = [
                {
                    nome: 'Sim',
                    valor: 'sim'
                },
                {
                    nome: 'Não',
                    valor: 'nao'
                },
                {
                    nome: 'NQN',
                    valor: 'nqn'
                }
            ],
            this.caibras = [
                {
                    nome: 'Sim',
                    valor: 'sim'
                },
                {
                    nome: 'Não',
                    valor: 'nao'
                },
                {
                    nome: 'NQN',
                    valor: 'nqn'
                }
            ];
    }
    IsdaPage.prototype.setOcultValidate = function () {
        var pesoValorContol = this.fGroup.get('alteracao_peso_valor');
        var pesoValorPesoContol = this.fGroup.get('alteracao_peso_valor_peso');
        var pesoTempoContol = this.fGroup.get('alteracao_peso_tempo');
        var febreValorContol = this.fGroup.get('febre_valor');
        var febreTempoContol = this.fGroup.get('febre_tempo');
        this.fGroup.get('alteracao_peso_presenca').valueChanges.subscribe(function (pesoPresenca) {
            if (pesoPresenca === 'sim') {
                pesoValorContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                pesoValorPesoContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                pesoTempoContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
            }
            else {
                pesoValorContol.clearValidators();
                pesoValorPesoContol.clearValidators();
                pesoTempoContol.clearValidators();
            }
            pesoValorContol.updateValueAndValidity();
            pesoValorPesoContol.updateValueAndValidity();
            pesoTempoContol.updateValueAndValidity();
        });
        this.fGroup.get('febre_presenca').valueChanges.subscribe(function (febrePresenca) {
            if (febrePresenca === 'sim') {
                febreValorContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                febreTempoContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
            }
            else {
                febreValorContol.clearValidators();
                febreTempoContol.clearValidators();
            }
            febreValorContol.updateValueAndValidity();
            febreTempoContol.updateValueAndValidity();
        });
    };
    IsdaPage.prototype.ngOnInit = function () {
        this.setOcultValidate();
    };
    IsdaPage.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Isda', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(5) > -1) {
            // evia para o big json
            this.identService.allObject.isda.sintomas_gerais = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.sintomas_gerais);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            // evia para o big json
            this.identService.allObject.isda.sintomas_gerais = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.sintomas_gerais);
            this.identService.verifica.push(5);
            console.log(this.identService.verifica);
        }
    };
    IsdaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-isda',
            template: __webpack_require__(/*! ./isda.page.html */ "./src/app/novo/isda/isda.page.html"),
            styles: [__webpack_require__(/*! ./isda.page.scss */ "./src/app/novo/isda/isda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], IsdaPage);
    return IsdaPage;
}());



/***/ })

}]);
//# sourceMappingURL=isda-isda-module.js.map