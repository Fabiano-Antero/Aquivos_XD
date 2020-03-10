import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExameCardiovascularPage } from './exame-cardiovascular.page';

const routes: Routes = [
  {
    path: '',
    component: ExameCardiovascularPage
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
  declarations: [ExameCardiovascularPage]
})
export class ExameCardiovascularPageModule {}
