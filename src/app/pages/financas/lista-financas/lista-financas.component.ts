import { Component, OnInit } from '@angular/core';
import { Financas } from 'src/app/core/models/financas.model';
import { FinancasService } from 'src/app/shared/services/financas.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-financas',
  templateUrl: './lista-financas.component.html',
  styleUrls: ['./lista-financas.component.scss']
})
export class ListaFinancasComponent implements OnInit{
  financas: Financas[] = [];
  
  constructor(private financasService: FinancasService) { }

  ngOnInit(): void {
    this.getAllFinancasDoUsuario();
  }
  
  
  getAllFinancasDoUsuario(){
    this.financasService.getAllFinancas().subscribe({
      next: (result) => {
        this.financas = result;
        console.log(this.financas)
      }
    })
  }
}
