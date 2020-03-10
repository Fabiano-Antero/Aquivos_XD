import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';
import { NovoPage } from '../novo.page';

/*
 Import das das bibliotecas para validação das entradas
*/
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/*
Importe da biblioteca para o alert
*/



@Component({
  selector: 'app-identificacao',
  templateUrl: './identificacao.page.html',
  styleUrls: ['./identificacao.page.scss'],
})
export class IdentificacaoPage implements OnInit {


  public fGroup: FormGroup;


  // tslint:disable-next-line: max-line-length
  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService,
    private Principal: NovoPage) {



    // Faz a validação dos campos
    this.fGroup = this.fBuilder.group({

      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])],

      idade: [Number, Validators.compose([
        Validators.required,
        Validators.max(999)
      ])],

      cor: ['', Validators.compose([
        Validators.required
      ])],

      estado_civil: ['', Validators.compose([
        Validators.required
      ])],

      sexo: ['', Validators.compose([
        Validators.required
      ])],

      posicionamento_sexual: ['', Validators.compose([
        Validators.required
      ])],

      nacionalidade: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])],

      religiao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])],

      profissao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])],

      enfermaria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])],

      leito: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])],

      hora_inicio: [Date, Validators.compose([
        Validators.required
      ])],

      queixa_principal: ['', Validators.compose([
        Validators.required
      ])]

    });


  }


  ngOnInit() {
  }


  ionViewWillLeave() {

    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Identificação do Paciente',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );

      // verificação de página
      this.identService.validacao = this.fGroup.valid;

    } else if (this.identService.verifica.indexOf(1) > -1) {

      // evia para o big json
      this.identService.allObject.paciente = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.paciente);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {

      // evia para o big json
      this.identService.allObject.paciente = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.paciente);

      this.identService.verifica.push(1);
      console.log(this.identService.verifica);


    }

    // captura o nome do pacienta para setar na titulo
    this.Principal.paciente.nome = this.fGroup.value.nome;


  }
}
