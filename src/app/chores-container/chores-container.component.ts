import { Component, Input, OnInit } from '@angular/core';
import { ChoreService } from './chore.service';

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
  // protected containerColors: Array<String>;

  constructor(protected choreService: ChoreService) {
    this.assignees = [];
    this.tasks = [];
    this.header = '';
    // this.containerColors = [];
  }

  ngOnInit(): void {
    this.assignees = this.choreService.assignees;
    this.tasks = this.choreService.tasks;
    // this.containerColors = [
    //   "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", 
    //   "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
    // ];
  }

  // NOTE: Removed these for now (since pink is the temporary go-to color)
  // getColorRandomizedClass(): String {
  //   let color: String | undefined;
  //   if (this.containerColors.length > 0) {
  //     color = this.containerColors.pop();
  //   } else {
  //     this.containerColors = [
  //       "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", 
  //       "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
  //     ];
  //     color = this.containerColors.pop();
  //   }

  //   // return `grid grid-cols-2 text-center rounded-2xl shadow-md mb-3 p-6 bg-red-200 hover:bg-red-300`
  //   return `grid grid-cols-2 text-center rounded-2xl shadow-md mb-3 p-6 bg-${color}-200 hover:bg-${color}-300`
  // }
}
