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
});
