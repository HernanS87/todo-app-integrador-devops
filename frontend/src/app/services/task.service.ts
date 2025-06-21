import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

const API_URL = (window as any).__env?.apiUrl;

@Injectable({ providedIn: 'root' })
export class TaskService {
  private api = `${API_URL}/api/tasks`;
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]>         { return this.http.get<Task[]>(this.api); }
  addTask(t: Partial<Task>): Observable<Task>    { return this.http.post<Task>(this.api, t); }
  updateTask(t: Task): Observable<Task> { return this.http.put<Task>(`${this.api}/${t.id}`, t); }
  deleteTask(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
