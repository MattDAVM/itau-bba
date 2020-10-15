import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SolicitacaoService } from 'src/app/shared/services/solicitacao.service';

@Component({
  selector: 'app-detalhes-dialog',
  templateUrl: './detalhes-dialog.component.html',
  styleUrls: ['./detalhes-dialog.component.scss']
})
export class DetalhesDialogComponent implements OnInit {

  public planos: any[];
  public solicitacao: any;
  public solicitacoes: any[];
  public colunasTabelaSolicitacoes: string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetalhesDialogComponent>,
    private solicitacaoService: SolicitacaoService,
    private alertService: AlertService) {
    this.solicitacao = {};
    this.planos = ['FaleMais 30', 'FaleMais 60', 'FaleMais 120'];
  }

  ngOnInit(): void {
    this.loadSolicitacao(this.data.solicitacaoId);
  }

  loadSolicitacao(solicitacaoId) {
    this.solicitacaoService.getSolicitacaoById(solicitacaoId).subscribe((solicitacao) => {
      this.solicitacao = solicitacao;

      if (solicitacao.dateAdesao)
        this.solicitacao.dateAdesao = new Date(solicitacao.dateAdesao);
      console.log(this.solicitacao)
    });
  }

  editarSolicitacao() {
    if (!this.hasCamposValidos()) {
      this.alertService.show(`Preencha todos os campos`);
      return;
    }

    this.solicitacaoService.update(this.data.solicitacaoId, this.solicitacao).subscribe((response: any) => {
      this.dialogRef.close(response);
    });
  }

  hasCamposValidos() {
    return !(!this.solicitacao.empresa || !this.solicitacao.cnpj ||
      !this.solicitacao.plano || !this.solicitacao.tarifa
      || !this.solicitacao.vplano || !this.solicitacao.dateAdesao)
  }

}
