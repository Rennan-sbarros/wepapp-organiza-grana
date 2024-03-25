import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${environment.baseURL}/auth`;
  
  constructor(public http: HttpClient) { }

  registroUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}/registro`, usuario)
  }

  loginUsuario(email: string, senha: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha })
  }
  
  salvarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
