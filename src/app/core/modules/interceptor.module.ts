import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { requestRetry } from '../../../environments/environment';
import { StatusCodes } from '../../shared/enums/status-code.enum';
import { SecurityService } from '../../shared/services/security.service';
import { load } from '../../shared/components/load/load.component';
import { AlertService } from '../../shared/services/alert.service';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private alertService: AlertService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.securityService.getToken()) return;

    const _headers = this.createHeader([], request);

    return next.handle(request.clone(_headers)).pipe(
      retry(requestRetry),
      catchError((error: any) => {
        load.hide();
        return this.returnRedirectError(error);
      }));
  }

  private createHeader(_anonymousRoutes: any, req: HttpRequest<any>) {
    return _anonymousRoutes.some(route => req.url.includes(route)) ?
      { headers: req.headers } :
      { headers: req.headers.set('Authorization', `Bearer ${this.securityService.getToken()}`) };
  }

  private returnRedirectError(error: any) {
    if (error.status === StatusCodes.Unauthorized)
      this.router.navigateByUrl('/login');
    this.alertService.show(error);
    return throwError(error);
  }
}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    }
  ],
})


export class Interceptor { }
