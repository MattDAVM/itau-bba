import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiURL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  public route: string;
  public headerOptions: HttpHeaders;
  constructor(private http: HttpClient) {
    this.route = `${ApiURL}solicitacoes/`
    this.headerOptions = new HttpHeaders({
      'applicationid': 'matheusSilverioGoncalves'
    })
  }


  get(): Observable<any[]> {
    return this.http.get<any[]>(this.route);
  }

  getSolicitacaoById(id): Observable<any> {
    return this.http.get<any>(`${this.route}${id}`);
  }

  create(solicitacao): Observable<any> {
    return this.http.post(this.route, solicitacao);
    // return this.http.post(this.route, solicitacao, { headers: this.headerOptions });
  }

  update(id, solicitacao): Observable<any> {
    return this.http.put(`${this.route}${id}`, solicitacao);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.route}${id}`);
  }
}
