import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SecurityService } from 'src/app/shared/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nameInitials: string;

  constructor(private dialog: MatDialog,
    private alertService: AlertService,
    private securityService: SecurityService) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.securityService.logout();
  }

  openAlertAjuda(){
    this.alertService.show('Precisa de ajuda? Ligue para o nosso SAC pelo número: 0800 570 0011', 5);
  }

}
