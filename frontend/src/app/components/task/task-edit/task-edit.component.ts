import { Component } from '@angular/core';
import { Status, Task } from 'src/app/models/task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericEditComponent } from '../../generics/generic-edit.component';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent extends GenericEditComponent<Task> {

  status = Object.values(Status);

  constructor(protected route: ActivatedRoute, protected service: TaskService) {
    super();
  }

  protected override initFormGroup(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(this.selectedRecord?.title, Validators.required),
      description: new FormControl(this.selectedRecord?.description, Validators.required),
      status: new FormControl(this.selectedRecord?.status ?? Status.NOT_STARTED, [Validators.required]),
    });
  }
}
