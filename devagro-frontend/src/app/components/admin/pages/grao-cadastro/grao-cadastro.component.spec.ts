import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthRoutingModule } from 'src/app/core/components/auth/auth-routing.module';

import { GraoCadastroComponent } from './grao-cadastro.component';

describe('GraoCadastroComponent', () => {
  let component: GraoCadastroComponent;
  let fixture: ComponentFixture<GraoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraoCadastroComponent],
      imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();

    fixture = TestBed.createComponent(GraoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve alterar o nome do grão', () => {
    let grainInformation = {
      id: 0,
      name: 'arroz',
      farm: '',
      harvest: '',
      information: '',
    };
    component.alter_name('arroz');
    expect('arroz').toBe(component.grainInformation.name);
  });

  it('Deve alterar o nome da fazenda', () => {
    let grainInformation = {
      id: 0,
      name: '',
      farm: 'fazanda',
      harvest: '',
      information: '',
    };
    component.alter_farm('fazenda');
    expect('fazenda').toBe(component.grainInformation.farm);
  });

  it('Deve alterar o data da colheita', () => {
    let grainInformation = {
      id: 0,
      name: '',
      farm: '',
      harvest: '10/10/2022',
      information: '',
    };
    component.alter_harvest('10/10/2022');
    expect('10/10/2022').toBe(component.grainInformation.harvest);
  });

  it('Deve alterar a informação', () => {
    let grainInformation = {
      id: 0,
      name: '',
      farm: '',
      harvest: '',
      information: 'teste',
    };
    component.alter_information('teste');
    expect('teste').toBe(component.grainInformation.information);
  });

  it('Testa o inserir novo grão pela quantidade de itens da lista', () => {
    let grainInformation = {};

    component.grainInformation = grainInformation;

    component.click_add();
    const qtd = Number(localStorage.getItem('total_grain'));
    expect(1).toEqual(qtd);
  });

  it('Teste de cadastro do novo grão conferindo a lista total de graos', () => {
    let grainInformation = {
      id: 0,
      name: 'arroz',
      farm: 'fazendas',
      harvest: '10/10/2022',
      information: 'teste',
    };
    component.click_add();
    const qtd = Number(localStorage.getItem('total_grain'));
    expect(1).toEqual(qtd);
  });
});
