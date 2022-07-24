import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazenda-cadastro',
  templateUrl: './fazenda-cadastro.component.html',
  styleUrls: ['./fazenda-cadastro.component.css'],
})
export class FazendaCadastroComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() public titulo: string = 'Cadastro de fazendas';

  ngOnInit(): void {
    this.farmListstorage =
      JSON.parse(String(localStorage.getItem('farmList'))) || [];
    localStorage.setItem('farmList', JSON.stringify(this.farmListstorage));
    console.log(this.farmListstorage);
  }

  farmListstorage: Array<Object> = [];

  farm_information: any = {
    id: 0,
    name: '',
    grain: '',
    last_harvest: '',
    localization: '',
  };

  alter_name(name: string): void {
    this.farm_information.name = name;
  }

  alter_grain(grain: string): void {
    this.farm_information.grain = grain;
  }

  alter_last_harvest(last_harvest: string): void {
    this.farm_information.last_harvest = last_harvest;
  }

  alter_localization(localization: string): void {
    this.farm_information.localization = localization;
  }

  onSubmit() {
    let id = Number(localStorage.getItem('quantidade_fazendas'));
    if (id == null) {
      this.farm_information.id = 0;
    } else {
      this.farm_information.id = id;
    }
    //ADD O OBJETO A LISTA
    this.farmListstorage.push(this.farm_information);
    //REFERENCIA O LOCAL STORAGE A LISTA
    localStorage.setItem('farmList', JSON.stringify(this.farmListstorage));

    localStorage.setItem('quantidade_fazendas', String(id + 1));

    this.router.navigateByUrl('/admin/fazendas');
  }
}
