(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antecedentes-antecedentes-module"],{

/***/ "./src/app/novo/antecedentes/antecedentes.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/novo/antecedentes/antecedentes.module.ts ***!
  \**********************************************************/
/*! exports provided: AntecedentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesPageModule", function() { return AntecedentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _antecedentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antecedentes.page */ "./src/app/novo/antecedentes/antecedentes.page.ts");



/*
Autenticação
*/




var routes = [
    {
        path: '',
        component: _antecedentes_page__WEBPACK_IMPORTED_MODULE_6__["AntecedentesPage"]
    }
];
var AntecedentesPageModule = /** @class */ (function () {
    function AntecedentesPageModule() {
    }
    AntecedentesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_antecedentes_page__WEBPACK_IMPORTED_MODULE_6__["AntecedentesPage"]]
        })
    ], AntecedentesPageModule);
    return AntecedentesPageModule;
}());



/***/ }),

/***/ "./src/app/novo/antecedentes/antecedentes.page.html":
/*!**********************************************************!*\
  !*** ./src/app/novo/antecedentes/antecedentes.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n\n    <ion-item-divider color=\"asubcard\" class=\"ion-padding\">\n      <ion-title class=\"ion-text-center\">\n        Antecedentes pessoais\n      </ion-title>\n    </ion-item-divider>\n\n    <!-- Card Fisiológicos -->\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title>\n          <h5 class=\"ion-text-center\"><strong>Fisiológicos </strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"full\">\n          <!--Input gestação-->\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Gestação e nascimento:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_fisiologicos_gestacao_nascimento\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_fisiologicos_gestacao_nascimento.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_fisiologicos_gestacao_nascimento.errors.maxlength\"\n              class=\"ion-padding-start \">O valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <!--Input psicomotor-->\n\n          <ion-item >\n            <ion-label class=\"ion-label\" position=\"floating\"><span>*</span> Desenvolvimento psicomotor e neural:\n            </ion-label>\n            <ion-input formControlName=\"pessoais_fisiologicos_desenvolvimento_psicomotor\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_fisiologicos_desenvolvimento_psicomotor.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_fisiologicos_desenvolvimento_psicomotor.errors.maxlength\"\n              class=\"ion-padding-start \">O valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <!--Input sexual-->\n\n          <ion-item >\n\n            <ion-label position=\"floating\"><span>*</span> Desenvolvimento sexual:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_fisiologicos_desenvolvimento_sexual\"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_fisiologicos_desenvolvimento_sexual.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_fisiologicos_desenvolvimento_sexual.errors.maxlength\"\n              class=\"ion-padding-start \">O valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Card Patológico -->\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Patológico</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <!--Input-->\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Doenças sofridas pelo paciente:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_doencas_sofridas\"></ion-input>\n          </ion-item>\n\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_doencas_sofridas.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_doencas_sofridas.errors.maxlength\" class=\"ion-padding-start \">\n              O valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <!--Input-->\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Doenças atuais do paciente:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_doencas_atuais\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_doencas_atuais.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_doencas_atuais.errors.maxlength\" class=\"ion-padding-start \">O\n              valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Alergias:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_alergias\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_alergias.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_alergias.errors.maxlength\" class=\"ion-padding-start\">O valor\n              máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Cirurgias:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_cirurgias\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_cirurgias.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_cirurgias.errors.maxlength\" class=\"ion-padding-start\">O valor\n              máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <!--Inpunt Transfusões-->\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Transfusões sanguíneas:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_transfusoes\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_transfusoes.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_transfusoes.errors.maxlength\" class=\"ion-padding-start\">O\n              valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <!--Input Obstétrica-->\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> História obstétrica:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_historia\">\n            </ion-input>\n          </ion-item>\n\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_historia.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_historia.errors.maxlength\" class=\"ion-padding-start\">O valor\n              máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n\n          <!--Input Medicamentos-->\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Medicamentos em uso:</ion-label>\n            <ion-input type=\"text\" formControlName=\"pessoais_patologico_medicamentos_em_uso\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.pessoais_patologico_medicamentos_em_uso.errors\">\n            <p *ngIf=\"fGroup.controls.pessoais_patologico_medicamentos_em_uso.errors.maxlength\"\n              class=\"ion-padding-start\">O valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <!--Card Enxaqueca-->\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Antecedente Familiar</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Enxaqueca</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <!--Input Enxaqueca-->\n\n          <ion-radio-group formControlName=\"familia_enxaqueca\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Diabetes</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <!--Input Diabetes-->\n\n          <ion-radio-group formControlName=\"familia_diabetes\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>HAS</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <!--Input HAS-->\n\n          <ion-radio-group formControlName=\"familia_has\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Alzheimer</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <!--Input Alzheimer-->\n\n          <ion-radio-group formControlName=\"familia_alzheimer\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Cancer</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <!--Input Diabetes-->\n\n          <ion-radio-group formControlName=\"familia_cancer_valor\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item >\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <!--Campo Descrição deverá ser ativado ao clicar no checkbox sim-->\n          <ion-item *ngIf=\"fGroup.value.familia_cancer_valor == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span> Especifique:</ion-label>\n            <ion-input type=\"text\" formControlName=\"familia_cancer_especifique\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.familia_cancer_especifique.errors\">\n            <p *ngIf=\"fGroup.controls.familia_cancer_especifique.errors.maxlength\" class=\"ion-padding-start\">O valor\n              máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n          <!--Input outros-->\n\n          <ion-item *ngIf=\"fGroup.value.familia_cancer_valor == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span> Outros (Câncer):</ion-label>\n            <ion-input type=\"text\" formControlName=\"familia_cancer_outros\">\n            </ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.familia_cancer_outros.errors\">\n            <p *ngIf=\"fGroup.controls.familia_cancer_outros.errors.maxlength\" class=\"ion-padding-start\">O valor máximo\n              de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n\n          <!--Campo outros antecedentes-->\n\n\n          <ion-item >\n            <ion-label position=\"floating\"><span>*</span> Outros antecedentes:</ion-label>\n            <ion-input type=\"text\" formControlName=\"familia_outros\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.familia_outros.errors\">\n            <p *ngIf=\"fGroup.controls.familia_outros.errors.maxlength\" class=\"ion-padding-start\">O valor máximo de 250\n              caracteres\n              foi excedido!</p>\n          </div>\n          \n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/antecedentes/antecedentes.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/novo/antecedentes/antecedentes.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nspan {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n.ion-label {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9hbnRlY2VkZW50ZXMvQzpcXFVzZXJzXFxmYWJpYVxcRG9jdW1lbnRzXFxhcHAyMDE5XzFfYW5hbW5lc2VfZGlnaXRhbC9zcmNcXGFwcFxcbm92b1xcYW50ZWNlZGVudGVzXFxhbnRlY2VkZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3ZvL2FudGVjZWRlbnRlcy9hbnRlY2VkZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuc3BhbntcclxuXHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5ib3R0b21UYWJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAgMjAlO1xyXG59XHJcbi5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/novo/antecedentes/antecedentes.page.ts":
/*!********************************************************!*\
  !*** ./src/app/novo/antecedentes/antecedentes.page.ts ***!
  \********************************************************/
