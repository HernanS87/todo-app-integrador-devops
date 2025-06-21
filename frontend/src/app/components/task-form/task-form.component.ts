import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  @Input() task?: Task;
  @Output() saved = new EventEmitter<void>();
  title = '';

  constructor(private svc: TaskService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      this.title = this.task?.title ?? '';
    }
  }


  save() {
    if (this.task) {
      this.svc.updateTask({ ...this.task, title: this.title }).subscribe(() => this.saved.emit());
    } else {
      this.svc.addTask({ title: this.title }).subscribe(() => this.saved.emit());
    }
    this.title = '';
  }
}
