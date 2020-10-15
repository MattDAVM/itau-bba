import { NgModule } from '@angular/core';
import { SolicitacaoRoutingModule } from './solicitacao-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SolicitacaoComponent } from './solicitacao.component';
import { DetalhesDialogComponent } from './shared/components/detalhes-dialog/detalhes-dialog.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [SolicitacaoComponent, DetalhesDialogComponent],
  imports: [
    SolicitacaoRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class SolicitacaoModule { }
