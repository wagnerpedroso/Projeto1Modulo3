import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Rotas
import { AdminRoutingModule } from './admin-routing.module';

// Páginas
import { HomeComponent } from './pages/home/home.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { FazendasComponent } from './pages/fazendas/fazendas.component';
import { GraosComponent } from './pages/graos/graos.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TemplateBodyComponent } from '../template-body/template-body.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FazendaCadastroComponent } from './pages/fazendas/fazenda-cadastro/fazenda-cadastro.component';
import { GraoCadastroComponent } from './pages/grao-cadastro/grao-cadastro.component';
import { FuncionarioCadastroComponent } from './pages/funcionarios/funcionario-cadastro/funcionario-cadastro.component';

import { PropriedadesCadastradasComponent } from './pages/fazendas/propriedades-cadastradas/propriedades-cadastradas.component';
import { ChartsComponent } from './pages/dashboard/charts/charts.component';
import { EmpresaCadastroComponent } from './pages/empresa-cadastro/empresa-cadastro.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    HomeComponent,
    FuncionariosComponent,
    FazendasComponent,
    GraosComponent,
    SidenavComponent,
    TemplateBodyComponent,
    DashboardComponent,
    FazendaCadastroComponent,
    FuncionarioCadastroComponent,
    GraoCadastroComponent,
    PropriedadesCadastradasComponent,
    ChartsComponent,
    EmpresaCadastroComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    ButtonModule,
    TableModule,
  ],
})
export class AdminModule {}
