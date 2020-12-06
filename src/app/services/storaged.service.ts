import { Repository } from './../models/repository';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoragedService {
  changeRepositoryValue = new EventEmitter<Repository[]>();

  constructor() {}

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data as []));
    this.changeRepositoryValue.emit(data);
  }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
