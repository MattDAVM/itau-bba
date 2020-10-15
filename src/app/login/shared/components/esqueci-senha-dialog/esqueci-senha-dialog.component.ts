import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { load } from 'src/app/shared/components/load/load.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-esqueci-senha-dialog',
  templateUrl: './esqueci-senha-dialog.component.html',
  styleUrls: ['./esqueci-senha-dialog.component.scss']
})
export class EsqueciSenhaDialogComponent implements OnInit {
  public email: string;

  constructor(
    private alertService: AlertService,
    public dialogRef: MatDialogRef<EsqueciSenhaDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  esqueciSenha(): void {
    load.show();
    if (!this.email || this.email.trim() === '') {
      this.alertService.show('Preencha todos os campos!');
      load.hide();
    }

    this.alertService.show(`Email com link para redefinição de senha enviado com sucesso`, 5);
    this.dialogRef.close();
    load.hide();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
