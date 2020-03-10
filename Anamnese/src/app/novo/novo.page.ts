import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HdaModaPage } from './hda-moda/hda-moda.page';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.page.html',
  styleUrls: ['./novo.page.scss'],
})
export class NovoPage implements OnInit {

  paciente = {
    nome: ''
  };

  constructor(public modalController: ModalController) { }


  async presentModal() {
    const modal = await this.modalController.create({
      component: HdaModaPage,
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
