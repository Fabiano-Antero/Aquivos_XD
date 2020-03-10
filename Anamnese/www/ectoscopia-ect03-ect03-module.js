(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ectoscopia-ect03-ect03-module"],{

/***/ "./src/app/novo/ectoscopia/ect03/ect03.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect03/ect03.module.ts ***!
  \*******************************************************/
/*! exports provided: Ect03PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ect03PageModule", function() { return Ect03PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ect03_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ect03.page */ "./src/app/novo/ectoscopia/ect03/ect03.page.ts");







var routes = [
    {
        path: '',
        component: _ect03_page__WEBPACK_IMPORTED_MODULE_6__["Ect03Page"]
    }
];
var Ect03PageModule = /** @class */ (function () {
    function Ect03PageModule() {
    }
    Ect03PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ect03_page__WEBPACK_IMPORTED_MODULE_6__["Ect03Page"]]
        })
    ], Ect03PageModule);
    return Ect03PageModule;
}());



/***/ }),

/***/ "./src/app/novo/ectoscopia/ect03/ect03.page.html":
/*!*******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect03/ect03.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Edema</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n\n          <ion-item lines=\"none\" class=\"ion-padding-top\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Presença de edema?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n\n          <ion-radio-group formControlName=\"edema_presenca\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n          <!-- Exibir Se o radio selecionado for sim -->\n          <div *ngIf=\"fGroup.value.edema_presenca == 'sim'\">\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Detalhar Edema:</ion-label>\n              <ion-textarea formControlName=\"edema_descricao_edema\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Localização:</ion-label>\n              <ion-textarea formControlName=\"edema_localizacao\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span>Detalhes Localização:</ion-label>\n              <ion-textarea formControlName=\"edema_detalhes_localizacao\"></ion-textarea>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Intensidade:</ion-label>\n              <ion-select formControlName=\"edema_intensidade\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Detalhar Intensidade:</ion-label>\n              <ion-textarea formControlName=\"edema_detalhes_intensidade\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Consistência:</ion-label>\n              <ion-select formControlName=\"edema_consistencia\">\n                <ion-select-option value=\"duro\">Duro</ion-select-option>\n                <ion-select-option value=\"mole\">Mole</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Detalhar consistência:</ion-label>\n              <ion-textarea formControlName=\"edema_detalhes_consistencia\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Presença de cacifo:</ion-label>\n              <ion-select formControlName=\"cacifo_presenca\">\n                <ion-select-option value=\"duro\">Duro</ion-select-option>\n                <ion-select-option value=\"mole\">Mole</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Detalhar cacifo:</ion-label>\n              <ion-textarea formControlName=\"cacifo_detalhe\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Temperatura:</ion-label>\n              <ion-select formControlName=\"edema_temperatura\">\n                <ion-select-option value=\"normal\">Normal</ion-select-option>\n                <ion-select-option value=\"elevada\">Elevada</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Detalhar temperatura:</ion-label>\n              <ion-textarea formControlName=\"edema_temperatura_detalhe\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Dor:</ion-label>\n              <ion-select formControlName=\"edema_dor\">\n                <ion-select-option value=\"presente\">Presente</ion-select-option>\n                <ion-select-option value=\"ausente\">Ausente</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n            <ion-item *ngIf=\"fGroup.value.edema_presenca == 'sim' && fGroup.value.edema_dor == 'presente'\">\n              <ion-label position=\"floating\"><span>*</span> Detalhar dor:</ion-label>\n              <ion-textarea formControlName=\"edema_detalhes_dor\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Outras observações:</ion-label>\n              <ion-textarea formControlName=\"ectoscopia_outras_observacoes\"></ion-textarea>\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Iterações de linfonodos</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n\n          <ion-item lines=\"none\" class=\"ion-padding-top\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Há iterações?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n\n          <ion-radio-group formControlName=\"linfonodos_presenca\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n          <!-- Exibir Se o radio selecionado for sim -->\n\n          <div *ngIf=\"fGroup.value.linfonodos_presenca == 'sim'\">\n            <ion-item lines=\"none\" class=\"ion-padding-top\" color=\"asubcard\">\n              <ion-grid>\n                <ion-row>\n\n                  <!--cabeçalho-->\n                  <ion-col>\n                    <ion-text>Dor?</ion-text>\n                  </ion-col>\n\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n\n            <ion-radio-group formControlName=\"linfonodos_dor\">\n              <ion-grid>\n                <ion-row class=\"ion-nowrap\">\n                  <ion-col>\n                    <ion-item>\n                      <ion-text>Sim</ion-text>\n                      <ion-radio value=\"sim\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-text>Não</ion-text>\n                      <ion-radio value=\"não\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-text>NQN</ion-text>\n                      <ion-radio value=\"Não questionado\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n          </div>\n\n          <div *ngIf=\"fGroup.value.linfonodos_dor == 'sim'\">\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Detalhar a dor:</ion-label>\n              <ion-textarea formControlName=\"linfonodos_descricao_dor\"></ion-textarea>\n            </ion-item>\n          </div>\n\n\n\n          <ion-item lines=\"none\" class=\"ion-padding-top\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Adenomegalia?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n\n          <ion-radio-group formControlName=\"linfonodos_adenomegalia\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <div *ngIf=\"fGroup.value.linfonodos_adenomegalia == 'sim'\">\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Localização:</ion-label>\n              <ion-textarea formControlName=\"linfonodos_localizacao\"></ion-textarea>\n              <!--Falta a variável de presença-->\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Tamanho:</ion-label>\n              <ion-select formControlName=\"linfonodos_tamanho\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Mobilidade:</ion-label>\n              <ion-select formControlName=\"linfonodos_mobilidade\">\n                <ion-select-option value=\"ia\">Imóvel/Aderido</ion-select-option>\n                <ion-select-option value=\"movel\">Móvel</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Consistência:</ion-label>\n              <ion-select formControlName=\"linfonodos_consistencia\">\n                <ion-select-option value=\"elastica\">Elástica</ion-select-option>\n                <ion-select-option value=\"movel\">Fibroelástica</ion-select-option>\n                <ion-select-option value=\"movel\">Dura</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Sensibilidade:</ion-label>\n              <ion-select formControlName=\"linfonodos_sensibilidade\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Alterações da Pele:</ion-label>\n              <ion-textarea formControlName=\"linfonodos_alteracoes_pele\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Volume:</ion-label>\n              <ion-select formControlName=\"linfonodos_volume\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Textura:</ion-label>\n              <ion-textarea formControlName=\"linfonodos_textura\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Quantidade:</ion-label>\n              <ion-textarea formControlName=\"linfonodos_quantidade\"></ion-textarea>\n            </ion-item>\n          </div>\n\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Perfusão capilar</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Selecione a opção:</ion-label>\n            <ion-select formControlName=\"perfusao_capilar_tipo\">\n              <ion-select-option value=\"elastica\">Normal</ion-select-option>\n              <ion-select-option value=\"movel\">Lentificada</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n\n          <!--Exibir se a opção Lentificada for selecionada-->\n\n          <ion-item *ngIf=\"fGroup.value.perfusao_capilar_tipo == 'movel'\">\n            <ion-label position=\"floating\"><span>*</span> Quanto tempo:</ion-label>\n            <ion-textarea formControlName=\"perfusao_capilar_lentificada_tempo\">\n            </ion-textarea>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <h5 class=\"ion-text-center\"><strong>Ectoscopia última página</strong></h5>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/ectoscopia/ect03/ect03.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect03/ect03.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nspan {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n.ion-label {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9lY3Rvc2NvcGlhL2VjdDAzL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGVjdG9zY29waWFcXGVjdDAzXFxlY3QwMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUVJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vZWN0b3Njb3BpYS9lY3QwMy9lY3QwMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5zcGFue1xyXG5cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJvdHRvbVRhYntcclxuICAgIG1hcmdpbi1ib3R0b206ICAyMCU7XHJcbn1cclxuLmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/novo/ectoscopia/ect03/ect03.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect03/ect03.page.ts ***!
  \*****************************************************/
