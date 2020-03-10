import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

// Import das das bibliotecas para validação das entradas
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-ectoscopia',
  templateUrl: './ectoscopia.page.html',
  styleUrls: ['./ectoscopia.page.scss'],
})
export class EctoscopiaPage implements OnInit {


  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {

    this.fGroup = this.fBuilder.group({

      estado_geral: ['', Validators.compose([Validators.required])],
      nivel_consciencia_lucidez: ['', Validators.compose([Validators.required])],
      nivel_consciencia_orientacao: ['', Validators.compose([Validators.required])],
      interacoes_exp_facial: [''],
      interacoes_fala_linguagem: [''],
      interacoes_fala_linguagem_detalhes: ['', Validators.compose([Validators.required])],
      interacoes_exp_facial_detalhes: ['', Validators.compose([Validators.required])],
      mov_involuntarios_presenca: [''],
      estado_hidratacao_quantificacao: ['', Validators.compose([Validators.required])],
      estado_hidratacao_tipo: ['', Validators.compose([Validators.required])],
      estado_nutricional_estado: ['', Validators.compose([Validators.required])],
      estado_nutricional_quantidade: ['', Validators.compose([Validators.required])],
      acies: ['', Validators.compose([Validators.required])],
      atitude_decubito: ['', Validators.compose([Validators.required])],
      postura_atitude: ['', Validators.compose([Validators.required])],
      mov_involuntarios: ['', Validators.compose([Validators.required])],
      mov_involuntarios_descricao: ['', Validators.compose([Validators.required])],
      biotipo: ['', Validators.compose([Validators.required])]
    });
  }

  // esse metodo atribui o valorde campo obrigatorio para quando os campos ocultros são ativados
  setOcultValidate() {

    const ifldContol = this.fGroup.get('interacoes_fala_linguagem_detalhes');
    const iefdContol = this.fGroup.get('interacoes_exp_facial_detalhes');
    const moviContol = this.fGroup.get('mov_involuntarios');
    const movidContol = this.fGroup.get('mov_involuntarios_descricao');


    this.fGroup.get('interacoes_fala_linguagem').valueChanges.subscribe(falalinGuagem => {

      if (falalinGuagem === 'sim') {
        ifldContol.setValidators([Validators.required, Validators.maxLength(250)]);
      } else {
        ifldContol.clearValidators();
      }
      ifldContol.updateValueAndValidity();

    });

    this.fGroup.get('interacoes_exp_facial').valueChanges.subscribe(exprecoesFaciais => {

      if (exprecoesFaciais === 'sim') {
        iefdContol.setValidators([Validators.required, Validators.maxLength(250)]);
      } else {
        iefdContol.clearValidators();
      }
      iefdContol.updateValueAndValidity();

    });

    this.fGroup.get('mov_involuntarios_presenca').valueChanges.subscribe(movInvPre => {

      if (movInvPre === 'sim') {
        moviContol.setValidators([Validators.required, Validators.maxLength(250)]);
        movidContol.setValidators([Validators.required, Validators.maxLength(250)]);
      } else {
        moviContol.clearValidators();
        movidContol.clearValidators();
      }
      moviContol.updateValueAndValidity();
      movidContol.updateValueAndValidity();

    });

  }

  ngOnInit() {
    this.setOcultValidate();
  }


  // Metodo que envia os dados
  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Ectoscopiam Part1',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );

    } else if (this.identService.verifica.indexOf(6) > -1) {
      this.fGroup.value.acies = this.fGroup.value.acies.toString();
      this.fGroup.value.atitude_decubito = this.fGroup.value.atitude_decubito.toString();
      this.fGroup.value.postura_atitude = this.fGroup.value.postura_atitude.toString();
      this.fGroup.value.biotipo = this.fGroup.value.biotipo.toString();
      if (this.fGroup.value.interacoes_fala_linguagem_detalhes === null) {
        this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes;
      } else {
        this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes.toString();
      }
      if (this.fGroup.value.interacoes_exp_facial_detalhes === null) {
        this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes;
      } else {
        this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes.toString();
      }
      if (this.fGroup.value.mov_involuntarios === null) {
        this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios;
      } else {
        this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios.toString();
      }

      this.identService.allObject.isda.ectoscopia = this.fGroup.value;


      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.ectoscopia);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {

      this.fGroup.value.acies = this.fGroup.value.acies.toString();
      this.fGroup.value.atitude_decubito = this.fGroup.value.atitude_decubito.toString();
      this.fGroup.value.postura_atitude = this.fGroup.value.postura_atitude.toString();
      this.fGroup.value.biotipo = this.fGroup.value.biotipo.toString();
      if (this.fGroup.value.interacoes_fala_linguagem_detalhes === null) {
        this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes;
      } else {
        this.fGroup.value.interacoes_fala_linguagem_detalhes = this.fGroup.value.interacoes_fala_linguagem_detalhes.toString();
      }
      if (this.fGroup.value.interacoes_exp_facial_detalhes === null) {
        this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes;
      } else {
        this.fGroup.value.interacoes_exp_facial_detalhes = this.fGroup.value.interacoes_exp_facial_detalhes.toString();
      }
      if (this.fGroup.value.mov_involuntarios === null) {
        this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios;
      } else {
        this.fGroup.value.mov_involuntarios = this.fGroup.value.mov_involuntarios.toString();
      }

      this.identService.allObject.isda.ectoscopia = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.ectoscopia);

      this.identService.verifica.push(6);
      console.log(this.identService.verifica);

    }
  }

}
