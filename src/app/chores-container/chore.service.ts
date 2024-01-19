import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
  private _assignees: Array<String> = ["Person 1", "Person 2", "Person 3"];
  private _tasks: Array<String> = ["Hain", "Ligpit", "Hugas"];

  constructor() { 
    const day_num = 1;
    // TODO: initialize _assignees and _tasks with HttpService
    // this._assignees = this.rotateArray(this._assignees, day_num);
    console.log(this._assignees);
  }

  public get assignees(): Array<String> {
    return [...this._assignees];
  }

  public get tasks(): Array<String> {
    return [...this._tasks];
  }

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
