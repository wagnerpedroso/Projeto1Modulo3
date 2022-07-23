import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-grao-cadastro',
  templateUrl: './grao-cadastro.component.html',
  styleUrls: ['./grao-cadastro.component.css'],
})
export class GraoCadastroComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() public titulo: string = 'Cadastro Grãos';

  ngOnInit(): void {
    this.grainStorageList =
      JSON.parse(String(localStorage.getItem('grainlist'))) || [];
    localStorage.setItem('grainlist', JSON.stringify(this.grainStorageList));
    console.log(this.grainStorageList);
  }

  grainStorageList: Array<Object> = [];

  //Grão Lista
  grainInformation: any = {
    id: 0,
    name: '',
    farm: '',
    harvest: '',
    information: '',
  };

  alter_name(name: string): void {
    this.grainInformation.name = name;
  }

  alter_farm(farm: string): void {
    this.grainInformation.farm = farm;
  }

  alter_harvest(harvest: string): void {
    this.grainInformation.harvest = harvest;
  }

  alter_information(information: string): void {
    this.grainInformation.information = information;
  }

  //Função cadastrar

  click_add(): void {
    let id = Number(localStorage.getItem('total_grain')) + 1;

    this.grainInformation.id = id;

    //Grão
    let grainInformation_json: string = JSON.stringify(this.grainInformation);

    const grainList = localStorage.getItem('grainList');
    this.grainStorageList =
      grainList && grainList !== 'null' ? JSON.parse(grainList) : [];

    //Inserindo O Objeto Grão á lista
    this.grainStorageList.push(this.grainInformation);

    //Referenciando o LocaStorage á lista
    localStorage.setItem('grainList', JSON.stringify(this.grainStorageList));
    console.log(this.grainStorageList);

    ///Cria LocalStorage e o grão referenciados
    localStorage.setItem('grain_' + String(id), grainInformation_json);

    localStorage.setItem('total_grain', String(id));
  }

  pegar_grain(id: Number): any {
    return JSON.parse(String(localStorage.getItem('grain_' + String(id))));
  }

  btnClick = () => {
    this.router.navigateByUrl('/admin/graos');
  };
}
