import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RepositoriesService } from './repositories.service';

import { Repository } from '../models/repository';
import { Issue } from '../models/issue';
import { HttpErrorResponse } from '@angular/common/http';

describe('Repositories', () => {
  let repositoriesService: RepositoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepositoriesService],
    });

    repositoriesService = TestBed.inject(RepositoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be instanced', () => {
    expect(repositoriesService).toBeTruthy();
  });

  it('should be able to search repository by value', () => {
    const mockRepository: Repository = {
      description: 'description',
      forks_count: 123,
      full_name: 'repo name',
      open_issues_count: 89,
      owner: {
        avatar_url: 'myurl',
        login: 'myLogin',
      },
      stargazers_count: 2,
    };

    const searchValue = 'repositoryName';

    repositoriesService.searchRepository(searchValue).subscribe({
      next: (response) => {
        expect(response).toEqual(mockRepository);
      },
    });

    const fakeRequest = httpMock.expectOne((response) => {
      return response.method === 'GET';
    });

    fakeRequest.flush(mockRepository);

    httpMock.verify();
  });

  it('should be able to search issue by value', () => {
    const mockIssue: Issue[] = [
      {
        id: 1,
        title: 'title',
        html_url: 'issue url',
        user: {
          login: 'login',
        },
      },
    ];

    const searchIssue = 'issue title';

    repositoriesService.getIssues(searchIssue).subscribe({
      next: (response) => {
        expect(response).toEqual(mockIssue);
      },
    });

    const fakeRequest = httpMock.expectOne((request) => {
      return request.method === 'GET';
    });

    fakeRequest.flush(mockIssue);

    httpMock.verify();
  });

  it('should not be searching for a repository that is invalid', () => {
    const mockResponse = { documentation_ulr: '', message: 'Not Found' };

    const repositorySearch = 'aush1¹/aush2ia82';

    repositoriesService.searchRepository(repositorySearch).subscribe({
      next: (response) => fail('fail'),
      error: (errorReponse: HttpErrorResponse) => {
        expect(errorReponse.statusText).toContain(mockResponse.message);
        expect(errorReponse.status).toEqual(404);
      },
    });

    const fakeResponse = httpMock.expectOne((response) => {
      return response.method === 'GET';
    });

    fakeResponse.flush('404', {
      status: 404,
      statusText: mockResponse.message,
    });

    httpMock.verify();
  });
});
