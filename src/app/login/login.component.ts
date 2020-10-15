import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { load } from '../shared/components/load/load.component';
import { AuthLogin } from '../shared/interfaces/auth-login.interface';
import { AlertService } from '../shared/services/alert.service';
import { SecurityService } from '../shared/services/security.service';
import { EsqueciSenhaDialogComponent } from './shared/components/esqueci-senha-dialog/esqueci-senha-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authLogin: AuthLogin;

  public hide: boolean;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private alertService: AlertService,
    private securityService: SecurityService
  ) {
    this.hide = true;

    this.authLogin = {
      login: 'alfred',
      password: 'bba2020'
    };
  }

  ngOnInit() {
    this.securityService.logout();
  }

  logar() {
    load.show();
    if (!this.authLogin.login || this.authLogin.login.trim() === '' ||
      !this.authLogin.password || this.authLogin.password.trim() === '') {
      this.alertService.show('Preencha todos os campos!');
      load.hide();
      return;
    }

    load.hide();
    this.router.navigate(['solicitacao']);
    this.securityService.setToken(this.authLogin.login);
  }


  openEsqueciSenhaDialog() {
    this.dialog.open(EsqueciSenhaDialogComponent, {
      disableClose: true,
      width: '40vw',
    })
  }
}
