import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';
/*

 Import das das bibliotecas para validação das entradas

 */

import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-habitos-de-vida',
  templateUrl: './habitos-de-vida.page.html',
  styleUrls: ['./habitos-de-vida.page.scss'],
})
export class HabitosDeVidaPage implements OnInit {



  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private identService: IdentificacaoService) 
    {


    this.fGroup = this.fBuilder.group({

      ajustamento_familiar: ['', Validators.compose([Validators.required])],
      alimentacao: ['', Validators.compose([Validators.required])],
      atividades_fisicas: ['', Validators.compose([Validators.required])],
      banho_frequencia: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      banho_ultimo_banho: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      banho_valor: ['', Validators.compose([Validators.required])],
      condicoes_sociais: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      condicoes_culturais: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      consumo_alcool: ['', Validators.compose([Validators.required])],
      contato_animais: ['', Validators.compose([Validators.required])],
      contato_triatomineo: [''],
      drogas_outros: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      drogas_valor: ['', Validators.compose([Validators.required])],
      habitacao: ['', Validators.compose([Validators.required])],
      lazer: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      padraosono_acorda_antes: [''],
      padraosono_acorda_durante: [''],
      padraosono_demora_iniciar: [''],
      padraosono_valor: ['', Validators.compose([Validators.required])],
      tabagismo_valor: [''],
      tabagismo_anos_maco: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      vida_conjugal: ['', Validators.compose([Validators.required])]

    });

  }

  /*
   Metodo que verifica se os campos ocultos foram ativado e verifica
   e aplica as validações.
  */

  setOcultValidate() {
    const fumanteContol = this.fGroup.get('tabagismo_anos_maco');

    this.fGroup.get('tabagismo_valor').valueChanges

      .subscribe(tabagismoValor => {

        if (tabagismoValor === 'Ex-tabagista') {
          fumanteContol.setValidators([Validators.required]);

        } else {
          fumanteContol.clearValidators();

        }
        fumanteContol.updateValueAndValidity();
      });


  }

  ngOnInit() {

    // Chama o metodo que verifica se o campo oculto foi ativado e se sim torna ele obrigatório
    this.setOcultValidate();

  }

  ionViewWillLeave() {


    if (!this.fGroup.valid) {

      this.identService.alerta(
        'Hábitos de Vida',
        'Você deixou campos vazios ou preenchidos de forma errada, lembre-se de voltar para corrigi-los.',
      );


    } else if (this.identService.verifica.indexOf(4) > -1) {

      // converta para string o contato_animais
      this.fGroup.value.contato_animais = this.fGroup.value.contato_animais.toString();

      // Evia tudo para o big json
      this.identService.allObject.isda.habitos_de_vida = this.fGroup.value;



      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.habitos_de_vida);
      console.log(this.identService.verifica);
      console.log(this.identService.verificador());

    } else {

      // converta para string o contato_animais
      this.fGroup.value.contato_animais = this.fGroup.value.contato_animais.toString();

      // Evia tudo para o big json
      this.identService.allObject.isda.habitos_de_vida = this.fGroup.value;


      // visualizar resultadonos no console
      console.log(this.identService.allObject.isda.habitos_de_vida);

      this.identService.verifica.push(4);
      console.log(this.identService.verifica);
    }


  }

}

