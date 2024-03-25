import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit{
 
  loginUsuarioForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
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

  limparSenhas(){
    this.loginUsuarioForm.patchValue({
      senha: '',
      
    });
  }

  logarUsuario(){
    const { email, senha } = this.loginUsuarioForm.value;

    this.authService.loginUsuario(email, senha).subscribe({
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

