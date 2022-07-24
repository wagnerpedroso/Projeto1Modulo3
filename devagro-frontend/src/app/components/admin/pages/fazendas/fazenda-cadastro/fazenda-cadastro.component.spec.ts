import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthRoutingModule } from 'src/app/core/components/auth/auth-routing.module';

import { FazendaCadastroComponent } from './fazenda-cadastro.component';

describe('FazendaCadastroComponent', () => {
  let component: FazendaCadastroComponent;
  let fixture: ComponentFixture<FazendaCadastroComponent>;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      declarations: [FazendaCadastroComponent],
      imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FazendaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testa o nome da fazenda', () => {
    let grainInformation = {
      id: 0,
      name: 'Fazenda teste',
      grain: '',
      last_harvest: '',
      localization: '',
    };
    component.alter_name('Fazenda teste');
    expect('Fazenda teste').toBe(component.farm_information.name);
  });

  it('Testa o nome da grão que produz', () => {
    let grainInformation = {
      id: 0,
      name: '',
      grain: 'Grão teste',
      last_harvest: '',
      localization: '',
    };
    component.alter_grain('Grão teste');
    expect('Grão teste').toBe(component.farm_information.grain);
  });

  it('Testa a data da Ultima colheita', () => {
    let grainInformation = {
      id: 0,
      name: '',
      grain: '',
      last_harvest: '2022-10-10',
      localization: '',
    };
    component.alter_last_harvest('2022-10-10');
    expect('2022-10-10').toBe(component.farm_information.last_harvest);
  });

  it('Testa a localização', () => {
    let grainInformation = {
      id: 0,
      name: '',
      grain: '',
      last_harvest: '',
      localization: 'Localização teste',
    };
    component.alter_localization('Localização teste');
    expect('Localização teste').toBe(component.farm_information.localization);
  });

  it('Teste de cadastro de uma nova fazenda conferindo a lista total de fazendas', () => {
    let farm_information = {};

    component.farm_information = {};

    component.onSubmit();
    const qtd = Number(localStorage.getItem('quantidade_fazendas'));
    expect(1).toEqual(qtd);
  });

  it('Teste de cadastro de uma nova fazenda conferindo a lista total de fazendas', () => {
    let farm_information = {
      id: 0,
      name: 'Teste de fazenda',
      grain: 'Teste do grão',
      last_harvest: '2022-10-10',
      localization: 'Testa a localização',
    };
    component.onSubmit();
    const qtd = Number(localStorage.getItem('quantidade_fazendas'));
    expect(1).toEqual(qtd);
  });
});
