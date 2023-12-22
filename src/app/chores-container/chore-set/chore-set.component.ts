import { Component, OnInit, Input } from '@angular/core';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-set',
  standalone: true,
  imports: [],
  templateUrl: './chore-set.component.html',
  styleUrl: './chore-set.component.css'
})
export class ChoreSetComponent implements OnInit {
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
