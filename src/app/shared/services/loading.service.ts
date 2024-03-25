import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = new Subject<boolean>();

  constructor() { }

  mostrarLoading() {
    this.isLoading.next(true);
  }

  ocultarLoading() {
    this.isLoading.next(false);
  }

  isLoading$() {
    return this.isLoading.asObservable();
  }
}
