import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenName } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SecurityService {

  constructor(private router: Router) { }

  public setToken(token: string): void {
    localStorage.setItem(TokenName, token);
  }

  public getToken(): string {
    return localStorage.getItem(TokenName);
  }

  public logout(): void {
    localStorage.removeItem(TokenName);
    this.router.navigate(['/login']);
  }

}
