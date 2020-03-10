import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';
import { Observable } from 'rxjs';


// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ect03',
  templateUrl: './ect03.page.html',
  styleUrls: ['./ect03.page.scss'],
})
export class Ect03Page implements OnInit {


  results: Observable<any>;
  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {

    this.fGroup = this.fBuilder.group({
      cacifo_presenca: ['', Validators.compose([Validators.required])],
      cacifo_detalhe: ['', Validators.compose([Validators.required])],
      edema_consistencia: [''],
      edema_temperatura: ['', Validators.compose([Validators.required])],
      edema_temperatura_detalhe: ['', Validators.compose([Validators.required])],
      ectoscopia_outras_observacoes: ['', Validators.compose([Validators.required])],
      edema_presenca: [''],
      edema_descricao_edema: ['', Validators.compose([Validators.required])],
      edema_detalhes_consistencia: ['', Validators.compose([Validators.required])],
      edema_detalhes_dor: ['', Validators.compose([Validators.required])],
      edema_detalhes_intensidade: ['', Validators.compose([Validators.required])],
      edema_detalhes_localizacao: ['', Validators.compose([Validators.required])],
      edema_dor: ['', Validators.compose([Validators.required])],
      edema_intensidade: ['', Validators.compose([Validators.required])],
      edema_localizacao: ['', Validators.compose([Validators.required])],
      linfonodos_presenca: [''],
      linfonodos_adenomegalia: [''],
      linfonodos_alteracoes_pele: ['', Validators.compose([Validators.required])],
      linfonodos_consistencia: ['', Validators.compose([Validators.required])],
      linfonodos_descricao_dor: ['', Validators.compose([Validators.required])],
      linfonodos_dor: ['', Validators.compose([Validators.required])],
      linfonodos_localizacao: ['', Validators.compose([Validators.required])],
      linfonodos_mobilidade: ['', Validators.compose([Validators.required])],
      linfonodos_quantidade: ['', Validators.compose([Validators.required])],
      linfonodos_sensibilidade: ['', Validators.compose([Validators.required])],
      linfonodos_tamanho: ['', Validators.compose([Validators.required])],
      linfonodos_textura: ['', Validators.compose([Validators.required])],
      linfonodos_volume: ['', Validators.compose([Validators.required])],
      perfusao_capilar_lentificada_tempo: ['', Validators.compose([Validators.required])],
      perfusao_capilar_tipo: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }


  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Ectoscopiam Part3',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );

    } else if (this.identService.verifica.indexOf(1) > -1) {

      this.identService.allObject.isda.ectoscopia = Object.assign(this.identService.allObject.isda.ectoscopia, this.fGroup.value);

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.ectoscopia);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {
      this.identService.allObject.isda.ectoscopia = Object.assign(this.identService.allObject.isda.ectoscopia, this.fGroup.value);

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.ectoscopia);

      this.identService.verifica.push(8);
      console.log(this.identService.verifica);
    }


  }

}
