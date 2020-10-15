import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AlertService {
  constructor(public toaster: MatSnackBar) { }

  show(mensagem: string, tempoEmSegundos?: number): void {
    this.toaster.open(mensagem, 'Fechar', {
      duration: tempoEmSegundos !== undefined ? tempoEmSegundos * 1000 : 3000
    });
  }
}
