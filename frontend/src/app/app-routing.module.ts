import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskDetailComponent } from './components/task/task-detail/task-detail.component';
import { TaskResolver } from './components/task/task.resolver';
import { TaskEditComponent } from './components/task/task-edit/task-edit.component';
import { TaskDeleteComponent } from './components/task/task-delete/task-delete.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { genericGuard } from './components/generics/generic.guard';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/new', component: TaskEditComponent },
  { path: 'tasks/:id', component: TaskDetailComponent, resolve: { data: TaskResolver} },
  { path: 'tasks/:id/edit', component: TaskEditComponent, resolve: { data: TaskResolver}, canDeactivate: [genericGuard] },
  { path: 'tasks/:id/delete', component: TaskDeleteComponent, resolve: { data: TaskResolver} },
  { path: '404', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
