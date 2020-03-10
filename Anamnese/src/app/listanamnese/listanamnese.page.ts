
import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Paciente } from 'src/app/interfaces/anamnese';
import { Platform, IonList, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { IdentificacaoService } from '../services/identificacao.service';
import { Network } from '@ionic-native/network/ngx';




@Component({
  selector: 'app-listanamnese',
  templateUrl: './listanamnese.page.html',
  styleUrls: ['./listanamnese.page.scss'],
})
export class ListanamnesePage implements OnInit {

  public pacientes: Paciente[] = [];


  @ViewChild('mylist') mylist: IonList;

  constructor(
    private storageService: StorageService,
    private plt: Platform,
    private identService: IdentificacaoService,
    public alertController: AlertController,
    private network: Network,

  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    });

  }

  ngOnInit() {
    this.identService.callData();

  }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.pacientes = items;

      console.log(this.pacientes);
    });
  }

  // Metodo que envia do armazenamento local para a api
  async sendToApi(paciente: Paciente) {
    if (this.network.type === 'none') {
      this.alerta('Sem conexão!');
    } else {
      this.storageService.getItems().then(items => {
        this.pacientes = items;
        this.identService.allObject = this.pacientes.reduce(() => Object.assign({}));
        this.identService.callpostDataStorage();
        this.storageService.deleteItem(paciente.paciente.nome).then(item => {
        });
      });

    }
  }

  // DELETE
  async deleteItem(paciente: Paciente) {
    this.storageService.deleteItem(paciente.paciente.nome).then(item => {
      this.alerta('Excluído!');
    });
  }

  async alerta(msg) {
    const alert = await this.alertController.create({
      header: 'Dados da Anamnese',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


  transformTime(myDate: Date) {
    return moment(myDate).format("DD/MM/YYYY");
  }

}


