import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importe da biblioteca para o alert
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {
  // Abdome

  public paredeabdominal: Array<object> = [];
  public pancreas: Array<object> = [];
  public figado: Array<object> = [];
  public estomago: Array<object> = [];
  public intestino: Array<object> = [];
  public colon: Array<object> = [];


  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService,
    public alertController: AlertController) {

    this.fGroup = this.fBuilder.group({

      // Falta fazer as validações com o validator

      paredeabdominal_dor: [''],
      paredeabdominal_alteracao: [''],
      pancreas_dor: [''],
      pancreas_diarreia: [''],
      pancreas_nauseas: [''],
      figado_dor: [''],
      figado_ictericia: [''],
      estomago_dor: [''],
      estomago_nauseas: [''],
      estomago_dispepsia: [''],
      estomago_pirose: [''],
      intestino_dor: [''],
      intestino_diarreia: [''],
      intestino_esteatorreia: [''],
      intestino_distensao: [''],
      intestino_hemorragia: [''],
      colon_dor: [''],
      colon_diarreia: [''],
      colon_obstipacao: [''],
      colon_sangramento: [''],
      colon_prurido: [''],

    });

    this.paredeabdominal = [
      {
        titulo: 'Dor?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'paredeabdominal_dor'
      },
      {
        titulo: 'Alteração?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'paredeabdominal_alteracao'
      }
    ],
      this.pancreas = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'pancreas_dor'
        },
        {
          titulo: 'Diarreia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'pancreas_diarreia'
        },
        {
          titulo: 'Nauseas?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'pancreas_nauseas'
        }
      ],
      this.figado = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'figado_dor'
        },
        {
          titulo: 'Icterícia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'figado_ictericia'
        }
      ],
      this.estomago = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'estomago_dor'
        },
        {
          titulo: 'Nauseas?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'estomago_nauseas'
        },
        {
          titulo: 'Dispepsia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'estomago_dispepsia'
        },
        {
          titulo: 'Pirose?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'estomago_pirose'
        }
      ],
      this.intestino = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'intestino_dor'
        },
        {
          titulo: 'Diarreia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'intestino_diarreia'
        },
        {
          titulo: 'Esteatorreia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'intestino_esteatorreia'
        },
        {
          titulo: 'Distensão?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'intestino_distensao'
        },
        {
          titulo: 'Hemorragia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'intestino_hemorragia'
        }
      ],
      this.colon = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'colon_dor'
        },
        {
          titulo: 'Diarreia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'colon_diarreia'
        },
        {
          titulo: 'Obstipação?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'colon_obstipacao'
        },
        {
          titulo: 'Sangramento?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'colon_sangramento'
        },
        {
          titulo: 'prurido?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'colon_prurido'
        }
      ];
  }

  ngOnInit() {
  }


  ionViewWillLeave() {

    // evia para o big json
    this.identService.allObject.isda.abdome = this.fGroup.value;

    // visualizar resultadonos no console

    console.log(this.identService.allObject.isda.abdome);

  }
}
