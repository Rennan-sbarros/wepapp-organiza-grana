import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFinancasComponent } from './lista-financas.component';

describe('ListaFinancasComponent', () => {
  let component: ListaFinancasComponent;
  let fixture: ComponentFixture<ListaFinancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFinancasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
