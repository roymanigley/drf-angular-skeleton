import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { GenericDetailComponent } from '../../generics/generic-detail.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent extends GenericDetailComponent<Task> {

  constructor(protected route: ActivatedRoute) {
    super();
  }
}
