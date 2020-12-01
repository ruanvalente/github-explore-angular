import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoragedService {
  constructor() {}

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data as []));
  }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
