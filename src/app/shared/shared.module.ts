import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ConfirmacaoDialogComponent } from './components/confirmacao-dialog/confirmacao-dialog.component';

@NgModule({
  declarations: [ConfirmacaoDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
