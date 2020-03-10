import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';


// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importe da biblioteca para o alert
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
})

export class Page7Page implements OnInit {
  public sistemaHemolinfopetico: Array<object> = [];
  public colunaossosArticulacoesExtremidades: Array<object> = [];
  public sistemaMuscular: Array<object> = [];
  public sistemaNervoso: Array<object> = [];


  public fGroupSh: FormGroup;
  public fGroupCv: FormGroup;
  public fGroupM: FormGroup;
  public fGroupN: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService,
    public alertController: AlertController) {


    this.fGroupSh = this.fBuilder.group({
      // Falta fazer as validações com o validator

      astenia: [''],
      adenomegalia: [''],
      hepatomegalia: [''],
      esplenomegalia: [''],
      hemorragia: ['']
    });

    this.fGroupCv = this.fBuilder.group({

      // Coluna vertebral
      dor: [''],
      rigidez: [''],
      sinais_inflamatorios: [''],
      crepitacao_articular: [''],
      manifestacao_sistemica: ['']
    });

    this.fGroupM = this.fBuilder.group({


      // sistema muscular
      atrofia_muscular: [''],
      dificuldade_andar: [''],
      fraqueza_muscular: [''],
      dor: [''],
      caibras: [''],
      espasmos_musculares: ['']

    });

    this.fGroupN = this.fBuilder.group({

      // sistema nervoso
      disturbios_consciencia: [''],
      cefaleia: [''],
      tontura_vertigem: [''],
      ausencias: [''],
      convusoes: [''],
      automatismos: [''],
      amnesia: [''],
      disturbios_visuais: [''],
      disturbios_auditivos: [''],
      disturbios_mancha: [''],
      disturbios_motricidade: [''],
      disturbios_esfincterianos: [''],
      disturbios_sono: [''],
      disturbios_funcoes: [''],
      outros: ['']

    });

    this.sistemaHemolinfopetico = [
      {
        titulo: 'Astenia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'astenia'
      },
      {
        titulo: 'Adenomegalia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'adenomegalia'
      },
      {
        titulo: 'Hepatomegalia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'hepatomegalia'
      },
      {
        titulo: 'Esplenomegalia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'esplenomegalia'
      },
      {
        titulo: 'Hemorragia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'hemorragia'
      }
    ],
      this.colunaossosArticulacoesExtremidades = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'dor'
        },
        {
          titulo: 'Rigidez pós-repouso?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'rigidez'
        },
        {
          titulo: 'Sinais inflamatórios?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'sinais_inflamatorios'
        },
        {
          titulo: 'Crepitação articular?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'crepitacao_articular'
        },
        {
          titulo: 'Manifestação sistêmatica?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'manifestacao_sistemica'
        }
      ],
      this.sistemaMuscular = [
        {
          titulo: 'Atrofia muscular?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'atrofia_muscular'
        },
        {
          titulo: 'Dificuldade para andar ou subir escadas?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'dificuldade_andar'
        },
        {
          titulo: 'Fraqueza muscular?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'fraqueza_muscular'
        },
        {
          titulo: 'Cãibras?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'caibras'
        },
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'dor'
        },
        {
          titulo: 'Espasmos musculares?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'espasmos_musculares'
        }
      ],
      this.sistemaNervoso = [
        {
          titulo: 'Distúrbios da conciência?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_consciencia'
        },
        {
          titulo: 'Cefaleia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'cefaleia'
        },
        {
          titulo: 'Tontura e vertigem?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'tontura_vertigem'
        },
        {
          titulo: 'Convulsões?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'convusoes'
        },
        {
          titulo: 'Ausências?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'ausencias'
        },
        {
          titulo: 'Automatismo?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'automatismos'
        },
        {
          titulo: 'Amnésia',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'amnesia'
        },
        {
          titulo: 'Distúrbios visuais?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_visuais'
        },
        {
          titulo: 'Distúrbios auditivos?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_auditivos'
        },
        {
          titulo: 'Distúrbios da marcha?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_mancha'
        },
        {
          titulo: 'Distúrbios de motricidade voluntária?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_motricidade'
        },
        {
          titulo: 'Distúrbios esfincterianos?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_esfincterianos'
        },
        {
          titulo: 'Distúrbios do sono?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_sono'
        },
        {
          titulo: 'Distúrbios das funções cerebrais superiores?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'disturbios_funcoes'
        },
      ];
  }

  ngOnInit() {
  }

  // Metodo que cria um alerta
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ops!',
      subHeader: 'Página (ISDA página 7)',
      message: 'Foram encontrados campos vazios! A Anamnese só será enviada após o preenchimento de todos os campos obrigatórios.',
      buttons: ['OK']
    });

    await alert.present();
  }



  ionViewWillLeave() {

    this.identService.allObject.isda.sistema_hemolinfopetico = this.fGroupSh.value;
    this.identService.allObject.isda.coluna_vertebral = this.fGroupCv.value;
    this.identService.allObject.isda.musculos = this.fGroupM.value;
    this.identService.allObject.isda.nervoso = this.fGroupN.value;

    console.log(this.identService.allObject.isda.sistema_hemolinfopetico);
    console.log(this.identService.allObject.isda.coluna_vertebral);
    console.log(this.identService.allObject.isda.musculos);
    console.log(this.identService.allObject.isda.nervoso);
  }

}
