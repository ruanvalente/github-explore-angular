import { Component, Input, OnInit } from '@angular/core';
import { Issue } from './../../models/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  @Input() issues: Issue[] = [];
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
