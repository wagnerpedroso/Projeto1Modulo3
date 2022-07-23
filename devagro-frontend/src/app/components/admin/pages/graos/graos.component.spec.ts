import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthRoutingModule } from 'src/app/core/components/auth/auth-routing.module';

import { GraosComponent } from './graos.component';

describe('GraosComponent', () => {
  let component: GraosComponent;
  let fixture: ComponentFixture<GraosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraosComponent],
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
    fixture = TestBed.createComponent(GraosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
