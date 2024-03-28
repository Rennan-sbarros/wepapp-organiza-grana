import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { FinancasComponent } from './pages/financas/financas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    LoadingComponent,
    FinancasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      tapToDismiss: true,
      progressAnimation: 'increasing'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
