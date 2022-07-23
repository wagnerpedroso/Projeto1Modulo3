import { Component, Input, OnInit, TRANSLATIONS } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  qtdefarms = Number(localStorage.getItem('quantidade_farms'));
  aprovaCadastro: boolean = this.qtdefarms > 0 ? true : false;

  @Input() public titulo: string = 'Funcionários';

  name: string = '';
  id: Number = 0;
  farm: string = '';
  CPF: string = '';
  telephone: string = '';
  mainFunction: string = '';
  active: string = '';
  router: any;

  constructor() {}

  localStorageView: Array<string> = Object(
    JSON.parse(String(localStorage.getItem('listaFuncionarios')))
  );
  localStorageViewObject: Array<Object> = [];
  listaObj: Array<object> = [];
  listname: Array<any> = [];
  listfarm: Array<any> = [];
  listFuncao: Array<any> = [];
  listactive: Array<any> = [];

  ngOnInit(): void {
    console.log(this.localStorageView);

    this.localStorageView.forEach((element: string) => {
      console.log(JSON.parse(String(element)));
      this.localStorageViewObject.push(JSON.parse(element));
      console.log(this.localStorageViewObject);
      console.log(element);
    });
  }

  peganame(): any {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'name') {
          console.log(element[1]);
          this.name = element[1];
          console.log(this.name);
          this.listname.push(this.name);
          console.log(this.listname);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }
  pegafarm() {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'farm') {
          console.log(element[1]);
          this.farm = element[1];
          console.log(this.farm);
          this.listfarm.push(this.farm);
          console.log(this.listfarm);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }

  pegaFuncao() {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'funcao_princila') {
          console.log(element[1]);
          this.mainFunction = element[1];
          console.log(this.mainFunction);
          this.listFuncao.push(this.mainFunction);
          console.log(this.listFuncao);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }

  pegatelephone() {}
  pegaFUncaoPrincipal() {}
  pegaAtividade() {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'active') {
          console.log(element[1]);
          this.active = element[1];

          if (this.active == '') {
            this.active = 'não';
          } else {
            this.active = 'sim';
          }
          console.log(this.active);
          this.listactive.push(this.active);
          console.log(this.listactive);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }

  addFuncionarios() {
    // product.preventDefault();

    //CRIA UM ELEMENTO TR E ATRIBUI UMA CLASSE A ELE
    const tr = document.createElement('tr');
    tr.classList.add('tr');

    ///BUSCA O ELEMENTO TABLE VIA DOM
    //DEFINE O ELEMENTO TR CRAIDO ANTERIORMENTE COMO ELEMENTO FILHO DE TABLE
    const table = document.querySelector('table');
    table?.appendChild(tr);

    ///CRIAÇÃO DOS ELEMENTOS TD E CONFIGURAÇÃO DOS nameS DAS CLASSES
    const td2 = document.createElement('td');
    td2.classList.add('td2');
    const td1 = document.createElement('td');
    td1.classList.add('td1');

    const td3 = document.createElement('td');
    td3.classList.add('td3');
    const td4 = document.createElement('td');
    td4.classList.add('td4');
    const td5 = document.createElement('td');
    td5.classList.add('td5');

    //////ASSOCIA TODAS AS "TD" COMO FILHAS DE "TR"

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    //MANIPULA ELEMENTOS DENTRO DE "TD1" (INSERE 2 DIVS)
    const divImg = document.createElement('div');
    td1.appendChild(divImg);
    //Adiciona tag <img> dentro de "divImg"
    const img = document.createElement('img');
    divImg.appendChild(img);

    //ADICIONA DIV QUE CONTERÁ name E EMAIL
    const divParagrafo = document.createElement('div');
    td1.appendChild(divParagrafo);
    //ADICIONA OS PARAGRAFOS QUE CONTERAM name E EMAIL NA "DIVpARAGRAFO"
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    divParagrafo.appendChild(p1);
    this.peganame();
    p1.classList.add('id:');
    console.log(p1.className);
    //p1.className=this.name

    divParagrafo.appendChild(p2);

    // p2.innerText="xxxxxxxxx"

    //MANIPULA ELEMENTOS DENTRO DE "TD2"
  }

  constroiLsitaDeObj() {
    this.localStorageView.forEach((element) => {
      console.log(JSON.parse(String(element)));
      this.localStorageViewObject.push(JSON.parse(String(element)));
      console.log(this.localStorageViewObject);
      console.log(element);
      console.log(element.isPrototypeOf);
    });
  }
  btnClick = () => {
    this.router.navigateByUrl('/admin/funcionarios/cadastro');
  };
}
