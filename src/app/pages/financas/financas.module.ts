import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancasRoutingModule } from './financas-routing.module';
import { ListaFinancasComponent } from './lista-financas/lista-financas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListaFinancasComponent
  ],
  imports: [
    CommonModule,
    FinancasRoutingModule,
    FontAwesomeModule 
  ],
  exports: [
    ListaFinancasComponent,
  ]
})
export class FinancasModule { }
