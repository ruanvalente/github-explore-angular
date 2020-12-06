import { Component, OnInit } from '@angular/core';

import { Repository } from './../../models/repository';

import { StoragedService } from './../../services/storaged.service';
import { RepositoriesService } from './../../services/repositories.service';
import { ToastrNotifyService } from './../../services/toastr-notify.service';

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
    private storagedService: StoragedService,
    private toast: ToastrNotifyService
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
        this.toast.showSucess('Repositório adicionado com sucesso');
        this.search = '';
      },
      error: (error) => {
        this.toast.showError('Repositório não encontrado');
        this.search = '';
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 3600);
        console.error(error.message);
      },
    });
  }
}
