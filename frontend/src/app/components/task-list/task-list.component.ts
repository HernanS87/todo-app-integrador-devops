import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editing?: Task;

  ngOnInit() {
    // Datos simulados para desarrollo
    this.tasks = [
      { id: 1, title: 'Tarea de ejemplo 1', completed: false },
      { id: 2, title: 'Tarea de ejemplo 2', completed: true },
    ];
  }

  toggle(t: Task) {
    console.log('Toggle', t.completed);
  }

  edit(t: Task) {
    this.editing = { ...t };
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  onSaved(task: Task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);

    if (index !== -1) {
      this.tasks[index] = task; // actualizar tarea existente
    } else {
      this.tasks.push(task); // agregar nueva
    }

    this.editing = undefined;
  }
}
