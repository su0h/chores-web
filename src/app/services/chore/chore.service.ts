import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskAssignment } from '../../models/task.assignment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
  private _taskAssignments: Array<TaskAssignment>;
  private tasksApi = "http://192.168.1.92:8080/api/v1.0/task-assignments"

  // For "notifying" components that there is an update with the taskAssignment list
  // Reference: https://stackoverflow.com/questions/38836674/how-do-i-re-render-a-component-manually
  public areTasksChanged: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient
  ) {
    this.areTasksChanged = new BehaviorSubject<boolean>(false);
    this._taskAssignments = [];
    this.getTaskAssignments();
  }

  public get taskAssignments(): Array<TaskAssignment> {
    return this._taskAssignments;
  }

  private getTaskAssignments(): void {
    this.http.get<any>(this.tasksApi)
    .subscribe(response => {
        this.parseTaskAssignmentResponse(response);
      }
    );
  }

  public unshiftTaskAssignments(): void {
    this.http.post(this.tasksApi + "/unshift", {})
    .subscribe(response => {
      // Empty the current list first
      this._taskAssignments = [];

      // Update it
      this.parseTaskAssignmentResponse(response);
      this.areTasksChanged.next(true);
    });
  }

  // Since taskAssignments are found inside the response JSON
  private parseTaskAssignmentResponse(response: any): void {
    response.taskAssignments.map((taskAssignment: any) => {
      this._taskAssignments.push(
        new TaskAssignment(
          taskAssignment.taskName, 
          taskAssignment.personName
        )
      );

    });

    console.log(this._taskAssignments);
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
