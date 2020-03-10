(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ectoscopia-ectoscopia-module"],{

/***/ "./src/app/novo/ectoscopia/ectoscopia.module.ts":
/*!******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ectoscopia.module.ts ***!
  \******************************************************/
/*! exports provided: EctoscopiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EctoscopiaPageModule", function() { return EctoscopiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ectoscopia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ectoscopia.page */ "./src/app/novo/ectoscopia/ectoscopia.page.ts");







var routes = [
    {
        path: '',
        component: _ectoscopia_page__WEBPACK_IMPORTED_MODULE_6__["EctoscopiaPage"]
    }
];
var EctoscopiaPageModule = /** @class */ (function () {
    function EctoscopiaPageModule() {
    }
    EctoscopiaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ectoscopia_page__WEBPACK_IMPORTED_MODULE_6__["EctoscopiaPage"]]
        })
    ], EctoscopiaPageModule);
    return EctoscopiaPageModule;
}());



/***/ }),

/***/ "./src/app/novo/ectoscopia/ectoscopia.page.html":
/*!******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ectoscopia.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Estado geral</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Qual é o estado do paciente?</ion-label>\n            <ion-select formControlName=\"estado_geral\">\n              <ion-select-option value=\"beg\">Beg</ion-select-option>\n              <ion-select-option value=\"reg\">Reg</ion-select-option>\n              <ion-select-option value=\"meg\">Meg</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Nível de conciência</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Lucidez:</ion-label>\n            <ion-select formControlName=\"nivel_consciencia_lucidez\">\n              <ion-select-option value=\"Lúcido\">Lúcido</ion-select-option>\n              <ion-select-option value=\"Não lúcido\">Não Lúcido</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Orientação:</ion-label>\n            <ion-select formControlName=\"nivel_consciencia_orientacao\">\n              <ion-select-option value=\"Orientado\">Orientado</ion-select-option>\n              <ion-select-option value=\"Não Orientado\">Não orientado</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Interações de fala e linguagem</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Apresenta?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"interacoes_fala_linguagem\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n\n\n          <!-- Este campo se deve se exibido se a opão selecionada for sim-->\n\n          <ion-item *ngIf=\"fGroup.value.interacoes_fala_linguagem == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span> Selecione as opções:</ion-label>\n            <ion-select multiple formControlName=\"interacoes_fala_linguagem_detalhes\">\n              <ion-select-option value=\"disfonia\">Disfonia</ion-select-option>\n              <ion-select-option value=\"afonia\">Afonia</ion-select-option>\n              <ion-select-option value=\"dislalia\">Dislalia</ion-select-option>\n              <ion-select-option value=\"disartria\">Disartria</ion-select-option>\n              <ion-select-option value=\"disfasia\">Disfasia</ion-select-option>\n              <ion-select-option value=\"disgrafia\">Disgrafia</ion-select-option>\n              <ion-select-option value=\"dislexia\">Dislexia</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Estado nutricional</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Qual o estado nutricional?</ion-label>\n            <ion-select formControlName=\"estado_nutricional_estado\">\n              <ion-select-option value=\"normal\">Normal/Bem nutrido</ion-select-option>\n              <ion-select-option value=\"obeso\">Obeso</ion-select-option>\n              <ion-select-option value=\"magrelo\">Emagrecido</ion-select-option>\n              <ion-select-option value=\"caquetico\">Caquético</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Quanto?</ion-label>\n            <ion-select formControlName=\"estado_nutricional_quantidade\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Estado de hidratação</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Qual o estado hidratação?</ion-label>\n            <ion-select formControlName=\"estado_hidratacao_tipo\">\n              <ion-select-option value=\"bhidratado\">Bem hidratado</ion-select-option>\n              <ion-select-option value=\"phidratado\">Pouco hidratado</ion-select-option>\n              <ion-select-option value=\"mhidratado\">Mal hidratado</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Quanto?</ion-label>\n            <ion-select formControlName=\"estado_hidratacao_quantificacao\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Ácies</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Selecione as opções:</ion-label>\n            <ion-select multiple formControlName=\"acies\">\n              <ion-select-option value=\"incaracteristica\">Incaracterística</ion-select-option>\n              <ion-select-option value=\"basedowniana\">Basedowniana</ion-select-option>\n              <ion-select-option value=\"mixedematosa\">Mixedematosa</ion-select-option>\n              <ion-select-option value=\"esclerodermica\">Esclerodérmica</ion-select-option>\n              <ion-select-option value=\"hipocratica\">Hipocrática</ion-select-option>\n              <ion-select-option value=\"renal\">Renal</ion-select-option>\n              <ion-select-option value=\"parkinsoniana\">Parkinsoniana</ion-select-option>\n              <ion-select-option value=\"acromegoide\">Acromegóide</ion-select-option>\n              <ion-select-option value=\"cushingoide\">Cushingóide</ion-select-option>\n              <ion-select-option value=\"leonina\">Leonina</ion-select-option>\n              <ion-select-option value=\"adenoidiana\">Adenoidiana</ion-select-option>\n              <ion-select-option value=\"miastenica\">Miastênica</ion-select-option>\n              <ion-select-option value=\"depressiva\">Depressiva</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Interações de expressão facial</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Apresenta?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"interacoes_exp_facial\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n          <!-- Este campo se deve se exibido se a opção selecionada for sim-->\n\n          <ion-item class=\"ion-padding-top\" *ngIf=\"fGroup.value.interacoes_exp_facial == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span> Interações apresentadas:</ion-label>\n            <ion-select multiple formControlName=\"interacoes_exp_facial_detalhes\">\n              <ion-select-option value=\"anciedade\">Ansiedade</ion-select-option>\n              <ion-select-option value=\"medo\">Medo</ion-select-option>\n              <ion-select-option value=\"tristeza\">Tristeza</ion-select-option>\n              <ion-select-option value=\"alegria\">Alegria</ion-select-option>\n              <ion-select-option value=\"faciesalgicas\">Fácies álgicas</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Atitude e decúbito</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Selecione as opções:</ion-label>\n            <ion-select multiple formControlName=\"atitude_decubito\">\n              <ion-select-option value=\"ortopneia\">Ortopneia</ion-select-option>\n              <ion-select-option value=\"genupeitoral\">Genupeitoral</ion-select-option>\n              <ion-select-option value=\"cocoras\">Cócoras</ion-select-option>\n              <ion-select-option value=\"parkinsoniana\">parkinsonismo</ion-select-option>\n              <ion-select-option value=\"Dorsal\">Dorsal</ion-select-option>\n              <ion-select-option value=\"Vental\">Ventral</ion-select-option>\n              <ion-select-option value=\"ldireita\">Lateral direita</ion-select-option>\n              <ion-select-option value=\"lesquerda\">Lateral esquerda</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Postura e atitude</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Selecione as opções:</ion-label>\n            <ion-select multiple formControlName=\"postura_atitude\">\n              <ion-select-option value=\"normal\">Normal</ion-select-option>\n              <ion-select-option value=\"sofrimento\">Sofrível</ion-select-option>\n              <ion-select-option value=\"cifose\">Cifose</ion-select-option>\n              <ion-select-option value=\"escoliose\">Escoliose</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Movimentos involuntários</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Apresenta?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-radio-group formControlName=\"mov_involuntarios_presenca\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n          <!-- Este campo se deve se exibido se a opção selecionada for sim-->\n\n          <ion-item class=\"ion-padding-top\" *ngIf=\"fGroup.value.mov_involuntarios_presenca == 'sim'\">\n            <ion-label position=\"floating\"><span>*</span> Movimento apresentado:</ion-label>\n            <ion-select multiple formControlName=\"mov_involuntarios\">\n              <ion-select-option value=\"trenores\">Tremores</ion-select-option>\n              <ion-select-option value=\"coreia\">Coréia</ion-select-option>\n              <ion-select-option value=\"atenose\">Atenose</ion-select-option>\n              <ion-select-option value=\"Tiques\">Tiques</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!-- Este campo é ativado  ao mesmo tempo que o select após a opção sim ser selecionada no radio-->\n          <ion-item *ngIf=\"fGroup.value.mov_involuntarios_presenca == 'sim'\">\n            <ion-grid>\n              <ion-row>\n                <ion-col class=\"ion-padding-top\" size=\"12\">\n                  <ion-label position=\"floating\"><span>*</span> Detalhe a condição:</ion-label>\n                </ion-col>\n                <ion-col>\n                  <ion-textarea formControlName=\"mov_involuntarios_descricao\"></ion-textarea>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Biotipo</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Selecione as opções:</ion-label>\n            <ion-select multiple formControlName=\"biotipo\">\n              <ion-select-option value=\"brevilinio\">Brevilíneo</ion-select-option>\n              <ion-select-option value=\"mediolineo\">Mediolíneo</ion-select-option>\n              <ion-select-option value=\"longilineo\">Longilíneo</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <h5 class=\"ion-text-center\"><strong>Ectoscopia página 1</strong></h5>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"dark\" expand=\"block\" [routerLink]=\"['/novo/ect02']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/ectoscopia/ectoscopia.page.scss":
/*!******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ectoscopia.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nspan {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n.ion-label {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9lY3Rvc2NvcGlhL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGVjdG9zY29waWFcXGVjdG9zY29waWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3ZvL2VjdG9zY29waWEvZWN0b3Njb3BpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5zcGFue1xyXG5cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJvdHRvbVRhYntcclxuICAgIG1hcmdpbi1ib3R0b206ICAyMCU7XHJcbn1cclxuLmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/novo/ectoscopia/ectoscopia.page.ts":
/*!****************************************************!*\
  !*** ./src/app/novo/ectoscopia/ectoscopia.page.ts ***!
  \****************************************************/
