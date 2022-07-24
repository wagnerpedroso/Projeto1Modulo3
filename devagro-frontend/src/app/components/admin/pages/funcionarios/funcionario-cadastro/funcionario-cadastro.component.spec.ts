import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCadastroComponent } from './funcionario-cadastro.component';

describe('FuncionarioCadastroComponent', () => {
  let component: FuncionarioCadastroComponent;
  let fixture: ComponentFixture<FuncionarioCadastroComponent>;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [FuncionarioCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('teste', () => {
    const size = component.listaFuncionariosArmazenamento.length;
    expect(0).toEqual(size);
  });

  it('Testa o nome do funcionario', () => {
    let employeeInformation = {
      id: 0,
      farm: '',
      name: 'Teste Funcionario',
      CPF: '',
      telephone: '',
      mainFunction: '',
      active: '',
    };
    component.alter_name('Teste Funcionario');
    expect('Teste Funcionario').toBe(component.funcionario_info.name);
  });

  it('Testa o numero do CPF', () => {
    let employeeInformation = {
      id: 0,
      farm: '',
      name: '',
      CPF: '88457123654',
      telephone: '',
      mainFunction: '',
      active: '',
    };
    component.alter_CPF('88457123654');
    expect('88457123654').toBe(component.funcionario_info.CPF);
  });

  it('Testa o nome da fazenda', () => {
    let employeeInformation = {
      id: 0,
      farm: 'fazenda Teste',
      name: '',
      CPF: '',
      telephone: '',
      mainFunction: '',
      active: '',
    };
    component.alter_farm('fazenda Teste');
    expect('fazenda Teste').toBe(component.funcionario_info.farm);
  });

  it('Testa o numero do Telefone', () => {
    let employeeInformation = {
      id: 0,
      farm: '',
      name: '',
      CPF: '48984643162',
      telephone: '',
      mainFunction: '',
      active: '',
    };
    component.alter_telephone('48984643162');
    expect('48984643162').toBe(component.funcionario_info.telephone);
  });

  it('Testa o nome da função principal', () => {
    let employeeInformation = {
      id: 0,
      farm: '',
      name: '',
      CPF: '',
      telephone: '',
      mainFunction: 'Teste função',
      active: '',
    };
    component.alter_mainFunction('Teste função');
    expect('Teste função').toBe(component.funcionario_info.mainFunction);
  });

  it('Testa se o funcionario está ativo', () => {
    let employeeInformation = {
      id: 0,
      farm: '',
      name: '',
      CPF: '',
      telephone: '',
      mainFunction: '',
      active: true,
    };
    component.alter_active(true);
    expect(true).toBe(component.funcionario_info.active);
  });

  it('Testa se o funcionario não está ativo', () => {
    let employeeInformation = {
      id: 0,
      farm: '',
      name: '',
      CPF: '',
      telephone: '',
      mainFunction: '',
      active: false,
    };
    component.alter_active(false);
    expect(false).toBe(component.funcionario_info.active);
  });

  it('Testa o inserir novo funcionario pela quantidade de itens da lista', () => {
    let funcionario_info = {};

    component.funcionario_info = funcionario_info;

    component.click_add();
    const qtd = Number(localStorage.getItem('quantidade_funcionarios'));
    expect(1).toEqual(qtd);
  });

  it('Teste de cadastro do novo funcionario conferindo a lista total de funcionario', () => {
    let grainInformation = {
      id: 0,
      farm: 'Fazenda teste',
      name: 'Funcionario teste',
      CPF: '84164926401',
      telephone: '48984643162',
      mainFunction: 'função teste',
      active: true,
    };
    component.click_add();
    const qtd = Number(localStorage.getItem('quantidade_funcionarios'));
    expect(1).toEqual(qtd);
  });
});
