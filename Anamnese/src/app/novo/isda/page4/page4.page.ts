import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importe da biblioteca para o alert
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  public diafragmaMediastino: Array<object> = [];
  public coracaoGrandeVasos: Array<object> = [];
  public esofago: Array<object> = [];

  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder, private identService: IdentificacaoService, public alertController: AlertController) {

    this.fGroup = this.fBuilder.group({

      // Falta fazer as validações com o validator

      diafragma_dor: [''],
      diafragma_soluco: [''],
      diafragma_sintomas_compressao: [''],
      coracao_dor: [''],
      coracao_palpitacoes: [''],
      coracao_intolerancia_esforcos: [''],
      coracao_desmaio_esforco: [''],
      coracao_cianose: [''],
      coracao_edema: [''],
      coracao_astenia: [''],
      coracao_dispneia: [''],
      coracao_alteracoes_sono: [''],
      esofago_dor: [''],
      esofago_disfagia: [''],
      esofago_odinofagia: [''],
      esofago_pirose: [''],
      esofago_regurgitacao: [''],
      esofago_hematemese: ['']

    });



    this.diafragmaMediastino = [
      {
        titulo: 'Dor?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'diafragma_dor'
      },
      {
        titulo: 'Soluço?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'diafragma_soluco'
      },
      {
        titulo: 'Sintomas de comopressão?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'diafragma_sintomas_compressao'
      }
    ],
      this.coracaoGrandeVasos = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_dor'
        },
        {
          titulo: 'palpitações?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_palpitacoes'
        },
        {
          titulo: 'Intolerância aos esforcos?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_intolerancia_esforcos'
        },
        {
          titulo: 'Desmaio e sincope?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_desmaio_esforco'
        },
        {
          titulo: 'Cianose?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_cianose'
        },
        {
          titulo: 'Edemas?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_edema'
        },
        {
          titulo: 'Astenia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_astenia'
        },
        {
          titulo: 'Dispneia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_dispneia'
        },
        {
          titulo: 'Alterações no Sono?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'coracao_alteracoes_sono'
        }
      ],
      this.esofago = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'esofago_dor'
        },
        {
          titulo: 'Disfagia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'esofago_disfagia'
        },
        {
          titulo: 'Odinofagia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'esofago_odinofagia'
        },
        {
          titulo: 'Pirose?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'esofago_pirose'
        },
        {
          titulo: 'Regurgitação?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'esofago_regurgitacao'
        },
        {
          titulo: 'Hematêmese?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'esofago_hematemese'
        },
      ];
  }

  ngOnInit() {
  }


  ionViewWillLeave() {

    // evia para o big json
    this.identService.allObject.isda.torax = Object.assign(this.identService.allObject.isda.torax, this.fGroup.value);

    // visualizar resultadonos no console

    console.log(this.identService.allObject.isda.torax);

  }

}

