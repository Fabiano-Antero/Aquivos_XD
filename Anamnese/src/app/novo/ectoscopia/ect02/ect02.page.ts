import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-ect02',
  templateUrl: './ect02.page.html',
  styleUrls: ['./ect02.page.scss'],
})
export class Ect02Page implements OnInit {

  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {

    this.fGroup = this.fBuilder.group({

      faneros_cabelos_brilho: ['', Validators.compose([Validators.required])],
      faneros_cabelos_coloracao: ['', Validators.compose([Validators.required])],
      faneros_cabelos_distribuicao: ['', Validators.compose([Validators.required])],
      faneros_cabelos_quantidade: ['', Validators.compose([Validators.required])],
      faneros_cabelos_tipos_implatacao: ['', Validators.compose([Validators.required])],
      faneros_unhas_cor: ['', Validators.compose([Validators.required])],
      faneros_unhas_formato: ['', Validators.compose([Validators.required])],
      faneros_unhas_resistencia: ['', Validators.compose([Validators.required])],
      pele_coloracao: ['', Validators.compose([Validators.required])],
      pele_continuidade: ['', Validators.compose([Validators.required])],
      pele_elasticidade: ['', Validators.compose([Validators.required])],
      pele_espessura: ['', Validators.compose([Validators.required])],
      pele_lesoes_elementares: ['', Validators.compose([Validators.required])],
      pele_mobilidade: ['', Validators.compose([Validators.required])],
      pele_sensibilidade: ['', Validators.compose([Validators.required])],
      pele_temperatura: ['', Validators.compose([Validators.required])],
      pele_textura: ['', Validators.compose([Validators.required])],
      pele_turgor: ['', Validators.compose([Validators.required])],
      pele_umidade: ['', Validators.compose([Validators.required])],
      mucosas_coloracao: ['', Validators.compose([Validators.required])],
      mucosas_hidratacao: ['', Validators.compose([Validators.required])],
      mucosas_lesoes: [''],
      tecido_celular_subcutaneo_espessura: [''],
      tecido_celular_subcutaneo_espasticidade: [''],
      tecido_celular_subcutaneo_flacidez: ['']

    });
  }

  ngOnInit() {
  }


  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Ectoscopiam Part2',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );


    } else if (this.identService.verifica.indexOf(7) > -1) {

      this.identService.allObject.isda.ectoscopia = Object.assign(this.identService.allObject.isda.ectoscopia, this.fGroup.value);

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.ectoscopia);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {

      this.identService.allObject.isda.ectoscopia = Object.assign(this.identService.allObject.isda.ectoscopia, this.fGroup.value);

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.ectoscopia);

      this.identService.verifica.push(7);
      console.log(this.identService.verifica);
    }

  }

}
