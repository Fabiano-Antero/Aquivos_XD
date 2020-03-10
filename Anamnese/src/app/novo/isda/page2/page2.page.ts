import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importe da biblioteca para o alert
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  public olhos: Array<object> = [];
  public ouvidos: Array<object> = [];
  public narizCavidadesParanasais: Array<object> = [];
  public cavidadeBucalAnexos: Array<object> = [];

  // tslint:disable-next-line: variable-name

  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder, private identService: IdentificacaoService, public alertController: AlertController) {

    this.fGroup = this.fBuilder.group({

      // Falta fazer as validações com o validator

      ouvidos_dor: [''],
      ouvidos_otorreia: [''],
      ouvido_otoragia: [''],
      ouvidos_zumbidos: [''],
      ouvidos_tontura: [''],
      olhos_dor_ocular: [''],
      olhos_prurido: [''],
      olhos_queimacao: [''],
      olhos_olho_seco: [''],
      olhos_perda_visao: [''],
      olhos_fotofobia: [''],
      olhos_vermelhidao: [''],
      faringe_dor_garganta: [''],
      faringe_disfagia: [''],
      faringe_tosse: [''],
      faringe_halitose: [''],
      faringe_pigarro: [''],
      faringe_ronco: [''],
      cavidade_bucal_silose: [''],
      cavidade_bucal_halitose: [''],
      cavidade_bucal_dor: [''],
      cavidade_bucal_ulceracoes: [''],
      nariz_prurido: [''],
      nariz_dor: [''],
      nariz_espirros: [''],
      nariz_obstrucao_nasal: [''],
      nariz_corrimento_nasal: [''],
      nariz_epistaxe: [''],
      nariz_dispneia: [''],
      nariz_diminuicao_olfato: ['']

    });

    this.olhos = [
      {
        titulo: 'Dor ocular?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_dor_ocular'
      },
      {
        titulo: 'Prurido?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_prurido'
      },
      {
        titulo: 'Queimação ou Ardência?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_queimacao'
      },
      {
        titulo: 'Sensação de olho seco?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_olho_seco'
      },
      {
        titulo: 'Diminuição ou perda da visão?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_perda_visao'
      },
      {
        titulo: 'Fotofobia?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_fotofobia'
      },
      {
        titulo: 'Vermelhidão?',
        nome1: 'Sim',
        valor1: 'sim',
        nome2: 'Não',
        valor2: 'nao',
        nome3: 'NQN',
        valor3: 'nqn',
        key: 'olhos_vermelhidao'
      }
    ],
      this.ouvidos = [
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'ouvidos_dor'
        },
        {
          titulo: 'Otorreia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'ouvidos_otorreia'
        },
        {
          titulo: 'Otorragia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'ouvido_otoragia'
        },
        {
          titulo: 'Zumbidos?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'ouvidos_zumbidos'
        },
        {
          titulo: 'Vertigem e tontura?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'ouvidos_tontura'
        }
      ],
      this.narizCavidadesParanasais = [
        {
          titulo: 'Prurido?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_prurido'
        },
        {
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_dor'
        },
        {
          titulo: 'Espirros?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_espirros'
        },
        {
          titulo: 'Obstrução Nasal?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_obstrucao_nasal'
        },
        {
          titulo: 'Corrimento Nasal?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_corrimento_nasal'
        },
        {
          titulo: 'Epistaxe?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_epistaxe'
        },
        {
          titulo: 'Dispneia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_dispneia'
        },
        {
          titulo: 'Diminuição do olfato?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'nariz_diminuicao_olfato'
        }
      ],
      this.cavidadeBucalAnexos = [
        {
          sub: 'Cavidade Bucal e Anexos',
          titulo: 'Sialose?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'cavidade_bucal_silose'
        },
        {
          sub: 'Cavidade Bucal e Anexos',
          titulo: 'Halitose?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'cavidade_bucal_halitose'
        },
        {
          sub: 'Cavidade Bucal e Anexos',
          titulo: 'Dor?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'cavidade_bucal_dor'
        },
        {

          titulo: 'Ulcerações ou sangramento?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'cavidade_bucal_ulceracoes'
        },
        {

          titulo: 'Dor de garganta?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'faringe_dor_garganta'
        },
        {

          titulo: 'Disfagia?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'faringe_disfagia'
        },
        {

          titulo: 'Tosse?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'faringe_tosse'
        },
        {

          titulo: 'Faringe halitose?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'faringe_halitose'
        },
        {

          titulo: 'Pigarro?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'faringe_pigarro'
        },
        {

          titulo: 'Ronco?',
          nome1: 'Sim',
          valor1: 'sim',
          nome2: 'Não',
          valor2: 'nao',
          nome3: 'NQN',
          valor3: 'nqn',
          key: 'faringe_ronco'
        }
      ];
  }

  ngOnInit() {
  }


  ionViewWillLeave() {

    // evia para o big json
    this.identService.allObject.isda.sintomas_gerais = Object.assign(this.identService.allObject.isda.sintomas_gerais, this.fGroup.value);

    // visualizar resultadonos no console
    console.log(this.identService.allObject.isda.sintomas_gerais);


  }

}
