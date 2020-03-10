(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["habitos-de-vida-habitos-de-vida-module"],{

/***/ "./src/app/novo/habitos-de-vida/habitos-de-vida.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/novo/habitos-de-vida/habitos-de-vida.module.ts ***!
  \****************************************************************/
/*! exports provided: HabitosDeVidaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabitosDeVidaPageModule", function() { return HabitosDeVidaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _habitos_de_vida_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./habitos-de-vida.page */ "./src/app/novo/habitos-de-vida/habitos-de-vida.page.ts");



/*
Autenticação
*/




var routes = [
    {
        path: '',
        component: _habitos_de_vida_page__WEBPACK_IMPORTED_MODULE_6__["HabitosDeVidaPage"]
    }
];
var HabitosDeVidaPageModule = /** @class */ (function () {
    function HabitosDeVidaPageModule() {
    }
    HabitosDeVidaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_habitos_de_vida_page__WEBPACK_IMPORTED_MODULE_6__["HabitosDeVidaPage"]]
        })
    ], HabitosDeVidaPageModule);
    return HabitosDeVidaPageModule;
}());



/***/ }),

/***/ "./src/app/novo/habitos-de-vida/habitos-de-vida.page.html":
/*!****************************************************************!*\
  !*** ./src/app/novo/habitos-de-vida/habitos-de-vida.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\r\n    <ion-card color=\"light\">\r\n      <img src=\"../../../assets/img/hps.jpg\" />\r\n\r\n      <ion-card-content>\r\n        <ion-list lines=\"full\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Alimentação:</ion-label>\r\n            <ion-select formControlName=\"alimentacao\">\r\n              <ion-select-option value=\"Regular\">Regular</ion-select-option>\r\n              <ion-select-option value=\"Irregular\">Irregular</ion-select-option>\r\n              <ion-select-option value=\"Adequada\">Adequada</ion-select-option>\r\n              <ion-select-option value=\"Inadequada\">Inadequada</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Habitação:</ion-label>\r\n            <ion-select formControlName=\"habitacao\">\r\n              <ion-select-option value=\"Alvenaria\">Alvenaria</ion-select-option>\r\n              <ion-select-option value=\"Barro\">Barro</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Atividade física:</ion-label>\r\n            <ion-select formControlName=\"atividades_fisicas\">\r\n              <ion-select-option value=\"Regulares\">Regular</ion-select-option>\r\n              <ion-select-option value=\"Irregulares\">Irregular</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Lazer:</ion-label>\r\n            <ion-input  formControlName=\"lazer\"></ion-input>\r\n          </ion-item>\r\n\r\n          <div *ngIf=\"fGroup.controls.lazer.errors\">\r\n            <p *ngIf=\"fGroup.controls.lazer.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 250\r\n              caracteres\r\n              foi excedido!</p>\r\n          </div>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Consumo de álcool</ion-label>\r\n            <ion-select formControlName=\"consumo_alcool\">\r\n              <ion-select-option value=\"Social\">Social</ion-select-option>\r\n              <ion-select-option value=\"Dependente\">Dependente</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Uso de drogas ilícitas</ion-label>\r\n            <ion-select formControlName=\"drogas_valor\">\r\n              <ion-select-option value=\"Nenhuma\">Nenhuma</ion-select-option>\r\n              \r\n              <ion-select-option value=\"Maconha\">Maconha</ion-select-option>\r\n              <ion-select-option value=\"Chack\">Chack</ion-select-option>\r\n              <ion-select-option value=\"LSD\">LSD</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Outras:</ion-label>\r\n            <ion-input  formControlName=\"drogas_outros\"></ion-input>\r\n          </ion-item>\r\n\r\n          <div *ngIf=\"fGroup.controls.drogas_outros.errors\">\r\n            <p *ngIf=\"fGroup.controls.drogas_outros.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 250\r\n              caracteres\r\n              foi excedido!</p>\r\n          </div>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Tomou banho em:</ion-label>\r\n            <ion-select formControlName=\"banho_valor\">\r\n              <ion-select-option value=\"Rios\">Rio</ion-select-option>\r\n              <ion-select-option value=\"Açudes\">Açude</ion-select-option>\r\n              <ion-select-option value=\"Lagoas\">Lagoa</ion-select-option>\r\n              <ion-select-option value=\"Praia\">Praia</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Frequência:</ion-label>\r\n            <ion-input  formControlName=\"banho_frequencia\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <div *ngIf=\"fGroup.controls.banho_frequencia.errors\">\r\n            <p *ngIf=\"fGroup.controls.banho_frequencia.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de\r\n              250 caracteres\r\n              foi excedido!</p>\r\n          </div>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Último banho:</ion-label>\r\n            <ion-input  formControlName=\"banho_ultimo_banho\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n\r\n            <div *ngIf=\"fGroup.controls.banho_ultimo_banho.errors\">\r\n              <p *ngIf=\"fGroup.controls.banho_ultimo_banho.errors.maxlength\" class=\"ion-padding-start \">O valor máximo\r\n                de 250 caracteres\r\n                foi excedido!</p>\r\n            </div>\r\n\r\n            <ion-label position=\"floating\"><strong>*</strong> Contato com Animais?</ion-label>\r\n            <ion-select multiple formControlName=\"contato_animais\">\r\n              <ion-select-option value=\"gato\">Gato</ion-select-option>\r\n              <ion-select-option value=\"cachorro\">Cachorro</ion-select-option>\r\n              <ion-select-option value=\"pássaro\">Pássaro</ion-select-option>\r\n              <ion-select-option value=\"peixe\">Peixe</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" color=\"asubcard\">\r\n            <ion-grid>\r\n              <ion-row>\r\n\r\n                <!--cabeçalho-->\r\n                <ion-col>\r\n                  <ion-text>Contato com triatomíneo?</ion-text>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n\r\n\r\n          <ion-radio-group formControlName=\"contato_triatomineo\">\r\n            <ion-grid>\r\n              <ion-row class=\"ion-nowrap\">\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Sim</ion-text>\r\n                    <ion-radio value=\"sim\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Não</ion-text>\r\n                    <ion-radio value=\"não\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>NQN</ion-text>\r\n                    <ion-radio value=\"Não questionado\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-radio-group>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Condições sociais:</ion-label>\r\n            <ion-input  formControlName=\"condicoes_sociais\"></ion-input>\r\n          </ion-item>\r\n\r\n          <div *ngIf=\"fGroup.controls.condicoes_sociais.errors\">\r\n            <p *ngIf=\"fGroup.controls.condicoes_sociais.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de\r\n              250 caracteres\r\n              foi excedido!</p>\r\n          </div>\r\n\r\n          <!--Verificar campo condições culturais-->\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Condições Culturais:</ion-label>\r\n            <ion-input  formControlName=\"condicoes_culturais\"> </ion-input>\r\n          </ion-item>\r\n\r\n          <div *ngIf=\"fGroup.controls.condicoes_culturais.errors\">\r\n            <p *ngIf=\"fGroup.controls.condicoes_culturais.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de\r\n              250 caracteres\r\n              foi excedido!</p>\r\n          </div>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Relação conjugal:</ion-label>\r\n            <ion-select formControlName=\"vida_conjugal\">\r\n              <ion-select-option value=\"solteiro\">Solteiro(a)</ion-select-option>\r\n              <ion-select-option value=\"Casado\">Casado(a)</ion-select-option>\r\n              <ion-select-option value=\"Divorciado\">Divorciado(a)</ion-select-option>\r\n              <ion-select-option value=\"Viúvo\">Viúvo(a)</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Ajustamento familiar:</ion-label>\r\n            <ion-select formControlName=\"ajustamento_familiar\">\r\n              <ion-select-option value=\"Dependente\">Dependente</ion-select-option>\r\n              <ion-select-option value=\"Mantedor\">Mantenedor(ra)</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Padrão de sono:</ion-label>\r\n            <ion-select formControlName=\"padraosono_valor\">\r\n              <ion-select-option value=\"regular\">Regular</ion-select-option>\r\n              <ion-select-option value=\"irregular\">Irregular</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" color=\"asubcard\">\r\n            <ion-grid>\r\n              <ion-row>\r\n\r\n                <!--cabeçalho-->\r\n                <ion-col>\r\n                  <ion-text>Demora a iniciar o sono?</ion-text>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n\r\n\r\n          <ion-radio-group formControlName=\"padraosono_demora_iniciar\">\r\n            <ion-grid>\r\n              <ion-row class=\"ion-nowrap\">\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Sim</ion-text>\r\n                    <ion-radio value=\"sim\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Não</ion-text>\r\n                    <ion-radio value=\"não\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>NQN</ion-text>\r\n                    <ion-radio value=\"Não questionado\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-radio-group>\r\n\r\n\r\n          <ion-item lines=\"none\" color=\"asubcard\">\r\n            <ion-grid>\r\n              <ion-row>\r\n\r\n                <!--cabeçalho-->\r\n                <ion-col>\r\n                  <ion-text>Acorda durante a noite?</ion-text>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n\r\n          <ion-radio-group formControlName=\"padraosono_acorda_durante\">\r\n            <ion-grid>\r\n              <ion-row class=\"ion-nowrap\">\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Sim</ion-text>\r\n                    <ion-radio value=\"sim\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Não</ion-text>\r\n                    <ion-radio value=\"não\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>NQN</ion-text>\r\n                    <ion-radio value=\"Não questionado\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-radio-group>\r\n\r\n\r\n          <ion-item lines=\"none\" color=\"asubcard\">\r\n            <ion-grid>\r\n              <ion-row>\r\n\r\n                <!--cabeçalho-->\r\n                <ion-col>\r\n                  <ion-text>Acorda antes do horário?</ion-text>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n\r\n          <ion-radio-group formControlName=\"padraosono_acorda_antes\">\r\n            <ion-grid>\r\n              <ion-row class=\"ion-nowrap\">\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Sim</ion-text>\r\n                    <ion-radio value=\"sim\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>Não</ion-text>\r\n                    <ion-radio value=\"não\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-text>NQN</ion-text>\r\n                    <ion-radio value=\"Não questionado\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-radio-group>\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><strong>*</strong> Tabagismo:</ion-label>\r\n            <ion-select formControlName=\"tabagismo_valor\">\r\n              <ion-select-option value=\"Atual\">Atual</ion-select-option>\r\n              <ion-select-option value=\"Ex-tabagista\">Ex-tabagista</ion-select-option>\r\n              <ion-select-option value=\"Não fuma\">Não tabagista</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <!--Este campo só deve ser exibido se o paciente for ex-tabagista-->\r\n          <ion-item *ngIf=\"fGroup.value.tabagismo_valor == 'Ex-tabagista'\">\r\n            <ion-label position=\"floating\"><strong>*</strong> Ano e mês:</ion-label>\r\n            <ion-input  formControlName=\"tabagismo_anos_maco\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/habitos-de-vida/habitos-de-vida.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/novo/habitos-de-vida/habitos-de-vida.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nstrong {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9oYWJpdG9zLWRlLXZpZGEvQzpcXFVzZXJzXFxmYWJpYVxcRG9jdW1lbnRzXFxhcHAyMDE5XzFfYW5hbW5lc2VfZGlnaXRhbC9zcmNcXGFwcFxcbm92b1xcaGFiaXRvcy1kZS12aWRhXFxoYWJpdG9zLWRlLXZpZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaGFiaXRvcy1kZS12aWRhL2hhYml0b3MtZGUtdmlkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5zdHJvbmd7XHJcblxyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uYm90dG9tVGFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDIwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/novo/habitos-de-vida/habitos-de-vida.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/novo/habitos-de-vida/habitos-de-vida.page.ts ***!
  \**************************************************************/
