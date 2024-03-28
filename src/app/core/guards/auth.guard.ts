import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login-usuario']);
      this.toastr.info('Para acessar as funcionalidades do sistema é necessário realizar o login.', 'Login')
      return false;
    }
  }
}
