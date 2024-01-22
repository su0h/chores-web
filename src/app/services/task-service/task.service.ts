import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskAssignment } from '../../models/task.assignment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskAssignmentService {

  private tasksApi = "http://192.168.1.92:8080/api/v1.0/task-assignments"

  constructor(private http: HttpClient) { }

  public getTaskAssignments(): Observable<any> {
    return this.http.get(this.tasksApi);
  }
}
