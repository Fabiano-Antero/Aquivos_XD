(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identificacao-identificacao-module"],{

/***/ "./src/app/novo/identificacao/identificacao.module.ts":
/*!************************************************************!*\
  !*** ./src/app/novo/identificacao/identificacao.module.ts ***!
  \************************************************************/
/*! exports provided: IdentificacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificacaoPageModule", function() { return IdentificacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _identificacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identificacao.page */ "./src/app/novo/identificacao/identificacao.page.ts");







var IdentificacaoPageModule = /** @class */ (function () {
    function IdentificacaoPageModule() {
    }
    IdentificacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _identificacao_page__WEBPACK_IMPORTED_MODULE_6__["IdentificacaoPage"] }])
            ],
            declarations: [_identificacao_page__WEBPACK_IMPORTED_MODULE_6__["IdentificacaoPage"]],
        })
    ], IdentificacaoPageModule);
    return IdentificacaoPageModule;
}());



/***/ }),

/***/ "./src/app/novo/identificacao/identificacao.page.html":
/*!************************************************************!*\
  !*** ./src/app/novo/identificacao/identificacao.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"fGroup\">\n\n    <ion-card color=\"light\">\n      <img src=\"../../../assets/img/id.jpg\" />\n      <ion-card-header>\n\n        <ion-card-title><span>Identificação</span></ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Nome:</ion-label>\n            <ion-input type=\"text\" formControlName=\"nome\">\n            </ion-input>\n          </ion-item>\n          <div *ngIf=\"fGroup.controls.nome.errors\">\n            <p *ngIf=\"fGroup.controls.nome.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.nome.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 50 caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Idade:</ion-label>\n            <ion-input type=\"number\" formControlName=\"idade\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.idade.errors\">\n            <p *ngIf=\"fGroup.controls.idade.errors.max\" class=\"ion-padding-start \">O valor máximo é de 3 digitos!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Cútis:</ion-label>\n            <ion-select formControlName=\"cor\">\n              <ion-select-option value=\"branca\">Branca</ion-select-option>\n              <ion-select-option value=\"negra\">Negra</ion-select-option>\n              <ion-select-option value=\"parda\">Parda</ion-select-option>\n              <ion-select-option value=\"amarela\">Amarela</ion-select-option>\n              <ion-select-option value=\"indigena\">Indígena</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Esta civil:</ion-label>\n            <ion-select formControlName=\"estado_civil\">\n              <ion-select-option value=\"solteiro\">Solteiro(a)</ion-select-option>\n              <ion-select-option value=\"casado\">Casado(a)</ion-select-option>\n              <ion-select-option value=\"divorciado\">Divorciado(a)</ion-select-option>\n              <ion-select-option value=\"viuvo\">Viúvo(a)</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Genero:</ion-label>\n            <ion-select formControlName=\"sexo\">\n              <ion-select-option value=\"feminino\">Feminino</ion-select-option>\n              <ion-select-option value=\"masculino\">Masculino</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Orientação Sexual:</ion-label>\n            <ion-select formControlName=\"posicionamento_sexual\">\n              <ion-select-option value=\"heterosexual\">Heterosexual</ion-select-option>\n              <ion-select-option value=\"Homesexual\">Homesexual</ion-select-option>\n              <ion-select-option value=\"bisexual\">Bisexual</ion-select-option>\n              <ion-select-option value=\"outros\">Outros</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Nacionalidade:</ion-label>\n            <ion-input type=\"text\" formControlName=\"nacionalidade\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"fGroup.controls.nacionalidade.errors\">\n            <p *ngIf=\"fGroup.controls.nacionalidade.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de\n              caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.nacionalidade.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 25\n              caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Religião:</ion-label>\n            <ion-input type=\"text\" formControlName=\"religiao\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.religiao.errors\">\n            <p *ngIf=\"fGroup.controls.religiao.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.religiao.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 25\n              caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Profissão:</ion-label>\n            <ion-input type=\"text\" formControlName=\"profissao\"></ion-input>\n          </ion-item>\n\n\n          <div *ngIf=\"fGroup.controls.profissao.errors\">\n            <p *ngIf=\"fGroup.controls.profissao.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.profissao.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 25\n              caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Enfermaria:</ion-label>\n            <ion-input type=\"text\" formControlName=\"enfermaria\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.enfermaria.errors\">\n\n            <p *ngIf=\"fGroup.controls.enfermaria.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres\n              é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.enfermaria.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 50\n              caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Leito:</ion-label>\n            <ion-input type=\"text\" formControlName=\"leito\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.leito.errors\">\n            <p *ngIf=\"fGroup.controls.leito.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.leito.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 50 caracteres\n              foi excedido!</p>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Hora de início:</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY H:mm\" formControlName=\"hora_inicio\">\n            </ion-datetime>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n\n    <ion-card color=\"light\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center\">Queixa Principal? </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label></ion-label>\n            <ion-input formControlName=\"queixa_principal\" placeholder=\"Descreva!\"></ion-input>\n          </ion-item>\n\n          <div *ngIf=\"fGroup.controls.queixa_principal.errors\">\n            <p *ngIf=\"fGroup.controls.queixa_principal.errors.required\" class=\"ion-padding-start \">Campo obrigatóri!</p>\n\n          </div>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  <ion-card class=\"light\" class=\"bottomTab\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p>Os campos marcados com asterisco (*) são obrigatórios, lembre-se de preenchelos ou não poderá concluir a\n              anamnese.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/identificacao/identificacao.page.scss":
/*!************************************************************!*\
  !*** ./src/app/novo/identificacao/identificacao.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: red;\n  font-size: 10px; }\n\nstrong {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9pZGVudGlmaWNhY2FvL0M6XFxVc2Vyc1xcZmFiaWFcXERvY3VtZW50c1xcYXBwMjAxOV8xX2FuYW1uZXNlX2RpZ2l0YWwvc3JjXFxhcHBcXG5vdm9cXGlkZW50aWZpY2FjYW9cXGlkZW50aWZpY2FjYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vaWRlbnRpZmljYWNhby9pZGVudGlmaWNhY2FvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnN0cm9uZ3tcclxuXHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5ib3R0b21UYWJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAgMjAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/novo/identificacao/identificacao.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/novo/identificacao/identificacao.page.ts ***!
  \**********************************************************/
