import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from "../task-form/task-form.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editing?: Task;

  constructor(private svc: TaskService) {}

  ngOnInit() { this.load(); }
  load() { this.svc.getTasks().subscribe(ts => this.tasks = ts); }

  toggle(t: Task) {
    this.svc.updateTask(t).subscribe();
  }

  edit(t: Task) {
    this.editing = { ...t };
  }

  delete(id: number) {
    this.svc.deleteTask(id).subscribe(() => this.load());
  }

  onSaved() {
    this.editing = undefined;
    this.load();
  }
}
