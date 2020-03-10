import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importe da biblioteca para o alert
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {

  public rins: Array<object> = [];
  public orgaosgenitaisMasculino: Array<object> = [];
  public orgaosgenitaisFeminino: Array<object> = [];

  // tslint:disable-next-line: variable-name
  public sistema_geniturinario = {
    rins_dor: '',
    rins_alt_miccionais: '',
    rins_alt_cor_urina: '',
    rins_alt_cheiro_urina: '',
    rins_alt_volume_urinario: '',
    rins_edema: '',
    rins_febre: '',
    orgaosgenitais_dor: '',
    orgaosgenitais_masculino_corrimento: '',
    orgaosgenitais_masculino_lesoes: '',
    orgaosgenitais_masculino_nodulos: '',
    orgaosgenitais_masculino_priapismo: '',
    orgaosgenitais_masculino_hemospernia: '',
    orgaosgenitais_masculino_disfuncoes: '',
    orgaosgenitais_feminino_corrimento: '',
    orgaosgenitais_feminino_hemorragia: '',
    orgaosgenitais_feminino_prurido: ''
  };


  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    public identService: IdentificacaoService,
    public alertController: AlertController) {


    this.fGroup = this.fBuilder.group({

      // Falta fazer as validações com o validator

      rins_dor: [''],
      rins_alt_miccionais: [''],
      rins_alt_cor_urina: [''],
      rins_alt_cheiro_urina: [''],
      rins_alt_volume_urinario: [''],
      rins_edema: [''],
      rins_febre: [''],
      orgaosgenitais_dor: [''],
      orgaosgenitais_masculino_corrimento: [''],
      orgaosgenitais_masculino_lesoes: [''],
      orgaosgenitais_masculino_nodulos: [''],
      orgaosgenitais_masculino_priapismo: [''],
      orgaosgenitais_masculino_hemospernia: [''],
      orgaosgenitais_masculino_disfuncoes: [''],
      orgaosgenitais_feminino_corrimento: [''],
      orgaosgenitais_feminino_hemorragia: [''],
      orgaosgenitais_feminino_prurido: ['']

    });

    this.rins = [
      {
        titulo: 'Dor?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_dor'
      },
      {
        titulo: 'Alterações miccionais?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_alt_miccionais'
      },
      {
        titulo: 'Alterações da cor da urina?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_alt_cor_urina'
      },
      {
        titulo: 'Alterações do cheiro da urina?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_alt_cheiro_urina'
      },
      {
        titulo: 'Alterações de volumes urinário?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_alt_volume_urinario'
      },
      {
        titulo: 'Edema?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_edema'
      },
      {
        titulo: 'Febre?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'rins_febre'
      }
    ],
      this.orgaosgenitaisMasculino = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_dor'
        },
        {
          titulo: 'Corrimento?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_masculino_corrimento'
        },
        {
          titulo: 'Lesões?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_masculino_lesoes'
        },
        {
          titulo: 'Nódulos?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_masculino_nodulos'
        },
        {
          titulo: 'Priapismo?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_masculino_priapismo'
        },
        {
          titulo: 'Hemospernia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_masculino_hemospernia'
        },
        {
          titulo: 'Disfunções?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_masculino_disfuncoes'
        }
      ],
      this.orgaosgenitaisFeminino = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_dor'
        },
        {
          titulo: 'Corrimento?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_feminino_corrimento'
        },
        {
          titulo: 'Hemorragia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_feminino_hemorragia'
        },
        {
          titulo: 'Prurido?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'orgaosgenitais_feminino_prurido'
        }
      ];

  }

  ngOnInit() {
  }

  ionViewWillLeave() {

    // evia para o big json
    this.identService.allObject.isda.sistema_geniturinario = this.fGroup.value;

    // visualizar resultadonos no console
    console.log(this.identService.allObject.isda.sistema_geniturinario);
  }
}
