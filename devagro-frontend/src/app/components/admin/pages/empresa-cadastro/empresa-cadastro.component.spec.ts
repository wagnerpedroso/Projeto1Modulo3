import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCadastroComponent } from './empresa-cadastro.component';

describe('EmpresaCadastroComponent', () => {
  let component: EmpresaCadastroComponent;
  let fixture: ComponentFixture<EmpresaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpresaCadastroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testa inserir o nome da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: 'Fazenda teste',
      CNPJ: '',
      companyAddress: '',
      companyEmail: '',
      companyPhone: '',
      companyPassword: '',
      companyPassword_confirm: '',
    };
    component.save_companyName('Fazenda teste');
    expect('Fazenda teste').toBe(component.cadastro_empresa_info.companyName);
  });

  it('Testa inserir o CNPJ da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: '',
      CNPJ: '15.521.145/0001-99',
      companyAddress: '',
      companyEmail: '',
      companyPhone: '',
      companyPassword: '',
      companyPassword_confirm: '',
    };
    component.save_CNPJ('15.521.145/0001-99');
    expect('15.521.145/0001-99').toBe(component.cadastro_empresa_info.CNPJ);
  });

  it('Testa inserir o endereço da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: '',
      CNPJ: '',
      companyAddress: 'localization',
      companyEmail: '',
      companyPhone: '',
      companyPassword: '',
      companyPassword_confirm: '',
    };
    component.save_companyAddress('localization');
    expect('localization').toBe(component.cadastro_empresa_info.companyAddress);
  });

  it('Testa inserir o email da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: '',
      CNPJ: '',
      companyAddress: '',
      companyEmail: 'teste@teste.com',
      companyPhone: '',
      companyPassword: '',
      companyPassword_confirm: '',
    };
    component.save_companyEmail('teste@teste.com');
    expect('teste@teste.com').toBe(
      component.cadastro_empresa_info.companyEmail
    );
  });

  it('Testa inserir o telefone da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: '',
      CNPJ: '',
      companyAddress: '',
      companyEmail: '',
      companyPhone: '48984643162',
      companyPassword: '',
      companyPassword_confirm: '',
    };
    component.save_companyPhone('48984643162');
    expect('48984643162').toBe(component.cadastro_empresa_info.companyPhone);
  });

  it('Testa inserir a senha da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: '',
      CNPJ: '',
      companyAddress: '',
      companyEmail: '',
      companyPhone: '',
      companyPassword: '123',
      companyPassword_confirm: '',
    };
    component.save_companyPassword('123');
    expect('123').toBe(component.cadastro_empresa_info.companyPassword);
  });

  it('Testa inserir a confirmação de senha da empresa', () => {
    let cadastro_empresa_info = {
      id: 0,
      companyName: '',
      CNPJ: '',
      companyAddress: '',
      companyEmail: '',
      companyPhone: '',
      companyPassword: '',
      companyPassword_confirm: '123',
    };
    component.save_companyPassword_confirm('123');
    expect('123').toBe(component.cadastro_empresa_info.companyPassword_confirm);
  });

  it('Testa inserir uma nova empresa pela quantidade de itens da lista', () => {
    let cadastro_empresa_info = {};

    component.cadastro_empresa_info = cadastro_empresa_info;

    component.click_log_in();
    const qtd = Number(localStorage.getItem('quantidade_empresas_cadastradas'));
    expect(1).toEqual(qtd);
  });
});
