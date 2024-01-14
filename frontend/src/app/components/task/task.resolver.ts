import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { GenericResolver } from '../generics/generic.resolver';

@Injectable({
  providedIn: 'root'
})
export class TaskResolver extends GenericResolver<Task> {
  constructor(protected service: TaskService, protected router: Router) {
    super();
  }
}