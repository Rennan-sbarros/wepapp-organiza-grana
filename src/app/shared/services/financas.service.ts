import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Financas } from 'src/app/core/models/financas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancasService {
  apiUrl = `${environment.baseURL}/financas`;
  
  constructor(public http: HttpClient) { }

  getAllFinancas():Observable<Financas[]>{
    return this.http.get<Financas[]>(this.apiUrl)
  }
}
