import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Repository } from './../models/repository';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  url = `https://api.github.com`;

  constructor(private httpClient: HttpClient) {}

  searchRepository(repository: string): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(`${this.url}/repos/${repository}`);
  }
}
