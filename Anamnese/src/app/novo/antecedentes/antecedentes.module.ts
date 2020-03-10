import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
Autenticação
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AntecedentesPage } from './antecedentes.page';

const routes: Routes = [
  {
    path: '',
    component: AntecedentesPage
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
  declarations: [AntecedentesPage]
})
export class AntecedentesPageModule {}
