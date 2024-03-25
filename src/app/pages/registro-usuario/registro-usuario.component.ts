import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit{
 
  registroUsuarioForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ){}
  
  ngOnInit(): void {
    this.inicializarFormRegistroUsuario()
  }

  inicializarFormRegistroUsuario(): void {
    this.registroUsuarioForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmacaoSenha: new FormControl('', Validators.required)
    });
  }
  
  registrarUsuario(){
    const payload = this.registroUsuarioForm.value;

    this.authService.registroUsuario(payload).subscribe({
      next: (result) => {
        this.toastr.success('Usuário criado com sucesso!', 'Registro');
      },
      error: (err) => {
        if (err.error && err.error.msg) {
          this.toastr.error(err.error.msg, 'Erro ao realizar cadastro');
        } else {
          this.toastr.error('Erro desconhecido ao realizar cadastro', 'Erro');
        }
      }
    })
  }
}
