import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-exame-respiratorio',
  templateUrl: './exame-respiratorio.page.html',
  styleUrls: ['./exame-respiratorio.page.scss'],
})
export class ExameRespiratorioPage implements OnInit {

  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {

    this.fGroup = this.fBuilder.group({

      respiratorio_presencacicatriz_valor: [''],
      respiratorio_presencacicatriz_motivo: [''],
      respiratorio_palpacao_ftv_valor: ['', Validators.compose([Validators.required])],
      respiratorio_palpacao_ftv_localizacao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250)
      ])],
      respiratorio_palpacao_submacico_localizacao: [''],
      respiratorio_palpacao_submacico_valor: [''],
      respiratorio_palpacao_manobra_de_lasengue: ['', Validators.compose([Validators.required])],
      respiratorio_palpacao_manobra_de_ruault: ['', Validators.compose([Validators.required])],
      respiratorio_palpacao_percussao: [''],
      respiratorio_palpacao_localizacao_percussao: [''],
      respiratorio_papacao_som_pulmonar: [''],
      respiratorio_palpacao_timpanico: [''],
      respiratorio_palpacao_macico: [''],
      respiratorio_palpacao_presencadedor_localizacao: [''],
      respiratorio_palpacao_presencadedor_tipo_da_dor: ['', Validators.compose([Validators.required])],
      respiratorio_palpacao_presencadedor_frequencia_da_dor: ['', Validators.compose([Validators.required])],
      respiratorio_palpacao_presencadedor_intensidade_da_dor: ['', Validators.compose([Validators.required])],
      respiratorio_palpacao_presencadedor_fatores_que_pioram_a_dor: [''],
      respiratorio_palpacao_presencadedor_dorirradia_valor: [''],
      respiratorio_palpacao_presencadedor_dorirradia_frequencia: [''],
      respiratorio_palpacao_presencadedor_intensidade: [''],
      respiratorio_auscultapulmonar_murmurio_vesicular_presente: [''],
      respiratorio_auscultapulmonar_murmurio_vesicular_sonoridade: [''],
      respiratorio_auscultapulmonar_auscultavoz_valor: [''],
      respiratorio_auscultapulmonar_auscultavoz_ressonancia_aumentada: [''],
      respiratorio_auscultapulmonar_murmuriovesicular_valor: [''],
      respiratorio_auscultapulmonar_murmuriovesicular_localizacao: [''],
      respiratorio_auscultapulmonar_roncos_valor: [''],
      respiratorio_auscultapulmonar_roncos_localizacao: [''],
      respiratorio_auscultapulmonar_atritopleural_valor: [''],
      respiratorio_auscultapulmonar_atritopleural_localizacao: [''],
      respiratorio_auscultapulmonar_sopro_valor: [''],
      respiratorio_auscultapulmonar_sopro_localizacao: [''],
      respiratorio_auscultapulmonar_estritorgrosso_valor: [''],
      respiratorio_auscultapulmonar_estritorgrosso_localizacao: [''],
      respiratorio_auscultapulmonar_estritorfino_valor: [''],
      respiratorio_auscultapulmonar_estritorfino_localizacao: [''],
      respiratorio_auscultapulmonar_estritor_valor: [''],
      respiratorio_auscultapulmonar_estritor_localizacao: [''],
      respiratorio_auscultapulmonar_sibilos_valor: [''],
      respiratorio_auscultapulmonar_sibilos_localizacao: ['']

    });


  }

  ngOnInit() {

  }

  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Exame Respiratório',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );


    } else if (this.identService.verifica.indexOf(17) > -1) {

      // evia para o big json
      // tslint:disable-next-line: max-line-length
      this.fGroup.value.respiratorio_palpacao_presencadedor_tipo_da_dor = this.fGroup.value.respiratorio_palpacao_presencadedor_tipo_da_dor.toString();
      this.identService.allObject.exame_fisico.respiratorio = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.exame_fisico.respiratorio);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {
      // evia para o big json
      // tslint:disable-next-line: max-line-length
      this.fGroup.value.respiratorio_palpacao_presencadedor_tipo_da_dor = this.fGroup.value.respiratorio_palpacao_presencadedor_tipo_da_dor.toString();
      this.identService.allObject.exame_fisico.respiratorio = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.exame_fisico.respiratorio);

      this.identService.verifica.push(17);
      console.log(this.identService.verifica);
    }
  }
}

