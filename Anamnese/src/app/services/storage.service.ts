
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Paciente } from 'src/app/interfaces/anamnese';


const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})

export class StorageService {


  constructor(private storage: Storage) { }

  async addItem(paciente: Paciente): Promise<any> {
    const items = await this.storage.get(ITEMS_KEY);
    if (items) {
      items.push(paciente);
      return this.storage.set(ITEMS_KEY, items);
    } else {
      return this.storage.set(ITEMS_KEY, [paciente]);
    }
  }

  // READ
  getItems(): Promise<Paciente[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // DELETE
  async deleteItem(nome: string): Promise<Paciente> {
    const items = await this.storage.get(ITEMS_KEY);
    if (!items || items.length === 0) {
      return null;
    }
    const toKeep: Paciente[] = [];
    for (const i of items) {
      if (i.paciente.nome !== nome) {
        console.log(i);
        toKeep.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, toKeep);
  }

}