/*! exports provided: EctoscopiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EctoscopiaPage", function() { return EctoscopiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



// Import das das bibliotecas para validação das entradas

var EctoscopiaPage = /** @class */ (function () {
    function EctoscopiaPage(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.fGroup = this.fBuilder.group({
            estado_geral: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            nivel_consciencia_lucidez: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            nivel_consciencia_orientacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            interacoes_exp_facial: [''],
            interacoes_fala_linguagem: [''],
            interacoes_fala_linguagem_detalhes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            interacoes_exp_facial_detalhes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            mov_involuntarios_presenca: [''],
            estado_hidratacao_quantificacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            estado_hidratacao_tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            estado_nutricional_estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            estado_nutricional_quantidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            acies: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            atitude_decubito: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            postura_atitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            mov_involuntarios: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            mov_involuntarios_descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            biotipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    // esse metodo atribui o valorde campo obrigatorio para quando os campos ocultros são ativados
    EctoscopiaPage.prototype.setOcultValidate = function () {
        var ifldContol = this.fGroup.get('interacoes_fala_linguagem_detalhes');
        var iefdContol = this.fGroup.get('interacoes_exp_facial_detalhes');
        var moviContol = this.fGroup.get('mov_involuntarios');
        var movidContol = this.fGroup.get('mov_involuntarios_descricao');
        this.fGroup.get('interacoes_fala_linguagem').valueChanges.subscribe(function (falalinGuagem) {
            if (falalinGuagem === 'sim') {
                ifldContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
            }
            else {
                ifldContol.clearValidators();
            }
            ifldContol.updateValueAndValidity();
        });
        this.fGroup.get('interacoes_exp_facial').valueChanges.subscribe(function (exprecoesFaciais) {
            if (exprecoesFaciais === 'sim') {
                iefdContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
            }
            else {
                iefdContol.clearValidators();
            }
            iefdContol.updateValueAndValidity();
        });
        this.fGroup.get('mov_involuntarios_presenca').valueChanges.subscribe(function (movInvPre) {
            if (movInvPre === 'sim') {
                moviContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                movidContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
            }
            else {
                moviContol.clearValidators();
                movidContol.clearValidators();
            }
            moviContol.updateValueAndValidity();
            movidContol.updateValueAndValidity();
        });
    };
    EctoscopiaPage.prototype.ngOnInit = function () {
        this.setOcultValidate();
    };
    // Metodo que envia os dados
    EctoscopiaPage.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Ectoscopiam Part1', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(6) > -1) {
            this.fGroup.value.acies = this.fGroup.value.acies.toString();
            this.fGroup.value.atitude_decubito = this.fGroup.value.atitude_decubito.toString();
            this.fGroup.value.postura_atitude = this.fGroup.value.postura_atitude.toString();
            this.fGroup.value.biotipo = this.fGroup.value.biotipo.toString();
            if (this.fGroup.value.interacoes_fala_linguagem_detalhes === null) {
                this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes;
            }
            else {
                this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes.toString();
            }
            if (this.fGroup.value.interacoes_exp_facial_detalhes === null) {
                this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes;
            }
            else {
                this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes.toString();
            }
            if (this.fGroup.value.mov_involuntarios === null) {
                this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios;
            }
            else {
                this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios.toString();
            }
            this.identService.allObject.isda.ectoscopia = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.ectoscopia);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            this.fGroup.value.acies = this.fGroup.value.acies.toString();
            this.fGroup.value.atitude_decubito = this.fGroup.value.atitude_decubito.toString();
            this.fGroup.value.postura_atitude = this.fGroup.value.postura_atitude.toString();
            this.fGroup.value.biotipo = this.fGroup.value.biotipo.toString();
            if (this.fGroup.value.interacoes_fala_linguagem_detalhes === null) {
                this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes;
            }
            else {
                this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes.toString();
            }
            if (this.fGroup.value.interacoes_exp_facial_detalhes === null) {
                this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes;
            }
            else {
                this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes.toString();
            }
            if (this.fGroup.value.mov_involuntarios === null) {
                this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios;
            }
            else {
                this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios.toString();
            }
            this.identService.allObject.isda.ectoscopia = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.isda.ectoscopia);
            this.identService.verifica.push(6);
            console.log(this.identService.verifica);
        }
    };
    EctoscopiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ectoscopia',
            template: __webpack_require__(/*! ./ectoscopia.page.html */ "./src/app/novo/ectoscopia/ectoscopia.page.html"),
            styles: [__webpack_require__(/*! ./ectoscopia.page.scss */ "./src/app/novo/ectoscopia/ectoscopia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], EctoscopiaPage);
    return EctoscopiaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ectoscopia-ectoscopia-module.js.map