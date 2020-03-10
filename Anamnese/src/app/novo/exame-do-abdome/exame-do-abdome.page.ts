import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-exame-do-abdome',
  templateUrl: './exame-do-abdome.page.html',
  styleUrls: ['./exame-do-abdome.page.scss'],
})
export class ExameDoAbdomePage implements OnInit {

  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder, private identService: IdentificacaoService) {

    this.fGroup = this.fBuilder.group({

      abdome_inspecao_tipo_do_abdome: ['', Validators.compose([Validators.required])],
      abdome_inspecao_cicatriz_cirurgica: [''],
      abdome_inspecao_cicatriz_cirurgica_descricao: [''],
      abdome_inspecao_tipo_cicatriz_umbilical: ['', Validators.compose([Validators.required])],
      abdome_inspecao_sinal_de_gray_turner: [''],
      abdome_inspecao_sinal_de_culen: [''],
      abdome_inspecao_presenca_de_retratacoes: [''],
      abdome_inspecao_presenca_de_retratacoes_descricao: [''],
      abdome_inspecao_cicatriz_umbilical: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      abdome_inspecao_pulsatilidade_da_aorta: [''],
      abdome_inspecao_presenca_circulacao_colateral: [''],
      abdome_inspecao_presenca_circulacao_colateral_descricao: [''],
      abdome_manobrasespeciais_manobra_de_shuster_palpavel: [''],
      abdome_manobrasespeciais_sinal_de_murphy: [''],
      abdome_manobrasespeciais_sinal_de_blemberg: [''],
      abdome_percussao_som: ['', Validators.compose([Validators.required])],
      abdome_percussao_presenca_de_massas: [''],
      abdome_percussao_presenca_de_massas_descricao: [''],
      abdome_percussao_hepatomegalia: [''],
      abdome_percussao_hepatomegalia_descricao: [''],
      abdome_percussao_esplenomegalia: [''],
      abdome_percussao_esplenomegalia_descricao: [''],
      abdome_percussao_macicez_movel_de_decubito: [''],
      abdome_percussao_sinal_de_piparote: [''],
      abdome_palpacao_dor: [''],
      abdome_palpacao_dor_descricao: [''],
      abdome_palpacao_massas_abdominais: [''],
      abdome_palpacao_massas_abdominais_descricao: [''],
      abdome_palpacao_tensao_abdominal: [''],
      abdome_manobrasespeciais_lemostorres_palpavel: [''],
      abdome_manobrasespeciais_lemostorres_consistencia: [''],
      abdome_manobrasespeciais_lemostorres_borda: [''],
      abdome_manobrasespeciais_lemostorres_dolorosa: [''],
      abdome_manobrasespeciais_lemostorres_superficie: [''],
      abdome_manobrasespeciais_mathieu_palpavel: [''],
      abdome_manobrasespeciais_mathieu_consistencia: [''],
      abdome_manobrasespeciais_mathieu_borda: [''],
      abdome_manobrasespeciais_mathieu_superficie: [''],
      abdome_manobrasespeciais_mathieu_dolorosa: [''],

    });
  }

  ngOnInit() {

  }

  sendToApi() {
    this.identService.callpostData();
  }

  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      // tslint:disable-next-line: max-line-length
      this.identService.alerta(
        'Exame do Abdome',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );

    } else if (this.identService.verifica.indexOf(10) > -1) {

      // evia para o big json
      this.identService.allObject.exame_fisico.abdome = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.exame_fisico.abdome);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {
      // evia para o big json
      this.identService.allObject.exame_fisico.abdome = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.exame_fisico.abdome);
      this.identService.verifica.push(10);
      console.log(this.identService.verifica);
    }

  }

}
