import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exame-cardiovascular',
  templateUrl: './exame-cardiovascular.page.html',
  styleUrls: ['./exame-cardiovascular.page.scss'],
})

export class ExameCardiovascularPage implements OnInit {



  public fGroup: FormGroup;


  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {

    this.fGroup = this.fBuilder.group({

      cardiovascular_inspecaoepalpacao_tipo_polpa_digital: ['', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_presenca_de_abaulamento: [''],
      cardiovascular_inspecaoepalpacao_turgencia_jugular: [''],
      cardiovascular_inspecaoepalpacao_lesoes_elementares: ['', Validators.compose([Validators.maxLength(250)])],
      cardiovascular_inspecaoepalpacao_situacao_do_ciclo: ['Remover esse campo na api', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_intensidade: ['', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_localizacao_fremito: ['', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_polpas_digitais: ['', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor: ['', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_fremitocardiovascular_localizacao: [''],
      cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco: ['', Validators.compose([Validators.required])],
      cardiovascular_inspecaoepalpacao_fremitocardiovascular_intensidade: [0, Validators.compose([Validators.required])],
      cardiovascular_auscultacardiaca_ritmo_cardiaco: ['', Validators.compose([Validators.required])],
      cardiovascular_auscultacardiaca_intensidade_do_som: ['', Validators.compose([Validators.required])],
      cardiovascular_auscultacardiaca_frequencia_cardiaca: ['', Validators.compose([Validators.required])],
      cardiovascular_soprocardiaco_foco: ['', Validators.compose([Validators.required])],
      cardiovascular_soprocardiaco_intensidade: ['', Validators.compose([Validators.required])],
      cardiovascular_soprocardiaco_relacao_ciclo_cardiaco: ['', Validators.compose([Validators.required])],
      cardiovascular_auscultacarotidea_presenca_de_sopro: [''],

    });
  }

  setOcultValidate() {

    const ciflContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_localizacao');
    const cilfContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_localizacao_fremito');
    const cifsccContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco');
    const cifiContol = this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_intensidade');


    this.fGroup.get('cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor').valueChanges.subscribe(fcifvPresente => {

      if (fcifvPresente === 'Presente') {

        ciflContol.setValidators([Validators.required, Validators.maxLength(250)]);
        cilfContol.setValidators([Validators.required, Validators.maxLength(250)]);
        cifsccContol.setValidators([Validators.required, Validators.maxLength(250)]);
        cifiContol.setValidators([Validators.required, Validators.maxLength(250)]);

      } else {

        ciflContol.clearValidators();
        cilfContol.clearValidators();
        cifsccContol.clearValidators();
        cifiContol.clearValidators();
      }

      ciflContol.updateValueAndValidity();
      cilfContol.updateValueAndValidity();
      cifsccContol.updateValueAndValidity();
      cifiContol.updateValueAndValidity();

    });


  }
  ngOnInit() {

    this.setOcultValidate();

  }


  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Exame Cardiovascular',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );

    } else if (this.identService.verifica.indexOf(9) > -1) {

      // evia para o big json
      this.identService.allObject.exame_fisico.cardiovascular = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.exame_fisico.cardiovascular);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {
      // evia para o big json
      this.identService.allObject.exame_fisico.cardiovascular = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.exame_fisico.cardiovascular);

      this.identService.verifica.push(9);
      console.log(this.identService.verifica);

    }

  }

}
