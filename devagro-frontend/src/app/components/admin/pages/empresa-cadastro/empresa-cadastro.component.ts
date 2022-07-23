import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css'],
})
export class EmpresaCadastroComponent implements OnInit {
  //a lista de objetos
  lista: Array<Object> = [];

  constructor() {}

  ngOnInit(): void {
    this.listaCadastroArmazenado =
      JSON.parse(String(localStorage.getItem('listadecadastros'))) || [];
    localStorage.setItem(
      'listadecadastros',
      JSON.stringify(this.listaCadastroArmazenado)
    );
    console.log(this.listaCadastroArmazenado);
  }

  valor: any;

  listaCadastroArmazenado: Array<Object> = [];

  //Cadastros de empresas novas
  cadastro_empresa_info: any = {
    id: 1,
    companyName: '',
    CNPJ: '',
    companyAddress: '',
    companyEmail: '',
    companyPhone: '',
    companyPassword: '',
    companyPassword_confirm: '',
  };

  //salvar as coisas
  save_companyName(companyName: string): void {
    this.cadastro_empresa_info.companyName = companyName;
  }

  save_CNPJ(CNPJ: string): void {
    this.cadastro_empresa_info.CNPJ = CNPJ;
  }

  save_companyAddress(companyAddress: string): void {
    this.cadastro_empresa_info.companyAddress = companyAddress;
  }

  save_companyEmail(companyEmail: string): void {
    this.cadastro_empresa_info.companyEmail = companyEmail;
  }

  save_companyPhone(companyPhone: string): void {
    this.cadastro_empresa_info.companyPhone = companyPhone;
  }

  save_companyPassword(companyPassword: string): void {
    this.cadastro_empresa_info.companyPassword = companyPassword;
  }

  save_companyPassword_confirm(companyPassword_confirm: string): void {
    this.cadastro_empresa_info.companyPassword_confirm =
      companyPassword_confirm;
  }

  // função para cadastrar
  click_log_in(): void {
    let id = Number(localStorage.getItem('quantidade_empresas_cadastradas'));
    if (id == null) {
      this.cadastro_empresa_info.id = 1;
    } else {
      this.cadastro_empresa_info.id = id;
    }

    //empresa
    let cadastro_empresa_json: string = JSON.stringify(
      this.cadastro_empresa_info
    );

    //Inserindo O Objeto Grão á lista
    this.listaCadastroArmazenado.push(cadastro_empresa_json);

    //Referenciando o LocaStorage á lista
    localStorage.setItem(
      'listaCadastroEmpresa',
      JSON.stringify(this.listaCadastroArmazenado)
    );
    console.log(this.listaCadastroArmazenado);

    ///Cria LocalStorage e o grão referenciados
    localStorage.setItem('empresa_' + String(id), cadastro_empresa_json);

    localStorage.setItem('quantidade_empresas_cadastradas', String(id + 1));

    ///Evento
    console.log(cadastro_empresa_json);
    console.log(this.cadastro_empresa_info);
  }

  pegar_empresa(id: Number): any {
    return JSON.parse(String(localStorage.getItem('empresa_' + String(id))));
  }
}
