(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aluno-aluno-module"],{

/***/ "./src/app/novo/aluno/aluno.module.ts":
/*!********************************************!*\
  !*** ./src/app/novo/aluno/aluno.module.ts ***!
  \********************************************/
/*! exports provided: AlunoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoPageModule", function() { return AlunoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _aluno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno.page */ "./src/app/novo/aluno/aluno.page.ts");







var AlunoPageModule = /** @class */ (function () {
    function AlunoPageModule() {
    }
    AlunoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _aluno_page__WEBPACK_IMPORTED_MODULE_6__["AlunoPage"] }])
            ],
            declarations: [_aluno_page__WEBPACK_IMPORTED_MODULE_6__["AlunoPage"]]
        })
    ], AlunoPageModule);
    return AlunoPageModule;
}());



/***/ }),

/***/ "./src/app/novo/aluno/aluno.page.html":
/*!********************************************!*\
  !*** ./src/app/novo/aluno/aluno.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-card class=\"light\">\n    <ion-card-header>\n      <ion-avatar>\n        <img src=\"../../../assets/img/friendship.png\">\n      </ion-avatar>\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>ID do aluno</ion-label>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <form [formGroup]=\"fGroup\">\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Nome completo:</ion-label>\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"fGroup.controls.nome.errors\">\n\n            <p *ngIf=\"fGroup.controls.nome.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.nome.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 50 caracteres\n              foi excedido!</p>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> E-mail:</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"fGroup.controls.email.errors\">\n            <p *ngIf=\"fGroup.controls.email.errors.pattern\" class=\"ion-padding-start \">E-mail inválido!</p>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Matrícula:</ion-label>\n            <ion-input type=\"number\" formControlName=\"matricula\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"fGroup.controls.matricula.errors\">\n            <p *ngIf=\"fGroup.controls.matricula.errors.min\" class=\"ion-padding-start \">Valo mínimo é de digítos 10!</p>\n            <p *ngIf=\"fGroup.controls.matricula.errors.max\" class=\"ion-padding-start \">O valor máximo é de digítos 10!\n            </p>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><strong>*</strong> Grupo:</ion-label>\n            <ion-input type=\"text\" formControlName=\"grupo\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"fGroup.controls.grupo.errors\">\n\n            <p *ngIf=\"fGroup.controls.grupo.errors.minlength\" class=\"ion-padding-start \">Valo mínimo de caracteres é\n              igual a 2!</p>\n            <p *ngIf=\"fGroup.controls.grupo.errors.maxlength\" class=\"ion-padding-start \">O valor máximo de 50 caracteres\n              foi excedido!</p>\n          </div>\n        </form>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"light bottomTab\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p>Os campos marcados com asterisco (*) são obrigatórios, lembre-se de preenchelos ou não poderá concluir a\n              anamnese.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/novo/aluno/aluno.page.scss":
/*!********************************************!*\
  !*** ./src/app/novo/aluno/aluno.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 30%;\n  height: auto;\n  overflow: hidden;\n  margin: 10% 0% 0% 35%; }\n\np {\n  color: red;\n  font-size: 10px; }\n\nstrong {\n  color: red; }\n\n.bottomTab {\n  margin-bottom: 21%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by9hbHVuby9DOlxcVXNlcnNcXGZhYmlhXFxEb2N1bWVudHNcXGFwcDIwMTlfMV9hbmFtbmVzZV9kaWdpdGFsL3NyY1xcYXBwXFxub3ZvXFxhbHVub1xcYWx1bm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxVQUFVLEVBQUE7O0FBRWQ7RUFDRSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdm8vYWx1bm8vYWx1bm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhcntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMCUgMCUgMCUgMzUlO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuc3Ryb25ne1xyXG5cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJvdHRvbVRhYntcclxuICBtYXJnaW4tYm90dG9tOiAgMjElO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/novo/aluno/aluno.page.ts":
/*!******************************************!*\
  !*** ./src/app/novo/aluno/aluno.page.ts ***!
  \******************************************/
/*! exports provided: AlunoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoPage", function() { return AlunoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/identificacao.service */ "./src/app/services/identificacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AlunoPage = /** @class */ (function () {
    function AlunoPage(fBuilder, identService) {
        this.fBuilder = fBuilder;
        this.identService = identService;
        // Faz a validação dos campos
        this.fGroup = this.fBuilder.group({
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])],
            // tslint:disable-next-line: max-line-length
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])],
            matricula: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9999999999)])],
            grupo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])]
        });
    }
    AlunoPage.prototype.ngOnInit = function () {
    };
    // Metodo que é executado ao sair da pagina
    AlunoPage.prototype.ionViewWillLeave = function () {
        // ** Esse if verifica se tem campos vazios, se true ele gera um alerta, se false ele envia para o json */
        if (!this.fGroup.valid) {
            this.identService.alerta('Identificação do Aluno', 'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.');
        }
        else if (this.identService.verifica.indexOf(0) > -1) {
            // evia para o big json
            this.identService.allObject.aluno = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.aluno);
            console.log(this.identService.verifica);
            console.log(this.identService.verificador());
        }
        else {
            // evia para o big json
            this.identService.allObject.aluno = this.fGroup.value;
            // visualizar resultadonos no console
            console.log(this.identService.allObject.aluno);
            this.identService.verifica.push(0);
            console.log(this.identService.verifica);
        }
    };
    AlunoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aluno',
            template: __webpack_require__(/*! ./aluno.page.html */ "./src/app/novo/aluno/aluno.page.html"),
            styles: [__webpack_require__(/*! ./aluno.page.scss */ "./src/app/novo/aluno/aluno.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_identificacao_service__WEBPACK_IMPORTED_MODULE_2__["IdentificacaoService"]])
    ], AlunoPage);
    return AlunoPage;
}());



/***/ })

}]);
//# sourceMappingURL=aluno-aluno-module.js.map