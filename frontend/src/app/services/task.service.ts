import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { ICrudService } from './ICrudService';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements ICrudService<Task> {

  basePath = '/api/task/'

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.basePath);
  }

  fetchById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.basePath}${id}/`);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.basePath}`, task);
  }

  update(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.basePath}${id}/`, task);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}${id}/`);
  }
}
