import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  @Input() task?: Task;
  @Output() saved = new EventEmitter<Task>();
  title = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      this.title = this.task?.title ?? '';
    }
  }

  save() {
    const data: Task = {
      id: this.task?.id ?? Date.now(), // usar Date.now() como ID simulado
      title: this.title,
      completed: this.task?.completed ?? false
    };

    console.log('Emitiendo tarea:', data);
    this.saved.emit(data);

    this.title = '';
  }
}
