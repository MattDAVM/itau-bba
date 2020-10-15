import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './core/page/page/page.component';
import { LoginComponent } from './login/login.component';
import { Guard } from './core/guards/guard.guard';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: PageComponent,
    children: [
      {
        path: 'solicitacao', component: SolicitacaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
