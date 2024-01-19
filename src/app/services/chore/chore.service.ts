import { Injectable, OnInit } from '@angular/core';
import { TaskAssignmentService } from '../task-service/task.service';
import { TaskAssignment } from '../../models/task.assignment';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
  // private _assignees: Array<String> = ["Person 1", "Person 2", "Person 3"];
  // private _tasks: Array<String> = ["Hain", "Ligpit", "Hugas"];
  private _taskAssignments: Array<TaskAssignment>;

  constructor(private taskAssignmentService: TaskAssignmentService) {
    this._taskAssignments = [];
    this.taskAssignmentService.getTaskAssignments()
    .subscribe(response => {
        response.taskAssignments.map((taskAssignment: any) => {
          this._taskAssignments.push(
            new TaskAssignment(
              taskAssignment.taskName, 
              taskAssignment.personName
            )
          );
        });

        // this._taskAssignments = response.taskAssignments;
        console.log(response);
        console.log(this._taskAssignments);
      }
    );
  }

  public getTaskAssignments(): Array<TaskAssignment> {
    return this._taskAssignments;
  }

  // public get assignees(): Array<String> {
  //   return [...this._assignees];
  // }

  // public get tasks(): Array<String> {
  //   return [...this._tasks];
  // }

  // Archived; backend will now handle this
  // private rotateArray(arr: Array<String>, positions: number): Array<String> {
  //   const length = arr.length;

  //   // Ensure a valid number of positions
  //   positions = positions % length;
  
  //   // Handle negative positions
  //   if (positions < 0) {
  //     positions = length + positions;
  //   }
  
  //   // Rotate the array
  //   const rotatedArray = [...arr.slice(-positions), ...arr.slice(0, length - positions)];
  
  //   return rotatedArray;
  // }
}
