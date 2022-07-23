import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-altera-cadastro',
  templateUrl: './funcionario-altera-cadastro.component.html',
  styleUrls: ['./funcionario-altera-cadastro.component.css'],
})
export class FuncionarioAlteraCadastroComponent implements OnInit {
  constructor() {}

  funcionarioInfo = {
    name: '',
    farm: '',
    funcaoPrincipal: '',
  };
  funcionario_info = {
    id: 0,
    name: '',
    farm: '',
    CPF: '',
    telephone: '',
    mainFunction: '',
    active: true,
  };

  funcionario_atualizado = {
    id: 0,
    name: '',
    farm: '',
    CPF: '',
    telephone: '',
    mainFunction: '',
    active: true,
  };

  name: string = '';
  id: number = 0;
  farm: string = '';
  CPF: string = '';
  telephone: string = '';
  funcaoPrincipal: string = '';
  active: boolean = true;

  ngOnInit(): void {
    this.constroiLsitaObjeto();
    console.log(this.listLocalStorage);
  }

  listLocalStorage: Array<String> = !Array.isArray(
    JSON.parse(localStorage.getItem('listaFuncionarios') as string)
  )
    ? []
    : Object(JSON.parse(String(localStorage.getItem('listaFuncionarios'))));
  listaLocalStorageObject: Array<Object> = [];
  listaAtualizadaComObjetoStringficado: string = '';
  listaString: Array<string> = [];
  valorname = document.querySelector('#input-name') as HTMLInputElement;
  valorfarm = document.querySelector('#input-farm') as HTMLInputElement;
  valorFuncao = document.querySelector(
    '#input-funcaoPrincipal'
  ) as HTMLInputElement;

  alteraInfo() {
    console.log('xxxxx');
    let valorname = document.querySelector('#input-name') as HTMLInputElement;
    let valorfarm = document.querySelector('#input-farm') as HTMLInputElement;
    let valorFuncao = document.querySelector(
      '#input-funcaoPrincipal'
    ) as HTMLInputElement;

    this.funcionarioInfo.name = valorname.value;
    this.funcionarioInfo.farm = valorfarm.value;
    this.funcionarioInfo.funcaoPrincipal = valorFuncao.value;
    console.log(this.funcionarioInfo.name);
    console.log(this.funcionarioInfo.farm);
    console.log(this.funcionarioInfo.funcaoPrincipal);

    this.encontraFuncionairo(
      this.funcionarioInfo.name,
      this.listaLocalStorageObject,
      this.funcionarioInfo.farm,
      this.funcionarioInfo.funcaoPrincipal
    );
    this.encontraEDeleta(
      this.funcionarioInfo.name,
      this.listaLocalStorageObject
    );
    this.setaNovoObj(this.listaLocalStorageObject);
    this.stringficaLsita(this.listaLocalStorageObject);
    this.setaLocalStorage();
  }
  encontraFuncionairo(
    name: string,
    list: Array<Object>,
    farm: string,
    funcao: string
  ) {
    // list.find(Element.arguments=="name")
    list.forEach((elemental) => {
      //this.constroiLsitaObjeto()
      Object.entries(elemental).forEach((element) => {
        if (element[1] == name) {
          console.log(elemental);
          Object.entries(elemental).forEach((element) => {
            if (element[0] == 'CPF') {
              console.log(element[1]);
              this.CPF = element[1];
              console.log(this.CPF);
            }
            if (element[0] == 'active') {
              console.log(element[1]);
              this.active = this.setaAtividade();
              console.log(this.active);
            }
            if (element[0] == 'telephone') {
              console.log(element[1]);
              this.telephone = element[1];
              console.log(this.telephone);
            }
            if (element[0] == 'id') {
              console.log(element[1]);
              this.id = element[1];
              console.log(this.id);
            }
            if (element[0] == 'mainFunction') {
              console.log(element[1]);
              this.funcaoPrincipal = this.funcionarioInfo.funcaoPrincipal;
              console.log(this.funcaoPrincipal);
            }
            if (element[0] == 'name') {
              console.log(element[1]);
              this.name = element[1];
              console.log(this.name);
            }
            if (element[0] == 'farm') {
              console.log(element[1]);
              this.farm = this.funcionarioInfo.farm;
              console.log(this.farm);
            }
          });
        }
      });
      console.log(Object.entries(elemental));
    });
  }

  encontraEDeleta(name: string, list: Array<Object>) {
    console.log(list);
    // list.find(Element.arguments=="name")
    list.forEach((elemental) => {
      //this.constroiLsitaObjeto()
      Object.entries(elemental).forEach((element) => {
        if (element[1] == name) {
          list.splice(this.id, 1);
          console.log(list);
        }
      });
    });
  }

  setaNovoObj(list: Array<Object>) {
    this.funcionario_atualizado.CPF = this.CPF;
    this.funcionario_atualizado.active = this.active;
    this.funcionario_atualizado.farm = this.farm;
    this.funcionario_atualizado.mainFunction = this.funcaoPrincipal;
    this.funcionario_atualizado.id = this.id;
    this.funcionario_atualizado.name = this.name;
    this.funcionario_atualizado.telephone = this.telephone;
    console.log(list);
    list.splice(this.funcionario_atualizado.id, 0, this.funcionario_atualizado);
    console.log(this.funcionario_atualizado);
    console.log(list);
  }

  stringficaLsita(list: Array<Object>) {
    list.forEach((element) => {
      var elementString = JSON.stringify(element);
      this.listaString.push(elementString);
    });
    console.log(this.listaString);
  }
  setaLocalStorage() {
    localStorage.setItem('listaFuncionarios', JSON.stringify(this.listaString));
  }

  constroiLsitaObjeto() {
    console.log('aki');
    console.log(this.listLocalStorage);
    this.listLocalStorage.forEach((element) => {
      console.log(JSON.parse(String(element)));
      this.listaLocalStorageObject.push(JSON.parse(String(element)));
      console.log(this.listaLocalStorageObject);
      console.log(element);
    });
  }

  setaAtividade() {
    var check = document.querySelector('#check') as HTMLInputElement;
    var checkNo = document.querySelector('#check-no') as HTMLInputElement;

    if (checkNo.checked == true) {
      this.active = false;
      return false;
    }
    if (check.checked == true) {
      return true;
    } else {
      return false;
    }
  }
}