/*! exports provided: AntecedentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesPage", function() { return AntecedentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/*

 Import das das bibliotecas para validação das entradas

 */

var AntecedentesPage = /** @class */ (function () {
    function AntecedentesPage(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        // Faz a validação dos campos
        this.fGroup = this.fBuilder.group({
            // tslint:disable-next-line: max-line-length
            familia_enxaqueca: [''],
            familia_diabetes: [''],
            familia_has: [''],
            familia_alzheimer: [''],
            familia_cancer_valor: [''],
            familia_cancer_especifique: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            familia_cancer_outros: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            familia_outros: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_fisiologicos_desenvolvimento_psicomotor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_fisiologicos_desenvolvimento_sexual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_fisiologicos_gestacao_nascimento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_alergias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_cirurgias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_doencas_atuais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_doencas_sofridas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_historia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_medicamentos_em_uso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            pessoais_patologico_transfusoes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])]
        });
    }
    AntecedentesPage.prototype.setOcultValidate = function () {
        var cancerEspecificacaoContol = this.fGroup.get('familia_cancer_especifique');
        var cancerOutrosContol = this.fGroup.get('familia_cancer_outros');
        this.fGroup.get('familia_cancer_valor').valueChanges.subscribe(function (cancerValor) {
            if (cancerValor === 'sim') {
                cancerEspecificacaoContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                cancerOutrosContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                cancerEspecificacaoContol.clearValidators();
                cancerOutrosContol.clearValidators();
            }
            cancerEspecificacaoContol.updateValueAndValidity();
            cancerOutrosContol.updateValueAndValidity();
        });
    };
    AntecedentesPage.prototype.ngOnInit = function () {
        this.setOcultValidate();
    };
    AntecedentesPage.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Antecedentes', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(2) > -1) {
            // evia para o big json
            this.identService.allObject.isda.antecedentes = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.antecedentes);
            console.log(this.identService.verifica);
            console.log(this.identService.validacao);
        }
        else {
            // evia para o big json
            this.identService.allObject.isda.antecedentes = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.antecedentes);
            this.identService.verifica.push(2);
            console.log(this.identService.verifica);
        }
    };
    AntecedentesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-antecedentes',
            template: __webpack_require__(/*! ./antecedentes.page.html */ "./src/app/novo/antecedentes/antecedentes.page.html"),
            styles: [__webpack_require__(/*! ./antecedentes.page.scss */ "./src/app/novo/antecedentes/antecedentes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], AntecedentesPage);
    return AntecedentesPage;
}());



/***/ })

}]);
//# sourceMappingURL=antecedentes-antecedentes-module.js.map