import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propriedades-cadastradas',
  templateUrl: './propriedades-cadastradas.component.html',
  styleUrls: ['./propriedades-cadastradas.component.css'],
})
export class PropriedadesCadastradasComponent implements OnInit {
  constructor() {}

  farmList: any = [];

  ngOnInit(): void {
    this.farmList = JSON.parse(String(localStorage.getItem('farmList')));
  }

  nomeCrescente(): void {
    sort(this.farmList, 'name', 'id', 'grain', 'last_harvest', 'localization');
    console.log(this.farmList);
  }

  nomeDecrescente(): void {
    sort(this.farmList, '-name', 'id', 'grain', 'last_harvest', 'localization');
    console.log(this.farmList);
  }

  colheitaCrescente(): void {
    sort(this.farmList, 'last_harvest', 'id', 'name', 'grain', 'localization');
    console.log(this.farmList);
  }

  colheitaDecrescente(): void {
    sort(this.farmList, '-last_harvest', 'id', 'name', 'grain', 'localization');
    console.log(this.farmList);
  }
}

// Treixo abaixo retirado da resposta apresentada pelo usuário Inigo no forum StackOverflow no seguinte link:
// https://stackoverflow.com/a/68279093

type sortArg<T> = keyof T | `-${string & keyof T}`;

export function byPropertiesOf<T extends object>(sortBy: Array<sortArg<T>>) {
  function compareByProperty(arg: sortArg<T>) {
    let key: keyof T;
    let sortOrder = 1;
    if (typeof arg === 'string' && arg.startsWith('-')) {
      sortOrder = -1;
      // Typescript is not yet smart enough to infer that substring is keyof T
      key = arg.substr(1) as keyof T;
    } else {
      // Likewise it is not yet smart enough to infer that arg is not keyof T
      key = arg as keyof T;
    }
    return function (a: T, b: T) {
      const result = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;

      return result * sortOrder;
    };
  }

  return function (obj1: T, obj2: T) {
    let i = 0;
    let result = 0;
    const numberOfProperties = sortBy?.length;
    while (result === 0 && i < numberOfProperties) {
      result = compareByProperty(sortBy[i])(obj1, obj2);
      i++;
    }

    return result;
  };
}

export function sort<T extends object>(arr: T[], ...sortBy: Array<sortArg<T>>) {
  arr.sort(byPropertiesOf<T>(sortBy));
}
