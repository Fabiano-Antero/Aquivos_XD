import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
Autenticação
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HabitosDeVidaPage } from './habitos-de-vida.page';



const routes: Routes = [
  {
    path: '',
    component: HabitosDeVidaPage
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
  declarations: [HabitosDeVidaPage]
})
export class HabitosDeVidaPageModule {}