/*! exports provided: Ect03Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ect03Page", function() { return Ect03Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



// Import das das bibliotecas para validação das entradas

var Ect03Page = /** @class */ (function () {
    function Ect03Page(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.fGroup = this.fBuilder.group({
            cacifo_presenca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cacifo_detalhe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_consistencia: [''],
            edema_temperatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_temperatura_detalhe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            ectoscopia_outras_observacoes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_presenca: [''],
            edema_descricao_edema: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_detalhes_consistencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_detalhes_dor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_detalhes_intensidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_detalhes_localizacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_dor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_intensidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            edema_localizacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_presenca: [''],
            linfonodos_adenomegalia: [''],
            linfonodos_alteracoes_pele: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_consistencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_descricao_dor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_dor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_localizacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_mobilidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_quantidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_sensibilidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_tamanho: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_textura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            linfonodos_volume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            perfusao_capilar_lentificada_tempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            perfusao_capilar_tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    Ect03Page.prototype.ngOnInit = function () {
    };
    Ect03Page.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Ectoscopiam Part3', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(1) > -1) {
            this.identService.allObject.isda.ectoscopia = Object.assign(this.identService.allObject.isda.ectoscopia, this.fGroup.value);
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.ectoscopia);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            this.identService.allObject.isda.ectoscopia = Object.assign(this.identService.allObject.isda.ectoscopia, this.fGroup.value);
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.ectoscopia);
            this.identService.verifica.push(8);
            console.log(this.identService.verifica);
        }
    };
    Ect03Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ect03',
            template: __webpack_require__(/*! ./ect03.page.html */ "./src/app/novo/ectoscopia/ect03/ect03.page.html"),
            styles: [__webpack_require__(/*! ./ect03.page.scss */ "./src/app/novo/ectoscopia/ect03/ect03.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], Ect03Page);
    return Ect03Page;
}());



/***/ })

}]);
//# sourceMappingURL=ectoscopia-ect03-ect03-module.js.map