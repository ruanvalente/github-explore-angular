import { Component, Input, OnInit } from '@angular/core';

import { Repository } from './../../models/repository';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
})
export class RepositoryListComponent implements OnInit {
  @Input() repositories: Repository[] = [];
  constructor() {}

  ngOnInit(): void {}
}
