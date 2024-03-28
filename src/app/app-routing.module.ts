import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "registro-usuario",
    loadChildren: () => import("./pages/registro-usuario/registro-usuario.module").then((m) => m.RegistroUsuarioModule),
  },
  {
    path: "login-usuario",
    loadChildren: () => import("./pages/login-usuario/login-usuario.module").then((m) => m.LoginUsuarioModule),
  },
  {
    path: "financas",
    loadChildren: () => import("./pages/financas/financas.module").then((m) => m.FinancasModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
