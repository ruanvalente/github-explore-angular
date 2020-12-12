import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { Issue } from './../models/issue';
import { Repository } from './../models/repository';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  url = environment.api;

  constructor(private httpClient: HttpClient) {}

  searchRepository(repository: string): Observable<Repository> {
    return this.httpClient.get<Repository>(`${this.url}/repos/${repository}`);
  }

  getIssues(param: string): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(`${this.url}/repos/${param}/issues`);
  }
}
