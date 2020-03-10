import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'arquivos',
    loadChildren: './arquivos/arquivos.module#ArquivosPageModule'
  },
  {
    path: 'hda',
    loadChildren: './hda/hda.module#HdaPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: '',
    loadChildren: './novo/novo.module#NovoPageModule'
  },
  {
    path: 'listanamnese',
    loadChildren: './listanamnese/listanamnese.module#ListanamnesePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // * ,preloadingStrategy: PreloadAllModules*//
        useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
