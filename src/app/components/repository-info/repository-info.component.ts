import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RepositoriesService } from './../../services/repositories.service';

import { Issue } from './../../models/issue';
import { Repository } from './../../models/repository';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.css'],
})
export class RepositoryInfoComponent implements OnInit {
  loading = false;
  issues: Issue[];
  repository: Repository;

  constructor(
    private repositoriesService: RepositoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap.get('repository');
    this.loading = true;
    this.repositoriesService.searchRepository(params).subscribe({
      next: (repository) => (this.repository = repository),
      error: (error) => console.error(error),
      complete: () => (this.loading = false),
    });
    this.repositoriesService.getIssues(params).subscribe({
      next: (issue) => (this.issues = issue),
      error: (error) => console.error(error),
      complete: () => (this.loading = false),
    });
  }
}
