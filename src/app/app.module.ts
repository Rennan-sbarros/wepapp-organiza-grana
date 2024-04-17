import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { FinancasComponent } from './pages/financas/financas.component';
import { FinancasModule } from "./pages/financas/financas.module";
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegistroUsuarioComponent,
        LoginUsuarioComponent,
        LoadingComponent,
        FinancasComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
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
        }),
        FinancasModule
    ]
})
export class AppModule { }
