import { Component, Input, OnInit } from '@angular/core';
import { ChoreService } from '../services/chore/chore.service';
import { TaskAssignment } from '../models/task.assignment';
import { faSink, faUtensils, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-chores-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './chores-container.component.html',
  styleUrl: './chores-container.component.css'
})
export class ChoresContainerComponent implements OnInit {
  protected taskAssignments: Array<TaskAssignment>;
  @Input() header: String;
  // protected containerColors: Array<String>;

  constructor(private choreService: ChoreService) {
    this.taskAssignments = [];
    this.header = '';
    // this.containerColors = [];
  }

  ngOnInit(): void {
    this.taskAssignments = this.choreService.taskAssignments;
    
    // Whenever there are updates to the taskAssignment list
    this.choreService.areTasksChanged.subscribe(value => {
      if (value) {
        // Empty the current list first
        this.taskAssignments = [];

        // Then retrieve the updated list
        this.choreService.taskAssignments.forEach(taskAssignment => {
          this.taskAssignments.push(taskAssignment);
        })
      }
    })
    // this.containerColors = [
    //   "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", 
    //   "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
    // ];
  }

  protected getClass(choreName: String): string {
    // Sample Target Class: chore-text col-span-2 rounded-2xl shadow-md mb-3 p-6 bg-pink-200 hover:bg-pink-300
    let baseClass: string = "chore-text col-span-2 rounded-2xl shadow-md mb-3 p-6";
    
    switch (choreName.toLowerCase()) {
      case "hain":
        baseClass += " bg-green-200 hover:bg-green-300";
        break;
      case "ligpit":
        baseClass += " bg-red-200 hover:bg-red-300";
        break;
      case "hugas":
        baseClass += " bg-sky-200 hover:bg-sky-300";
        break;
      default:
        baseClass += " bg-stone-200 hover:bg-stone-300";
    }

    return baseClass;
  }

  protected getIcon(choreName: String): any {
    switch (choreName.toLowerCase()) {
      case "hain":
        return faUtensils;
      case "ligpit":
        return faAlignJustify;
      case "hugas":
        return faSink;
      default:
        return null;
    }
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
