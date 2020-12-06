import { Component, OnInit } from '@angular/core';

import { Repository } from './../../models/repository';

import { StoragedService } from './../../services/storaged.service';
import { RepositoriesService } from './../../services/repositories.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  hasError = false;
  search = '';
  repositories: Repository[];
  loading = false;

  constructor(
    private repositoriesServices: RepositoriesService,
    private storagedService: StoragedService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.repositories =
        this.storagedService.getData('@GithubExploreAngular') || [];
      this.loading = false;
    }, 2000);

    this.storagedService.changeRepositoryValue.subscribe({
      next: (changeRepositoryValue) =>
        (this.repositories = changeRepositoryValue),
      error: (changeRepositoryValue) => console.error(changeRepositoryValue),
    });
  }

  searchRepository(): void {
    this.repositoriesServices.searchRepository(this.search).subscribe({
      next: (repository) => {
        this.storagedService.saveData('@GithubExploreAngular', [
          ...this.repositories,
          repository,
        ]);
        this.search = '';
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }
}
