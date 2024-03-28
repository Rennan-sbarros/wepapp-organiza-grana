import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancasRoutingModule } from './financas-routing.module';
import { ListaFinancasComponent } from './lista-financas/lista-financas.component';


@NgModule({
  declarations: [
    ListaFinancasComponent
  ],
  imports: [
    CommonModule,
    FinancasRoutingModule
  ]
})
export class FinancasModule { }
