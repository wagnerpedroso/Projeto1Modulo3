import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css'],
})
export class FuncionarioCadastroComponent implements OnInit {
  lista: Array<Object> = [];
  router: any;

  constructor() {}

  ngOnInit(): void {
    ///preenche a lista  com os objetos armazenado no localStorage sempre que a tela inicia

    this.listaFuncionariosArmazenamento =
      JSON.parse(String(localStorage.getItem('listaFuncionarios'))) || [];
    localStorage.setItem(
      'listaFuncionarios',
      JSON.stringify(this.listaFuncionariosArmazenamento)
    ); //Array( JSON.parse(String(localStorage.getItem("listaFuncionarios"))))
    console.log(this.listaFuncionariosArmazenamento);
  }

  listaFuncionariosArmazenamento: Array<Object> = []; //|| JSON.parse(String(localStorage.getItem("listaFuncionarios")))

  funcionario_info: any = {
    id: 0,
    name: '',
    farm: '',
    CPF: '',
    telephone: '',
    mainFunction: '',
    active: '',
  };

  alter_name(name: string): void {
    this.funcionario_info.name = name;
  }

  alter_farm(farm: string): void {
    this.funcionario_info.farm = farm;
  }

  alter_CPF(CPF: string): void {
    this.funcionario_info.CPF = CPF;
  }

  alter_telephone(telephone: string): void {
    this.funcionario_info.telephone = telephone;
  }

  alter_mainFunction(mainFunction: string): void {
    this.funcionario_info.mainFunction = mainFunction;
  }

  alter_active(active: boolean): void {
    this.funcionario_info.active = active;
  }

  click_add(): void {
    let id = Number(localStorage.getItem('quantidade_funcionarios'));
    if (id == null) {
      this.funcionario_info.id = 0;
    } else {
      this.funcionario_info.id = id;
    }
    //STRINGFA O OBJ FUNCIONARIO
    let funcionario_info_json: string = JSON.stringify(this.funcionario_info);
    //ADD O OBJETO A LISTA
    this.listaFuncionariosArmazenamento.push(funcionario_info_json);
    //REFERENCIA O LOCAL STORAGE A LISTA
    localStorage.setItem(
      'listaFuncionarios',
      JSON.stringify(this.listaFuncionariosArmazenamento)
    );
    console.log(this.listaFuncionariosArmazenamento);

    ///CRIA FUNCIONARIO E LOCALSTORAGE REFERENTE
    localStorage.setItem('funcionario_' + String(id), funcionario_info_json);

    localStorage.setItem('quantidade_funcionarios', String(id + 1));
    ///EVENT EMITTER
    console.log(funcionario_info_json);
    console.log(this.funcionario_info);
  }

  pegar_funcionario(id: Number): any {
    return JSON.parse(
      String(localStorage.getItem('funcionario_' + String(id)))
    );
  }
}