/*! exports provided: HabitosDeVidaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabitosDeVidaPage", function() { return HabitosDeVidaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/*

 Import das das bibliotecas para validação das entradas

 */

var HabitosDeVidaPage = /** @class */ (function () {
    function HabitosDeVidaPage(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.fGroup = this.fBuilder.group({
            ajustamento_familiar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            alimentacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            atividades_fisicas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            banho_frequencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            banho_ultimo_banho: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            banho_valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            condicoes_sociais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            condicoes_culturais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            consumo_alcool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            contato_animais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            contato_triatomineo: [''],
            drogas_outros: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            drogas_valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            habitacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            lazer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            padraosono_acorda_antes: [''],
            padraosono_acorda_durante: [''],
            padraosono_demora_iniciar: [''],
            padraosono_valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            tabagismo_valor: [''],
            tabagismo_anos_maco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            vida_conjugal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    /*
     Metodo que verifica se os campos ocultos foram ativado e verifica
     e aplica as validações.
    */
    HabitosDeVidaPage.prototype.setOcultValidate = function () {
        var fumanteContol = this.fGroup.get('tabagismo_anos_maco');
        this.fGroup.get('tabagismo_valor').valueChanges
            .subscribe(function (tabagismoValor) {
            if (tabagismoValor === 'Ex-tabagista') {
                fumanteContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                fumanteContol.clearValidators();
            }
            fumanteContol.updateValueAndValidity();
        });
    };
    HabitosDeVidaPage.prototype.ngOnInit = function () {
        // Chama o metodo que verifica se o campo oculto foi ativado e se sim torna ele obrigatório
        this.setOcultValidate();
    };
    HabitosDeVidaPage.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Hábitos de Vida', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(4) > -1) {
            // converta para string o contato_animais
            this.fGroup.value.contato_animais = this.fGroup.value.contato_animais.toString();
            // Evia tudo para o big json
            this.identService.allObject.isda.habitos_de_vida = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.habitos_de_vida);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            // converta para string o contato_animais
            this.fGroup.value.contato_animais = this.fGroup.value.contato_animais.toString();
            // Evia tudo para o big json
            this.identService.allObject.isda.habitos_de_vida = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.habitos_de_vida);
            this.identService.verifica.push(4);
            console.log(this.identService.verifica);
        }
    };
    HabitosDeVidaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-habitos-de-vida',
            template: __webpack_require__(/*! ./habitos-de-vida.page.html */ "./src/app/novo/habitos-de-vida/habitos-de-vida.page.html"),
            styles: [__webpack_require__(/*! ./habitos-de-vida.page.scss */ "./src/app/novo/habitos-de-vida/habitos-de-vida.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], HabitosDeVidaPage);
    return HabitosDeVidaPage;
}());



/***/ })

}]);
//# sourceMappingURL=habitos-de-vida-habitos-de-vida-module.js.map