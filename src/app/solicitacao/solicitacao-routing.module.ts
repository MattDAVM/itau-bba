import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '../core/page/page/page.component';
import { SolicitacaoComponent } from './solicitacao.component';

const routes: Routes = [
  {
    path: 'solicitacao', component: SolicitacaoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SolicitacaoRoutingModule { }
