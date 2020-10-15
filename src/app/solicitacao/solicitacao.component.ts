import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitacaoService } from '../shared/services/solicitacao.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../shared/services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesDialogComponent } from './shared/components/detalhes-dialog/detalhes-dialog.component';
import { ConfirmacaoDialogComponent } from '../shared/components/confirmacao-dialog/confirmacao-dialog.component';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  public planos: any[];
  public solicitacao: any;
  public solicitacoes: any[];
  public colunasTabelaSolicitacoes: string[];

  constructor(private dialog: MatDialog,
    private solicitacaoService: SolicitacaoService,
    private alertService: AlertService) {
    this.solicitacao = {};
    this.solicitacoes = [];
    this.planos = ['FaleMais 30', 'FaleMais 60', 'FaleMais 120'];
    this.colunasTabelaSolicitacoes = ['id', 'empresa', 'plano', 'tarifa', 'minutos', 'vplano', 'dateAdesao', 'dateEmissao', 'acao'];
  }

  ngOnInit(): void {
    this.loadSolicitacoes();
  }

  loadSolicitacoes() {
    this.solicitacaoService.get().subscribe((solicitacoes: any[]) => {
      this.solicitacoes = solicitacoes;
    });
  }

  adicionarSolicitacao() {
    if (!this.hasCamposValidos()) {
      this.alertService.show(`Preencha todos os campos`);
      return;
    }
    this.solicitacao.dateEmissao = new Date();
    this.solicitacaoService.create(this.solicitacao).subscribe((response) => {
      if (response) {
        this.solicitacoes.push(this.solicitacao);
        this.alertService.show('Solicitação cadastrada com sucesso', 3);
        this.solicitacao = {};
        this.loadSolicitacoes();
      }
    });
  }

  deletarSolicitacao(solicitacao) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: { pergunta: 'Você tem certeza de que deseja excluir a solicitação selecionada?', id: solicitacao._id },
      disableClose: true,
      maxWidth: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.solicitacaoService.delete(solicitacao._id).subscribe((response) => {
          if (response) {
            this.loadSolicitacoes();
            this.alertService.show('Solicitação excluída com sucesso', 4)
          }
        });
    });
  }

  openDialogSolicitacao(isEdit: boolean, solicitacaoId: string) {

    const dialogRef = this.dialog.open(DetalhesDialogComponent, {
      data: { isEdit, solicitacaoId },
      disableClose: isEdit ? false : true,
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.message === 'Alterado')
          this.alertService.show('Solicitação editada com sucesso', 3);
        this.loadSolicitacoes();
      }

    });
  }

  hasCamposValidos() {
    return !(!this.solicitacao.empresa || !this.solicitacao.cnpj ||
      !this.solicitacao.plano || !this.solicitacao.tarifa
      || !this.solicitacao.vplano || !this.solicitacao.dateAdesao)
  }
}
