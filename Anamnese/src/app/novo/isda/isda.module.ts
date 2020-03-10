import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
Autenticação
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IsdaPage } from './isda.page';

const routes: Routes = [
  {
    path: '',
    component: IsdaPage
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
  declarations: [
    IsdaPage
  ]
})
export class IsdaPageModule {}
