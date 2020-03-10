(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exame-cardiovascular-exame-cardiovascular-module"],{

/***/ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/novo/exame-cardiovascular/exame-cardiovascular.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExameCardiovascularPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExameCardiovascularPageModule", function() { return ExameCardiovascularPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exame_cardiovascular_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exame-cardiovascular.page */ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.ts");







var routes = [
    {
        path: '',
        component: _exame_cardiovascular_page__WEBPACK_IMPORTED_MODULE_6__["ExameCardiovascularPage"]
    }
];
var ExameCardiovascularPageModule = /** @class */ (function () {
    function ExameCardiovascularPageModule() {
    }
    ExameCardiovascularPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exame_cardiovascular_page__WEBPACK_IMPORTED_MODULE_6__["ExameCardiovascularPage"]]
        })
    ], ExameCardiovascularPageModule);
    return ExameCardiovascularPageModule;
}());



/***/ }),

/***/ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Inspeção e Palpação</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <!--Lesões elementares-->\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Lesões elementares:</ion-label>\n            <ion-input formControlName=\"cardiovascular_inspecaoepalpacao_lesoes_elementares\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.cardiovascular_inspecaoepalpacao_lesoes_elementares.errors\">\n            <p *ngIf=\"fGroup.controls.cardiovascular_inspecaoepalpacao_lesoes_elementares.errors.maxlength\"\n              class=\"ion-padding-start \">O valor máximo de 250 caracteres\n              foi excedido!</p>\n          </div>\n\n          <!--Presença Abaulamento-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Apresenta abaulamentos?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"cardiovascular_inspecaoepalpacao_presenca_de_abaulamento\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <!--Turgencia jugular-->\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Turgência jugular</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"cardiovascular_inspecaoepalpacao_turgencia_jugular\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <!--Fremito cardiovascular-->\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Frêmito Cardiovascular:</ion-label>\n            <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor\">\n              <ion-select-option value=\"Presente\">Presente</ion-select-option>\n              <ion-select-option value=\"Ausente\">Ausente</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n\n\n          <!--caso presente-->\n          <div *ngIf=\"fGroup.value.cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor == 'Presente'\">\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span>Localização</ion-label>\n              <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_fremitocardiovascular_localizacao\">\n                <ion-select-option value=\"Foco-Aortico\">Foco Aórtico</ion-select-option>\n                <ion-select-option value=\"Foco-Pulmonar\">Foco Pulmonar</ion-select-option>\n                <ion-select-option value=\"Foco-Aortico-Acessorio\">Foco Aórtico Acessório</ion-select-option>\n                <ion-select-option value=\"Foco-Tricuspide\">Foco Tricúspide</ion-select-option>\n                <ion-select-option value=\"Foco-Mitral\">Foco Mitral</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span>Localização detalhe</ion-label>\n              <ion-input formControlName=\"cardiovascular_inspecaoepalpacao_localizacao_fremito\">\n              </ion-input>\n            </ion-item>\n\n            <div *ngIf=\"fGroup.controls.cardiovascular_inspecaoepalpacao_localizacao_fremito.errors\">\n              <p *ngIf=\"fGroup.controls.cardiovascular_inspecaoepalpacao_localizacao_fremito.errors.maxlength\"\n                class=\"ion-padding-start \">O valor máximo de 250 caracteres\n                foi excedido!</p>\n            </div>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span>Situação do ciclo cardiaco</ion-label>\n              <ion-input\n                formControlName=\"cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco\">\n              </ion-input>\n            </ion-item>\n            <div *ngIf=\"fGroup.controls.cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco.errors\">\n              <p *ngIf=\"fGroup.controls.cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco.errors.maxlength\"\n                class=\"ion-padding-start \">O valor máximo de 250 caracteres\n                foi excedido!</p>\n            </div>\n\n            <ion-item>\n              <ion-label position=\"floating\"><span>*</span>Intencidade</ion-label>\n              <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_fremitocardiovascular_intensidade\">\n                <ion-select-option value=1>1</ion-select-option>\n                <ion-select-option value=2>2</ion-select-option>\n                <ion-select-option value=3>3</ion-select-option>\n                <ion-select-option value=4>4</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n\n          <!--Situação no ciclo cardiaco\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Situação no Ciclo Cardiaco:</ion-label>\n            <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_situacao_do_ciclo\">\n              <ion-select-option value=\"Sístolico\">Sístolico</ion-select-option>\n              <ion-select-option value=\"Diastólico\">Diastólico</ion-select-option>\n            </ion-select>\n          </ion-item>\n          -->\n          <!--Intensidade-->\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Intensidade:</ion-label>\n            <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_intensidade\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!--Polpas digitais-->\n\n\n          <!--caso presente-->\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Polpas Digitais:</ion-label>\n            <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_polpas_digitais\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Tipo:</ion-label>\n            <ion-select formControlName=\"cardiovascular_inspecaoepalpacao_tipo_polpa_digital\">\n              <ion-select-option value=\"Propulsivo\">Propulsivo</ion-select-option>\n              <ion-select-option value=\"Difuso\">Difuso</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!--Ausculta cardiaca-->\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <!--card-->\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Ausculta Cardiaca</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <!--Frequencia Cardiaca-->\n\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Frequencia Cardiaca:</ion-label>\n            <ion-select formControlName=\"cardiovascular_auscultacardiaca_frequencia_cardiaca\">\n              <ion-select-option value=\"Taquicardio\">Taquicardio</ion-select-option>\n              <ion-select-option value=\"Bradicardio\">Bradicardio</ion-select-option>\n              <ion-select-option value=\"Eucardio\">Eucardio</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!--Ritmo Cardiaco-->\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Ritmos Cardiacos:</ion-label>\n            <ion-select formControlName=\"cardiovascular_auscultacardiaca_ritmo_cardiaco\">\n              <ion-select-option value=\"2 Tempos\">2 Tempos</ion-select-option>\n              <ion-select-option value=\"3 Tempos\">3 Tempos</ion-select-option>\n              <ion-select-option value=\"4 Tempos\">4 Tempos</ion-select-option>\n              <ion-select-option value=\"Regular\">Regular</ion-select-option>\n              <ion-select-option value=\"Irregular\">Irregular</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!--Intensicade do som-->\n\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Intensidade do Som:</ion-label>\n            <ion-select formControlName=\"cardiovascular_auscultacardiaca_intensidade_do_som\">\n              <ion-select-option value=\"Normofonetico\">Normofonético</ion-select-option>\n              <ion-select-option value=\"Hiperfonetico\">Hiperfonético</ion-select-option>\n              <ion-select-option value=\"Hipofonetico\">Hipofonético</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\">\n\n      <!--card-->\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Sopro Cardiaco</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <!--Foco-->\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Foco Cardiaco:</ion-label>\n            <ion-select formControlName=\"cardiovascular_soprocardiaco_foco\">\n              <ion-select-option value=\"Pulmonar\">Pulmonar</ion-select-option>\n              <ion-select-option value=\"Aortico\">Aórtico</ion-select-option>\n              <ion-select-option value=\"Aortico-Acessorio\">Aórtico Acessório</ion-select-option>\n              <ion-select-option value=\"Tricuspide\">Tricúspide</ion-select-option>\n              <ion-select-option value=\"Mitral\">Mitral</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!--Intensidade-->\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Intensidade Cardiaca:</ion-label>\n            <ion-select formControlName=\"cardiovascular_soprocardiaco_intensidade\">\n              <ion-select-option value=\"+\">1</ion-select-option>\n              <ion-select-option value=\"++\">2</ion-select-option>\n              <ion-select-option value=\"+++\">3</ion-select-option>\n              <ion-select-option value=\"+++\">4</ion-select-option>\n\n            </ion-select>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span>Ciclo Cardiaco:</ion-label>\n            <ion-select formControlName=\"cardiovascular_soprocardiaco_relacao_ciclo_cardiaco\">\n              <ion-select-option value=\"Sístolico\">Sístolico</ion-select-option>\n              <ion-select-option value=\"Diastólico\">Diastólico</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!--card-->\n\n    <ion-card>\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Ausculta Carotídea</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"full\">\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Presença de Sopro</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"cardiovascular_auscultacarotidea_presenca_de_sopro\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nspan {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n.ion-label {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9leGFtZS1jYXJkaW92YXNjdWxhci9DOlxcVXNlcnNcXGZhYmlhXFxEb2N1bWVudHNcXGFwcDIwMTlfMV9hbmFtbmVzZV9kaWdpdGFsL3NyY1xcYXBwXFxub3ZvXFxleGFtZS1jYXJkaW92YXNjdWxhclxcZXhhbWUtY2FyZGlvdmFzY3VsYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3ZvL2V4YW1lLWNhcmRpb3Zhc2N1bGFyL2V4YW1lLWNhcmRpb3Zhc2N1bGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5zcGFue1xuXG4gICAgY29sb3I6IHJlZDtcbn1cbi5ib3R0b21UYWJ7XG4gICAgbWFyZ2luLWJvdHRvbTogIDIwJTtcbn1cbi5pb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.ts ***!
  \************************************************************************/
/*! exports provided: ExameCardiovascularPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExameCardiovascularPage", function() { return ExameCardiovascularPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ExameCardiovascularPage = /** @class */ (function () {
    function ExameCardiovascularPage(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.fGroup = this.fBuilder.group({
            cardiovascular_inspecaoepalpacao_tipo_polpa_digital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_presenca_de_abaulamento: [''],
            cardiovascular_inspecaoepalpacao_turgencia_jugular: [''],
            cardiovascular_inspecaoepalpacao_lesoes_elementares: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            cardiovascular_inspecaoepalpacao_situacao_do_ciclo: ['Remover esse campo na api', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_intensidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_localizacao_fremito: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_polpas_digitais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_fremitocardiovascular_localizacao: [''],
            cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_inspecaoepalpacao_fremitocardiovascular_intensidade: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_auscultacardiaca_ritmo_cardiaco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_auscultacardiaca_intensidade_do_som: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_auscultacardiaca_frequencia_cardiaca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_soprocardiaco_foco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_soprocardiaco_intensidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_soprocardiaco_relacao_ciclo_cardiaco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cardiovascular_auscultacarotidea_presenca_de_sopro: [''],
        });
    }
    ExameCardiovascularPage.prototype.setOcultValidate = function () {
        var ciflContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_localizacao');
        var cilfContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_localizacao_fremito');
        var cifsccContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco');
        var cifiContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_intensidade');
        this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor').valueChanges.subscribe(function (fcifvPresente) {
            if (fcifvPresente === 'Presente') {
                ciflContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                cilfContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                cifsccContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
                cifiContol.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]);
            }
            else {
                ciflContol.clearValidators();
                cilfContol.clearValidators();
                cifsccContol.clearValidators();
                cifiContol.clearValidators();
            }
            ciflContol.updateValueAndValidity();
            cilfContol.updateValueAndValidity();
            cifsccContol.updateValueAndValidity();
            cifiContol.updateValueAndValidity();
        });
    };
    ExameCardiovascularPage.prototype.ngOnInit = function () {
        this.setOcultValidate();
    };
    ExameCardiovascularPage.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Exame Cardiovascular', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(9) > -1) {
            // evia para o big json
            this.identService.allObject.exame_fisico.cardiovascular = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.exame_fisico.cardiovascular);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            // evia para o big json
            this.identService.allObject.exame_fisico.cardiovascular = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.exame_fisico.cardiovascular);
            this.identService.verifica.push(9);
            console.log(this.identService.verifica);
        }
    };
    ExameCardiovascularPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exame-cardiovascular',
            template: __webpack_require__(/*! ./exame-cardiovascular.page.html */ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.html"),
            styles: [__webpack_require__(/*! ./exame-cardiovascular.page.scss */ "./src/app/novo/exame-cardiovascular/exame-cardiovascular.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], ExameCardiovascularPage);
    return ExameCardiovascularPage;
}());



/***/ })

}]);
//# sourceMappingURL=exame-cardiovascular-exame-cardiovascular-module.js.map