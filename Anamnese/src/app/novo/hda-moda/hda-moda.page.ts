import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IdentificacaoService } from 'src/app/services/identificacao.service';

@Component({
  selector: 'app-hda-moda',
  templateUrl: './hda-moda.page.html',
  styleUrls: ['./hda-moda.page.scss'],
})
export class HdaModaPage implements OnInit {

  hda = {
    anotacoes_globais: ""
  }

  private texto: string;

  constructor(public modalController: ModalController, private identService: IdentificacaoService) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      return: true

    });
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.identService.allObject.anotacoes_globais = this.hda.anotacoes_globais;

  }
  ionViewWillEnter() {
    this.hda.anotacoes_globais = this.identService.allObject.anotacoes_globais;
  }

}
