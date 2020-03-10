(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ectoscopia-ect02-ect02-module"],{

/***/ "./src/app/novo/ectoscopia/ect02/ect02.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect02/ect02.module.ts ***!
  \*******************************************************/
/*! exports provided: Ect02PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ect02PageModule", function() { return Ect02PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ect02_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ect02.page */ "./src/app/novo/ectoscopia/ect02/ect02.page.ts");







var routes = [
    {
        path: '',
        component: _ect02_page__WEBPACK_IMPORTED_MODULE_6__["Ect02Page"]
    }
];
var Ect02PageModule = /** @class */ (function () {
    function Ect02PageModule() {
    }
    Ect02PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ect02_page__WEBPACK_IMPORTED_MODULE_6__["Ect02Page"]]
        })
    ], Ect02PageModule);
    return Ect02PageModule;
}());



/***/ }),

/***/ "./src/app/novo/ectoscopia/ect02/ect02.page.html":
/*!*******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect02/ect02.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\" class=\"bottomTab\">\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Faneros</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-list lines=\"full\">\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Cabelos</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Tipo de implantação:</ion-label>\n            <ion-input formControlName=\"faneros_cabelos_tipos_implatacao\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Distribuição:</ion-label>\n            <ion-input formControlName=\"faneros_cabelos_distribuicao\"></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Quantidade:</ion-label>\n            <ion-input formControlName=\"faneros_cabelos_quantidade\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Coloração:</ion-label>\n            <ion-input formControlName=\"faneros_cabelos_coloracao\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Brilho:</ion-label>\n            <ion-input formControlName=\"faneros_cabelos_brilho\"></ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--cabeçalho-->\n                <ion-col>\n                  <ion-text>Unhas</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Formato:</ion-label>\n            <ion-input formControlName=\"faneros_unhas_formato\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Cor:</ion-label>\n            <ion-input formControlName=\"faneros_unhas_cor\"></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Resistência:</ion-label>\n            <ion-input formControlName=\"faneros_unhas_resistencia\"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Pele</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-list lines=\"full\">\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Coloração:</ion-label>\n            <ion-input formControlName=\"pele_coloracao\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Continuidade:</ion-label>\n            <ion-input formControlName=\"pele_continuidade\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Umidade:</ion-label>\n            <ion-input formControlName=\"pele_umidade\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label position=\"floating\"><span>*</span> Temperatura:</ion-label>\n              <ion-input formControlName=\"pele_temperatura\"></ion-input>\n            </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Textura:</ion-label>\n            <ion-input formControlName=\"pele_textura\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Espessura:</ion-label>\n            <ion-input formControlName=\"pele_espessura\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Elasticidade:</ion-label>\n            <ion-input formControlName=\"pele_elasticidade\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Mobilidade:</ion-label>\n            <ion-input formControlName=\"pele_mobilidade\"></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Turgor:</ion-label>\n            <ion-input formControlName=\"pele_turgor\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Sensibilidade:</ion-label>\n            <ion-input formControlName=\"pele_sensibilidade\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Lesões elementares:</ion-label>\n            <ion-input formControlName=\"pele_lesoes_elementares\"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Mucosas</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Apresenta Lesões?</ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n\n          <ion-radio-group formControlName=\"mucosas_lesoes\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n          <!-- Exibir normal -->\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Nivél de Coloração:</ion-label>\n            <ion-select  formControlName=\"mucosas_coloracao\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><span>*</span> Nivél de hidratação:</ion-label>\n            <ion-select  formControlName=\"mucosas_hidratacao\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color=\"light\">\n      <ion-card-header color=\"acard\">\n        <ion-card-title class=\"ion-text-center\">\n          <h5><strong>Tecido celular subcutâneo</strong></h5>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list lines=\"full\">\n\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Espasticidade?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-radio-group formControlName=\"tecido_celular_subcutaneo_espasticidade\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Flacidez?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n\n          <ion-radio-group formControlName=\"tecido_celular_subcutaneo_flacidez\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n          <ion-item lines=\"none\" color=\"asubcard\">\n            <ion-grid>\n              <ion-row>\n\n                <!--Cabeçalho-->\n                <ion-col>\n                  <ion-text>Espessura?</ion-text>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n\n          <ion-radio-group formControlName=\"tecido_celular_subcutaneo_espessura\">\n            <ion-grid>\n              <ion-row class=\"ion-nowrap\">\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Sim</ion-text>\n                    <ion-radio value=\"sim\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>Não</ion-text>\n                    <ion-radio value=\"não\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-text>NQN</ion-text>\n                    <ion-radio value=\"Não questionado\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n\n\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <h5 class=\"ion-text-center\"><strong>Ectoscopia página 2</strong></h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/ectoscopia']\">Anterior</ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"dark\" expand=\"block\"  [routerLink]=\"['/novo/ect03']\">Próximo</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/ectoscopia/ect02/ect02.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect02/ect02.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nspan {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n.ion-label {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9lY3Rvc2NvcGlhL2VjdDAyL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGVjdG9zY29waWFcXGVjdDAyXFxlY3QwMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUVJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vZWN0b3Njb3BpYS9lY3QwMi9lY3QwMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5zcGFue1xyXG5cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJvdHRvbVRhYntcclxuICAgIG1hcmdpbi1ib3R0b206ICAyMCU7XHJcbn1cclxuLmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/novo/ectoscopia/ect02/ect02.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/novo/ectoscopia/ect02/ect02.page.ts ***!
  \*****************************************************/
/*! exports provided: Ect02Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ect02Page", function() { return Ect02Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



// Import das das bibliotecas para validação das entradas

var Ect02Page = /** @class */ (function () {
    function Ect02Page(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.fGroup = this.fBuilder.group({
            faneros_cabelos_brilho: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_cabelos_coloracao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_cabelos_distribuicao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_cabelos_quantidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_cabelos_tipos_implatacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_unhas_cor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_unhas_formato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            faneros_unhas_resistencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_coloracao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_continuidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_elasticidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_espessura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_lesoes_elementares: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_mobilidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_sensibilidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_temperatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_textura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_turgor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pele_umidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            mucosas_coloracao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            mucosas_hidratacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            mucosas_lesoes: [''],
            tecido_celular_subcutaneo_espessura: [''],
            tecido_celular_subcutaneo_espasticidade: [''],
            tecido_celular_subcutaneo_flacidez: ['']
        });
    }
    Ect02Page.prototype.ngOnInit = function () {
    };
    Ect02Page.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Ectoscopiam Part2', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(7) > -1) {
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
            this.identService.verifica.push(7);
            console.log(this.identService.verifica);
        }
    };
    Ect02Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ect02',
            template: __webpack_require__(/*! ./ect02.page.html */ "./src/app/novo/ectoscopia/ect02/ect02.page.html"),
            styles: [__webpack_require__(/*! ./ect02.page.scss */ "./src/app/novo/ectoscopia/ect02/ect02.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], Ect02Page);
    return Ect02Page;
}());



/***/ })

}]);
//# sourceMappingURL=ectoscopia-ect02-ect02-module.js.map