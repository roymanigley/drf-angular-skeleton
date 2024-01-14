import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { GenericDeleteComponent } from '../../generics/generic-delete.component';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss']
})
export class TaskDeleteComponent extends GenericDeleteComponent<Task> {

  constructor(
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected service: TaskService) {
      super();
  }
}
