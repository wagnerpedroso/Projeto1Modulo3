import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosComponent } from './funcionarios.component';

describe('FuncionariosComponent', () => {
  let component: FuncionariosComponent;
  let fixture: ComponentFixture<FuncionariosComponent>;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [FuncionariosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(FuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('testa funcionario component', () => {
    let listaObj ={
      name: 'teste',
      id: 0,
      farm:'fazenda1',
      CPF: '123',
      telephone: '123',
      mainFunction: 'dev',
      active: 'true',
    }
     listaObj = listaFuncionarios 
    expect(component.listaObj).toBeTruthy();
  });
  */
});
