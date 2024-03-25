import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/Auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
    canActivate: [AuthGuard] // retirar posteriomente. Feito apenas para teste.
  },
  {
    path: "registro-usuario",
    loadChildren: () => import("./pages/registro-usuario/registro-usuario.module").then((m) => m.RegistroUsuarioModule),
  },
  {
    path: "login-usuario",
    loadChildren: () => import("./pages/login-usuario/login-usuario.module").then((m) => m.LoginUsuarioModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
