import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  home: any;
  titulo: any;

  constructor() {
    this.titulo = {
      title: 'Anamnese Digital'
    };
    this.home = {
      url: '/assets/icon/img/clipboard1.png',
      welcome: 'Bem-vindo(a)!',
      // tslint:disable-next-line: max-line-length
      msg: 'Com o Anamnese Digital, tudo fica mais rápido! O aplicativo trás a praticidade de agilizar seus diagnósticos com maior rápidez em qualquer lugar mesmo sem conexão com a internet.',
      dv: 'Duvida?',
      init: 'Iniciar tutorial',
      novo: 'Novo Paciente',
      criar: 'Adicionar',
      lista: 'Lista de Anamnese',
      ace: 'Acessar'
    };
  }


  // tslint:disable-next-line: eofline
}