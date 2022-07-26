import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rotas
import { AuthRoutingModule } from './auth-routing.module';

// Páginas
import { SignComponent } from './pages/sign/sign.component';

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