/*! exports provided: IdentificacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificacaoPage", function() { return IdentificacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../novo.page */ "./src/app/novo/novo.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




/*
 Import das das bibliotecas para validação das entradas
*/

/*
Importe da biblioteca para o alert
*/
var IdentificacaoPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function IdentificacaoPage(fBuilder, identService, Principal) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        this.Principal = Principal;
        // Faz a validação dos campos
        this.fGroup = this.fBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)
                ])],
            idade: [Number, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(999)
                ])],
            cor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            estado_civil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            posicionamento_sexual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            nacionalidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)
                ])],
            religiao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)
                ])],
            profissao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)
                ])],
            enfermaria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)
                ])],
            leito: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)
                ])],
            hora_inicio: [Date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            queixa_principal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])]
        });
    }
    IdentificacaoPage.prototype.ngOnInit = function () {
    };
    IdentificacaoPage.prototype.ionViewWillLeave = function () {
        if (!this.fGroup.valid) {
            this.identService.alerta('Identificação do Paciente', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
            // verificação de página
            this.identService.validacao = this.fGroup.valid;
        }
        else if (this.identService.verifica.indexOf(1) > -1) {
            // evia para o big json
            this.identService.allObject.paciente = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.paciente);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            // evia para o big json
            this.identService.allObject.paciente = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.paciente);
            this.identService.verifica.push(1);
            console.log(this.identService.verifica);
        }
        // captura o nome do pacienta para setar na titulo
        this.Principal.paciente.nome = this.fGroup.value.nome;
    };
    IdentificacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identificacao',
            template: __webpack_require__(/*! ./identificacao.page.html */ "./src/app/novo/identificacao/identificacao.page.html"),
            styles: [__webpack_require__(/*! ./identificacao.page.scss */ "./src/app/novo/identificacao/identificacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"],
            _novo_page__WEBPACK_IMPORTED_MODULE_3__["NovoPage"]])
    ], IdentificacaoPage);
    return IdentificacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=identificacao-identificacao-module.js.map