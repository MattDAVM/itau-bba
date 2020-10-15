import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { EsqueciSenhaDialogComponent } from './shared/components/esqueci-senha-dialog/esqueci-senha-dialog.component';

@NgModule({
  declarations: [LoginComponent, EsqueciSenhaDialogComponent],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  entryComponents: [EsqueciSenhaDialogComponent],
})
export class LoginModule { }
