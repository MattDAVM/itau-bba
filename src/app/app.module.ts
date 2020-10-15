import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/page/header/header.component';
import { PageComponent } from './core/page/page/page.component';
import { SharedModule } from './shared/shared.module';
import { LoadComponent } from './shared/components/load/load.component';
import { LoginModule } from './login/login.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(pt);


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    LoginModule,
    SolicitacaoModule
  ],
  entryComponents: [],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
