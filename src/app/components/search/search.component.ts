import { Component, OnInit } from '@angular/core';
import { Repository } from './../../models/repository';
import { RepositoriesService } from './../../services/repositories.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  hasError = false;
  search = '';
  repository: Repository;

  constructor(private repositoriesServices: RepositoriesService) {}

  ngOnInit(): void {
  }

  getRepository(): void {
    this.repositoriesServices.getRepository(this.search).subscribe({
      next: (repository) => {
        console.log(repository);
        this.repository = repository;
        this.search = '';
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }
}
