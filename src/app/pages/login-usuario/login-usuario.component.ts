import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit{
 
  loginUsuarioForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private loadingService: LoadingService
  ){}
  
  ngOnInit(): void {
    this.inicializarFormLoginUsuario()
  }

  inicializarFormLoginUsuario(): void {
    this.loginUsuarioForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  
  limparCampos() {
    this.loginUsuarioForm.reset();
  }

  logarUsuario(){
    const { email, senha } = this.loginUsuarioForm.value;

    this.loadingService.mostrarLoading();
    
    this.authService.loginUsuario(email, senha).pipe(
      finalize(() => this.loadingService.ocultarLoading()))
    .subscribe({
      next: (result) => {
        this.authService.salvarToken(result.token);
        this.toastr.success('Usuário autenticado com sucesso!', 'Login');
        this.limparCampos();
      },
      error: (err) => {
        if (err.error && err.error.msg) {
          this.toastr.error(err.error.msg, 'Erro ao realizar login');
          this.loginUsuarioForm.patchValue({senha: ''});
        } else {
          this.loginUsuarioForm.patchValue({senha: ''});
          this.toastr.error('Erro desconhecido ao fazer login', 'Erro');
        }
      }
    })
  }
}

