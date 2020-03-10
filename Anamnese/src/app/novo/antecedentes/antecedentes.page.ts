import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

/*

 Import das das bibliotecas para validação das entradas

 */

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.page.html',
  styleUrls: ['./antecedentes.page.scss'],
})
export class AntecedentesPage implements OnInit {

  // Variáveis para interação

  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {

    // Faz a validação dos campos
    this.fGroup = this.fBuilder.group({

      // tslint:disable-next-line: max-line-length
      familia_enxaqueca: [''],
      familia_diabetes: [''],
      familia_has: [''],
      familia_alzheimer: [''],
      familia_cancer_valor: [''],
      familia_cancer_especifique: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      familia_cancer_outros: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      familia_outros: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_fisiologicos_desenvolvimento_psicomotor: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_fisiologicos_desenvolvimento_sexual: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_fisiologicos_gestacao_nascimento: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_alergias: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_cirurgias: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_doencas_atuais: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_doencas_sofridas: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_historia: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_medicamentos_em_uso: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      pessoais_patologico_transfusoes: ['', Validators.compose([Validators.required, Validators.maxLength(250)])]
    });
  }

  setOcultValidate() {
    const cancerEspecificacaoContol = this.fGroup.get('familia_cancer_especifique');
    const cancerOutrosContol = this.fGroup.get('familia_cancer_outros');

    this.fGroup.get('familia_cancer_valor').valueChanges.subscribe(cancerValor => {

      if (cancerValor === 'sim') {
        cancerEspecificacaoContol.setValidators([Validators.required]);
        cancerOutrosContol.setValidators([Validators.required]);

      } else {
        cancerEspecificacaoContol.clearValidators();
        cancerOutrosContol.clearValidators();

      }
      cancerEspecificacaoContol.updateValueAndValidity();
      cancerOutrosContol.updateValueAndValidity();

    });
  }

  ngOnInit() {
    this.setOcultValidate();
  }

  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Antecedentes',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );


    } else if (this.identService.verifica.indexOf(2) > -1) {

      // evia para o big json
      this.identService.allObject.isda.antecedentes = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.antecedentes);
      console.log(this.identService.verifica);
      console.log(this.identService.validacao);

    } else {
      // evia para o big json
      this.identService.allObject.isda.antecedentes = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.antecedentes);

      this.identService.verifica.push(2);
      console.log(this.identService.verifica);
    }

  }

}
