import { Component, Input, OnInit } from '@angular/core';
import { ChoreService } from '../services/chore/chore.service';
import { TaskAssignment } from '../models/task.assignment';

@Component({
  selector: 'app-chores-container',
  standalone: true,
  imports: [],
  templateUrl: './chores-container.component.html',
  styleUrl: './chores-container.component.css'
})
export class ChoresContainerComponent implements OnInit {
  protected taskAssignments: Array<TaskAssignment>;
  @Input() header: String;

  constructor(private choreService: ChoreService) {
    this.taskAssignments = [];
    this.header = '';
  }

  ngOnInit(): void {
    this.taskAssignments = this.choreService.getTaskAssignments();
  }
}
