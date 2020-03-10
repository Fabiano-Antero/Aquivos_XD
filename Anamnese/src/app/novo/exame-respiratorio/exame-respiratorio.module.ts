import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExameRespiratorioPage } from './exame-respiratorio.page';

const routes: Routes = [
  {
    path: '',
    component: ExameRespiratorioPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExameRespiratorioPage]
})
export class ExameRespiratorioPageModule {}
