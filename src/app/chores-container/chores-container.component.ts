import { Component, Input, OnInit } from '@angular/core';
import { ChoreService } from '../services/chore/chore.service';

@Component({
  selector: 'app-chores-container',
  standalone: true,
  imports: [],
  templateUrl: './chores-container.component.html',
  styleUrl: './chores-container.component.css'
})
export class ChoresContainerComponent implements OnInit {
  protected assignees: Array<String>;
  protected tasks: Array<String>;
  @Input() header: String;

  constructor(protected choreService: ChoreService) {
    this.assignees = [];
    this.tasks = [];
    this.header = '';
  }

  ngOnInit(): void {
    this.assignees = this.choreService.assignees;
    this.tasks = this.choreService.tasks;
  }
}
