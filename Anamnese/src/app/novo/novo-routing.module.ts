import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { NovoPage } from './novo.page';


const routes: Routes = [
  {
    path: 'novo',
    component: NovoPage,
    children: [
    {
      path: 'aluno',
      children: [
        {
          path: '',
          loadChildren: './aluno/aluno.module#AlunoPageModule'
        }
      ]
    },
      {
        path: 'id',
        children: [
          {
            path: '',
            loadChildren: './identificacao/identificacao.module#IdentificacaoPageModule'
          }
        ]
      },
      {
        path: 'isda',
        children: [
          {
            path: '',
            loadChildren: './isda/isda.module#IsdaPageModule'
          }
        ]
      },
      {
        path: 'isda2',
        children: [
          {
            path: '',
            loadChildren: './isda/page2/page2.module#Page2PageModule'
          }
        ]
      },
      {
        path: 'isda3',
        children: [
          {
            path: '',
            loadChildren: './isda/page3/page3.module#Page3PageModule'
          }
        ]
      },
      {
        path: 'isda4',
        children: [
          {
            path: '',
            loadChildren: './isda/page4/page4.module#Page4PageModule'
          }
        ]
      },
      {
        path: 'isda5',
        children: [
          {
            path: '',
            loadChildren: './isda/page5/page5.module#Page5PageModule'
          }
        ]
      },
      {
        path: 'isda6',
        children: [
          {
            path: '',
            loadChildren: './isda/page6/page6.module#Page6PageModule'
          }
        ]
      },
      {
        path: 'isda7',
        children: [
          {
            path: '',
            loadChildren: './isda/page7/page7.module#Page7PageModule'
          }
        ]
      },
      {
        path: 'ats',
        children: [
          {
            path: '',
            loadChildren: './antecedentes/antecedentes.module#AntecedentesPageModule'
          }
        ]
      },
      {
        path: 'ec',
        children: [
          {
            path: '',
            loadChildren: './exame-cardiovascular/exame-cardiovascular.module#ExameCardiovascularPageModule'
          }
        ]
      },
      {
        path: 'eda',
        children: [
          {
            path: '',
            loadChildren: './exame-do-abdome/exame-do-abdome.module#ExameDoAbdomePageModule'
          }
        ]
      },
      {
        path: 'er',
        children: [
          {
            path: '',
            loadChildren: './exame-respiratorio/exame-respiratorio.module#ExameRespiratorioPageModule'
          }
        ]
      },
      {
        path: 'hps',
        children: [
          {
            path: '',
            loadChildren: './habitos-de-vida/habitos-de-vida.module#HabitosDeVidaPageModule'
          }
        ]
      },
      {
        path: 'ectoscopia',
        children: [
          {
            path: '',
            loadChildren: './ectoscopia/ectoscopia.module#EctoscopiaPageModule'
          }
        ]
      },
      {
        path: 'ect02',
        children: [
          {
            path: '',
            loadChildren: './ectoscopia/ect02/ect02.module#Ect02PageModule'
          }
        ]
      },
      {
        path: 'ect03',
        children: [
          {
            path: '',
            loadChildren: './ectoscopia/ect03/ect03.module#Ect03PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/novo/aluno',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoRoutingModule { }
