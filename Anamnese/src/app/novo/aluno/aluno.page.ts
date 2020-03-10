import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  public fGroup: FormGroup;


  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) {


    // Faz a validação dos campos
    this.fGroup = this.fBuilder.group({

      nome: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(250)])],
      // tslint:disable-next-line: max-line-length
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])],
      matricula: [null, Validators.compose([Validators.required, Validators.min(999999999), Validators.max(9999999999)])],
      grupo: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(250)])]
    });

  }

  ngOnInit() {

  }

  // Metodo que é executado ao sair da pagina
  ionViewWillLeave() {

    // ** Esse if verifica se tem campos vazios, se true ele gera um alerta, se false ele envia para o json */
    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Identificação do Aluno',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );

    } else if (this.identService.verifica.indexOf(0) > -1) {

      // evia para o big json
      this.identService.allObject.aluno = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.aluno);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {

      // evia para o big json
      this.identService.allObject.aluno = this.fGroup.value;

      // visualizar resultadonos no console
      console.log(this.identService.allObject.aluno);

      this.identService.verifica.push(0);
      console.log(this.identService.verifica);


    }

  }


}
