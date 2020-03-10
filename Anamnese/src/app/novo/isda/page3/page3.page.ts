import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service'; // Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importe da biblioteca para o alert
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  public toraxParedeToraxica: Array<object> = [];
  public mamas: Array<object> = [];
  public traqueia: Array<object> = [];

  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder, private identService: IdentificacaoService, public alertController: AlertController) {

    this.fGroup = this.fBuilder.group({

      // Falta fazer as validações com o validator

      traqueia_dor: [''],
      traqueia_tosse: [''],
      traqueia_expectoracao: [''],
      traqueia_hemoptise: [''],
      traqueia_vomica: [''],
      traqueia_chieira: [''],
      traqueia_estridor: [''],
      traqueia_triagem: [''],
      parede_toraxica_dor: [''],
      parede_toraxica_dispineia: [''],
      mamas_dor: [''],
      mamas_nodulo: [''],
      mamas_secrecao: [''],

    });


    this.toraxParedeToraxica = [
      {
        titulo: 'Dor?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'parede_toraxica_dor'
      },
      {
        titulo: 'Dispneia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'parede_toraxica_dispineia'
      }
    ],
      this.mamas = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'mamas_dor'
        },
        {
          titulo: 'Nódulos?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'mamas_nodulo'
        },
        {
          titulo: 'Secreção mamilar?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'mamas_secrecao'
        }
      ],
      this.traqueia = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_dor'
        },
        {
          titulo: 'Tosse?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_tosse'
        },
        {
          titulo: 'Expectoração?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_expectoracao'
        },
        {
          titulo: 'Hemoptise?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_hemoptise'
        },
        {
          titulo: 'Vômica?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_vomica'
        },
        {
          titulo: 'Chieira?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_chieira'
        },
        {
          titulo: 'Estridor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_estridor'
        },
        {
          titulo: 'Triagem?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'traqueia_triagem'
        }
      ];


  }

  ngOnInit() {
  }

  ionViewWillLeave() {

    // evia para o big json
    this.identService.allObject.isda.torax = this.fGroup.value;

    // visualizar resultadonos no console

    console.log(this.identService.allObject.isda.torax);

  }

}
