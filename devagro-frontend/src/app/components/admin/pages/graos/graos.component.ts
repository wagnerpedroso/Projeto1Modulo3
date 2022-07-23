import { Component, Input, OnInit } from '@angular/core';
import { Object } from './grain';
import { GRAIN } from './mock-grao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.component.html',
  styleUrls: ['./graos.component.css'],
})
export class GraosComponent implements OnInit {
  @Input() public titulo: string = 'Grãos';

  grain = GRAIN;
  grainObjetos: Array<Object> = [];

  mostrar: boolean = false;

  selectedGrain?: Object;
  onSelect(grain: Object): void {
    this.selectedGrain = grain;
    this.mostrar = true;
  }

  key: any = 'grainList';
  myItem!: any | null;
  storeGrain() {
    localStorage.setItem(this.key, JSON.stringify(this.grainObjetos));
    this.grainObjetos = JSON.parse(String(localStorage.getItem('grainList')));
    this.mostrar = false;
  }

  SpecificDelete(grain: Object) {
    this.grain = this.grainObjetos.filter((h) => h !== grain);
    localStorage.setItem(this.key, JSON.stringify(this.grain));
    this.grainObjetos = JSON.parse(String(localStorage.getItem('grainList')));
    this.mostrar = false;
  }

  deleteGrain() {
    localStorage.clear();
    this.grainObjetos = JSON.parse(String(localStorage.getItem('grainList')));
    this.mostrar = false;
  }

  refreshPage() {
    window.location.reload();
  }

  constructor(private router: Router) {
    this.grain = JSON.parse(String(localStorage.getItem('grainList')));
    localStorage.setItem(this.key, JSON.stringify(this.grain));
    if (this.grain != null) {
      for (let i = 0; i < this.grain.length; i++) {
        if (typeof this.grain[i] === 'string') {
          this.grainObjetos.push(JSON.parse(String(this.grain[i])));
        } else {
          this.grainObjetos.push(this.grain[i]);
        }
      }
    }
  }

  btnClick = () => {
    this.router.navigateByUrl('/admin/grao-cadastro');
  };

  ngOnInit(): void {}
}
