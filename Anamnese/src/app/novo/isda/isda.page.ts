import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

/*

 Import das das bibliotecas para validação das entradas

 */

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-isda',
  templateUrl: './isda.page.html',
  styleUrls: ['./isda.page.scss'],
})
export class IsdaPage implements OnInit {
  title = 'ISDA';

  // variáveis
  parte2 = false;
  parte3 = false;
  parte4 = false;
  parte5 = false;
  parte6 = false;
  parte7 = false;
  parte8 = false;
  parte9 = false;

  // Array de nomes e valores

  public febre: Array<object> = [];
  public peso: Array<object> = [];
  public sudorese: Array<object> = [];
  public calafrios: Array<object> = [];
  public caibras: Array<object> = [];


  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {


    this.fGroup = this.fBuilder.group({

      // Falta fazer as validações com o validator

      sintomas: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      tempo: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      febre_valor: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      febre_tempo: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      sudoreses: [''],
      calafrios: [''],
      caibras: [''],
      alteracao_peso_presenca: [''],
      alteracao_peso_valor: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      // tslint:disable-next-line: max-line-length
      alteracao_peso_valor_peso: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      alteracao_peso_tempo: [''],
      febre_presenca: ['']
    });

    this.febre = [
      {
        nome: 'Sim',
        valor: 'sim'
      },
      {
        nome: 'Não',
        valor: 'nao'
      },
      {
        nome: 'NQN',
        valor: 'nqn'
      }
    ],
      this.peso = [
        {
          nome: 'Sim',
          valor: 'sim'
        },
        {
          nome: 'Não',
          valor: 'nao'
        },
        {
          nome: 'NQN',
          valor: 'nqn'
        }
      ],
      this.sudorese = [
        {
          nome: 'Sim',
          valor: 'sim'
        },
        {
          nome: 'Não',
          valor: 'nao'
        },
        {
          nome: 'NQN',
          valor: 'nqn'
        }
      ],
      this.calafrios = [
        {
          nome: 'Sim',
          valor: 'sim'
        },
        {
          nome: 'Não',
          valor: 'nao'
        },
        {
          nome: 'NQN',
          valor: 'nqn'
        }
      ],
      this.caibras = [
        {
          nome: 'Sim',
          valor: 'sim'
        },
        {
          nome: 'Não',
          valor: 'nao'
        },
        {
          nome: 'NQN',
          valor: 'nqn'
        }
      ];
  }

  setOcultValidate() {


    const pesoValorContol = this.fGroup.get('alteracao_peso_valor');
    const pesoValorPesoContol = this.fGroup.get('alteracao_peso_valor_peso');
    const pesoTempoContol = this.fGroup.get('alteracao_peso_tempo');
    const febreValorContol = this.fGroup.get('febre_valor');
    const febreTempoContol = this.fGroup.get('febre_tempo');

    this.fGroup.get('alteracao_peso_presenca').valueChanges.subscribe(pesoPresenca => {

      if (pesoPresenca === 'sim') {
        pesoValorContol.setValidators([Validators.required, Validators.maxLength(250)]);
        pesoValorPesoContol.setValidators([Validators.required, Validators.maxLength(250)]);
        pesoTempoContol.setValidators([Validators.required, Validators.maxLength(250)]);

      } else {
        pesoValorContol.clearValidators();
        pesoValorPesoContol.clearValidators();
        pesoTempoContol.clearValidators();

      }

      pesoValorContol.updateValueAndValidity();
      pesoValorPesoContol.updateValueAndValidity();
      pesoTempoContol.updateValueAndValidity();

    });

    this.fGroup.get('febre_presenca').valueChanges.subscribe(febrePresenca => {

      if (febrePresenca === 'sim') {
        febreValorContol.setValidators([Validators.required, Validators.maxLength(250)]);
        febreTempoContol.setValidators([Validators.required, Validators.maxLength(250)]);


      } else {
        febreValorContol.clearValidators();
        febreTempoContol.clearValidators();

      }

      febreValorContol.updateValueAndValidity();
      febreTempoContol.updateValueAndValidity();

    });
  }

  ngOnInit() {
    this.setOcultValidate();
  }


  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Isda',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );



    } else if (this.identService.verifica.indexOf(5) > -1) {

      // evia para o big json
      this.identService.allObject.isda.sintomas_gerais = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.sintomas_gerais);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {
      // evia para o big json
      this.identService.allObject.isda.sintomas_gerais = this.fGroup.value;


      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.sintomas_gerais);


      this.identService.verifica.push(5);
      console.log(this.identService.verifica);
    }

  }

}
