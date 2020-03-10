import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NovoRoutingModule } from './novo-routing.module';
import { IonicModule } from '@ionic/angular';
import { NovoPage } from './novo.page';

// O módulo modal
import { HdaModaPageModule } from './hda-moda/hda-moda.module';

const routes: Routes = [
  {
    path: '',
    component: NovoPage
  }
];

@NgModule({
  declarations: [NovoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoRoutingModule,
    HdaModaPageModule,
    RouterModule.forChild(routes)
  ]
})
export class NovoPageModule { }
